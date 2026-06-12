// src/app/[locale]/styles/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StyleDetailsSection } from "@/components/sections/styles/StyleDetailsSection";
import { StyleGuideSection } from "@/components/sections/styles/StyleGuideSection";
import { StylesCtaSection } from "@/components/sections/styles/StylesCtaSection";
import { PageHero } from "@/components/ui/PageHero";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type StylesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    path: "/styles",
    titleKey: "metadata.styles.title",
    descriptionKey: "metadata.styles.description",
  });
}

export default async function StylesPage({ params }: StylesPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  const t = createT(messages);

  return (
    <>
      <Header locale={locale} t={t} />

      <main>
        <PageHero
          eyebrow={t("styles.page.eyebrow")}
          title={t("styles.page.title")}
          description={t("styles.page.description")}
        />

        <StyleDetailsSection t={t} />
        <StyleGuideSection t={t} />
        <StylesCtaSection locale={locale} t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}