import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, definedTermSetSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { glossary } from "@/lib/glossary";

const PATH = "/ordbok";
const TITLE = "Litium-ordbok: faguttrykk forklart";
const DESC = "Komplett ordbok for litium-batteri-terminologi: LFP, NMC, BMS, sykluser, DoD, SoC og mer.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "Ordbok", href: PATH },
          ]),
          definedTermSetSchema(glossary),
        ]}
      />
      <ArticleLayout
        eyebrow="Verktøy"
        title={TITLE}
        lead="Definisjoner av de viktigste uttrykkene innen litium-batterier."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "Ordbok", href: PATH },
        ]}
      >
        <dl style={{ display: "grid", gap: 24, marginTop: 24 }}>
          {glossary.map((term) => (
            <div key={term.term} style={{ borderLeft: "3px solid var(--brand)", paddingLeft: 20 }}>
              <dt style={{ fontWeight: 600, fontSize: 18, color: "var(--ink)", marginBottom: 6 }}>
                {term.term}
              </dt>
              <dd style={{ color: "var(--ink-light)", lineHeight: 1.7, margin: 0 }}>
                {term.shortDef}
              </dd>
            </div>
          ))}
        </dl>

        <h2>Relatert lesing</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          <Link href="/faq" className="btn btn-ghost">FAQ</Link>
          <Link href="/teknologi" className="btn btn-ghost">Teknologi</Link>
          <Link href="/lfp-vs-nmc" className="btn btn-ghost">LFP vs NMC</Link>
        </div>
      </ArticleLayout>
    </>
  );
}
