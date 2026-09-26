import type { Metadata } from 'next';
import Link from 'next/link';
import { getLanguage } from '@/lib/i18n';
import { LEGAL_UPDATED, legalDocs, legalUi, toLegalLang, type LegalDocId } from '@/content/legal';

const BASE = 'https://neuralcodelab.com';

export async function legalMetadata(id: LegalDocId): Promise<Metadata> {
  const lang = toLegalLang(await getLanguage());
  const doc = legalDocs[id][lang];
  const url = `${BASE}${doc.path}`;
  return {
    title: doc.seoTitle,
    description: doc.seoDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: doc.seoTitle,
      description: doc.seoDescription,
      url,
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: doc.title }],
    },
  };
}

export default async function LegalPage({ id }: { id: LegalDocId }) {
  const lang = toLegalLang(await getLanguage());
  const doc = legalDocs[id][lang];
  const ui = legalUi[lang];
  const others = (['privacy', 'cookies', 'terms'] as const).filter((d) => d !== id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: doc.title,
    description: doc.seoDescription,
    url: `${BASE}${doc.path}`,
    inLanguage: lang,
    dateModified: '2026-09-26',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Neural Code Lab', item: BASE },
        { '@type': 'ListItem', position: 2, name: doc.title, item: `${BASE}${doc.path}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-6 py-24 text-foreground">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>
          <p className="text-sm text-muted-foreground mb-6">{ui.updated}: {LEGAL_UPDATED[lang]}</p>
          <p className="text-lg text-muted-foreground leading-relaxed">{doc.intro}</p>
        </header>

        <div className="space-y-10">
          {doc.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                {s.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {s.table && (
                  <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50 text-foreground">
                        <tr>{s.table.head.map((h) => <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>)}</tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {s.table.rows.map((row) => (
                          <tr key={row.join('|')}>{row.map((cell, i) => <td key={i} className="px-4 py-3 align-top">{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>

        <nav className="mt-16 pt-8 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label={ui.legal}>
          {others.map((d) => (
            <Link key={d} href={legalDocs[d][lang].path} className="text-primary hover:underline">
              {legalDocs[d][lang].title}
            </Link>
          ))}
        </nav>
      </article>
    </div>
  );
}
