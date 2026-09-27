#!/usr/bin/env python3
"""Compare XTTS-v2 with the 44 existing Gemini clips, without changing them."""

import argparse
import hashlib
import importlib.metadata
import json
import os
import re
import subprocess
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "audio" / "neuronal"
DEST = ROOT / "audio" / "neuronal V1.2"
REFERENCE = DEST / "reference.wav"
MANIFEST = DEST / "manifest.json"
MODEL = "tts_models/multilingual/multi-dataset/xtts_v2"
FILTER = (
    "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,"
    "areverse,silenceremove=start_periods=1:start_threshold=-45dB:"
    "start_silence=0.15,areverse,loudnorm=I=-16:TP=-1.5:LRA=11"
)


def clean(text):
    """Use the exact text cleaning employed for audio/neuronal."""
    text = re.sub(r"<[^>]+>", "", text)
    for mark in ("↗", "↘", "|"):
        text = text.replace(mark, "")
    return re.sub(r"\s+", " ", text).strip()


def speech_text(text):
    """Remove visual notation that XTTS can pronounce as stray phonemes."""
    text = text.replace("«", "").replace("»", "")
    text = text.replace("(=", ", c'est-à-dire ")
    text = text.replace("=", " veut dire ").replace("(", ", ").replace(")", "")
    text = re.sub(r"\s+([,.?!:;])", r"\1", text)
    return re.sub(r"\s+", " ", text).strip()


def catalogue(content):
    """Match the original generer_tout.py catalogue, not the newer 105 clips."""
    clips = {}
    for phrase in content.get("phrases", []):
        clips[phrase["id"]] = phrase["exemple"]
        clips[f"forme-{phrase['id']}"] = phrase["forme"]
    for index, objection in enumerate(content["entrainement"]["objections"], 1):
        clips[f"obj-{index}"] = objection
    clips["sit-dialogue"] = content["sujet"]["dit"]
    clips["sit-mission"] = content["sujet"]["vous"]
    clips["intro-consigne"] = content["meta"]["titreSeance"] + ". " + content["meta"]["objectif"]
    clips["avant-consigne"] = (
        "Donnez votre avis sur le sujet, sans préparer. Les erreurs ne sont pas un problème. "
        "À la fin du cours, vous parlerez encore 1 minute : vous verrez la différence."
    )
    for index, essai in enumerate(content["entrainement"]["essais"], 1):
        clips[f"essai-{index}"] = essai["consigne"] + (" " + essai["ajout"] if essai.get("ajout") else "")
    for index, semaine in enumerate(content["semaine"], 1):
        clips[f"semaine-{index}"] = semaine["tache"]
    for extrait in content["ecoute"]:
        prefix = extrait["id"].lower()
        clips[f"ecoute-{prefix}-devine"] = extrait["devine"]
        for index, question in enumerate(extrait["questions"]):
            ident = f"q-{prefix}-{index}"
            clips[ident] = question["q"] + " " + " ".join(question["options"])
            clips[f"{ident}-expl"] = question["explication"]
        for index, trou in enumerate(extrait["trous"]):
            clips[f"gap-{prefix}-{index}-sol"] = (
                trou["avant"] + " " + trou["solution"] + (" " + trou["apres"] if trou.get("apres") else "")
            )
        clips[f"diff-{prefix}"] = extrait["difficile"]["texte"]
    clips["melo-regle"] = " ".join(content["prononciation"]["regle"])
    return {ident: clean(text) for ident, text in clips.items()}


def load_catalogue():
    source = (ROOT / "contenu.js").read_text(encoding="utf-8")
    match = re.search(r"^window\.IMPACT60\s*=\s*", source, re.MULTILINE)
    if not match:
        raise RuntimeError("Impossible de lire window.IMPACT60 dans contenu.js")
    content = json.loads(source[match.end():].strip().rstrip(";"))
    texts = catalogue(content)
    source_ids = {path.stem for path in SOURCE.glob("*.mp3")}
    if not source_ids:
        raise RuntimeError("Aucun MP3 de référence dans audio/neuronal")
    missing = source_ids - texts.keys()
    if missing:
        raise RuntimeError(f"Texte absent pour : {', '.join(sorted(missing))}")
    return {ident: texts[ident] for ident in sorted(source_ids)}


