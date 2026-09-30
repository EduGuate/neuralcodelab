import { Marked } from 'marked';
import generated from '@/data/blog-posts.generated.json';

// Los posts viven en content/blog/<slug>.json. Los escribe el workflow de n8n
// (aprobado por Telegram) o se pueden crear a mano con el mismo formato.
// scripts/build-blog-index.mjs los junta en src/data/blog-posts.generated.json antes de cada build,
// porque en Cloudflare Workers no se puede leer el disco en tiempo de ejecución.

export const SITE_URL = 'https://neuralcodelab.com';

export type BlogFaq = { q: string; a: string };
export type BlogSource = { title: string; url: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  keyword: string;
  keywords: string[];
  category: string;
  /** Lenguajes, frameworks y herramientas que trata el post (lista cerrada en TECNOLOGIAS). */
  tecnologias: string[];
  date: string;
  updated?: string;
  author: string;
  image?: string;
  imageAlt?: string;
  sources: BlogSource[];
  faq: BlogFaq[];
  body: string;
};

export type BlogHeading = { id: string; text: string };

// ---- Taxonomía del blog ----
// Categoría = de qué trata (una por post). Tecnologías = lenguajes/frameworks/herramientas (0 a 4 por post).
// El workflow de n8n usa exactamente estos nombres; si agregas uno aquí, agrégalo también allá.

export type Taxon = { nombre: string; slug: string; descripcion: string };

export const CATEGORIAS: Taxon[] = [
  { nombre: 'Inteligencia Artificial', slug: 'inteligencia-artificial', descripcion: 'Modelos, agentes y herramientas de IA explicados sin humo.' },
  { nombre: 'Programación y Desarrollo', slug: 'programacion', descripcion: 'Lenguajes, frameworks, lanzamientos y buenas prácticas para desarrolladores.' },
  { nombre: 'Tecnología', slug: 'tecnologia', descripcion: 'Gadgets, empresas tecnológicas y tendencias digitales.' },
  { nombre: 'Ciencia', slug: 'ciencia', descripcion: 'Espacio, investigación y descubrimientos explicados en simple.' },
  { nombre: 'Internet y Redes', slug: 'internet-y-redes', descripcion: 'Redes sociales, plataformas y lo que pasa en internet.' },
  { nombre: 'Historias Virales', slug: 'historias-virales', descripcion: 'Lo que se está compartiendo y por qué.' },
  { nombre: 'Guatemala', slug: 'guatemala', descripcion: 'Tecnología y actualidad con mirada guatemalteca.' },
  { nombre: 'Negocios Digitales', slug: 'negocios-digitales', descripcion: 'Emprendimiento, automatización y dinero en internet.' },
];

const tec = (nombre: string, slug: string, tipo: string): Taxon => ({
  nombre,
  slug,
  descripcion: `Artículos sobre ${nombre}: noticias, novedades y guías (${tipo}).`,
});

export const TECNOLOGIAS: Taxon[] = [
  tec('Python', 'python', 'lenguaje'),
  tec('JavaScript', 'javascript', 'lenguaje'),
  tec('TypeScript', 'typescript', 'lenguaje'),
  tec('Java', 'java', 'lenguaje'),
  tec('C#', 'csharp', 'lenguaje'),
  tec('Go', 'go', 'lenguaje'),
  tec('Rust', 'rust', 'lenguaje'),
  tec('C++', 'cpp', 'lenguaje'),
  tec('PHP', 'php', 'lenguaje'),
  tec('Kotlin', 'kotlin', 'lenguaje'),
  tec('Swift', 'swift', 'lenguaje'),
  tec('SQL', 'sql', 'lenguaje'),
  tec('Node.js', 'nodejs', 'runtime'),
  tec('React', 'react', 'framework'),
  tec('Next.js', 'nextjs', 'framework'),
  tec('Astro', 'astro', 'framework'),
  tec('Vue', 'vue', 'framework'),
  tec('Angular', 'angular', 'framework'),
  tec('Svelte', 'svelte', 'framework'),
  tec('Django', 'django', 'framework'),
  tec('FastAPI', 'fastapi', 'framework'),
  tec('Laravel', 'laravel', 'framework'),
  tec('Spring', 'spring', 'framework'),
  tec('.NET', 'dotnet', 'framework'),
  tec('Flutter', 'flutter', 'framework'),
  tec('React Native', 'react-native', 'framework'),
  tec('Tailwind CSS', 'tailwind', 'framework'),
  tec('PostgreSQL', 'postgresql', 'base de datos'),
  tec('Docker', 'docker', 'herramienta'),
  tec('Kubernetes', 'kubernetes', 'herramienta'),
  tec('Git', 'git', 'herramienta'),
  tec('Linux', 'linux', 'sistema'),
  tec('n8n', 'n8n', 'automatización'),
  tec('Cloudflare', 'cloudflare', 'nube'),
  tec('AWS', 'aws', 'nube'),
  tec('Google Cloud', 'google-cloud', 'nube'),
];

