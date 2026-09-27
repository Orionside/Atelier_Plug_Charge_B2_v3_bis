# F5-TTS — audios candidats pour comparaison

Ce dossier est placé à côté de `audio/neuronal/` et `audio/neuronal V1.2/`. Les MP3 qui y sont produits sont des **candidats de comparaison**, pas encore des modèles de prononciation validés ni la voix active du support apprenant. Chaque enregistrement doit être validé à l'écoute par un francophone natif avant son intégration.

Installation locale vérifiée sur le Mac M2 : `/Users/toufik/impact60_mesure/.venv-f5tts` (`f5-tts==1.1.22`). Un essai technique avec la voix anglaise fournie par F5-TTS a produit un WAV via Metal/MPS. Ce test ne valide **ni** le rendu français **ni** une voix clonée.

Le code F5-TTS installé tronque la référence vocale à environ 12 secondes après retrait des silences ; un MP3 de plusieurs minutes n'améliore donc pas automatiquement la reproduction. L'affirmation selon laquelle F5-TTS utiliserait moins de mémoire que XTTS-v2 sur ce M2 n'a pas été mesurée ici. Le premier essai a demandé environ 14,5 secondes de calcul pour 1,8 seconde d'audio, hors chargement du modèle : ce chiffre n'est pas un benchmark représentatif de tous les textes.

La référence de cette série est un extrait de 11,35 secondes préparé localement à partir du fichier fourni par le propriétaire de l'atelier, `Nouvelle voix de présentation pour atelier.mp3`. L'extrait (de 11,75 à 23,10 secondes) et les poids du modèle sont conservés **hors du dépôt** dans `/Users/toufik/impact60_mesure/models/f5-fr/`. Le propriétaire doit conserver les informations de provenance et les autorisations de réemploi de la voix. Les poids [RASPIAUDIO/F5-French-MixedSpeakers-reduced](https://huggingface.co/RASPIAUDIO/F5-French-MixedSpeakers-reduced) sont sous licence CC BY-NC 4.0 ; cette série est destinée à l'atelier non commercial déclaré.

Le générateur `scripts/generer-f5tts.py` lit 109 segments pédagogiques du catalogue, charge une seule fois le checkpoint F5 francophone, génère les MP3 dans ce dossier et crée un manifeste portant la mention `non_valide_a_l_ecoute`. Les balises de pause du catalogue sont remplacées par des silences après synthèse ; cela ne garantit pas une cadence de continuation naturelle. Les amorces et phrases à trous exigent donc une écoute particulièrement stricte.

Pour vérifier la liste sans produire d'audio :

```sh
/Users/toufik/impact60_mesure/.venv-f5tts/bin/python scripts/generer-f5tts.py --list
```

Pour une génération de contrôle avec la référence préparée sur ce Mac :

```sh
env DYLD_LIBRARY_PATH=/opt/homebrew/opt/ffmpeg/lib \
  /Users/toufik/impact60_mesure/.venv-f5tts/bin/python scripts/generer-f5tts.py \
  --id p1 \
  --ref-audio /Users/toufik/impact60_mesure/models/f5-fr/reference_atelier.wav \
  --ref-text "D'un point de vue technique, c'est-à-dire si on regarde la technique. Pourquoi cet extrait ? Le journaliste reformule pour vérifier qu'il a compris, puis pose une question. Vous allez faire la même chose." \
  --checkpoint /Users/toufik/impact60_mesure/models/f5-fr/model_last_reduced.pt \
  --vocab /Users/toufik/impact60_mesure/models/f5-fr/vocab.txt \
  --device mps
```

Pour générer le reste, remplacer `--id p1` par `--all`. Le script reprend après interruption sans refaire les fichiers à jour ; `--check` signale les manquants. Ouvrir `comparaison-voix.html` via un serveur HTTP local pour comparer Gemini, XTTS-v2 et F5-TTS sur les textes communs. Ne pas ajouter la référence vocale ni le checkpoint volumineux au dépôt Git.
