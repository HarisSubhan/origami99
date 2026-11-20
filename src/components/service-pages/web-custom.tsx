import { ReactNode } from "react";
import { PageShell, SectionTitle, Panel, Chip, Faq, Related, ContextCta, CtaButton, Crumbs } from "./_shared";
import { Globe, Layers, Server, Gauge, Database, Search, GitBranch, ShieldCheck, Terminal } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Page scoped background: blueprint grid + drifting node lattice      */
/* ------------------------------------------------------------------ */

function BuildBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* blueprint grid, fades toward the fold */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 100%)",
        }}
      />
      {/* soft primary bloom */}
      <div className="absolute left-1/2 top-[-18rem] h-[36rem] w-[52rem] max-w-[130vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      {/* node and line lattice suggesting a rendered document tree */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice">
        <g stroke="color-mix(in oklab, var(--primary) 22%, transparent)" strokeWidth="1" fill="none">
          <path d="M600 60 L320 180 M600 60 L600 180 M600 60 L880 180" />
          <path d="M320 180 L200 320 M320 180 L420 320 M600 180 L600 320 M880 180 L780 320 M880 180 L1000 320" />
          <path d="M200 320 L140 460 M420 320 L470 460 M600 320 L600 460 M780 320 L730 460 M1000 320 L1060 460" />
        </g>
        <g fill="color-mix(in oklab, var(--primary) 45%, transparent)">
          {[
            [600, 60], [320, 180], [600, 180], [880, 180],
            [200, 320], [420, 320], [600, 320], [780, 320], [1000, 320],
            [140, 460], [470, 460], [600, 460], [730, 460], [1060, 460],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.5}>
              <animate
                attributeName="opacity"
                values="0.25;1;0.25"
                dur={`${3 + (i % 5) * 0.7}s`}
                begin={`${i * 0.24}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero signature: a build console assembling a site                    */
/* ------------------------------------------------------------------ */

const CONSOLE_LINES: { label: string; value: string; state: "ok" | "run" }[] = [
  { label: "resolve routes", value: "34 routes, 6 templates", state: "ok" },
  { label: "content model", value: "9 types, 41 fields", state: "ok" },
  { label: "bundle", value: "82 KB js on first paint", state: "ok" },
  { label: "prerender", value: "28 static, 6 streamed", state: "ok" },
  { label: "vitals", value: "LCP 1.4s, INP 78ms, CLS 0.02", state: "run" },
];

function BuildConsole() {
  return (
    <div className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur-md shadow-xl shadow-primary/5 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <Terminal className="h-3.5 w-3.5" /> origami build
        </span>
      </div>
      <div className="divide-y divide-border/50">
        {CONSOLE_LINES.map((l, i) => (
          <div key={l.label} className="flex items-center justify-between gap-4 px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${l.state === "ok" ? "bg-primary" : "bg-primary/50 animate-pulse"}`}
              />
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground truncate">{l.label}</span>
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-foreground/90 text-right">{l.value}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 bg-muted/40 border-t border-border/60">
        <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-2">
          <span>Performance budget</span>
          <span className="font-mono text-primary">within limits</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-[72%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small local atoms                                                    */
/* ------------------------------------------------------------------ */

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card/70 px-4 py-3">
      <div className="font-mono text-lg font-semibold text-primary">{v}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">{k}</div>
    </div>
  );
}

function Layer({
  icon: Icon,
  name,
  decision,
  risk,
}: {
  icon: typeof Layers;
  name: string;
  decision: string;
  risk: string;
}) {
  return (
    <div className="relative rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <div className="text-lg font-semibold">{name}</div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        <span className="font-medium text-foreground">Decision. </span>
        {decision}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        <span className="font-medium text-foreground">If it goes wrong. </span>
        {risk}
      </p>
    </div>
  );
}

function Step({ n, t, d, note }: { n: string; t: string; d: string; note?: string }) {
  return (
    <div className="relative pl-8 lg:pl-0 lg:pt-10">
      <span className="absolute left-0 top-1 lg:left-0 lg:top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-[11px] text-primary">
        {n}
      </span>
      <div className="font-semibold">{t}</div>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{d}</p>
      {note && <div className="mt-2"><Chip tone="warning">{note}</Chip></div>}
    </div>
  );
}

