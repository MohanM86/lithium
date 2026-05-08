import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/el-sykkel";
const TITLE = "El-sykkel batteri: levetid og kvalitet";
const DESC = "Litium-batteri til el-sykkel: kapasitet, rekkevidde, levetid og hvordan unng\u00e5 brannfarlige replika.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "El-sykkel", href: PATH },
          ]), faqSchema([{"q": "Hvor lenge varer batteriet?", "a": "3–6 år ved daglig bruk."}, {"q": "Kan jeg ta batteriet med på fly?", "a": "Bare hvis det er under 100 Wh. De fleste el-sykkel-batterier er 360+ Wh."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="El-sykkel batteri: levetid og kvalitet"
        lead="El-sykkel-batteriet er hjertet i sykkelen. Riktig vedlikehold gir lang levetid \u2013 men mange branner skyldes lavkvalitets-replika."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "El-sykkel", href: PATH },
        ]}
      >
        <h2>Typisk batteri og rekkevidde</h2>
          <p dangerouslySetInnerHTML={{__html: "Standard: 36 V eller 48 V, 10\u201320 Ah. Energi: 360\u2013960 Wh."}} />
          <p dangerouslySetInnerHTML={{__html: "Rekkevidde: 40\u2013120 km, avhenger av terreng, vekt og pedaltrykk."}} />
          <p dangerouslySetInnerHTML={{__html: "Dominerende kjemi: NMC litium-ion i sylindriske celler."}} />

        <h2>Levetid og degradering</h2>
          <p dangerouslySetInnerHTML={{__html: "Forventet levetid: 500\u20131 000 fulle sykluser, dvs. 3\u20136 \u00e5r ved daglig bruk."}} />
          <p dangerouslySetInnerHTML={{__html: "Lading til 100 % hver gang og lagring ved h\u00f8y temperatur reduserer levetiden."}} />

        <h2>Brannrisiko og kvalitet</h2>
          <p dangerouslySetInnerHTML={{__html: "El-sykkel-branner er den vanligste litium-relaterte brannen i Norge."}} />
          <p dangerouslySetInnerHTML={{__html: "Velg batteri som er CE-merket, fra produsent med produktansvar i Norge eller EU."}} />
          <p dangerouslySetInnerHTML={{__html: "Lad aldri p\u00e5 brennbart underlag. Plasser sykkelen i kjeller eller sykkelbod."}} />

        <h2>Hvordan kjenne et godt batteri</h2>
          <p dangerouslySetInnerHTML={{__html: "Cellekvalitet er n\u00f8kkelen. Premium-merker bruker celler fra Samsung, LG, Panasonic eller Sony."}} />
          <p dangerouslySetInnerHTML={{__html: "Sjekk BMS-funksjoner: skal st\u00f8tte cellebalansering, temperatur-cutoff, kortslutningsbeskyttelse."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Hvor lenge varer batteriet?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>3–6 år ved daglig bruk.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg ta batteriet med på fly?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Bare hvis det er under 100 Wh. De fleste el-sykkel-batterier er 360+ Wh.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/mc-scooter" className="btn btn-ghost">MC og scooter</Link>
          <Link href="/brann" className="btn btn-ghost">Brann</Link>
          <Link href="/lagring" className="btn btn-ghost">Lagring</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
