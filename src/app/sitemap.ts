import { MetadataRoute } from 'next';
import { getAllPosts, taxonomiasUsadas } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neuralcodelab.com';
  
  // Rutas estáticas principales
  const staticRoutes = [
    { url: '', priority: 1, changeFrequency: 'daily' as const },
    { url: '/nosotros', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/proyectos', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/plantillas-gratis', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/workflows-n8n', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { url: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact-center', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/3cx', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/chat-demo', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const { categorias, tecnologias } = taxonomiasUsadas();
  const taxonomias: MetadataRoute.Sitemap = [
    ...categorias.map((c) => `/blog/categoria/${c.slug}`),
    ...tecnologias.map((t) => `/blog/tecnologia/${t.slug}`),
  ].map((ruta) => ({ url: `${baseUrl}${ruta}`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 }));

  return [...pages, ...posts, ...taxonomias];
}
