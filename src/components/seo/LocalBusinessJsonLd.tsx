// src/components/seo/LocalBusinessJsonLd.tsx
import { siteConfig } from "@/config/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address,
    },
    sameAs: [siteConfig.contact.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}