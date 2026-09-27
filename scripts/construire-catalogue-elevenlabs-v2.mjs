#!/usr/bin/env node
/* Catalogue éditorial : le contexte n'est jamais envoyé comme texte parlé à ElevenLabs. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentSource = fs.readFileSync(path.join(root, 'contenu.js'), 'utf8');
const htmlSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const catSource = fs.readFileSync(path.join(root, 'audio/catalogue.js'), 'utf8');
const ctx = {window: {}};
vm.runInNewContext(contentSource, ctx);
vm.runInNewContext(catSource, ctx);
const C = ctx.window.IMPACT60;
const current = ctx.window.impactAudioCatalogue(C);
const strip = text => String(text).replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ').trim();
const sha = text => crypto.createHash('sha256').update(text).digest('hex');

const profiles = {
  accueil: "Accueil pédagogique : voix chaleureuse, rythme naturel, chute finale nette, sans enthousiasme publicitaire.",
  consigne: "Instruction adressée à l'apprenant : articulation nette, impératifs encourageants, groupes de sens courts, chute non dramatique.",
  explication: "Explication : faire entendre les rapports logiques, respirer aux frontières d'idées, ne pas suraccentuer chaque mot.",
  situation: "Scène professionnelle : parole spontanée crédible, registre courant, sans ton théâtral.",
  question_ouverte: "Question authentique de demande d'information : curiosité discrète ; ne pas imposer une montée finale systématique.",
  question_confirmation: "Question de vérification : chercher l'accord de l'autre, cadence suspensive mesurée ; vérifier le contour réel à l'oreille.",
  option_neutre: "Option de réponse : même énergie et débit que les autres options ; ne pas révéler la bonne réponse par l'intonation.",
  fragment_inacheve: "Début de phrase à compléter : pas de chute de conclusion ni de nervosité ; contrôle humain obligatoire, car la synthèse peut clôturer ou hésiter.",
  trou: "Phrase à trou : silence bref à l'emplacement du mot absent, puis reprise naturelle ; ne jamais prononcer la solution avant la vérification.",
  indice: "Indice non révélateur : ton d'aide neutre, sans accentuer le mot qui serait la réponse.",
  correction: "Correction révélée : ton explicatif, non réprobateur, chute naturelle ; uniquement après l'action de l'apprenant.",
  phrase_modele: "Phrase à mémoriser : français professionnel courant, rythme conversationnel, accents de groupe et liaisons plausibles, sans surarticulation.",
  enumeration: "Énumération : groupes lisibles ; poursuivre sur les éléments non finaux, conclure seulement sur le dernier.",
  administratif: "Texte d'interface ou de suivi : information claire et brève, sans rôle de modèle de prononciation.",
  video_authentique: "Référence de vidéo : conserver l'intonation humaine originale ; ne pas remplacer par une synthèse sous les courbes mesurées.",
};

const words = new Map([
  ['1', 'un'], ['2', 'deux'], ['3', 'trois'], ['4', 'quatre'],
  ['5', 'cinq'], ['6', 'six'], ['7', 'sept'], ['8', 'huit'],
  ['10', 'dix'], ['45', 'quarante-cinq'], ['60', 'soixante'], ['90', 'quatre-vingt-dix'],
]);
function oralize(text) {
  let out = strip(text).replace(/↗|↘|\||·|\*/g, '');
  out = out.replace(/seul·e/gi, 'seul ou seule');
  out = out.replace(/Plug\s*&\s*Charge/gi, 'Plug and Charge');
  out = out.replace(/«\s*|\s*»/g, '');
  out = out.replace(/\(=\s*/g, ', c’est-à-dire ').replace(/\s*=\s*/g, ' veut dire ');
  out = out.replace(/\(/g, ', ').replace(/\)/g, '');
  out = out.replace(/\b\d+\b/g, value => words.get(value) || value);
  out = out.replace(/\bun minute\b/gi, 'une minute').replace(/\bun fois\b/gi, 'une fois');
  out = out.replace(/\s+([.,?!:;])/g, '$1').replace(/\s+/g, ' ').trim();
  return out;
}
const breakTag = '<break time="0.45s" />';
function roleOf(id) {
  if (id === 'sit-dialogue' || id === 'sit-perso-question') return 'question_ouverte';
  if (/^q-[ab]-\d+-option-/.test(id)) return 'option_neutre';
  if (/^q-[ab]-\d+-expl$/.test(id) || /-sol$/.test(id) || /melo-perception-\d+-expl$/.test(id)) return 'correction';
  if (/^q-[ab]-\d+$/.test(id)) return id === 'q-a-1' ? 'fragment_inacheve' : 'question_ouverte';
  if (/^obj-/.test(id)) return ['obj-1', 'obj-2', 'obj-3'].includes(id) ? 'question_ouverte' : 'question_confirmation';
  if (/^gap-[ab]-\d+-aide$/.test(id)) return 'indice';
  if (/^gap-[ab]-\d+$/.test(id)) return 'trou';
  if (/^forme-/.test(id) || /^plan-/.test(id) || id === 'q-a-1') return 'fragment_inacheve';
  if (/^p[1-6]$/.test(id)) return id === 'p4' ? 'question_confirmation' : id === 'p5' ? 'question_ouverte' : 'phrase_modele';
  if (/^melo-regle-/.test(id) || id === 'melo-intro') return 'explication';
  if (/^ecoute-.*-pourquoi$/.test(id) || /^diff-/.test(id) || /^sert-/.test(id)) return 'explication';
  if (id === 'intro-consigne') return 'accueil';
  if (/^sit-/.test(id)) return id === 'sit-mission' ? 'situation' : 'consigne';
  if (/^avous-/.test(id) || /consigne|preparation|essai|semaine|etape|perception|rappel|bilan|attention|ajout/.test(id)) return 'consigne';
  return 'explication';
}
function sectionOf(id) {
  if (/^(intro|sit-)/.test(id)) return 'accueil_et_situation';
  if (/^(avant-|plan-)/.test(id)) return 'avant';
  if (/^(ecoute-|q-|gap-|diff-)/.test(id)) return 'ecoute_video';
  if (/^(phrases-|sert-|forme-|avous-|p[1-6]$)/.test(id)) return 'six_phrases';
  if (/^melo-/.test(id)) return 'melodie';
  if (/^(entrainement-|essai-|obj-)/.test(id)) return 'entrainement';
  if (/^apres-/.test(id)) return 'apres';
  if (/^(objectif-|semaine-)/.test(id)) return 'semaine';
  return 'autre';
}
function revealOf(id) {
  if (/^q-[ab]-\d+-expl$/.test(id)) return 'apres_choix_qcm';
  if (/^gap-[ab]-\d+-sol$/.test(id)) return 'apres_verification_trou';
  if (/^melo-perception-\d+-expl$/.test(id)) return 'apres_validation_syllabes';
  if (/^obj-/.test(id)) return 'apres_clic_question_collegue';
  if (/^forme-/.test(id) || /^p[1-6]$/.test(id)) return 'masque_en_mode_rappel_jusqua_voir_la_phrase';
  return 'visible_immediatement';
}
function expectedChecks(id, role, text) {
  const checks = ['texte_integral_sans_ajout_ni_omission', 'accent_francais_de_France_naturel'];
  if (role === 'fragment_inacheve') checks.push('cadence_de_continuation_sans_hesitation_ni_chute_finale');
  if (role === 'question_ouverte' || role === 'question_confirmation') checks.push('question_pragmatique_non_caricaturale');
  if (role === 'option_neutre') checks.push('aucun_indice_prosodique_sur_la_bonne_reponse');
  if (role === 'trou') checks.push('mot_absent_non_prononce');
  if (/Plug|Charge|Chargemap|ISO|VIN|AFIR|Tesla/i.test(text)) checks.push('nom_propre_anglais_ou_sigle_compare_a_la_video');
  if (/\b(devis|facture|sign|contrat)\b/i.test(text)) checks.push('vocabulaire_professionnel_articule_naturellement');
  return checks;
}
function oralFor(id, text) {
  let out = oralize(text);
  if (id === 'ecoute-a-devine') out = 'Plug veut dire brancher. Charge veut dire recharger. À votre avis, que fait le Plug and Charge quand on branche une voiture électrique ? Répondez à voix haute.';
  if (id === 'diff-a') out = out.replace('ISO 15118', 'ISO quinze mille cent dix-huit');
  if (id === 'q-b-1-expl') out = out.replace('Une usine à gaz veut dire', 'Une usine à gaz désigne');
  if (id === 'phrases-consigne') out = 'Six phrases de la vidéo, très utiles en réunion. Pour chaque phrase : d’abord, écoutez-la dans la vidéo ; ensuite, répétez-la à voix haute ; enfin, dites votre propre phrase.';
  if (id === 'q-a-1') out = 'Selon lui, cette recharge est plus' + breakTag;
  if (id === 'melo-perception-0-expl') out = 'La voix monte sur la dernière syllabe de différents et de différentes, les deuxième et troisième éléments de la liste : celle-ci continue. Au dernier élément, elle ne monte plus : la liste est finie.';
  if (id === 'melo-perception-1-expl') out = 'La voix monte sur borne et sur la dernière syllabe d’opérateur : l’explication continue. À la fin, sur voiture, elle ne monte plus.';
  if (/^forme-/.test(id)) out = out.replace(/[…?.\s]+$/g, '') + breakTag;
  if (/^plan-/.test(id)) out = out.replace(/[…?.\s]+$/g, '') + breakTag;
  if (/^gap-[ab]-\d+$/.test(id)) {
    const match = id.match(/^gap-([ab])-(\d+)$/);
    const item = C.ecoute.find(x => x.id.toLowerCase() === match[1]).trous[Number(match[2])];
    out = (oralize(item.avant) + ' <break time="0.8s" /> ' + oralize(item.apres)).replace(/\s+([.,?!:;])/g, '$1');
  }
  if (/^gap-[ab]-\d+-aide$/.test(id)) {
    const match = id.match(/^gap-([ab])-(\d+)-aide$/);
    const item = C.ecoute.find(x => x.id.toLowerCase() === match[1]).trous[Number(match[2])];
    out = 'Indice : ' + oralize(item.aide).replace(/^veut dire\s*/i, 'cela signifie ');
  }
  if (id === 'semaine-3') out = 'Jour trois. En réunion, reformulez une fois : si j’ai bien compris' + breakTag;
  return out.replace(/\s+/g, ' ').trim();
}
function meaningFor(id, role) {
  const phrase = id.match(/^(?:sert-|forme-|avous-)?(p[1-6])$/);
  if (phrase) {
    const p = C.phrases.find(x => x.id === phrase[1]);
    if (id.startsWith('forme-')) return `Formule réutilisable pour ${p.sert.toLowerCase()} ; l'apprenant doit fournir la suite.`;
    if (id.startsWith('sert-')) return `Fonction communicative de la formule ${p.forme.replace(/…|\?/g, '').trim()}.`;
    if (id === phrase[1]) return `Exemple professionnel complet : ${p.sert.toLowerCase()}.`;
  }
  const q = id.match(/^q-([ab])-(\d+)(?:-(option-\d+|expl))?$/);
  if (q) {
    const item = C.ecoute.find(x => x.id.toLowerCase() === q[1]).questions[Number(q[2])];
    if (q[3]?.startsWith('option')) return `Réponse possible à « ${strip(item.q)} » ; lire sans signaler si elle est juste ou fausse.`;
    if (q[3] === 'expl') return `Explication de la réponse à « ${strip(item.q)} », révélée seulement après le choix.`;
    return `Question de compréhension de l'extrait ${q[1].toUpperCase()} ; ${id === 'q-a-1' ? 'amorce de phrase à compléter avec une option.' : 'demande une information factuelle.'}`;
  }
  const gap = id.match(/^gap-([ab])-(\d+)(?:-(aide|sol))?$/);
  if (gap) {
    const item = C.ecoute.find(x => x.id.toLowerCase() === gap[1]).trous[Number(gap[2])];
    return gap[3] === 'sol' ? `Phrase de l'extrait avec la solution « ${item.solution} » ; révéler après vérification.`
      : gap[3] === 'aide' ? `Indice pour retrouver « ${item.solution} » ; ne jamais prononcer ce mot dans l'indice.`
      : `Phrase de l'extrait avec « ${item.solution} » supprimé ; laisser un vrai silence à cet emplacement.`;
  }
  if (role === 'fragment_inacheve') return 'Amorce de phrase à continuer oralement ; les points de suspension ne signifient pas une hésitation.';
  if (role === 'correction') return 'Explication ou solution montrée après une action.';
  if (role === 'question_confirmation') return 'Obtenir une confirmation réelle de l’interlocuteur.';
  if (role === 'question_ouverte') return 'Demander une information ou inviter une réponse.';
  return `Fonction ${role.replaceAll('_', ' ')} dans la section ${sectionOf(id).replaceAll('_', ' ')} ; conserver le sens de la consigne ou de la phrase affichée.`;
}

