import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


import Script from 'next/script';
import { TranslationProvider } from '../lib/useTranslation';
import translations from '../../public/translations.json';
import { headers } from 'next/headers';
import { getLanguage, getServerTranslation } from '../lib/i18n';

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  return {
    metadataBase: new URL('https://neuralcodelab.com'),
    title: t('seo.home.title'),
    description: t('seo.home.description'),
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
      title: t('seo.home.title'),
      description: t('seo.home.description'),
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
      locale: lang === 'es' ? 'es_ES' : lang === 'pt' ? 'pt_BR' : lang === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Neural Code Lab',
      description: t('seo.home.description'),
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
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://neuralcodelab.com/#organization',
      name: 'Neural Code Lab',
      url: 'https://neuralcodelab.com',
      logo: 'https://neuralcodelab.com/icon.png',
      description: t('footer.description'),
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
      name: t('home.features.agro.title'),
      description: t('home.features.agro.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Software Development'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('home.features.edu.title'),
      description: t('home.features.edu.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Educational Technology'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('home.features.ia.title'),
      description: t('home.features.ia.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Artificial Intelligence'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('home.features.preservation.title'),
      description: t('home.features.preservation.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      areaServed: 'Guatemala',
      serviceType: 'Digital Preservation'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('header.contactCenter'),
      description: t('contactCenter.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      url: 'https://neuralcodelab.com/contact-center',
      serviceType: 'AI Contact Center'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: t('threeCX.hero'),
      description: t('threeCX.description'),
      provider: { '@id': 'https://neuralcodelab.com/#organization' },
      url: 'https://neuralcodelab.com/3cx',
      serviceType: 'Business Telephony'
    }
  ];

  return (
    <html lang={lang} suppressHydrationWarning>
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

        <TranslationProvider initialLanguage={lang} initialTranslations={translations}>
          <Header />
          <main>{children}</main>
          <Footer />

        </TranslationProvider>
      </body>
    </html>
  );
}