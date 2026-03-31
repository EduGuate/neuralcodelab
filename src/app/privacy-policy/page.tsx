import { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.privacyPolicy.title'),
    description: t('seo.privacyPolicy.description'),
    alternates: {
      canonical: 'https://neuralcodelab.com/privacy-policy',
      languages: {
        'es-GT': 'https://neuralcodelab.com/privacy-policy',
        'en-US': 'https://neuralcodelab.com/privacy-policy',
        'pt-BR': 'https://neuralcodelab.com/privacy-policy',
        'zh-CN': 'https://neuralcodelab.com/privacy-policy',
      },
    },
    openGraph: {
      title: t('seo.privacyPolicy.title'),
      description: t('seo.privacyPolicy.description'),
      url: 'https://neuralcodelab.com/privacy-policy',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Privacy Policy Neural Code Lab' }],
    },
  };
}

export default async function PrivacyPolicyPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('policies.privacyTitle'), item: 'https://neuralcodelab.com/privacy-policy' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PrivacyPolicyContent />
    </>
  );
}
