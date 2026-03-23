import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuralcodelab.com';
  
  // Rutas estáticas principales
  const staticRoutes = [
    '',
    '/nosotros',
    '/proyectos',
    '/contacto',
    '/chat-demo',
    '/contact-center',
    '/3cx',
    '/privacy-policy',
    '/politicasappA',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
