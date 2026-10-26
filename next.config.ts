import type { NextConfig } from "next";

// Pages are static and Netlify purges its CDN on every deploy, so the edge can keep them
// and serve instantly instead of revalidating with the origin on each request.
const edgeCache = {
  key: "Netlify-CDN-Cache-Control",
  value: "public, durable, s-maxage=31536000, stale-while-revalidate=31536000",
};

const nextConfig: NextConfig = {
  async headers() {
    return ["/", "/privacy", "/terms", "/robots.txt", "/sitemap.xml"].map((source) => ({
      source,
      headers: [edgeCache],
    }));
  },
};

export default nextConfig;
