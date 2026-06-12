// src/components/sections/contact/ContactFaqSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type ContactFaqSectionProps = {
  t: (key: string) => string;
};

const faqItems = [0, 1, 2, 3] as const;

export function ContactFaqSection({ t }: ContactFaqSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{t("contact.faq.eyebrow")}</Badge>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
            {t("contact.faq.title")}
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4">
          {faqItems.map((itemIndex) => (
            <Card key={itemIndex} className="group p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-xs font-semibold text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)]">
                  0{itemIndex + 1}
                </div>

                <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/40 to-transparent" />
              </div>

              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                {t(`contact.faq.item.${itemIndex}.question`)}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {t(`contact.faq.item.${itemIndex}.answer`)}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}