'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { useTranslation } from '@/lib/useTranslation';
import { legalUi, toLegalLang } from '@/content/legal';

const GA_ID = 'G-L2S3KDPQ94';
const STORAGE_KEY = 'ncl_consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const OPEN_CONSENT_EVENT = 'ncl:open-consent';

type Choice = 'granted' | 'denied';

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const { value, ts } = JSON.parse(raw) as { value: Choice; ts: number };
    if (Date.now() - ts > MAX_AGE_MS) return null;
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(value: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, ts: Date.now() }));
  } catch {
    // Sin almacenamiento el aviso volverá a salir en la próxima visita.
  }
}

function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').map((c) => c.split('=')[0].trim()).filter((n) => n.startsWith('_ga')).forEach((name) => {
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

export default function CookieConsent() {
  const { language } = useTranslation();
  const ui = legalUi[toLegalLang(language)];
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = readChoice();
    setChoice(saved);
    setOpen(saved === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const decide = (value: Choice) => {
    saveChoice(value);
    const w = window as unknown as Record<string, unknown> & { gtag?: (...args: unknown[]) => void };
    w[`ga-disable-${GA_ID}`] = value === 'denied';
    w.gtag?.('consent', 'update', { analytics_storage: value });
    if (value === 'denied') clearAnalyticsCookies();
    setChoice(value);
    setOpen(false);
  };

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window['ga-disable-${GA_ID}'] = false;
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-border bg-card/95 p-5 shadow-2xl backdrop-blur md:inset-x-auto md:left-6"
        >
          <h2 id="cookie-consent-title" className="mb-2 font-semibold text-foreground">{ui.consentTitle}</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {ui.consentText}{' '}
            <Link href="/cookie-policy" className="text-primary underline-offset-2 hover:underline">{ui.more}</Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => decide('denied')}
              className="h-10 flex-1 rounded-lg border border-border px-4 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              {ui.reject}
            </button>
            <button
              type="button"
              onClick={() => decide('granted')}
              className="h-10 flex-1 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {ui.accept}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
