import { Metadata } from 'next';
import ThreeCXContent from './ThreeCXContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.threeCX.title'),
    description: t('seo.threeCX.description'),
    keywords: ['3CX', 'central telefónica', 'telefonía IP', 'PBX', 'videollamadas', 'empresas', 'guatemala'],
    alternates: {
      canonical: 'https://neuralcodelab.com/3cx',
      languages: {
        'es-GT': 'https://neuralcodelab.com/3cx',
        'en-US': 'https://neuralcodelab.com/3cx',
        'pt-BR': 'https://neuralcodelab.com/3cx',
        'zh-CN': 'https://neuralcodelab.com/3cx',
      },
    },
    openGraph: {
      title: t('seo.threeCX.title'),
      description: t('seo.threeCX.description'),
      url: 'https://neuralcodelab.com/3cx',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Sistema 3CX Neural Code Lab' }],
    },
  };
}

export default async function ThreeCXPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('threeCX.badge'), item: 'https://neuralcodelab.com/3cx' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ThreeCXContent />
    </>
  );
}
