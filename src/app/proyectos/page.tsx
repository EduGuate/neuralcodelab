import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Proyectos | Neural Code Lab',
  description: 'Explora 35+ proyectos de software libre: agrotecnología, educación bilingüe, preservación de idiomas mayas e IA para comunidades indígenas de Guatemala.',
  keywords: ['proyectos', 'portfolio', 'software libre', 'agrotecnología', 'educación bilingüe', 'IA cultural', 'open source', 'guatemala'],
  alternates: {
    canonical: 'https://neuralcodelab.com/proyectos',
    languages: {
      'es-GT': 'https://neuralcodelab.com/proyectos',
      'en-US': 'https://neuralcodelab.com/proyectos',
      'pt-BR': 'https://neuralcodelab.com/proyectos',
      'zh-CN': 'https://neuralcodelab.com/proyectos',
    },
  },
  openGraph: {
    title: 'Proyectos | Neural Code Lab',
    description: '35+ proyectos de software abierto y tecnología comunitaria con impacto cultural en Guatemala.',
    url: 'https://neuralcodelab.com/proyectos',
    images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Neural Code Lab Proyectos' }],
  },
};

export default function ProyectosPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: 'Proyectos', item: 'https://neuralcodelab.com/proyectos' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProjectsContent />
    </>
  );
}
