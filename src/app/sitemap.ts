import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date("2026-10-26"), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2026-10-26"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date("2025-05-06"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
