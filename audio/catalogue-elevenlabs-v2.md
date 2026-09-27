# Catalogue prosodique Eleven Multilingual v2 — Plug & Charge B2 v3 bis

Ce document présente les **236 entrées** du catalogue JSON, dans l’ordre du parcours.
**109 segments pédagogiques** sont à générer et valider ; 103 textes sont distincts après dédoublonnage.

> **Important :** aucun audio ElevenLabs n’a été généré ni validé. Seul le champ « Texte à prononcer » doit être envoyé comme texte à l’API. Le contexte et les indications de prosodie sont des notes éditoriales ; le modèle risque de les lire si on les inclut dans la requête.

Les citations de la vidéo sont présentes pour comparaison, mais leurs courbes de mélodie correspondent à l’enregistrement humain original. Les corrections et solutions ne deviennent audibles qu’après l’action prévue. Pour la méthode de choix de voix et de validation, voir [le protocole](PROTOCOLE_ELEVENLABS_V2.md).

## Légende des champs

- **Texte affiché** : texte à l’écran ou transcription lisible ; « [mot à compléter] » indique un champ vide.
- **Texte à prononcer** : version oralisée proposée pour Eleven Multilingual v2 ; les balises `<break … />` y sont intentionnelles et restent à valider à l’écoute.
- **Intention et prosodie** : critères pédagogiques pour choisir la voix, préparer le texte et juger l’enregistrement, non paramètres magiques du modèle.
- **Disponibilité** : respecte le dévoilement progressif des réponses et des corrections.
- **Destination audio** : fichier prévu, non encore créé. Une entrée « Réutilise » peut employer l’audio d’un texte identique.

## Accueil et situation

### 001 · intro-consigne

**Texte affiché** — Aujourd'hui, vous apprenez à expliquer quelque chose de compliqué avec des mots simples, puis à vérifier que l'autre a bien compris. En 1 minute, sans chercher vos mots.

**Texte à prononcer** — Aujourd'hui, vous apprenez à expliquer quelque chose de compliqué avec des mots simples, puis à vérifier que l'autre a bien compris. En une minute, sans chercher vos mots.

**Fonction** — accueil. Fonction accueil dans la section accueil et situation ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Accueil pédagogique : voix chaleureuse, rythme naturel, chute finale nette, sans enthousiasme publicitaire.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/intro-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 002 · sit-dialogue

**Texte affiché** — « On m'a parlé du nouvel outil de signature électronique. Tu peux m'expliquer simplement comment ça marche ? »

**Texte à prononcer** — On m'a parlé du nouvel outil de signature électronique. Tu peux m'expliquer simplement comment ça marche?

**Fonction** — question ouverte. Demander une information ou inviter une réponse.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sit-dialogue.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 003 · sit-mission

**Texte affiché** — Vous connaissez bien cet outil. Expliquez simplement, étape par étape, puis vérifiez qu'il a bien compris.

**Texte à prononcer** — Vous connaissez bien cet outil. Expliquez simplement, étape par étape, puis vérifiez qu'il a bien compris.

**Fonction** — situation. Fonction situation dans la section accueil et situation ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Scène professionnelle : parole spontanée crédible, registre courant, sans ton théâtral.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sit-mission.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 004 · sit-consigne

**Texte affiché** — Expliquez-lui. En 1 minute.

**Texte à prononcer** — Expliquez-lui. En une minute.

**Fonction** — consigne. Fonction consigne dans la section accueil et situation ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sit-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 005 · sit-perso-question

**Texte affiché** — Vous préférez un sujet de votre travail ? Dans votre entreprise, qu'est-ce que vous pourriez expliquer à un nouveau collègue ?

**Texte à prononcer** — Vous préférez un sujet de votre travail? Dans votre entreprise, qu'est-ce que vous pourriez expliquer à un nouveau collègue?

**Fonction** — question ouverte. Demander une information ou inviter une réponse.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sit-perso-question.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 006 · etape-0-titre

**Texte affiché** — Aujourd'hui

**Texte à prononcer** — Aujourd'hui

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 007 · titre-seance

**Texte affiché** — Expliquer simplement… et vérifier qu'on s'est compris

**Texte à prononcer** — Expliquer simplement… et vérifier qu'on s'est compris

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:meta.titreSeance`.

### 008 · titre-support

**Texte affiché** — Plug &amp; Charge

**Texte à prononcer** — Plug and Charge

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:meta.titre`.

### 009 · lieu-situation

**Texte affiché** — Au bureau, à la machine à café

**Texte à prononcer** — Au bureau, à la machine à café

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:sujet.lieu`.

### 010 · interlocuteur-situation

**Texte affiché** — Un nouveau collègue

**Texte à prononcer** — Un nouveau collègue

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:sujet.qui`.

### 011 · exemple-sujet-personnel

**Texte affiché** — ex. : un logiciel, une procédure, un projet, un service

