import LegalPage, { legalMetadata } from '@/components/LegalPage';

export const generateMetadata = () => legalMetadata('cookies');

export default function CookiePolicyPage() {
  return <LegalPage id="cookies" />;
}
