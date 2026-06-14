// // src/components/sections/home/StylesSection.tsx
// import { ArrowRight } from "lucide-react";

// import { Badge } from "@/components/ui/Badge";
// import { Button } from "@/components/ui/Button";
// import { Container } from "@/components/ui/Container";
// import { Section } from "@/components/ui/Section";
// import type { Locale } from "@/i18n/locales";

// type StylesSectionProps = {
//   locale: Locale;
//   t: (key: string) => string;
// };

// const tattooStyles = [0, 1, 2, 3, 4, 5] as const;

// export function StylesSection({ locale, t }: StylesSectionProps) {
//   return (
//     <Section id="styles" className="border-y border-[var(--color-border)]/70">
//       <Container>
//         <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
//           <div>
//             <Badge>{t("styles.eyebrow")}</Badge>

//             <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
//               {t("styles.title")}
//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
//               {t("styles.description")}
//             </p>
//           </div>

//           <div className="lg:justify-self-end">
//             <Button href={`/${locale}/styles`} variant="secondary">
//               {t("hero.secondaryCta")}
//               <ArrowRight className="ml-2 size-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//           {tattooStyles.map((styleIndex) => (
//             <div
//               key={styleIndex}
//               className="group flex items-center justify-between gap-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/45 p-5 transition hover:border-[var(--color-primary)]/60"
//             >
//               <div>
//                 <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
//                   0{styleIndex + 1}
//                 </p>

//                 <h3 className="mt-2 text-lg font-semibold text-[var(--color-foreground)]">
//                   {t(`styles.items.${styleIndex}.title`)}
//                 </h3>
//               </div>

//               <div className="h-px w-12 bg-gradient-to-r from-[var(--color-primary)]/60 to-transparent transition group-hover:w-16" />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </Section>
//   );
// }