#!/usr/bin/env node
/* Vérifie que chaque segment publié correspond au catalogue affiché. */
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {runInNewContext} from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = path => readFileSync(join(root, path));
const json = path => JSON.parse(read(path).toString('utf8'));
const context = {window: {}};
runInNewContext(read('contenu.js').toString('utf8'), context);
runInNewContext(read('audio/catalogue.js').toString('utf8'), context);
const current = context.window.impactAudioCatalogue(context.window.IMPACT60);
const entries = json('audio/catalogue-elevenlabs-v2.json').entries;
const manifest = json('audio/qwen3-tts/manifest.json').clips;
const eligible = entries.filter(entry => ['candidat_apres_ecoute_humaine', 'optionnel_accessibilite'].includes(entry.generation));
const core = eligible.filter(entry => entry.generation === 'candidat_apres_ecoute_humaine');
const optional = eligible.filter(entry => entry.generation === 'optionnel_accessibilite');

assert.equal(core.length, 109);
assert.equal(optional.length, 103);
assert.equal(Object.keys(current).length, core.length, 'Un segment pédagogique n’est pas relié au site');
assert.deepEqual(new Set(Object.keys(manifest)), new Set(eligible.map(entry => entry.id)));
for (const entry of eligible) {
  const clip = manifest[entry.id];
  assert(clip, `Manque dans le manifeste : ${entry.id}`);
  assert.equal(clip.file, `audio/qwen3-tts/${entry.id}.mp3`);
  assert.equal(clip.display_text, entry.display_text, `Texte éditorial modifié : ${entry.id}`);
  assert.equal(clip.generation, entry.generation);
  const bytes = read(clip.file);
  assert(bytes.length > 1000, `Fichier vide : ${entry.id}`);
  assert.equal(createHash('sha256').update(bytes).digest('hex'), clip.sha256, `MP3 modifié : ${entry.id}`);
  if (entry.generation === 'candidat_apres_ecoute_humaine') {
    const site = current[entry.id];
    assert(site, `Bouton pédagogique absent : ${entry.id}`);
    assert.equal(site.src, clip.file);
    assert.equal(site.text.replaceAll('[mot à compléter]', 'mot à compléter'),
      entry.display_text.replaceAll('[mot à compléter]', 'mot à compléter').replaceAll('↗', '').trim(),
      `Texte affiché et audio divergents : ${entry.id}`);
  }
}
console.log(`Intégration cohérente : ${core.length} segments pédagogiques + ${optional.length} textes d’interface ; ${eligible.length} MP3 contrôlés.`);
