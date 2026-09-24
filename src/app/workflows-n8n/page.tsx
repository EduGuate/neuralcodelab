import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Download, FileJson, Sparkles, Clock, DollarSign, Zap, Youtube, Bot, ShieldCheck,
  Film, Mic, Captions, Upload, Database, Shuffle, CheckCircle2, ArrowRight, Terminal,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const URL = 'https://neuralcodelab.com/workflows-n8n';
const ZIP = '/workflows/wild-wonders-v8.zip';
const JSON_FILE = '/workflows/wild-wonders-v8.json';

const TITLE = 'Workflow n8n gratis: YouTube Shorts con Veo 3.1 Lite por ~$0.61 | Neural Code Lab';
const DESCRIPTION =
  'Descarga gratis Wild Wonders v8, un workflow de n8n con 4 tomas de Veo 3.1 Lite, guion Kimi K3, voz Gemini TTS y subtítulos ffmpeg. Publica en YouTube y envía a TikTok. Costo documentado: ~$0.61 por video.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'workflow n8n gratis', 'n8n youtube shorts', 'automatizar youtube shorts', 'n8n inteligencia artificial',
    'veo 3.1 lite', 'kie.ai', 'kimi k3', 'tiktok', 'gemini tts', 'ffmpeg subtítulos', 'canal faceless', 'n8n plantilla',
    'free n8n workflow', 'ai youtube automation',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'website',
    images: [
      { url: '/img/wild-wonders-v8-canvas.jpg', width: 2470, height: 1612, alt: 'Workflow de n8n Wild Wonders v8' },
      { url: '/img/wild-wonders-poster.jpg', width: 540, height: 960, alt: 'Ejemplo de una versión anterior de Wild Wonders: kagú' },
    ],
  },
};

const stats = [
  { icon: DollarSign, value: '~$0.61', label: 'por video, documentado' },
  { icon: Clock, value: '11 min 24 s', label: 'última ejecución completa' },
  { icon: Film, value: '720×1280', label: '28 s · vertical nativo' },
  { icon: Zap, value: '39 nodos', label: 'flujo completo · sin activar' },
];

const pipeline = [
  { icon: Shuffle, title: 'Brief al azar', text: 'Categoría, tipo de historia y región sin repetir lo reciente.' },
  { icon: Bot, title: 'Director de cine', text: 'Kimi K3 crea el guion y un storyboard de 4 tomas. Nemotron 3 Super queda como respaldo.' },
  { icon: ShieldCheck, title: 'Anti-repetición', text: 'Si la especie o su género ya salió, corta antes de gastar un centavo.' },
  { icon: Film, title: 'Video con Veo Lite', text: '4 clips de 8 s a 720p con Veo 3.1 Lite en Kie.ai. Se usan 7 s de cada toma.' },
  { icon: Mic, title: 'Voz de documental', text: 'Gemini 2.5 Pro TTS con la voz Charon, por ~$0.01.' },
  { icon: Captions, title: 'Montaje + subtítulos', text: 'ffmpeg une las tomas, añade la narración y quema subtítulos. El montaje descarta el audio ambiente.' },
  { icon: Upload, title: 'YouTube + TikTok', text: 'Publica en YouTube y registra el ID. TikTok recibe un envío privado o un borrador según la app.' },
];

const included = [
  { icon: FileJson, title: 'wild-wonders-v8.json', text: '39 nodos: importa el flujo y conecta tus credenciales y tabla.' },
  { icon: Terminal, title: 'tools/burn.js + tiktok_post.js', text: 'Montaje con subtítulos y envío a TikTok; sin tokens ni credenciales.' },
  { icon: Database, title: 'docker-compose.yml', text: 'n8n configurado con Execute Command y la carpeta de videos.' },
  { icon: CheckCircle2, title: 'README paso a paso', text: 'Credenciales, tabla, ffmpeg, TikTok y configuración de la programación.' },
];

const costs = [
  ['Veo 3.1 Lite · 4 clips de 8 s', '$0.60'],
  ['Voz Gemini 2.5 Pro TTS', '~$0.01'],
  ['Servidor, guion y otros servicios', 'No incluidos'],
];

