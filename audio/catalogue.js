/* Catalogue commun au site et au générateur. Chaque identifiant désigne un texte stable. */
(function(root){
  function catalogue(C){
    var clips = {};
    function add(id, text, oral){
      if(clips[id]) throw new Error("Identifiant audio dupliqué : " + id);
      var spoken = (oral || text).replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&")
        .replace(/↗/g, "").replace(/\s+/g, " ").trim();
      clips[id] = {text: spoken, src: "audio/qwen3-tts/" + id + ".mp3"};
    }
    var S = C.sujet, P = C.prononciation, T = C.entrainement;
    add("intro-consigne", C.meta.objectif);
    add("sit-dialogue", S.dit);
    add("sit-mission", S.vous);
    add("sit-consigne", S.consigne + " En 1 minute.");
    add("sit-perso-question", "Vous préférez un sujet de votre travail ? " + S.perso.question);
    S.plan.forEach(function(p, i){ add("plan-" + (i+1), p.titre + ". Phrase utile : " + p.aide); });
    add("avant-consigne", "Donnez votre avis sur le sujet, sans préparer. Les erreurs ne sont pas un problème. À la fin du cours, vous parlerez encore 1 minute : vous verrez la différence.");
    add("ecoute-consigne", "Deux extraits courts. Pour chaque extrait : devinez, écoutez, répondez, réécoutez.");
    C.ecoute.forEach(function(x){
      var a = x.id.toLowerCase();
      add("ecoute-" + a + "-pourquoi", "Pourquoi cet extrait ? " + x.pourquoi);
      add("ecoute-" + a + "-devine", x.devine);
      x.questions.forEach(function(q, i){
        var id = "q-" + a + "-" + i;
        add(id, q.q);
        q.options.forEach(function(opt, j){ add(id + "-option-" + j, opt); });
        add(id + "-expl", q.explication);
      });
      x.trous.forEach(function(t, i){
        var id = "gap-" + a + "-" + i;
        add(id, t.avant + " mot à compléter " + t.apres);
        if(t.aide) add(id + "-aide", "Aide : " + t.aide);
        add(id + "-sol", t.avant + " " + t.solution + " " + t.apres);
      });
      add("diff-" + a, x.difficile.texte);
    });
    add("phrases-consigne", "Six phrases de la vidéo, très utiles en réunion. Pour chaque phrase : écoutez-la dans la vidéo, répétez-la à voix haute, puis dites votre propre phrase.");
    add("phrases-rappel", "Lisez à quoi elle sert, dites la phrase à voix haute, puis cliquez sur Voir la phrase.");
    C.phrases.forEach(function(p){
      add("sert-" + p.id, p.sert);
      add("forme-" + p.id, p.forme);
      add(p.id, p.exemple);
      add("avous-" + p.id, "Dites votre phrase à voix haute, sur votre travail.");
    });
    add("melo-intro", P.intro);
    P.regle.forEach(function(x, i){ add("melo-regle-" + i, x); });
    add("melo-attention", P.attention);
    P.perception.forEach(function(x, i){
      add("melo-perception-" + i + "-consigne", x.consigne);
      add("melo-perception-" + i + "-expl", x.explication);
    });
    P.etapes.forEach(function(x, i){ add("melo-etape-" + i, x); });
    P.legende.forEach(function(x, i){ add("legende-melodie-" + (i+1), x[0] + " : " + x[1]); });
    add("entrainement-consigne", "Le même sujet, 3 fois, de plus en plus court. Avant chaque essai, vous ajoutez une chose.");
    add("entrainement-preparation", "Notez seulement des mots-clés, pas de phrases.");
    T.essais.forEach(function(x, i){
      add("essai-" + (i+1), x.consigne);
      if(x.ajout) add("essai-" + (i+1) + "-ajout", x.ajout);
    });
    T.objections.forEach(function(x, i){ add("obj-" + (i+1), x); });
    add("apres-consigne", "Le même sujet qu'au début. Parlez 1 minute, sans vos notes.");
    add("apres-bilan", "Quelles phrases utiles avez-vous dites ? Réécoutez-vous et cochez.");
    add("objectif-consigne", "Choisissez une phrase utile. Dites-la cette semaine, dans une vraie réunion ou un vrai appel.");
    C.semaine.forEach(function(x, i){ add("semaine-" + (i+1), x.jour + " : " + x.tache); });
    return clips;
  }
  root.impactAudioCatalogue = catalogue;
})(typeof window === "undefined" ? globalThis : window);
