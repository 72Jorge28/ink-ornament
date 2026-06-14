// src/components/sections/contact/ContactOptionsSection.tsx
import { ArrowUpRight } from "lucide-react";
import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

import { Badge } from "@/components/ui/Badge";
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
  isExternal?: boolean;
};

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const options: ContactOption[] = [
  {
    key: "whatsapp",
    icon: FaWhatsapp,
    href: siteConfig.contact.whatsapp,
    isExternal: true,
  },
  {
    key: "instagram",
    icon: FaInstagram,
    href: siteConfig.contact.instagram,
    isExternal: true,
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
        <div className="mx-auto max-w-3xl text-center">
          <Badge>{t("contact.options.eyebrow")}</Badge>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
            {t("contact.options.title")}
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
            {t("contact.page.description")}
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.key}
                href={option.href}
                target={option.isExternal ? "_blank" : undefined}
                rel={option.isExternal ? "noreferrer noopener" : undefined}
                className="group relative flex h-full min-h-[23rem] flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/55 p-7 transition hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--color-surface)]/80"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.13),transparent_18rem)] opacity-0 transition group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="mb-8 flex items-center justify-between gap-6">
                    <div className="flex size-12 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-background)]">
                      <Icon className="size-5" />
                    </div>

                    <ArrowUpRight className="size-5 text-[var(--color-muted)] transition group-hover:text-[var(--color-primary)]" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
                    {t(`contact.options.${option.key}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {t(`contact.options.${option.key}.description`)}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-[var(--color-primary)]/45 to-transparent" />

                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                      {option.isExternal ? "Abrir enlace" : "Contactar"}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}