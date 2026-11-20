import { PageShell, HeroWrap, Crumbs, SectionTitle, Panel, Chip, Faq, Related, ContextCta } from "./_shared";
import { FileText, Shield, Zap, Server, Puzzle } from "lucide-react";

export default function Page() {
  return (
    <PageShell>
      <HeroWrap>
        <Crumbs parentLabel="Web Development" parentTo="/services/web-development" current="WordPress Development" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <FileText className="h-3.5 w-3.5" /> WordPress
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            WordPress, done the way
            <span className="block text-primary">a software team would build it.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Half the internet runs on WordPress. Most of it runs badly. We build fast, secure, block editor first sites your marketing team owns.
          </p>
        </div>

        {/* Signature: block editor layout */}
        <div className="mt-12 rounded-2xl border border-border/60 bg-card overflow-hidden shadow-lg">
          <div className="grid grid-cols-[180px_1fr_240px] h-64">
            <div className="border-r border-border/60 bg-muted/30 p-3 text-xs space-y-1.5">
              <div className="font-semibold text-primary">Blocks</div>
              {["Heading", "Paragraph", "Image", "Columns", "CTA", "Testimonial"].map(b => <div key={b} className="p-1.5 rounded hover:bg-muted cursor-pointer">{b}</div>)}
            </div>
            <div className="p-4 bg-background">
              <div className="h-4 w-3/4 bg-foreground/70 rounded mb-2" />
              <div className="h-2 bg-muted rounded mb-1" />
              <div className="h-2 bg-muted rounded w-5/6 mb-3" />
              <div className="grid grid-cols-2 gap-2 mb-3"><div className="h-12 bg-primary/20 rounded" /><div className="h-12 bg-primary/30 rounded" /></div>
              <div className="h-8 w-32 bg-primary rounded" />
            </div>
            <div className="border-l border-border/60 bg-muted/30 p-3 text-xs">
              <div className="font-semibold text-primary mb-2">Inspector</div>
              <div className="space-y-1.5"><div className="flex justify-between"><span>Padding</span><span className="font-mono">24</span></div><div className="flex justify-between"><span>Radius</span><span className="font-mono">12</span></div><div className="flex justify-between"><span>Bg</span><span className="font-mono">brand.100</span></div></div>
            </div>
          </div>
        </div>
      </HeroWrap>

      {/* WHEN WP IS RIGHT */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="When WordPress is the right call" title="A content heavy site with a real editorial team." align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { good: true, t: "Publisher and blog sites", d: "Editorial workflows, taxonomies and roles are WordPress home turf." },
              { good: true, t: "Marketing sites with 50+ pages", d: "Custom post types, ACF fields, structured content by section." },
              { good: false, t: "Complex web apps", d: "Choose custom software instead. WordPress is not an app framework." },
            ].map((c) => (
              <Panel key={c.t}>
                <Chip tone={c.good ? "success" : "warning"}>{c.good ? "Good fit" : "Not the tool"}</Chip>
                <div className="mt-3 font-semibold">{c.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* PLUGIN RISK MATRIX */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Plugin discipline. The single biggest cause of WordPress pain." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5">
              <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Green list</div>
              <ul className="mt-3 space-y-1.5 text-sm">{["ACF Pro", "Yoast or Rank Math (pick one)", "Wordfence", "WP Rocket", "Redirection"].map(x => <li key={x}>· {x}</li>)}</ul>
              <p className="mt-3 text-xs text-muted-foreground">Fewer than eight plugins, all with a maintenance owner.</p>
            </div>
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
              <div className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-widest">Watch list</div>
              <ul className="mt-3 space-y-1.5 text-sm">{["Page builders on top of blocks", "Multiple caching plugins", "Slider plugins", "Free plugins without a 12 month release cadence"].map(x => <li key={x}>· {x}</li>)}</ul>
              <p className="mt-3 text-xs text-muted-foreground">These are the sources of half our clean up projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTING STACK */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle eyebrow="Where the site actually lives" title="Hosting and delivery, engineered like production infrastructure." />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              { icon: Server, l: "Managed host", d: "Kinsta, WPEngine or Rocket, not shared cPanel." },
              { icon: Shield, l: "WAF and firewall", d: "Cloudflare in front, brute force rules on the login." },
              { icon: Zap, l: "Object cache", d: "Redis or Memcached for logged in performance." },
              { icon: Puzzle, l: "Staging", d: "One click clone, real content, safe to break." },
            ].map(({ icon: Icon, l, d }) => (
              <div key={l} className="rounded-2xl border border-border/60 bg-card p-5">
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-semibold">{l}</div>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY POSTURE */}
      <section className="py-16 sm:py-20 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle title="Security posture, the boring stuff that keeps you online." />
          <div className="mt-10 space-y-2">
            {[
              "Automatic core, plugin and theme updates on a Tuesday morning schedule",
              "Off site backups, hourly for content, daily full, 30 days retained",
              "Login hardening with 2FA, IP allow list and rate limits",
              "Malware scan every hour with alerting to a real inbox",
              "Yearly access review, quarterly least privilege check",
            ].map((s, i) => (
              <div key={s} className="flex items-center gap-4 p-3 rounded-lg border border-border/60 bg-card">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <span className="text-sm">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle title="Frequently asked, honestly answered." align="center" />
          <div className="mt-10"><Faq items={[
            { q: "Should we use Elementor or Divi?", a: "For a marketing team without developers, sometimes. For any site you will maintain seriously, no. Native blocks with ACF have caught up and produce lighter markup." },
            { q: "Is WordPress secure?", a: "Yes, when maintained. The vulnerabilities you read about are almost always in abandoned plugins. Discipline solves this, not switching platforms." },
            { q: "Can WordPress handle traffic?", a: "Yes, with proper caching. A well configured WordPress site on a managed host handles a million pageviews a month without flinching." },
            { q: "Do you migrate from other platforms?", a: "Yes. From Webflow, Squarespace, Ghost and older WordPress installs. Content, redirects, images and metadata all move together." },
          ]} /></div>
        </div>
      </section>

      <ContextCta headline="Send us wp-login. We will audit performance, security and plugin bloat in one week." cta="Get a WordPress audit" />

      <Related title="Related capabilities" items={[
        { to: "/services/web-development/custom-web-development", label: "Custom Web Development", blurb: "When WordPress is the wrong shape for your product." },
        { to: "/services/web-development/webflow-framer", label: "Webflow and Framer", blurb: "Marketing sites where designers ship without engineers." },
        { to: "/services/seo", label: "SEO", blurb: "Pair WordPress with a real SEO program." },
      ]} />
    </PageShell>
  );
}
