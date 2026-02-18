'use client';

import React from 'react';
import { useTranslation } from '@/lib/useTranslation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b">{title}</h2>
    <div className="space-y-6">
      {children}
    </div>
  </section>
);

const PolicyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <Card className="border-none shadow-md bg-muted/30">
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-muted-foreground space-y-3 text-sm leading-relaxed">
      {children}
    </CardContent>
  </Card>
);

export default function PoliticasPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-4">{t('policies.appPoliciesTitle')}</h1>
          <p className="text-lg text-muted-foreground">
            {t('policies.appPoliciesDesc')}
          </p>
        </header>

        <PolicySection title={t('policies.privacyTitle')}>
          <PolicyCard title={t('policies.privacyProtectionTitle')}>
            <p>
              {t('policies.privacyProtectionDesc')}
            </p>
            <p>
              <strong>{t('policies.infoCollectionTitle')}:</strong> {t('policies.infoCollectionDesc')}
            </p>
            <p>
              <strong>{t('policies.usageTitle')}:</strong> {t('policies.usageDesc')}
            </p>
            <p>
              <strong>{t('policies.dataProtectionTitle')}:</strong> {t('policies.dataProtectionDesc')}
            </p>
            <p>
              <strong>{t('policies.userRightsTitle')}:</strong> {t('policies.userRightsDesc')}
            </p>
          </PolicyCard>
        </PolicySection>

        <PolicySection title={t('policies.termsTitle')}>
          <PolicyCard title={t('policies.termsGeneral')}>
            <p>
              {t('policies.termsDesc')}
            </p>
            <p>
              <strong>{t('policies.useAppsTitle')}:</strong> {t('policies.useAppsDesc')}
            </p>
            <p>
              <strong>{t('policies.liabilityTitle')}:</strong> {t('policies.liabilityDesc')}
            </p>
            <p>
              <strong>{t('policies.modificationsTitle')}:</strong> {t('policies.modificationsDesc')}
            </p>
          </PolicyCard>
        </PolicySection>

        <PolicySection title={t('policies.donationPolicyTitle')}>
          <PolicyCard title={t('policies.donationFinancingTitle')}>
            <p>
              {t('policies.donationDesc')}
            </p>
            <p>
              <strong>{t('policies.donationsTitle')}:</strong> {t('policies.donationsDetail')}
            </p>
            <p>
              <strong>{t('policies.transparencyTitle')}:</strong> {t('policies.transparencyDesc')}
            </p>
          </PolicyCard>
        </PolicySection>

        <footer className="mt-16 pt-8 border-t text-center">
          <Button asChild>
            <a
              href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('policies.downloadTitle')}
            </a>
          </Button>
        </footer>
      </div>
    </div>
  );
}
