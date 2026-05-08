import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import { footerSections } from "@/lib/navigation";
import { ECOSYSTEM } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mega-footer">
      <div className="mega-footer-cta">
        <h2>
          Litium <em>fra A til Å.</em>
        </h2>
        <p>Norges uavhengige kunnskapsbase om litium-batterier – kjemi, sikkerhet og marked.</p>
        <div className="mega-footer-cta-btns">
          <Link href="/teknologi" className="btn btn-solar">
            Utforsk teknologien
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/lfp-vs-nmc" className="btn btn-glass">LFP vs NMC</Link>
        </div>
      </div>

      <div className="mega-footer-grid">
        <div className="mega-footer-brand">
          <Image src="/images/logo-white.svg" alt="Lithium.no" width={220} height={56} unoptimized />
          <p className="mega-footer-tagline">
            Norges uavhengige kunnskapsbase om litium-batterier, kjemi, sikkerhet og marked.
          </p>
          <div className="mega-footer-newsletter">
            <span className="mega-footer-newsletter-label">Nyhetsbrev – månedlig</span>
            <NewsletterForm />
          </div>
        </div>

        {footerSections.map((col) => (
          <div key={col.heading} className="mega-footer-col">
            <h3>{col.heading}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item.label + item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mega-footer-eco">
        <p className="mega-footer-eco-label">Energi-økosystem</p>
        <div className="mega-footer-eco-row">
          {ECOSYSTEM.filter((e) => !e.self).map((eco) => (
            <a key={eco.domain} href={eco.href} className="mega-footer-eco-link" target="_blank" rel="noopener">
              {eco.domain} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="mega-footer-bottom">
        <p>© {year} Lithium.no · Uavhengig norsk kunnskapsbase</p>
        <div className="mega-footer-legal">
          <Link href="/om">Om oss</Link>
          <Link href="/redaksjonell-metode">Redaksjonell metode</Link>
          <Link href="/personvern">Personvern</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
      </div>

      <div className="mega-footer-mark" aria-hidden="true">LITHIUM</div>
    </footer>
  );
}
