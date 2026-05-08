import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/transport";
const TITLE = "Transport av litium-batteri: fly, bil og post";
const DESC = "Regler for transport av litium-batteri p\u00e5 fly, i bil og som post.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Transport", href: PATH },
          ]), faqSchema([{"q": "Kan jeg ta laptop med stort batteri på fly?", "a": "Ja. Laptop-batterier er typisk 50–99 Wh – under grensen."}, {"q": "Hva er Wh på et batteri?", "a": "Watt-timer = Ah × spenning. Et 5 000 mAh batteri på 3,7 V er 18,5 Wh."}]),
        ]}
      />
      <ArticleLayout
        eyebrow="Sikkerhet"
        title="Transport av litium-batteri: fly, bil og post"
        lead="Litium-batterier er klassifisert som farlig gods. Reglene avhenger av st\u00f8rrelse, kjemi og transportmiddel."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Transport", href: PATH },
        ]}
      >
        <h2>Fly: regler for passasjer</h2>
          <p dangerouslySetInnerHTML={{__html: "<strong>Under 100 Wh per batteri:</strong> tillatt i h\u00e5ndbagasje uten begrensning."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>100\u2013160 Wh:</strong> kreves flyselskapets samtykke. Maks 2 batterier."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Over 160 Wh:</strong> forbudt for passasjerfly."}} />
          <p dangerouslySetInnerHTML={{__html: "<strong>Innsjekket bagasje:</strong> spare-batterier er IKKE tillatt."}} />

        <h2>Bil og personbil</h2>
          <p dangerouslySetInnerHTML={{__html: "Privat transport av sm\u00e5 batterier er fritt."}} />
          <p dangerouslySetInnerHTML={{__html: "St\u00f8rre mengder faller under ADR \u2013 farlig gods-regelverk for vei."}} />

        <h2>Post og pakkesendelse</h2>
          <p dangerouslySetInnerHTML={{__html: "Posten Norge tar imot sm\u00e5 litium-batterier (under 100 Wh) i utstyr eller separat."}} />
          <p dangerouslySetInnerHTML={{__html: "Skadde batterier kan ikke sendes med vanlig post."}} />

        <h2>Skadde batterier</h2>
          <p dangerouslySetInnerHTML={{__html: "Aldri frakt et skadet, svelt eller varmt litium-batteri som vanlig last."}} />
          <p dangerouslySetInnerHTML={{__html: "Norske gjenvinningsstasjoner tar imot defekte batterier separat."}} />

        <h2>Vanlige spørsmål</h2>
        <div className="faq-elegant-list" style={{marginTop: 16}}>
          <details className="faq-elegant-item">
            <summary><span>Kan jeg ta laptop med stort batteri på fly?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Ja. Laptop-batterier er typisk 50–99 Wh – under grensen.</p></div>
          </details>
          <details className="faq-elegant-item">
            <summary><span>Hva er Wh på et batteri?</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg></summary>
            <div className="faq-elegant-answer"><p>Watt-timer = Ah × spenning. Et 5 000 mAh batteri på 3,7 V er 18,5 Wh.</p></div>
          </details>
        </div>

        <h2>Relatert lesing</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16}}>
          <Link href="/lagring" className="btn btn-ghost">Lagring</Link>
          <Link href="/avhending" className="btn btn-ghost">Avhending</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
        </div>

      </ArticleLayout>
    </>
  );
}
