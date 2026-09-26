import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Github, ExternalLink } from 'lucide-react';
import FeaturesSection from '@/components/FeaturesSection';
import AnimeStats from '@/components/AnimeStats';
import KieBanner from '@/components/KieBanner';
import HiggsfieldBanner from '@/components/HiggsfieldBanner';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getServerTranslation, getLanguage } from '@/lib/i18n';
import { colors } from '@/data/content';
import { proyectos } from '@/content/proyectos';

export default async function Page() {
  const lang = await getLanguage();
  const t = getServerTranslation(lang);

  const features = [
    { iconName: 'Leaf',     title: t('home.features.agro.title'),         description: t('home.features.agro.description'),         colorIndex: 0, summaryKey: 'agro' },
    { iconName: 'Users',    title: t('home.features.edu.title'),          description: t('home.features.edu.description'),          colorIndex: 1, summaryKey: 'edu' },
    { iconName: 'Code2',    title: t('home.features.ia.title'),           description: t('home.features.ia.description'),           colorIndex: 2, summaryKey: 'ia' },
    { iconName: 'Database', title: t('home.features.preservation.title'), description: t('home.features.preservation.description'), colorIndex: 3, summaryKey: 'preservation' },
    { iconName: 'Zap',      title: t('home.features.sustainable.title'),  description: t('home.features.sustainable.description'),  colorIndex: 4, summaryKey: 'sustainable' },
    { iconName: 'Code2',    title: t('home.features.dev.title'),          description: t('home.features.dev.description'),          colorIndex: 5, summaryKey: 'dev' },
  ];

  const stats = [
    { value: String(proyectos.length), label: t('home.stats.projects'), color: colors[7] },
    { value: "104+", label: t('home.stats.repos'), color: colors[1] },
    { value: "7", label: t('home.stats.langs'), color: colors[5] },
    { value: "100%", label: t('home.stats.openSource'), color: colors[2] },
  ];

  const featuredProjectIds = ['ri-nim', 'uml', 'kafka'];
  const featuredProjects = featuredProjectIds
    .map((id) => proyectos.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[720px] opacity-40"
          style={{
            background:
              'radial-gradient(480px 320px at 70% 20%, hsl(var(--primary) / 0.22), transparent 70%), radial-gradient(360px 280px at 10% 60%, #FFC93C22, transparent 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-5 gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold border border-border">
              <Sparkles size={13} className="text-primary" />
              {t('home.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.05]">
              {t('home.hero')}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/proyectos">
                  {t('home.exploreSolutions')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/proyectos">{t('home.secondaryCta')}</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/img/hero-home.jpg"
                alt="Máscara maya estilizada, símbolo de identidad cultural y tecnología"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <svg className="absolute -top-6 -left-6 w-20 h-20 opacity-60" viewBox="0 0 100 100" fill="none" stroke="#FFC93C" strokeWidth="2">
              <path d="M50 4 90 50 50 96 10 50Z" />
              <path d="M50 24 70 50 50 76 30 50Z" />
            </svg>
            <svg className="absolute -bottom-7 -right-6 w-28 h-28 opacity-60" viewBox="0 0 100 100" fill="none" stroke="hsl(var(--accent))" strokeWidth="2">
              <circle cx="50" cy="50" r="46" />
              <path d="M50 4v20M50 76v20M4 50h20M76 50h20" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats & Tech Stack */}
      <section className="border-t border-border">
        <AnimeStats stats={stats} />

        <div className="max-w-6xl mx-auto px-6 pb-20">
          <p className="text-center font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mb-8">
            {t('home.techStack')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'TypeScript', 'Tailwind', 'Python', 'Node.js', 'PostgreSQL', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="tech-tag opacity-0 font-mono text-sm text-muted-foreground border border-border bg-card rounded-lg px-4 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t('home.ourSolutions')}</h2>
          <p className="text-muted-foreground">{t('home.solutionsDesc')}</p>
        </div>
        <FeaturesSection features={features} />
      </section>

      <KieBanner
        badge={t('home.kie.badge')}
        title={t('home.kie.title')}
        description={t('home.kie.description')}
        cta={t('home.kie.cta')}
        disclosure={t('home.kie.disclosure')}
        imageAlt={t('home.kie.imageAlt')}
        className="py-24 border-t border-border"
      />

      {/* Featured open source projects */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t('home.featuredProjects')}</h2>
          <p className="text-muted-foreground">{t('home.featuredProjectsDesc')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="bg-card border-border overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="pt-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-muted-foreground border border-border rounded-md px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={15} /> {t('home.viewCode')}
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={15} /> {t('home.viewProject')}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <HiggsfieldBanner
        badge={t('home.higgsfield.badge')}
        title={t('home.higgsfield.title')}
        description={t('home.higgsfield.description')}
        cta={t('home.higgsfield.cta')}
        disclosure={t('home.higgsfield.disclosure')}
        imageAlt={t('home.higgsfield.imageAlt')}
        chipLabels={[t('home.higgsfield.chip1'), t('home.higgsfield.chip2'), t('home.higgsfield.chip3')]}
        className="py-24 border-t border-border"
      />

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-border">
        <div
          className="rounded-2xl p-12 md:p-16 text-center border border-primary/25"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.16), hsl(var(--accent) / 0.12)), hsl(var(--card))' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">{t('home.buildTogether')}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
            {t('home.joinMission')}
          </p>
          <Button asChild size="lg">
            <Link href="/contacto">
              {t('home.contactUs')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
