import { Clapperboard, UserRound, Wand2 } from 'lucide-react';
import AffiliateBanner from '@/components/AffiliateBanner';
import { HIGGSFIELD_AFFILIATE_URL, affiliateImages, affiliateThemes } from '@/lib/affiliates';

type HiggsfieldBannerProps = {
  badge?: string;
  title?: string;
  description?: string;
  cta?: string;
  disclosure?: string;
  imageAlt?: string;
  chipLabels?: [string, string, string];
  className?: string;
};

export default function HiggsfieldBanner({
  badge = 'Para creadores de contenido',
  title = 'Video cinematográfico con IA en',
  description = 'Movimientos de cámara de cine, efectos virales y avatares con IA en un solo estudio. Ideal para reels, Shorts y anuncios sin equipo de grabación.',
  cta = 'Probar Higgsfield',
  disclosure = 'Enlace de afiliado: si te suscribes con él, Neural Code Lab recibe una comisión sin costo extra para ti.',
  imageAlt = 'Higgsfield AI: estudio de video cinematográfico con inteligencia artificial para reels, Shorts y anuncios',
  chipLabels = ['Cámaras de cine', 'Efectos virales', 'Avatares y lipsync'],
  className,
}: HiggsfieldBannerProps) {
  return (
    <AffiliateBanner
      id="higgsfield"
      href={HIGGSFIELD_AFFILIATE_URL}
      brand="Higgsfield"
      image={affiliateImages.higgsfield}
      imageAlt={imageAlt}
      theme={affiliateThemes.higgsfield}
      chips={[
        { icon: Clapperboard, label: chipLabels[0] },
        { icon: Wand2, label: chipLabels[1] },
        { icon: UserRound, label: chipLabels[2] },
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
