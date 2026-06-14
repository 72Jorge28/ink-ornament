// src/components/sections/contact/ContactDetailsSection.tsx
import { ArrowUpRight } from "lucide-react";
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
  href: string;
  isExternal?: boolean;
};

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const detailItems: DetailItem[] = [
  {
    key: "email",
    icon: MdEmail,
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    key: "phone",
    icon: MdPhone,
    value: siteConfig.contact.phone,
    href: getPhoneHref(siteConfig.contact.phone),
  },
  {
    key: "location",
    icon: MdLocationOn,
    value: siteConfig.contact.address,
    href: siteConfig.contact.mapUrl,
    isExternal: true,
  },
];

export function ContactDetailsSection({ t }: ContactDetailsSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="relative overflow-hidden p-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.12),transparent_28rem)]" />

          <div className="relative grid min-w-0 lg:min-h-[46rem] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="min-w-0 p-8 sm:p-10 lg:p-14">
              <Badge>{t("contact.details.eyebrow")}</Badge>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("contact.details.title")}
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                {t("contact.page.description")}
              </p>

              <div className="mt-10 grid gap-4">
                {detailItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noreferrer noopener" : undefined}
                      className="group flex min-w-0 items-center justify-between gap-4 rounded-3xl border border-[var(--color-border)] bg-[var(--color-background)]/45 p-4 transition hover:border-[var(--color-primary)]/70 hover:bg-[var(--color-background)]/65 sm:gap-5 sm:p-5"
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-background)]">
                          <Icon className="size-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[var(--color-primary)]">
                            {t(`contact.details.${item.key}`)}
                          </p>

                          <p className="mt-1 break-words text-sm leading-7 text-[var(--color-foreground)] [overflow-wrap:anywhere]">
                            {item.value}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight className="size-5 shrink-0 text-[var(--color-muted)] transition group-hover:text-[var(--color-primary)]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="min-w-0 border-t border-[var(--color-border)] p-4 sm:p-6 lg:border-l lg:border-t-0">
              <div className="relative h-full min-h-[32rem] w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-background)] shadow-2xl shadow-black/20">
                <iframe
                  title={siteConfig.contact.address}
                  src={siteConfig.contact.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 opacity-80 grayscale contrast-[1.05] saturate-[0.75]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/70 via-transparent to-[var(--color-background)]/15" />

                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-auto sm:right-5 sm:w-[24rem]">
                  <div className="rounded-3xl border border-white/15 bg-black/60 p-5 text-white shadow-2xl shadow-black/30 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                      {t("contact.details.location")}
                    </p>

                    <p className="mt-2 text-base font-semibold [overflow-wrap:anywhere]">
                      {siteConfig.contact.address}
                    </p>

                    <a
                      href={siteConfig.contact.mapUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-primary-hover)]"
                    >
                      Abrir en Google Maps
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}