import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/sikkerhet";
const TITLE = "Sikkerhet: litium-batteri og risiko";
const DESC = "Hvor farlige er litium-batterier? Brannrisiko, termisk runaway, lagring, transport.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Sikkerhet", href: PATH },
          ]), faqSchema([{"q": "Bør jeg være redd for hjemmebatteriet?", "a": "Med godkjent LFP-system installert av elektriker er risikoen svært lav."}, {"q": "Hva om brannvesenet kommer?", "a": "Norske brannvesen er trent på litium-branner. De vil typisk avgrense brannen og kjøle området med store mengder vann."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Sikkerhet: litium-batteri og risiko"
        lead="Litium-batterier er trygge ved normal bruk \u2013 men kan v\u00e6re alvorlig farlige hvis noe g\u00e5r galt. Her er det viktigste \u00e5 vite."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Sikkerhet", href: PATH },
        ]}
      >
        <h2>Hovedrisikoen: termisk runaway</h2>
          <p dangerouslySetInnerHTML={{__html: "Termisk runaway er en selvforsterkende kjedereaksjon hvor cellen blir s\u00e5 varm at elektrolytten reagerer med oksygen frigjort fra katoden."}} />
          <p dangerouslySetInnerHTML={{__html: "Triggere: fysisk skade, overlading, kortslutning, ekstrem varme, produksjonsdefekt."}} />

        <h2>Hvor sikker er hver kjemi</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>LFP:</strong> tryggest. Termisk runaway krever 270+ \u00b0C og er sjelden selvforplantende."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NMC/NCA:</strong> lavere terskel og mer reaktiv kjedereaksjon."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LTO:</strong> ekstremt sikker."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LiPo:</strong> mest s\u00e5rbar for fysisk skade og overlading."}} />

        <h2>Hvor sikker er du</h2>
          <p dangerouslySetInnerHTML={{__html: "Hjemmebatteri (LFP) i 2026: en av de tryggeste elektriske enhetene i hjemmet."}} />
          <p dangerouslySetInnerHTML={{__html: "Brann-statistikk: el-sykkel og el-scooter dominerer litium-branner i Norge."}} />

        <h2>Beskyttelseslag</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>BMS:</strong> f\u00f8rste forsvarslinje."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Termisk design:</strong> god kj\u00f8ling, isolering mellom celler."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhetsventilasjon:</strong> hver celle har trykkutl\u00f8p."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Pakkdesign:</strong> brannhemmende materialer."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Bør jeg være redd for hjemmebatteriet?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Med godkjent LFP-system installert av elektriker er risikoen svært lav.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hva om brannvesenet kommer?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Norske brannvesen er trent på litium-branner. De vil typisk avgrense brannen og kjøle området med store mengder vann.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/termisk-runaway" className="btn btn-ghost">Termisk runaway</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
