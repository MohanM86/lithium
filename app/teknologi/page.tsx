import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/teknologi";
const TITLE = "Litium-teknologi: kjemi, celler og BMS";
const DESC = "Komplett oversikt over litium-batteriteknologi \u2013 kjemier, celletyper, BMS og levetid.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Teknologi", href: PATH },
          ]), faqSchema([{"q": "Hva er forskjellen på Wh og Ah?", "a": "Ah måler kapasitet i ladning. Wh måler energi: Wh = Ah × spenning. To 100 Ah-batterier kan ha ulik energi avhengig av spenning."}, {"q": "Hvilken kjemi er sikrest?", "a": "LFP er klart sikrest blant kommersielle litium-kjemier. Mer termisk stabil enn NMC og NCA, mindre risiko for termisk runaway."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="Litium-teknologi: kjemi, celler og BMS"
        lead="Litium-batteriteknologi favner mange kjemier, celleformater og styringssystemer. Her er oversikten du trenger for \u00e5 forst\u00e5 hva som er hva."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Teknologi", href: PATH },
        ]}
      >
        <h2>Hvordan litium-ion fungerer</h2>
          <p dangerouslySetInnerHTML={{__html: "Et litium-ion-batteri lagrer energi ved \u00e5 flytte litium-ioner mellom to elektroder gjennom en elektrolytt. Under utlading g\u00e5r ionene fra anoden (negativ) til katoden (positiv), og elektronene tar veien gjennom kretsen utenfor batteriet. Under lading reverseres prosessen."}} />
          <p dangerouslySetInnerHTML={{__html: "Kjemien er bestemt av materialene i katoden: litium-jernfosfat (LFP), litium-nikkel-mangan-kobolt (NMC), litium-titanat (LTO) eller andre. Anoden er som regel grafitt, og elektrolytten en flytende organisk v\u00e6ske. I solid-state-batterier er elektrolytten fast."}} />

        <h2>De viktigste kjemiene</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>LFP</strong> dominerer i hjemmebatterier og \u00f8kende i elbiler. Lang levetid, h\u00f8y sikkerhet, t\u00e5ler full utlading."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NMC</strong> er fortsatt vanlig i elbiler. H\u00f8yere energitetthet, men kortere levetid og h\u00f8yere brannrisiko."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>LTO</strong> brukes der ekstrem rask lading og lang levetid trengs \u2013 typisk i industri og kollektivtransport."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Solid-state</strong> er fortsatt p\u00e5 vei. Lover bedre energitetthet og sikkerhet, men er enn\u00e5 sjeldent kommersielt tilgjengelig per 2026."}} />

        <h2>Celleformater</h2>
          <p dangerouslySetInnerHTML={{__html: "Pouch-celler er pakket i myk aluminiumsfolie. Lette, fleksible, men mer s\u00e5rbare for fysisk skade."}} />
          <p dangerouslySetInnerHTML={{__html: "Prismatiske celler har fast metallhus. Robuste, mye brukt i moderne elbiler og hjemmebatterier."}} />
          <p dangerouslySetInnerHTML={{__html: "Sylindriske celler er rund og standardiserte \u2013 18650 og 21700 er de vanligste. Brukes i alt fra el-sykler til Tesla."}} />

        <h2>BMS – hjernen i batteriet</h2>
          <p dangerouslySetInnerHTML={{__html: "Et Battery Management System overv\u00e5ker hver celle for spenning, temperatur og str\u00f8m. Det forhindrer overlading, dyputladning, kortslutning og termisk runaway."}} />
          <p dangerouslySetInnerHTML={{__html: "BMS-et balanserer cellene slik at alle holder samme spenning. Et godt BMS er avgj\u00f8rende for b\u00e5de sikkerhet og levetid."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hva er forskjellen på Wh og Ah?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ah måler kapasitet i ladning. Wh måler energi: Wh = Ah × spenning. To 100 Ah-batterier kan ha ulik energi avhengig av spenning.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvilken kjemi er sikrest?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>LFP er klart sikrest blant kommersielle litium-kjemier. Mer termisk stabil enn NMC og NCA, mindre risiko for termisk runaway.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp-vs-nmc" className="btn btn-ghost">LFP vs NMC</Link>
          <Link href="/levetid" className="btn btn-ghost">Levetid</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
