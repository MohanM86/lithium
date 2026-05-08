import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/nmc";
const TITLE = "NMC-batteri: nickel manganese cobalt forklart";
const DESC = "NMC er en h\u00f8y-energi litium-kjemi mye brukt i elbiler. Hvordan NMC fungerer, og n\u00e5r det er riktig valg.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "NMC", href: PATH },
          ]), faqSchema([{"q": "Er NMC samme som NCA?", "a": "Nei, men nært beslektet. NCA bruker aluminium i stedet for mangan. Tesla har historisk brukt NCA."}, {"q": "Hvorfor erstattes NMC med LFP?", "a": "LFP er sikrere, holder lenger, og bruker billigere råvarer."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="NMC-batteri: nickel manganese cobalt forklart"
        lead="NMC har v\u00e6rt den dominerende kjemien i moderne elbiler. H\u00f8y energitetthet, men kortere levetid og h\u00f8yere risiko enn LFP."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "NMC", href: PATH },
        ]}
      >
        <h2>Hva NMC er</h2>
          <p dangerouslySetInnerHTML={{__html: "NMC st\u00e5r for nikkel, mangan og kobolt. Forholdet mellom dem varierer: NMC 622 betyr 60 % nikkel, 20 % mangan, 20 % kobolt. NMC 811 er 80 % nikkel."}} />
          <p dangerouslySetInnerHTML={{__html: "H\u00f8yere nikkel gir h\u00f8yere energitetthet men lavere stabilitet. Trenden de siste \u00e5rene har v\u00e6rt \u00e5 skvise ut kobolt for \u00e5 redusere kostnad."}} />

        <h2>Sterke sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Energitetthet:</strong> 150\u2013270 Wh/kg. Mer rekkevidde per kg batteri."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Spenning:</strong> 3,7 V nominell."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Effektrespons:</strong> godt egnet for h\u00f8y spissbelastning."}} />

        <h2>Svake sider</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Levetid:</strong> 1 500\u20133 000 sykluser. Kortere enn LFP."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Sikkerhet:</strong> mer utsatt for termisk runaway ved feil."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Kobolt:</strong> over 60 % kommer fra DR Kongo, ofte under problematiske forhold."}} />

        <h2>Hvor NMC brukes</h2>
          <p dangerouslySetInnerHTML={{__html: "Premium-elbiler, eldre hjemmebatterier, mobile kraft-pakker."}} />
          <p dangerouslySetInnerHTML={{__html: "I 2026 g\u00e5r trenden i elbil-bransjen mot LFP for standard rekkevidde og NMC for langtreknings-pakker."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Er NMC samme som NCA?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nei, men nært beslektet. NCA bruker aluminium i stedet for mangan. Tesla har historisk brukt NCA.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor erstattes NMC med LFP?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>LFP er sikrere, holder lenger, og bruker billigere råvarer.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/lfp-vs-nmc" className="btn btn-ghost">LFP vs NMC</Link>
          <Link href="/termisk-runaway" className="btn btn-ghost">Termisk runaway</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