const entries = [];
const used = new Set();
function add(entry) {
  if (used.has(entry.id)) throw new Error('Identifiant dupliqué : ' + entry.id);
  used.add(entry.id);
  entries.push(entry);
}
for (const [id, clip] of Object.entries(current)) {
  let display = clip.text;
  if (/^gap-[ab]-\d+$/.test(id)) {
    const [, letter, index] = id.match(/^gap-([ab])-(\d+)$/);
    const item = C.ecoute.find(x => x.id.toLowerCase() === letter).trous[Number(index)];
    display = strip(item.avant) + ' [mot à compléter] ' + strip(item.apres);
  }
  const role = roleOf(id), spoken = oralFor(id, clip.text);
  add({id, section: sectionOf(id), audience: 'apprenant', source: 'audio/catalogue.js + contenu.js ou index.html',
    display_text: display, tts_text: spoken, role, meaning: meaningFor(id, role),
    prosody: profiles[role], reveal: revealOf(id), generation: 'candidat_apres_ecoute_humaine',
    qa: expectedChecks(id, role, spoken), audio_target: 'audio/elevenlabs-v2/' + id + '.mp3'});
}

// Textes visibles mais historiquement non inclus dans les 105 clips.
for (const phrase of C.phrases) {
  const filmSpeech = phrase.id === 'p4'
    ? oralize(phrase.film.texte.replace(/<em>[\s\S]*?<\/em>/g, '')).replace('une fois… au tout début?', 'une fois, au tout début ?')
    : oralize(phrase.film.texte);
  add({id: 'video-' + phrase.id, section: 'six_phrases', audience: 'apprenant', source: 'contenu.js:phrases[].film.texte',
    display_text: strip(phrase.film.texte), tts_text: filmSpeech, role: 'video_authentique',
    meaning: 'Citation de la vidéo correspondant au lecteur YouTube et au registre oral original.',
    prosody: profiles.video_authentique, reveal: 'visible_immediatement', generation: 'corpus_test_seulement_conserver_video_dans_support',
    qa: ['conserver_les_mots_et_la_melodie_de_la_video'], audio_target: null});
}
for (const [index, item] of C.prononciation.perception.entries()) {
  add({id: 'video-perception-' + (index + 1), section: 'melodie', audience: 'apprenant', source: 'contenu.js:prononciation.perception[].phrase',
    display_text: item.phrase, tts_text: oralize(item.phrase), role: 'video_authentique',
    meaning: 'Les points médians séparent les syllabes ; les astérisques indiquent une réponse, ils ne sont pas des sons.',
    prosody: profiles.video_authentique, reveal: 'visible_immediatement', generation: 'corpus_test_seulement_conserver_video_dans_support',
    qa: ['conserver_les_syllabes_et_le_contour_de_la_video'], audio_target: null});
}
for (const [index, item] of C.prononciation.modeles.entries()) {
  const modelSpeech = index < 2 ? oralize(C.prononciation.perception[index].phrase)
    : oralize(C.phrases.find(x => x.id === 'p2').film.texte);
  add({id: 'video-modele-' + (index + 1), section: 'melodie', audience: 'apprenant', source: 'contenu.js:prononciation.modeles[].texte',
    display_text: strip(item.texte), tts_text: modelSpeech, role: 'video_authentique',
    meaning: 'Le signe |, les flèches et les syllabes en gras sont des annotations de la courbe mesurée sur la voix de la vidéo.',
    prosody: profiles.video_authentique, reveal: 'visible_immediatement', generation: 'corpus_test_seulement_conserver_video_dans_support',
    qa: ['aucun_audio_synthetique_sous_une_courbe_video'], audio_target: null});
}
for (const [index, text] of C.difficultes.entries()) {
  add({id: 'auto-evaluation-difficulte-' + (index + 1), section: 'avant', audience: 'apprenant', source: 'contenu.js:difficultes[]',
    display_text: text, tts_text: oralize(text.replace('sûr·e', 'sûr ou sûre')), role: 'administratif',
    meaning: 'Option d’autoévaluation, pas un modèle de prononciation.', prosody: profiles.administratif,
    reveal: 'visible_immediatement', generation: 'optionnel_accessibilite', qa: ['aucune_confusion_avec_une_consigne'], audio_target: null});
}
for (const [index, [symbol, meaning]] of C.prononciation.legende.entries()) {
  add({id: 'legende-melodie-' + (index + 1), section: 'melodie', audience: 'apprenant', source: 'contenu.js:prononciation.legende[]',
    display_text: symbol + ' : ' + meaning, tts_text: ['La flèche montante indique que la voix monte.',
      'La flèche descendante indique que la voix descend.', 'Le soulignement indique une syllabe plus longue.',
      'La barre verticale marque la fin d’une étape.'][index], role: 'explication',
    meaning: 'Légende d’une notation visuelle de prosodie.', prosody: profiles.explication,
    reveal: 'visible_immediatement', generation: 'candidat_apres_ecoute_humaine',
    qa: ['explication_du_signe_et_non_lecture_du_glyphe'], audio_target: 'audio/elevenlabs-v2/legende-melodie-' + (index + 1) + '.mp3'});
}

