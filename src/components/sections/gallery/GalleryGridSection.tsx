// src/components/sections/gallery/GalleryGridSection.tsx
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type GalleryGridSectionProps = {
  t: (key: string) => string;
};

const galleryItems = [
  {
    index: 0,
    className: "lg:row-span-2",
    visualClassName: "aspect-[4/5] lg:h-full lg:aspect-auto",
  },
  {
    index: 1,
    className: "",
    visualClassName: "aspect-[4/3]",
  },
  {
    index: 2,
    className: "",
    visualClassName: "aspect-[4/3]",
  },
  {
    index: 3,
    className: "",
    visualClassName: "aspect-[4/3]",
  },
  {
    index: 4,
    className: "",
    visualClassName: "aspect-[4/3]",
  },
  {
    index: 5,
    className: "lg:col-span-2",
    visualClassName: "aspect-[16/7]",
  },
] as const;

export function GalleryGridSection({ t }: GalleryGridSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryItem
              key={item.index}
              index={item.index}
              t={t}
              className={item.className}
              visualClassName={item.visualClassName}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

type GalleryItemProps = {
  index: number;
  t: (key: string) => string;
  className?: string;
  visualClassName?: string;
};

function GalleryItem({
  index,
  t,
  className,
  visualClassName,
}: GalleryItemProps) {
  return (
    <Card className={cn("group overflow-hidden p-0", className)}>
      <div
        className={cn(
          "relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]",
          visualClassName,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_18rem)]" />

        <div className="absolute inset-4 rounded-[1.5rem] border border-[var(--color-primary)]/15 transition group-hover:border-[var(--color-primary)]/35" />

        <div className="absolute left-5 top-5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)] backdrop-blur">
          {t(`gallery.items.${index}.category`)}
        </div>

        <p className="absolute bottom-5 right-5 text-6xl font-black tracking-[-0.08em] text-[var(--color-foreground)]/10">
          0{index + 1}
        </p>
      </div>

      <div className="p-6">
        <Badge className="mb-5">
          {t(`gallery.items.${index}.category`)}
        </Badge>

        <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
          {t(`gallery.items.${index}.title`)}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          {t(`gallery.items.${index}.description`)}
        </p>
      </div>
    </Card>
  );
}