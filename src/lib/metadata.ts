// src/lib/metadata.ts
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale, locales, type Locale } from "@/i18n/locales";

type PageMetadataOptions = {
  locale: string;
  path: "/";
  titleKey: string;
  descriptionKey: string;
};

type InnerPageMetadataOptions = {
  locale: string;
  path: `/${string}`;
  titleKey: string;
  descriptionKey: string;
};

type GeneratePageMetadataOptions =
  | PageMetadataOptions
  | InnerPageMetadataOptions;

function getLocalizedPath(locale: Locale, path: string) {
  return `/${locale}${path === "/" ? "" : path}`;
}

function getLanguageAlternates(path: string) {
  return Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedPath(locale, path)]),
  );
}

export async function generatePageMetadata({
  locale,
  path,
  titleKey,
  descriptionKey,
}: GeneratePageMetadataOptions): Promise<Metadata> {
  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  const t = createT(messages);

  const title = t(titleKey);
  const description = t(descriptionKey);
  const canonical = getLocalizedPath(locale, path);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    alternates: {
      canonical,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}