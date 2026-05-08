import Link from "next/link";
import type { Metadata } from "next";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import LithiumAnimation from "@/components/LithiumAnimation";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Lithium.no – Norges kunnskapsbase om litium-batterier",
  description:
    "Litium fra A til Å: kjemi (LFP, NMC, LTO, solid-state), bruksområder, sikkerhet og marked. Uavhengig norsk ressurs uten salgsspråk.",
  alternates: { canonical: "https://lithium.no/" },
};

const PILLARS = [
  {
    eyebrow: "Teknologi",
    title: "Forstå kjemien",
    desc: "LFP, NMC, LTO, solid-state. Hvordan litium-ion-batterier faktisk fungerer.",
    href: "/teknologi",
    variant: "teknologi" as const,
  },
  {
    eyebrow: "Bruksområder",
    title: "Fra elbil til hjemmebatteri",
    desc: "Båt, MC, sykkel, hjem, off-grid – riktig batteri til riktig formål.",
    href: "/bruksomrader",
    variant: "bruksomrader" as const,
  },
  {
    eyebrow: "Sikkerhet",
    title: "Brann, transport og lagring",
    desc: "Termisk runaway, slukking, regelverk for fly og frakt.",
    href: "/sikkerhet",
    variant: "sikkerhet" as const,
  },
  {
    eyebrow: "Marked",
    title: "Pris, råvare og industri",
    desc: "Litium-pris, globale produsenter og norske aktører som Vianode og Morrow.",
    href: "/marked",
    variant: "marked" as const,
  },
];

const STATS = [
  { value: "4 000–6 000", label: "LFP-sykluser" },
  { value: "12–15 år", label: "Realistisk levetid" },
  { value: "95 %", label: "Materialer kan resirkuleres" },
  { value: "+11 %", label: "Årlig vekst i etterspørsel" },
];

export default function Home() {
  return (
    <>
      <SchemaJsonLd data={faqSchema(homeFaqs)} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-eco" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" /> Norges kunnskapsbase om litium
          </p>
          <h1 className="hero-title">
            Litium <em>fra A til Å.</em>
          </h1>
          <p className="hero-lead">
            Kjemi, bruksområder, sikkerhet og marked – samlet på ett sted. Uavhengig av leverandører, uten salgsspråk.
          </p>
          <div className="hero-ctas">
            <Link href="/teknologi" className="btn btn-solar">
              Utforsk teknologien
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/lfp-vs-nmc" className="btn btn-glass">LFP vs NMC</Link>
          </div>

          <div className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars">
        <div className="pillars-inner">
          <p className="section-eyebrow">Fire hoveddeler</p>
          <h2 className="section-title">Hva vil du forstå?</h2>
          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <Link key={p.href} href={p.href} className="pillar-card">
                <div className="pillar-card-image lit-anim-pillar">
                  <LithiumAnimation variant={p.variant} />
                </div>
                <div className="pillar-card-content">
                  <p className="pillar-card-eyebrow">{p.eyebrow}</p>
                  <h3 className="pillar-card-title">{p.title}</h3>
                  <p className="pillar-card-desc">{p.desc}</p>
                  <span className="pillar-card-arrow">Les mer →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="editorial-split">
        <div className="editorial-split-inner">
          <div className="editorial-split-image lit-anim-portrait">
            <LithiumAnimation variant="lfp-vs-nmc" />
          </div>
          <div className="editorial-split-content">
            <p className="section-eyebrow">Den viktigste sammenligningen</p>
            <h2>LFP vs NMC – hvilken bør du velge?</h2>
            <p>
              LFP og NMC er de to mest brukte litium-kjemiene. LFP (litium-jernfosfat) er klart sikrere og holder lenger, men tyngre per kWh. NMC (nikkel-mangan-kobolt) gir mer energi per kg, men kortere levetid og høyere brannrisiko.
            </p>
            <p>
              For hjemmebatteri og storskala-lagring dominerer LFP. For elbil er det fortsatt blanding – nye modeller går mer mot LFP for å kutte kobolt og kostnad.
            </p>
            <Link href="/lfp-vs-nmc" className="btn-text">
              Hele sammenligningen →
            </Link>
          </div>
        </div>
      </section>

      {/* MARKET BENTO */}
      <section className="bento">
        <div className="bento-inner">
          <p className="section-eyebrow">Marked og industri</p>
          <h2 className="section-title">Litium-økonomien</h2>
          <div className="bento-grid">
            <Link href="/marked" className="bento-card bento-large">
              <div className="lit-anim-wide" style={{ borderRadius: 12, overflow: "hidden" }}>
                <LithiumAnimation variant="marked-feature" />
              </div>
              <div className="bento-card-content">
                <p className="bento-eyebrow">Råvare</p>
                <h3>Litium-pris og globalt marked</h3>
                <p>Hvor litiumet kommer fra, hva det koster, og hvordan markedet beveger seg.</p>
              </div>
            </Link>
            <Link href="/norske-aktorer" className="bento-card">
              <div className="bento-card-content">
                <p className="bento-eyebrow">Norge</p>
                <h3>Norske aktører</h3>
                <p>Vianode, Beyonder, Morrow Batteries – og hvor de står i 2026.</p>
              </div>
            </Link>
            <Link href="/sammenligning" className="bento-card">
              <div className="bento-card-content">
                <p className="bento-eyebrow">Sammenligning</p>
                <h3>Litium vs alternativer</h3>
                <p>Blybatteri, natrium-ion, hydrogen, solid-state. Når lønner hva seg?</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-elegant">
        <div className="faq-elegant-inner">
          <p className="section-eyebrow">Vanlige spørsmål</p>
          <h2 className="section-title">Litium kort forklart</h2>
          <div className="faq-elegant-list">
            {homeFaqs.map((faq, i) => (
              <details key={i} className="faq-elegant-item">
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
          <div className="faq-elegant-more">
            <Link href="/faq" className="btn-text">Alle spørsmål →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
