import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/norske-aktorer";
const TITLE = "Norske akt\u00f8rer i litium-bransjen";
const DESC = "Vianode, Beyonder, Morrow Batteries, Hydrovolt og andre norske akt\u00f8rer i litium-batteriindustrien per 2026.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Norske akt\u00f8rer", href: PATH },
          ]), faqSchema([{"q": "Lager Norge litium-celler?", "a": "Foreløpig i begrenset skala. Full kommersiell produksjon ventes 2027–2028."}, {"q": "Kan jeg investere i norsk litium-industri?", "a": "Noen aktører er børsnoterte. Investerings-anbefalinger gir vi ikke – sjekk med finansiell rådgiver."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Marked"
        title="Norske akt\u00f8rer i litium-bransjen"
        lead="Norge har ingen litium-gruver, men flere viktige akt\u00f8rer i verdikjeden for celleproduksjon, anodematerialer og resirkulering."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Norske akt\u00f8rer", href: PATH },
        ]}
      >
        <h2>Vianode</h2>
          <p dangerouslySetInnerHTML={{__html: "Vianode produserer syntetisk grafitt-anodematerialer for litium-batterier. Anlegget p\u00e5 Her\u00f8ya har full skala produksjon."}} />
          <p dangerouslySetInnerHTML={{__html: "Anodematerialer er kritiske \u2013 grafitt utgj\u00f8r 15\u201320 % av en celle. Vianodes prosess har lavere CO\u2082-avtrykk."}} />

        <h2>Beyonder</h2>
          <p dangerouslySetInnerHTML={{__html: "Beyonder utvikler litium-ion-kondensatorer (LIC). Egnet for h\u00f8y effekt, lang levetid og rask lading."}} />
          <p dangerouslySetInnerHTML={{__html: "Hovedkontor i Sandnes."}} />

        <h2>Morrow Batteries</h2>
          <p dangerouslySetInnerHTML={{__html: "Morrow bygger LFP-cellefabrikk i Arendal. Ambisjon: produsere 8 GWh celler per \u00e5r ved full skala."}} />
          <p dangerouslySetInnerHTML={{__html: "Per 2026: pilotproduksjon i gang, full kommersialisering ventet 2027\u20132028."}} />

        <h2>Hydrovolt</h2>
          <p dangerouslySetInnerHTML={{__html: "Eid av Hydro og Northvolt. Anlegg i Fredrikstad tar imot brukte elbil-batterier og gjenvinner over 95 %."}} />
          <p dangerouslySetInnerHTML={{__html: "Per 2026: anlegget kj\u00f8rer og leverer raffinert metall tilbake til battericelle-produksjonen."}} />

        <h2>Freyr Battery</h2>
          <p dangerouslySetInnerHTML={{__html: "Freyr lanserte ambisjoner om gigafabrikk i Mo i Rana. Per 2026 er prosjektet nedskalert."}} />
          <p dangerouslySetInnerHTML={{__html: "Vekslende status illustrerer utfordringen i \u00e5 konkurrere med kinesiske og amerikanske akt\u00f8rer."}} />

        <h2>Andre prosjekter</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Cenate (Vivace):</strong> silisium-anode utvikling i Kristiansand."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Norsk Hydro:</strong> investerer i Hydrovolt og Vianode, samt eierandel i Northvolt."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Lager Norge litium-celler?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Foreløpig i begrenset skala. Full kommersiell produksjon ventes 2027–2028.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg investere i norsk litium-industri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Noen aktører er børsnoterte. Investerings-anbefalinger gir vi ikke – sjekk med finansiell rådgiver.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/marked" className="btn btn-ghost">Marked</Link>
          <Link href="/resirkulering" className="btn btn-ghost">Resirkulering</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
