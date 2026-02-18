'use client';

import React from 'react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-24 text-foreground">
        {/* Encabezado */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('policies.privacyTitle')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('policies.privacyDesc')}
          </p>
        </header>

        <div className="space-y-12">
          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t('policies.section1Title')}</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>{t('policies.section1Desc')}</p>
              <p>{t('policies.cookiesDesc')}</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t('policies.section2Title')}</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>{t('policies.section2Desc')}</p>
              <p>{t('policies.paymentDesc')}</p>
            </div>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t('policies.section3Title')}</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed mb-6">
              <p>{t('policies.section3Desc')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-muted/50 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{t('policies.freeAppsTitle')}</h3>
                  <p className="text-sm">{t('policies.freeAppsDesc')}</p>
                </CardContent>
              </Card>
              <Card className="bg-muted/50 border-none">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{t('policies.paidAppsTitle')}</h3>
                  <p className="text-sm">{t('policies.paidAppsDesc')}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t('policies.section4Title')}</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>{t('policies.section4Desc')}</p>
            </div>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{t('policies.section5Title')}</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>{t('policies.section5Desc')}</p>
            </div>
          </section>
        </div>

        {/* Botón para descargar */}
        <div className="mt-16 pt-8 border-t">
          <Card className="p-8 bg-muted/30 border-none text-center">
            <h3 className="text-xl font-bold mb-4">{t('policies.downloadTitle')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('policies.downloadDesc')}
            </p>
            <Button asChild>
              <a
                href="https://drive.google.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('policies.downloadButton')}
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
