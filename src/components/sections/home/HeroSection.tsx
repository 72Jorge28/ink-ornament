// src/components/sections/home/HeroSection.tsx
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/locales";

type HeroSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge className="mb-8">{t("hero.badge")}</Badge>

            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-[var(--color-foreground)] sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {t("hero.description")}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>
                {t("hero.primaryCta")}
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button href={`/${locale}/styles`} variant="secondary">
                {t("hero.secondaryCta")}
              </Button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-6">
              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  06
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Styles
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  01
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Studio
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Custom
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_22rem)]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/65 p-4 shadow-2xl shadow-black/30">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--color-primary-rgb),0.18),transparent_35%,rgba(var(--color-primary-rgb),0.08))]" />

                <div className="absolute left-6 top-6 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--color-primary)]">
                  {t("hero.visual.label")}
                </div>

                <div className="absolute inset-x-8 bottom-8">
                  <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]/75 p-6 backdrop-blur">
                    <p className="text-6xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/15 sm:text-7xl">
                      {t("hero.visual.year")}
                    </p>

                    <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent" />

                    <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                      {t("hero.visual.styles")}
                    </p>
                  </div>
                </div>

                <div className="absolute right-8 top-24 h-40 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/50 to-transparent" />
                <div className="absolute right-14 top-36 h-px w-28 bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}