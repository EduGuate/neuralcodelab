// Junta content/blog/*.json en un solo archivo que se empaqueta con la app.
// Así el blog funciona en Cloudflare Workers, donde no hay acceso al sistema de archivos en tiempo de ejecución.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.join(process.cwd(), 'content', 'blog');
const out = path.join(process.cwd(), 'src', 'data', 'blog-posts.generated.json');

const posts = fs.existsSync(dir)
  ? fs.readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .flatMap((f) => {
        try {
          const raw = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
          return [{ ...raw, slug: raw.slug || f.replace(/\.json$/, '') }];
        } catch (e) {
          console.warn(`[blog] ${f} tiene JSON inválido, se omite: ${e.message}`);
          return [];
        }
      })
  : [];

fs.writeFileSync(out, JSON.stringify(posts));
console.log(`[blog] ${posts.length} post(s) → ${path.relative(process.cwd(), out)}`);
