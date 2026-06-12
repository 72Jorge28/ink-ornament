// src/app/[locale]/about/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSafetySection } from "@/components/sections/about/AboutSafetySection";
import { AboutStorySection } from "@/components/sections/about/AboutStorySection";
import { AboutValuesSection } from "@/components/sections/about/AboutValuesSection";
import { PageHero } from "@/components/ui/PageHero";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type AboutPageProps = {
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
    path: "/about",
    titleKey: "metadata.about.title",
    descriptionKey: "metadata.about.description",
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
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
          eyebrow={t("about.page.eyebrow")}
          title={t("about.page.title")}
          description={t("about.page.description")}
        />

        <AboutStorySection t={t} />
        <AboutValuesSection t={t} />
        <AboutSafetySection t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}