**Texte à prononcer** — ex.: un logiciel, une procédure, un projet, un service

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:sujet.perso.exemple`.

### 012 · sujet-personnel-dynamique

**Texte affiché** — Un nouveau collègue vous demande de lui expliquer simplement : {x}. Expliquez étape par étape, puis vérifiez qu'il a bien compris.

**Texte à prononcer** — Aucun texte prédéfini.

**Fonction** — situation. Le contenu {x} est saisi librement par l’apprenant et inconnu au moment de la préparation.

**Prosodie attendue** — Scène professionnelle : parole spontanée crédible, registre courant, sans ton théâtral.

**Disponibilité** — Après la saisie personnelle. **Statut** — Texte personnel non pré-enregistrable.

**Contrôle** — Ne pas exposer de clé API dans GitHub Pages.

**Source** — `contenu.js:sujet.perso.phrase`.

## Accueil — interface

### 013 · interface-001

**Texte affiché** — Le programme

**Texte à prononcer** — Le programme

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 014 · interface-002

**Texte affiché** — Le sujet du jour

**Texte à prononcer** — Le sujet du jour

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 015 · interface-003

**Texte affiché** — Votre sujet

**Texte à prononcer** — Votre sujet

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 016 · interface-004

**Texte affiché** — Où ?

**Texte à prononcer** — Où?

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 017 · interface-005

**Texte affiché** — Qui parle ?

**Texte à prononcer** — Qui parle?

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 018 · interface-006

**Texte affiché** — Vous

**Texte à prononcer** — Vous

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 019 · interface-007

**Texte affiché** — À vous

**Texte à prononcer** — À vous

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 020 · interface-008

**Texte affiché** — Vous pouvez reprendre un sujet de votre semaine, dont vous avez parlé avec votre formateur.

**Texte à prononcer** — Vous pouvez reprendre un sujet de votre semaine, dont vous avez parlé avec votre formateur.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 021 · interface-009

**Texte affiché** — Le cours utilise le micro de votre ordinateur. Autorisez-le quand le navigateur le demande.

**Texte à prononcer** — Le cours utilise le micro de votre ordinateur. Autorisez-le quand le navigateur le demande.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

## Je parle 1 minute

### 022 · plan-1

**Texte affiché** — Le principe. Phrase utile : L'idée, c'est que…

**Texte à prononcer** — Le principe. Phrase utile: L'idée, c'est que&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Amorce de phrase à continuer oralement ; les points de suspension ne signifient pas une hésitation.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/plan-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 023 · plan-2

**Texte affiché** — Comment faire. Phrase utile : Il suffit de…

**Texte à prononcer** — Comment faire. Phrase utile: Il suffit de&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Amorce de phrase à continuer oralement ; les points de suspension ne signifient pas une hésitation.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/plan-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 024 · plan-3

**Texte affiché** — Une différence. Phrase utile : Ce n'est pas tout à fait la même chose que…

**Texte à prononcer** — Une différence. Phrase utile: Ce n'est pas tout à fait la même chose que&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Amorce de phrase à continuer oralement ; les points de suspension ne signifient pas une hésitation.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/plan-3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 025 · plan-4

**Texte affiché** — Vérifier. Phrase utile : On est bien d'accord que… ?

**Texte à prononcer** — Vérifier. Phrase utile: On est bien d'accord que&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Amorce de phrase à continuer oralement ; les points de suspension ne signifient pas une hésitation.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/plan-4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 026 · avant-consigne

**Texte affiché** — Donnez votre avis sur le sujet, sans préparer. Les erreurs ne sont pas un problème. À la fin du cours, vous parlerez encore 1 minute : vous verrez la différence.

**Texte à prononcer** — Donnez votre avis sur le sujet, sans préparer. Les erreurs ne sont pas un problème. À la fin du cours, vous parlerez encore une minute: vous verrez la différence.

**Fonction** — consigne. Fonction consigne dans la section avant ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avant-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 027 · auto-evaluation-difficulte-1

**Texte affiché** — Je cherchais mes mots

**Texte à prononcer** — Je cherchais mes mots

**Fonction** — administratif. Option d’autoévaluation, pas un modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas confondre avec une consigne.

**Source** — `contenu.js:difficultes[]`.

### 028 · auto-evaluation-difficulte-2

**Texte affiché** — Je ne savais pas comment commencer

**Texte à prononcer** — Je ne savais pas comment commencer

**Fonction** — administratif. Option d’autoévaluation, pas un modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas confondre avec une consigne.

**Source** — `contenu.js:difficultes[]`.

### 029 · auto-evaluation-difficulte-3

**Texte affiché** — Mon explication était trop compliquée

**Texte à prononcer** — Mon explication était trop compliquée

**Fonction** — administratif. Option d’autoévaluation, pas un modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas confondre avec une consigne.

**Source** — `contenu.js:difficultes[]`.

### 030 · auto-evaluation-difficulte-4

**Texte affiché** — Je n'étais pas sûr·e de ma prononciation

**Texte à prononcer** — Je n'étais pas sûr ou sûre de ma prononciation

**Fonction** — administratif. Option d’autoévaluation, pas un modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas confondre avec une consigne.

**Source** — `contenu.js:difficultes[]`.

### 031 · auto-evaluation-difficulte-5

**Texte affiché** — Rien de spécial

**Texte à prononcer** — Rien de spécial

**Fonction** — administratif. Option d’autoévaluation, pas un modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas confondre avec une consigne.

**Source** — `contenu.js:difficultes[]`.

### 032 · interface-010

**Texte affiché** — Vous pouvez suivre ce plan

**Texte à prononcer** — Vous pouvez suivre ce plan

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 033 · interface-011

**Texte affiché** — Enregistrez-vous

**Texte à prononcer** — Enregistrez-vous

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 034 · interface-012

**Texte affiché** — Pendant cette minute…

**Texte à prononcer** — Pendant cette minute…

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 035 · interface-013

**Texte affiché** — Touchez ce qui est vrai pour vous.

**Texte à prononcer** — Touchez ce qui est vrai pour vous.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 036 · etape-1-titre

**Texte affiché** — Je parle 1 minute

**Texte à prononcer** — Je parle une minute

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 037 · etape-1-description

**Texte affiché** — Je donne mon avis, sans préparer.

**Texte à prononcer** — Je donne mon avis, sans préparer.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

## J’écoute la vidéo

### 038 · ecoute-consigne

**Texte affiché** — Deux extraits courts. Pour chaque extrait : devinez, écoutez, répondez, réécoutez.

**Texte à prononcer** — Deux extraits courts. Pour chaque extrait: devinez, écoutez, répondez, réécoutez.

**Fonction** — consigne. Fonction consigne dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/ecoute-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 039 · ecoute-a-pourquoi

**Texte affiché** — Pourquoi cet extrait ? Le directeur technique explique une technologie compliquée avec des mots simples. C'est ce que vous allez faire.

**Texte à prononcer** — Pourquoi cet extrait? Le directeur technique explique une technologie compliquée avec des mots simples. C'est ce que vous allez faire.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/ecoute-a-pourquoi.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 040 · ecoute-a-devine

**Texte affiché** — « Plug » = brancher, « charge » = recharger. À votre avis, que fait le Plug &amp; Charge quand on branche une voiture électrique ? Répondez à voix haute.

**Texte à prononcer** — Plug veut dire brancher. Charge veut dire recharger. À votre avis, que fait le Plug and Charge quand on branche une voiture électrique ? Répondez à voix haute.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/ecoute-a-devine.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 041 · q-a-0

**Texte affiché** — Avec le Plug &amp; Charge, que se passe-t-il quand on branche la voiture ?

**Texte à prononcer** — Avec le Plug and Charge, que se passe-t-il quand on branche la voiture?

**Fonction** — question ouverte. Question de compréhension de l'extrait A ; demande une information factuelle.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 042 · q-a-0-option-0

**Texte affiché** — Il faut payer avec une carte bancaire.

**Texte à prononcer** — Il faut payer avec une carte bancaire.

**Fonction** — option neutre. Réponse possible à « Avec le Plug &amp; Charge, que se passe-t-il quand on branche la voiture ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-0-option-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 043 · q-a-0-option-1

**Texte affiché** — La recharge démarre toute seule, sans carte.

**Texte à prononcer** — La recharge démarre toute seule, sans carte.

**Fonction** — option neutre. Réponse possible à « Avec le Plug &amp; Charge, que se passe-t-il quand on branche la voiture ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-0-option-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 044 · q-a-0-option-2

**Texte affiché** — Il faut appeler l'opérateur.

**Texte à prononcer** — Il faut appeler l'opérateur.

**Fonction** — option neutre. Réponse possible à « Avec le Plug &amp; Charge, que se passe-t-il quand on branche la voiture ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-0-option-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 045 · q-a-0-expl

**Texte affiché** — La borne récupère l'identifiant installé dans la voiture, demande l'autorisation, et « la charge démarre » sans passer de carte.

**Texte à prononcer** — La borne récupère l'identifiant installé dans la voiture, demande l'autorisation, et la charge démarre sans passer de carte.

**Fonction** — correction. Explication de la réponse à « Avec le Plug &amp; Charge, que se passe-t-il quand on branche la voiture ? », révélée seulement après le choix.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après le choix au QCM. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-0-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 046 · q-a-1

**Texte affiché** — Selon lui, cette recharge est plus…

**Texte à prononcer** — Selon lui, cette recharge est plus&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Question de compréhension de l'extrait A ; amorce de phrase à compléter avec une option.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 047 · q-a-1-option-0

**Texte affiché** — chère et plus lente.

**Texte à prononcer** — chère et plus lente.

**Fonction** — option neutre. Réponse possible à « Selon lui, cette recharge est plus… » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-1-option-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 048 · q-a-1-option-1

**Texte affiché** — compliquée, mais plus rapide.

**Texte à prononcer** — compliquée, mais plus rapide.

**Fonction** — option neutre. Réponse possible à « Selon lui, cette recharge est plus… » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-1-option-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 049 · q-a-1-option-2

**Texte affiché** — simple et plus sûre.

**Texte à prononcer** — simple et plus sûre.

**Fonction** — option neutre. Réponse possible à « Selon lui, cette recharge est plus… » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-1-option-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 050 · q-a-1-expl

**Texte affiché** — « Une expérience beaucoup plus fluide de recharge, et beaucoup plus intéressante d'un point de vue sécurité. »

**Texte à prononcer** — Une expérience beaucoup plus fluide de recharge, et beaucoup plus intéressante d'un point de vue sécurité.

**Fonction** — correction. Explication de la réponse à « Selon lui, cette recharge est plus… », révélée seulement après le choix.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après le choix au QCM. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-a-1-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 051 · gap-a-0

**Texte affiché** — C'est un nouveau protocole de [mot à compléter] entre, d'un côté, le véhicule et, de l'autre, les bornes.

**Texte à prononcer** — C'est un nouveau protocole de &lt;break time="0.8s" /&gt; entre, d'un côté, le véhicule et, de l'autre, les bornes.

**Fonction** — trou. Phrase de l'extrait avec « communication » supprimé ; laisser un vrai silence à cet emplacement.

**Prosodie attendue** — Phrase à trou : silence bref à l'emplacement du mot absent, puis reprise naturelle ; ne jamais prononcer la solution avant la vérification.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas prononcer le mot manquant.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 052 · gap-a-0-aide

**Texte affiché** — Aide : = échange d'informations

**Texte à prononcer** — Indice : cela signifie échange d'informations

**Fonction** — indice. Indice pour retrouver « communication » ; ne jamais prononcer ce mot dans l'indice.

**Prosodie attendue** — Indice non révélateur : ton d'aide neutre, sans accentuer le mot qui serait la réponse.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-0-aide.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 053 · gap-a-0-sol

**Texte affiché** — C'est un nouveau protocole de communication entre, d'un côté, le véhicule et, de l'autre, les bornes.

**Texte à prononcer** — C'est un nouveau protocole de communication entre, d'un côté, le véhicule et, de l'autre, les bornes.

**Fonction** — correction. Phrase de l'extrait avec la solution « communication » ; révéler après vérification.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la vérification du texte à trou. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-0-sol.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 054 · gap-a-1

**Texte affiché** — C'est une expérience beaucoup plus [mot à compléter] de recharge.

**Texte à prononcer** — C'est une expérience beaucoup plus &lt;break time="0.8s" /&gt; de recharge.

**Fonction** — trou. Phrase de l'extrait avec « fluide » supprimé ; laisser un vrai silence à cet emplacement.

**Prosodie attendue** — Phrase à trou : silence bref à l'emplacement du mot absent, puis reprise naturelle ; ne jamais prononcer la solution avant la vérification.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas prononcer le mot manquant ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 055 · gap-a-1-aide

**Texte affiché** — Aide : = simple, sans blocage

**Texte à prononcer** — Indice : cela signifie simple, sans blocage

**Fonction** — indice. Indice pour retrouver « fluide » ; ne jamais prononcer ce mot dans l'indice.

**Prosodie attendue** — Indice non révélateur : ton d'aide neutre, sans accentuer le mot qui serait la réponse.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-1-aide.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 056 · gap-a-1-sol

**Texte affiché** — C'est une expérience beaucoup plus fluide de recharge.

**Texte à prononcer** — C'est une expérience beaucoup plus fluide de recharge.

**Fonction** — correction. Phrase de l'extrait avec la solution « fluide » ; révéler après vérification.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la vérification du texte à trou. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-a-1-sol.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 057 · diff-a

**Texte affiché** — Anglais, sigle et chiffres arrivent très vite : « Plug and Charge, ou plutôt, d'un point de vue technique, ISO 15118 ». Pas besoin de tout comprendre. Retenez l'expression utile : d'un point de vue technique (= si on regarde la technique).

**Texte à prononcer** — Anglais, sigle et chiffres arrivent très vite: Plug and Charge, ou plutôt, d'un point de vue technique, ISO quinze mille cent dix-huit. Pas besoin de tout comprendre. Retenez l'expression utile: d'un point de vue technique, c’est-à-dire si on regarde la technique.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/diff-a.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 058 · ecoute-b-pourquoi

**Texte affiché** — Pourquoi cet extrait ? Le journaliste reformule pour vérifier qu'il a compris, puis pose une question. Vous allez faire la même chose.

**Texte à prononcer** — Pourquoi cet extrait? Le journaliste reformule pour vérifier qu'il a compris, puis pose une question. Vous allez faire la même chose.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/ecoute-b-pourquoi.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 059 · ecoute-b-devine

**Texte affiché** — Le journaliste pense que, derrière cette simplicité, le système est très compliqué. À votre avis, pourquoi ? Répondez à voix haute.

**Texte à prononcer** — Le journaliste pense que, derrière cette simplicité, le système est très compliqué. À votre avis, pourquoi? Répondez à voix haute.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/ecoute-b-devine.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 060 · q-b-0

**Texte affiché** — Pourquoi le journaliste pense-t-il que c'est compliqué ?

**Texte à prononcer** — Pourquoi le journaliste pense-t-il que c'est compliqué?

**Fonction** — question ouverte. Question de compréhension de l'extrait B ; demande une information factuelle.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 061 · q-b-0-option-0

**Texte affiché** — Parce que les voitures électriques sont lentes.

**Texte à prononcer** — Parce que les voitures électriques sont lentes.

**Fonction** — option neutre. Réponse possible à « Pourquoi le journaliste pense-t-il que c'est compliqué ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-0-option-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 062 · q-b-0-option-1

**Texte affiché** — Parce qu'il y a des bornes, des réseaux, des marques et des modèles de voitures différents.

**Texte à prononcer** — Parce qu'il y a des bornes, des réseaux, des marques et des modèles de voitures différents.

**Fonction** — option neutre. Réponse possible à « Pourquoi le journaliste pense-t-il que c'est compliqué ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-0-option-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 063 · q-b-0-option-2

**Texte affiché** — Parce que l'application est payante.

**Texte à prononcer** — Parce que l'application est payante.

**Fonction** — option neutre. Réponse possible à « Pourquoi le journaliste pense-t-il que c'est compliqué ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-0-option-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 064 · q-b-0-expl

**Texte affiché** — « Il y a des bornes qui sont différentes, des réseaux de recharge différents, des marques de voitures différentes, des modèles de voitures différents. »

**Texte à prononcer** — Il y a des bornes qui sont différentes, des réseaux de recharge différents, des marques de voitures différentes, des modèles de voitures différents.

**Fonction** — correction. Explication de la réponse à « Pourquoi le journaliste pense-t-il que c'est compliqué ? », révélée seulement après le choix.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après le choix au QCM. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-0-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 065 · q-b-1

**Texte affiché** — Que veut dire « une usine à gaz » ici ?

**Texte à prononcer** — Que veut dire une usine à gaz ici?

**Fonction** — question ouverte. Question de compréhension de l'extrait B ; demande une information factuelle.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 066 · q-b-1-option-0

**Texte affiché** — Une usine qui produit du gaz.

**Texte à prononcer** — Une usine qui produit du gaz.

**Fonction** — option neutre. Réponse possible à « Que veut dire « une usine à gaz » ici ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-1-option-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 067 · q-b-1-option-1

**Texte affiché** — Un système beaucoup trop compliqué.

**Texte à prononcer** — Un système beaucoup trop compliqué.

**Fonction** — option neutre. Réponse possible à « Que veut dire « une usine à gaz » ici ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-1-option-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 068 · q-b-1-option-2

**Texte affiché** — Une borne de recharge.

**Texte à prononcer** — Une borne de recharge.

**Fonction** — option neutre. Réponse possible à « Que veut dire « une usine à gaz » ici ? » ; lire sans signaler si elle est juste ou fausse.

**Prosodie attendue** — Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-1-option-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas trahir la bonne réponse par l’intonation ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 069 · q-b-1-expl

**Texte affiché** — Une usine à gaz = un système trop compliqué. Une expression très courante au bureau.

**Texte à prononcer** — Une usine à gaz désigne un système trop compliqué. Une expression très courante au bureau.

**Fonction** — correction. Explication de la réponse à « Que veut dire « une usine à gaz » ici ? », révélée seulement après le choix.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après le choix au QCM. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/q-b-1-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 070 · gap-b-0

**Texte affiché** — Parce que, si j'ai bien [mot à compléter] , il faut que la voiture discute avec la borne.

**Texte à prononcer** — Parce que, si j'ai bien &lt;break time="0.8s" /&gt;, il faut que la voiture discute avec la borne.

**Fonction** — trou. Phrase de l'extrait avec « compris » supprimé ; laisser un vrai silence à cet emplacement.

**Prosodie attendue** — Phrase à trou : silence bref à l'emplacement du mot absent, puis reprise naturelle ; ne jamais prononcer la solution avant la vérification.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas prononcer le mot manquant.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 071 · gap-b-0-aide

**Texte affiché** — Aide : participe passé de « comprendre »

**Texte à prononcer** — Indice : participe passé de comprendre

**Fonction** — indice. Indice pour retrouver « compris » ; ne jamais prononcer ce mot dans l'indice.

**Prosodie attendue** — Indice non révélateur : ton d'aide neutre, sans accentuer le mot qui serait la réponse.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-0-aide.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 072 · gap-b-0-sol

**Texte affiché** — Parce que, si j'ai bien compris , il faut que la voiture discute avec la borne.

**Texte à prononcer** — Parce que, si j'ai bien compris, il faut que la voiture discute avec la borne.

**Fonction** — correction. Phrase de l'extrait avec la solution « compris » ; révéler après vérification.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la vérification du texte à trou. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-0-sol.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 073 · gap-b-1

**Texte affiché** — Ça me semble être une [mot à compléter] à gaz absolument extraordinaire.

**Texte à prononcer** — Ça me semble être une &lt;break time="0.8s" /&gt; à gaz absolument extraordinaire.

**Fonction** — trou. Phrase de l'extrait avec « usine » supprimé ; laisser un vrai silence à cet emplacement.

**Prosodie attendue** — Phrase à trou : silence bref à l'emplacement du mot absent, puis reprise naturelle ; ne jamais prononcer la solution avant la vérification.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Ne pas prononcer le mot manquant.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 074 · gap-b-1-aide

**Texte affiché** — Aide : = un grand bâtiment où l'on fabrique quelque chose

**Texte à prononcer** — Indice : cela signifie un grand bâtiment où l'on fabrique quelque chose

**Fonction** — indice. Indice pour retrouver « usine » ; ne jamais prononcer ce mot dans l'indice.

**Prosodie attendue** — Indice non révélateur : ton d'aide neutre, sans accentuer le mot qui serait la réponse.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-1-aide.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 075 · gap-b-1-sol

**Texte affiché** — Ça me semble être une usine à gaz absolument extraordinaire.

**Texte à prononcer** — Ça me semble être une usine à gaz absolument extraordinaire.

**Fonction** — correction. Phrase de l'extrait avec la solution « usine » ; révéler après vérification.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la vérification du texte à trou. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/gap-b-1-sol.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 076 · diff-b

**Texte affiché** — « Ça me semble être une usine à gaz absolument extraordinaire. À quel point c'est un challenge pour Chargemap, du coup ? » Du coup = donc : à l'oral, on l'entend partout. Un challenge = un défi (mot anglais très utilisé en entreprise).

**Texte à prononcer** — Ça me semble être une usine à gaz absolument extraordinaire. À quel point c'est un challenge pour Chargemap, du coup? Du coup veut dire donc: à l'oral, on l'entend partout. Un challenge veut dire un défi, mot anglais très utilisé en entreprise.

**Fonction** — explication. Fonction explication dans la section ecoute video ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/diff-b.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Comparer la prononciation du nom propre ou sigle avec la vidéo.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 077 · interface-014

**Texte affiché** — Avant d'écouter : devinez

**Texte à prononcer** — Avant d'écouter: devinez

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 078 · interface-015

**Texte affiché** — Écoutez l'extrait, puis répondez

**Texte à prononcer** — Écoutez l'extrait, puis répondez

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 079 · interface-016

**Texte affiché** — Écoutez encore, puis complétez

**Texte à prononcer** — Écoutez encore, puis complétez

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 080 · interface-017

**Texte affiché** — Le passage difficile

**Texte à prononcer** — Le passage difficile

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 081 · etape-2-titre

**Texte affiché** — J'écoute la vidéo

**Texte à prononcer** — J'écoute la vidéo

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 082 · etape-2-description

**Texte affiché** — Deux extraits courts.

**Texte à prononcer** — Deux extraits courts.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 083 · titre-video

**Texte affiché** — Tout comprendre au Plug &amp; Charge avec Chargemap ! (Automobile Propre)

**Texte à prononcer** — Tout comprendre au Plug and Charge avec Chargemap!, Automobile Propre

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:meta.video.titre`.

