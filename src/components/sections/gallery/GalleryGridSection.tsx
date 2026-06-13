// src/components/sections/gallery/GalleryGridSection.tsx
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type GalleryGridSectionProps = {
  t: (key: string) => string;
};

export function GalleryGridSection({ t }: GalleryGridSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.items.map((item) => (
            <GalleryItem
              key={item.index}
              index={item.index}
              src={item.src}
              sizes={item.sizes}
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
  src: string;
  sizes: string;
  t: (key: string) => string;
  className?: string;
  visualClassName?: string;
};

function GalleryItem({
  index,
  src,
  sizes,
  t,
  className,
  visualClassName,
}: GalleryItemProps) {
  const title = t(`gallery.items.${index}.title`);
  const category = t(`gallery.items.${index}.category`);

  return (
    <Card className={cn("group overflow-hidden p-0", className)}>
      <div
        className={cn(
          "relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background)]",
          visualClassName,
        )}
      >
        <Image
          src={src}
          alt={`${title} - ${category}`}
          fill
          sizes={sizes}
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/75 via-transparent to-transparent" />

        <div className="absolute inset-4 rounded-[1.5rem] border border-white/15 transition group-hover:border-[var(--color-primary)]/45" />

        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
          {category}
        </div>

        <p className="absolute bottom-5 right-5 text-6xl font-black tracking-[-0.08em] text-white/20">
          0{index + 1}
        </p>
      </div>

      <div className="p-6">
        <Badge className="mb-5">{category}</Badge>

        <h2 className="text-xl font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">
          {title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          {t(`gallery.items.${index}.description`)}
        </p>
      </div>
    </Card>
  );
}