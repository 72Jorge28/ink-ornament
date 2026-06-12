// src/components/sections/home/ProcessSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ProcessSectionProps = {
  t: (key: string) => string;
};

const processSteps = [0, 1, 2, 3, 4] as const;

export function ProcessSection({ t }: ProcessSectionProps) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{t("process.eyebrow")}</Badge>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
            {t("process.title")}
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            {t("process.description")}
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-5">
          {processSteps.map((stepIndex) => (
            <div
              key={stepIndex}
              className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/45 p-6"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-semibold text-[var(--color-background)]">
                  0{stepIndex + 1}
                </div>

                <div className="h-px flex-1 bg-[var(--color-border)] lg:hidden" />
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                {t(`process.items.${stepIndex}.title`)}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {t(`process.items.${stepIndex}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}