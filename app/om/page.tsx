import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/om";
const TITLE = "Om Lithium.no";
const DESC = "Om Lithium.no \u2013 Norges uavhengige kunnskapsbase om litium-batterier.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Om", href: PATH },
          ]),
        ]}
      />
      <ArticleLayout
        eyebrow="Om"
        title="Om Lithium.no"
        lead="Lithium.no er en redaksjonell ressurs om litium-batterier i Norge."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Om", href: PATH },
        ]}
      >
        <h2>Vårt mål</h2>
          <p dangerouslySetInnerHTML={{__html: "\u00c5 v\u00e6re Norges mest p\u00e5litelige kilde for informasjon om litium-batterier \u2013 fra kjemi til marked, fra teknologi til sikkerhet."}} />
          <p dangerouslySetInnerHTML={{__html: "Vi tjener ikke penger p\u00e5 \u00e5 selge batterier eller lede deg til spesifikke leverand\u00f8rer. Innholdet er uavhengig."}} />

        <h2>Hvem står bak</h2>
          <p dangerouslySetInnerHTML={{__html: "Lithium.no er publisert av IT-Firma.no, og er del av et \u00f8kosystem som inkluderer Solcelle.io, Solcellebatteri.no og flere energi-relaterte ressurser."}} />

        <h2>Kontakt</h2>
          <p dangerouslySetInnerHTML={{__html: "Forslag til artikler, korreksjoner eller andre henvendelser: bruk kontaktskjemaet p\u00e5 /kontakt."}} />

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/redaksjonell-metode" className="btn btn-ghost">Redaksjonell metode</Link>
          <Link href="/kontakt" className="btn btn-ghost">Kontakt</Link>
          <Link href="/personvern" className="btn btn-ghost">Personvern</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
