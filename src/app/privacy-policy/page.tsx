import { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Neural Code Lab',
  description: 'Conoce cómo Neural Code Lab protege tu privacidad y maneja tus datos personales. Política de privacidad para todas nuestras aplicaciones y servicios digitales.',
  alternates: {
    canonical: 'https://neuralcodelab.com/privacy-policy',
  },
  openGraph: {
    title: 'Política de Privacidad | Neural Code Lab',
    description: 'Política de privacidad y manejo de datos de Neural Code Lab Guatemala.',
    url: 'https://neuralcodelab.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
