import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/sammenligning";
const TITLE = "Litium vs alternativer: blybatteri, natrium-ion, hydrogen";
const DESC = "Sammenligning av litium med blybatteri, natrium-ion, solid-state og hydrogenbrenselceller.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Sammenligning", href: PATH },
          ]), faqSchema([{"q": "Er natrium-ion en trussel mot litium?", "a": "På sikt for stasjonær lagring av lavpris-typen. For elbil og portable er energitettheten for lav."}, {"q": "Hvorfor brukes ikke hydrogen mer?", "a": "Effektivitet og infrastruktur. Det er enklere og billigere å lagre energi i et batteri enn å produsere, komprimere og transportere hydrogen."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sammenligning"
        title="Litium vs alternativer: blybatteri, natrium-ion, hydrogen"
        lead="Litium dominerer batterimarkedet, men alternativene har sine bruksomr\u00e5der. Her er hovedsammenligningen."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Sammenligning", href: PATH },
        ]}
      >
        <h2>Litium vs blybatteri</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energi per kg:</strong> Litium 100 Wh/kg, bly 30 Wh/kg."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> Litium 4 000+ sykluser, bly 500\u20131 000."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Pris:</strong> Litium 3\u20135\u00d7 bly per kWh i innkj\u00f8p \u2013 men billigere over levetiden."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Vedlikehold:</strong> Litium ingen, bly krever p\u00e5fyll og vedlikehold."}} />
          <p dangerouslySetInnerHTML={{__html: "Bly fortsatt brukt i: bilstart, UPS-systemer, eldre solanlegg, der initialkostnad er kritisk."}} />

        <h2>Litium vs natrium-ion</h2>
          <p dangerouslySetInnerHTML={{__html: "Natrium-ion er en lovende erstatning for LFP i stasjon\u00e6r lagring. Bruker natrium i stedet for litium \u2013 billigere og mer rikelig r\u00e5vare."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> 100\u2013160 Wh/kg, lavt sammenlignet med moderne LFP."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> sv\u00e6rt god, lavere risiko enn litium."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Status:</strong> CATL begynte \u00e5 selge i 2024. Forventet \u00e5 ta markedsandel i lavprissegmentet."}} />

        <h2>Litium vs solid-state</h2>
          <p dangerouslySetInnerHTML={{__html: "Solid-state er litium-batterier med fast elektrolytt. Det er en utvikling, ikke konkurranse."}} />
          <p dangerouslySetInnerHTML={{__html: "Ventet \u00e5 gradvis ta over premium-segmentet i elbil fra 2027\u20132030."}} />

        <h2>Litium vs hydrogen</h2>
          <p dangerouslySetInnerHTML={{__html: "Hydrogenbrenselceller leverer str\u00f8m fra hydrogen og oksygen. Ingen batteri, men en konvertering."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Effektivitet:</strong> 30\u201340 % vs litium 90+ %."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kompleksitet:</strong> krever komprimering, distribusjon og dyre brenselceller."}} />
          <p dangerouslySetInnerHTML={{__html: "Egnet for: tunge kj\u00f8ret\u00f8y, langtransport, fly. Ikke konkurransedyktig for personbil eller hjemmebatteri."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Er natrium-ion en trussel mot litium?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>På sikt for stasjonær lagring av lavpris-typen. For elbil og portable er energitettheten for lav.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor brukes ikke hydrogen mer?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Effektivitet og infrastruktur. Det er enklere og billigere å lagre energi i et batteri enn å produsere, komprimere og transportere hydrogen.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/solid-state" className="btn btn-ghost">Solid-state</Link>
          <Link href="/marked" className="btn btn-ghost">Marked</Link>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
