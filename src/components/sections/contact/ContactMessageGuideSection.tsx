// src/components/sections/contact/ContactMessageGuideSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ContactMessageGuideSectionProps = {
  t: (key: string) => string;
};

const messageItems = [0, 1, 2, 3, 4, 5] as const;

export function ContactMessageGuideSection({
  t,
}: ContactMessageGuideSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.1),transparent_26rem)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge>{t("contact.message.eyebrow")}</Badge>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("contact.message.title")}
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
                {t("contact.message.description")}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {messageItems.map((itemIndex) => (
                <div
                  key={itemIndex}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)]/45 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    0{itemIndex + 1}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-foreground)]">
                    {t(`contact.message.item.${itemIndex}`)}
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