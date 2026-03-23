import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'], // Rutas privadas si las hubiera
      },
    ],
    sitemap: 'https://neuralcodelab.com/sitemap.xml',
  };
}
