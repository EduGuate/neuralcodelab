import { Film, ImageIcon, Mic } from 'lucide-react';
import AffiliateBanner from '@/components/AffiliateBanner';
import { KIE_AFFILIATE_URL, affiliateImages, affiliateThemes } from '@/lib/affiliates';

type KieBannerProps = {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  disclosure?: string;
  imageAlt?: string;
  className?: string;
};

export default function KieBanner({
  badge = 'El motor detrás de cada video',
  title = 'Genera video con IA en',
  description = 'Los $0.60 de Veo 3.1 Lite del workflow se pagan en Kie.ai: una sola API para los mejores modelos de video, imagen y voz, pagando solo lo que usas.',
  cta = 'Crear cuenta en Kie.ai',
  disclosure = 'Enlace de afiliado: si te registras con él, Neural Code Lab recibe una comisión sin costo extra para ti.',
  imageAlt = 'Kie.ai: API de inteligencia artificial para generar video, imágenes y voz con Veo 3.1, Kling, Seedance y ElevenLabs',
  className,
}: KieBannerProps) {
  return (
    <AffiliateBanner
      id="kie"
      href={KIE_AFFILIATE_URL}
      brand="Kie.ai"
      image={affiliateImages.kie}
      imageAlt={imageAlt}
      theme={affiliateThemes.kie}
      chips={[
        { icon: Film, label: 'Veo 3.1 · Kling · Seedance' },
        { icon: ImageIcon, label: 'Nano Banana · Imagen' },
        { icon: Mic, label: 'ElevenLabs TTS' },
      ]}
      badge={badge}
      title={title}
      description={description}
      cta={cta}
      disclosure={disclosure}
      className={className}
    />
  );
}
