import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/kalkulator";
const TITLE = "Litium-kalkulator: beregn batteri-kapasitet";
const DESC = "Beregn riktig litium-batteri-kapasitet for ditt form\u00e5l \u2013 b\u00e5t, hytte, hjem eller elbil.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Kalkulator", href: PATH },
          ]), faqSchema([{"q": "Hvor presis er kalkulatoren?", "a": "Tommelfinger-nivå. For dimensjonering av store systemer, konsulter installatør."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Verkt\u00f8y"
        title="Litium-kalkulator: beregn batteri-kapasitet"
        lead="Velg bruksomr\u00e5de og forbruk, s\u00e5 foresl\u00e5r vi riktig kapasitet."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Kalkulator", href: PATH },
        ]}
      >
        <h2>Slik beregner du</h2>
          <p dangerouslySetInnerHTML={{__html: "Kalkulatoren er under utvikling. Inntil videre, her er tommelfingerregler."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>B\u00e5t:</strong> 100 Ah LFP per personhytte ved en uke uten lading. Doble for st\u00f8rre forbruk."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hytte:</strong> daglig forbruk \u00d7 2\u20133 = batteribank-kapasitet. 1 500 Wh/dag krever 3 000\u20134 500 Wh batteri."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hjem:</strong> 8\u201315 kWh dekker typisk kveldsforbruk for enebolig."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Elbil-erstatning:</strong> 50 kWh = 250\u2013350 km rekkevidde i Norge."}} />

        <h2>Sjekkpunkter</h2>
          <p dangerouslySetInnerHTML={{__html: "Kjemi: LFP for de fleste form\u00e5l, NMC bare hvor vekt er kritisk."}} />
          <p dangerouslySetInnerHTML={{__html: "Spenning: 12 V for sm\u00e5 systemer, 24 V mellom, 48 V for store."}} />
          <p dangerouslySetInnerHTML={{__html: "Lader: m\u00e5 passe LFP-profil hvis du g\u00e5r fra blybatteri."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hvor presis er kalkulatoren?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Tommelfinger-nivå. For dimensjonering av store systemer, konsulter installatør.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/hjemmebatteri" className="btn btn-ghost">Hjemmebatteri</Link>
          <Link href="/off-grid" className="btn btn-ghost">Off-grid</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
