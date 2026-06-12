// src/app/[locale]/gallery/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { GalleryGridSection } from "@/components/sections/gallery/GalleryGridSection";
import { GalleryNoteSection } from "@/components/sections/gallery/GalleryNoteSection";
import { PageHero } from "@/components/ui/PageHero";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type GalleryPageProps = {
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
    path: "/gallery",
    titleKey: "metadata.gallery.title",
    descriptionKey: "metadata.gallery.description",
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
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
          eyebrow={t("gallery.page.eyebrow")}
          title={t("gallery.page.title")}
          description={t("gallery.page.description")}
        />

        <GalleryGridSection t={t} />
        <GalleryNoteSection t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}