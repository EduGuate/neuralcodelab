import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Script from 'next/script';
import { TranslationProvider } from '../lib/useTranslation';

export const metadata: Metadata = {
  metadataBase: new URL('https://neuralcodelab.com'),
  title: 'Neural Code Lab | Software Libre & Tecnología Comunitaria',
  description: 'Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias. Impulsando el software libre y la tecnología accesible en Guatemala.',
  keywords: ['software libre', 'guatemala', 'tecnología comunitaria', 'desarrollo web', 'open source', 'neural code lab', 'educación tecnológica'],
  authors: [{ name: 'Neural Code Lab' }, { name: 'Iran Lewis' }],
  creator: 'Neural Code Lab',
  publisher: 'Neural Code Lab',
  openGraph: {
    title: 'Neural Code Lab | Software Libre & Tecnología Comunitaria',
    description: 'Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias.',
    url: 'https://neuralcodelab.com',
    siteName: 'Neural Code Lab',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/f87521a2-e275-41d3-9767-b2bc2b966f82.png?token=PIrRf6I2TprmRfejLrKZBk5_Gi2liihaAfddQOmQVfE&height=622&width=1200&expires=33279968930',
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
    images: ['https://opengraph.b-cdn.net/production/images/f87521a2-e275-41d3-9767-b2bc2b966f82.png?token=PIrRf6I2TprmRfejLrKZBk5_Gi2liihaAfddQOmQVfE&height=622&width=1200&expires=33279968930'],
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

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Neural Code Lab',
    url: 'https://neuralcodelab.com',
    description: 'Organización dedicada a crear software libre que beneficie a las comunidades.',
    sameAs: [
      'https://github.com/neuralcodelab',
      'https://www.linkedin.com/in/devlewiso'
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
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

        <TranslationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}