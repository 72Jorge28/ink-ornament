// src/components/sections/gallery/GalleryNoteSection.tsx
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type GalleryNoteSectionProps = {
  t: (key: string) => string;
};

export function GalleryNoteSection({ t }: GalleryNoteSectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--color-primary-rgb),0.12),transparent_26rem)]" />

          <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-primary)]">
                Ink Ornament
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)]">
                {t("gallery.note.title")}
              </h2>
            </div>

            <p className="text-base leading-8 text-[var(--color-muted)]">
              {t("gallery.note.description")}
            </p>
          </div>
        </Card>
      </Container>
    </Section>
  );
}