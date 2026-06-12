// src/components/sections/contact/ContactOptionsSection.tsx
import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

type ContactOptionsSectionProps = {
  t: (key: string) => string;
};

type ContactOption = {
  key: "whatsapp" | "instagram" | "email" | "phone";
  icon: IconType;
  href: string;
};

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const options: ContactOption[] = [
  {
    key: "whatsapp",
    icon: FaWhatsapp,
    href: siteConfig.contact.whatsapp,
  },
  {
    key: "instagram",
    icon: FaInstagram,
    href: siteConfig.contact.instagram,
  },
  {
    key: "email",
    icon: MdEmail,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    key: "phone",
    icon: MdPhone,
    href: getPhoneHref(siteConfig.contact.phone),
  },
];

export function ContactOptionsSection({ t }: ContactOptionsSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Badge>{t("contact.options.eyebrow")}</Badge>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
              {t("contact.options.title")}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <Card key={option.key} className="group p-7">
                <div className="mb-8 flex items-center justify-between gap-6">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)]">
                    <Icon className="size-5" />
                  </div>

                  <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-primary)]/45 to-transparent" />
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                  {t(`contact.options.${option.key}.title`)}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {t(`contact.options.${option.key}.description`)}
                </p>

                <Button href={option.href} className="mt-8 w-full">
                  {t(`contact.options.${option.key}.title`)}
                </Button>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}