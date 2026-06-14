// src/app/[locale]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HomeGalleryPreviewSection } from "@/components/sections/home/HomeGalleryPreviewSection";
import { StylesSection } from "@/components/sections/home/StylesSection";
import { createT } from "@/i18n/create-t";
import { getMessages } from "@/i18n/get-messages";
import { isValidLocale } from "@/i18n/locales";
import { generatePageMetadata } from "@/lib/metadata";

type HomePageProps = {
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
    path: "/",
    titleKey: "metadata.home.title",
    descriptionKey: "metadata.home.description",
  });
}

export default async function HomePage({ params }: HomePageProps) {
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
        <HeroSection locale={locale} t={t} />
        <HomeGalleryPreviewSection locale={locale} t={t} />
        <StylesSection locale={locale} t={t} />
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}