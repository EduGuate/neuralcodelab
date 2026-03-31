import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';
import { getLanguage, getServerTranslation } from '@/lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    title: t('seo.projects.title'),
    description: t('seo.projects.description'),
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
      title: t('seo.projects.title'),
      description: t('seo.projects.description'),
      url: 'https://neuralcodelab.com/proyectos',
      images: [{ url: '/og-image.png', width: 1200, height: 622, alt: 'Neural Code Lab Proyectos' }],
    },
  };
}

export default async function ProyectosPage() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t('header.home'), item: 'https://neuralcodelab.com' },
      { '@type': 'ListItem', position: 2, name: t('header.projects'), item: 'https://neuralcodelab.com/proyectos' },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProjectsContent />
    </>
  );
}
