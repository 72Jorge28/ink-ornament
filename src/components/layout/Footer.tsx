// src/components/layout/Footer.tsx
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/i18n/locales";

type FooterProps = {
  locale: Locale;
  t: (key: string) => string;
};

export function Footer({ locale, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navItems = siteConfig.nav.map((item) => ({
    href: `/${locale}${item.href === "/" ? "" : item.href}`,
    label: t(item.labelKey),
  }));

  return (
    <footer className="border-t border-[var(--color-border)]/70 py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
          <div>
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-[var(--color-primary)]/60 text-sm font-bold text-[var(--color-primary)]">
                IO
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-foreground)]">
                {siteConfig.name}
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-muted)]">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Menu
            </h2>

            <nav className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-foreground)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Contact
            </h2>

            <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--color-muted)]">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
          <p>
            © {currentYear} {siteConfig.name}. {t("footer.rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}