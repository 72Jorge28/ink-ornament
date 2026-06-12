// src/components/ui/Button.tsx
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
    "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-[var(--color-background)]",
    variant === "primary" &&
      "bg-[var(--color-primary)] text-[var(--color-background)] hover:bg-[var(--color-primary-hover)]",
    variant === "secondary" &&
      "border border-[var(--color-border)] bg-[var(--color-surface)]/80 text-[var(--color-foreground)] hover:border-[var(--color-primary)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}