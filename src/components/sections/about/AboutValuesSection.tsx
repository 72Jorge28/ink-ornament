// src/components/sections/about/AboutValuesSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type AboutValuesSectionProps = {
  t: (key: string) => string;
};

const values = [0, 1, 2, 3] as const;

export function AboutValuesSection({ t }: AboutValuesSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge>{t("about.values.eyebrow")}</Badge>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {t("about.values.title")}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((valueIndex) => (
              <Card
                key={valueIndex}
                className="group relative overflow-hidden p-7"
              >
                <div className="absolute right-5 top-5 text-6xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/5 transition group-hover:text-[var(--color-primary)]/10">
                  0{valueIndex + 1}
                </div>

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between gap-6">
                    <div className="flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-semibold text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)]">
                      0{valueIndex + 1}
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/45 to-transparent" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                    {t(`about.values.item.${valueIndex}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {t(`about.values.item.${valueIndex}.description`)}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}