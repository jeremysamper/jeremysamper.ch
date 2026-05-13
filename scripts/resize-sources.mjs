/**
 * Redimensionne les sources JPG trop lourdes en place dans
 * `src/assets/images/`, après backup dans `src/assets/images/_archive/`
 * (gitignored).
 *
 * Lancer : `node scripts/resize-sources.mjs`
 *
 * Le script :
 *   1. Lit la liste TARGETS ci-dessous.
 *   2. Vérifie qu'un backup existe pour chaque fichier ; sinon, copie
 *      l'original dans _archive/ avant toute opération.
 *   3. Redimensionne (sharp) en limitant la plus grande dimension.
 *   4. Réécrit le JPG avec qualité fixée.
 *   5. Append au MANIFEST.txt (dimensions originales + cible + date).
 *
 * Idempotent : relancer le script ne re-redimensionne pas plus petit
 * — le backup est conservé tel quel.
 */

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC_DIR = path.join(ROOT, 'src/assets/images');
const ARCHIVE_DIR = path.join(SRC_DIR, '_archive');
const MANIFEST = path.join(ARCHIVE_DIR, 'MANIFEST.txt');

const TARGETS = [
  { file: 'service-organisation.jpg', maxEdge: 2400, quality: 85 },
  { file: 'service-cartes.jpg', maxEdge: 2400, quality: 85 },
  { file: 'service-formation.jpg', maxEdge: 2400, quality: 85 },
  { file: 'service-couts.jpg', maxEdge: 2400, quality: 85 },
  { file: 'assiette-bleue.jpg', maxEdge: 1346, quality: 85 },
];

async function ensureDir(dir) {
  if (!existsSync(dir)) await fs.mkdir(dir, { recursive: true });
}

async function appendManifest(line) {
  await fs.appendFile(MANIFEST, line + '\n', 'utf8');
}

async function run() {
  await ensureDir(ARCHIVE_DIR);
  if (!existsSync(MANIFEST)) {
    await fs.writeFile(
      MANIFEST,
      '# Manifest des sources images redimensionnées\n' +
        '# Format : <date ISO>\t<fichier>\t<dim originales>\t<taille kB originale>\t-> <maxEdge cible>\n\n',
      'utf8'
    );
  }

  for (const t of TARGETS) {
    const src = path.join(SRC_DIR, t.file);
    const bak = path.join(ARCHIVE_DIR, t.file);

    if (!existsSync(src)) {
      console.warn(`! ${t.file} introuvable — skip`);
      continue;
    }

    // 1. Backup (uniquement si pas déjà fait — idempotence)
    const alreadyBackedUp = existsSync(bak);
    if (!alreadyBackedUp) {
      await fs.copyFile(src, bak);
    }

    // 2. Mesure originale (depuis backup pour rester juste si re-run)
    const refPath = alreadyBackedUp ? bak : src;
    const meta = await sharp(refPath).metadata();
    const stat = await fs.stat(refPath);
    const origKB = (stat.size / 1024).toFixed(1);
    const origDim = `${meta.width}x${meta.height}`;

    // 3. Redimensionnement depuis le backup → écriture dans src/
    const tmp = src + '.tmp';
    await sharp(refPath)
      .resize({
        width: t.maxEdge,
        height: t.maxEdge,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: t.quality, mozjpeg: true })
      .toFile(tmp);
    await fs.rename(tmp, src);

    const newStat = await fs.stat(src);
    const newMeta = await sharp(src).metadata();
    const newKB = (newStat.size / 1024).toFixed(1);
    const newDim = `${newMeta.width}x${newMeta.height}`;

    const line = `${new Date().toISOString()}\t${t.file}\t${origDim} ${origKB} kB\t->\t${newDim} ${newKB} kB`;
    await appendManifest(line);

    console.log(`✓ ${t.file}  ${origDim} (${origKB} kB)  →  ${newDim} (${newKB} kB)`);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
