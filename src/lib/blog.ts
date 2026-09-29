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
      category: raw.category ?? 'Actualidad',
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
