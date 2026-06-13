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

const criticalThemeStyles: Record<string, CSSProperties & Record<string, string>> = {
  "royal-violet": {
    "--color-background": "#0d0b14",
    "--color-foreground": "#f2eaff",
    "--color-surface": "#171123",
    "--color-primary": "#a855f7",
    "--color-primary-hover": "#c084fc",
    "--color-primary-rgb": "168, 85, 247",
    "--color-muted": "#b8abc9",
    "--color-border": "#33243f",
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

  const activeTheme = themeConfig.activePreset;

  return (
    <html lang={locale as Locale}>
      <body
        data-theme={activeTheme}
        style={criticalThemeStyles[activeTheme]}
      >
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}