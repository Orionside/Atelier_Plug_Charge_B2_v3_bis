# Comparaison locale Gemini / XTTS-v2 — 26 septembre 2026

## Périmètre et état

- 44 textes du dossier `../neuronal/`, 44 MP3 correspondants produits dans ce dossier.
- Coqui XTTS-v2 via `coqui-tts 0.27.5`, Python 3.11, PyTorch 2.5.1, CPU Apple M2. Metal/MPS est détecté mais le conditionnement de la voix échoue sur une convolution non prise en charge.
- Voix de référence : `reference.wav`, les cinq premières secondes du MP3 Gemini `../neuronal/sit-dialogue.mp3` (voix Puck). Le résultat XTTS est donc un clonage d'une voix synthétique, pas un enregistrement de francophone natif.
- Les deux séries sont des MP3 mono 24 kHz. Durée totale : Gemini 249 s, XTTS 273 s.
- Le site pédagogique publié n'a pas été basculé vers ces nouveaux MP3.

## Contrôle automatisé

La transcription locale avec Whisper large-v3-turbo donne un accord moyen de mots de **0,964 pour Gemini** et **0,980 pour XTTS** sur les 44 segments. Les textes oraux XTTS reformulent certains symboles visuels (« = » devient « veut dire ») ; les deux scores portent donc sur les textes prononcés attendus de chaque série. Le rapport détaillé est dans `verification-asr.json`.

Ces chiffres détectent surtout les omissions et mots inattendus. Ils **ne mesurent ni l'accent français natif, ni les liaisons, ni l'intonation, ni le confort d'écoute**. Les nombres écrits en chiffres et transcrits en lettres abaissent aussi artificiellement certains scores.

### Passages prioritaires pour une écoute humaine

| Fichier | Ce qu'il faut vérifier |
|---|---|
| `essai-1.mp3` | Gemini ne dure que 4,4 s et la transcription omet une grande partie de la consigne ; ne pas l'utiliser tel quel comme modèle. XTTS restitue davantage de texte, mais vérifier « Pour l'essai 2, ajoutez ». |
| `essai-3.mp3` | Whisper entend « Sans Venat » dans Gemini au lieu de « Sans vos notes » ; écouter avant de conclure à une erreur réelle. |
| `semaine-3.mp3` | Whisper entend un « ben » supplémentaire en fin de version XTTS ; vérifier à l'oreille si cette syllabe est réelle. |
| `ecoute-a-devine.mp3` | Après retrait des guillemets et oralisation de « = », l'accord XTTS remonte à 0,98 ; écouter les mots anglais « Plug » et « Charge ». |
| `diff-a.mp3`, `diff-b.mp3` | Vérifier « Plug & Charge », « ISO 15118 », « Chargemap » et les mots anglais au milieu du français. |
| `p2.mp3`, `q-a-0-expl.mp3` | Les guillemets faisaient auparavant prononcer des phonèmes parasites par XTTS ; vérifier que la version corrigée lit « Signer » et « la charge démarre » sans bruit verbal. |

## Décision pédagogique

La génération fonctionne hors ligne et sans quota API. **Il serait prématuré de choisir XTTS comme voix définitive pour un apprenant non francophone** sur la seule base de l'accord de transcription : les deux moteurs doivent être comparés à l'oreille par au moins un francophone natif. Ouvrir `../../comparaison-voix.html` via un serveur HTTP local et noter la version préférée pour chaque phrase (intonation, prononciation, liaisons, débit et absence d'artefacts).

Si XTTS est retenu, refaire au minimum un essai avec un enregistrement de référence propre de 10 à 20 secondes d'un locuteur natif français ayant autorisé le clonage. La référence actuelle issue de Gemini limite la portée du test. L'utilisation des sorties XTTS dans une formation rémunérée ou financée par subvention requiert une vérification préalable de la [Coqui Public Model License](https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt), qui n'autorise que les fins non commerciales.
