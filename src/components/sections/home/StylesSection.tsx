// src/components/sections/home/StylesSection.tsx
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/locales";

type StylesSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

const tattooStyles = [0, 1, 2, 3, 4, 5] as const;

export function StylesSection({ locale, t }: StylesSectionProps) {
  return (
    <Section id="styles" className="border-y border-[var(--color-border)]/70">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge>{t("styles.eyebrow")}</Badge>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {t("styles.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {t("styles.description")}
            </p>

            <Button href={`/${locale}/styles`} variant="secondary" className="mt-8">
              {t("hero.secondaryCta")}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>

          <div className="grid gap-3">
            {tattooStyles.map((styleIndex) => (
              <div
                key={styleIndex}
                className="group grid gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-5 transition hover:border-[var(--color-primary)]/60 sm:grid-cols-[auto_1fr] sm:items-start"
              >
                <div className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-semibold text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)]">
                  0{styleIndex + 1}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                    {t(`styles.items.${styleIndex}.title`)}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    {t(`styles.items.${styleIndex}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}