import './globals.css';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import Header from '../components/Header';
import CookieConsent from '@/components/CookieConsent';
import Footer from '../components/Footer';


import { TranslationProvider } from '../lib/useTranslation';
import translations from '../../public/translations.json';
import { headers } from 'next/headers';
import { getLanguage, getServerTranslation } from '../lib/i18n';

const fontSans = Manrope({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fontDisplay = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const fontMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e15',
};

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
        'https://github.com/EduGuate',
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
  ];

  return (
    <html lang={lang} suppressHydrationWarning className={`${fontSans.variable} ${fontDisplay.variable} ${fontMono.variable}`}>
      <body suppressHydrationWarning className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TranslationProvider initialLanguage={lang} initialTranslations={translations}>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />

        </TranslationProvider>
      </body>
    </html>
  );
}