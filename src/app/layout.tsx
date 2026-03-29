import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


import Script from 'next/script';
import { TranslationProvider } from '../lib/useTranslation';
import translations from '../../public/translations.json';
import { headers } from 'next/headers';

export const metadata: Metadata = {
  metadataBase: new URL('https://neuralcodelab.com'),
  title: 'Neural Code Lab | Software Libre & Tecnología Comunitaria',
  description: 'Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias. Impulsando el software libre y la tecnología accesible en Guatemala.',
  keywords: ['software libre', 'guatemala', 'tecnología comunitaria', 'desarrollo web', 'open source', 'neural code lab', 'educación tecnológica'],
  authors: [{ name: 'Neural Code Lab' }, { name: 'Iran Lewis' }],
  creator: 'Neural Code Lab',
  publisher: 'Neural Code Lab',
  alternates: {
    canonical: 'https://neuralcodelab.com',
    languages: {
      'es-GT': 'https://neuralcodelab.com',
      'en-US': 'https://neuralcodelab.com',
      'pt-BR': 'https://neuralcodelab.com',
      'zh-CN': 'https://neuralcodelab.com',
    },
  },
  openGraph: {
    title: 'Neural Code Lab | Software Libre & Tecnología Comunitaria',
    description: 'Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias.',
    url: 'https://neuralcodelab.com',
    siteName: 'Neural Code Lab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 622,
        alt: 'Neural Code Lab Preview',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neural Code Lab',
    description: 'Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || 'es';
  const initialLanguage = acceptLanguage.startsWith('en') ? 'en' :
    acceptLanguage.startsWith('pt') ? 'pt' :
      acceptLanguage.startsWith('zh') ? 'zh' : 'es';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://neuralcodelab.com/#organization',
      name: 'Neural Code Lab',
      url: 'https://neuralcodelab.com',
      logo: 'https://neuralcodelab.com/icon.png',
      description: 'Organización dedicada a crear software libre que beneficie a las comunidades indígenas y tecnológicas.',
      sameAs: [
        'https://github.com/neuralcodelab',
        'https://www.linkedin.com/in/devlewiso'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://neuralcodelab.com/#website',
      url: 'https://neuralcodelab.com',
      name: 'Neural Code Lab',
      publisher: { '@id': 'https://neuralcodelab.com/#organization' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Iran Lewis',
      jobTitle: 'Founder & Lead Developer',
      url: 'https://neuralcodelab.com/nosotros',
      worksFor: { '@id': 'https://neuralcodelab.com/#organization' },
      sameAs: [
        'https://github.com/devlewiso',
        'https://www.linkedin.com/in/devlewiso'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Agrotecnología Maya',
      description: 'Sistemas inteligentes para agricultura sostenible basados en conocimientos ancestrales de Guatemala.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Software Development'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Educación Bilingüe Digital',
      description: 'Plataformas educativas que preservan lenguas mayas con tecnología avanzada.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Educational Technology'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'IA Culturalmente Adaptada',
      description: 'Inteligencia artificial que incorpora cosmovisión y valores culturales indígenas.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Artificial Intelligence'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Preservación Digital',
      description: 'Digitalización segura de conocimientos tradicionales y patrimonio cultural.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Digital Preservation'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Contact Center IA',
      description: 'Agentes de IA conversacional para atención al cliente 24/7 con integración N8N y telefonía SIP.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      url: 'https://neuralcodelab.com/contact-center',
      serviceType: 'AI Contact Center'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Sistema Telefónico 3CX',
      description: 'Central telefónica IP empresarial con videollamadas y chat unificado.',
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      url: 'https://neuralcodelab.com/3cx',
      serviceType: 'Business Telephony'
    }
  ];

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L2S3KDPQ94"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2S3KDPQ94');
          `}
        </Script>

        <TranslationProvider initialLanguage={initialLanguage as any} initialTranslations={translations}>
          <Header />
          <main>{children}</main>
          <Footer />

        </TranslationProvider>
      </body>
    </html>
  );
}