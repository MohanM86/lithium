import { SITE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-schema.png`,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.publisher,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { "@type": "Organization", name: SITE.publisher },
    inLanguage: SITE.language,
  };
}

type ArticleArgs = {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
};

export function articleSchema(args: ArticleArgs) {
  const { title, description, path, datePublished = "2026-02-01", dateModified = "2026-05-08" } = args;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE.url}${path}`,
    datePublished,
    dateModified,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.publisher,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo-schema.png` },
    },
    inLanguage: SITE.language,
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function collectionPageSchema(args: { title: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: args.title,
    description: args.description,
    url: `${SITE.url}${args.path}`,
    inLanguage: SITE.language,
  };
}

export function definedTermSetSchema(terms: { term: string; shortDef: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Litium-ordbok",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.shortDef,
    })),
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Om ${SITE.name}`,
    url: `${SITE.url}/om`,
    inLanguage: SITE.language,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Kontakt ${SITE.name}`,
    url: `${SITE.url}/kontakt`,
    inLanguage: SITE.language,
  };
}

export function webApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Litium-kalkulator",
    url: `${SITE.url}/kalkulator`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    inLanguage: SITE.language,
    offers: { "@type": "Offer", price: "0", priceCurrency: "NOK" },
  };
}
