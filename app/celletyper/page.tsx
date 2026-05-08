import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/celletyper";
const TITLE = "Battericeller: pouch, prismatisk og sylindrisk";
const DESC = "De tre dominerende formfaktorene for litium-celler forklart med fordeler og ulemper.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Celletyper", href: PATH },
          ]), faqSchema([{"q": "Hva betyr 18650?", "a": "Sylindrisk celle, 18 mm i diameter og 65 mm høy. Standardformat brukt i alt fra el-sykler til eldre Teslaer."}, {"q": "Er pouch-celler farligere?", "a": "Ikke i seg selv, men de tåler mindre fysisk skade enn metallhus."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="Battericeller: pouch, prismatisk og sylindrisk"
        lead="Litium-celler kommer i tre hovedformater. Valget av format p\u00e5virker pakketetthet, kj\u00f8ling, sikkerhet og produksjonskostnad."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Celletyper", href: PATH },
        ]}
      >
        <h2>Pouch-celler</h2>
          <p dangerouslySetInnerHTML={{__html: "Mykvegget celle pakket i aluminiumsfolie. Tynn, lett, fleksibel form."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Brukt i:</strong> Mange moderne elbiler (LG, SK), profesjonelle droner, premium telefoner."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Fordeler:</strong> H\u00f8y gravimetrisk energitetthet, fleksibel form, god kj\u00f8ling."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Ulemper:</strong> S\u00e5rbare for fysisk skade, kan svelle ved aldring."}} />

        <h2>Prismatiske celler</h2>
          <p dangerouslySetInnerHTML={{__html: "Rektangul\u00e6rt metallhus \u2013 typisk aluminium. Stor enkeltcelle som rommer mye energi."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Brukt i:</strong> Kinesiske elbiler (BYD), hjemmebatterier, store stasjon\u00e6re system."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Fordeler:</strong> Robuste, enkle \u00e5 pakke tett, god skala-produksjon."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Ulemper:</strong> Kj\u00f8ling vanskeligere ved store celler."}} />

        <h2>Sylindriske celler</h2>
          <p dangerouslySetInnerHTML={{__html: "Rund metallcelle \u2013 ofte 18650 eller 21700. Tesla bruker 4680 i nyere modeller."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Brukt i:</strong> Tesla, mange el-sykler, verkt\u00f8y, laptops."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Fordeler:</strong> Standardiserte, masseprodusert globalt, robust mekanikk."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Ulemper:</strong> Lavere pakketetthet enn prismatisk."}} />

        <h2>Hvilket format vinner?</h2>
          <p dangerouslySetInnerHTML={{__html: "Ingen klar vinner. Tesla satser p\u00e5 sylindrisk 4680 for skala. BYD og CATL g\u00e5r mer mot prismatisk for tetthet."}} />
          <p dangerouslySetInnerHTML={{__html: "For sluttbruker spiller formatet mindre rolle enn kjemi og kvalitet p\u00e5 BMS."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hva betyr 18650?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Sylindrisk celle, 18 mm i diameter og 65 mm høy. Standardformat brukt i alt fra el-sykler til eldre Teslaer.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Er pouch-celler farligere?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ikke i seg selv, men de tåler mindre fysisk skade enn metallhus.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/litium-ion" className="btn btn-ghost">Litium-ion</Link>
          <Link href="/bms" className="btn btn-ghost">BMS</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
