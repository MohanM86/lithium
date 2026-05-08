import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/off-grid";
const TITLE = "Off-grid: litium til hytte og str\u00f8ml\u00f8se omr\u00e5der";
const DESC = "Litium-batteri for off-grid-systemer: hytte, g\u00e5rd, fjerne installasjoner. Dimensjonering, sikkerhet og kjemivalg.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Off-grid", href: PATH },
          ]), faqSchema([{"q": "Kan jeg ha 12 V batteri til en hytte?", "a": "Ja, for små systemer. Større systemer bør være 24 V eller 48 V for bedre effektivitet."}, {"q": "Hvor lenge holder LFP off-grid?", "a": "10–15 år ved daglig syklus."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Off-grid: litium til hytte og str\u00f8ml\u00f8se omr\u00e5der"
        lead="Off-grid-systemer trenger batteri som t\u00e5ler full utlading, varmer seg selv ved kulde, og holder i mange \u00e5r uten vedlikehold."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Off-grid", href: PATH },
        ]}
      >
        <h2>Hva off-grid krever</h2>
          <p dangerouslySetInnerHTML={{__html: "Et hytte- eller off-grid-system best\u00e5r av: solpaneler, charge controller, batteribank, inverter, og laster."}} />
          <p dangerouslySetInnerHTML={{__html: "Batteribanken er kritisk. LFP-litium er det \u00e5penbare valget i 2026."}} />

        <h2>Dimensjonering</h2>
          <p dangerouslySetInnerHTML={{__html: "Beregn daglig forbruk i Wh. En typisk hytte: 1 500\u20133 000 Wh per dag."}} />
          <p dangerouslySetInnerHTML={{__html: "Batteribank: 2\u20133 ganger daglig forbruk gir buffer for skyfulle dager."}} />
          <p dangerouslySetInnerHTML={{__html: "Solpanel: 3\u20135 ganger daglig forbruk i installert effekt."}} />

        <h2>Vinteranvendelse</h2>
          <p dangerouslySetInnerHTML={{__html: "LFP under 0 \u00b0C t\u00e5ler utlading men ikke lading."}} />
          <p dangerouslySetInnerHTML={{__html: "Premium-systemer har integrert oppvarming som starter automatisk ved 0 \u00b0C."}} />

        <h2>Backup-aggregat</h2>
          <p dangerouslySetInnerHTML={{__html: "Selv med stort solanlegg er aggregat ofte nyttig som backup for desemberukene med lite sol."}} />
          <p dangerouslySetInnerHTML={{__html: "Mange off-grid-systemer kombinerer sol + LFP + lite aggregat."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg ha 12 V batteri til en hytte?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja, for små systemer. Større systemer bør være 24 V eller 48 V for bedre effektivitet.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvor lenge holder LFP off-grid?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>10–15 år ved daglig syklus.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/hjemmebatteri" className="btn btn-ghost">Hjemmebatteri</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/bat" className="btn btn-ghost">Båt</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
