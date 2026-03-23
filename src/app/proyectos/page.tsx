import { Metadata } from 'next';
import ProjectsContent from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Proyectos | Neural Code Lab - Soluciones de Software Abierto',
  description: 'Explora nuestros proyectos de software libre. Desarrollo web, herramientas comunitarias, IA y más tecnología accesible para Guatemala.',
  keywords: ['proyectos', 'portfolio', 'casos de exito', 'desarrollo web', 'open source', 'guatemala'],
  openGraph: {
    title: 'Proyectos | Neural Code Lab',
    description: 'Soluciones de software abierto y tecnología comunitaria.',
  },
};

export default function ProyectosPage() {
  return <ProjectsContent />;
}
