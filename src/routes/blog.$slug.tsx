import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { blogsApi } from "@/lib/admin/api";
import { BLOG_SEED, BLOG_COVERS } from "@/lib/admin/blog-seed";
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";

function humanize(slug: string) {
  return slug
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const seed = BLOG_SEED.find((p) => p.slug === params.slug);
    const title = seed ? `${seed.title}, Origami99 Blog` : `${humanize(params.slug)}, Origami99 Blog`;
    const description = (seed?.excerpt ?? `Read "${humanize(params.slug)}" on the Origami99 blog, insights on AI, growth, design and engineering from a senior team shipping production software.`).slice(0, 158);
    const url = `${SITE_URL}/blog/${params.slug}`;
    const cover = BLOG_COVERS[params.slug];
    const image = cover ? `${SITE_URL}${cover}` : undefined;
    const published = seed?.publishedAt;

    const meta: Array<Record<string, string>> = [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];
    if (image) {
      meta.push({ property: "og:image", content: image });
      meta.push({ name: "twitter:image", content: image });
    }
    if (published) {
      meta.push({ property: "article:published_time", content: published });
      meta.push({ property: "article:author", content: seed?.author ?? "Origami 99" });
    }

    const wordCount = seed ? seed.body.split(/\s+/).filter(Boolean).length : undefined;
    const article = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: seed?.title ?? humanize(params.slug),
      description,
      url,
      image: image ? [image] : undefined,
      datePublished: published,
      dateModified: seed?.updatedAt ?? published,
      wordCount,
      articleSection: seed?.category,
      keywords: seed?.tags,
      author: { "@type": "Organization", name: seed?.author ?? "Origami 99" },
      publisher: {
        "@type": "Organization",
        name: "Origami 99",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/__l5e/assets-v1/2762a917-4f05-40ca-a4bf-c42d6a117bf9/origami99-favicon.png` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: seed?.title ?? humanize(params.slug), item: url },
      ],
    };

    return {
      meta,
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(article) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumb) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Article not found</h1>
        <Link to="/blog" className="text-coral font-semibold">← Back to blog</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <button onClick={reset} className="text-coral font-semibold">Retry</button>
    </div>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const { data: posts, isLoading } = useQuery({ queryKey: ["public", "blogs"], queryFn: blogsApi.list });
  const post = posts?.find((p) => p.slug === slug && p.status === "published");

  if (!isLoading && !post) throw notFound();

  const readingMin = post ? Math.max(1, Math.round(post.body.split(/\s+/).filter(Boolean).length / 220)) : null;
  const related = post
    ? (posts ?? [])
        .filter((p) => p.status === "published" && p.slug !== post.slug)
        .sort((a, b) => {
          const at = a.tags ?? [];
          const bt = b.tags ?? [];
          const pt = post.tags ?? [];
          const ao = at.filter((x) => pt.includes(x)).length;
          const bo = bt.filter((x) => pt.includes(x)).length;
          if (ao !== bo) return bo - ao;
          return (new Date(b.publishedAt ?? 0).getTime()) - (new Date(a.publishedAt ?? 0).getTime());
        })
        .slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-coral text-sm font-semibold mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>

          {isLoading || !post ? (
            <div className="space-y-4">
              <div className="h-10 w-2/3 bg-muted rounded animate-pulse" />
              <div className="h-64 bg-muted rounded-3xl animate-pulse" />
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-full bg-muted rounded animate-pulse" />
              <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
            </div>
          ) : (
            <>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">{post.title}</h1>
              <div className="mt-4 flex items-center gap-4 flex-wrap text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
                {post.publishedAt && (
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(post.publishedAt).toLocaleDateString()}</span>
                )}
                {readingMin && (
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{readingMin} min read</span>
                )}
                {post.tags?.slice(0, 3).map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-coral/10 text-coral border border-coral/20 px-2 py-0.5 text-xs font-semibold">#{t}</span>
                ))}
              </div>
              {post.coverUrl && (
                <img src={post.coverUrl} alt={post.title} width={1600} height={900} loading="lazy" className="mt-8 w-full rounded-3xl aspect-[16/9] object-cover" />
              )}
              <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
                {post.body.split(/\n\n+/).map((para, i) => (
                  <p key={i} className="text-foreground/85 leading-relaxed whitespace-pre-wrap">{para}</p>
                ))}
              </div>

              {related.length > 0 && (
                <aside className="mt-16 pt-10 border-t border-border">
                  <h2 className="text-2xl font-bold mb-6">Related articles</h2>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {related.map((r) => (
                      <Link
                        key={r.id}
                        to="/blog/$slug"
                        params={{ slug: r.slug }}
                        className="group rounded-2xl border border-border bg-card p-5 hover:border-coral/40 hover:shadow-glow transition-all flex flex-col"
                      >
                        <h3 className="font-bold text-foreground leading-tight line-clamp-3">{r.title}</h3>
                        <p className="mt-2 text-xs text-muted-foreground line-clamp-3">{r.excerpt}</p>
                        <span className="mt-4 inline-flex items-center gap-1 text-coral text-sm font-semibold">
                          Read <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
