import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/lagring";
const TITLE = "Lagring av litium-batteri: hjemme, verksted og bod";
const DESC = "Slik lagrer du litium-batterier sikkert: temperatur, fukt, brannrisiko og forskjeller for ulike batterityper.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Lagring", href: PATH },
          ]), faqSchema([{"q": "Kan jeg ha hjemmebatteri i kjelleren?", "a": "Generelt frarådes det med mindre kjelleren har egen rømningsvei og brannsikret rom."}, {"q": "Bør jeg lade el-sykkelen om natten?", "a": "Moderne BMS forhindrer overlading. Men ved batterifeil er det best at lading skjer mens noen er våken."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Lagring av litium-batteri: hjemme, verksted og bod"
        lead="Riktig lagring forlenger levetiden og minimerer brannrisiko."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Lagring", href: PATH },
        ]}
      >
        <h2>Generelle prinsipper</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Temperatur:</strong> 15\u201325 \u00b0C er ideelt."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Ladning:</strong> 40\u201360 % SoC for langtidslagring."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Fukt:</strong> t\u00f8rt rom uten kondens."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Branntilgang:</strong> ikke rundt brannfarlig materiale."}} />

        <h2>Hjemmebatteri</h2>
          <p dangerouslySetInnerHTML={{__html: "Plassering: utend\u00f8rs i ventilert kabinett, i bod eller eget brannrom innend\u00f8rs."}} />
          <p dangerouslySetInnerHTML={{__html: "Norsk regelverk: store hjemmebatterier krever s\u00e6rskilt brannseksjonering."}} />

        <h2>El-sykkel og MC</h2>
          <p dangerouslySetInnerHTML={{__html: "Lagre batteriet adskilt fra sykkelen om sommeren."}} />
          <p dangerouslySetInnerHTML={{__html: "Vinterstil: ta batteriet inn (oppvarmet rom), lad til 50\u201360 %."}} />
          <p dangerouslySetInnerHTML={{__html: "Aldri lad i kjeller eller inngang som blokkerer r\u00f8mningsvei."}} />

        <h2>Drone og verktøy</h2>
          <p dangerouslySetInnerHTML={{__html: "LiPo: bruk brannsikre poser for hver pakke. Lagres ved 3,8 V/celle."}} />
          <p dangerouslySetInnerHTML={{__html: "Verkt\u00f8yspakke: ta ut av lader n\u00e5r fulladet."}} />

        <h2>Hva å unngå</h2>
          <p dangerouslySetInnerHTML={{__html: "Direkte sollys, kjelerom, uoppvarmet l\u00e5ve over vinter, senget\u00f8y, brennbart materiale."}} />
          <p dangerouslySetInnerHTML={{__html: "Skadde batterier skal IKKE lagres innend\u00f8rs."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg ha hjemmebatteri i kjelleren?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Generelt frarådes det med mindre kjelleren har egen rømningsvei og brannsikret rom.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Bør jeg lade el-sykkelen om natten?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Moderne BMS forhindrer overlading. Men ved batterifeil er det best at lading skjer mens noen er våken.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/transport" className="btn btn-ghost">Transport</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
