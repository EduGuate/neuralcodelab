import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { type BlogPost, formatDate, readingMinutes } from '@/lib/blog';

export default function PostGrid({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return <p className="text-muted-foreground">Todavía no hay artículos aquí.</p>;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="group flex flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Badge variant="secondary">{p.category}</Badge>
            <time dateTime={p.date}>{formatDate(p.date)}</time>
          </div>
          <h2 className="text-lg font-display font-semibold group-hover:text-primary transition-colors">{p.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
          <div className="mt-auto pt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Clock size={12} /> {readingMinutes(p.body)} min</span>
            {p.tecnologias.map((t) => (
              <span key={t} className="rounded-md border border-border px-1.5 py-0.5 font-mono">{t}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
