// src/components/sections/styles/StyleDetailsSection.tsx
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type StyleDetailsSectionProps = {
  t: (key: string) => string;
};

const styles = [0, 1, 2, 3, 4, 5] as const;

export function StyleDetailsSection({ t }: StyleDetailsSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-4 lg:grid-cols-2">
          {styles.map((styleIndex) => (
            <Card
              key={styleIndex}
              className="group relative overflow-hidden p-7 sm:p-8"
            >
              <div className="absolute right-6 top-6 text-7xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/5 transition group-hover:text-[var(--color-primary)]/10">
                {t(`styles.detail.${styleIndex}.kicker`)}
              </div>

              <div className="relative">
                <div className="mb-8 flex items-center justify-between gap-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                    {t(`styles.detail.${styleIndex}.kicker`)}
                  </p>

                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/50 to-transparent" />
                </div>

                <h2 className="max-w-xl text-2xl font-semibold tracking-[-0.035em] text-[var(--color-foreground)] sm:text-3xl">
                  {t(`styles.detail.${styleIndex}.title`)}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                  {t(`styles.detail.${styleIndex}.description`)}
                </p>

                <div className="mt-7 border-t border-[var(--color-border)] pt-5">
                  <p className="text-sm leading-7 text-[var(--color-foreground)]">
                    {t(`styles.detail.${styleIndex}.bestFor`)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}