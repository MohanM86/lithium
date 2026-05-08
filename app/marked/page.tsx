import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/marked";
const TITLE = "Litium-marked: pris, r\u00e5vare og industri";
const DESC = "Litium-prisen, hvor litiumet kommer fra, hvem som dominerer markedet, og hva som driver utviklingen i 2026.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Marked", href: PATH },
          ]), faqSchema([{"q": "Vil litium bli mangelvare?", "a": "Reservene er store nok – over 100 år ved nåværende forbruk. Utfordringen er ikke ressurser, men nye gruver."}, {"q": "Hvorfor svingte litium-prisen så mye 2021–2023?", "a": "Etterspørsel fra elbil-bransjen vokste raskere enn forsyning."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Marked"
        title="Litium-marked: pris, r\u00e5vare og industri"
        lead="Litium er blitt strategisk r\u00e5vare p\u00e5 linje med olje. Pris, produksjon og forsyning p\u00e5virker alt fra elbil-priser til norsk industripolitikk."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Marked", href: PATH },
        ]}
      >
        <h2>Hvor litium kommer fra</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Saltsj\u00f8er:</strong> \u00ablitium-trekanten\u00bb i S\u00f8r-Amerika har 60 % av verdens reserver."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Hardrock-gruver:</strong> Australia leder produksjonen \u2013 cirka 50 % av globalt litium."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kinesisk raffinering:</strong> 60\u201370 % av globalt litium raffineres i Kina."}} />

        <h2>Litium-prisen</h2>
          <p dangerouslySetInnerHTML={{__html: "Litiumkarbonat er hovedformen for handel. Spotprisen har v\u00e6rt ekstremt volatil \u2013 fra 80 000 kr/tonn i 2020, til 600 000 kr/tonn topp i 2022, og rundt 90 000\u2013120 000 kr/tonn per februar 2026."}} />
          <p dangerouslySetInnerHTML={{__html: "Andelen litium-kostnad i en celle: typisk 5\u201310 % av cellekostnaden."}} />

        <h2>Etterspørsels-drivere</h2>
          <p dangerouslySetInnerHTML={{__html: "Elbil dominerer (60+ % av ettersp\u00f8rselen). Stasjon\u00e6r lagring vokser raskt."}} />
          <p dangerouslySetInnerHTML={{__html: "Total ettersp\u00f8rsel forventes \u00e5 firedoble seg fra 2024 til 2030."}} />

        <h2>Geopolitikk og forsyning</h2>
          <p dangerouslySetInnerHTML={{__html: "Vesten \u00f8nsker \u00e5 redusere avhengighet av kinesisk raffinering."}} />
          <p dangerouslySetInnerHTML={{__html: "Norge har ingen litium-gruver, men \u00f8nsker \u00e5 v\u00e6re med p\u00e5 verdikjeden."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Vil litium bli mangelvare?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Reservene er store nok – over 100 år ved nåværende forbruk. Utfordringen er ikke ressurser, men nye gruver.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor svingte litium-prisen så mye 2021–2023?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Etterspørsel fra elbil-bransjen vokste raskere enn forsyning.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/norske-aktorer" className="btn btn-ghost">Norske aktører</Link>
          <Link href="/sammenligning" className="btn btn-ghost">Sammenligning</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
