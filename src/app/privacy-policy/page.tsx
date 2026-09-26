import LegalPage, { legalMetadata } from '@/components/LegalPage';

export const generateMetadata = () => legalMetadata('privacy');

export default function PrivacyPolicyPage() {
  return <LegalPage id="privacy" />;
}
