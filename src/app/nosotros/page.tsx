'use client';

import Image from 'next/image';
import { Linkedin, Code2, Heart, Rocket, Users, Globe2, Sparkles, Github, Mail } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function NosotrosPage() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Iran Lewis',
      role: 'Founder & Developer',
      image: '/img/my-profile.jpg',
      bio: t('about.memberBio'),
      skills: ['Open Source']
    }
  ];

  const values = [
    {
      icon: Rocket,
      title: t('about.values.innovation.title'),
      desc: t('about.values.innovation.desc'),
      color: 'text-blue-500 bg-blue-50'
    },
    {
      icon: Heart,
      title: t('about.values.transparency.title'),
      desc: t('about.values.transparency.desc'),
      color: 'text-purple-500 bg-purple-50'
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      desc: t('about.values.collaboration.desc'),
      color: 'text-orange-500 bg-orange-50'
    }
  ];

  const stats = [
    { value: '12+', label: t('home.stats.communities') },
    { value: '200+', label: t('home.stats.trained') },
    { value: '8', label: t('home.stats.projects') },
    { value: '5', label: t('home.stats.languages') }
  ];

  const missionHighlightsData = t('about.highlights');
  const missionHighlights = Array.isArray(missionHighlightsData) ? missionHighlightsData : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5">
              <Code2 className="w-4 h-4" />
              {t('home.badge')}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('about.hero')}
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {t('about.missionDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-primary" />
              {t('about.mission')}
            </h2>
            <div className="space-y-4">
              {missionHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <p className="text-foreground text-lg">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-muted/50 border-none relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>
            <CardContent className="p-8 relative z-10">
              <Globe2 className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.globalImpact')}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t('about.globalImpactDesc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-24 border-y">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-none">
                <CardHeader>
                  <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.teamTitle')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('about.teamSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative h-80 md:h-auto min-h-[400px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-xl text-primary font-semibold mb-6">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{member.bio}</p>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">{t('about.specialties')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" className="gap-2">
                        <a href="https://www.linkedin.com/in/devlewiso" target="_blank" rel="noopener noreferrer">
                          <Linkedin size={18} />
                          LinkedIn
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href="https://github.com/devlewiso" target="_blank" rel="noopener noreferrer">
                          <Github size={18} />
                          GitHub
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="gap-2">
                        <a href="mailto:devlewiso@gmail.com">
                          <Mail size={18} />
                          Email
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Card className="bg-primary text-primary-foreground p-12 md:p-16 text-center border-none overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('about.readyToCollaborate')}</h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              {t('about.collaborateDesc')}
            </p>
            <Button asChild variant="secondary" size="lg" className="gap-2 px-8 py-6 text-lg">
              <a href="/contacto">
                {t('home.contactUs')}
                <Sparkles size={20} />
              </a>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}