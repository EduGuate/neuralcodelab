import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PostGrid from '@/components/blog/PostGrid';
import TaxonomyNav from '@/components/blog/TaxonomyNav';
import { SITE_URL, type BlogPost, type Taxon } from '@/lib/blog';

type Props = { tipo: 'categoria' | 'tecnologia'; taxon: Taxon; posts: BlogPost[] };

// Página de listado por categoría o por tecnología (también sirve como landing SEO).
export default function TaxonomyPage({ tipo, taxon, posts }: Props) {
  const url = `${SITE_URL}/blog/${tipo}/${taxon.slug}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: tipo === 'categoria' ? `${taxon.nombre} | Blog de Neural Code Lab` : `Artículos sobre ${taxon.nombre}`,
      description: taxon.descripcion,
      url,
      isPartOf: { '@type': 'Blog', url: `${SITE_URL}/blog` },
      hasPart: posts.slice(0, 20).map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: `${SITE_URL}/blog/${p.slug}` })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: taxon.nombre, item: url },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Migas de pan" className="text-sm text-muted-foreground mb-6">
        <Link href="/blog" className="inline-flex items-center gap-1 hover:text-foreground">
          <ArrowLeft size={14} /> Blog
        </Link>
      </nav>
      <header className="mb-10">
        <Badge variant="outline" className="mb-4">{tipo === 'categoria' ? 'Categoría' : 'Lenguaje / framework'}</Badge>
        <h1 className={`text-4xl md:text-5xl font-display font-bold tracking-tight ${tipo === 'tecnologia' ? 'font-mono' : ''}`}>
          {taxon.nombre}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{taxon.descripcion}</p>
        <p className="mt-2 text-sm text-muted-foreground">{posts.length} {posts.length === 1 ? 'artículo' : 'artículos'}</p>
      </header>
      <TaxonomyNav activa={{ tipo, slug: taxon.slug }} />
      <PostGrid posts={posts} />
    </div>
  );
}
