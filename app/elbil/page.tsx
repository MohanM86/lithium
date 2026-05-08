import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/elbil";
const TITLE = "Litium-batteri i elbil: kjemi, levetid og lading";
const DESC = "Hva slags batteri sitter i en moderne elbil? NMC, LFP, NCA \u2013 kjemier, levetid, hurtiglading og degradering.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Elbil", href: PATH },
          ]), faqSchema([{"q": "Bør jeg lade elbilen til 100 % hver gang?", "a": "Nei. 80 % daglig er bedre for langsiktig levetid."}, {"q": "Hvor mye taper batteriet i kapasitet per år?", "a": "Vanligvis 1–3 % de første årene, så avtagende. Total degradering er typisk 8–12 % over 8 år."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Bruksomr\u00e5der"
        title="Litium-batteri i elbil: kjemi, levetid og lading"
        lead="Elbil-batteriet er den viktigste komponenten i bilen. Her er kjemiene, hva som styrer levetiden, og hva du kan forvente."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Elbil", href: PATH },
        ]}
      >
        <h2>Hvilke kjemier brukes i elbiler</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>LFP:</strong> \u00f8kende dominans i 2026. Brukt av BYD, Tesla, Polestar."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NMC:</strong> fortsatt vanlig i premium-modeller."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>NCA:</strong> Tesla brukte NCA i Model S/X i mange \u00e5r."}} />

        <h2>Levetid</h2>
          <p dangerouslySetInnerHTML={{__html: "Garanti er typisk 8 \u00e5r eller 160 000 km til 70 % SoH."}} />
          <p dangerouslySetInnerHTML={{__html: "Tesla Model 3-data fra over 100 000 biler viser cirka 90 % gjenv\u00e6rende kapasitet etter 200 000 km."}} />

        <h2>Hurtiglading og degradering</h2>
          <p dangerouslySetInnerHTML={{__html: "Hyppig hurtiglading gir noe ekstra slitasje, men moderne BMS reduserer effekten kraftig."}} />
          <p dangerouslySetInnerHTML={{__html: "Lading til 100 % daglig stresser ogs\u00e5 batteriet mer enn lading til 80 %."}} />

        <h2>Resirkulering av elbil-batteri</h2>
          <p dangerouslySetInnerHTML={{__html: "Hydrovolt i Fredrikstad tar imot brukte elbil-batterier og gjenvinner over 95 % av materialene."}} />
          <p dangerouslySetInnerHTML={{__html: "Mange brukte elbil-batterier f\u00e5r ogs\u00e5 \u00abandre liv\u00bb som stasjon\u00e6r lagring."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Bør jeg lade elbilen til 100 % hver gang?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nei. 80 % daglig er bedre for langsiktig levetid.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvor mye taper batteriet i kapasitet per år?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Vanligvis 1–3 % de første årene, så avtagende. Total degradering er typisk 8–12 % over 8 år.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/resirkulering" className="btn btn-ghost">Resirkulering</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
