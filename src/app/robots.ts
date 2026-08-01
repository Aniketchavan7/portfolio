import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // internal component playground — not part of the site
      disallow: ["/api/", "/components", "/components1", "/components2", "/components3", "/components-mono"],
    },
    sitemap: `${config.site}/sitemap.xml`,
    host: config.site,
  };
}