const ui = [
  ['accueil', 'Le programme'], ['accueil', 'Le sujet du jour'], ['accueil', 'Votre sujet'],
  ['accueil', 'Où ?'], ['accueil', 'Qui parle ?'], ['accueil', 'Vous'], ['accueil', 'À vous'],
  ['accueil', 'Vous pouvez reprendre un sujet de votre semaine, dont vous avez parlé avec votre formateur.'],
  ['accueil', 'Le cours utilise le <strong>micro</strong> de votre ordinateur. Autorisez-le quand le navigateur le demande.'],
  ['avant', 'Vous pouvez suivre ce plan'], ['avant', 'Enregistrez-vous'], ['avant', 'Pendant cette minute…'],
  ['avant', 'Touchez ce qui est vrai pour vous.'], ['ecoute_video', "Avant d'écouter : devinez"],
  ['ecoute_video', "Écoutez l'extrait, puis répondez"], ['ecoute_video', 'Écoutez encore, puis complétez'],
  ['ecoute_video', 'Le passage difficile'], ['six_phrases', 'Au travail'], ['six_phrases', 'À vous'],
  ['melodie', 'La règle'], ['melodie', 'Écoutez et trouvez'], ['melodie', 'Répétez comme dans la vidéo'],
  ['entrainement', 'Préparez (1 minute)'], ['entrainement', 'Vos 3 essais en chiffres'], ['apres', 'Début et fin du cours'],
  ['semaine', 'Ma phrase de la semaine'], ['semaine', 'Quand ?'], ['semaine', 'Ma phrase exacte'],
  ['semaine', '10 minutes par jour (facultatif)'],
  ['semaine', 'Envoyer mon travail au formateur'],
  ['semaine', 'Vos réponses restent dans ce navigateur. Copiez-les et envoyez-les à votre formateur.'],
  ['semaine', 'Pour aller plus loin (facultatif)'], ['semaine', 'Seulement après le cours, si vous voulez pratiquer davantage.'],
  ['navigation', 'Commencer'], ['navigation', 'Retour'], ['navigation', 'Étape suivante'],
  ['navigation', 'Terminer le cours'], ['navigation', 'Revenir au début'],
  ['interface', 'Écouter'], ['interface', 'Arrêter'], ['interface', 'Un peu plus lent'],
  ['interface', 'En boucle'], ['interface', 'Vérifier'], ['interface', 'Voir la phrase'],
  ['interface', 'Je la connais'], ['interface', 'À revoir'], ['interface', 'Démarrer'],
  ['interface', 'Pause'], ['interface', 'Reprendre'], ['interface', 'Réinitialiser'],
  ['interface', 'Enregistrer'], ['interface', 'Recommencer'],
  ['interface', 'Le micro ne marche pas ?'], ['interface', 'Télécharger (pour le formateur)'],
  ['interface', 'Copier mes réponses'], ['interface', 'Tout effacer'],
  ['interface', "Le lecteur ne s'ouvre pas ici."], ['interface', 'La vidéo ne démarre pas.'],
  ['interface', "L'audio ne peut pas être chargé."],
  ['interface', 'Dites la phrase une fois, puis cliquez sur « Arrêter ».'],
  ['interface', 'Parlez sans vous arrêter. Les erreurs ne sont pas un problème.'],
  ['interface', "Je n'entends rien. Vérifiez le micro, puis recommencez."],
  ['interface', 'Le son est faible ou il y a du bruit : ces chiffres sont approximatifs.'],
  ['interface', 'Vos chiffres sont gardés. Le son, lui, disparaît quand vous fermez la page.'],
  ['interface', "C'est fini. Réécoutez-vous une fois."],
  ['interface', 'Ce navigateur ne peut pas enregistrer. Utilisez le dictaphone de votre téléphone.'],
  ['interface', "Le micro est bloqué. Cliquez sur l'icône à gauche de l'adresse du site et autorisez le micro, puis recommencez. Ou utilisez le dictaphone de votre téléphone."],
];
for (const [index, [section, text]] of ui.entries()) {
  add({id: 'interface-' + String(index + 1).padStart(3, '0'), section, audience: 'apprenant', source: 'index.html (libellé ou message fixe)',
    display_text: strip(text), tts_text: oralize(text), role: 'administratif',
    meaning: 'Texte d’interface recensé pour couverture ; à privilégier via lecteur d’écran et non en audio automatique.',
    prosody: profiles.administratif, reveal: 'selon_etat_interface', generation: 'optionnel_accessibilite',
    qa: ['ne_pas_lire_automatiquement_pendant_une_activite'], audio_target: null});
}
const stepLabels = [
  ['accueil_et_situation', "Aujourd'hui", ''],
  ['avant', 'Je parle 1 minute', 'Je donne mon avis, sans préparer.'],
  ['ecoute_video', "J'écoute la vidéo", 'Deux extraits courts.'],
  ['six_phrases', '6 phrases utiles', 'Des phrases de la vidéo pour mes réunions.'],
  ['melodie', 'La mélodie du français', 'Je parle comme un francophone.'],
  ['entrainement', "Je m'entraîne 3 fois", 'Le même sujet, de plus en plus court.'],
  ['apres', 'Je reparle 1 minute', 'Je compare avec le début.'],
  ['semaine', 'Mon objectif de la semaine', 'Une phrase à dire au travail.'],
  ['formateur', 'Espace formateur', ''],
];
for (const [index, [section, title, detail]] of stepLabels.entries()) {
  for (const [kind, text] of [['titre', title], ['description', detail]]) {
    if (!text) continue;
    add({id: `etape-${index}-${kind}`, section, audience: section === 'formateur' ? 'formateur' : 'apprenant',
      source: 'index.html:STEPS[]', display_text: text, tts_text: oralize(text), role: 'administratif',
      meaning: kind === 'titre' ? 'Titre de navigation et d’étape, pas consigne complète.' : 'Résumé de l’étape dans le programme.',
      prosody: profiles.administratif, reveal: 'visible_immediatement', generation: 'optionnel_accessibilite',
      qa: ['ne_pas_remplacer_la_consigne_detaillee'], audio_target: null});
  }
}
const additionalVisible = [
  ['titre-seance', 'accueil_et_situation', C.meta.titreSeance, 'contenu.js:meta.titreSeance'],
  ['titre-support', 'accueil_et_situation', C.meta.titre, 'contenu.js:meta.titre'],
  ['titre-video', 'ecoute_video', C.meta.video.titre, 'contenu.js:meta.video.titre'],
  ['lieu-situation', 'accueil_et_situation', C.sujet.lieu, 'contenu.js:sujet.lieu'],
  ['interlocuteur-situation', 'accueil_et_situation', C.sujet.qui, 'contenu.js:sujet.qui'],
  ['exemple-sujet-personnel', 'accueil_et_situation', C.sujet.perso.exemple, 'contenu.js:sujet.perso.exemple'],
  ...C.ecoute.map((item, i) => [`titre-extrait-${i + 1}`, 'ecoute_video', `Extrait ${i + 1} · ${item.titre}`, 'index.html:R.ecoute + contenu.js:ecoute[].titre']),
  ...C.prononciation.perception.map((item, i) => [`titre-perception-${i + 1}`, 'melodie', item.titre, 'contenu.js:prononciation.perception[].titre']),
  ...C.entrainement.essais.map((item, i) => [`titre-essai-${i + 1}`, 'entrainement', `Essai ${i + 1}`, 'index.html:R.entrainement']),
];
for (const [id, section, display, source] of additionalVisible) {
  add({id, section, audience: 'apprenant', source, display_text: display, tts_text: oralize(display),
    role: 'administratif', meaning: 'Libellé ou titre affiché ; le texte seul ne remplace pas les consignes pédagogiques.',
    prosody: profiles.administratif, reveal: 'visible_immediatement', generation: 'optionnel_accessibilite',
    qa: ['ne_pas_lire_automatiquement_pendant_une_activite'], audio_target: null});
}
for (const [index, row] of C.formateur.deroule.entries()) {
  add({id: 'formateur-deroule-' + (index + 1), section: 'formateur', audience: 'formateur', source: 'contenu.js:formateur.deroule[]',
    display_text: `${row.temps} minutes — ${row.phase}. ${strip(row.role)}`, tts_text: oralize(row.phase + '. ' + row.role),
    role: 'administratif', meaning: 'Guide réservé au formateur, non diffusé à l’apprenant.', prosody: profiles.administratif,
    reveal: 'espace_formateur', generation: 'ne_pas_generer_pour_apprenant', qa: ['ne_pas_reveler_la_conduite_du_cours'], audio_target: null});
}
for (const [index, note] of C.formateur.notes.entries()) {
  add({id: 'formateur-note-' + (index + 1), section: 'formateur', audience: 'formateur', source: 'contenu.js:formateur.notes[]',
    display_text: strip(note), tts_text: oralize(note), role: 'administratif',
    meaning: 'Note méthodologique réservée au formateur.', prosody: profiles.administratif,
    reveal: 'espace_formateur', generation: 'ne_pas_generer_pour_apprenant', qa: ['ne_pas_reveler_la_conduite_du_cours'], audio_target: null});
}
for (const [index, link] of C.meta.plusLoin.entries()) {
  add({id: 'lien-plus-loin-' + (index + 1), section: 'semaine', audience: 'apprenant', source: 'contenu.js:meta.plusLoin[]',
    display_text: link.label, tts_text: oralize(link.label), role: 'administratif',
    meaning: 'Libellé de lien, pas modèle de prononciation.', prosody: profiles.administratif,
    reveal: 'visible_immediatement', generation: 'optionnel_accessibilite', qa: ['lien_accessible_au_clavier'], audio_target: null});
}
add({id: 'sujet-personnel-dynamique', section: 'accueil_et_situation', audience: 'apprenant', source: 'contenu.js:sujet.perso.phrase',
  display_text: C.sujet.perso.phrase, tts_text: null, role: 'situation',
  meaning: 'Le contenu {x} est saisi librement par l’apprenant et inconnu au moment de la préparation.',
  prosody: profiles.situation, reveal: 'apres_saisie_personnelle', generation: 'impossible_a_prerendre',
  qa: ['ne_pas_exposer_de_cle_api_dans_GitHub_Pages'], audio_target: null});

