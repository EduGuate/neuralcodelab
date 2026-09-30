import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import KieBanner from '@/components/KieBanner';
import { SITE_URL, categoriaDe, formatDate, getAllPosts, getPost, readingMinutes, renderPost, tecnologiaDe } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = post.seoTitle || post.title;
  const image = post.image || '/og-image.png';
  return {
    title,
    description: post.description,
    keywords: [post.keyword, ...post.keywords].filter(Boolean),
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description: post.description,
      url,
      siteName: 'Neural Code Lab',
      locale: 'es_ES',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      section: post.category,
      tags: post.keywords,
      images: [{ url: image, alt: post.imageAlt || post.title }],
    },
    twitter: { card: 'summary_large_image', title, description: post.description, images: [image] },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { html, headings } = renderPost(post.body);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const minutes = readingMinutes(post.body);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, puntos: p.tecnologias.filter((t) => post.tecnologias.includes(t)).length * 2 + Number(p.category === post.category) }))
    .sort((a, b) => b.puntos - a.puntos)
    .map(({ p }) => p)
    .slice(0, 3);

  const jsonLd: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: `${SITE_URL}${post.image || '/og-image.png'}`,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: { '@type': 'Organization', name: post.author, url: SITE_URL },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      keywords: [post.keyword, ...post.keywords, ...post.tecnologias].filter(Boolean).join(', '),
      articleSection: post.category,
      inLanguage: 'es',
      wordCount: post.body.split(/\s+/).filter(Boolean).length,
      citation: post.sources.map((s) => s.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (post.faq.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }

  return (
    <article className="max-w-6xl mx-auto px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Migas de pan" className="text-sm text-muted-foreground mb-8">
        <Link href="/blog" className="inline-flex items-center gap-1 hover:text-foreground">
          <ArrowLeft size={14} /> Blog
        </Link>
      </nav>

      <header className="max-w-3xl mb-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-5">
          <Link href={`/blog/categoria/${categoriaDe(post.category).slug}`}><Badge>{post.category}</Badge></Link>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1"><Clock size={14} /> {minutes} min de lectura</span>
        </div>
        {post.tecnologias.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tecnologias.map((t) => (
              <Link
                key={t}
                href={`/blog/tecnologia/${tecnologiaDe(t)?.slug}`}
                className="rounded-md border border-border px-2 py-0.5 text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/60"
              >
                {t}
              </Link>
            ))}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.description}</p>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:scroll-mt-24 prose-a:text-primary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {post.faq.length > 0 && (
            <section className="mt-14" aria-labelledby="faq">
              <h2 id="faq" className="text-2xl font-display font-bold mb-6">Preguntas frecuentes</h2>
              <div className="space-y-3">
                {post.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-semibold list-none flex justify-between gap-4">
                      {f.q}
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {post.sources.length > 0 && (
            <section className="mt-12" aria-labelledby="fuentes">
              <h2 id="fuentes" className="text-xl font-display font-bold mb-4">Fuentes</h2>
              <ul className="space-y-2 text-sm">
                {post.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-start gap-2 text-muted-foreground hover:text-primary">
                      <ExternalLink size={14} className="mt-1 flex-shrink-0" /> {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-14">
            <KieBanner
              badge="Herramienta recomendada"
              title="Crea contenido con IA en"
              description="Video, imagen y voz con los mejores modelos (Veo, Kling, Nano Banana, ElevenLabs) en una sola API, pagando solo lo que usas."
            />
          </div>
        </div>

        <aside className="hidden lg:block">
          {headings.length > 1 && (
            <nav aria-label="Contenido del artículo" className="sticky top-24 rounded-2xl border border-border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">En este artículo</p>
              <ol className="space-y-2 text-sm">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-muted-foreground hover:text-foreground">{h.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border pt-12" aria-labelledby="relacionados">
          <h2 id="relacionados" className="text-2xl font-display font-bold mb-6">Sigue leyendo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors">
                <Badge variant="secondary" className="mb-3">{p.category}</Badge>
                <h3 className="font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
