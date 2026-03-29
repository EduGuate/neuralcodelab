import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuralcodelab.com';
  
  // Rutas estáticas principales
  const staticRoutes = [
    { url: '', priority: 1, changeFrequency: 'daily' as const },
    { url: '/nosotros', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/proyectos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact-center', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/3cx', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
