import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/personvern";
const TITLE = "Personvern";
const DESC = "Slik h\u00e5ndterer Lithium.no personopplysninger og nettsidebes\u00f8k.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Personvern", href: PATH },
          ]),
        ]}
      />
      <ArticleLayout
        eyebrow="Juridisk"
        title="Personvern"
        lead="Lithium.no respekterer ditt personvern. Her er hva vi samler inn, og hvorfor."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Personvern", href: PATH },
        ]}
      >
        <h2>Hva vi samler inn</h2>
          <p dangerouslySetInnerHTML={{__html: "Anonyme bes\u00f8ksstatistikker: sidebes\u00f8k, geografisk omr\u00e5de (land/region), enhetstype, henvisende side. Vi bruker dette for \u00e5 forbedre innholdet."}} />
          <p dangerouslySetInnerHTML={{__html: "Hvis du melder deg p\u00e5 nyhetsbrevet, lagrer vi e-postadressen til du melder deg av."}} />

        <h2>Hva vi ikke gjør</h2>
          <p dangerouslySetInnerHTML={{__html: "Vi selger ikke data til tredjepart."}} />
          <p dangerouslySetInnerHTML={{__html: "Vi sporer deg ikke p\u00e5 tvers av nettsteder."}} />
          <p dangerouslySetInnerHTML={{__html: "Vi bruker ikke avansert annonsesporing."}} />

        <h2>Dine rettigheter</h2>
          <p dangerouslySetInnerHTML={{__html: "Du har rett til innsyn i og sletting av personopplysninger om deg. Send foresp\u00f8rsel via /kontakt."}} />

        <h2>Cookies</h2>
          <p dangerouslySetInnerHTML={{__html: "Vi bruker minimalt med cookies, prim\u00e6rt for \u00e5 huske dine valg p\u00e5 nettsiden. Ingen tracking-cookies."}} />

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/om" className="btn btn-ghost">Om</Link>
          <Link href="/redaksjonell-metode" className="btn btn-ghost">Redaksjonell metode</Link>
          <Link href="/kontakt" className="btn btn-ghost">Kontakt</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
