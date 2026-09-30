import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TaxonomyPage from '@/components/blog/TaxonomyPage';
import { SITE_URL, TECNOLOGIAS, getPostsByTech } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return TECNOLOGIAS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = TECNOLOGIAS.find((x) => x.slug === slug);
  if (!t) return {};
  const title = `${t.nombre}: noticias y artículos | Neural Code Lab`;
  const url = `${SITE_URL}/blog/tecnologia/${slug}`;
  const vacia = getPostsByTech(slug).length === 0;
  return {
    title,
    description: t.descripcion,
    alternates: { canonical: url },
    openGraph: { title, description: t.descripcion, url, type: 'website', images: ['/og-image.png'] },
    robots: vacia ? { index: false, follow: true } : undefined,
  };
}

export default async function TecnologiaPage({ params }: Props) {
  const { slug } = await params;
  const t = TECNOLOGIAS.find((x) => x.slug === slug);
  if (!t) notFound();
  return <TaxonomyPage tipo="tecnologia" taxon={t} posts={getPostsByTech(slug)} />;
}
