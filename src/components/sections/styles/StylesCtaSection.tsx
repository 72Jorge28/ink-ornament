// src/components/sections/styles/StylesCtaSection.tsx
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/locales";

type StylesCtaSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function StylesCtaSection({ locale, t }: StylesCtaSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.16),transparent_26rem)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                Ink Ornament
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("cta.styles.title")}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                {t("cta.styles.description")}
              </p>
            </div>

            <Button href={`/${locale}/contact`}>
              {t("cta.styles.button")}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}