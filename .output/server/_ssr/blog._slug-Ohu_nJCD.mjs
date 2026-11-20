import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { V as notFound } from "../_libs/tanstack__router-core.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { H as Header, F as Footer } from "./Footer-BbcpjPO7.mjs";
import { b as blogsApi } from "./api-BO2MH7X_.mjs";
import { R as Route$p } from "./router-B0GDL2eA.mjs";
import { aj as ArrowLeft, a9 as User, aa as Calendar, w as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function BlogPostPage() {
  const {
    slug
  } = Route$p.useParams();
  const {
    data: posts,
    isLoading
  } = useQuery({
    queryKey: ["public", "blogs"],
    queryFn: blogsApi.list
  });
  const post = posts?.find((p) => p.slug === slug && p.status === "published");
  if (!isLoading && !post) throw notFound();
  const readingMin = post ? Math.max(1, Math.round(post.body.split(/\s+/).filter(Boolean).length / 220)) : null;
  const related = post ? (posts ?? []).filter((p) => p.status === "published" && p.slug !== post.slug).sort((a, b) => {
    const at = a.tags ?? [];
    const bt = b.tags ?? [];
    const pt = post.tags ?? [];
    const ao = at.filter((x) => pt.includes(x)).length;
    const bo = bt.filter((x) => pt.includes(x)).length;
    if (ao !== bo) return bo - ao;
    return new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime();
  }).slice(0, 3) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-28 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-muted-foreground hover:text-coral text-sm font-semibold mb-6 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to blog"
      ] }),
      isLoading || !post ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-2/3 bg-muted rounded animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64 bg-muted rounded-3xl animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-muted rounded animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-muted rounded animate-pulse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-1/2 bg-muted rounded animate-pulse" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 flex-wrap text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4" }),
            post.author
          ] }),
          post.publishedAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }),
            new Date(post.publishedAt).toLocaleDateString()
          ] }),
          readingMin && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }),
            readingMin,
            " min read"
          ] }),
          post.tags?.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center rounded-full bg-coral/10 text-coral border border-coral/20 px-2 py-0.5 text-xs font-semibold", children: [
            "#",
            t
          ] }, t))
        ] }),
        post.coverUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.coverUrl, alt: post.title, width: 1600, height: 900, loading: "lazy", className: "mt-8 w-full rounded-3xl aspect-[16/9] object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 prose prose-lg dark:prose-invert max-w-none", children: post.body.split(/\n\n+/).map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/85 leading-relaxed whitespace-pre-wrap", children: para }, i)) }),
        related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "mt-16 pt-10 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-6", children: "Related articles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-5", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
            slug: r.slug
          }, className: "group rounded-2xl border border-border bg-card p-5 hover:border-coral/40 hover:shadow-glow transition-all flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground leading-tight line-clamp-3", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground line-clamp-3", children: r.excerpt }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-coral text-sm font-semibold", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" })
            ] })
          ] }, r.id)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPostPage as component
};
