// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale, locales, type Locale } from "@/i18n/locales";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

function getLanguageAlternates(path = "/") {
  return Object.fromEntries(
    locales.map((locale) => [locale, `/${locale}${path === "/" ? "" : path}`]),
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const messages = await getMessages(locale);
  const t = createT(messages);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("metadata.title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("metadata.description"),
    alternates: {
      canonical: `/${locale}`,
      languages: getLanguageAlternates("/"),
    },
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      url: `/${locale}`,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metadata.title"),
      description: t("metadata.description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale as Locale}>
      <body data-theme={themeConfig.activePreset}>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}
