// src/config/site.ts
import type { Locale } from "@/i18n/locales";

export const siteConfig = {
  name: "Ink Ornament",
  url: "https://ink-ornament.example.com",
  defaultLocale: "es" satisfies Locale,
  locales: ["es", "en"] as const,

  contact: {
    phone: "+1 000 000 0000",
    email: "booking@inkornament.com",
    whatsapp: "https://wa.me/10000000000",
    instagram: "https://instagram.com",
    address: "Miami, Florida",
  },

  nav: [
    {
      href: "/",
      labelKey: "nav.home",
    },
    {
      href: "/services",
      labelKey: "nav.services",
    },
    {
      href: "/styles",
      labelKey: "nav.styles",
    },
    {
      href: "/gallery",
      labelKey: "nav.gallery",
    },
    {
      href: "/about",
      labelKey: "nav.about",
    },
    {
      href: "/contact",
      labelKey: "nav.contact",
    },
  ],

  pages: [
    "/",
    "/services",
    "/styles",
    "/gallery",
    "/about",
    "/contact",
  ],

  seo: {
    title: "Ink Ornament | Custom tattoo studio",
    description:
      "Tattoo studio focused on custom pieces, fine line, blackwork and ornamental art.",
  },
} as const;