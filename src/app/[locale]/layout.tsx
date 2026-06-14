// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";

import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { siteConfig } from "@/config/site";
import { themeConfig } from "@/config/theme";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale, locales, type Locale } from "@/i18n/locales";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

type CriticalThemeStyle = CSSProperties & Record<string, string>;

const criticalThemeStyles: Record<string, CriticalThemeStyle> = {
  "royal-violet": {
    "--color-background": "#0f0b18",
    "--color-foreground": "#f3ecff",
    "--color-surface": "#171021",
    "--color-primary": "#8b5cf6",
    "--color-primary-hover": "#a78bfa",
    "--color-primary-rgb": "139, 92, 246",
    "--color-muted": "#b7abc8",
    "--color-border": "#2c213a",
    backgroundColor: "var(--color-background)",
    color: "var(--color-foreground)",
  },
  "ancient-gold": {
    "--color-background": "#100f0d",
    "--color-foreground": "#f4ead8",
    "--color-surface": "#191613",
    "--color-primary": "#c9a45c",
    "--color-primary-hover": "#e0bc73",
    "--color-primary-rgb": "201, 164, 92",
    "--color-muted": "#a99d8b",
    "--color-border": "#3a2f22",
    backgroundColor: "var(--color-background)",
    color: "var(--color-foreground)",
  },
  "emerald-light": {
    "--color-background": "#f7fbf7",
    "--color-foreground": "#102019",
    "--color-surface": "#ffffff",
    "--color-primary": "#15803d",
    "--color-primary-hover": "#16a34a",
    "--color-primary-rgb": "21, 128, 61",
    "--color-muted": "#5c6f64",
    "--color-border": "#d8e7dc",
    backgroundColor: "var(--color-background)",
    color: "var(--color-foreground)",
  },
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

  const activeTheme =
    themeConfig.activePreset as keyof typeof criticalThemeStyles;

  return (
    <html lang={locale as Locale}>
      <body data-theme={activeTheme} style={criticalThemeStyles[activeTheme]}>
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}