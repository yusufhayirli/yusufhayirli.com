import type { MetadataRoute } from "next";

const siteUrl = "https://yusufhayirli.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-14"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