const TECNOLOGIA_POR_NOMBRE = new Map(TECNOLOGIAS.map((t) => [t.nombre, t]));
const CATEGORIA_POR_NOMBRE = new Map(CATEGORIAS.map((c) => [c.nombre, c]));

export function categoriaDe(nombre: string): Taxon {
  return CATEGORIA_POR_NOMBRE.get(nombre) ?? { nombre, slug: slugify(nombre), descripcion: '' };
}

export function tecnologiaDe(nombre: string): Taxon | undefined {
  return TECNOLOGIA_POR_NOMBRE.get(nombre);
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

type RawPost = Partial<BlogPost> & { slug: string };

function toPost(raw: RawPost): BlogPost | null {
  try {
    return {
      slug: raw.slug,
      title: raw.title,
      seoTitle: raw.seoTitle,
      description: raw.description,
      keyword: raw.keyword ?? '',
      keywords: raw.keywords ?? [],
      category: raw.category ?? 'Tecnología',
      tecnologias: (raw.tecnologias ?? []).filter((t) => TECNOLOGIA_POR_NOMBRE.has(t)),
      date: raw.date,
      updated: raw.updated,
      author: raw.author ?? 'Neural Code Lab',
      image: raw.image,
      imageAlt: raw.imageAlt,
      sources: raw.sources ?? [],
      faq: raw.faq ?? [],
      body: raw.body ?? '',
    } as BlogPost;
  } catch {
    return null; // un post mal formado no debe tumbar el sitio
  }
}

const POSTS: BlogPost[] = (generated as RawPost[])
  .map(toPost)
  .filter((p): p is BlogPost => !!p && !!p.title && !!p.date && !!p.slug)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return POSTS;
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return POSTS.filter((p) => categoriaDe(p.category).slug === slug);
}

export function getPostsByTech(slug: string): BlogPost[] {
  return POSTS.filter((p) => p.tecnologias.some((t) => tecnologiaDe(t)?.slug === slug));
}

/** Categorías y tecnologías que tienen al menos un post, con su conteo (para los filtros del blog). */
export function taxonomiasUsadas() {
  const cuenta = <T extends Taxon>(lista: T[], usa: (p: BlogPost, t: T) => boolean) =>
    lista.map((t) => ({ ...t, total: POSTS.filter((p) => usa(p, t)).length })).filter((t) => t.total > 0);
  return {
    categorias: cuenta(CATEGORIAS, (p, c) => categoriaDe(p.category).slug === c.slug),
    tecnologias: cuenta(TECNOLOGIAS, (p, t) => p.tecnologias.includes(t.nombre)),
  };
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function readingMinutes(body: string) {
  return Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));
}

/** Markdown → HTML con ids en los h2/h3 (para la tabla de contenidos) y enlaces externos seguros. */
export function renderPost(body: string): { html: string; headings: BlogHeading[] } {
  const headings: BlogHeading[] = [];
  const used = new Set<string>();
  const marked = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const plain = text.replace(/<[^>]+>/g, '');
        let id = slugify(plain) || 'seccion';
        while (used.has(id)) id += '-2';
        used.add(id);
        if (depth === 2) headings.push({ id, text: plain });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href) && !href.startsWith(SITE_URL);
        const rel = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        const t = title ? ` title="${title}"` : '';
        return `<a href="${href}"${t}${rel}>${text}</a>`;
      },
    },
  });
  // El HTML crudo dentro del markdown se descarta: el contenido viene de un LLM.
  const safe = body.replace(/<\/?[a-z][^>]*>/gi, '');
  return { html: marked.parse(safe, { async: false }) as string, headings };
}

export function formatDate(iso: string) {
  return new Date(iso + (iso.length === 10 ? 'T12:00:00' : '')).toLocaleDateString('es-GT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
