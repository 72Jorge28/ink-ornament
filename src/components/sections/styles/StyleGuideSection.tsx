// src/components/sections/styles/StyleGuideSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type StyleGuideSectionProps = {
  t: (key: string) => string;
};

const guideItems = [0, 1, 2, 3] as const;

export function StyleGuideSection({ t }: StyleGuideSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.12),transparent_26rem)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge>{t("styles.guide.eyebrow")}</Badge>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("styles.guide.title")}
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {t("styles.guide.description")}
              </p>
            </div>

            <div className="grid gap-3">
              {guideItems.map((itemIndex) => (
                <div
                  key={itemIndex}
                  className="grid gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)]/45 p-5 sm:grid-cols-[auto_1fr] sm:items-start"
                >
                  <div className="flex size-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-semibold text-[var(--color-background)]">
                    0{itemIndex + 1}
                  </div>

                  <p className="text-sm leading-7 text-[var(--color-foreground)]">
                    {t(`styles.guide.item.${itemIndex}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}