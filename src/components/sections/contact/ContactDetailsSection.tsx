// src/components/sections/contact/ContactDetailsSection.tsx
import type { IconType } from "react-icons";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

type ContactDetailsSectionProps = {
  t: (key: string) => string;
};

type DetailItem = {
  key: "email" | "phone" | "location";
  icon: IconType;
  value: string;
};

const detailItems: DetailItem[] = [
  {
    key: "email",
    icon: MdEmail,
    value: siteConfig.contact.email,
  },
  {
    key: "phone",
    icon: MdPhone,
    value: siteConfig.contact.phone,
  },
  {
    key: "location",
    icon: MdLocationOn,
    value: siteConfig.contact.address,
  },
];

export function ContactDetailsSection({ t }: ContactDetailsSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.12),transparent_26rem)]" />

          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Badge>{t("contact.details.eyebrow")}</Badge>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("contact.details.title")}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {detailItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)]/45 p-5"
                  >
                    <div className="mb-5 flex size-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-background)]">
                      <Icon className="size-5" />
                    </div>

                    <p className="text-sm font-medium text-[var(--color-primary)]">
                      {t(`contact.details.${item.key}`)}
                    </p>

                    <p className="mt-2 break-words text-sm leading-7 text-[var(--color-foreground)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}