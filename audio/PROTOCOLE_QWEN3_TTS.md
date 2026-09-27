# Production et validation Qwen3-TTS — Plug & Charge B2

Les MP3 du dossier `qwen3-tts/` sont **intégrés techniquement** au support après validation de ce choix par l'utilisateur. Ils restent des **candidats non validés individuellement à l'écoute** et ne remplacent pas la voix authentique des extraits vidéo associés aux courbes de mélodie.

## Périmètre

Le catalogue éditorial `catalogue-elevenlabs-v2.json` contient 236 entrées. La génération Qwen couvre les 109 segments pédagogiques prédéfinis (`candidat_apres_ecoute_humaine`) et les 103 textes facultatifs d'interface/accessibilité (`optionnel_accessibilite`), soit 212 fichiers. Sont exclus : 11 segments de vidéo à conserver dans leur source authentique, 12 notes destinées au formateur et une saisie personnelle impossible à enregistrer d'avance.

Les fichiers facultatifs d'interface sont produits pour constituer un catalogue complet, **pas** pour être lus automatiquement pendant l'activité. Le panneau « Autres textes visibles à écouter » expose seulement les libellés facultatifs actuellement visibles dans l'étape. Les corrections, choix de QCM et phrases masquées conservent leurs règles d'apparition.

## Modèle et décision prosodique

- Modèle : `mlx-community/Qwen3-TTS-12Hz-1.7B-Base-8bit`, conversion MLX du modèle Qwen3-TTS Base, sur Mac M2. Cette version permet le clonage par `ref_audio` **et** `ref_text` ; elle n'a pas de voix prédéfinie ni de commande `instruct` de style. Les variantes CustomVoice et VoiceDesign offrent des instructions de style, mais ne conserveraient pas automatiquement la voix que l'utilisateur vient d'approuver. [Qwen3-TTS officiel](https://github.com/QwenLM/Qwen3-TTS), [documentation MLX-Audio](https://github.com/Blaizzy/mlx-audio/blob/main/docs/models/tts/qwen3-tts.md).
- La référence est `~/impact60_mesure/models/qwen3-tts/reference_atelier.wav`, hors dépôt. La transcription fournie couvre tout le contenu de la référence ; une vérification Whisper indépendante l'a retrouvée sans différence lexicale. Un transcript incomplet peut dégrader ou faire dérailler le clonage. [Retour de diagnostic MLX-Audio](https://github.com/Blaizzy/mlx-audio/issues/921).
- Le modèle reçoit seulement le texte à dire, la langue `French`, cette référence et sa transcription. Les champs `role`, `meaning`, `prosody` et `reveal` sont des indications **éditoriales pour la relecture**, pas des instructions secrètes envoyées au modèle. La fonction de la phrase est rendue principalement par les mots, la ponctuation et la segmentation.
- Une seule voix et une même référence servent à tout le parcours pour garder la continuité. Les options d'un même QCM ne reçoivent aucune intonation de « bonne réponse ». Une entrée identique dans le même rôle peut réutiliser un MP3 ; un même texte dans un rôle différent n'est pas automatiquement fusionné.
- Les longues explications sont découpées aux frontières de phrases pour limiter l'accélération du débit et les dérives signalées sur les longues générations par clonage. Les courtes pauses sont insérées *après* synthèse. Le modèle ne reçoit jamais les balises `<break>` prévues pour ElevenLabs. [Discussion MLX-Audio sur l'accélération du débit](https://github.com/Blaizzy/mlx-audio/issues/910).
- Une amorce inachevée reçoit une ellipse textuelle, puis une pause. Une phrase à trou est synthétisée de part et d'autre du mot absent et comporte un silence bref. Cela évite de prononcer la bonne réponse, mais **ne garantit pas** un contour de continuation natif : ces segments sont prioritaires pour l'écoute humaine. Si le résultat n'est pas convaincant, enregistrer la phrase avec un locuteur francophone natif ou construire une variante validée manuellement.
- Quelques textes d'interface dont la lecture littérale serait maladroite ont un libellé oral explicite dans `scripts/generer-qwen3tts.py` : « ex. », titres d'extraits et intitulé de vidéo. La consigne de mélodie « Enregistrez-vous seul·e » devient neutre (« Enregistrez-vous, puis comparez les courbes »). Le texte affiché du site reste inchangé.

## Exécution locale

Depuis la racine de l'atelier, avec l'environnement Qwen déjà installé :

```sh
../../.venv-qwen3tts/bin/python scripts/generer-qwen3tts.py --all
../../.venv-qwen3tts/bin/python scripts/generer-qwen3tts.py --check
```

Le script conserve un manifeste avec empreinte de la référence, du modèle, du texte et du rôle ; une reprise ne régénère que les fichiers nécessaires. Les MP3 sont encodés en 192 kb/s. Aucun secret ni fichier vocal de référence n'est ajouté au dépôt.

La vérification lexicale facultative utilise Whisper déjà installé sur ce Mac :

```sh
~/.hermes/workspaces/default/.venv-transcription/bin/python scripts/verifier-qwen3tts.py
```

Le rapport `qwen3-tts/qa-transcription.json` relève les divergences de mots et signale une réponse qui semble apparaître dans une phrase à trou. **Un faible écart de transcription ne valide ni l'accent, ni les liaisons, ni le rythme, ni l'intonation.**

Contrôle du lot du 27 septembre 2026 : **212 MP3 lisibles sur 212**, pour environ 11,2 minutes d'audio et 14 Mo ; 212 transcriptions Whisper sont à jour. Le taux d'erreur lexical brut est nul pour 177 segments et aucun des quatre mots-réponses des phrases à trou n'a été détecté avant la correction. Les 35 autres écarts ne sont pas 35 erreurs audio : Whisper écrit souvent des homophones différemment (`voix/voie`, `expliquez/expliquer`, pluriels silencieux, `sept/7`). Parmi les 109 segments pédagogiques, `gap-b-1` et `apres-bilan` sont les seuls à franchir le seuil automatique de réécoute : le premier contient volontairement un silence à la place d'« usine », et le second oppose des formes singulières/plurielles presque homophones. Leur prosodie demeure à vérifier à l'oreille.

## Validation pédagogique indispensable

Ouvrir `relecture-qwen3tts.html` depuis un serveur HTTP local. Comparer d'abord les six phrases professionnelles, les questions ouvertes et de confirmation, les amorces inachevées, les quatre trous, les noms/sigles (`Plug and Charge`, `Chargemap`, `ISO 15118`, `Tesla`) et les consignes longues. Écouter ensuite chaque segment destiné à servir de modèle. Vérifier la fidélité lexicale, la variété de français attendue, les liaisons, les accents de groupe, le débit, les respirations et la relation entre courbe mélodique et fonction communicative. Exporter les décisions de la page en CSV.

La sélection Qwen est désormais branchée sur le site à la demande de l'utilisateur. Avant diffusion à un apprenant non francophone, écouter et corriger les fichiers qui servent de modèle de prononciation ; ne jamais remplacer l'audio authentique sous les courbes mesurées. Aucune évaluation automatisée ne permet de promettre une prosodie « parfaitement native » pour 212 segments sans cette écoute.
