import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Rss } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SITE_URL, formatDate, getAllPosts, readingMinutes } from '@/lib/blog';

const URL = `${SITE_URL}/blog`;
const TITLE = 'Blog de tecnología, IA y actualidad | Neural Code Lab';
const DESCRIPTION =
  'Noticias explicadas, historias virales y análisis de tecnología e inteligencia artificial desde Guatemala. Contenido original de Neural Code Lab.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL, types: { 'application/rss+xml': `${URL}/rss.xml` } },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website', images: ['/og-image.png'] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [destacado, ...resto] = posts;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Neural Code Lab',
    url: URL,
    description: DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: posts.slice(0, 20).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${URL}/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <Badge variant="outline" className="mb-4">Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Actualidad, tecnología e IA</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{DESCRIPTION}</p>
        </div>
        <a href="/blog/rss.xml" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <Rss size={16} /> Suscribirse por RSS
        </a>
      </header>

      {!destacado ? (
        <p className="text-muted-foreground">Pronto publicaremos el primer artículo.</p>
      ) : (
        <>
          <Link
            href={`/blog/${destacado.slug}`}
            className="group block rounded-2xl border border-border bg-card p-8 md:p-10 mb-10 hover:border-primary/60 transition-colors"
          >
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <Badge>{destacado.category}</Badge>
              <time dateTime={destacado.date}>{formatDate(destacado.date)}</time>
              <span className="inline-flex items-center gap-1"><Clock size={14} /> {readingMinutes(destacado.body)} min</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">{destacado.title}</h2>
            <p className="mt-3 text-muted-foreground max-w-3xl">{destacado.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
              Leer artículo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resto.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Badge variant="secondary">{p.category}</Badge>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                </div>
                <h2 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                <span className="mt-auto pt-4 text-xs text-muted-foreground inline-flex items-center gap-1">
                  <Clock size={12} /> {readingMinutes(p.body)} min de lectura
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
