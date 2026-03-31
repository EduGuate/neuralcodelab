import { Metadata } from 'next';
import ContactContent from './ContactContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.contact.title'),
    description: t('seo.contact.description'),
    keywords: ['contacto', 'colaboración', 'software libre', 'proyectos comunitarios', 'guatemala', 'preservación cultural'],
    alternates: {
      canonical: 'https://neuralcodelab.com/contacto',
      languages: {
        'es-GT': 'https://neuralcodelab.com/contacto',
        'en-US': 'https://neuralcodelab.com/contacto',
        'pt-BR': 'https://neuralcodelab.com/contacto',
        'zh-CN': 'https://neuralcodelab.com/contacto',
      },
    },
    openGraph: {
      title: t('seo.contact.title'),
      description: t('seo.contact.description'),
      url: 'https://neuralcodelab.com/contacto',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Contacto Neural Code Lab' }],
    },
  };
}

export default async function ContactPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('header.contact'), item: 'https://neuralcodelab.com/contacto' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactContent />
    </>
  );
}
