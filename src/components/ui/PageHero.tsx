// src/components/ui/PageHero.tsx
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <Section className="pb-12 sm:pb-16">
      <Container>
        <div className="max-w-3xl">
          <Badge>{eyebrow}</Badge>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
            {description}
          </p>
        </div>
      </Container>
    </Section>
  );
}