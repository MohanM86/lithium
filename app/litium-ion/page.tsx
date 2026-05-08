import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/litium-ion";
const TITLE = "Litium-ion: hvordan det virker";
const DESC = "Forklaring av litium-ion-batteri: hvordan ioner beveger seg, hvilke materialer som brukes, og hvorfor teknologien dominerer moderne elektronikk.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Litium-ion", href: PATH },
          ]), faqSchema([{"q": "Er litium-ion det samme som litium-polymer?", "a": "Nesten. Litium-polymer bruker en gel-elektrolytt i stedet for flytende. Energien lagres på samme måte; forskjellen er emballasjen."}, {"q": "Hvorfor brenner litium-ion-batterier?", "a": "Ved fysisk skade, overlading eller produksjonsdefekt kan elektrolytten reagere voldsomt med oksygen frigjort fra katoden. Reaksjonen er selvforsterkende – termisk runaway."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Teknologi"
        title="Litium-ion: hvordan det virker"
        lead="Litium-ion er den dominerende batteriteknologien siden 1991. Slik fungerer den \u2013 og hvorfor litium er s\u00e5 velegnet til \u00e5 lagre elektrisk energi."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Litium-ion", href: PATH },
        ]}
      >
        <h2>Det elektrokjemiske prinsippet</h2>
          <p dangerouslySetInnerHTML={{__html: "I et litium-ion-batteri er litium-ioner b\u00e6rere av ladning. De beveger seg gjennom en elektrolytt mellom to elektroder. Under lading \u00abtrekkes\u00bb de fra katoden til anoden. Under utlading vandrer de tilbake, og elektronene som frigj\u00f8res driver kretsen."}} />
          <p dangerouslySetInnerHTML={{__html: "Litium ble valgt fordi det er det letteste metallet og har h\u00f8yt elektrokjemisk potensial. Det gir h\u00f8y energitetthet per kg \u2013 mye mer enn bly, nikkel-kadmium eller nikkel-metallhybrid."}} />

        <h2>Komponentene</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Anode:</strong> oftest grafitt, hvor litium-ioner lagres mellom karbonlag. Silisium og litium-titanat er alternativer."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Katode:</strong> kjemien bestemmes her. LFP, NMC, NCA, LCO \u2013 alle ulike litium-metalloksider eller litium-jernfosfat."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Elektrolytt:</strong> flytende organisk v\u00e6ske med oppl\u00f8st litiumsalt. Fungerer som motorvei for ionene."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Separator:</strong> tynn polymermembran som hindrer kortslutning, men slipper gjennom litium-ioner."}} />

        <h2>Hvorfor litium-ion vant</h2>
          <p dangerouslySetInnerHTML={{__html: "Sammenlignet med blybatteri: 3\u20135\u00d7 mer energi per kg, ingen vedlikehold, ingen \u00abmemory effect\u00bb, 10\u00d7 flere sykluser."}} />
          <p dangerouslySetInnerHTML={{__html: "Sony introduserte den f\u00f8rste kommersielle litium-ion-cellen i 1991. Siden har prisene falt over 95 %, mens energitettheten er tredoblet."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Er litium-ion det samme som litium-polymer?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Nesten. Litium-polymer bruker en gel-elektrolytt i stedet for flytende. Energien lagres på samme måte; forskjellen er emballasjen.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hvorfor brenner litium-ion-batterier?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ved fysisk skade, overlading eller produksjonsdefekt kan elektrolytten reagere voldsomt med oksygen frigjort fra katoden. Reaksjonen er selvforsterkende – termisk runaway.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lfp" className="btn btn-ghost">LFP</Link>
          <Link href="/nmc" className="btn btn-ghost">NMC</Link>
          <Link href="/termisk-runaway" className="btn btn-ghost">Termisk runaway</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
