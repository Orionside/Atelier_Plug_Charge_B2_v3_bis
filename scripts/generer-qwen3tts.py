#!/usr/bin/env python3
"""Générer le catalogue français avec Qwen3-TTS Base sur Apple Silicon.

Les MP3 sont des candidats : la transcription automatique ne valide pas la
prosodie. Aucune voix de référence n'est copiée dans le dépôt.
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
from scipy.io import wavfile


ROOT = Path(__file__).resolve().parents[1]
CATALOGUE = ROOT / "audio/catalogue-elevenlabs-v2.json"
OUTPUT = ROOT / "audio/qwen3-tts"
MANIFEST = OUTPUT / "manifest.json"
MODEL = "mlx-community/Qwen3-TTS-12Hz-1.7B-Base-8bit"
ELIGIBLE = {"candidat_apres_ecoute_humaine", "optionnel_accessibilite"}
BREAK = re.compile(r'<break time="([0-9]+(?:\.[0-9]+)?)s"\s*/>')
OVERRIDES = {
    "exemple-sujet-personnel": "Par exemple : un logiciel, une procédure, un projet, un service.",
    "interface-012": "Pendant la minute qui suit.",
    "titre-video": "Tout comprendre au Plug and Charge avec Chargemap ! Une vidéo d'Automobile Propre.",
    "titre-extrait-1": "Premier extrait. Le Plug and Charge en quarante secondes.",
    "titre-extrait-2": "Deuxième extrait. Une usine à gaz ?",
    "titre-perception-1": "Première phrase.",
    "titre-perception-2": "Deuxième phrase.",
    "titre-essai-1": "Premier essai.",
    "titre-essai-2": "Deuxième essai.",
    "titre-essai-3": "Troisième essai.",
    "lien-plus-loin-1": "Regarder la vidéo en entier. Durée : sept minutes.",
    "melo-etape-2": "Enregistrez-vous, puis comparez les courbes.",
    "etape-3-titre": "Six phrases utiles.",
}


def sha_bytes(data):
    return hashlib.sha256(data).hexdigest()


def sha_file(path):
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def entries(include_optional=True):
    data = json.loads(CATALOGUE.read_text(encoding="utf-8"))
    allowed = ELIGIBLE if include_optional else {"candidat_apres_ecoute_humaine"}
    selected = [entry for entry in data["entries"] if entry["generation"] in allowed]
    for entry in selected:
        if not entry.get("tts_text") or not re.fullmatch(r"[a-z0-9-]+", entry["id"]):
            raise ValueError(f"Entrée invalide : {entry['id']}")
    if len({entry["id"] for entry in selected}) != len(selected):
        raise ValueError("Identifiants dupliqués dans le catalogue")
    return selected


def spoken_text(entry):
    text = OVERRIDES.get(entry["id"], entry["tts_text"])
    text = text.replace("?", " ?").replace("!", " !")
    text = re.sub(r"\s+([?!])", r" \1", text)
    text = re.sub(r"\s+([,.;:])", r"\1", text)
    text = re.sub(r"\s+", " ", text).strip()
    if "<" in BREAK.sub("", text) or ">" in BREAK.sub("", text):
        raise ValueError(f"Balise non reconnue : {entry['id']}")
    return text


def pieces(text):
    parts = BREAK.split(text)
    result = []
    for index, part in enumerate(parts):
        if index % 2:
            seconds = float(part)
            if seconds <= 0 or seconds > 2:
                raise ValueError(f"Pause invalide : {seconds}")
            result.append(("pause", seconds))
            continue
        part = part.strip()
        if not part:
            continue
        # L'ellipse signale une continuation, sans prononcer un faux mot-réponse.
        if index + 1 < len(parts) and not part.endswith((".", "?", "!", "…")):
            part += "…"
        sentences = re.split(r"(?<=[.!?])\s+(?=[A-ZÀÂÉÈÊÎÔÙÛÇ])", part)
        for sentence_index, sentence in enumerate(sentences):
            if sentence_index:
                result.append(("pause", 0.14))
            result.append(("texte", sentence))
    return result


def valid_mp3(path):
    if not path.is_file() or path.stat().st_size < 1000:
        return False
    check = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "stream=codec_name",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True, check=False,
    )
    return check.returncode == 0 and check.stdout.strip() == "mp3"


def synthesize(model, text, reference, ref_text, seed):
    import mlx.core as mx

    mx.random.seed(seed)
    outputs = list(model.generate(
        text=text, lang_code="French", ref_audio=str(reference), ref_text=ref_text,
        temperature=0.9, top_k=50, top_p=1.0, repetition_penalty=1.05,
        stream=False, verbose=False,
    ))
    if len(outputs) != 1:
        raise RuntimeError(f"Une seule sortie était attendue, reçu : {len(outputs)}")
    item = outputs[0]
    mx.eval(item.audio)
    audio = np.asarray(item.audio, dtype=np.float32).reshape(-1)
    if audio.size < item.sample_rate // 5 or not np.isfinite(audio).all():
        raise RuntimeError("Audio vide ou invalide")
    if np.sqrt(np.mean(audio * audio)) < 0.0005:
        raise RuntimeError("Audio quasiment silencieux")
    return audio, item.sample_rate


def render(model, entry, text, reference, ref_text, seed, target):
    chunks = []
    rate = None
    for index, (kind, value) in enumerate(pieces(text)):
        if kind == "pause":
            if rate is None:
                raise RuntimeError("La séquence commence par une pause")
            chunks.append(np.zeros(round(value * rate), dtype=np.float32))
            continue
        audio, sample_rate = synthesize(model, value, reference, ref_text, seed + index)
        if rate is not None and sample_rate != rate:
            raise RuntimeError("Fréquence d'échantillonnage incohérente")
        rate = sample_rate
        chunks.append(audio)
    if not chunks or rate is None:
        raise RuntimeError("Aucun texte généré")
    full = np.concatenate(chunks)
    duration = full.size / rate
    if duration > 90:
        raise RuntimeError(f"Audio anormalement long : {duration:.1f} s")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix="qwen3tts-", dir=OUTPUT) as temp:
        wav = Path(temp) / "clip.wav"
        mp3 = Path(temp) / "clip.mp3"
        wavfile.write(wav, rate, (np.clip(full, -1, 1) * 32767).astype(np.int16))
        subprocess.run(
            ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(wav),
             "-codec:a", "libmp3lame", "-b:a", "192k", str(mp3)], check=True,
        )
        if not valid_mp3(mp3):
            raise RuntimeError("MP3 produit illisible")
        mp3.replace(target)
    return round(duration, 3)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--list", action="store_true")
    mode.add_argument("--check", action="store_true")
    mode.add_argument("--id", help="Générer un seul identifiant")
    mode.add_argument("--all", action="store_true")
    parser.add_argument("--ref-audio", type=Path,
                        default=Path.home() / "impact60_mesure/models/qwen3-tts/reference_atelier.wav")
    parser.add_argument("--ref-text", default=(
        "D'un point de vue technique, c'est-à-dire si on regarde la technique. "
        "Pourquoi cet extrait ? Le journaliste reformule pour vérifier qu'il a compris, "
        "puis pose une question. Vous allez faire la même chose."))
    parser.add_argument("--core-only", action="store_true", help="Exclure les libellés facultatifs")
    parser.add_argument("--limit", type=int, default=0, help="Nombre maximal de nouveaux MP3")
    parser.add_argument("--force", action="store_true", help="Régénérer même si le manifeste est à jour")
    args = parser.parse_args()
    selected = entries(not args.core_only)
    if args.id:
        selected = [entry for entry in selected if entry["id"] == args.id]
        if not selected:
            parser.error("Identifiant inconnu ou exclu : " + args.id)
    if args.list:
        for entry in selected:
            print(f"{entry['id']}\t{entry['role']}\t{spoken_text(entry)}")
        print(f"{len(selected)} segments")
        return 0
    if args.check:
        missing = [entry["id"] for entry in selected if not valid_mp3(OUTPUT / f"{entry['id']}.mp3")]
        print(f"MP3 valides : {len(selected) - len(missing)}/{len(selected)}")
        if missing:
            print("Manquants : " + ", ".join(missing))
        return bool(missing)
    if args.limit < 0:
        parser.error("--limit ne peut pas être négatif")
    if not args.ref_audio.is_file():
        parser.error("Référence audio absente : " + str(args.ref_audio))
    if shutil.which("ffmpeg") is None or shutil.which("ffprobe") is None:
        parser.error("ffmpeg et ffprobe sont nécessaires")
    OUTPUT.mkdir(parents=True, exist_ok=True)
    old = json.loads(MANIFEST.read_text(encoding="utf-8")) if MANIFEST.is_file() else {"clips": {}}
    clips = old.get("clips", {})
    parameters = {
        "engine": "qwen3-tts", "runtime": "mlx-audio 0.5.6", "model": MODEL,
        "language": "French", "temperature": 0.9, "top_k": 50, "top_p": 1.0,
        "reference_sha256": sha_file(args.ref_audio), "reference_text": args.ref_text,
        "catalogue_sha256": sha_file(CATALOGUE), "format": "mp3 192 kb/s",
    }
    pending = []
    for entry in selected:
        text = spoken_text(entry)
        key = sha_bytes(json.dumps({"parameters": {k: v for k, v in parameters.items() if k != "catalogue_sha256"},
                                    "role": entry["role"], "text": text},
                                   ensure_ascii=False, sort_keys=True).encode())
        target = OUTPUT / f"{entry['id']}.mp3"
        if not args.force and clips.get(entry["id"], {}).get("key") == key and valid_mp3(target):
            print("À jour : " + entry["id"], flush=True)
            continue
        pending.append((entry, text, key, target))
    if args.limit:
        pending = pending[:args.limit]
    if not pending:
        print("Aucun segment à produire.")
        return 0
    from mlx_audio.tts.utils import load_model

    model = load_model(MODEL)
    reused = {}
    for index, (entry, text, key, target) in enumerate(pending, start=1):
        try:
            duplicate = reused.get((text, entry["role"]))
            if duplicate and valid_mp3(duplicate):
                shutil.copy2(duplicate, target)
                duration = clips[duplicate.stem]["duration_s"]
            else:
                duration = render(model, entry, text, args.ref_audio, args.ref_text,
                                  int(key[:8], 16), target)
                reused[(text, entry["role"])] = target
            clips[entry["id"]] = {
                "key": key, "text": text, "display_text": entry["display_text"],
                "role": entry["role"], "section": entry["section"],
                "reveal": entry["reveal"], "generation": entry["generation"],
                "file": "audio/qwen3-tts/" + entry["id"] + ".mp3",
                "duration_s": duration, "sha256": sha_file(target),
                "status": "non_valide_a_l_ecoute",
            }
            MANIFEST.write_text(json.dumps({"parameters": parameters, "clips": clips},
                                           ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"[{index}/{len(pending)}] Généré : {entry['id']} ({duration:.1f} s)", flush=True)
        except Exception as error:
            print(f"Échec sur {entry['id']} : {error}", file=sys.stderr, flush=True)
            return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
