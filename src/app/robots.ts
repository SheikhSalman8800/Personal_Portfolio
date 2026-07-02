import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://sheikhsalman.dev";
  const baseUrl = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
