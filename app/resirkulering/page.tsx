import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/resirkulering";
const TITLE = "Resirkulering av litium-batteri";
const DESC = "Hvordan resirkulering av litium-batteri fungerer i 2026. Hydrovolt, andre liv, materialgjenvinning.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Resirkulering", href: PATH },
          ]), faqSchema([{"q": "Hva skjer med materialene etter resirkulering?", "a": "Litium og andre metaller raffineres til batterikvalitet og selges til nye produsenter."}, {"q": "Får jeg betalt for å levere brukte batterier?", "a": "Sjelden for forbruker. Men noen elbil-merker har pante-ordninger."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Resirkulering av litium-batteri"
        lead="Litium-batterier kan resirkuleres med over 95 % materialgjenvinning. Norge har en av Europas ledende resirkuleringsfasiliteter i Hydrovolt."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Resirkulering", href: PATH },
        ]}
      >
        <h2>Hvorfor resirkulering er kritisk</h2>
          <p dangerouslySetInnerHTML={{__html: "Globalt forventes 11 millioner tonn brukte elbil-batterier \u00e5 n\u00e5 sluttfasen mellom 2025 og 2030."}} />
          <p dangerouslySetInnerHTML={{__html: "Resirkulert litium har lavere CO\u2082-fotavtrykk enn ny litium fra gruver."}} />

        <h2>Hydrovolt – Norges anlegg</h2>
          <p dangerouslySetInnerHTML={{__html: "Hydrovolt i Fredrikstad er felles eid av Norsk Hydro og Northvolt."}} />
          <p dangerouslySetInnerHTML={{__html: "Anlegget tar imot brukte elbil-batterier og gjenvinner over 95 % av materialene."}} />
          <p dangerouslySetInnerHTML={{__html: "Black mass g\u00e5r videre til hydrometallurgisk prosess der individuelle metaller utvinnes."}} />

        <h2>Second life – andre liv</h2>
          <p dangerouslySetInnerHTML={{__html: "Mange brukte elbil-batterier har 70\u201380 % gjenv\u00e6rende kapasitet."}} />
          <p dangerouslySetInnerHTML={{__html: "Andre liv kan forlenge batteriets nyttetid med 5\u201310 \u00e5r f\u00f8r resirkulering."}} />

        <h2>Mindre batterier</h2>
          <p dangerouslySetInnerHTML={{__html: "El-sykkel-batteri, telefon, drone: leveres som farlig avfall ved gjenvinningsstasjoner."}} />
          <p dangerouslySetInnerHTML={{__html: "Forhandlere er pliktige til \u00e5 ta imot brukte batterier."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hva skjer med materialene etter resirkulering?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Litium og andre metaller raffineres til batterikvalitet og selges til nye produsenter.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Får jeg betalt for å levere brukte batterier?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Sjelden for forbruker. Men noen elbil-merker har pante-ordninger.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/avhending" className="btn btn-ghost">Avhending</Link>
          <Link href="/marked" className="btn btn-ghost">Marked</Link>
          <Link href="/norske-aktorer" className="btn btn-ghost">Norske aktører</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