### 084 · titre-extrait-1

**Texte affiché** — Extrait 1 · Le Plug &amp; Charge en 40 secondes

**Texte à prononcer** — Extrait un Le Plug and Charge en 40 secondes

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html:R.ecoute + contenu.js:ecoute[].titre`.

### 085 · titre-extrait-2

**Texte affiché** — Extrait 2 · « Une usine à gaz » ?

**Texte à prononcer** — Extrait deux Une usine à gaz?

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html:R.ecoute + contenu.js:ecoute[].titre`.

## Six phrases utiles

### 086 · phrases-consigne

**Texte affiché** — Six phrases de la vidéo, très utiles en réunion. Pour chaque phrase : écoutez-la dans la vidéo, répétez-la à voix haute, puis dites votre propre phrase.

**Texte à prononcer** — Six phrases de la vidéo, très utiles en réunion. Pour chaque phrase : d’abord, écoutez-la dans la vidéo ; ensuite, répétez-la à voix haute ; enfin, dites votre propre phrase.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/phrases-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 087 · phrases-rappel

**Texte affiché** — Lisez à quoi elle sert, dites la phrase à voix haute, puis cliquez sur Voir la phrase.

**Texte à prononcer** — Lisez à quoi elle sert, dites la phrase à voix haute, puis cliquez sur Voir la phrase.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/phrases-rappel.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 088 · sert-p1

