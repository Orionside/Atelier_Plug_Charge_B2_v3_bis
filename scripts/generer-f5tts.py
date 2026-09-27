#!/usr/bin/env python3
"""Préparer des MP3 F5-TTS, sans incorporer de voix de référence au dépôt.

Utiliser uniquement une voix dont le clonage hors de sa plateforme est autorisé.
Les sorties sont des candidats non validés et ne sont pas branchées sur le site.
"""

import argparse
import hashlib
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

import numpy as np
import soundfile as sf


ROOT = Path(__file__).resolve().parents[1]
CATALOGUE = ROOT / "audio/catalogue-elevenlabs-v2.json"
OUTPUT = ROOT / "audio/neuronal F5-TTS"
MANIFEST = OUTPUT / "manifest.json"
BREAK = re.compile(r'<break time="([0-9]+(?:\.[0-9]+)?)s"\s*/>')


def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def clips():
    data = json.loads(CATALOGUE.read_text(encoding="utf-8"))
    return [e for e in data["entries"] if e["generation"] == "candidat_apres_ecoute_humaine"]


def decode_segments(text):
    """Les pauses ElevenLabs ne sont pas interprétées par F5 : les insérer après synthèse."""
    parts = BREAK.split(text)
    if "<break" in "".join(parts):
        raise ValueError("Balise de pause non reconnue dans : " + text)
    result = []
    for index, part in enumerate(parts):
        if index % 2:
            result.append(("pause", float(part)))
        elif part.strip():
            result.append(("texte", part.strip()))
    return result


def file_ok(path):
    if not path.is_file() or path.stat().st_size < 1024:
        return False
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "stream=codec_name", "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True, check=False,
    )
    return probe.returncode == 0 and "mp3" in probe.stdout


