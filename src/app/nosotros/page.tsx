import { Metadata } from 'next';
import NosotrosContent from './NosotrosContent';

export const metadata: Metadata = {
  title: 'Nosotros | Neural Code Lab - Software Libre y Tecnología Comunitaria',
  description: 'Conoce al equipo de Neural Code Lab. Desarrollamos software libre y soluciones tecnológicas adaptadas a las necesidades de comunidades en Guatemala.',
  keywords: ['nosotros', 'equipo', 'mision', 'vision', 'neural code lab', 'guatemala', 'software libre'],
  openGraph: {
    title: 'Nosotros | Neural Code Lab',
    description: 'Desarrollamos software libre y soluciones tecnológicas adaptadas a las necesidades de comunidades.',
  },
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
