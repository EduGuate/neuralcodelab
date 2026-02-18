'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, Code2, Database, Zap } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/lib/useTranslation';
import { colors } from '@/data/content';

export default function Page() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Leaf,
      title: t('home.features.agro.title'),
      description: t('home.features.agro.description'),
      color: colors[0]
    },
    {
      icon: Users,
      title: t('home.features.edu.title'),
      description: t('home.features.edu.description'),
      color: colors[1]
    },
    {
      icon: Code2,
      title: t('home.features.ia.title'),
      description: t('home.features.ia.description'),
      color: colors[2]
    },
    {
      icon: Database,
      title: t('home.features.preservation.title'),
      description: t('home.features.preservation.description'),
      color: colors[3]
    },
    {
      icon: Zap,
      title: t('home.features.sustainable.title'),
      description: t('home.features.sustainable.description'),
      color: colors[4]
    },
    {
      icon: Code2,
      title: t('home.features.dev.title'),
      description: t('home.features.dev.description'),
      color: colors[5]
    }
  ];

  const stats = [
    { value: "12+", label: t('home.stats.communities') },
    { value: "5", label: t('home.stats.languages') },
    { value: "200+", label: t('home.stats.trained') },
    { value: "8", label: t('home.stats.projects') }
  ];

  const testimonialsData = t('home.testimonials');
  const testimonials = Array.isArray(testimonialsData) ? testimonialsData : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          <Badge variant="secondary" className="mb-4">
            {t('home.badge')}
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            {t('home.hero')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('home.description')}
          </p>
          <Button asChild size="lg">
            <Link href="/proyectos">
              {t('home.exploreSolutions')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">{t('home.ourSolutions')}</h2>
          <p className="text-muted-foreground">{t('home.solutionsDesc')}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <h2 className="text-3xl font-bold text-foreground mb-12">{t('home.realImpact')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <Card key={i} className="bg-muted/50 border-none">
              <CardContent className="pt-6">
                <p className="text-foreground mb-4 leading-relaxed italic">"{item.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t">
        <div className="bg-primary text-primary-foreground rounded-lg p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.buildTogether')}</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-lg">
            {t('home.joinMission')}
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contacto">
              {t('home.contactUs')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
