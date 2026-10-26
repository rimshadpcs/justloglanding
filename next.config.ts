import type { NextConfig } from "next";

// The site has no server features, so it's exported as plain files that Netlify's CDN serves
// directly. Instead of Next's on-the-fly image optimizer, a custom loader points srcset at
// pre-generated WebP sizes (see src/lib/image-loader.ts).
// Response headers live in netlify.toml, because `headers()` doesn't apply to static exports.
const nextConfig: NextConfig = {
  output: "export",
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
};

export default nextConfig;
