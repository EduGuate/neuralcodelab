import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contacto | Neural Code Lab - Hablemos de tu Proyecto',
  description: '¿Necesitas una solución tecnológica? Contáctanos. Desarrollamos software a medida para comunidades y empresas en Guatemala.',
  keywords: ['contacto', 'presupuesto', 'cotizar', 'desarrollo a medida', 'consultoria', 'guatemala'],
  openGraph: {
    title: 'Contacto | Neural Code Lab',
    description: 'Hablemos de tu próximo proyecto de tecnología.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
