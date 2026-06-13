// src/components/sections/home/HomeGalleryPreviewSection.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/locales";
import { cn } from "@/lib/utils";

type HomeGalleryPreviewSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function HomeGalleryPreviewSection({
  locale,
  t,
}: HomeGalleryPreviewSectionProps) {
  const [featuredItem, ...sideItems] = siteConfig.gallery.homePreview;

  return (
    <Section className="border-y border-[var(--color-border)]/70">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge>{t("home.gallery.eyebrow")}</Badge>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {t("home.gallery.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {t("home.gallery.description")}
            </p>
          </div>

          <div className="lg:justify-self-end">
            <Button href={`/${locale}/gallery`} variant="secondary">
              {t("home.gallery.button")}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <GalleryPreviewCard
            index={featuredItem.index}
            src={featuredItem.src}
            sizes={featuredItem.sizes}
            priority={featuredItem.priority}
            t={t}
            className={featuredItem.className}
            visualClassName={featuredItem.visualClassName}
          />

          <div className="grid gap-5">
            {sideItems.map((item) => (
              <GalleryPreviewCard
                key={item.index}
                index={item.index}
                src={item.src}
                sizes={item.sizes}
                priority={item.priority}
                t={t}
                compact
                className={item.className}
                visualClassName={item.visualClassName}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type GalleryPreviewCardProps = {
  index: number;
  src: string;
  sizes: string;
  t: (key: string) => string;
  compact?: boolean;
  priority?: boolean;
  className?: string;
  visualClassName?: string;
};

function GalleryPreviewCard({
  index,
  src,
  sizes,
  t,
  compact = false,
  priority = false,
  className,
  visualClassName,
}: GalleryPreviewCardProps) {
  const title = t(`home.gallery.items.${index}.title`);
  const category = t(`home.gallery.items.${index}.category`);

  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <div
        className={cn(
          "relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]",
          compact ? "aspect-[16/10]" : "aspect-[4/5]",
          visualClassName,
        )}
      >
        <Image
          src={src}
          alt={`${title} - ${category}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/75 via-transparent to-transparent" />

        <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur">
          {category}
        </div>

        <p className="absolute bottom-6 right-6 text-7xl font-black tracking-[-0.08em] text-white/15">
          0{index + 1}
        </p>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
          {title}
        </h3>
      </div>
    </Card>
  );
}