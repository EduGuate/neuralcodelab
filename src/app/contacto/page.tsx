import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contacto | Neural Code Lab',
  description: '¿Tienes un proyecto comunitario o tecnológico? Hablemos. Creamos herramientas digitales para preservar saberes y empoderar comunidades en Guatemala.',
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
    title: 'Contacto | Neural Code Lab',
    description: 'Hablemos de tu próximo proyecto de tecnología con propósito. Neural Code Lab — Guatemala.',
    url: 'https://neuralcodelab.com/contacto',
    images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Contacto Neural Code Lab' }],
  },
};

export default function ContactPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://neuralcodelab.com/contacto' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ContactContent />
    </>
  );
}
