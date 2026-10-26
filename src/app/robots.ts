import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

// Search and AI-citation crawlers are welcome. Training crawlers are also allowed for now;
// switch their rule to `disallow: "/"` if you'd rather opt out of model training.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ["OAI-SearchBot", "Claude-SearchBot", "PerplexityBot"], allow: "/" },
      { userAgent: ["GPTBot", "ClaudeBot", "Google-Extended"], allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
