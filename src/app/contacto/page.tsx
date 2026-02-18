'use client';

import { Mail, Globe, HeartHandshake } from 'lucide-react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Contact() {
  const { t } = useTranslation();

  const servicesData = t('contact.services');
  const services = Array.isArray(servicesData) ? servicesData : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl text-center mx-auto">
          <div className="inline-flex items-center justify-center p-3 bg-muted rounded-full mb-6">
            <Globe size={24} className="text-foreground" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('contact.hero')}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t('contact.description')}
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <HeartHandshake className="text-foreground" />
                {t('contact.collaboration')}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t('contact.collaborationDesc')}
              </p>
              <ul className="space-y-4">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-muted/50 border-none">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">{t('contact.availableLanguages')}</h3>
                <div className="flex flex-wrap gap-3">
                  {['Español', 'Kaqchikel', 'K\'iche\'', 'English'].map((lang) => (
                    <Badge key={lang} variant="outline" className="bg-background">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Card */}
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{t('contact.startConversation')}</CardTitle>
              <CardDescription>
                {t('contact.conversationDesc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full py-6 text-lg gap-2">
                <a href={`mailto:devlewiso@gmail.com?subject=${encodeURIComponent(t('contact.subject'))}`}>
                  <Mail size={20} />
                  {t('contact.sendEmail')}
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                {t('contact.responseTime')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}