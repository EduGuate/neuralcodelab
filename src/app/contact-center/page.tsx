import { Metadata } from 'next';
import ContactCenterContent from './ContactCenterContent';

export const metadata: Metadata = {
  title: 'Contact Center IA | Neural Code Lab',
  description: 'Agentes de IA conversacional para atención al cliente 24/7. Integración con N8N, SIP trunk y soporte multiidioma. Automatiza tu contact center en Guatemala.',
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
    title: 'Contact Center IA | Neural Code Lab',
    description: 'Automatiza tu atención al cliente con agentes de IA conversacional e integración N8N. Neural Code Lab Guatemala.',
    url: 'https://neuralcodelab.com/contact-center',
    images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Contact Center IA Neural Code Lab' }],
  },
};

export default function ContactCenterPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact Center IA', item: 'https://neuralcodelab.com/contact-center' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactCenterContent />
    </>
  );
}
