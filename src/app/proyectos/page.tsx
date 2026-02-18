"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Search } from 'lucide-react';
import { proyectos } from '@/content/proyectos';
import { useTranslation } from '@/lib/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categorias = [
    { id: "all", nombre: t('projects.categories.all') },
    { id: "business", nombre: t('projects.categories.business') },
    { id: "tools", nombre: t('projects.categories.tools') },
    { id: "infrastructure", nombre: t('projects.categories.infrastructure') },
    { id: "entertainment", nombre: t('projects.categories.entertainment') },
    { id: "lifestyle", nombre: t('projects.categories.lifestyle') },
    { id: "education", nombre: t('projects.categories.education') }
  ];

  const filteredProjects = proyectos
    .filter(project => activeCategory === 'all' || project.category === activeCategory)
    .filter(project => {
      if (!searchTerm.trim()) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b bg-muted/30">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
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
                onClick={() => setActiveCategory(categoria.id)}
                className="rounded-full"
              >
                {categoria.nombre}
              </Button>
            ))}
          </div>
        </div>

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
              <Card
                key={index}
                className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-muted-foreground/10"
              >
                <div className="relative h-48 bg-muted shrink-0 overflow-hidden">
                  <Image
                    src={project.imageUrl || "https://picsum.photos/400/300"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 gap-3">
                  {project.liveUrl ? (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        {t('projects.viewProject')}
                      </a>
                    </Button>
                  ) : null}

                  {project.githubUrl ? (
                    <Button asChild variant="outline" size="icon" title={t('projects.viewCode')}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
