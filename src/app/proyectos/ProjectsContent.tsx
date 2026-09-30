"use client";
import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Search } from 'lucide-react';
import { proyectos, categorias as categoriasBase, Project, Category } from '@/content/proyectos';
import { useTranslation } from '@/lib/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProjectsContent() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStack, setActiveStack] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categorias = categoriasBase.map(c => ({ id: c.id, nombre: t(c.nombreKey) }));

  const enCategoria = (project: Project) =>
    activeCategory === 'all' || (activeCategory === 'eduguate' ? project.githubUrl.includes('github.com/EduGuate/') : project.category === activeCategory);

  // Lenguajes y frameworks disponibles dentro de la categoría elegida, del más usado al menos usado.
  const stacks = useMemo(() => {
    const cuenta = new Map<string, number>();
    proyectos.filter(enCategoria).forEach(p => p.stack?.forEach(s => cuenta.set(s, (cuenta.get(s) ?? 0) + 1)));
    return [...cuenta.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const cambiarCategoria = (id: string) => {
    setActiveCategory(id);
    setActiveStack('all'); // el stack elegido puede no existir en la nueva categoría
  };

  const filteredProjects = proyectos
    .filter(enCategoria)
    .filter(project => activeStack === 'all' || project.stack?.includes(activeStack))
    .filter(project => {
      const description = t(project.descriptionKey);
      if (!searchTerm.trim()) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        (project.stack ?? []).some(tech => tech.toLowerCase().includes(searchLower))
      );
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl mx-6 mt-8 group">
        <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
          <Image
            src="/img/projects-bg.webp"
            alt="NeuralCodeLab - Proyectos de tecnología para comunidades"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-28 md:py-36 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-8 tracking-tight">
              {t('projects.hero').split(' ')[0]} <span className="text-primary">{t('projects.hero').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('projects.heroDesc')}
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('projects.searchPlaceholder')}
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categorias.map((categoria) => (
              <Button
                key={categoria.id}
                variant={activeCategory === categoria.id ? "default" : "outline"}
                size="sm"
                onClick={() => cambiarCategoria(categoria.id)}
                className="rounded-full"
              >
                {categoria.nombre}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtro por lenguaje / framework */}
        {stacks.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-12 -mt-8 justify-center md:justify-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">{t('projects.stackFilter')}</span>
            <Button
              variant={activeStack === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveStack('all')}
              className="rounded-full h-7 px-3 text-xs"
            >
              {t('projects.allStacks')}
            </Button>
            {stacks.map(([tech, total]) => (
              <Button
                key={tech}
                variant={activeStack === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveStack(tech)}
                className="rounded-full h-7 px-3 text-xs font-mono"
              >
                {tech} <span className="ml-1 opacity-60">{total}</span>
              </Button>
            ))}
          </div>
        )}

        {activeCategory === 'templates' && (
          <p className="text-center mb-8">
            <Link href="/plantillas-gratis" className="text-primary font-semibold underline underline-offset-4 hover:opacity-80">
              {t('seo.templates.heading')} →
            </Link>
          </p>
        )}

        {activeCategory === 'workflows' && (
          <p className="text-center mb-8">
            <Link href="/workflows-n8n" className="text-primary font-semibold underline underline-offset-4 hover:opacity-80">
              {t('projects.workflowsLink')} →
            </Link>
          </p>
        )}

        {/* Grid */}
        {filteredProjects.length === 0 ? (
          <Card className="text-center py-24 bg-muted/50 border-dashed">
            <CardContent>
              <h3 className="text-xl font-medium text-foreground">{t('projects.noProjects')}</h3>
              <p className="mt-2 text-muted-foreground">{t('projects.tryAnotherSearch')}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-muted-foreground/10">
                <div className="relative h-48 bg-muted shrink-0 overflow-hidden">
                  <Image
                    src={project.imageUrl && !project.imageUrl.startsWith('https://picsum.photos') ? project.imageUrl : "/img/logo.png"}
                    alt={project.imageUrl && !project.imageUrl.startsWith('https://picsum.photos') ? project.title : "Logo de Neural Code Lab"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                    {t(project.descriptionKey)}
                  </p>
                  {project.stack && project.stack.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.stack.map(tech => (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => setActiveStack(tech)}
                          title={`${t('projects.stackFilter')}: ${tech}`}
                          className="rounded-md border border-border px-1.5 py-0.5 text-[11px] font-mono text-muted-foreground hover:text-primary hover:border-primary/60"
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 gap-3">
                  {project.liveUrl ? (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> {t('projects.viewProject')}
                      </a>
                    </Button>
                  ) : null}
                  {project.githubUrl ? (
                    <Button asChild variant="outline" size="icon" title={t('projects.viewCode')}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    </Button>
                  ) : null}
                  {!project.liveUrl && !project.githubUrl && (
                    <Badge variant="outline" className="w-full justify-center py-2 text-muted-foreground border-dashed italic">
                      {t('projects.comingSoon')}
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
