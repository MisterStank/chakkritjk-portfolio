import type { MetadataRoute } from "next";

const siteUrl = "https://chakkrit-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date() }];
}
