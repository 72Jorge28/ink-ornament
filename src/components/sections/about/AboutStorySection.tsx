// src/components/sections/about/AboutStorySection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type AboutStorySectionProps = {
  t: (key: string) => string;
};

export function AboutStorySection({ t }: AboutStorySectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-80 border-b border-[var(--color-border)] bg-[var(--color-background)] p-6 lg:border-b-0 lg:border-r lg:border-[var(--color-border)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_24rem)]" />

              <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)]/45">
                <div className="absolute inset-8 rounded-t-full border border-[var(--color-primary)]/20" />
                <div className="absolute inset-x-14 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/45 to-transparent" />
                <div className="absolute inset-y-14 left-1/2 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/45 to-transparent" />

                <div className="relative text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-primary)]">
                    Ink Ornament
                  </p>

                  <div className="mx-auto mt-8 h-px w-24 bg-[var(--color-primary)]/50" />

                  <p className="mt-8 text-5xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/15">
                    Studio
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14">
              <Badge>{t("about.story.eyebrow")}</Badge>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("about.story.title")}
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
                {t("about.story.description")}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}