# Atelier Plug & Charge B2 v3 — version bis

Support pédagogique statique publié à https://orionside.github.io/Atelier_Plug_Charge_B2_v3_bis/. L'apprenant lit et écoute les consignes, questions, aides, corrections révélées et phrases utiles. Les modèles de mélodie restent ceux de la vidéo authentique, car les courbes affichées ont été mesurées sur cette voix.

## Architecture audio

- `audio/catalogue.js` relie les **109 segments pédagogiques** prédéfinis aux commandes d'écoute du site. `audio/catalogue-elevenlabs-v2.json` recense aussi **103 textes d'interface facultatifs**.
- `audio/qwen3-tts/` contient les **212 MP3 actuellement sélectionnés** pour le support, avec `manifest.json` (texte affiché, contexte, empreinte et fichier). Aucun modèle ni clé API ne s'exécute dans le navigateur.
- Les six exemples « Au travail » utilisent uniquement Qwen3-TTS dans le support apprenant. Si un MP3 manque ou si son texte ne correspond plus, le lecteur indique l'indisponibilité au lieu de substituer une voix ancienne non retenue. `audio/gemini/`, `audio/manifest.json` et `audio/neuronal/` restent des fonds de comparaison locale.
- Les 103 libellés facultatifs réellement visibles sur l'écran courant sont accessibles dans le panneau replié « Autres textes visibles à écouter ». Ils ne sont jamais lus automatiquement.

Les réponses du QCM, les corrections des exercices à trous et les phrases du mode « Vérifier sans regarder » ne deviennent audibles que lorsqu'elles sont visibles. La lecture d'un audio arrête la vidéo précédente et le son d'un enregistrement personnel ; le démarrage du micro arrête les lectures. Aucun modèle synthétique ne remplace les extraits authentiques sous les courbes de mélodie. La phrase lue est surlignée.

L'intégration technique a été approuvée par l'utilisateur. Le manifeste conserve néanmoins `non_valide_a_l_ecoute` : l'intégration et la vérification automatique des mots **ne prouvent pas** une prosodie native pour chaque fichier. Utiliser `relecture-qwen3tts.html` pour l'écoute pédagogique, puis refaire les segments insuffisants. Voir [le protocole Qwen3-TTS](audio/PROTOCOLE_QWEN3_TTS.md).

Vérifier les fichiers et la correspondance des textes avant publication :

```sh
node scripts/verifier-integration-audio.mjs
../../.venv-qwen3tts/bin/python scripts/generer-qwen3tts.py --check
python3 -m http.server 8000
```

Ouvrir `http://localhost:8000/` puis tester les sept étapes, le mode rappel, les corrections et le microphone. Les MP3 Qwen sont des fichiers statiques : aucune connexion au modèle n'est nécessaire pour l'apprenant.

## Génération historique avec Gemini (non sélectionnée dans le lecteur principal)

Prévoir Node.js 20 ou plus récent, `ffmpeg` et une clé Gemini configurée sur le Mac dans `GEMINI_API_KEY`. Ne jamais placer cette clé dans le dépôt ou dans `index.html`.

```sh
node scripts/generer-audios.mjs --list
node scripts/generer-audios.mjs --id p1
node scripts/generer-audios.mjs --all
node scripts/generer-audios.mjs --all --limit 10
node scripts/generer-audios.mjs --check
```

Par défaut, le script emploie `gemini-3.8-flash-tts` et la voix française `fr-fr-tutor-5` (catalogue Google : Paris French, claire et amicale). `--voice ID` permet de comparer une autre voix ; changer de voix impose de régénérer tous les fichiers pour garder un timbre cohérent. `--force` force la régénération. Le script produit un WAV Gemini, en vérifie l'en-tête, le convertit réellement en MP3 et n'enregistre jamais la clé.

Le niveau gratuit du projet utilisé pour les premiers essais a renvoyé une limite effective de **10 requêtes par jour**. Le catalogue contient 105 segments, donc la génération intégrale requiert un niveau payant ou plusieurs jours au quota gratuit. `--limit 10` borne une session quotidienne ; le quota réel peut être réduit par d'autres usages du même projet. Le script s'arrête à la première erreur et reprend sans refaire les fichiers déjà à jour.

## Validation pédagogique avant diffusion

Écouter les six exemples professionnels, les deux questions les plus longues, les mots « Chargemap », « Plug & Charge », « ISO 15118 » et des phrases interrogatives. Vérifier l'exactitude des mots, les liaisons, les pauses, l'accent français de France et la mélodie des questions. Une transcription automatique peut déceler des omissions, mais ne remplace pas une écoute humaine du rythme et de la prononciation. Refaire tout extrait qui ne constitue pas un bon modèle pour un apprenant non francophone.

