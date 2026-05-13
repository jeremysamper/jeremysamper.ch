import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dirs = ['src/assets/images', 'src/assets/clients', 'public'];
const results = [];

async function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) { await walk(p); continue; }
    if (!/\.(jpg|jpeg|png|webp|svg|avif)$/i.test(f)) continue;
    const sizeKB = (stat.size / 1024).toFixed(1);
    let dim = '-';
    try {
      const m = await sharp(p).metadata();
      dim = m.width && m.height ? `${m.width}x${m.height}` : '(vector)';
    } catch (e) {
      if (/\.svg$/i.test(f)) dim = '(svg)'; else dim = '(read err)';
    }
    results.push({ file: p.replaceAll('\\', '/'), size: sizeKB + ' kB', dim });
  }
}

for (const d of dirs) await walk(d);
results.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
for (const r of results) {
  console.log(r.size.padStart(10), r.dim.padStart(12), r.file);
}
