import { Metadata } from 'next';
import ContactCenterContent from './ContactCenterContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.contactCenter.title'),
    description: t('seo.contactCenter.description'),
    keywords: ['contact center', 'IA conversacional', 'agentes IA', 'automatización', 'N8N', 'telefonía empresarial', 'guatemala'],
    alternates: {
      canonical: 'https://neuralcodelab.com/contact-center',
      languages: {
        'es-GT': 'https://neuralcodelab.com/contact-center',
        'en-US': 'https://neuralcodelab.com/contact-center',
        'pt-BR': 'https://neuralcodelab.com/contact-center',
        'zh-CN': 'https://neuralcodelab.com/contact-center',
      },
    },
    openGraph: {
      title: t('seo.contactCenter.title'),
      description: t('seo.contactCenter.description'),
      url: 'https://neuralcodelab.com/contact-center',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Contact Center IA Neural Code Lab' }],
    },
  };
}

export default async function ContactCenterPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('header.contactCenter'), item: 'https://neuralcodelab.com/contact-center' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactCenterContent />
    </>
  );
}
