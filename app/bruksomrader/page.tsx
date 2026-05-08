import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/bruksomrader";
const TITLE = "Litium-batteri etter bruksomr\u00e5de";
const DESC = "Hvilket litium-batteri passer hva? Elbil, b\u00e5t, hjem, off-grid, MC, sykkel og mer.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Bruksomr\u00e5der", href: PATH },
          ]), faqSchema([{"q": "Kan jeg bruke samme batteri til båt og hytte?", "a": "Ofte ja, hvis spenning og kapasitet passer. LFP er allsidig nok til å fungere i begge sammenheng."}, {"q": "Hvilket litium-batteri er mest universelt?", "a": "12 V LFP-batterier i størrelser 50–300 Ah er den mest universelle løsningen."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Litium-batteri etter bruksomr\u00e5de"
        lead="Litium-batterier finnes overalt fra elbiler til drone-kontrollere. Riktig kjemi og format avhenger av hva du skal bruke det til."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Bruksomr\u00e5der", href: PATH },
        ]}
      >
        <h2>Mobile bruksområder</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Elbil:</strong> NMC for premium rekkevidde, LFP for standard. 50\u2013120 kWh per bil."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>B\u00e5t:</strong> LFP dominerer. 100\u2013800 Ah ved 12, 24 eller 48 V."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>MC og scooter:</strong> mest litium-ion. 1\u20138 kWh per kj\u00f8ret\u00f8y."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>El-sykkel:</strong> nesten alle litium-ion. 36 V eller 48 V, 10\u201320 Ah."}} />

        <h2>Stasjonære bruksområder</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Hjemmebatteri:</strong> nesten utelukkende LFP i 2026. 5\u201320 kWh."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Off-grid:</strong> LFP. 10\u201350 kWh til hytte og sm\u00e5hus."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Industriell lagring:</strong> LFP eller LTO. Megawatt-skala."}} />

        <h2>Mindre bruksområder</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Verkt\u00f8y:</strong> NMC for h\u00f8y effekttetthet."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Drone:</strong> litium-polymer for lav vekt og h\u00f8y effekt."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Telefon og laptop:</strong> NMC eller NCA i pouch-format."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg bruke samme batteri til båt og hytte?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ofte ja, hvis spenning og kapasitet passer. LFP er allsidig nok til å fungere i begge sammenheng.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvilket litium-batteri er mest universelt?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>12 V LFP-batterier i størrelser 50–300 Ah er den mest universelle løsningen.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/elbil" className="btn btn-ghost">Elbil</Link>
          <Link href="/bat" className="btn btn-ghost">Båt</Link>
          <Link href="/hjemmebatteri" className="btn btn-ghost">Hjemmebatteri</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
