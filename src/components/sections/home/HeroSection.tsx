// src/components/sections/home/HeroSection.tsx
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/locales";

type HeroSectionProps = {
  locale: Locale;
  t: (key: string) => string;
};

const socialLinks = [
  {
    label: "WhatsApp",
    href: siteConfig.contact.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: "Instagram",
    href: siteConfig.contact.instagram,
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.contact.email}`,
    icon: MdEmail,
  },
] as const;

export function HeroSection({ locale, t }: HeroSectionProps) {
  return (
    <Section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <Image
        src={siteConfig.images.hero.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-[var(--color-background)]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)]/95 via-[var(--color-background)]/78 to-[var(--color-background)]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)]/35 via-transparent to-[var(--color-background)]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--color-primary-rgb),0.2),transparent_34rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge className="mb-8">{t("hero.badge")}</Badge>

            <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] tracking-[0.12em] text-[var(--color-foreground)] sm:text-6xl sm:tracking-[0.16em] lg:text-7xl">
              Ink Ornament
            </h1>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>
                {t("hero.primaryCta")}
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button href={`/${locale}/gallery`} variant="secondary">
                {t("home.cta.secondary")}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="mr-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Social
              </p>

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                    aria-label={item.label}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 text-[var(--color-primary)] transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-6">
              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  06
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Styles
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  01
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Studio
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-[var(--color-foreground)]">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Custom
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_22rem)]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)]/65 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-background)]">
                <Image
                  src={siteConfig.images.hero.featured}
                  alt={t("hero.visual.label")}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/85 via-[var(--color-background)]/25 to-transparent" />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--color-primary-rgb),0.2),transparent_35%,rgba(var(--color-primary-rgb),0.08))]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur">
                  {t("hero.visual.label")}
                </div>

                <div className="absolute inset-x-8 bottom-8">
                  <div className="rounded-[1.5rem] border border-white/15 bg-black/45 p-6 backdrop-blur">
                    <p className="text-6xl font-black tracking-[-0.08em] text-white/25 sm:text-7xl">
                      {t("hero.visual.year")}
                    </p>

                    <div className="mt-6 h-px w-full bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />

                    <p className="mt-5 text-sm leading-7 text-white/75">
                      {t("hero.visual.styles")}
                    </p>
                  </div>
                </div>

                <div className="absolute right-8 top-24 h-40 w-px bg-gradient-to-b from-transparent via-[var(--color-primary)]/50 to-transparent" />
                <div className="absolute right-14 top-36 h-px w-28 bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}