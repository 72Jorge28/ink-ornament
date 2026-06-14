// src/components/sections/about/AboutStorySection.tsx
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

type AboutStorySectionProps = {
  t: (key: string) => string;
};

export function AboutStorySection({ t }: AboutStorySectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-80 border-b border-[var(--color-border)] bg-[var(--color-background)] p-6 lg:border-b-0 lg:border-r lg:border-[var(--color-border)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--color-primary-rgb),0.18),transparent_24rem)]" />

              <div className="relative h-full min-h-72 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)]/45">
                <Image
                  src={siteConfig.images.about.story}
                  alt={t("about.story.title")}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/85 via-[var(--color-background)]/25 to-transparent" />

                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(var(--color-primary-rgb),0.22),transparent_40%,rgba(var(--color-primary-rgb),0.08))]" />

                <div className="absolute inset-6 rounded-[1.35rem] border border-white/15" />

                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
                  Ink Ornament
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-[1.5rem] border border-white/15 bg-black/45 p-5 backdrop-blur">
                    <p className="text-5xl font-black tracking-[-0.08em] text-white/25">
                      Studio
                    </p>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-[var(--color-primary)]/70 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-10 lg:p-14">
              <Badge>{t("about.story.eyebrow")}</Badge>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-4xl">
                {t("about.story.title")}
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--color-muted)]">
                {t("about.story.description")}
              </p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}