import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/kontakt";
const TITLE = "Kontakt Lithium.no";
const DESC = "Kontaktinformasjon for Lithium.no \u2013 sp\u00f8rsm\u00e5l, tips og henvendelser.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Kontakt", href: PATH },
          ]),
        ]}
      />
      <ArticleLayout
        eyebrow="Kontakt"
        title="Kontakt Lithium.no"
        lead="Sp\u00f8rsm\u00e5l, korreksjoner eller forslag til artikler? Vi vil gjerne h\u00f8re fra deg."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Kontakt", href: PATH },
        ]}
      >
        <h2>Henvendelser</h2>
          <p dangerouslySetInnerHTML={{__html: "Generell henvendelse, korreksjoner og forslag: send e-post til <strong>kontakt@lithium.no</strong>."}} />
          <p dangerouslySetInnerHTML={{__html: "Pressehenvendelser: angi \u00abPRESSE\u00bb i emnefeltet."}} />
          <p dangerouslySetInnerHTML={{__html: "Vi svarer normalt innen 2 virkedager."}} />

        <h2>Eier og publisher</h2>
          <p dangerouslySetInnerHTML={{__html: "Lithium.no eies og drives av IT-Firma.no."}} />

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/om" className="btn btn-ghost">Om</Link>
          <Link href="/redaksjonell-metode" className="btn btn-ghost">Redaksjonell metode</Link>
          <Link href="/personvern" className="btn btn-ghost">Personvern</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