const steps = [
  { title: 'Descarga y descomprime', text: 'Baja el .zip y prepara ffmpeg, ffprobe y la fuente Liberation Sans siguiendo el README.' },
  { title: 'Levanta n8n', text: 'docker compose up -d y abre localhost:5678.' },
  { title: 'Crea la Data Table', text: 'wild_wonders_historial, con las columnas que indica el README.' },
  { title: 'Importa y conecta', text: 'Importa el JSON, conecta Kie.ai, Ollama, OpenRouter y YouTube, y selecciona tu tabla. Configura TikTok si lo vas a usar.' },
  { title: 'Execute workflow', text: 'La ejecución registrada tardó 11 min 24 s. Revisa el resultado y activa el horario cuando estés listo.' },
];

const faqs = [
  { q: '¿De verdad es gratis?', a: 'Sí. El workflow, el script y la guía son gratis y con licencia MIT. El flujo documenta ~$0.61 por video en Kie.ai; aparte van tu servidor y el consumo del modelo de guion. El costo puede variar.' },
  { q: '¿Necesito saber programar?', a: 'Necesitas configurar Docker, ffmpeg, una Data Table y las credenciales de cada servicio. La guía explica la instalación; TikTok además requiere tu app y autorización OAuth.' },
  { q: '¿Sirve para otro tema que no sean animales?', a: 'Sí. El esqueleto sirve para datos curiosos, historia, motos, cocina, lo que quieras. Cambias las categorías y el system prompt del agente.' },
  { q: '¿TikTok publica automáticamente?', a: 'La última ejecución terminó con SEND_TO_USER_INBOX: un borrador que se completa desde TikTok. El script intenta publicación privada y, si TikTok rechaza la app por no estar auditada, usa el envío a la bandeja. No garantiza publicación pública automática.' },
  { q: '¿Funciona con n8n Cloud?', a: 'El montaje usa ffmpeg con el nodo Execute Command, así que necesitas n8n self-hosted (Docker). El docker-compose incluido ya viene listo.' },
];

