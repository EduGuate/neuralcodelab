export const KIE_AFFILIATE_URL = 'https://kie.ai?ref=538b343ce64a7b9e5823c3b8ad471121';
export const HIGGSFIELD_AFFILIATE_URL = 'https://higgsfield.ai?fpr=iran-692b24';

export type AffiliateTheme = {
  /** Gradient stops for the border, glow, button and brand text. */
  a: string;
  b: string;
  c: string;
  /** Card background behind the image. */
  bg: string;
  /** Text colour on the call-to-action button. */
  ctaText: string;
};

export const affiliateThemes: Record<'kie' | 'higgsfield', AffiliateTheme> = {
  kie: { a: '#00d4ff', b: '#00c9a7', c: '#ffc93c', bg: '#07101f', ctaText: '#07101f' },
  higgsfield: { a: '#ff3ea5', b: '#8b5cf6', c: '#c6ff3d', bg: '#0b0714', ctaText: '#ffffff' },
};

export const affiliateImages = {
  kie: '/img/kie-ai-generador-video-imagen-voz-ia.webp',
  higgsfield: '/img/higgsfield-ai-estudio-video-cinematografico-ia.webp',
};
