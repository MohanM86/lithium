import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/hjemmebatteri";
const TITLE = "Hjemmebatteri: litium for husholdning";
const DESC = "Litium-batteri til boligen: hvordan det fungerer, l\u00f8nnsomhet, vanlige modeller og hvilken kjemi som passer best.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Hjemmebatteri", href: PATH },
          ]), faqSchema([{"q": "Trenger jeg solceller for å ha hjemmebatteri?", "a": "Nei. Du kan også lade fra nettet om natten og bruke om dagen. Men solceller + batteri gir best lønnsomhet."}, {"q": "Hvor stort batteri bør jeg ha?", "a": "8–10 kWh dekker typisk kveldsforbruk for en enebolig."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Hjemmebatteri: litium for husholdning"
        lead="Hjemmebatteri lagrer overskudd fra solceller eller billig nattstr\u00f8m til bruk n\u00e5r str\u00f8mmen er dyr eller mangler."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Hjemmebatteri", href: PATH },
        ]}
      >
        <h2>Hvordan det fungerer</h2>
          <p dangerouslySetInnerHTML={{__html: "Et hjemmebatteri kobles til boligens elektriske anlegg via en hybridvekselretter."}} />
          <p dangerouslySetInnerHTML={{__html: "Typisk dimensjon for enebolig: 8\u201315 kWh kapasitet, 5\u201310 kW effekt."}} />

        <h2>Hvilken kjemi</h2>
          <p dangerouslySetInnerHTML={{__html: "LFP er standard i 2026. Tesla Powerwall 3, BYD Battery-Box, Sungrow SBR \u2013 alle bruker LFP."}} />
          <p dangerouslySetInnerHTML={{__html: "Eldre modeller brukte NMC, men nye anlegg b\u00f8r v\u00e6re LFP."}} />

        <h2>Lønnsomhet</h2>
          <p dangerouslySetInnerHTML={{__html: "Tilbakebetalingstid: 8\u201314 \u00e5r for enebolig med solceller."}} />
          <p dangerouslySetInnerHTML={{__html: "Stort sett er besparelsen fra \u00f8kt egenforbruk og effekttariff-reduksjon."}} />

        <h2>Levetid i praksis</h2>
          <p dangerouslySetInnerHTML={{__html: "Med daglig syklus: LFP-hjemmebatteri leverer 10\u201315 \u00e5r f\u00f8r kapasiteten faller til 80 %."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Trenger jeg solceller for å ha hjemmebatteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nei. Du kan også lade fra nettet om natten og bruke om dagen. Men solceller + batteri gir best lønnsomhet.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvor stort batteri bør jeg ha?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>8–10 kWh dekker typisk kveldsforbruk for en enebolig.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/off-grid" className="btn btn-ghost">Off-grid</Link>
          <Link href="/marked" className="btn btn-ghost">Marked</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
