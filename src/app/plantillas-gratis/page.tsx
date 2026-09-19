import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { proyectos } from '@/content/proyectos';
import { getLanguage, getServerTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const URL = 'https://neuralcodelab.com/plantillas-gratis';
// Las dos plantillas con demo pública y captura propia
const FEATURED_IDS = ['cloudnest-template', 'pizza-theme'];

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.templates.title'),
    description: t('seo.templates.description'),
    keywords: [
      'plantillas web gratis', 'templates gratis', 'plantillas html gratis', 'plantillas bootstrap gratis',
      'landing page gratis', 'plantilla restaurante', 'plantilla hosting', 'código abierto', 'licencia MIT',
      'guatemala', 'free website templates', 'free bootstrap themes', 'open source templates',
    ],
    alternates: { canonical: URL },
    openGraph: {
      title: t('seo.templates.title'),
      description: t('seo.templates.description'),
      url: URL,
      type: 'website',
      images: [{ url: '/img/cloudnest-template.png', width: 1024, height: 576, alt: 'CloudNest - free hosting landing page template' }],
    },
  };
}

export default async function PlantillasGratisPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const templates = proyectos.filter(p => p.category === 'templates');
  const featured = FEATURED_IDS.map(id => templates.find(p => p.id === id)).filter(Boolean) as typeof templates;
  const others = templates.filter(p => !FEATURED_IDS.includes(p.id));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
        { '@type': 'ListItem', position: 2, name: t('header.projects'), item: 'https://neuralcodelab.com/proyectos' },
        { '@type': 'ListItem', position: 3, name: t('seo.templates.breadcrumb'), item: URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t('seo.templates.heading'),
      description: t('seo.templates.description'),
      url: URL,
      inLanguage: lang,
      isPartOf: { '@type': 'WebSite', name: 'Neural Code Lab', url: 'https://neuralcodelab.com' },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: templates.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'SoftwareSourceCode',
            name: p.title,
            description: t(p.descriptionKey),
            codeRepository: p.githubUrl,
            license: 'https://opensource.org/licenses/MIT',
            ...(p.liveUrl ? { url: p.liveUrl } : {}),
          },
        })),
      },
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          {t('seo.templates.heading')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('seo.templates.intro')}</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12" aria-labelledby="featured-templates">
        <h2 id="featured-templates" className="text-2xl font-bold text-foreground mb-6">{t('seo.templates.featured')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map(p => (
            <Card key={p.id} className="overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-muted">
                <Image
                  src={p.imageUrl || '/img/logo.png'}
                  alt={`${p.title} - ${t('seo.templates.heading')}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <CardContent className="flex-1 pt-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground mb-4">{t(p.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
              <CardFooter className="gap-3">
                {p.liveUrl && (
                  <Button asChild size="sm">
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4 mr-2" />{t('seo.templates.demo')}</a>
                  </Button>
                )}
                {p.githubUrl && (
                  <Button asChild size="sm" variant="outline">
                    <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4 mr-2" />{t('seo.templates.code')}</a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16" aria-labelledby="more-templates">
        <h2 id="more-templates" className="text-2xl font-bold text-foreground mb-6">{t('seo.templates.more')}</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map(p => (
            <li key={p.id} className="rounded-xl border p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t(p.descriptionKey)}</p>
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4">
                {t('seo.templates.code')}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center mt-10">
          <Link href="/proyectos" className="text-primary font-semibold underline underline-offset-4">{t('seo.templates.back')}</Link>
        </p>
      </section>
    </main>
  );
}
