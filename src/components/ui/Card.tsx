// src/components/ui/Card.tsx
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/70 p-6 transition hover:border-[var(--color-primary)]/60",
        className,
      )}
    >
      {children}
    </article>
  );
}