def audio_ok(path):
    if not path.is_file() or path.stat().st_size < 1000:
        return False
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(path)],
        capture_output=True, text=True, check=False,
    )
    try:
        return probe.returncode == 0 and float(probe.stdout.strip()) >= 0.5
    except ValueError:
        return False


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--id", help="Générer un seul fichier pour un premier contrôle")
    parser.add_argument("--limit", type=int, help="Limiter le nombre de nouveaux fichiers")
    parser.add_argument("--check", action="store_true", help="Vérifier sans générer")
    parser.add_argument("--force", action="store_true", help="Régénérer les fichiers sélectionnés")
    parser.add_argument("--device", choices=("mps", "cpu"), help="Choisir explicitement le calculateur")
    args = parser.parse_args()
    texts = load_catalogue()
    if args.id and args.id not in texts:
        parser.error(f"identifiant inconnu : {args.id}")
    if args.limit is not None and args.limit < 1:
        parser.error("--limit doit être positif")
    if not REFERENCE.is_file():
        raise RuntimeError(f"Voix de référence absente : {REFERENCE}")
    selected = {args.id: texts[args.id]} if args.id else texts
    ref_sha = hashlib.sha256(REFERENCE.read_bytes()).hexdigest()
    previous = json.loads(MANIFEST.read_text()) if MANIFEST.is_file() else {"clips": {}}

    def signature(text):
        data = {"text": speech_text(text), "model": MODEL, "reference_sha256": ref_sha, "filter": FILTER}
        return hashlib.sha256(json.dumps(data, sort_keys=True).encode()).hexdigest()

    pending = [ident for ident, text in selected.items()
               if args.force or not (audio_ok(DEST / f"{ident}.mp3")
                                     and previous.get("clips", {}).get(ident, {}).get("sha256") == signature(text))]
    print(f"{len(texts)} fichiers source ; {len(selected)} sélectionnés ; {len(pending)} à générer", flush=True)
    if args.check:
        for ident in pending:
            print(f"Manquant ou périmé : {ident}")
        raise SystemExit(bool(pending))
    if not pending:
        return
    if args.limit:
        pending = pending[:args.limit]

    os.environ.setdefault("COQUI_TOS_AGREED", "1")  # Model already downloaded after licence acceptance.
    os.environ.setdefault("PYTORCH_ENABLE_MPS_FALLBACK", "1")
    import torch
    from TTS.api import TTS

    # XTTS voice conditioning uses an oversized conv1d unsupported by MPS on M2.
    # Keep CPU as the working default; --device mps remains for future testing.
    device = args.device or "cpu"
    print(f"Chargement {MODEL} sur {device}...", flush=True)
    tts = TTS(MODEL).to(device)
    manifest = {
        "model": MODEL,
        "package": f"coqui-tts {importlib.metadata.version('coqui-tts')}",
        "device": device,
        "reference": "reference.wav",
        "reference_sha256": ref_sha,
        "source": "../neuronal/ (Gemini 3.8 Flash TTS, voix Puck)",
        "clips": previous.get("clips", {}),
    }
    DEST.mkdir(parents=True, exist_ok=True)
    for index, ident in enumerate(pending, 1):
        text = texts[ident]
        target = DEST / f"{ident}.mp3"
        prepared = speech_text(text)
        print(f"[{index}/{len(pending)}] {ident}: {prepared}", flush=True)
        with tempfile.TemporaryDirectory(prefix="xtts-") as tmp:
            wav = Path(tmp) / "generated.wav"
            encoded = Path(tmp) / "encoded.mp3"
            tts.tts_to_file(text=prepared, speaker_wav=str(REFERENCE), language="fr",
                            file_path=str(wav), split_sentences=True)
            subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(wav),
                            "-af", FILTER, "-ac", "1", "-ar", "24000", "-b:a", "96k", str(encoded)], check=True)
            if not audio_ok(encoded):
                raise RuntimeError(f"MP3 non valide : {ident}")
            encoded.replace(target)
        manifest["clips"][ident] = {"sha256": signature(text), "text": text,
                                    "spoken_text": prepared, "file": target.name}
        MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Terminé : {len(pending)} MP3 XTTS-v2 générés dans {DEST}", flush=True)


if __name__ == "__main__":
    main()
