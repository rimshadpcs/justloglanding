// next/image loader for the static export. There's no image server, so smaller copies of each
// image are generated ahead of time next to the original as `<name>-<width>.webp`.
// To add an image here, save those copies alongside it (same widths as its folder below).
const VARIANT_WIDTHS: [prefix: string, widths: number[]][] = [
  ["/images/screens/", [320, 480, 640]],
  ["/images/logan/logan-", [160, 320, 480, 640]],
  ["/images/landing/", [320, 480]],
];

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const match = VARIANT_WIDTHS.find(([prefix]) => src.startsWith(prefix));
  if (!match || !src.endsWith(".webp")) return src;
  const fit = match[1].find((w) => w >= width);
  return fit ? src.replace(/\.webp$/, `-${fit}.webp`) : src;
}
