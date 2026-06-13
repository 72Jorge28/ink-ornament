// src/config/site.ts
import type { Locale } from "@/i18n/locales";

export const siteConfig = {
  name: "Ink Ornament",
  url: "https://ink-ornament.vercel.app",
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

  pages: ["/", "/services", "/styles", "/gallery", "/about", "/contact"],

  gallery: {
    items: [
      {
        index: 0,
        src: "/images/gallery/img-tatto-costilla.jpeg",
        className: "lg:row-span-2",
        visualClassName: "aspect-[4/5] lg:h-full lg:aspect-auto",
        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      },
      {
        index: 1,
        src: "/images/gallery/img-tatto-hombro.jpeg",
        className: "",
        visualClassName: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      },
      {
        index: 2,
        src: "/images/gallery/img-tatto-hombro2.jpeg",
        className: "",
        visualClassName: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      },
      {
        index: 3,
        src: "/images/gallery/img-tatto-mano.jpeg",
        className: "",
        visualClassName: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      },
      {
        index: 4,
        src: "/images/gallery/img-tatto-mano.jpeg",
        className: "",
        visualClassName: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
      },
      {
        index: 5,
        src: "/images/gallery/img-tatto-hombro2.jpeg",
        className: "lg:col-span-2",
        visualClassName: "aspect-[16/7]",
        sizes: "(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw",
      },
    ],

    homePreview: [
      {
        index: 0,
        src: "/images/gallery/img-tatto-costilla.jpeg",
        className: "lg:min-h-[34rem]",
        visualClassName: "aspect-[4/5] lg:aspect-auto lg:h-full",
        sizes: "(min-width: 1024px) 60vw, 100vw",
        priority: true,
      },
      {
        index: 1,
        src: "/images/gallery/img-tatto-mano.jpeg",
        className: "",
        visualClassName: "aspect-[16/10]",
        sizes: "(min-width: 1024px) 40vw, 100vw",
        priority: false,
      },
      {
        index: 2,
        src: "/images/gallery/img-tatto-mano.jpeg",
        className: "",
        visualClassName: "aspect-[16/10]",
        sizes: "(min-width: 1024px) 40vw, 100vw",
        priority: false,
      },
    ],
  },

  seo: {
    title: "Ink Ornament | Custom tattoo studio",
    description:
      "Tattoo studio focused on custom pieces, fine line, blackwork and ornamental art.",
  },
} as const;