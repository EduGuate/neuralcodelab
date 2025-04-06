import './globals.css';
import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidget from '../components/FloatingWidget';
import Script from 'next/script';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* HTML Meta Tags */}
        <title>Neuralcodelab</title>
        <meta name="description" content="Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://neuralcodelab.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Neuralcodelab" />
        <meta property="og:description" content="Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/f87521a2-e275-41d3-9767-b2bc2b966f82.png?token=PIrRf6I2TprmRfejLrKZBk5_Gi2liihaAfddQOmQVfE&height=622&width=1200&expires=33279968930" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="neuralcodelab.com" />
        <meta property="twitter:url" content="https://neuralcodelab.com/" />
        <meta name="twitter:title" content="Neuralcodelab" />
        <meta name="twitter:description" content="Plataformas digitales personalizadas con arquitecturas adaptadas a necesidades comunitarias" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/f87521a2-e275-41d3-9767-b2bc2b966f82.png?token=PIrRf6I2TprmRfejLrKZBk5_Gi2liihaAfddQOmQVfE&height=622&width=1200&expires=33279968930" />

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
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  );
}