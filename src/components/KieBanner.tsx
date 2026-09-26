import Image from 'next/image';
import { ArrowUpRight, Film, ImageIcon, Mic, Sparkles } from 'lucide-react';
import { KIE_AFFILIATE_URL } from '@/lib/affiliates';

const models = [
  { icon: Film, label: 'Veo 3.1 · Kling · Seedance' },
  { icon: ImageIcon, label: 'Nano Banana · Imagen' },
  { icon: Mic, label: 'ElevenLabs TTS' },
];

type KieBannerProps = {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  disclosure?: string;
  className?: string;
};

export default function KieBanner({
  badge = 'El motor detrás de cada video',
  title = 'Genera video con IA en',
  description = 'Los $0.60 de Veo 3.1 Lite del workflow se pagan en Kie.ai: una sola API para los mejores modelos de video, imagen y voz, pagando solo lo que usas.',
  cta = 'Crear cuenta en Kie.ai',
  disclosure = 'Enlace de afiliado: si te registras con él, Neural Code Lab recibe una comisión sin costo extra para ti.',
  className = 'pb-24',
}: KieBannerProps) {
  return (
    <section className={`relative max-w-6xl mx-auto px-6 ${className}`} aria-labelledby="kie-banner">
      <style>{`
        @keyframes kie-shine { 0% { transform: translateX(-120%) } 60%,100% { transform: translateX(220%) } }
        .kie-shine::after { content: ''; position: absolute; inset: 0; width: 40%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.35), transparent); animation: kie-shine 3.2s ease-in-out infinite }
        .kie-grad { background: linear-gradient(100deg, #00d4ff, #00c9a7 45%, #ffc93c); -webkit-background-clip: text; background-clip: text; color: transparent }
        @media (prefers-reduced-motion: reduce) { .kie-shine::after { animation: none } }
      `}</style>
      <a
        href={KIE_AFFILIATE_URL}
        target="_blank"
        rel="sponsored noopener"
        className="group relative block overflow-hidden rounded-3xl p-[1.5px] bg-gradient-to-r from-[#00d4ff] via-[#00c9a7] to-[#ffc93c] shadow-[0_0_60px_-20px_#00d4ff] transition hover:-translate-y-1"
      >
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-[#07101f]">
          <Image
            src="/img/kie-banner.webp"
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover object-right opacity-40 md:opacity-100 transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101f] via-[#07101f]/85 to-transparent md:via-[#07101f]/60" />

          <div className="relative px-8 py-10 md:px-12 md:py-14 md:max-w-[60%]">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ffc93c]/40 bg-[#ffc93c]/10 px-3 py-1 text-xs font-semibold text-[#ffc93c]">
              <Sparkles size={13} />
              {badge}
            </span>
            <h2 id="kie-banner" className="mb-3 text-3xl md:text-4xl font-bold text-white text-balance">
              {title} <span className="kie-grad">Kie.ai</span>
            </h2>
            <p className="mb-6 text-slate-300">{description}</p>
            <ul className="mb-8 flex flex-wrap gap-2">
              {models.map(({ icon: Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur">
                  <Icon className="h-4 w-4 text-[#00d4ff]" />
                  {label}
                </li>
              ))}
            </ul>
            <span className="kie-shine relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#00c9a7] px-7 text-base font-semibold text-[#07101f] shadow-[0_0_40px_-8px_#00d4ff]">
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