**Texte affiché** — Pour présenter le principe

**Texte à prononcer** — Pour présenter le principe

**Fonction** — explication. Fonction communicative de la formule L'idée, c'est que.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 089 · forme-p1

**Texte affiché** — L'idée, c'est que…

**Texte à prononcer** — L'idée, c'est que&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour présenter le principe ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 090 · p1

**Texte affiché** — L'idée, c'est que chaque client signe en ligne, sans imprimer le contrat.

**Texte à prononcer** — L'idée, c'est que chaque client signe en ligne, sans imprimer le contrat.

**Fonction** — phrase modele. Exemple professionnel complet : pour présenter le principe.

**Prosodie attendue** — Phrase à mémoriser : français professionnel courant, rythme conversationnel, accents de groupe et liaisons plausibles, sans surarticulation.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Vocabulaire professionnel articulé naturellement.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 091 · avous-p1

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 092 · sert-p2

**Texte affiché** — Pour montrer que c'est simple

**Texte à prononcer** — Pour montrer que c'est simple

**Fonction** — explication. Fonction communicative de la formule Il suffit de.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 093 · forme-p2

**Texte affiché** — Il suffit de…

**Texte à prononcer** — Il suffit de&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour montrer que c'est simple ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 094 · p2

**Texte affiché** — Il suffit d'ouvrir le document, de cliquer sur « Signer », et c'est fini.

**Texte à prononcer** — Il suffit d'ouvrir le document, de cliquer sur Signer, et c'est fini.

**Fonction** — phrase modele. Exemple professionnel complet : pour montrer que c'est simple.

**Prosodie attendue** — Phrase à mémoriser : français professionnel courant, rythme conversationnel, accents de groupe et liaisons plausibles, sans surarticulation.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 095 · avous-p2

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p2.mp3` ; réutilise `avous-p1`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 096 · sert-p3

**Texte affiché** — Pour reformuler ce que l'autre a dit

**Texte à prononcer** — Pour reformuler ce que l'autre a dit

**Fonction** — explication. Fonction communicative de la formule Si j'ai bien compris,.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 097 · forme-p3

**Texte affiché** — Si j'ai bien compris, …

**Texte à prononcer** — Si j'ai bien compris,&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour reformuler ce que l'autre a dit ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 098 · p3

**Texte affiché** — Si j'ai bien compris, le client signe en ligne, et nous recevons le contrat tout de suite.

**Texte à prononcer** — Si j'ai bien compris, le client signe en ligne, et nous recevons le contrat tout de suite.

**Fonction** — phrase modele. Exemple professionnel complet : pour reformuler ce que l'autre a dit.

**Prosodie attendue** — Phrase à mémoriser : français professionnel courant, rythme conversationnel, accents de groupe et liaisons plausibles, sans surarticulation.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Vocabulaire professionnel articulé naturellement.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 099 · avous-p3

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p3.mp3` ; réutilise `avous-p1`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 100 · sert-p4

**Texte affiché** — Pour vérifier un point important

**Texte à prononcer** — Pour vérifier un point important

**Fonction** — explication. Fonction communicative de la formule On est bien d'accord que.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 101 · forme-p4

**Texte affiché** — On est bien d'accord que… ?

**Texte à prononcer** — On est bien d'accord que&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour vérifier un point important ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 102 · p4

**Texte affiché** — On est bien d'accord que je signe une seule fois, et que le client reçoit une copie ?

**Texte à prononcer** — On est bien d'accord que je signe une seule fois, et que le client reçoit une copie?

**Fonction** — question confirmation. Exemple professionnel complet : pour vérifier un point important.

**Prosodie attendue** — Question de vérification : chercher l'accord de l'autre, cadence suspensive mesurée ; vérifier le contour réel à l'oreille.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 103 · avous-p4

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p4.mp3` ; réutilise `avous-p1`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 104 · sert-p5

**Texte affiché** — Pour demander une précision

**Texte à prononcer** — Pour demander une précision

**Fonction** — explication. Fonction communicative de la formule Quelle est la différence avec.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p5.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 105 · forme-p5

**Texte affiché** — Quelle est la différence avec… ?

**Texte à prononcer** — Quelle est la différence avec&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour demander une précision ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p5.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 106 · p5

**Texte affiché** — Quelle est la différence avec l'ancien système, du coup ?

**Texte à prononcer** — Quelle est la différence avec l'ancien système, du coup?

**Fonction** — question ouverte. Exemple professionnel complet : pour demander une précision.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p5.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 107 · avous-p5

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p5.mp3` ; réutilise `avous-p1`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 108 · sert-p6

