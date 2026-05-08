import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/redaksjonell-metode";
const TITLE = "Redaksjonell metode";
const DESC = "Slik produserer vi innhold p\u00e5 Lithium.no \u2013 kilder, oppdatering, intervaller og uavhengighet.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Redaksjonell metode", href: PATH },
          ]),
        ]}
      />
      <ArticleLayout
        eyebrow="Redaksjon"
        title="Redaksjonell metode"
        lead="V\u00e5r redaksjonelle metode for \u00e5 sikre p\u00e5litelig, oppdatert og uavhengig informasjon om litium-batterier."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Redaksjonell metode", href: PATH },
        ]}
      >
        <h2>Kilder</h2>
          <p dangerouslySetInnerHTML={{__html: "Vi bruker prim\u00e6rkilder s\u00e5 langt det er mulig: produsentdata, akademiske publikasjoner, bransjerapporter (Wood Mackenzie, BloombergNEF, BNEF), regulatoriske dokumenter (DSB, Milj\u00f8direktoratet) og direkte kommunikasjon med produsenter."}} />
          <p dangerouslySetInnerHTML={{__html: "Sekund\u00e6re kilder verifiseres med flere uavhengige kilder f\u00f8r publisering."}} />

        <h2>Intervaller og estimater</h2>
          <p dangerouslySetInnerHTML={{__html: "N\u00e5r vi oppgir tall, bruker vi reelle intervaller fremfor markedsf\u00f8ringsp\u00e5stander. \u00ab4 000\u20136 000 sykluser\u00bb er reelt for LFP, ikke \u00ab10 000+\u00bb som noen produsenter hevder."}} />
          <p dangerouslySetInnerHTML={{__html: "Priser oppdateres minimum kvartalsvis. Markeds- og pris-data kan endre seg raskere \u2013 sjekk dato p\u00e5 artikkelen."}} />

        <h2>Uavhengighet</h2>
          <p dangerouslySetInnerHTML={{__html: "Vi tar ikke betalt for omtaler, plasseringer eller anbefalinger. Vi har ingen affiliate-lenker."}} />
          <p dangerouslySetInnerHTML={{__html: "Hvis vi noen gang skulle inng\u00e5 et partnerskap som p\u00e5virker innholdet, vil dette merkes tydelig."}} />

        <h2>Korreksjoner</h2>
          <p dangerouslySetInnerHTML={{__html: "Faktafeil rettes innen 24 timer fra varsling. Endringer er sporbare i sidens historikk."}} />

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/om" className="btn btn-ghost">Om</Link>
          <Link href="/kontakt" className="btn btn-ghost">Kontakt</Link>
          <Link href="/personvern" className="btn btn-ghost">Personvern</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
