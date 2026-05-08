import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/bms";
const TITLE = "BMS: Battery Management System forklart";
const DESC = "Hva en BMS gj\u00f8r, hvorfor det er kritisk for sikkerhet og levetid, og hva du b\u00f8r se etter ved kj\u00f8p av litium-batteri.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "BMS", href: PATH },
          ]), faqSchema([{"q": "Trenger jeg eget BMS hvis batteriet er ferdig pakket?", "a": "Nei. Et ferdig hjemmebatteri har innebygd BMS."}, {"q": "Kan BMS-en byttes?", "a": "Hos enkelte modulære systemer ja, men ofte er BMS integrert med batteri-elektronikken."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="BMS: Battery Management System forklart"
        lead="Battery Management System er hjernen i et litium-batteri. Uten et godt BMS faller b\u00e5de sikkerhet og levetid drastisk."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "BMS", href: PATH },
        ]}
      >
        <h2>Hva BMS gjør</h2>
          <p dangerouslySetInnerHTML={{__html: "BMS overv\u00e5ker hver enkelt celle i batteriet for spenning, str\u00f8m og temperatur. Det aksjonerer hvis noe g\u00e5r utenfor sikre grenser."}} />
          <p dangerouslySetInnerHTML={{__html: "Et typisk hjemmebatteri har 100+ celler. Uten balansering vil de svakeste cellene falle f\u00f8rst."}} />

        <h2>Kjernefunksjoner</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Cell balancing:</strong> s\u00f8rger for at alle cellene har lik spenning."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Overspenningsbeskyttelse:</strong> kobler ut lading n\u00e5r \u00e9n celle n\u00e5r 3,65 V (LFP) eller 4,2 V (NMC)."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Underspenningsbeskyttelse:</strong> kobler ut utlading f\u00f8r cellen g\u00e5r for lavt."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Temperaturkontroll:</strong> blokkerer lading under 0 \u00b0C eller starter kj\u00f8ling ved 50+ \u00b0C."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Str\u00f8mbegrensning:</strong> hindrer overdreven str\u00f8mtrekk."}} />

        <h2>Kommunikasjon og data</h2>
          <p dangerouslySetInnerHTML={{__html: "Moderne BMS rapporterer state-of-charge, state-of-health, syklustall og advarsler \u2013 via CAN-bus, RS485 eller Bluetooth."}} />
          <p dangerouslySetInnerHTML={{__html: "App-tilgang er standard p\u00e5 de fleste hjemmebatterier."}} />

        <h2>Hvorfor BMS-kvalitet er kritisk</h2>
          <p dangerouslySetInnerHTML={{__html: "Billige replika-batterier er kjent for d\u00e5rlige BMS. Resultatet er kortere levetid og h\u00f8yere brannrisiko."}} />
          <p dangerouslySetInnerHTML={{__html: "For st\u00f8rre system anbefales BMS med passiv brannbeskyttelse og redundant temperaturm\u00e5ling."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Trenger jeg eget BMS hvis batteriet er ferdig pakket?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nei. Et ferdig hjemmebatteri har innebygd BMS.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Kan BMS-en byttes?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Hos enkelte modulære systemer ja, men ofte er BMS integrert med batteri-elektronikken.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/termisk-runaway" className="btn btn-ghost">Termisk runaway</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
          <Link href="/levetid" className="btn btn-ghost">Levetid</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
