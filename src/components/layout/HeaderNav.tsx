// src/components/layout/HeaderNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavItem = {
  href: string;
  label: string;
};

type HeaderNavProps = {
  items: HeaderNavItem[];
};

function isActivePath(pathname: string, href: string) {
  if (href === "/es" || href === "/en") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav({ items }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/45 p-1 md:flex">
      {items.map((item) => {
        const isActive = isActivePath(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-full px-4 py-2 text-sm font-medium transition",
              isActive
                ? "bg-[var(--color-primary)] text-[var(--color-background)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}