// src/components/layout/LanguageSwitcher.tsx
"use client";

import { Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocalizedPath } from "@/i18n/get-localized-path";
import { locales, type Locale } from "@/i18n/locales";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="hidden items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-1 md:flex">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getLocalizedPath(pathname, locale)}
            className={[
              "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition",
              isActive
                ? "bg-[var(--color-primary)] text-[var(--color-background)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
            ].join(" ")}
          >
            <Languages className="size-3.5" />
            {locale}
          </Link>
        );
      })}
    </div>
  );
}