Pour remettre Gemini en production, il faudrait adapter explicitement les chemins du lecteur et revérifier tout le catalogue ; le simple ajout de MP3 Gemini ne remplace pas la sélection Qwen actuelle.

## Comparaison locale avec Coqui XTTS-v2

Le dossier `audio/neuronal/` contient 44 MP3 générés avec Gemini 3.8 Flash TTS (voix Puck). `audio/neuronal V1.2/` contient les mêmes 44 textes lus par XTTS-v2, sous les mêmes noms de fichier. La référence vocale `reference.wav` provient des cinq premières secondes de `audio/neuronal/sit-dialogue.mp3` : XTTS clone donc une voix **synthétique Gemini**, pas la voix d'un locuteur français enregistré. Ces résultats servent à comparer les moteurs ; ils ne garantissent pas à eux seuls une prosodie française native.

Sur le Mac M2, l'environnement isolé est `/Users/toufik/impact60_mesure/.venv-xtts` (Python 3.11, dépendances figées dans `scripts/requirements-xtts.txt`). Pour le recréer :

```sh
uv venv /Users/toufik/impact60_mesure/.venv-xtts --python 3.11
uv pip install --python /Users/toufik/impact60_mesure/.venv-xtts/bin/python -r scripts/requirements-xtts.txt
```

Depuis le dossier de ce dépôt :

```sh
/Users/toufik/impact60_mesure/.venv-xtts/bin/python scripts/generer-xtts.py --check
/Users/toufik/impact60_mesure/.venv-xtts/bin/python scripts/generer-xtts.py --id p1
/Users/toufik/impact60_mesure/.venv-xtts/bin/python scripts/generer-xtts.py
python3 -m http.server 8000
```

Ouvrir ensuite `http://localhost:8000/comparaison-voix.html` pour une écoute A/B à ordre aléatoire, avec remarques et export CSV. Le script ignore les MP3 à jour, reprend après interruption, n'écrase jamais `audio/neuronal/` et stocke dans son manifeste le texte et l'empreinte de chaque résultat. Le CPU est le choix par défaut : le conditionnement vocal de XTTS-v2 utilise une opération actuellement non prise en charge par Metal/MPS sur ce Mac.

Une vérification locale avec Whisper a produit `audio/neuronal V1.2/verification-asr.json`. Elle compare le texte attendu à la transcription de chaque MP3 ; elle **ne mesure pas** l'accent ou la prosodie. Pour la refaire avec le modèle MLX Whisper déjà installé sur ce Mac :

```sh
/Users/toufik/.hermes/workspaces/default/.venv-transcription/bin/python scripts/verifier-xtts.py
```

À l'écoute A/B, commencer par `essai-1` (le MP3 Gemini de 4,4 s omet une grande partie de la consigne), `essai-3`, `semaine-3`, `p2`, `diff-a`, `diff-b` et `ecoute-a-devine`. Les durées des 44 MP3 sont d'environ 4 min 09 s pour Gemini contre 4 min 33 s pour XTTS ; une durée plus longue n'est pas en soi un indice de meilleure prosodie. Les 44 clips comparés ne couvrent pas encore tous les 105 segments du catalogue audio du support.

La [licence du modèle XTTS-v2](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt) n'autorise que les usages non commerciaux du modèle **et de ses sorties**. Une comparaison locale est possible, mais avant toute diffusion dans une formation payante ou subventionnée, il faut clarifier les droits ou choisir un autre outil. Si ces MP3 sont distribués dans un cadre permis, fournir aussi la licence ou son URL.

## Comparaison locale avec F5-TTS français

L'environnement et les poids F5-TTS ont été retirés du Mac après évaluation ; les MP3 déjà produits restent dans `audio/neuronal F5-TTS/`. Le modèle français utilisé était soumis à la [licence CC BY-NC 4.0](https://huggingface.co/RASPIAUDIO/F5-French-MixedSpeakers-reduced). L'atelier a été déclaré non commercial. Le script historique `scripts/generer-f5tts.py` et son [mode d'emploi](audio/neuronal%20F5-TTS/README.md) restent conservés pour référence, mais ne sont pas la source du lecteur actuel.

`comparaison-voix.html` permet maintenant de choisir deux sources parmi Gemini, XTTS-v2 et F5-TTS. Elle affiche uniquement les identifiants présents dans les deux sources choisies et conserve les jugements par paire de moteurs. Les fichiers F5 ne remplacent pas automatiquement les audios du support apprenant : l'exactitude des mots peut être contrôlée par transcription, mais la prosodie doit être évaluée à l'oreille avant diffusion.
