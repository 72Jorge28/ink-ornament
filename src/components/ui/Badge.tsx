// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-4 py-2 text-sm font-medium text-[var(--color-primary)]",
        className,
      )}
    >
      {children}
    </div>
  );
}