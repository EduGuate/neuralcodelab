import Image from 'next/image';
import type { CSSProperties } from 'react';
import { ArrowUpRight, Sparkles, type LucideIcon } from 'lucide-react';
import type { AffiliateTheme } from '@/lib/affiliates';

type Chip = { icon: LucideIcon; label: string };

type AffiliateBannerProps = {
  id: string;
  href: string;
  brand: string;
  image: string;
  imageAlt: string;
  theme: AffiliateTheme;
  chips: Chip[];
  badge: string;
  title: string;
  description: string;
  cta: string;
  disclosure: string;
  className?: string;
};

export default function AffiliateBanner({
  id, href, brand, image, imageAlt, theme, chips, badge, title, description, cta, disclosure, className = 'pb-24',
}: AffiliateBannerProps) {
  const vars = {
    '--af-a': theme.a,
    '--af-b': theme.b,
    '--af-c': theme.c,
    '--af-bg': theme.bg,
    '--af-cta': theme.ctaText,
  } as CSSProperties;

  return (
    <section className={`relative max-w-6xl mx-auto px-6 ${className}`} aria-labelledby={`${id}-banner`} style={vars}>
      <style>{`
        @keyframes af-shine { 0% { transform: translateX(-120%) } 60%,100% { transform: translateX(220%) } }
        .af-frame { background: linear-gradient(90deg, var(--af-a), var(--af-b), var(--af-c)); box-shadow: 0 0 60px -20px var(--af-a) }
        .af-card { background: var(--af-bg) }
        .af-fade { background: linear-gradient(90deg, var(--af-bg) 0%, color-mix(in srgb, var(--af-bg) 85%, transparent) 50%, transparent 100%) }
        @media (min-width: 768px) { .af-fade { background: linear-gradient(90deg, var(--af-bg) 0%, color-mix(in srgb, var(--af-bg) 60%, transparent) 50%, transparent 100%) } }
        .af-grad { background: linear-gradient(100deg, var(--af-a), var(--af-b) 45%, var(--af-c)); -webkit-background-clip: text; background-clip: text; color: transparent }
        .af-badge { color: var(--af-c); border-color: color-mix(in srgb, var(--af-c) 40%, transparent); background: color-mix(in srgb, var(--af-c) 10%, transparent) }
        .af-icon { color: var(--af-a) }
        .af-cta { color: var(--af-cta); background: linear-gradient(90deg, var(--af-a), var(--af-b)); box-shadow: 0 0 40px -8px var(--af-a) }
        .af-cta::after { content: ''; position: absolute; inset: 0; width: 40%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.35), transparent); animation: af-shine 3.2s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .af-cta::after { animation: none } }
      `}</style>
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener"
        className="af-frame group relative block overflow-hidden rounded-3xl p-[1.5px] transition hover:-translate-y-1"
      >
        <div className="af-card relative overflow-hidden rounded-[calc(1.5rem-1.5px)]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover object-right opacity-40 md:opacity-100 transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="af-fade absolute inset-0" />

          <div className="relative px-8 py-10 md:px-12 md:py-14 md:max-w-[60%]">
            <span className="af-badge mb-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold">
              <Sparkles size={13} />
              {badge}
            </span>
            <h2 id={`${id}-banner`} className="mb-3 text-3xl md:text-4xl font-bold text-white text-balance">
              {title} <span className="af-grad">{brand}</span>
            </h2>
            <p className="mb-6 text-slate-300">{description}</p>
            <ul className="mb-8 flex flex-wrap gap-2">
              {chips.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur">
                  <Icon className="af-icon h-4 w-4" />
                  {label}
                </li>
              ))}
            </ul>
            <span className="af-cta relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl px-7 text-base font-semibold">
              {cta}
              <ArrowUpRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
      <p className="mt-3 text-center text-xs text-muted-foreground">{disclosure}</p>
    </section>
  );
}
