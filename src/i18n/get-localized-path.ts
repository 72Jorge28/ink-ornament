// src/i18n/get-localized-path.ts
import type { Locale } from "@/i18n/locales";

export function getLocalizedPath(pathname: string, targetLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  segments[0] = targetLocale;

  return `/${segments.join("/")}`;
}