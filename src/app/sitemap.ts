// src/app/sitemap.ts
import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.pages.flatMap((path) =>
    locales.map((locale) => {
      const isHome = path === "/";

      return {
        url: new URL(
          `/${locale}${isHome ? "" : path}`,
          siteConfig.url,
        ).toString(),
        lastModified: new Date(),
        changeFrequency: isHome ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 1 : 0.8,
      };
    }),
  );
}