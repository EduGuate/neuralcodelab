import { Metadata } from 'next';
import ThreeCXContent from './ThreeCXContent';

export const metadata: Metadata = {
  title: 'Sistema Telefónico 3CX | Neural Code Lab',
  description: 'Moderniza tu telefonía empresarial con 3CX. Central telefónica IP, videollamadas y chat unificado para empresas en Guatemala. Implementación y soporte especializado.',
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
    title: 'Sistema Telefónico 3CX | Neural Code Lab',
    description: 'Central telefónica IP con videollamadas y chat unificado. Implementación 3CX para empresas en Guatemala.',
    url: 'https://neuralcodelab.com/3cx',
    images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Sistema 3CX Neural Code Lab' }],
  },
};

export default function ThreeCXPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: 'Sistema 3CX', item: 'https://neuralcodelab.com/3cx' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ThreeCXContent />
    </>
  );
}
