import { Metadata } from 'next';
import NosotrosContent from './NosotrosContent';

export const metadata: Metadata = {
  title: 'Nosotros | Neural Code Lab',
  description: 'Conoce al equipo de Neural Code Lab. Desarrollamos software libre y soluciones tecnológicas para comunidades indígenas en Guatemala. Misión, visión y valores.',
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
    title: 'Nosotros | Neural Code Lab',
    description: 'Desarrollamos software libre y soluciones tecnológicas adaptadas a las necesidades de comunidades indígenas en Guatemala.',
    url: 'https://neuralcodelab.com/nosotros',
    images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Neural Code Lab' }],
  },
};

export default function NosotrosPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: 'Nosotros', item: 'https://neuralcodelab.com/nosotros' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <NosotrosContent />
    </>
  );
}
