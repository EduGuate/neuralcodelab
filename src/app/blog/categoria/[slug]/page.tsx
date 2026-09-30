import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxonomyPage from '@/components/blog/TaxonomyPage';
import { CATEGORIAS, SITE_URL, getPostsByCategory } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

// Todas las categorías tienen página (aunque aún no tengan posts) para que los enlaces nunca den 404.
export function generateStaticParams() {
  return CATEGORIAS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = CATEGORIAS.find((x) => x.slug === slug);
  if (!c) return {};
  const title = `${c.nombre} | Blog de Neural Code Lab`;
  const url = `${SITE_URL}/blog/categoria/${slug}`;
  const vacia = getPostsByCategory(slug).length === 0;
  return {
    title,
    description: c.descripcion,
    alternates: { canonical: url },
    openGraph: { title, description: c.descripcion, url, type: 'website', images: ['/og-image.png'] },
    // Una página sin artículos no aporta nada a Google: se indexa cuando tenga contenido.
    robots: vacia ? { index: false, follow: true } : undefined,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const c = CATEGORIAS.find((x) => x.slug === slug);
  if (!c) notFound();
  return <TaxonomyPage tipo="categoria" taxon={c} posts={getPostsByCategory(slug)} />;
}
