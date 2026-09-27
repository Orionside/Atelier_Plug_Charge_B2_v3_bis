#!/usr/bin/env python3
"""Transcribe both TTS sets locally; flag mismatches for human listening."""

import difflib
import json
import re
import subprocess
import unicodedata
from pathlib import Path

import mlx_whisper


ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "audio" / "neuronal V1.2"
MODEL = Path("/Users/toufik/.cache/huggingface/hub/models--mlx-community--whisper-large-v3-turbo/snapshots/a4aaeec0636e6fef84abdcbe3544cb2bf7e9f6fb")


def tokens(text):
    text = unicodedata.normalize("NFD", text.lower())
    text = "".join(char for char in text if unicodedata.category(char) != "Mn")
    return re.findall(r"[a-z0-9]+", text.replace("’", "'"))


def duration(path):
    response = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", str(path)],
        capture_output=True, text=True, check=True,
    )
    return round(float(response.stdout.strip()), 2)


def main():
    if not MODEL.is_dir():
        raise RuntimeError(f"Modèle Whisper local introuvable : {MODEL}")
    manifest = json.loads((DEST / "manifest.json").read_text(encoding="utf-8"))
    rows = []
    for index, (ident, clip) in enumerate(sorted(manifest["clips"].items()), 1):
        expected = clip["text"]
        row = {"id": ident, "expected": expected,
               "xtts_spoken_text": clip.get("spoken_text", expected)}
        for name, path in (("gemini", ROOT / "audio" / "neuronal" / f"{ident}.mp3"),
                           ("xtts", DEST / f"{ident}.mp3")):
            if not path.is_file():
                raise RuntimeError(f"Fichier absent : {path}")
            response = mlx_whisper.transcribe(str(path), path_or_hf_repo=str(MODEL),
                                              language="fr", verbose=None)
            transcription = response["text"].strip()
            target_text = row["xtts_spoken_text"] if name == "xtts" else expected
            row[name] = {
                "transcription": transcription,
                "accord_mots": round(difflib.SequenceMatcher(None, tokens(target_text), tokens(transcription)).ratio(), 3),
                "duration_s": duration(path),
            }
        rows.append(row)
        print(f"[{index}/{len(manifest['clips'])}] {ident}: accord Gemini {row['gemini']['accord_mots']:.2f}, XTTS {row['xtts']['accord_mots']:.2f}", flush=True)
    report = {
        "note": "L'accord de mots est une mesure ASR approximative, pas une note de prosodie. Écoute humaine obligatoire.",
        "transcripteur": "mlx-whisper large-v3-turbo, français",
        "clips": rows,
    }
    target = DEST / "verification-asr.json"
    target.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Rapport : {target}")


if __name__ == "__main__":
    main()
