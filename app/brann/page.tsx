import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/brann";
const TITLE = "Litium-brann: hva skjer og hvordan slukkes det";
const DESC = "Litium-batteribrann: hvordan den oppst\u00e5r, hva som skjer i cellen, og hvorfor brannvesenet bruker store mengder vann.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Brann", href: PATH },
          ]), faqSchema([{"q": "Kan en hjemmebatteri-brann ta hele huset?", "a": "Ja, hvis batteriet er stort og dårlig plassert. Derfor anbefales installasjon utendørs eller i eget brannrom."}, {"q": "Brenner LFP og NMC like raskt?", "a": "Nei. NMC er klart raskere og varmere. LFP brenner saktere."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Litium-brann: hva skjer og hvordan slukkes det"
        lead="En litium-brann er fundamentalt forskjellig fra en vanlig brann. Her er hva som faktisk skjer."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Brann", href: PATH },
        ]}
      >
        <h2>Hvordan en litium-brann starter</h2>
          <p dangerouslySetInnerHTML={{__html: "Trigger: fysisk skade, overlading, kortslutning eller intern feil. Cellen begynner \u00e5 varmes opp."}} />
          <p dangerouslySetInnerHTML={{__html: "Ved 130\u2013180 \u00b0C: separatoren smelter, anode og katode kommer i direkte kontakt \u2013 kortslutning."}} />
          <p dangerouslySetInnerHTML={{__html: "Ved 180\u2013250 \u00b0C: katoden begynner \u00e5 frigj\u00f8re oksygen. Termisk runaway er i gang."}} />

        <h2>Hva som skjer videre</h2>
          <p dangerouslySetInnerHTML={{__html: "En celle kan slippe ut hundrevis av liter brennbar gass per minutt."}} />
          <p dangerouslySetInnerHTML={{__html: "Branneren kan spre seg til neste celle gjennom varme."}} />

        <h2>Hvorfor vannet er kritisk</h2>
          <p dangerouslySetInnerHTML={{__html: "Litium-batteribranner kan IKKE slukkes med vanlig brannslukker."}} />
          <p dangerouslySetInnerHTML={{__html: "Brannvesenet bruker enorme mengder vann (10 000\u201330 000 liter for en elbil) \u2013 ikke for \u00e5 \u00abslukke\u00bb, men for \u00e5 kj\u00f8le batteriet."}} />
          <p dangerouslySetInnerHTML={{__html: "Skum, pulver og CO\u2082 stopper ikke kjedereaksjonen."}} />

        <h2>Hjemme: hva å gjøre</h2>
          <p dangerouslySetInnerHTML={{__html: "Ved tegn p\u00e5 batteribrann: forlat omr\u00e5det umiddelbart, lukk d\u00f8rer, ring 110."}} />
          <p dangerouslySetInnerHTML={{__html: "Ikke pr\u00f8v \u00e5 slukke selv."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan en hjemmebatteri-brann ta hele huset?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja, hvis batteriet er stort og dårlig plassert. Derfor anbefales installasjon utendørs eller i eget brannrom.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Brenner LFP og NMC like raskt?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nei. NMC er klart raskere og varmere. LFP brenner saktere.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/termisk-runaway" className="btn btn-ghost">Termisk runaway</Link>
          <Link href="/lagring" className="btn btn-ghost">Lagring</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
