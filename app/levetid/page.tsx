import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/levetid";
const TITLE = "Levetid p\u00e5 litium-batteri: sykluser, kalender og degradering";
const DESC = "Hvor lenge varer et litium-batteri? Sykluslevetid, kalenderaldring og hvordan du forlenger levetiden.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Levetid", href: PATH },
          ]), faqSchema([{"q": "Når er et batteri «brukt opp»?", "a": "Konvensjonelt når kapasiteten faller under 80 %. Men batteriet fungerer fortsatt – det får bare mindre energi per syklus."}, {"q": "Kan et gammelt batteri eksplodere?", "a": "Ikke av seg selv. Men eldre batterier kan utvikle interne kortslutninger som fører til termisk runaway."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="Levetid p\u00e5 litium-batteri: sykluser, kalender og degradering"
        lead="Et litium-batteri taper kapasitet b\u00e5de ved bruk og over tid. Begge mekanismene betyr noe \u2013 og du kan p\u00e5virke begge."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Levetid", href: PATH },
        ]}
      >
        <h2>Sykluslevetid</h2>
          <p dangerouslySetInnerHTML={{__html: "En syklus er \u00e9n full lading + utlading."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LFP:</strong> 4 000\u20136 000 sykluser til 80 % gjenv\u00e6rende kapasitet."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NMC:</strong> 1 500\u20133 000 sykluser."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LTO:</strong> 15 000+ sykluser."}} />
          <p dangerouslySetInnerHTML={{__html: "Med daglig bruk tilsvarer 4 000 sykluser cirka 11 \u00e5r."}} />

        <h2>Kalenderaldring</h2>
          <p dangerouslySetInnerHTML={{__html: "Litium-celler degraderer ogs\u00e5 n\u00e5r de st\u00e5r i ro. Lagring ved h\u00f8y temperatur eller h\u00f8y SoC akselererer prosessen."}} />
          <p dangerouslySetInnerHTML={{__html: "Tommelfinger: lagre litium-celler ved 40\u201360 % SoC og 15\u201325 \u00b0C for minst aldring."}} />

        <h2>Hva som forlenger levetiden</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Unng\u00e5 dyp utlading:</strong> daglig DoD p\u00e5 80 % gir lengre levetid enn 100 %."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Unng\u00e5 full lading hver gang:</strong> 80\u201390 % SoC \u00f8ker syklustellingen markant."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hold temperaturen mellom 15 og 30 \u00b0C:</strong> 35+ \u00b0C halverer levetiden."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Unng\u00e5 hurtiglading konstant:</strong> 0,5C er bedre enn 2C for langsiktig holdbarhet."}} />

        <h2>Garanti og forventet levetid i praksis</h2>
          <p dangerouslySetInnerHTML={{__html: "Hjemmebatterier kommer typisk med 10 \u00e5rs garanti til 70 % gjenv\u00e6rende kapasitet."}} />
          <p dangerouslySetInnerHTML={{__html: "Elbil-batterier garanteres ofte 8 \u00e5r eller 160 000 km til 70 % SoH."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Når er et batteri «brukt opp»?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Konvensjonelt når kapasiteten faller under 80 %. Men batteriet fungerer fortsatt – det får bare mindre energi per syklus.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Kan et gammelt batteri eksplodere?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ikke av seg selv. Men eldre batterier kan utvikle interne kortslutninger som fører til termisk runaway.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
