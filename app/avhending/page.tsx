import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/avhending";
const TITLE = "Avhending av brukte litium-batterier";
const DESC = "Slik leverer du brukte litium-batterier riktig: hjemmebatteri, el-sykkel, telefon, drone.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Avhending", href: PATH },
          ]), faqSchema([{"q": "Kan jeg kaste el-sykkel-batteriet i restavfall hvis det er ødelagt?", "a": "Aldri. Lever til gjenvinningsstasjon, forhandler eller produsent."}, {"q": "Hva koster det å kaste hjemmebatteri?", "a": "For privat kunde er det vanligvis kostnadsfritt via gjenvinningsstasjon."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Avhending av brukte litium-batterier"
        lead="Brukte litium-batterier er farlig avfall. Riktig h\u00e5ndtering beskytter b\u00e5de milj\u00f8et og deg selv."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Avhending", href: PATH },
        ]}
      >
        <h2>Hovedregel</h2>
          <p dangerouslySetInnerHTML={{__html: "Litium-batterier skal aldri i restavfall."}} />
          <p dangerouslySetInnerHTML={{__html: "I Norge er forhandlerene pliktige til \u00e5 ta imot brukte batterier av samme type."}} />

        <h2>Hvor du leverer</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Gjenvinningsstasjon:</strong> alle har egen container for batterier."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Forhandler:</strong> Elkj\u00f8p, Power, Komplett, Biltema og andre."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kommunens henteordning:</strong> sjekk lokalt."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hjemmebatteri:</strong> kontakt installat\u00f8ren eller produsenten."}} />

        <h2>Skadde batterier</h2>
          <p dangerouslySetInnerHTML={{__html: "Hovne, skadde eller varme batterier er ekstra farlige."}} />
          <p dangerouslySetInnerHTML={{__html: "Aldri pakk skadde batterier i plast eller papir."}} />

        <h2>Elbil-batteri</h2>
          <p dangerouslySetInnerHTML={{__html: "Forhandleren av elbilen er ansvarlig."}} />
          <p dangerouslySetInnerHTML={{__html: "Hvis du kj\u00f8per elbil med kjent batteridefekt fra utlandet, gj\u00f8r research p\u00e5 avhending."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg kaste el-sykkel-batteriet i restavfall hvis det er ødelagt?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Aldri. Lever til gjenvinningsstasjon, forhandler eller produsent.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hva koster det å kaste hjemmebatteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>For privat kunde er det vanligvis kostnadsfritt via gjenvinningsstasjon.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/resirkulering" className="btn btn-ghost">Resirkulering</Link>
          <Link href="/lagring" className="btn btn-ghost">Lagring</Link>
          <Link href="/norske-aktorer" className="btn btn-ghost">Norske aktører</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
