import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/mc-scooter";
const TITLE = "Litium-batteri i MC og scooter";
const DESC = "Litium-batteri til motorsykkel, scooter og el-mopeden: st\u00f8rrelse, levetid og hva du m\u00e5 passe p\u00e5.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "MC og scooter", href: PATH },
          ]), faqSchema([{"q": "Tåler litium-startbatteri norsk vinter?", "a": "Litium har dårligere lavtemperatur-startytelse enn bly under –10 °C."}, {"q": "Er det farlig med billig kinesisk batteri til scooter?", "a": "Risiko er reell. Branner i el-scooter er ofte sporet til lavkvalitets BMS."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Litium-batteri i MC og scooter"
        lead="Litium har erstattet bly i de fleste moderne motorsykler og elektriske scootere. Lettere, lengre levetid \u2013 men noen forskjeller \u00e5 vite om."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "MC og scooter", href: PATH },
        ]}
      >
        <h2>Litium i MC-startbatteri</h2>
          <p dangerouslySetInnerHTML={{__html: "Et tradisjonelt MC-blybatteri veier 4\u20136 kg. Litium-ekvivalent veier 1\u20132 kg, leverer mer startstr\u00f8m og holder 5+ \u00e5r mot blyets 3\u20134 \u00e5r."}} />
          <p dangerouslySetInnerHTML={{__html: "De fleste premium-MC-er fra 2023+ leveres med litium fra fabrikk."}} />

        <h2>Elektrisk scooter og moped</h2>
          <p dangerouslySetInnerHTML={{__html: "Hovedkjemi: NMC-litium. Typisk 36\u201372 V og 10\u201330 Ah."}} />
          <p dangerouslySetInnerHTML={{__html: "Topphastighet og effekt avhenger av cellekvalitet. Billige replika-batterier har ofte halvert sykluslevetid og h\u00f8yere brannrisiko."}} />

        <h2>Lagring vinterstid</h2>
          <p dangerouslySetInnerHTML={{__html: "Litium-batterier t\u00e5ler kulde bedre enn bly, men b\u00f8r lagres ved 40\u201360 % SoC."}} />
          <p dangerouslySetInnerHTML={{__html: "Ikke la batteriet st\u00e5 utladd over vinteren."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Tåler litium-startbatteri norsk vinter?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Litium har dårligere lavtemperatur-startytelse enn bly under –10 °C.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Er det farlig med billig kinesisk batteri til scooter?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Risiko er reell. Branner i el-scooter er ofte sporet til lavkvalitets BMS.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/el-sykkel" className="btn btn-ghost">El-sykkel</Link>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