export default function WorkflowsN8nPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: 'Wild Wonders v8 · Veo 3.1 Lite → YouTube y TikTok',
    description: DESCRIPTION,
    url: URL,
    programmingLanguage: 'n8n workflow (JSON)',
    license: 'https://opensource.org/licenses/MIT',
    author: { '@type': 'Organization', name: 'Neural Code Lab', url: 'https://neuralcodelab.com' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <style>{`
        @keyframes ww-float { 0%,100% { transform: translateY(0) rotate(-2deg) } 50% { transform: translateY(-14px) rotate(-1deg) } }
        @keyframes ww-blob { 0%,100% { transform: translate(0,0) scale(1) } 33% { transform: translate(40px,-30px) scale(1.1) } 66% { transform: translate(-30px,20px) scale(.95) } }
        @keyframes ww-flow { to { background-position: 200% 0 } }
        @keyframes ww-shine { 0% { transform: translateX(-120%) } 60%,100% { transform: translateX(220%) } }
        @keyframes ww-rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .ww-float { animation: ww-float 7s ease-in-out infinite }
        .ww-blob { animation: ww-blob 18s ease-in-out infinite }
        .ww-flow { background-size: 200% 100%; animation: ww-flow 3s linear infinite }
        .ww-shine::after { content: ''; position: absolute; inset: 0; width: 40%; background: linear-gradient(100deg, transparent, rgba(255,255,255,.35), transparent); animation: ww-shine 3.2s ease-in-out infinite }
        .ww-rise { animation: ww-rise .8s cubic-bezier(.2,.7,.2,1) both }
        .ww-grad { background: linear-gradient(100deg, #00d4ff, #00c9a7 45%, #ffc93c); -webkit-background-clip: text; background-clip: text; color: transparent }
        @media (prefers-reduced-motion: reduce) { .ww-float, .ww-blob, .ww-flow, .ww-shine::after, .ww-rise { animation: none } }
      `}</style>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0">
          <div className="ww-blob absolute -top-32 -left-24 h-[460px] w-[460px] rounded-full bg-[#00d4ff]/20 blur-[110px]" />
          <div className="ww-blob absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-[#00c9a7]/20 blur-[110px]" style={{ animationDelay: '-6s' }} />
          <div className="ww-blob absolute bottom-[-160px] left-1/3 h-[380px] w-[380px] rounded-full bg-[#ffc93c]/10 blur-[120px]" style={{ animationDelay: '-12s' }} />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div className="ww-rise">
            <Badge variant="secondary" className="mb-6 gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold border border-primary/40 bg-primary/10 text-primary">
              <Youtube size={14} />
              Regalo para los alumnos del canal · 100% gratis
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-balance">
              Tu canal de Shorts <span className="ww-grad">en piloto automático</span> por ~$0.61 el video
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              <strong className="text-foreground">Wild Wonders v8</strong> es el workflow de n8n que uso en mi canal. La IA elige el animal,
              crea un storyboard de cuatro tomas con Veo 3.1 Lite, añade voz de documental y subtítulos y publica en YouTube.
              También envía el video a TikTok; la última ejecución lo dejó como borrador.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="relative overflow-hidden ww-shine h-12 px-7 text-base font-semibold bg-gradient-to-r from-[#00d4ff] to-[#00c9a7] text-[#07101f] hover:opacity-95 shadow-[0_0_40px_-8px_#00d4ff]">
                <a href={ZIP} download><Download className="mr-2 h-5 w-5" />Descargar gratis (.zip)</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                <a href={JSON_FILE} download><FileJson className="mr-2 h-5 w-5" />Solo el JSON</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Sin registro · Licencia MIT · Guía en español · Video del teléfono: ejemplo de la versión anterior</p>
          </div>

          {/* Phone mockup */}
          <div className="relative mx-auto ww-rise" style={{ animationDelay: '.15s' }}>
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#00d4ff]/40 via-[#00c9a7]/25 to-[#ffc93c]/30 blur-3xl" />
            <div className="ww-float relative w-[260px] sm:w-[290px] rounded-[2.6rem] p-[3px] bg-gradient-to-br from-[#00d4ff] via-[#00c9a7] to-[#ffc93c] shadow-2xl">
              <div className="rounded-[2.45rem] bg-black p-2.5">
                <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem]">
                  <video
                    src="/img/wild-wonders-demo.mp4"
                    poster="/img/wild-wonders-poster.jpg"
                    autoPlay muted loop playsInline preload="metadata"
                    className="h-full w-full object-cover"
                    aria-label="Ejemplo de una versión anterior de Wild Wonders: el kagú de Nueva Caledonia. Se conserva como referencia visual."
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    Hecho 100% por el workflow
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-10 bottom-16 hidden sm:flex items-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur">
              <DollarSign className="h-5 w-5 text-[#ffc93c]" />
              <div className="leading-tight"><div className="font-bold">~$0.61</div><div className="text-xs text-muted-foreground">flujo actual / video</div></div>
            </div>
            <div className="absolute -right-8 top-16 hidden sm:flex items-center gap-2 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur">
              <Clock className="h-5 w-5 text-primary" />
              <div className="leading-tight"><div className="font-bold">11 min 24 s</div><div className="text-xs text-muted-foreground">última ejecución</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Canvas showcase */}
      <section className="relative max-w-6xl mx-auto px-6 pb-16" aria-labelledby="canvas">
        <h2 id="canvas" className="sr-only">El workflow por dentro</h2>
        <div className="ww-rise relative" style={{ animationDelay: '.3s' }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-[#00d4ff]/30 via-[#00c9a7]/20 to-[#ffc93c]/30 blur-2xl" />
          <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-r from-[#00d4ff] via-[#00c9a7] to-[#ffc93c] shadow-2xl">
            <div className="overflow-hidden rounded-[calc(1rem-1.5px)] bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 truncate text-xs text-muted-foreground font-mono">n8n · Wild Wonders v8 · Veo 3.1 Lite → YouTube y TikTok</span>
                <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#28c840]/15 px-2.5 py-0.5 text-[11px] font-semibold text-[#28c840]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] animate-pulse" />Ejecución verificada
                </span>
              </div>
              <div className="overflow-x-auto">
                <Image
                  src="/img/wild-wonders-v8-canvas.webp"
                  alt="Canvas real de Wild Wonders v8: 39 nodos, storyboard, Veo 3.1 Lite, voz, subtítulos, YouTube y TikTok"
                  width={2470}
                  height={1612}
                  priority
                  className="min-w-[720px] w-full h-auto"
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Canvas del workflow actual. El JSON descargable conserva el flujo, sin credenciales ni IDs de tu instalación.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="group relative rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/50">
              <Icon className="h-5 w-5 text-primary mb-3" />
              <div className="text-2xl md:text-3xl font-bold">{value}</div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24" aria-labelledby="pipeline">
        <div className="text-center mb-12">
          <h2 id="pipeline" className="text-3xl md:text-4xl font-bold mb-4">Así trabaja mientras duermes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Siete etapas y 39 nodos. Horario configurado: lunes a viernes a las 10:00 (Guatemala). Actualmente está inactivo; puedes ejecutarlo manualmente o activarlo después de configurarlo.</p>
        </div>
        <div className="relative">
          <div className="ww-flow absolute left-[27px] top-4 bottom-4 w-[2px] md:left-0 md:right-0 md:top-[27px] md:bottom-auto md:h-[2px] md:w-auto bg-gradient-to-r from-transparent via-primary to-transparent" style={{ backgroundImage: 'linear-gradient(90deg, transparent, #00d4ff, #00c9a7, #ffc93c, transparent)' }} />
          <ol className="relative grid gap-6 md:grid-cols-7 md:gap-3">
            {pipeline.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex md:flex-col items-start md:items-center gap-4 md:gap-3 md:text-center">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-background shadow-[0_0_24px_-6px_#00d4ff]">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#ffc93c] text-[11px] font-bold text-[#07101f]">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Included + costs */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-card/60 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Qué trae el .zip</h2>
          <p className="text-muted-foreground mb-6">El flujo y sus scripts, con una guía para configurar tu propia instalación.</p>
          <ul className="space-y-4">
            {included.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                <div><div className="font-mono text-sm font-semibold">{title}</div><div className="text-sm text-muted-foreground">{text}</div></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#00d4ff]/70 via-[#00c9a7]/40 to-[#ffc93c]/70">
          <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-card p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Cuánto cuesta de verdad</h2>
            <p className="text-muted-foreground mb-6">Referencia anotada en el workflow el 23/09/2026: $0.15 por clip y ~$0.01 de voz. No es una tarifa garantizada.</p>
            <dl className="divide-y divide-border">
              {costs.map(([k, v]) => (
                <div key={k} className="flex justify-between py-3"><dt className="text-muted-foreground">{k}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
              <div className="flex justify-between items-baseline pt-4"><dt className="font-semibold">Total de video + voz</dt><dd className="text-4xl font-bold ww-grad">~$0.61</dd></div>
            </dl>
            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-muted/60 p-4"><div className="text-xl font-bold">~$13.42</div><div className="text-xs text-muted-foreground">22 videos · referencia mensual</div></div>
              <div className="rounded-xl bg-muted/60 p-4"><div className="text-xl font-bold">~$18.30</div><div className="text-xs text-muted-foreground">30 videos · referencia mensual</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="relative max-w-4xl mx-auto px-6 pb-24" aria-labelledby="steps">
        <h2 id="steps" className="text-3xl md:text-4xl font-bold text-center mb-12">Funcionando en 5 pasos</h2>
        <ol className="space-y-4">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-5 rounded-2xl border border-border bg-card/50 p-5 transition hover:border-primary/50">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#00d4ff] to-[#00c9a7] font-bold text-[#07101f]">{i + 1}</span>
              <div><h3 className="font-semibold">{s.title}</h3><p className="text-muted-foreground text-sm">{s.text}</p></div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Necesitas n8n self-hosted, ffmpeg, Kie.ai, Ollama (Kimi K3), OpenRouter como respaldo y YouTube Data API v3. Para TikTok, configura su app y OAuth según la guía.
        </p>
      </section>

      {/* FAQ */}
      <section className="relative max-w-3xl mx-auto px-6 pb-24" aria-labelledby="faq">
        <h2 id="faq" className="text-3xl md:text-4xl font-bold text-center mb-10">Preguntas frecuentes</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card/50 p-5 open:border-primary/50">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                {f.q}
                <span className="ml-4 text-primary transition group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 md:p-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 via-transparent to-[#ffc93c]/15" />
          <div className="ww-blob absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]" />
          <div className="relative">
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-[#ffc93c]" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Tu primer Short automático está a un clic</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Descárgalo, conecta tus servicios y prueba la ejecución manual antes de activar el horario. Si te sirvió, compártelo con alguien que quiera arrancar su canal.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="relative overflow-hidden ww-shine h-12 px-7 text-base font-semibold bg-gradient-to-r from-[#00d4ff] to-[#00c9a7] text-[#07101f] hover:opacity-95">
                <a href={ZIP} download><Download className="mr-2 h-5 w-5" />Descargar Wild Wonders v8</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
                <Link href="/contacto">¿Lo quieres a la medida? <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">Más workflows gratis muy pronto en esta página.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
