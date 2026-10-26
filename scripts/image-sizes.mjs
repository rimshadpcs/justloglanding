// Creates the smaller WebP copies the image loader expects (src/lib/image-loader.ts).
// For each folder in src/lib/image-variants.json it:
//   1. converts any new .png/.jpg/.jpeg there to .webp (the original is removed),
//   2. writes `<name>-<width>.webp` for every configured width smaller than the image.
// Existing copies are skipped unless you pass --force (use it after replacing an image).
//
//   npm run images            # only what's missing
//   npm run images -- --force # regenerate everything

import { readdir, readFile, unlink, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const force = process.argv.includes("--force");
const variants = JSON.parse(await readFile(path.join(root, "src/lib/image-variants.json"), "utf8"));
const allWidths = [...new Set(variants.flatMap((v) => v.widths))];
const isVariant = (file) => allWidths.some((w) => file.endsWith(`-${w}.webp`));
const exists = (file) => stat(file).then(() => true, () => false);

let created = 0;
let converted = 0;

for (const { dir, prefix, widths } of variants) {
  const folder = path.join(root, "public", dir);
  const files = (await readdir(folder)).filter((f) => f.startsWith(prefix));

  for (const file of files.filter((f) => /\.(png|jpe?g)$/i.test(f))) {
    const source = path.join(folder, file);
    const target = source.replace(/\.(png|jpe?g)$/i, ".webp");
    if (await exists(target)) continue;
    await sharp(source).webp({ quality: 88, effort: 6 }).toFile(target);
    await unlink(source);
    converted++;
    console.log(`converted ${dir}/${file} -> ${path.basename(target)}`);
  }

  const originals = (await readdir(folder)).filter((f) => f.startsWith(prefix) && f.endsWith(".webp") && !isVariant(f));
  for (const file of originals) {
    const source = path.join(folder, file);
    const { width } = await sharp(source).metadata();
    for (const w of widths.filter((w) => w < width)) {
      const target = source.replace(/\.webp$/, `-${w}.webp`);
      if (!force && (await exists(target))) continue;
      await sharp(source).resize({ width: w }).webp({ quality: 85, effort: 6 }).toFile(target);
      created++;
      console.log(`wrote ${dir}/${path.basename(target)}`);
    }
  }
}

console.log(`Done: ${converted} converted, ${created} sizes written${force ? " (forced)" : ""}.`);
