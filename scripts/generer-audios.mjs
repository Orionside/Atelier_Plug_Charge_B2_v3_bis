#!/usr/bin/env node
/* Génère les MP3 du support avec Gemini 3.8 TTS. Node 20+ et ffmpeg requis. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {window: {}};
vm.runInNewContext(fs.readFileSync(path.join(root, 'contenu.js'), 'utf8'), context);
vm.runInNewContext(fs.readFileSync(path.join(root, 'audio/catalogue.js'), 'utf8'), context);
const catalogue = context.window.impactAudioCatalogue(context.window.IMPACT60);
const args = process.argv.slice(2);
const model = 'gemini-3.8-flash-tts';
const voice = args.includes('--voice') ? args[args.indexOf('--voice') + 1] : 'fr-fr-tutor-5';
const style = 'Français de France naturel, voix chaleureuse et claire, débit conversationnel posé.';
const manifestPath = path.join(root, 'audio/manifest.json');
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {clips: {}};
const all = args.includes('--all');
const list = args.includes('--list');
const check = args.includes('--check');
const force = args.includes('--force');
const only = args.includes('--id') ? args[args.indexOf('--id') + 1] : null;
const limit = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : Infinity;
if (!voice || (only && !catalogue[only])) {
  console.error(only ? `Identifiant inconnu : ${only}` : 'Voix manquante après --voice');
  process.exit(2);
}
if (!(limit > 0 && (Number.isInteger(limit) || limit === Infinity))) {
  console.error('--limit attend un entier positif.');
  process.exit(2);
}
const selected = only ? [only] : Object.keys(catalogue);
const fingerprint = clip => crypto.createHash('sha256').update(JSON.stringify({text: clip.text, model, voice, style})).digest('hex');
const target = id => path.join(root, catalogue[id].src);
const fresh = id => fs.existsSync(target(id)) && fs.statSync(target(id)).size > 1000 && manifest.clips?.[id]?.sha256 === fingerprint(catalogue[id]);

if (list || (!all && !only && !check)) {
  selected.forEach(id => console.log(`${fresh(id) ? '✓' : '·'} ${id}: ${catalogue[id].text}`));
  console.log(`${selected.length} segments, ${selected.filter(id => !fresh(id)).length} à générer`);
  process.exit(0);
}
if (check) {
  const missing = selected.filter(id => !fresh(id));
  missing.slice(0, 10).forEach(id => console.log(`À générer : ${id}`));
  if (missing.length > 10) console.log(`… et ${missing.length - 10} autre(s) segment(s)`);
  console.log(`${selected.length - missing.length}/${selected.length} audios à jour`);
  process.exit(missing.length ? 1 : 0);
}
if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY est absent. Configurez-le sur votre Mac, sans le placer dans ce dépôt.');
  process.exit(2);
}
if (spawnSync('ffmpeg', ['-version'], {stdio: 'ignore'}).status !== 0) {
  console.error('ffmpeg est nécessaire pour convertir le WAV Gemini en MP3.');
  process.exit(2);
}

async function synthesize(text) {
  const body = {
    model,
    input: [{type: 'user_input', content: [{type: 'text', text, annotations: [{type: 'speech_metadata', style}]}]}],
    response_format: {type: 'audio', mime_type: 'audio/wav'},
    generation_config: {speech_config: [{voice}]},
  };
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'x-goog-api-key': process.env.GEMINI_API_KEY},
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120000),
    });
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 429 && /requests per day|daily/i.test(data.error?.message || '')) {
        throw new Error(`Quota quotidien atteint : ${data.error.message}`);
      }
      if ((response.status === 429 || response.status >= 500) && attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, (attempt + 1) * 5000));
        continue;
      }
      throw new Error(`Gemini HTTP ${response.status} : ${data.error?.message || 'réponse non reconnue'}`);
    }
    const audio = data.steps?.filter(step => step.type === 'model_output')
      .flatMap(step => step.content || []).filter(part => part.type === 'audio').at(-1);
    if (!audio?.data) throw new Error('La réponse Gemini ne contient aucun audio.');
    const wav = Buffer.from(audio.data, 'base64');
    if (wav.toString('ascii', 0, 4) !== 'RIFF' || wav.toString('ascii', 8, 12) !== 'WAVE') {
      throw new Error('Gemini a retourné un format différent du WAV demandé.');
    }
    return wav;
  }
}

fs.mkdirSync(path.join(root, 'audio/gemini'), {recursive: true});
manifest.model = model;
manifest.voice = voice;
manifest.style = style;
manifest.clips ||= {};
let done = 0;
for (const id of selected) {
  if (done >= limit) break;
  if (!force && fresh(id)) { console.log(`Déjà à jour : ${id}`); continue; }
  const clip = catalogue[id];
  try {
    const wav = await synthesize(clip.text);
    const temp = target(id) + '.tmp.mp3';
    const ff = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'wav', '-i', 'pipe:0',
      '-codec:a', 'libmp3lame', '-q:a', '3', '-ac', '1', temp], {input: wav});
    if (ff.status !== 0 || !fs.existsSync(temp) || fs.statSync(temp).size < 1000) {
      throw new Error(`Conversion MP3 échouée : ${ff.stderr?.toString().trim() || 'fichier vide'}`);
    }
    fs.renameSync(temp, target(id));
    manifest.clips[id] = {sha256: fingerprint(clip), text: clip.text, file: clip.src, model, voice, style};
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
    console.log(`Créé : ${id} (${Math.round(fs.statSync(target(id)).size / 1024)} Ko)`);
    done++;
  } catch (error) {
    console.error(`Échec ${id} : ${error.message}`);
    process.exitCode = 1;
    break;
  }
}
console.log(`${done} nouveau(x) MP3 produit(s).`);
