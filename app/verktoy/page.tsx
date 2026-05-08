import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/verktoy";
const TITLE = "Litium-batteri til verkt\u00f8y og drone";
const DESC = "Litium-pakker til elektrisk verkt\u00f8y, drone og sm\u00e5elektronikk. Hvilken kjemi, og hvorfor.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Verkt\u00f8y og drone", href: PATH },
          ]), faqSchema([{"q": "Hvorfor brukes ikke LFP i verktøy?", "a": "Lavere effekttetthet og energitetthet. LFP gir lengre levetid, men trenger større volum."}, {"q": "Er drone-batterier farligere?", "a": "Ja, statistisk. LiPo med høy utladningsrate er mer sårbar for fysisk skade."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Litium-batteri til verkt\u00f8y og drone"
        lead="Mindre litium-batterier driver alt fra drillen din til profesjonelle droner. Her er kjemivalg og kvalitetsforskjeller."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Verkt\u00f8y og drone", href: PATH },
        ]}
      >
        <h2>Verktøy: NMC for høy effekt</h2>
          <p dangerouslySetInnerHTML={{__html: "Profesjonelle el-verkt\u00f8y bruker NMC eller NCA i sylindriske celler."}} />
          <p dangerouslySetInnerHTML={{__html: "Standardspenninger: 18 V, 36 V, 54 V."}} />
          <p dangerouslySetInnerHTML={{__html: "Levetid: 500\u20131 000 sykluser."}} />

        <h2>Drone: lithium-polymer (LiPo)</h2>
          <p dangerouslySetInnerHTML={{__html: "Droner bruker LiPo for lav vekt og h\u00f8y utladningseffekt."}} />
          <p dangerouslySetInnerHTML={{__html: "C-rate ofte 50\u2013100C. Det betyr at en 5 000 mAh batteri kan levere 250\u2013500 A momentant."}} />
          <p dangerouslySetInnerHTML={{__html: "LiPo er mer brannfarlige enn LFP. Lagres alltid i brannsikker pose."}} />

        <h2>Mindre elektronikk</h2>
          <p dangerouslySetInnerHTML={{__html: "Telefoner, klokker: NMC eller NCA i pouch eller liten prismatisk form."}} />
          <p dangerouslySetInnerHTML={{__html: "Levetid: 500\u2013800 sykluser typisk."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor brukes ikke LFP i verktøy?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Lavere effekttetthet og energitetthet. LFP gir lengre levetid, men trenger større volum.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Er drone-batterier farligere?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja, statistisk. LiPo med høy utladningsrate er mer sårbar for fysisk skade.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/transport" className="btn btn-ghost">Transport</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
