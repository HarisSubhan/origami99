import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { blogsApi } from "@/lib/admin/api";
import { BLOG_SEED, BLOG_COVERS } from "@/lib/admin/blog-seed";
import { ArrowRight, Calendar, User } from "lucide-react";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";

export const Route = createFileRoute("/blog")({
  head: () => {
    const published = BLOG_SEED.filter((p) => p.status === "published");
    const blogLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Origami 99 Blog",
      url: `${SITE_URL}/blog`,
      description: "Expert writing on AI integration, custom software, ecommerce, SEO, digital marketing and enterprise systems from Origami 99.",
      blogPost: published.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        image: BLOG_COVERS[p.slug] ? `${SITE_URL}${BLOG_COVERS[p.slug]}` : undefined,
        datePublished: p.publishedAt,
        author: { "@type": "Organization", name: p.author },
      })),
    };
    return {
      meta: [
        { title: "Blog, Origami99, AI, Growth & Engineering" },
        { name: "description", content: "Expert insights on AI integration, custom software, ecommerce, SEO and digital marketing from the Origami99 senior team." },
        { property: "og:title", content: "Blog, Origami99, AI, Growth & Engineering" },
        { property: "og:description", content: "Expert insights on AI integration, custom software, ecommerce, SEO and digital marketing from the Origami99 senior team." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/blog` },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(blogLd) }],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  const { data, isLoading } = useQuery({ queryKey: ["public", "blogs"], queryFn: blogsApi.list });
  const posts = (data ?? []).filter((p) => p.status === "published");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <section className="mx-auto max-w-6xl px-5 lg:px-8">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> The Origami 99 Blog
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Ideas that <span className="text-coral">ship.</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Practical writing on AI, growth, design and engineering from the team that builds and runs production systems for our clients.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading && Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-72 rounded-3xl bg-muted animate-pulse" />
            ))}

            {!isLoading && posts.length === 0 && (
              <p className="text-muted-foreground col-span-full">No posts published yet, check back soon.</p>
            )}

            {posts.map((p) => (
              <Link
                key={p.id}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-3xl overflow-hidden border border-border bg-card hover:border-coral/40 hover:shadow-glow transition-all"
              >
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  {p.coverUrl ? (
                    <img src={p.coverUrl} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="h-full w-full bg-coral-grad" />
                  )}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-foreground leading-tight">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><User className="h-3 w-3" />{p.author}</span>
                    {p.publishedAt && (
                      <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" />{new Date(p.publishedAt).toLocaleDateString()}</span>
                    )}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-coral text-sm font-semibold">
                    Read article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