const sectionOrder = ['accueil_et_situation', 'accueil', 'avant', 'ecoute_video', 'six_phrases', 'melodie',
  'entrainement', 'apres', 'semaine', 'formateur', 'navigation', 'interface'];
entries.sort((a, b) => sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section));
entries.forEach((item, index) => { item.order = index + 1; });

const firstForText = new Map();
for (const item of entries) {
  if (!item.audio_target || !item.tts_text) continue;
  if (firstForText.has(item.tts_text)) item.reuse_audio_of = firstForText.get(item.tts_text);
  else firstForText.set(item.tts_text, item.id);
}
const candidate = entries.filter(e => e.generation === 'candidat_apres_ecoute_humaine');
const unique = candidate.filter(e => !e.reuse_audio_of);
if (candidate.length !== Object.keys(current).length + C.prononciation.legende.length)
  throw new Error('Couverture des clips existants ou de la légende incomplète.');
for (const item of candidate) {
  if (!item.tts_text || !item.audio_target || !item.role || !item.reveal) throw new Error('Entrée incomplète : ' + item.id);
  if (/<(?!break\s+time="\d+(?:\.\d+)?s"\s*\/>)/.test(item.tts_text)) throw new Error('Balisage TTS imprévu : ' + item.id);
}
const output = {
  schema: 'impact60-eleven-multilingual-v2/1', model_id: 'eleven_multilingual_v2',
  target_language: 'français de France (fr-FR)',
  voice_id: null,
  validation_status: 'catalogue_editorial_non_genere_non_valide_a_l_ecoute',
  source_sha256: {contenu_js: sha(contentSource), index_html: sha(htmlSource), catalogue_js: sha(catSource)},
  methodology: {
    only_send_to_api: 'tts_text',
    editorial_fields_not_spoken: ['meaning', 'prosody', 'role', 'qa', 'display_text', 'reveal'],
    voice_selection: 'Choisir une voix réellement entraînée sur du français de France ; tester plusieurs voix sur les mêmes passages.',
    initial_voice_settings_for_tests: {stability: 0.5, similarity_boost: 0.75, style: 0, use_speaker_boost: true},
    unsupported_for_multilingual_v2: ['language_code de l’API', 'balises vocales Eleven v3', 'balises phonétiques IPA/CMU'],
    ssml_break_rule: 'Seule la balise <break time="...s" /> est ici prévue ; rares pauses de 0,45 à 0,8 s, toujours à valider à l’écoute.',
    incomplete_fragments: 'Les formules finissant sur une continuation sont des candidats expérimentaux ; si la chute finale est trompeuse, enregistrer un locuteur natif.',
    no_answer_leak: 'Aucune correction cachée ni question aléatoire ne doit être lue avant l’action correspondante.',
    authentic_video: 'Ne pas substituer ElevenLabs aux voix de la vidéo dans les activités de mélodie sans recalculer les courbes.',
    video_corpus_only: 'Les 11 citations et phrases de la vidéo ont une transcription TTS pour un essai comparatif, mais aucune cible audio dans le support : l’audio pédagogique reste celui de la vidéo.',
  },
  documentation: [
    'https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices',
    'https://elevenlabs.io/docs/help-center/product/core-capabilities/text-to-speech/how-can-i-add-pauses',
    'https://elevenlabs.io/docs/api-reference/text-to-speech/convert',
    'https://elevenlabs.io/docs/help-center/troubleshooting/why-does-my-voice-change-accent-or-language',
    'https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech',
  ],
  counts: {entries: entries.length, existing_audio_catalogue: Object.keys(current).length,
    candidate_clips: candidate.length, unique_candidate_texts: unique.length,
    unique_candidate_characters: unique.reduce((n, e) => n + e.tts_text.length, 0),
    optional_video_corpus_clips: entries.filter(e => e.generation === 'corpus_test_seulement_conserver_video_dans_support').length},
  profiles, entries,
};
const target = path.join(root, 'audio/catalogue-elevenlabs-v2.json');
fs.writeFileSync(target, JSON.stringify(output, null, 2) + '\n');

