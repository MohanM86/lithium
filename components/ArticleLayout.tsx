import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { name: string; href: string };

type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  lead: string;
  breadcrumbs: Crumb[];
  children: ReactNode;
};

export default function ArticleLayout({ eyebrow, title, lead, breadcrumbs, children }: ArticleLayoutProps) {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-inner">
          <nav className="breadcrumbs" aria-label="Brødsmuler">
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.href}>
                {idx > 0 && <span aria-hidden="true">/</span>}
                {idx === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link href={crumb.href}>{crumb.name}</Link>
                )}
              </span>
            ))}
          </nav>
          <p className="page-hero-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero-lead">{lead}</p>
        </div>
      </header>
      <main>
        <div className="container-narrow-wow" style={{ padding: "64px 24px 96px" }}>
          <article className="prose-article">{children}</article>
        </div>
      </main>
    </>
  );
}
