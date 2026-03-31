import { Metadata } from 'next';
import NosotrosContent from './NosotrosContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.about.title'),
    description: t('seo.about.description'),
    keywords: ['nosotros', 'equipo', 'mision', 'vision', 'neural code lab', 'guatemala', 'software libre', 'comunidades indígenas'],
    alternates: {
      canonical: 'https://neuralcodelab.com/nosotros',
      languages: {
        'es-GT': 'https://neuralcodelab.com/nosotros',
        'en-US': 'https://neuralcodelab.com/nosotros',
        'pt-BR': 'https://neuralcodelab.com/nosotros',
        'zh-CN': 'https://neuralcodelab.com/nosotros',
      },
    },
    openGraph: {
      title: t('seo.about.title'),
      description: t('seo.about.description'),
      url: 'https://neuralcodelab.com/nosotros',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Neural Code Lab' }],
    },
  };
}

export default async function NosotrosPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('header.about'), item: 'https://neuralcodelab.com/nosotros' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <NosotrosContent />
    </>
  );
}
