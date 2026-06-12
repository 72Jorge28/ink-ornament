// src/components/sections/home/ServicesSection.tsx
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/i18n/locales";

type ServicesSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

const services = [0, 1, 2, 3, 4, 5] as const;

export function ServicesSection({ locale, t }: ServicesSectionProps) {
  return (
    <Section id="services">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge>{t("services.eyebrow")}</Badge>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {t("services.title")}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {t("services.description")}
            </p>
          </div>

          <div className="lg:justify-self-end">
            <Button href={`/${locale}/services`} variant="secondary">
              {t("nav.services")}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((serviceIndex) => (
            <Card key={serviceIndex} className="group p-6">
              <div className="mb-8 flex items-center justify-between">
                <div className="h-px w-14 bg-[var(--color-primary)]/50 transition group-hover:w-20" />
                <p className="text-xs font-semibold text-[var(--color-primary)]/70">
                  0{serviceIndex + 1}
                </p>
              </div>

              <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                {t(`services.items.${serviceIndex}.title`)}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {t(`services.items.${serviceIndex}.description`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}