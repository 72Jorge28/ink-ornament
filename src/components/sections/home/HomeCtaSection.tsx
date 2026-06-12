// src/components/sections/home/HomeCtaSection.tsx
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/locales";

type HomeCtaSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function HomeCtaSection({ locale, t }: HomeCtaSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.16),transparent_26rem)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-[var(--color-foreground)] sm:text-5xl">
                {t("home.cta.title")}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                {t("home.cta.description")}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Button href={`/${locale}/contact`}>
                {t("home.cta.primary")}
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button href={`/${locale}/gallery`} variant="secondary">
                {t("home.cta.secondary")}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}