// Vue de lecture intégrale, dérivée des mêmes données que le JSON.
const sectionNames = {
  accueil_et_situation: 'Accueil et situation', accueil: 'Accueil — interface',
  avant: 'Je parle 1 minute', ecoute_video: 'J’écoute la vidéo',
  six_phrases: 'Six phrases utiles', melodie: 'La mélodie du français',
  entrainement: 'Je m’entraîne trois fois', apres: 'Je reparle 1 minute',
  semaine: 'Mon objectif de la semaine', formateur: 'Espace formateur',
  navigation: 'Navigation', interface: 'Messages et commandes de l’interface',
};
const generationNames = {
  candidat_apres_ecoute_humaine: 'À générer puis à valider à l’écoute',
  optionnel_accessibilite: 'Accessibilité facultative',
  corpus_test_seulement_conserver_video_dans_support: 'Essai comparatif uniquement ; conserver la vidéo dans le support',
  ne_pas_generer_pour_apprenant: 'Réservé au formateur',
  impossible_a_prerendre: 'Texte personnel non pré-enregistrable',
};
const revealNames = {
  visible_immediatement: 'Visible immédiatement',
  apres_saisie_personnelle: 'Après la saisie personnelle',
  selon_etat_interface: 'Selon l’état de l’interface',
  apres_choix_qcm: 'Après le choix au QCM',
  apres_verification_trou: 'Après la vérification du texte à trou',
  masque_en_mode_rappel_jusqua_voir_la_phrase: 'Masqué en mode rappel jusqu’au clic « Voir la phrase »',
  apres_validation_syllabes: 'Après la validation des syllabes',
  apres_clic_question_collegue: 'Après le clic sur « Question du collègue »',
  espace_formateur: 'Dans l’espace formateur',
};
const qaNames = {
  texte_integral_sans_ajout_ni_omission: 'Texte intégral, sans ajout ni omission',
  accent_francais_de_France_naturel: 'Accent naturel de français de France',
  question_pragmatique_non_caricaturale: 'Intonation interrogative adaptée, sans caricature',
  ne_pas_remplacer_la_consigne_detaillee: 'Ne remplace pas la consigne détaillée',
  ne_pas_lire_automatiquement_pendant_une_activite: 'Ne pas lire automatiquement pendant une activité',
  ne_pas_exposer_de_cle_api_dans_GitHub_Pages: 'Ne pas exposer de clé API dans GitHub Pages',
  cadence_de_continuation_sans_hesitation_ni_chute_finale: 'Cadence de continuation, sans hésitation ni chute finale',
  aucune_confusion_avec_une_consigne: 'Ne pas confondre avec une consigne',
  nom_propre_anglais_ou_sigle_compare_a_la_video: 'Comparer la prononciation du nom propre ou sigle avec la vidéo',
  aucun_indice_prosodique_sur_la_bonne_reponse: 'Ne pas trahir la bonne réponse par l’intonation',
  mot_absent_non_prononce: 'Ne pas prononcer le mot manquant',
  vocabulaire_professionnel_articule_naturellement: 'Vocabulaire professionnel articulé naturellement',
  conserver_les_mots_et_la_melodie_de_la_video: 'Conserver les mots et la mélodie de la vidéo',
  conserver_les_syllabes_et_le_contour_de_la_video: 'Conserver syllabes et contour de la vidéo',
  aucun_audio_synthetique_sous_une_courbe_video: 'Ne pas associer un audio synthétique à une courbe issue de la vidéo',
  explication_du_signe_et_non_lecture_du_glyphe: 'Expliquer le signe au lieu de lire le glyphe',
  lien_accessible_au_clavier: 'Lien accessible au clavier',
  ne_pas_reveler_la_conduite_du_cours: 'Ne pas révéler la conduite du cours à l’apprenant',
};
const cleanMarkdown = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/\r?\n/g, ' ');
const md = [
  '# Catalogue prosodique Eleven Multilingual v2 — Plug & Charge B2 v3 bis', '',
  `Ce document présente les **${entries.length} entrées** du catalogue JSON, dans l’ordre du parcours.`,
  `**${candidate.length} segments pédagogiques** sont à générer et valider ; ${unique.length} textes sont distincts après dédoublonnage.`,
  '',
  '> **Important :** aucun audio ElevenLabs n’a été généré ni validé. Seul le champ « Texte à prononcer » doit être envoyé comme texte à l’API. Le contexte et les indications de prosodie sont des notes éditoriales ; le modèle risque de les lire si on les inclut dans la requête.',
  '',
  'Les citations de la vidéo sont présentes pour comparaison, mais leurs courbes de mélodie correspondent à l’enregistrement humain original. Les corrections et solutions ne deviennent audibles qu’après l’action prévue. Pour la méthode de choix de voix et de validation, voir [le protocole](PROTOCOLE_ELEVENLABS_V2.md).',
  '',
  '## Légende des champs', '',
  '- **Texte affiché** : texte à l’écran ou transcription lisible ; « [mot à compléter] » indique un champ vide.',
  '- **Texte à prononcer** : version oralisée proposée pour Eleven Multilingual v2 ; les balises `<break … />` y sont intentionnelles et restent à valider à l’écoute.',
  '- **Intention et prosodie** : critères pédagogiques pour choisir la voix, préparer le texte et juger l’enregistrement, non paramètres magiques du modèle.',
  '- **Disponibilité** : respecte le dévoilement progressif des réponses et des corrections.',
  '- **Destination audio** : fichier prévu, non encore créé. Une entrée « Réutilise » peut employer l’audio d’un texte identique.',
  '',
];
let activeSection = null;
for (const item of entries) {
  if (item.section !== activeSection) {
    activeSection = item.section;
    md.push(`## ${sectionNames[activeSection] || activeSection}`, '');
  }
  md.push(`### ${String(item.order).padStart(3, '0')} · ${item.id}`, '');
  md.push(`**Texte affiché** — ${cleanMarkdown(item.display_text)}`, '');
  md.push(`**Texte à prononcer** — ${item.tts_text == null ? 'Aucun texte prédéfini.' : cleanMarkdown(item.tts_text)}`, '');
  md.push(`**Fonction** — ${item.role.replaceAll('_', ' ')}. ${cleanMarkdown(item.meaning)}`, '');
  md.push(`**Prosodie attendue** — ${cleanMarkdown(item.prosody)}`, '');
  md.push(`**Disponibilité** — ${revealNames[item.reveal] || item.reveal}. **Statut** — ${generationNames[item.generation] || item.generation}.`, '');
  if (item.audio_target) md.push(`**Destination audio** — \`${item.audio_target}\`${item.reuse_audio_of ? ` ; réutilise \`${item.reuse_audio_of}\`` : ''}.`, '');
  md.push(`**Contrôle** — ${item.qa.map(check => qaNames[check] || cleanMarkdown(check)).join(' ; ')}.`, '');
  md.push(`**Source** — \`${item.source}\`.`, '');
}
md.push('## Références ElevenLabs', '', ...output.documentation.map(url => `- ${url}`), '');
const markdownTarget = path.join(root, 'audio/catalogue-elevenlabs-v2.md');
fs.writeFileSync(markdownTarget, md.join('\n') + '\n');
// Fichier de lecture / collage : un segment pédagogique par paragraphe, sans métadonnées.
const spokenTarget = path.join(root, 'audio/textes-a-prononcer-elevenlabs-v2.txt');
fs.writeFileSync(spokenTarget, candidate.map(item => item.tts_text).join('\n\n') + '\n');
const spokenMarkdownTarget = path.join(root, 'audio/textes-a-prononcer-elevenlabs-v2.md');
fs.writeFileSync(spokenMarkdownTarget, candidate.map(item => cleanMarkdown(item.tts_text)).join('\n\n') + '\n');
console.log(`${target}, ${markdownTarget}, ${spokenTarget} et ${spokenMarkdownTarget}: ${entries.length} entrées, ${candidate.length} candidats, ${unique.length} textes uniques`);
