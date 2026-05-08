import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { allFaqs, FAQ_CATEGORIES } from "@/lib/faq";

const PATH = "/faq";
const TITLE = "Vanlige spørsmål om litium-batteri";
const DESC = "Komplett FAQ om litium-batterier. Sikkerhet, kjemi, levetid, marked og bruk – sortert etter kategori.";

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: PATH });

export default function Page() {
  const grouped: Record<string, typeof allFaqs> = {};
  const uncategorized: typeof allFaqs = [];

  allFaqs.forEach((faq) => {
    if (faq.category && FAQ_CATEGORIES.includes(faq.category)) {
      if (!grouped[faq.category]) grouped[faq.category] = [];
      grouped[faq.category].push(faq);
    } else {
      uncategorized.push(faq);
    }
  });

  return (
    <>
      <SchemaJsonLd
        data={[
          articleSchema({ title: TITLE, description: DESC, path: PATH }),
          breadcrumbSchema([
            { name: "Forsiden", href: "/" },
            { name: "FAQ", href: PATH },
          ]),
          faqSchema(allFaqs.map((f) => ({ q: f.q, a: f.a }))),
        ]}
      />
      <ArticleLayout
        eyebrow="Verktøy"
        title={TITLE}
        lead="Svar på de vanligste spørsmålene om litium-batterier."
        breadcrumbs={[
          { name: "Forsiden", href: "/" },
          { name: "FAQ", href: PATH },
        ]}
      >
        {uncategorized.length > 0 && (
          <>
            <h2>Generelt</h2>
            <div className="faq-elegant-list" style={{ marginTop: 16 }}>
              {uncategorized.map((faq, i) => (
                <details key={`u-${i}`} className="faq-elegant-item">
                  <summary>
                    <span>{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="faq-elegant-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </>
        )}

        {FAQ_CATEGORIES.map((cat) =>
          grouped[cat] && grouped[cat].length > 0 ? (
            <div key={cat}>
              <h2>{cat}</h2>
              <div className="faq-elegant-list" style={{ marginTop: 16 }}>
                {grouped[cat].map((faq, i) => (
                  <details key={`${cat}-${i}`} className="faq-elegant-item">
                    <summary>
                      <span>{faq.q}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="faq-elegant-answer">
                      <p>{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ) : null
        )}

        <h2>Relatert lesing</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16 }}>
          <Link href="/ordbok" className="btn btn-ghost">Ordbok</Link>
          <Link href="/teknologi" className="btn btn-ghost">Teknologi</Link>
          <Link href="/sikkerhet" className="btn btn-ghost">Sikkerhet</Link>
        </div>
      </ArticleLayout>
    </>
  );
}
