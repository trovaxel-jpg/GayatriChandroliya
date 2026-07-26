import type { MetadataRoute } from "next";
import { SITE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.domain, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.domain}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.domain}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
