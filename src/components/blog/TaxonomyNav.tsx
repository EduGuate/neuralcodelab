import Link from 'next/link';
import { taxonomiasUsadas } from '@/lib/blog';

type Props = { activa?: { tipo: 'categoria' | 'tecnologia'; slug: string } };

// Filtros del blog: solo muestra categorías y tecnologías que ya tienen artículos.
export default function TaxonomyNav({ activa }: Props) {
  const { categorias, tecnologias } = taxonomiasUsadas();
  if (!categorias.length && !tecnologias.length) return null;

  const chip = (href: string, texto: string, total: number, on: boolean, mono = false) => (
    <Link
      key={href}
      href={href}
      aria-current={on ? 'page' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors ${
        on ? 'border-primary bg-primary/15 text-foreground' : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/60'
      } ${mono ? 'font-mono' : ''}`}
    >
      {texto} <span className="text-xs opacity-60">{total}</span>
    </Link>
  );

  return (
    <nav aria-label="Filtrar artículos" className="mb-10 space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">Categorías</span>
        <Link
          href="/blog"
          aria-current={!activa ? 'page' : undefined}
          className={`inline-flex rounded-full border px-3 py-1 text-sm ${!activa ? 'border-primary bg-primary/15' : 'border-border text-muted-foreground hover:text-foreground'}`}
        >
          Todas
        </Link>
        {categorias.map((c) =>
          chip(`/blog/categoria/${c.slug}`, c.nombre, c.total, activa?.tipo === 'categoria' && activa.slug === c.slug),
        )}
      </div>
      {tecnologias.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">Lenguajes y frameworks</span>
          {tecnologias.map((t) =>
            chip(`/blog/tecnologia/${t.slug}`, t.nombre, t.total, activa?.tipo === 'tecnologia' && activa.slug === t.slug, true),
          )}
        </div>
      )}
    </nav>
  );
}
