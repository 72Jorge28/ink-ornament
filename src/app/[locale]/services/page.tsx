// src/app/[locale]/services/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ServiceDetailsSection } from "@/components/sections/services/ServiceDetailsSection";
import { ServicesCtaSection } from "@/components/sections/services/ServicesCtaSection";
import { PageHero } from "@/components/ui/PageHero";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type ServicesPageProps = {
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
    path: "/services",
    titleKey: "metadata.services.title",
    descriptionKey: "metadata.services.description",
  });
}

export default async function ServicesPage({ params }: ServicesPageProps) {
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
          eyebrow={t("services.page.eyebrow")}
          title={t("services.page.title")}
          description={t("services.page.description")}
        />

        <ServiceDetailsSection t={t} />
        <ServicesCtaSection locale={locale} t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}