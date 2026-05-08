import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/termisk-runaway";
const TITLE = "Termisk runaway: kjedereaksjonen i et litium-batteri";
const DESC = "Hva er termisk runaway, hvilke trinn som skjer, og hvorfor det er den viktigste sikkerhetsutfordringen for litium-batterier.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Termisk runaway", href: PATH },
          ]), faqSchema([{"q": "Kan man stoppe termisk runaway etter at den har startet?", "a": "Bare ved å kjøle cellen under runaway-temperatur før reaksjonen er selvforsterkende."}, {"q": "Hvor ofte skjer dette i hjemmebatteri?", "a": "Ekstremt sjelden i kvalitets-LFP-systemer."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Termisk runaway: kjedereaksjonen i et litium-batteri"
        lead="Termisk runaway er en kaskade hvor en celle varmer seg selv til den brenner. Det er den fundamentale risikoen ved litium-batterier."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Termisk runaway", href: PATH },
        ]}
      >
        <h2>Hva som starter prosessen</h2>
          <p dangerouslySetInnerHTML={{__html: "Det f\u00f8rste trinnet er internt varmegenerering \u2013 kortslutning, overlading, fysisk skade eller produksjonsdefekt."}} />
          <p dangerouslySetInnerHTML={{__html: "Hvis varmen ikke ledes bort raskt nok, stiger celletemperaturen."}} />

        <h2>Trinnene i runaway</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>~80 \u00b0C:</strong> SEI-laget begynner \u00e5 brytes ned."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>~120 \u00b0C:</strong> elektrolytt-fordamping. Trykket i cellen \u00f8ker."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>~130 \u00b0C:</strong> separatoren smelter."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>~180 \u00b0C:</strong> for NMC: katoden frigj\u00f8r oksygen."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>~270 \u00b0C:</strong> for LFP: tilsvarende terskel, men mye mer stabil."}} />

        <h2>Spredning mellom celler</h2>
          <p dangerouslySetInnerHTML={{__html: "Et batteri har mange celler. En enkelt celle i runaway slipper ut 600+ \u00b0C varme."}} />
          <p dangerouslySetInnerHTML={{__html: "God pakkdesign har: brannhemmende materiale mellom celler, ventilkanaler, og termiske brannvegger."}} />

        <h2>Kjemiske forskjeller</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>LFP:</strong> minst reaktiv katode."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NMC h\u00f8y-nikkel:</strong> mer oksygen frigjort, raskere kjedereaksjon."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LTO:</strong> n\u00e6r umulig \u00e5 sette i runaway."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Solid-state:</strong> teoretisk umulig."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan man stoppe termisk runaway etter at den har startet?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Bare ved å kjøle cellen under runaway-temperatur før reaksjonen er selvforsterkende.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvor ofte skjer dette i hjemmebatteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ekstremt sjelden i kvalitets-LFP-systemer.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
