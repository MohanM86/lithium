import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/bat";
const TITLE = "Litium-batteri i b\u00e5t: erstatte blybatteri";
const DESC = "LFP-batteri til b\u00e5t: n\u00e5r l\u00f8nner det seg \u00e5 bytte ut blybatteri, hva m\u00e5 endres, og hvordan beregne riktig st\u00f8rrelse.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "B\u00e5t", href: PATH },
          ]), faqSchema([{"q": "Kan jeg bare bytte batteri og glemme resten?", "a": "Sjelden. Lader, charge controller og evt. alternator må sjekkes."}, {"q": "Hva med drop-in litium?", "a": "Drop-in LFP markedsføres ofte som «bare bytt». Det stemmer for noen oppsett, men ikke alle."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Litium-batteri i b\u00e5t: erstatte blybatteri"
        lead="Mange b\u00e5teiere bytter ut tunge blybatterier med LFP. Resultatet er mindre vekt, mer kapasitet og lang levetid \u2013 men det krever noen endringer."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "B\u00e5t", href: PATH },
        ]}
      >
        <h2>Hvorfor litium i båt</h2>
          <p dangerouslySetInnerHTML={{__html: "Et 100 Ah blybatteri veier 25\u201330 kg og leverer realistisk 50 Ah f\u00f8r spenningen faller. Et 100 Ah LFP-batteri veier 12\u201315 kg og leverer hele 95 Ah."}} />
          <p dangerouslySetInnerHTML={{__html: "Det betyr at 200 Ah LFP gir mer brukbar energi enn 400 Ah blybatteri \u2013 til halve vekten."}} />

        <h2>Hva må endres i båten</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Lader:</strong> du trenger en LFP-kompatibel lader."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Solar charge controller:</strong> m\u00e5 st\u00f8tte LFP-profil."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Inverter:</strong> ofte greit, men sjekk lavspenningsavslag."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Alternator:</strong> trenger DC-DC-lader eller alternator-protector."}} />

        <h2>Vanlige feil</h2>
          <p dangerouslySetInnerHTML={{__html: "Direkte parallellkobling av blybatteri og LFP. Spenningskurvene er ulike."}} />
          <p dangerouslySetInnerHTML={{__html: "Lading med fast 14,4 V over lang tid."}} />
          <p dangerouslySetInnerHTML={{__html: "Ingen oppvarming i kalde b\u00e5ter."}} />

        <h2>Forventet kostnad</h2>
          <p dangerouslySetInnerHTML={{__html: "200 Ah 12 V LFP med kvalitetsBMS: 12 000\u201318 000 kr."}} />
          <p dangerouslySetInnerHTML={{__html: "Litium koster mer i innkj\u00f8p men har 4\u20135\u00d7 levetid. Over 10 \u00e5r er litium typisk billigere totalt."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg bare bytte batteri og glemme resten?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Sjelden. Lader, charge controller og evt. alternator må sjekkes.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hva med drop-in litium?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Drop-in LFP markedsføres ofte som «bare bytt». Det stemmer for noen oppsett, men ikke alle.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/hjemmebatteri" className="btn btn-ghost">Hjemmebatteri</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
