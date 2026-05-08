import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/lfp-vs-nmc";
const TITLE = "LFP vs NMC: sammenligning av de to viktigste litium-kjemiene";
const DESC = "Direkte sammenligning av LFP og NMC: levetid, sikkerhet, energitetthet, pris og bruksomr\u00e5der.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "LFP vs NMC", href: PATH },
          ]), faqSchema([{"q": "Hvilken kjemi anbefales for hjemmet?", "a": "LFP. Lengre levetid, høyere sikkerhet og bedre toleranse for full utlading."}, {"q": "Er NMC farlig?", "a": "Ikke i normal drift. Men har høyere risiko for termisk runaway ved skade."}, {"q": "Tåler LFP norsk vinter?", "a": "LFP-batterier kan ta skade ved lading under 0 °C, men de fleste hjemmebatterier har innebygd oppvarming."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sammenligning"
        title="LFP vs NMC: sammenligning av de to viktigste litium-kjemiene"
        lead="LFP og NMC dominerer hver sine markeder. LFP for stasjon\u00e6r lagring, NMC for elbil \u2013 men grensene flyttes raskt."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "LFP vs NMC", href: PATH },
        ]}
      >
        <h2>Tekniske forskjeller</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> NMC 150\u2013270 Wh/kg, LFP 90\u2013160 Wh/kg. NMC vinner per kg."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> LFP 4 000\u20136 000 sykluser, NMC 1 500\u20133 000. LFP holder dobbelt s\u00e5 lenge."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Spenning:</strong> NMC 3,7 V/celle, LFP 3,2 V."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> LFP klart tryggere."}} />

        <h2>Når LFP er riktig</h2>
          <p dangerouslySetInnerHTML={{__html: "Hjemmebatteri, hyttesystem, off-grid: vekt er ikke kritisk, levetid og sikkerhet er."}} />
          <p dangerouslySetInnerHTML={{__html: "Standard rekkevidde-elbil: BYD og Tesla bruker LFP i baseline-modeller."}} />
          <p dangerouslySetInnerHTML={{__html: "Kommersielle batterisystemer for nettstabilisering."}} />

        <h2>Når NMC er riktig</h2>
          <p dangerouslySetInnerHTML={{__html: "Premium-elbil med lang rekkevidde: 100+ kWh i NMC veier mindre."}} />
          <p dangerouslySetInnerHTML={{__html: "Portabel elektronikk hvor energitetthet er kritisk."}} />

        <h2>Pris- og markeds-utvikling</h2>
          <p dangerouslySetInnerHTML={{__html: "Pr 2026: LFP cellepris rundt 60\u201380 USD/kWh, NMC 90\u2013130 USD/kWh."}} />
          <p dangerouslySetInnerHTML={{__html: "Kobolt-utfordringen drar NMC-bransjen mot lavere kobolt-andel og videre mot kobolt-fri kjemi."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hvilken kjemi anbefales for hjemmet?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>LFP. Lengre levetid, høyere sikkerhet og bedre toleranse for full utlading.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Er NMC farlig?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ikke i normal drift. Men har høyere risiko for termisk runaway ved skade.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Tåler LFP norsk vinter?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>LFP-batterier kan ta skade ved lading under 0 °C, men de fleste hjemmebatterier har innebygd oppvarming.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/levetid" className="btn btn-ghost">Levetid</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
