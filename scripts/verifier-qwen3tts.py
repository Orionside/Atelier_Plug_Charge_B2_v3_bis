#!/usr/bin/env python3
"""Contrôle lexical automatique des MP3 Qwen3-TTS (pas une validation prosodique)."""

import argparse
import json
import re
import unicodedata
from pathlib import Path

import mlx_whisper


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "audio/qwen3-tts"
MANIFEST = OUTPUT / "manifest.json"
REPORT = OUTPUT / "qa-transcription.json"
WHISPER = (Path.home() / ".cache/huggingface/hub/"
           "models--mlx-community--whisper-large-v3-turbo/snapshots/"
           "a4aaeec0636e6fef84abdcbe3544cb2bf7e9f6fb")
GAP_ANSWERS = {
    "gap-a-0": "communication",
    "gap-a-1": "fluide",
    "gap-b-0": "compris",
    "gap-b-1": "usine",
}


def tokens(text):
    text = re.sub(r'<break time="[0-9.]+s"\s*/>', " ", text)
    text = unicodedata.normalize("NFKD", text.lower())
    text = "".join(ch for ch in text if not unicodedata.combining(ch))
    return re.findall(r"[a-z0-9]+", text)


def word_error(reference, hypothesis):
    a, b = tokens(reference), tokens(hypothesis)
    row = list(range(len(b) + 1))
    for index, word in enumerate(a, start=1):
        next_row = [index]
        for column, heard in enumerate(b, start=1):
            next_row.append(min(row[column] + 1, next_row[-1] + 1,
                                row[column - 1] + (word != heard)))
        row = next_row
    return row[-1] / max(1, len(a))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--core-only", action="store_true")
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()
    if not WHISPER.is_dir():
        parser.error("Modèle Whisper local introuvable : " + str(WHISPER))
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    records = json.loads(REPORT.read_text(encoding="utf-8")) if REPORT.exists() else {"clips": {}}
    clips = records.get("clips", {})
    todo = [(id, clip) for id, clip in manifest["clips"].items()
            if not args.core_only or clip["generation"] == "candidat_apres_ecoute_humaine"]
    if args.limit:
        todo = todo[:args.limit]
    for index, (id, clip) in enumerate(todo, start=1):
        path = ROOT / clip["file"]
        if not path.is_file():
            print(f"[{index}/{len(todo)}] Manquant : {id}", flush=True)
            continue
        if not args.force and clips.get(id, {}).get("sha256") == clip["sha256"]:
            print(f"[{index}/{len(todo)}] À jour : {id}", flush=True)
            continue
        result = mlx_whisper.transcribe(str(path), path_or_hf_repo=str(WHISPER),
                                        language="fr", verbose=None)
        heard = result["text"].strip()
        expected = clip["text"]
        score = round(word_error(expected, heard), 4)
        disclosed = id in GAP_ANSWERS and GAP_ANSWERS[id] in tokens(heard)
        # Sur quelques mots, Whisper est moins fiable : marquer pour écoute, pas rejeter.
        review = disclosed or score > (0.3 if len(tokens(expected)) <= 5 else 0.18)
        clips[id] = {
            "sha256": clip["sha256"], "expected": expected, "transcribed": heard,
            "word_error_rate": score, "answer_possibly_disclosed": disclosed,
            "review_priority": "haute" if review else "normale",
        }
        REPORT.write_text(json.dumps({"asr_model": str(WHISPER),
                                      "limitation": "La transcription ne mesure pas la prosodie native.",
                                      "clips": clips}, ensure_ascii=False, indent=2) + "\n",
                          encoding="utf-8")
        print(f"[{index}/{len(todo)}] {id} : WER {score:.0%}" +
              (" — À RÉÉCOUTER" if review else ""), flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