function Block({ title, children, tone = "muted" }: { title: string; children: ReactNode; tone?: "muted" | "primary" }) {
  return (
    <div
      className={`rounded-2xl border p-5 sm:p-6 ${
        tone === "primary" ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card"
      }`}
    >
      <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <BuildBackdrop />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Crumbs parentLabel="Web Development" parentTo="/services/web-development" current="Custom Web Development" />
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                <Globe className="h-3.5 w-3.5" /> Custom Web Development
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.03]">
                A website is not a page.
                <span className="block text-primary">It is a system that has to hold.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                Most sites are assembled once and then quietly decay. A custom build treats content, rendering, delivery
                and measurement as four separate decisions, each one made on purpose, each one owned by you afterwards.
              </p>
              <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
                Below is exactly how we think about that work. Read it as a walkthrough, not a pitch. If it matches how
                you want your site built, the conversation is easy.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaButton as="route" to="/#contact">Have your current site reviewed</CtaButton>
                <a
                  href="#anatomy"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition"
                >
                  See how a build is structured
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl">
                <Stat k="js budget" v="90 KB" />
                <Stat k="lcp target" v="1.5s" />
                <Stat k="cls target" v="0.05" />
                <Stat k="ownership" v="100%" />
              </div>
            </div>
            <BuildConsole />
          </div>
        </div>
      </section>

      {/* HONEST FRAMING */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Start with the honest part"
            title="Custom is not always the right answer, and we will tell you when it is not."
            sub="A template is a perfectly good decision under the right conditions. The problem is that most teams outgrow those conditions without noticing."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Block title="A template is genuinely fine when">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Your site is under roughly twenty pages and the structure is stable.",
                  "Content changes are copy edits, not new content types.",
                  "Nobody is running experiments against the page.",
                  "Traffic is modest and organic search is not the main channel.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Block>
            <Block title="It stops being fine the moment" tone="primary">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Marketing waits on a developer to publish anything meaningful.",
                  "Every new page type needs a plugin, and every plugin needs another plugin.",
                  "Page speed became a recurring agenda item rather than a one time fix.",
                  "You want to test a hypothesis and the honest estimate is next quarter.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            If your situation sits firmly in the left column, we will say so and point you at the faster route. There is
            no version of this where we sell you a build you do not need.
          </p>
        </div>
      </section>

      {/* ANATOMY */}
      <section id="anatomy" className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Anatomy of the build"
            title="Four layers. Four decisions. Each one has a failure mode."
            sub="Almost every slow, awkward or unmaintainable website can be traced back to one of these four being chosen by accident."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Layer
              icon={Database}
              name="Content layer"
              decision="Which CMS, and more importantly what the content model looks like inside it. Types, fields, relationships, validation."
              risk="Editors start pasting layout into rich text fields. Two years later the content cannot be reused anywhere else."
            />
            <Layer
              icon={Layers}
              name="Render layer"
              decision="Which pages are static, which are streamed, which hydrate at all. Chosen per template, based on how the content behaves."
              risk="Everything renders on the client. The first paint waits for JavaScript, and search engines see an empty shell."
            />
            <Layer
              icon={Server}
              name="Edge layer"
              decision="Where responses are cached and how long each URL stays fresh. Cache rules follow how often content actually changes."
              risk="Either stale pages your team cannot flush, or nothing cached at all and every visitor pays full cost."
            />
            <Layer
              icon={Gauge}
              name="Measurement layer"
              decision="What counts as a conversion, what fires the event, and how field vitals are collected from real visitors."
              risk="You optimise against a lab score while real users on real phones keep bouncing, and nobody can prove why."
            />
          </div>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">How they connect</div>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {["Content layer", "Render layer", "Edge layer", "Measurement layer"].map((n, i) => (
                <div key={n} className="relative rounded-xl border border-primary/25 bg-primary/5 px-4 py-4 text-center">
                  <div className="font-mono text-[10px] text-primary">0{i + 1}</div>
                  <div className="mt-1 text-sm font-semibold">{n}</div>
                  {i < 3 && (
                    <span className="hidden sm:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-primary/60">
                      &rsaquo;
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Measurement feeds back into content. That loop is the whole point. A site that cannot tell you which page
              earned the enquiry is a brochure with a hosting bill.
            </p>
          </div>
        </div>
      </section>

      {/* HOW A PAGE LOADS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Where the seconds actually go"
            title="From request to interactive, step by step."
            sub="Speed is rarely one big problem. It is five small ones stacked on top of each other, and each has a specific fix."
          />
          <div className="relative mt-12">
            <div className="hidden lg:block absolute left-0 right-0 top-3 h-px bg-border" />
            <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
              <Step n="1" t="Request lands" d="A visitor on a mid range phone asks for the page. Nothing has been drawn yet." />
              <Step
                n="2"
                t="Server responds"
                d="Cached at the edge and returned as ready HTML, so the first meaningful content does not wait on a round trip to origin."
                note="Most sites lose a second here"
              />
              <Step
                n="3"
                t="Fonts and images"
                d="One family, preloaded, with a metrics matched fallback. Images sized and served as AVIF with a WEBP fallback."
                note="Layout shift starts here"
              />
              <Step
                n="4"
                t="Hydration"
                d="Only the parts that need behaviour become interactive. A static section stays static and costs nothing."
              />
              <Step
                n="5"
                t="Field data returns"
                d="Real vitals from real visitors flow back in, split by device and template, so the next fix targets the worst page rather than the average."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE BUDGET */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="The budget is a contract"
            title="Every commit is measured against these ceilings, with a reason attached to each."
            sub="A number without a reason gets negotiated away in week six. A number with a reason survives the whole project."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                l: "HTML",
                v: "under 20 KB gzipped",
                why: "Keeps the critical response inside the first network round trip, which is where the first paint is won or lost.",
              },
              {
                l: "JavaScript",
                v: "under 90 KB per page",
                why: "Parsing cost, not download cost, is what stalls mid range Android devices. Less script means a faster time to interactive.",
              },
              {
                l: "Fonts",
                v: "one family, two weights",
                why: "Every extra weight is another blocking request and another opportunity for text to reflow after paint.",
              },
              {
                l: "Images",
                v: "AVIF with WEBP fallback, explicit dimensions",
                why: "Modern formats cut weight substantially, and declared dimensions remove the layout shift that hurts the score most.",
              },
            ].map((b) => (
              <Panel key={b.l}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{b.l}</div>
                  <div className="font-mono text-sm text-primary">{b.v}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.why}</p>
              </Panel>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                The budget runs in the pipeline, not in someone's head. A pull request that pushes a page over its
                ceiling fails the check and has to justify itself before it merges. That is the only way a fast site
                stays fast after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT MODEL */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="The part nobody plans"
            title="Your content model decides how your team will feel every single week."
            sub="Two CMS setups can look identical in a demo and be completely different to live with. The difference is whether content is structured or just stored."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
              <div className="border-b border-border/60 bg-muted/50 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Modelled badly
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed text-muted-foreground">
                <div className="text-foreground">Page</div>
                <div className="pl-4">title : string</div>
                <div className="pl-4">body : rich text</div>
                <div className="pl-4 text-primary/80">/* everything lives in here */</div>
              </div>
              <div className="border-t border-border/60 px-5 py-4 text-sm text-muted-foreground">
                Every layout choice is buried inside one field. Nothing can be listed, filtered, syndicated or reused.
                Adding a new page type means copying an old page and hoping.
              </div>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 overflow-hidden">
              <div className="border-b border-primary/20 bg-primary/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Modelled properly
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed text-muted-foreground">
                <div className="text-foreground">Service</div>
                <div className="pl-4">title, slug, summary</div>
                <div className="pl-4">proofPoints : Metric[]</div>
                <div className="pl-4">faqs : Question[]</div>
                <div className="pl-4">related : Service[]</div>
                <div className="mt-2 text-foreground">CaseStudy</div>
                <div className="pl-4">service : Service</div>
                <div className="pl-4">sector, outcomeSummary</div>
              </div>
              <div className="border-t border-primary/20 px-5 py-4 text-sm text-muted-foreground">
                Content becomes queryable. Related items, breadcrumbs, structured data and landing pages generate
                themselves from relationships that already exist.
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Publishing without a ticket", "Marketing ships a new page type without opening a developer request."],
              ["Reuse without duplication", "One piece of content appears in listings, feeds and structured data at once."],
              ["Migration without pain", "Structured content moves to a new front end. Rich text soup does not."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card p-5">
                <div className="font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH ARCHITECTURE */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Search architecture"
            title="Some of it is authored. Most of it should generate itself."
            sub="Anything a person has to remember to do on every page eventually stops happening. Systems do not forget."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Block title="Authored per route">
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Title and description written for the page, not the brand</li>
                <li>Canonical declared explicitly</li>
                <li>Social preview text and image</li>
                <li>Heading structure that matches the actual argument</li>
              </ul>
            </Block>
            <Block title="Generated from content" tone="primary">
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Sitemap built from the CMS, never a stale static file</li>
                <li>Structured data derived from the content type</li>
                <li>Breadcrumbs from the route tree</li>
                <li>Related links from real relationships</li>
              </ul>
            </Block>
            <Block title="Owned as a system">
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Redirects as an editable list, not buried config</li>
                <li>Internal linking rules with clean anchor text</li>
                <li>Crawl rules reviewed when templates change</li>
                <li>Index coverage watched after every release</li>
              </ul>
            </Block>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Per template head", "Dynamic sitemap", "Structured data", "Redirect registry", "Breadcrumbs", "Canonical logic"].map((t) => (
              <Chip key={t} tone="primary">{t}</Chip>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT SHAPE */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="How the work runs"
            title="Four phases, each one ending in something you can hold."
            sub="No phase closes on a status update. Every phase closes on an artefact you keep whether or not we continue."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                p: "Phase one",
                t: "Map",
                you: "Whoever owns the message",
                out: "Content inventory, page types, the argument each template has to make",
              },
              {
                p: "Phase two",
                t: "Model and design",
                you: "Marketing plus one decision maker",
                out: "Content model, key templates designed, the performance budget agreed in writing",
              },
              {
                p: "Phase three",
                t: "Build",
                you: "Weekly review, nothing more",
                out: "Working templates on a preview URL from the first week, updated continuously",
              },
              {
                p: "Phase four",
                t: "Launch and hand over",
                you: "Everyone who will touch the site",
                out: "Migration, redirect map, CMS training and the repository in your organisation",
              },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-border/60 bg-card p-5 flex flex-col">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">{s.p}</div>
                <div className="mt-2 text-lg font-semibold">{s.t}</div>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">You bring</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.you}</p>
                <div className="mt-4 text-[11px] uppercase tracking-widest text-muted-foreground">You receive</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.out}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/60 bg-card/60 p-5">
            <GitBranch className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The repository, the pipeline, the CMS account and the analytics property are yours from day one, not
              transferred at the end. Nothing about the arrangement depends on you being unable to leave.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-16 sm:py-24 bg-muted/30 border-y border-border/60">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Asked before every engagement"
            title="The questions worth answering directly."
            align="center"
          />
          <div className="mt-10">
            <Faq
              items={[
                {
                  q: "Why would we pay for this when a platform costs a fraction?",
                  a: "For a small stable site you should not. The cost comparison only changes when the platform starts charging you in developer time, plugin licences and page speed. Compare the total for two years, including the hours your team spends working around the tool, and then decide.",
                },
                {
                  q: "Who edits the site after launch?",
                  a: "Your marketing team, in a CMS shaped around your content rather than a generic page builder. Day to day publishing needs no developer. We train the team during handover and leave written documentation behind.",
                },
                {
                  q: "What happens if we stop working with you?",
                  a: "Nothing breaks. The code sits in your repository, the pipeline runs under your account, and the stack is mainstream enough that any competent team can pick it up. We will run a handover session with whoever takes over.",
                },
                {
                  q: "Can we run A/B tests without ruining performance?",
                  a: "Yes, if the assignment happens before the page renders rather than in a blocking client script. We handle it at the edge with a lightweight cookie, or integrate a testing platform in a way that keeps it off the critical path.",
                },
                {
                  q: "How do you handle a migration from an existing site?",
                  a: "Content is exported and remapped into the new model rather than pasted across. Every existing URL is accounted for in a redirect map that we test before launch, so search equity survives the move.",
                },
                {
                  q: "What does the timeline actually depend on?",
                  a: "Content readiness, almost always. Build work is predictable. Waiting on copy, approvals and asset access is what stretches a project. We plan around that honestly rather than quoting a week count we cannot control.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-primary" />
              <div className="font-semibold">Before you commit to anything</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Send us the URL of your current site. We will come back with what the field data says, where the seconds
              are going, and the two or three structural issues worth fixing first. If the answer is that you do not need
              a rebuild, that is what we will tell you.
            </p>
          </div>
        </div>
      </section>

      <ContextCta
        headline="Start with a review, not a proposal."
        sub="A short conversation about how your site is built and where it is holding you back."
        cta="Book a working call"
      />

      <Related
        title="Related capabilities"
        items={[
          { to: "/services/web-development/shopify-ecommerce", label: "Shopify and Ecommerce", blurb: "When the site has to take payment, not just make the case." },
          { to: "/services/web-development/webflow-framer", label: "Webflow and Framer", blurb: "When marketing needs to move without waiting on engineering." },
          { to: "/services/seo", label: "SEO", blurb: "The demand layer that makes a fast site worth having." },
        ]}
      />
    </PageShell>
  );
}
