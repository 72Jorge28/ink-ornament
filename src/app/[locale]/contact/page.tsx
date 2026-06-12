// src/app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactDetailsSection } from "@/components/sections/contact/ContactDetailsSection";
import { ContactFaqSection } from "@/components/sections/contact/ContactFaqSection";
import { ContactMessageGuideSection } from "@/components/sections/contact/ContactMessageGuideSection";
import { ContactOptionsSection } from "@/components/sections/contact/ContactOptionsSection";
import { PageHero } from "@/components/ui/PageHero";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type ContactPageProps = {
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
    path: "/contact",
    titleKey: "metadata.contact.title",
    descriptionKey: "metadata.contact.description",
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
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
          eyebrow={t("contact.page.eyebrow")}
          title={t("contact.page.title")}
          description={t("contact.page.description")}
        />

        <ContactOptionsSection t={t} />
        <ContactDetailsSection t={t} />
        <ContactMessageGuideSection t={t} />
        <ContactFaqSection t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}