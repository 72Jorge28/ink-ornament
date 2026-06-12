// src/components/sections/home/HomeGalleryPreviewSection.tsx
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/locales";

type HomeGalleryPreviewSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

const previewItems = [0, 1, 2] as const;

export function HomeGalleryPreviewSection({
  locale,
  t,
}: HomeGalleryPreviewSectionProps) {
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
            index={0}
            t={t}
            className="lg:min-h-[34rem]"
            visualClassName="aspect-[4/5] lg:aspect-auto lg:h-full"
          />

          <div className="grid gap-5">
            {previewItems.slice(1).map((itemIndex) => (
              <GalleryPreviewCard
                key={itemIndex}
                index={itemIndex}
                t={t}
                compact
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type GalleryPreviewCardProps = {
  index: (typeof previewItems)[number];
  t: (key: string) => string;
  compact?: boolean;
  className?: string;
  visualClassName?: string;
};

function GalleryPreviewCard({
  index,
  t,
  compact = false,
  className,
  visualClassName,
}: GalleryPreviewCardProps) {
  return (
    <Card className={cn("overflow-hidden p-0", className)}>
      <div
        className={cn(
          "relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]",
          compact ? "aspect-[16/10]" : "aspect-[4/5]",
          visualClassName,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_18rem)]" />

        <div className="absolute left-6 top-6 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-primary)]">
          {t(`home.gallery.items.${index}.category`)}
        </div>

        <p className="absolute bottom-6 right-6 text-7xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/10">
          0{index + 1}
        </p>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
          {t(`home.gallery.items.${index}.title`)}
        </h3>
      </div>
    </Card>
  );
}