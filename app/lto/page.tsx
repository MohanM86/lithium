import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/lto";
const TITLE = "LTO-batteri: lithium titanate forklart";
const DESC = "LTO gir ekstrem lang levetid og rask lading \u2013 men lavere energitetthet og h\u00f8yere pris.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "LTO", href: PATH },
          ]), faqSchema([{"q": "Hvorfor brukes ikke LTO i elbiler?", "a": "Lav energitetthet gir kort rekkevidde per kg, og høy pris gjør det uøkonomisk for personbiler."}, {"q": "Er LTO et litium-ion batteri?", "a": "Ja. LTO bruker fortsatt litium-ioner som ladningsbærer – det er bare anode-materialet som er annerledes."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="LTO-batteri: lithium titanate forklart"
        lead="LTO er den mest holdbare litium-kjemien som finnes. 15 000+ sykluser, sikkerhet langt over LFP, men prisen og lavere energitetthet begrenser bruken."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "LTO", href: PATH },
        ]}
      >
        <h2>Hva LTO er</h2>
          <p dangerouslySetInnerHTML={{__html: "LTO st\u00e5r for litium-titanat \u2013 Li\u2084Ti\u2085O\u2081\u2082. Hovedforskjellen fra andre litium-batterier er anoden, laget av titanat i stedet for grafitt."}} />
          <p dangerouslySetInnerHTML={{__html: "Denne anoden gj\u00f8r at litium-ionene ikke avsetter seg som metall ved lading \u2013 det fjerner risikoen for dendritter og dermed mye av termisk runaway-risikoen."}} />

        <h2>Sterke sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> 15 000\u201325 000 sykluser. Tilsvarer 30+ \u00e5r ved daglig bruk."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Lading:</strong> opp til 10C \u2013 6 minutter til full lading."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> n\u00e6r umulig \u00e5 sette i termisk runaway."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Temperaturtoleranse:</strong> fungerer godt fra \u201330 \u00b0C til +60 \u00b0C."}} />

        <h2>Svake sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> 50\u201380 Wh/kg. Cirka halvparten av LFP."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Spenning:</strong> bare 2,4 V nominell."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Pris:</strong> 2\u20134\u00d7 LFP per kWh."}} />

        <h2>Hvor LTO brukes</h2>
          <p dangerouslySetInnerHTML={{__html: "Kollektivtransport, industriell logistikk, milit\u00e6r og romfart."}} />
          <p dangerouslySetInnerHTML={{__html: "Ogs\u00e5 brukt i nettstabilisering hvor sykluser per dag er mange."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor brukes ikke LTO i elbiler?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Lav energitetthet gir kort rekkevidde per kg, og høy pris gjør det uøkonomisk for personbiler.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Er LTO et litium-ion batteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja. LTO bruker fortsatt litium-ioner som ladningsbærer – det er bare anode-materialet som er annerledes.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/solid-state" className="btn btn-ghost">Solid-state</Link>
          <Link href="/levetid" className="btn btn-ghost">Levetid</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
