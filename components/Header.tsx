"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/lib/navigation";
import LithiumAnimation from "./LithiumAnimation";

export default function Header() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu(idx: number) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenIdx(idx);
  }

  function scheduleClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenIdx(null);
      closeTimeoutRef.current = null;
    }, 200);
  }

  function cancelClose() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIdx(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const chevron = (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  return (
    <div className="nav-wrapper">
      <nav className="nav-pill" aria-label="Hovedmeny" onMouseLeave={scheduleClose}>
        <Link href="/" className="nav-logo" aria-label="Lithium.no – til forsiden">
          <Image src="/images/logo.svg" alt="Lithium.no" width={220} height={56} priority unoptimized />
        </Link>

        <div className="nav-links">
          {mainNav.map((menu, idx) => {
            const hasMega = !!menu.cols;
            return (
              <div
                key={menu.label}
                className={`nav-item ${hasMega && openIdx === idx ? "open" : ""}`}
                onMouseEnter={() => hasMega ? openMenu(idx) : cancelClose()}
              >
                <Link
                  href={menu.href || "#"}
                  className="nav-link"
                  aria-haspopup={hasMega ? "true" : undefined}
                  aria-expanded={hasMega ? openIdx === idx : undefined}
                >
                  {menu.label}
                  {hasMega && chevron}
                </Link>
                {hasMega && menu.cols && (
                  <div
                    className="mega-menu"
                    role="menu"
                    aria-label={`${menu.label} undermeny`}
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className={menu.cols.length === 3 ? "mega-grid" : "mega-grid-2"}>
                      {menu.feature && (
                        <Link href={menu.feature.href} className="mega-feature">
                          <div style={{ width: "100%", aspectRatio: "4/5", borderRadius: 12, overflow: "hidden" }}>
                            <LithiumAnimation variant={menu.feature.animationVariant} />
                          </div>
                          <div className="mega-feature-content">
                            <p className="mega-feature-eyebrow">{menu.feature.eyebrow}</p>
                            <p className="mega-feature-title">{menu.feature.title}</p>
                            <p className="mega-feature-desc">{menu.feature.desc}</p>
                          </div>
                        </Link>
                      )}
                      {menu.cols.map((col) => (
                        <div key={col.title} className="mega-col">
                          <h3>{col.title}</h3>
                          <ul>
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link href={item.href}>
                                  {item.label}
                                  {item.sub && <span>{item.sub}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="nav-actions">
          <Link href="/kalkulator" className="nav-btn-primary">
            Litium-kalkulator
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          style={{
            maxWidth: 1280,
            margin: "12px auto 0",
            background: "#fff",
            border: "1px solid rgba(15,23,42,0.08)",
            borderRadius: 24,
            padding: 12,
            boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 24px 48px rgba(15,23,42,0.12)",
            maxHeight: "calc(100vh - 120px)",
            overflowY: "auto",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 2 }}>
            {mainNav.map((menu) => (
              <li key={menu.label}>
                {menu.href && !menu.cols ? (
                  <Link
                    href={menu.href}
                    onClick={() => setMobileOpen(false)}
                    style={{ display: "flex", alignItems: "center", minHeight: 48, padding: "12px 16px", borderRadius: 12, fontSize: 16, fontWeight: 500, color: "var(--ink)", textDecoration: "none" }}
                  >
                    {menu.label}
                  </Link>
                ) : (
                  <details>
                    <summary
                      style={{ listStyle: "none", cursor: "pointer", minHeight: 48, padding: "12px 16px", borderRadius: 12, fontSize: 16, fontWeight: 500, color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "space-between" }}
                    >
                      {menu.label}
                      {chevron}
                    </summary>
                    <div style={{ padding: "4px 8px 12px", display: "grid", gap: 12 }}>
                      {menu.cols?.map((col) => (
                        <div key={col.title}>
                          <p style={{ fontSize: 11, fontWeight: 600, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em", padding: "8px 8px 4px", margin: 0 }}>
                            {col.title}
                          </p>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  style={{ display: "block", minHeight: 44, padding: "10px 12px", fontSize: 15, color: "var(--ink)", textDecoration: "none", borderRadius: 8 }}
                                >
                                  {item.label}
                                  {item.sub && <span style={{ display: "block", fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{item.sub}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </li>
            ))}
            <li style={{ marginTop: 12, padding: "0 4px" }}>
              <Link
                href="/kalkulator"
                onClick={() => setMobileOpen(false)}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "14px 20px", background: "var(--ink)", color: "#fff", borderRadius: 999, fontSize: 15, fontWeight: 500, textDecoration: "none", gap: 8 }}
              >
                Litium-kalkulator
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