def main():
    p = argparse.ArgumentParser(description=__doc__)
    selection = p.add_mutually_exclusive_group(required=True)
    selection.add_argument("--list", action="store_true", help="Lister les segments sans charger F5.")
    selection.add_argument("--check", action="store_true", help="Vérifier les MP3 existants.")
    selection.add_argument("--id", help="Générer un segment précis.")
    selection.add_argument("--all", action="store_true", help="Générer tous les segments pédagogiques.")
    p.add_argument("--ref-audio", type=Path, help="Court WAV/MP3 francophone dont le clonage est autorisé.")
    p.add_argument("--ref-text", help="Transcription exacte de la référence audio.")
    p.add_argument("--checkpoint", type=Path, help="Poids F5 francophones autorisés pour l'usage prévu.")
    p.add_argument("--vocab", type=Path, help="Vocabulaire correspondant au checkpoint.")
    p.add_argument("--device", choices=["mps", "cpu"], default="mps")
    p.add_argument("--nfe-step", type=int, default=32)
    p.add_argument("--limit", type=int, default=0, help="Limiter le nombre de nouveaux MP3 dans cette exécution.")
    p.add_argument("--force", action="store_true", help="Régénérer même si le manifeste est à jour.")
    args = p.parse_args()
    items = clips()
    if args.list:
        for item in items:
            print(f"{item['id']}\t{item['role']}\t{item['tts_text']}")
        print(f"{len(items)} segments, {len({e['tts_text'] for e in items})} textes distincts")
        return 0
    if args.check:
        missing = [item["id"] for item in items if not file_ok(OUTPUT / f"{item['id']}.mp3")]
        print(f"MP3 présents : {len(items) - len(missing)}/{len(items)}")
        if missing:
            print("Absents ou invalides : " + ", ".join(missing))
        return 1 if missing else 0
    if args.id:
        items = [item for item in items if item["id"] == args.id]
        if not items:
            p.error(f"ID inconnu : {args.id}")
    for name in ("ref_audio", "checkpoint", "vocab"):
        path = getattr(args, name)
        if path is None or not path.is_file():
            p.error(f"--{name.replace('_', '-')} doit désigner un fichier existant")
    if not args.ref_text:
        p.error("--ref-text doit contenir la transcription exacte de la référence")
    if "elevenlabs" in args.ref_audio.name.lower():
        p.error("Une sortie ElevenLabs ne peut pas servir de référence F5 : voir https://elevenlabs.io/use-policy")
    if shutil.which("ffmpeg") is None or shutil.which("ffprobe") is None:
        p.error("ffmpeg et ffprobe sont nécessaires")
    if args.nfe_step < 1 or args.limit < 0:
        p.error("--nfe-step doit être positif et --limit ne peut pas être négatif")

    OUTPUT.mkdir(parents=True, exist_ok=True)
    previous = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.is_file() else {"clips": {}}
    records = previous.get("clips", {})
    reference_hash = digest(args.ref_audio)
    checkpoint_hash = digest(args.checkpoint)
    vocab_hash = digest(args.vocab)
    parameters = {"engine": "f5-tts", "model_config": "F5TTS_Base", "device": args.device,
                  "nfe_step": args.nfe_step, "reference_sha256": reference_hash,
                  "reference_text": args.ref_text, "checkpoint_sha256": checkpoint_hash, "vocab_sha256": vocab_hash}
    pending = []
    for item in items:
        key = hashlib.sha256(json.dumps({**parameters, "text": item["tts_text"]}, ensure_ascii=False,
                                        sort_keys=True).encode()).hexdigest()
        target = OUTPUT / f"{item['id']}.mp3"
        if not args.force and records.get(item["id"], {}).get("key") == key and file_ok(target):
            print("À jour : " + item["id"])
            continue
        pending.append((item, key, target))
    if args.limit:
        pending = pending[:args.limit]
    if not pending:
        print("Aucun nouveau segment à générer.")
        return 0

    import torch
    from f5_tts.api import F5TTS

    if args.device == "mps" and not torch.backends.mps.is_available():
        p.error("MPS indisponible. Vérifier les autorisations d'exécution ou utiliser --device cpu.")
    model = F5TTS(model="F5TTS_Base", ckpt_file=str(args.checkpoint), vocab_file=str(args.vocab),
                  device=args.device)
    generated_by_text = {}
    for item, key, target in pending:
        try:
            source = generated_by_text.get(item["tts_text"])
            if source is not None:
                shutil.copy2(source, target)
            else:
                chunks = []
                for kind, value in decode_segments(item["tts_text"]):
                    if kind == "pause":
                        chunks.append(np.zeros(round(value * model.target_sample_rate), dtype=np.float32))
                    else:
                        wav, sr, _ = model.infer(ref_file=str(args.ref_audio), ref_text=args.ref_text,
                                                 gen_text=value, nfe_step=args.nfe_step,
                                                 seed=int(key[:8], 16),
                                                 show_info=lambda *_: None)
                        if sr != model.target_sample_rate:
                            raise RuntimeError(f"Fréquence inattendue : {sr}")
                        chunks.append(np.asarray(wav, dtype=np.float32))
                if not chunks:
                    raise RuntimeError("Aucun texte à prononcer")
                with tempfile.TemporaryDirectory(prefix="f5tts-", dir=OUTPUT) as tmp:
                    wav_path = Path(tmp) / "segment.wav"
                    mp3_path = Path(tmp) / "segment.mp3"
                    sf.write(wav_path, np.concatenate(chunks), model.target_sample_rate)
                    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i",
                                    str(wav_path), "-codec:a", "libmp3lame", "-b:a", "128k", str(mp3_path)],
                                   check=True)
                    if not file_ok(mp3_path):
                        raise RuntimeError("Conversion MP3 invalide")
                    mp3_path.replace(target)
                generated_by_text[item["tts_text"]] = target
            records[item["id"]] = {"key": key, "text": item["tts_text"], "role": item["role"],
                                    "status": "non_valide_a_l_ecoute", "sha256": digest(target)}
            MANIFEST.write_text(json.dumps({"parameters": parameters, "clips": records}, ensure_ascii=False,
                                           indent=2) + "\n", encoding="utf-8")
            print("Généré : " + str(target))
        except Exception as exc:
            print(f"Échec sur {item['id']} : {exc}", file=sys.stderr)
            return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