**Texte affiché** — Pour corriger poliment (à l'oral, on dit souvent « c'est pas » au lieu de « ce n'est pas »)

**Texte à prononcer** — Pour corriger poliment, à l'oral, on dit souvent c'est pas au lieu de ce n'est pas

**Fonction** — explication. Fonction communicative de la formule Ce n'est pas tout à fait la même chose..

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/sert-p6.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 109 · forme-p6

**Texte affiché** — Ce n'est pas tout à fait la même chose.

**Texte à prononcer** — Ce n'est pas tout à fait la même chose&lt;break time="0.45s" /&gt;

**Fonction** — fragment inacheve. Formule réutilisable pour pour corriger poliment (à l'oral, on dit souvent « c'est pas » au lieu de « ce n'est pas ») ; l'apprenant doit fournir la suite.

**Prosodie attendue** — Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/forme-p6.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Cadence de continuation, sans hésitation ni chute finale.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 110 · p6

**Texte affiché** — Un devis et une facture, ce n'est pas tout à fait la même chose.

**Texte à prononcer** — Un devis et une facture, ce n'est pas tout à fait la même chose.

**Fonction** — phrase modele. Exemple professionnel complet : pour corriger poliment (à l'oral, on dit souvent « c'est pas » au lieu de « ce n'est pas »).

**Prosodie attendue** — Phrase à mémoriser : français professionnel courant, rythme conversationnel, accents de groupe et liaisons plausibles, sans surarticulation.

**Disponibilité** — Masqué en mode rappel jusqu’au clic « Voir la phrase ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/p6.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Vocabulaire professionnel articulé naturellement.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 111 · avous-p6

**Texte affiché** — Dites votre phrase à voix haute, sur votre travail.

**Texte à prononcer** — Dites votre phrase à voix haute, sur votre travail.

**Fonction** — consigne. Fonction consigne dans la section six phrases ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/avous-p6.mp3` ; réutilise `avous-p1`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 112 · video-p1

**Texte affiché** — Et l'idée, finalement, c'est qu'on va installer votre identifiant Chargemap dans le véhicule.

**Texte à prononcer** — Et l'idée, finalement, c'est qu'on va installer votre identifiant Chargemap dans le véhicule.

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 113 · video-p2

**Texte affiché** — Il suffit d'aller dans l'application Chargemap, de lancer le menu Plug and Charge.

**Texte à prononcer** — Il suffit d'aller dans l'application Chargemap, de lancer le menu Plug and Charge.

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 114 · video-p3

**Texte affiché** — Parce que, si j'ai bien compris, il faut que la voiture discute avec la borne, qui discute avec l'opérateur, et qui, après, interagit à nouveau avec la voiture.

**Texte à prononcer** — Parce que, si j'ai bien compris, il faut que la voiture discute avec la borne, qui discute avec l'opérateur, et qui, après, interagit à nouveau avec la voiture.

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 115 · video-p4

**Texte affiché** — D'accord, mais on est bien d'accord que cette manipulation de rentrer le VIN et tout ça, tu le fais une fois… au tout début ? (En même temps, l'autre répond : « Exactement. »)

**Texte à prononcer** — D'accord, mais on est bien d'accord que cette manipulation de rentrer le VIN et tout ça, tu le fais une fois, au tout début ?

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 116 · video-p5

**Texte affiché** — Alors je pense qu'il y a tout un pan de nos spectateurs qui vont se dire : « Mais enfin, chez Tesla, ça existe depuis des années. » Quelle est la différence avec ce que fait Tesla, du coup ?

**Texte à prononcer** — Alors je pense qu'il y a tout un pan de nos spectateurs qui vont se dire: Mais enfin, chez Tesla, ça existe depuis des années. Quelle est la différence avec ce que fait Tesla, du coup?

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 117 · video-p6

**Texte affiché** — Non, c'est pas tout à fait la même chose.

**Texte à prononcer** — Non, c'est pas tout à fait la même chose.

**Fonction** — video authentique. Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver les mots et la mélodie de la vidéo.

**Source** — `contenu.js:phrases[].film.texte`.

### 118 · interface-018

**Texte affiché** — Au travail

**Texte à prononcer** — Au travail

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 119 · interface-019

**Texte affiché** — À vous

**Texte à prononcer** — À vous

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 120 · etape-3-titre

**Texte affiché** — 6 phrases utiles

**Texte à prononcer** — six phrases utiles

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 121 · etape-3-description

**Texte affiché** — Des phrases de la vidéo pour mes réunions.

**Texte à prononcer** — Des phrases de la vidéo pour mes réunions.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

## La mélodie du français

### 122 · melo-intro

**Texte affiché** — Pour expliquer étape par étape, le français utilise la mélodie : à la fin de chaque étape, la voix monte. Cela veut dire : « ce n'est pas fini, écoutez la suite ».

**Texte à prononcer** — Pour expliquer étape par étape, le français utilise la mélodie: à la fin de chaque étape, la voix monte. Cela veut dire: ce n'est pas fini, écoutez la suite.

**Fonction** — explication. Fonction explication dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-intro.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 123 · melo-regle-0

**Texte affiché** — Découpez votre explication en étapes courtes.

**Texte à prononcer** — Découpez votre explication en étapes courtes.

**Fonction** — explication. Fonction explication dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-regle-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 124 · melo-regle-1

**Texte affiché** — À la fin de chaque étape, la voix monte : l'autre attend la suite.

**Texte à prononcer** — À la fin de chaque étape, la voix monte: l'autre attend la suite.

**Fonction** — explication. Fonction explication dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-regle-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 125 · melo-regle-2

**Texte affiché** — À la dernière étape, la voix ne monte plus : l'explication est finie.

**Texte à prononcer** — À la dernière étape, la voix ne monte plus: l'explication est finie.

**Fonction** — explication. Fonction explication dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-regle-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 126 · melo-attention

**Texte affiché** — Si votre voix descend à chaque étape, l'autre croit que vous avez fini… et il vous coupe la parole. Les flèches de cette page ont été placées d'après la voix réelle de la vidéo, mesurée.

**Texte à prononcer** — Si votre voix descend à chaque étape, l'autre croit que vous avez fini… et il vous coupe la parole. Les flèches de cette page ont été placées d'après la voix réelle de la vidéo, mesurée.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-attention.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 127 · melo-perception-0-consigne

**Texte affiché** — Le journaliste énumère 4 éléments. Écoutez : sur quelles syllabes la voix monte-t-elle nettement ? Cliquez sur les 2 syllabes, puis vérifiez.

**Texte à prononcer** — Le journaliste énumère quatre éléments. Écoutez: sur quelles syllabes la voix monte-t-elle nettement? Cliquez sur les deux syllabes, puis vérifiez.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-perception-0-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 128 · melo-perception-0-expl

**Texte affiché** — La voix monte sur « -rents » et « -rentes » (2e et 3e éléments) : la liste continue. Au dernier élément, elle ne monte plus : la liste est finie.

**Texte à prononcer** — La voix monte sur la dernière syllabe de différents et de différentes, les deuxième et troisième éléments de la liste : celle-ci continue. Au dernier élément, elle ne monte plus : la liste est finie.

**Fonction** — correction. Explication ou solution montrée après une action.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la validation des syllabes. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-perception-0-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 129 · melo-perception-1-consigne

**Texte affiché** — Cette phrase explique 3 étapes. Cliquez sur les 2 syllabes où la voix monte (fin des 2 premières étapes), puis vérifiez.

**Texte à prononcer** — Cette phrase explique trois étapes. Cliquez sur les deux syllabes où la voix monte, fin des deux premières étapes, puis vérifiez.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-perception-1-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 130 · melo-perception-1-expl

**Texte affiché** — « borne » et « -teur » : la voix monte, l'explication continue. À la fin (« voiture »), elle ne monte plus.

**Texte à prononcer** — La voix monte sur borne et sur la dernière syllabe d’opérateur : l’explication continue. À la fin, sur voiture, elle ne monte plus.

**Fonction** — correction. Explication ou solution montrée après une action.

**Prosodie attendue** — Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.

**Disponibilité** — Après la validation des syllabes. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-perception-1-expl.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 131 · melo-etape-0

**Texte affiché** — Écoutez la phrase 2 fois.

**Texte à prononcer** — Écoutez la phrase deux fois.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-etape-0.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 132 · melo-etape-1

**Texte affiché** — Parlez en même temps que la voix, 2 fois.

**Texte à prononcer** — Parlez en même temps que la voix, deux fois.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-etape-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 133 · melo-etape-2

**Texte affiché** — Enregistrez-vous seul·e et comparez les courbes.

**Texte à prononcer** — Enregistrez-vous seule et comparez les courbes.

**Fonction** — consigne. Fonction consigne dans la section melodie ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/melo-etape-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 134 · video-perception-1

**Texte affiché** — Il y a des bornes qui sont différentes, des réseaux de recharge dif·fé·*rents, des marques de voitures dif·fé·*rentes, des modèles de voitures différents.

**Texte à prononcer** — Il y a des bornes qui sont différentes, des réseaux de recharge différents, des marques de voitures différentes, des modèles de voitures différents.

**Fonction** — video authentique. Les points médians séparent les syllabes ; les astérisques indiquent une réponse, ils ne sont pas des sons.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver syllabes et contour de la vidéo.

**Source** — `contenu.js:prononciation.perception[].phrase`.

### 135 · video-perception-2

**Texte affiché** — Parce que si j'ai bien compris, il faut que la voiture discute avec la *borne, qui discute avec l'o·pé·ra·*teur, et qui après interagit à nouveau avec la voiture.

**Texte à prononcer** — Parce que si j'ai bien compris, il faut que la voiture discute avec la borne, qui discute avec l'opérateur, et qui après interagit à nouveau avec la voiture.

**Fonction** — video authentique. Les points médians séparent les syllabes ; les astérisques indiquent une réponse, ils ne sont pas des sons.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Conserver syllabes et contour de la vidéo.

**Source** — `contenu.js:prononciation.perception[].phrase`.

### 136 · video-modele-1

**Texte affiché** — Il y a des bornes qui sont différentes | des réseaux de recharge différents ↗ | des marques de voitures différentes ↗ | des modèles de voitures différents

**Texte à prononcer** — Il y a des bornes qui sont différentes, des réseaux de recharge différents, des marques de voitures différentes, des modèles de voitures différents.

**Fonction** — video authentique. Le signe |, les flèches et les syllabes en gras sont des annotations de la courbe mesurée sur la voix de la vidéo.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Ne pas associer un audio synthétique à une courbe issue de la vidéo.

**Source** — `contenu.js:prononciation.modeles[].texte`.

### 137 · video-modele-2

**Texte affiché** — Parce que si j'ai bien compris | il faut que la voiture discute avec la borne ↗ | qui discute avec l'opérateur ↗ | et qui après interagit à nouveau avec la voiture

**Texte à prononcer** — Parce que si j'ai bien compris, il faut que la voiture discute avec la borne, qui discute avec l'opérateur, et qui après interagit à nouveau avec la voiture.

**Fonction** — video authentique. Le signe |, les flèches et les syllabes en gras sont des annotations de la courbe mesurée sur la voix de la vidéo.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Ne pas associer un audio synthétique à une courbe issue de la vidéo.

**Source** — `contenu.js:prononciation.modeles[].texte`.

### 138 · video-modele-3

**Texte affiché** — Il suffit d'aller dans l'application Chargemap | de lancer le menu Plug and Charge ↗

**Texte à prononcer** — Il suffit d'aller dans l'application Chargemap, de lancer le menu Plug and Charge.

**Fonction** — video authentique. Le signe |, les flèches et les syllabes en gras sont des annotations de la courbe mesurée sur la voix de la vidéo.

**Prosodie attendue** — Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.

**Disponibilité** — Visible immédiatement. **Statut** — Essai comparatif uniquement ; conserver la vidéo dans le support.

**Contrôle** — Ne pas associer un audio synthétique à une courbe issue de la vidéo.

**Source** — `contenu.js:prononciation.modeles[].texte`.

### 139 · legende-melodie-1

**Texte affiché** — ↗ : la voix monte (mesuré dans la vidéo)

**Texte à prononcer** — La flèche montante indique que la voix monte.

**Fonction** — explication. Légende d’une notation visuelle de prosodie.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/legende-melodie-1.mp3`.

**Contrôle** — Expliquer le signe au lieu de lire le glyphe.

**Source** — `contenu.js:prononciation.legende[]`.

### 140 · legende-melodie-2

**Texte affiché** — ↘ : la voix descend

**Texte à prononcer** — La flèche descendante indique que la voix descend.

**Fonction** — explication. Légende d’une notation visuelle de prosodie.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/legende-melodie-2.mp3`.

**Contrôle** — Expliquer le signe au lieu de lire le glyphe.

**Source** — `contenu.js:prononciation.legende[]`.

### 141 · legende-melodie-3

**Texte affiché** — souligné : syllabe plus longue

**Texte à prononcer** — Le soulignement indique une syllabe plus longue.

**Fonction** — explication. Légende d’une notation visuelle de prosodie.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/legende-melodie-3.mp3`.

**Contrôle** — Expliquer le signe au lieu de lire le glyphe.

**Source** — `contenu.js:prononciation.legende[]`.

### 142 · legende-melodie-4

**Texte affiché** — | : fin d'une étape

**Texte à prononcer** — La barre verticale marque la fin d’une étape.

**Fonction** — explication. Légende d’une notation visuelle de prosodie.

**Prosodie attendue** — Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/legende-melodie-4.mp3`.

**Contrôle** — Expliquer le signe au lieu de lire le glyphe.

**Source** — `contenu.js:prononciation.legende[]`.

### 143 · interface-020

**Texte affiché** — La règle

**Texte à prononcer** — La règle

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 144 · interface-021

**Texte affiché** — Écoutez et trouvez

**Texte à prononcer** — Écoutez et trouvez

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 145 · interface-022

**Texte affiché** — Répétez comme dans la vidéo

**Texte à prononcer** — Répétez comme dans la vidéo

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 146 · etape-4-titre

**Texte affiché** — La mélodie du français

**Texte à prononcer** — La mélodie du français

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 147 · etape-4-description

**Texte affiché** — Je parle comme un francophone.

**Texte à prononcer** — Je parle comme un francophone.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 148 · titre-perception-1

**Texte affiché** — Phrase 1

**Texte à prononcer** — Phrase un

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:prononciation.perception[].titre`.

### 149 · titre-perception-2

**Texte affiché** — Phrase 2

**Texte à prononcer** — Phrase deux

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `contenu.js:prononciation.perception[].titre`.

## Je m’entraîne trois fois

### 150 · entrainement-consigne

**Texte affiché** — Le même sujet, 3 fois, de plus en plus court. Avant chaque essai, vous ajoutez une chose.

**Texte à prononcer** — Le même sujet, trois fois, de plus en plus court. Avant chaque essai, vous ajoutez une chose.

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/entrainement-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 151 · entrainement-preparation

**Texte affiché** — Notez seulement des mots-clés, pas de phrases.

**Texte à prononcer** — Notez seulement des mots-clés, pas de phrases.

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/entrainement-preparation.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 152 · essai-1

**Texte affiché** — Expliquez avec vos notes.

**Texte à prononcer** — Expliquez avec vos notes.

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/essai-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 153 · essai-1-ajout

**Texte affiché** — Pour l'essai 2, ajoutez : « L'idée, c'est que… » et « Il suffit de… ». Et faites monter la voix à la fin de chaque étape.

**Texte à prononcer** — Pour l'essai deux, ajoutez: L'idée, c'est que… et Il suffit de…. Et faites monter la voix à la fin de chaque étape.

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/essai-1-ajout.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 154 · essai-2

**Texte affiché** — Votre formateur joue le collègue et vous pose une question. Répondez, puis vérifiez avec : « On est bien d'accord que… ? »

**Texte à prononcer** — Votre formateur joue le collègue et vous pose une question. Répondez, puis vérifiez avec: On est bien d'accord que…?

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/essai-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 155 · essai-2-ajout

**Texte affiché** — Pour l'essai 3, commencez votre réponse à la question par : « Si j'ai bien compris, … ».

**Texte à prononcer** — Pour l'essai trois, commencez votre réponse à la question par: Si j'ai bien compris, ….

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/essai-2-ajout.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 156 · essai-3

**Texte affiché** — Sans vos notes. Seulement l'essentiel.

**Texte à prononcer** — Sans vos notes. Seulement l'essentiel.

**Fonction** — consigne. Fonction consigne dans la section entrainement ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/essai-3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 157 · obj-1

**Texte affiché** — Mais concrètement, je dois faire quoi ?

**Texte à prononcer** — Mais concrètement, je dois faire quoi?

**Fonction** — question ouverte. Demander une information ou inviter une réponse.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Après le clic sur « Question du collègue ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/obj-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 158 · obj-2

**Texte affiché** — Quelle est la différence avec l'ancien système, du coup ?

**Texte à prononcer** — Quelle est la différence avec l'ancien système, du coup?

**Fonction** — question ouverte. Demander une information ou inviter une réponse.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Après le clic sur « Question du collègue ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/obj-2.mp3` ; réutilise `p5`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 159 · obj-3

**Texte affiché** — Et si ça ne marche pas ?

**Texte à prononcer** — Et si ça ne marche pas?

**Fonction** — question ouverte. Demander une information ou inviter une réponse.

**Prosodie attendue** — Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.

**Disponibilité** — Après le clic sur « Question du collègue ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/obj-3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 160 · obj-4

**Texte affiché** — Ça me semble être une usine à gaz, non ?

**Texte à prononcer** — Ça me semble être une usine à gaz, non?

**Fonction** — question confirmation. Obtenir une confirmation réelle de l’interlocuteur.

**Prosodie attendue** — Question de vérification : chercher l'accord de l'autre, cadence suspensive mesurée ; vérifier le contour réel à l'oreille.

**Disponibilité** — Après le clic sur « Question du collègue ». **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/obj-4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France ; Intonation interrogative adaptée, sans caricature.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 161 · interface-023

**Texte affiché** — Préparez (1 minute)

**Texte à prononcer** — Préparez, une minute

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 162 · interface-024

**Texte affiché** — Vos 3 essais en chiffres

**Texte à prononcer** — Vos trois essais en chiffres

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 163 · etape-5-titre

**Texte affiché** — Je m'entraîne 3 fois

**Texte à prononcer** — Je m'entraîne trois fois

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 164 · etape-5-description

**Texte affiché** — Le même sujet, de plus en plus court.

**Texte à prononcer** — Le même sujet, de plus en plus court.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 165 · titre-essai-1

**Texte affiché** — Essai 1

**Texte à prononcer** — Essai un

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html:R.entrainement`.

### 166 · titre-essai-2

**Texte affiché** — Essai 2

**Texte à prononcer** — Essai deux

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html:R.entrainement`.

### 167 · titre-essai-3

**Texte affiché** — Essai 3

**Texte à prononcer** — Essai trois

**Fonction** — administratif. Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html:R.entrainement`.

## Je reparle 1 minute

### 168 · apres-consigne

**Texte affiché** — Le même sujet qu'au début. Parlez 1 minute, sans vos notes.

**Texte à prononcer** — Le même sujet qu'au début. Parlez une minute, sans vos notes.

**Fonction** — consigne. Fonction consigne dans la section apres ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/apres-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 169 · apres-bilan

**Texte affiché** — Quelles phrases utiles avez-vous dites ? Réécoutez-vous et cochez.

**Texte à prononcer** — Quelles phrases utiles avez-vous dites? Réécoutez-vous et cochez.

**Fonction** — consigne. Fonction consigne dans la section apres ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/apres-bilan.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 170 · interface-025

**Texte affiché** — Début et fin du cours

**Texte à prononcer** — Début et fin du cours

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 171 · etape-6-titre

**Texte affiché** — Je reparle 1 minute

**Texte à prononcer** — Je reparle une minute

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 172 · etape-6-description

**Texte affiché** — Je compare avec le début.

**Texte à prononcer** — Je compare avec le début.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

## Mon objectif de la semaine

### 173 · objectif-consigne

**Texte affiché** — Choisissez une phrase utile. Dites-la cette semaine, dans une vraie réunion ou un vrai appel.

**Texte à prononcer** — Choisissez une phrase utile. Dites-la cette semaine, dans une vraie réunion ou un vrai appel.

**Fonction** — consigne. Fonction consigne dans la section semaine ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/objectif-consigne.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 174 · semaine-1

**Texte affiché** — Jour 1 : Répétez les 3 phrases de la mélodie avec la vidéo, en même temps que la voix (5 minutes).

**Texte à prononcer** — Jour un: Répétez les trois phrases de la mélodie avec la vidéo, en même temps que la voix, cinq minutes.

**Fonction** — consigne. Fonction consigne dans la section semaine ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/semaine-1.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 175 · semaine-2

**Texte affiché** — Jour 2 : Dites les 6 phrases utiles sans regarder (bouton « Vérifier sans regarder »).

**Texte à prononcer** — Jour deux: Dites les six phrases utiles sans regarder, bouton Vérifier sans regarder.

**Fonction** — consigne. Fonction consigne dans la section semaine ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/semaine-2.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 176 · semaine-3

**Texte affiché** — Jour 3 : En réunion, reformulez une fois : « Si j'ai bien compris, … ».

**Texte à prononcer** — Jour trois. En réunion, reformulez une fois : si j’ai bien compris&lt;break time="0.45s" /&gt;

**Fonction** — consigne. Fonction consigne dans la section semaine ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/semaine-3.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 177 · semaine-4

**Texte affiché** — Jour 4 : Enregistrez 1 minute : expliquez un outil de votre travail, et envoyez-la à votre formateur.

**Texte à prononcer** — Jour quatre: Enregistrez une minute: expliquez un outil de votre travail, et envoyez-la à votre formateur.

**Fonction** — consigne. Fonction consigne dans la section semaine ; conserver le sens de la consigne ou de la phrase affichée.

**Prosodie attendue** — Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.

**Disponibilité** — Visible immédiatement. **Statut** — À générer puis à valider à l’écoute.

**Destination audio** — `audio/elevenlabs-v2/semaine-4.mp3`.

**Contrôle** — Texte intégral, sans ajout ni omission ; Accent naturel de français de France.

**Source** — `audio/catalogue.js + contenu.js ou index.html`.

### 178 · interface-026

**Texte affiché** — Ma phrase de la semaine

**Texte à prononcer** — Ma phrase de la semaine

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 179 · interface-027

**Texte affiché** — Quand ?

**Texte à prononcer** — Quand?

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 180 · interface-028

**Texte affiché** — Ma phrase exacte

**Texte à prononcer** — Ma phrase exacte

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 181 · interface-029

**Texte affiché** — 10 minutes par jour (facultatif)

**Texte à prononcer** — dix minutes par jour, facultatif

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 182 · interface-030

**Texte affiché** — Envoyer mon travail au formateur

**Texte à prononcer** — Envoyer mon travail au formateur

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 183 · interface-031

**Texte affiché** — Vos réponses restent dans ce navigateur. Copiez-les et envoyez-les à votre formateur.

**Texte à prononcer** — Vos réponses restent dans ce navigateur. Copiez-les et envoyez-les à votre formateur.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 184 · interface-032

**Texte affiché** — Pour aller plus loin (facultatif)

**Texte à prononcer** — Pour aller plus loin, facultatif

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 185 · interface-033

**Texte affiché** — Seulement après le cours, si vous voulez pratiquer davantage.

**Texte à prononcer** — Seulement après le cours, si vous voulez pratiquer davantage.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 186 · etape-7-titre

**Texte affiché** — Mon objectif de la semaine

**Texte à prononcer** — Mon objectif de la semaine

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 187 · etape-7-description

**Texte affiché** — Une phrase à dire au travail.

**Texte à prononcer** — Une phrase à dire au travail.

**Fonction** — administratif. Résumé de l’étape dans le programme.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 188 · lien-plus-loin-1

**Texte affiché** — Regarder la vidéo en entier (7 min)

**Texte à prononcer** — Regarder la vidéo en entier, sept min

**Fonction** — administratif. Libellé de lien, pas modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Lien accessible au clavier.

**Source** — `contenu.js:meta.plusLoin[]`.

### 189 · lien-plus-loin-2

**Texte affiché** — Lire l'article d'Automobile Propre sur le Plug &amp; Charge

**Texte à prononcer** — Lire l'article d'Automobile Propre sur le Plug and Charge

**Fonction** — administratif. Libellé de lien, pas modèle de prononciation.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Lien accessible au clavier.

**Source** — `contenu.js:meta.plusLoin[]`.

## Espace formateur

### 190 · etape-8-titre

**Texte affiché** — Espace formateur

**Texte à prononcer** — Espace formateur

**Fonction** — administratif. Titre de navigation et d’étape, pas consigne complète.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Visible immédiatement. **Statut** — Accessibilité facultative.

**Contrôle** — Ne remplace pas la consigne détaillée.

**Source** — `index.html:STEPS[]`.

### 191 · formateur-deroule-1

**Texte affiché** — 0–3 minutes — Je parle 1 minute. Choisissez le sujet pendant la discussion libre (champ « Mon sujet » : un outil ou une procédure de son travail). 1 minute, sans correction.

**Texte à prononcer** — Je parle une minute. Choisissez le sujet pendant la discussion libre, champ Mon sujet: un outil ou une procédure de son travail. une minute, sans correction.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 192 · formateur-deroule-2

**Texte affiché** — 3–11 minutes — J'écoute la vidéo. Parole spontanée très rapide (environ 191 mots/min). Faites deviner avant chaque écoute. Le passage difficile se réécoute seul.

**Texte à prononcer** — J'écoute la vidéo. Parole spontanée très rapide, environ 191 mots/min. Faites deviner avant chaque écoute. Le passage difficile se réécoute seul.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 193 · formateur-deroule-3

**Texte affiché** — 11–20 minutes — 6 phrases utiles. Moitié « expliquer » (p1, p2, p6), moitié « vérifier » (p3, p4, p5). Faites adapter l'exemple au métier de l'apprenant.

**Texte à prononcer** — six phrases utiles. Moitié expliquer, p1, p2, p6, moitié vérifier, p3, p4, p5. Faites adapter l'exemple au métier de l'apprenant.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 194 · formateur-deroule-4

**Texte affiché** — 20–26 minutes — La mélodie. Cible : la voix monte à la fin de chaque étape d'une explication ou d'une liste. Syllabes à cliquer, puis shadowing et courbes.

**Texte à prononcer** — La mélodie. Cible: la voix monte à la fin de chaque étape d'une explication ou d'une liste. Syllabes à cliquer, puis shadowing et courbes.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 195 · formateur-deroule-5

**Texte affiché** — 26–38 minutes — Je m'entraîne 3 fois. Vous jouez le collègue. À l'essai 2, lisez une question (« Question du collègue »). Retour entre les essais : 2 points au maximum.

**Texte à prononcer** — Je m'entraîne trois fois. Vous jouez le collègue. À l'essai deux, lisez une question, Question du collègue. Retour entre les essais: deux points au maximum.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 196 · formateur-deroule-6

**Texte affiché** — 38–41 minutes — Je reparle 1 minute. Même sujet qu'au début. Commentez les 3 chiffres avec l'apprenant.

**Texte à prononcer** — Je reparle une minute. Même sujet qu'au début. Commentez les trois chiffres avec l'apprenant.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 197 · formateur-deroule-7

**Texte affiché** — 41–45 minutes — Objectif de la semaine. Une phrase, une réunion réelle, une date.

**Texte à prononcer** — Objectif de la semaine. Une phrase, une réunion réelle, une date.

**Fonction** — administratif. Guide réservé au formateur, non diffusé à l’apprenant.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.deroule[]`.

### 198 · formateur-note-1

**Texte affiché** — Vidéo : vraie conversation spontanée entre un journaliste d'Automobile Propre (Pierre) et le directeur technique de Chargemap. Hésitations, « euh », « du coup », « c'est pas » : de l'oral authentique.

**Texte à prononcer** — Vidéo: vraie conversation spontanée entre un journaliste d'Automobile Propre, Pierre et le directeur technique de Chargemap. Hésitations, euh, du coup, c'est pas: de l'oral authentique.

**Fonction** — administratif. Note méthodologique réservée au formateur.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.notes[]`.

### 199 · formateur-note-2

**Texte affiché** — Extraits des phrases utiles : coupés dans des silences, puis retranscrits un par un avec deux modèles Whisper pour vérifier qu'aucun mot ne manque.

**Texte à prononcer** — Extraits des phrases utiles: coupés dans des silences, puis retranscrits un par un avec deux modèles Whisper pour vérifier qu'aucun mot ne manque.

**Fonction** — administratif. Note méthodologique réservée au formateur.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.notes[]`.

### 200 · formateur-note-3

**Texte affiché** — Mélodie : les flèches viennent de mesures sur la voix réelle. Dans cette conversation, la question « …tu le fais une fois ? » ne monte pas à la fin : c'est pourquoi la cible n'est pas « la question monte », mais « la voix monte à chaque étape d'une explication » (nettement mesuré).

**Texte à prononcer** — Mélodie: les flèches viennent de mesures sur la voix réelle. Dans cette conversation, la question …tu le fais une fois? ne monte pas à la fin: c'est pourquoi la cible n'est pas la question monte, mais la voix monte à chaque étape d'une explication, nettement mesuré.

**Fonction** — administratif. Note méthodologique réservée au formateur.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.notes[]`.

### 201 · formateur-note-4

**Texte affiché** — La transcription automatique de YouTube écrit « Chargem Map », « ISO 1518 », « la FIR » : il faut lire Chargemap, ISO 15118 et AFIR (règlement européen).

**Texte à prononcer** — La transcription automatique de YouTube écrit Chargem Map, ISO 1518, la FIR: il faut lire Chargemap, ISO 15118 et AFIR, règlement européen.

**Fonction** — administratif. Note méthodologique réservée au formateur.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.notes[]`.

### 202 · formateur-note-5

**Texte affiché** — « C'est pas » (oral) et « ce n'est pas » (écrit, réunion formelle) : un bon point de discussion sur le registre.

**Texte à prononcer** — C'est pas, oral et ce n'est pas, écrit, réunion formelle: un bon point de discussion sur le registre.

**Fonction** — administratif. Note méthodologique réservée au formateur.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Dans l’espace formateur. **Statut** — Réservé au formateur.

**Contrôle** — Ne pas révéler la conduite du cours à l’apprenant.

**Source** — `contenu.js:formateur.notes[]`.

## Navigation

### 203 · interface-034

**Texte affiché** — Commencer

**Texte à prononcer** — Commencer

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 204 · interface-035

**Texte affiché** — Retour

**Texte à prononcer** — Retour

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 205 · interface-036

**Texte affiché** — Étape suivante

**Texte à prononcer** — Étape suivante

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 206 · interface-037

**Texte affiché** — Terminer le cours

**Texte à prononcer** — Terminer le cours

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 207 · interface-038

**Texte affiché** — Revenir au début

**Texte à prononcer** — Revenir au début

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

## Messages et commandes de l’interface

### 208 · interface-039

**Texte affiché** — Écouter

**Texte à prononcer** — Écouter

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 209 · interface-040

**Texte affiché** — Arrêter

**Texte à prononcer** — Arrêter

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 210 · interface-041

**Texte affiché** — Un peu plus lent

**Texte à prononcer** — Un peu plus lent

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 211 · interface-042

**Texte affiché** — En boucle

**Texte à prononcer** — En boucle

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 212 · interface-043

**Texte affiché** — Vérifier

**Texte à prononcer** — Vérifier

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 213 · interface-044

**Texte affiché** — Voir la phrase

**Texte à prononcer** — Voir la phrase

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 214 · interface-045

**Texte affiché** — Je la connais

**Texte à prononcer** — Je la connais

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 215 · interface-046

**Texte affiché** — À revoir

**Texte à prononcer** — À revoir

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 216 · interface-047

**Texte affiché** — Démarrer

**Texte à prononcer** — Démarrer

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 217 · interface-048

**Texte affiché** — Pause

**Texte à prononcer** — Pause

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 218 · interface-049

**Texte affiché** — Reprendre

**Texte à prononcer** — Reprendre

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 219 · interface-050

**Texte affiché** — Réinitialiser

**Texte à prononcer** — Réinitialiser

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 220 · interface-051

**Texte affiché** — Enregistrer

**Texte à prononcer** — Enregistrer

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 221 · interface-052

**Texte affiché** — Recommencer

**Texte à prononcer** — Recommencer

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 222 · interface-053

**Texte affiché** — Le micro ne marche pas ?

**Texte à prononcer** — Le micro ne marche pas?

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 223 · interface-054

**Texte affiché** — Télécharger (pour le formateur)

**Texte à prononcer** — Télécharger, pour le formateur

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 224 · interface-055

**Texte affiché** — Copier mes réponses

**Texte à prononcer** — Copier mes réponses

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 225 · interface-056

**Texte affiché** — Tout effacer

**Texte à prononcer** — Tout effacer

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 226 · interface-057

**Texte affiché** — Le lecteur ne s'ouvre pas ici.

**Texte à prononcer** — Le lecteur ne s'ouvre pas ici.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 227 · interface-058

**Texte affiché** — La vidéo ne démarre pas.

**Texte à prononcer** — La vidéo ne démarre pas.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 228 · interface-059

**Texte affiché** — L'audio ne peut pas être chargé.

**Texte à prononcer** — L'audio ne peut pas être chargé.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 229 · interface-060

**Texte affiché** — Dites la phrase une fois, puis cliquez sur « Arrêter ».

**Texte à prononcer** — Dites la phrase une fois, puis cliquez sur Arrêter.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 230 · interface-061

**Texte affiché** — Parlez sans vous arrêter. Les erreurs ne sont pas un problème.

**Texte à prononcer** — Parlez sans vous arrêter. Les erreurs ne sont pas un problème.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 231 · interface-062

**Texte affiché** — Je n'entends rien. Vérifiez le micro, puis recommencez.

**Texte à prononcer** — Je n'entends rien. Vérifiez le micro, puis recommencez.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 232 · interface-063

**Texte affiché** — Le son est faible ou il y a du bruit : ces chiffres sont approximatifs.

**Texte à prononcer** — Le son est faible ou il y a du bruit: ces chiffres sont approximatifs.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 233 · interface-064

**Texte affiché** — Vos chiffres sont gardés. Le son, lui, disparaît quand vous fermez la page.

**Texte à prononcer** — Vos chiffres sont gardés. Le son, lui, disparaît quand vous fermez la page.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 234 · interface-065

**Texte affiché** — C'est fini. Réécoutez-vous une fois.

**Texte à prononcer** — C'est fini. Réécoutez-vous une fois.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 235 · interface-066

**Texte affiché** — Ce navigateur ne peut pas enregistrer. Utilisez le dictaphone de votre téléphone.

**Texte à prononcer** — Ce navigateur ne peut pas enregistrer. Utilisez le dictaphone de votre téléphone.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

### 236 · interface-067

**Texte affiché** — Le micro est bloqué. Cliquez sur l'icône à gauche de l'adresse du site et autorisez le micro, puis recommencez. Ou utilisez le dictaphone de votre téléphone.

**Texte à prononcer** — Le micro est bloqué. Cliquez sur l'icône à gauche de l'adresse du site et autorisez le micro, puis recommencez. Ou utilisez le dictaphone de votre téléphone.

**Fonction** — administratif. Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.

**Prosodie attendue** — Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.

**Disponibilité** — Selon l’état de l’interface. **Statut** — Accessibilité facultative.

**Contrôle** — Ne pas lire automatiquement pendant une activité.

**Source** — `index.html (libellé ou message fixe)`.

## Références ElevenLabs

- https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices
- https://elevenlabs.io/docs/help-center/product/core-capabilities/text-to-speech/how-can-i-add-pauses
- https://elevenlabs.io/docs/api-reference/text-to-speech/convert
- https://elevenlabs.io/docs/help-center/troubleshooting/why-does-my-voice-change-accent-or-language
- https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech
