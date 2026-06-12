// src/components/ui/Section.tsx
import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 sm:py-28", className)}>
      {children}
    </section>
  );
}