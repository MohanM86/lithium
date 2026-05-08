import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/lfp";
const TITLE = "LFP-batteri: lithium iron phosphate forklart";
const DESC = "LFP er den sikreste og mest holdbare litium-kjemien. Slik fungerer LFP, og hvorfor den dominerer hjemmebatterier i 2026.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "LFP", href: PATH },
          ]), faqSchema([{"q": "Er LFP litium-ion?", "a": "Ja. LFP er en variant av litium-ion-teknologi, definert av katode-materialet."}, {"q": "Tåler LFP frost?", "a": "Utlading går fint ned mot –20 °C, men lading under 0 °C bør unngås. De fleste moderne hjemmebatterier har innebygd oppvarming."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="LFP-batteri: lithium iron phosphate forklart"
        lead="LFP \u2013 Lithium Iron Phosphate \u2013 har g\u00e5tt fra nisje til dominerende kjemi for stasjon\u00e6r lagring. Lengre levetid, h\u00f8yere sikkerhet, ingen kobolt."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "LFP", href: PATH },
        ]}
      >
        <h2>Hva LFP er</h2>
          <p dangerouslySetInnerHTML={{__html: "LFP st\u00e5r for litium-jernfosfat (LiFePO\u2084). Katoden er bygd opp av jern, fosfat og oksygen, med litium-ioner som beveger seg inn og ut under lading og utlading."}} />
          <p dangerouslySetInnerHTML={{__html: "Strukturen kalles olivin \u2013 en sv\u00e6rt stabil krystallstruktur som ikke slipper oksygen ved oppvarming. Det er hovedgrunnen til at LFP er klart sikrere enn NMC."}} />

        <h2>Sterke sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> mest termisk stabil av alle kommersielle litium-kjemier."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> 4 000\u20136 000 sykluser med 80 % gjenv\u00e6rende kapasitet. Tilsvarer 12\u201315 \u00e5r ved daglig syklus."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Toleranse:</strong> t\u00e5ler full utlading bedre enn andre kjemier."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kostnad:</strong> ingen kobolt eller nikkel. R\u00e5varekostnaden er stabil og lav."}} />

        <h2>Svake sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> 90\u2013160 Wh/kg, mot NMC sin 150\u2013270 Wh/kg."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Lavere spenning:</strong> 3,2 V nominell mot NMC sin 3,7 V."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kuldebehov:</strong> kan ta skade av lading under 0 \u00b0C uten preheat."}} />

        <h2>Hvor LFP brukes</h2>
          <p dangerouslySetInnerHTML={{__html: "Hjemmebatterier (Tesla Powerwall 3, BYD Battery-Box, Sungrow), nettstabilisering, datasentre. Ogs\u00e5 \u00f8kende i elbil \u2013 BYD og Tesla bruker LFP i mange modeller."}} />
          <p dangerouslySetInnerHTML={{__html: "B\u00e5tsystemer, off-grid-installasjoner, elektriske gravemaskiner og truck-fl\u00e5ter."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Er LFP litium-ion?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja. LFP er en variant av litium-ion-teknologi, definert av katode-materialet.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Tåler LFP frost?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Utlading går fint ned mot –20 °C, men lading under 0 °C bør unngås. De fleste moderne hjemmebatterier har innebygd oppvarming.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/lfp-vs-nmc" className="btn btn-ghost">LFP vs NMC</Link>
          <Link href="/levetid" className="btn btn-ghost">Levetid</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
