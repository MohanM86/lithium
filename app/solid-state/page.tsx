import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/solid-state";
const TITLE = "Solid-state batteri: neste generasjon litium";
const DESC = "Solid-state-batteri lover h\u00f8yere energitetthet, raskere lading og bedre sikkerhet. Status per 2026.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Solid-state", href: PATH },
          ]), faqSchema([{"q": "Når får vi solid-state i hjemmebatteri?", "a": "Tidligst rundt 2030. Kostnaden må først ned betraktelig før det er konkurransedyktig mot LFP."}, {"q": "Erstatter solid-state alle litium-ion?", "a": "Ikke umiddelbart. LFP vil sannsynligvis dominere stasjonær lagring i 10+ år til."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="Solid-state batteri: neste generasjon litium"
        lead="Solid-state-batteri erstatter den flytende elektrolytten med fast materiale. Resultatet skal v\u00e6re bedre p\u00e5 alle viktige dimensjoner \u2013 men kommersialisering tar tid."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Solid-state", href: PATH },
        ]}
      >
        <h2>Hva som er nytt</h2>
          <p dangerouslySetInnerHTML={{__html: "I et tradisjonelt litium-ion-batteri er elektrolytten en organisk v\u00e6ske. I solid-state er den fast \u2013 keramikk, polymer eller en kombinasjon."}} />
          <p dangerouslySetInnerHTML={{__html: "Dette muliggj\u00f8r litium-metall-anode i stedet for grafitt, som teoretisk dobler energitettheten. Den faste elektrolytten er ogs\u00e5 mindre brennbar."}} />

        <h2>Forventede fordeler</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> 400+ Wh/kg, mot 270 Wh/kg for dagens beste NMC."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hurtiglading:</strong> 10\u201315 minutter til 80 %."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> ingen flytende elektrolytt \u00e5 sette fyr p\u00e5."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> potensielt 10 000+ sykluser."}} />

        <h2>Hvorfor det går sakte</h2>
          <p dangerouslySetInnerHTML={{__html: "Skala: laboratoriecelle og masseproduksjon er to forskjellige verdener."}} />
          <p dangerouslySetInnerHTML={{__html: "Grenseflater: kontakten mellom fast elektrolytt og elektroder skaper motstand som senker ytelsen."}} />
          <p dangerouslySetInnerHTML={{__html: "Kostnad: dagens prototyper er flere ganger dyrere enn LFP per kWh."}} />

        <h2>Status per 2026</h2>
          <p dangerouslySetInnerHTML={{__html: "Toyota har lovet kommersielle elbiler med solid-state innen 2027\u20132028. QuantumScape, Solid Power og CATL leverer sm\u00e5skala-prototyper."}} />
          <p dangerouslySetInnerHTML={{__html: "Forbruker-elektronikk kan bli f\u00f8rste sted vi ser solid-state i volum."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Når får vi solid-state i hjemmebatteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Tidligst rundt 2030. Kostnaden må først ned betraktelig før det er konkurransedyktig mot LFP.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Erstatter solid-state alle litium-ion?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ikke umiddelbart. LFP vil sannsynligvis dominere stasjonær lagring i 10+ år til.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/sammenligning" className="btn btn-ghost">Sammenligning</Link>
          <Link href="/marked" className="btn btn-ghost">Marked</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
