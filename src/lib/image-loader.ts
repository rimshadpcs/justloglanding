import variants from "./image-variants.json";

// next/image loader for the static export. There's no image server, so smaller copies of each
// image are generated ahead of time next to the original as `<name>-<width>.webp`.
// After adding an image to one of the folders in image-variants.json, run `npm run images`.
const VARIANT_WIDTHS = variants.map((v) => [`/${v.dir}/${v.prefix}`, v.widths] as const);

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = VARIANT_WIDTHS.find(([prefix]) => src.startsWith(prefix));
  if (!match || !src.endsWith(".webp")) return src;
  const fit = match[1].find((w) => w >= width);
  return fit ? src.replace(/\.webp$/, `-${fit}.webp`) : src;
}
