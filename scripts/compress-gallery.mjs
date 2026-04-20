/**
 * Compresses gallery images using sharp.
 * Reads from:  public/images/gallery/
 * Writes to:   public/images/gallery-compressed/  (mirrors folder structure)
 *
 * Settings:
 *   - Max width: 2000px (height scales proportionally)
 *   - Format: AVIF at quality 72
 *
 * Run: node scripts/compress-gallery.mjs
 */

import sharp from "sharp";
import { readdir, mkdir, stat } from "fs/promises";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "../public/images/gallery");
const DEST = join(__dirname, "../public/images/gallery-compressed");
const MAX_WIDTH = 2000;
const AVIF_QUALITY = 72;

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectImages(full)));
    } else if (/\.(avif|jpg|jpeg|png|webp)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function formatBytes(bytes) {
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function compress(src) {
  const rel = relative(SRC, src);
  const dest = join(DEST, rel).replace(/\.[^.]+$/, ".avif");

  await mkdir(dirname(dest), { recursive: true });

  const { size: sizeBefore } = await stat(src);

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .avif({ quality: AVIF_QUALITY })
    .toFile(dest);

  const { size: sizeAfter } = await stat(dest);
  const saved = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);

  return { rel, sizeBefore, sizeAfter, saved };
}

async function main() {
  const images = await collectImages(SRC);
  console.log(`Found ${images.length} images in ${SRC}\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const [i, src] of images.entries()) {
    try {
      const { rel, sizeBefore, sizeAfter, saved } = await compress(src);
      totalBefore += sizeBefore;
      totalAfter += sizeAfter;
      console.log(`[${i + 1}/${images.length}] ${rel}`);
      console.log(
        `  ${formatBytes(sizeBefore)} → ${formatBytes(sizeAfter)}  (${saved}% smaller)\n`
      );
    } catch (err) {
      console.error(`  ERROR: ${src}\n  ${err.message}\n`);
    }
  }

  console.log("─────────────────────────────────────────");
  console.log(`Total before : ${formatBytes(totalBefore)}`);
  console.log(`Total after  : ${formatBytes(totalAfter)}`);
  console.log(
    `Total saved  : ${formatBytes(totalBefore - totalAfter)}  (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`
  );
  console.log(`\nCompressed files written to:\n  ${DEST}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
