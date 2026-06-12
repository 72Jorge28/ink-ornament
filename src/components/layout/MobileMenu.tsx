// src/components/layout/MobileMenu.tsx
"use client";

import { Languages, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { getLocalizedPath } from "@/i18n/get-localized-path";
import { locales, type Locale } from "@/i18n/locales";

type MobileMenuItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: MobileMenuItem[];
  currentLocale: Locale;
  ctaHref: string;
  ctaLabel: string;
};

function isActivePath(pathname: string, href: string) {
  if (href === "/es" || href === "/en") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({
  items,
  currentLocale,
  ctaHref,
  ctaLabel,
}: MobileMenuProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition hover:border-[var(--color-primary)]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isOpen ? (
        <div className="absolute left-0 right-0 top-20 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 px-6 py-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-2">
            {locales.map((targetLocale) => {
              const isActive = targetLocale === currentLocale;

              return (
                <Link
                  key={targetLocale}
                  href={getLocalizedPath(pathname, targetLocale)}
                  onClick={closeMenu}
                  className={[
                    "inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition",
                    isActive
                      ? "bg-[var(--color-primary)] text-[var(--color-background)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
                  ].join(" ")}
                >
                  <Languages className="size-3.5" />
                  {targetLocale}
                </Link>
              );
            })}
          </div>

          <nav className="grid gap-3">
            {items.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-2xl border px-5 py-4 text-sm font-medium transition",
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-background)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]/70 text-[var(--color-foreground)] hover:border-[var(--color-primary)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href={ctaHref}
            onClick={closeMenu}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-background)] transition hover:bg-[var(--color-primary-hover)]"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}