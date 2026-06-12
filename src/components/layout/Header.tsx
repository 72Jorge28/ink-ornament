// src/components/layout/Header.tsx
import Link from "next/link";

import { HeaderNav } from "@/components/layout/HeaderNav";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/locales";

type HeaderProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function Header({ locale, t }: HeaderProps) {
  const navItems = siteConfig.nav.map((item) => ({
    href: `/${locale}${item.href === "/" ? "" : item.href}`,
    label: t(item.labelKey),
  }));

  const ctaHref = `/${locale}/contact`;
  const ctaLabel = t("hero.primaryCta");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/70 bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-[var(--color-primary)]/60 text-sm font-bold text-[var(--color-primary)] transition group-hover:border-[var(--color-primary)]">
            IO
          </span>

          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-foreground)]">
            {siteConfig.name}
          </span>
        </Link>

        <HeaderNav items={navItems} />

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher currentLocale={locale} />

          <Link
            href={ctaHref}
            className="rounded-full border border-[var(--color-primary)]/50 px-5 py-2 text-sm font-medium text-[var(--color-primary)] transition hover:bg-[var(--color-primary)] hover:text-[var(--color-background)]"
          >
            {ctaLabel}
          </Link>
        </div>

        <MobileMenu
          items={navItems}
          currentLocale={locale}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />
      </div>
    </header>
  );
}