import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Cookie, Settings2 } from "lucide-react";
import { openPreferences } from "@/lib/cookie-consent";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";
const UPDATED = "July 7, 2026";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy, Origami 99" },
      { name: "description", content: "The cookies Origami 99 uses, why we use them, and how to withdraw consent at any time." },
      { property: "og:title", content: "Cookie Policy, Origami 99" },
      { property: "og:description", content: "The cookies Origami 99 uses, why we use them, and how to withdraw consent at any time." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/cookies` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/cookies` }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 lg:px-8">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <Cookie className="h-4 w-4" /> Legal
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">Cookie Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {UPDATED}.</p>

          <div className="mt-8 rounded-2xl bg-card border border-border p-5 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="font-semibold text-foreground">Manage your cookie choices</p>
              <p className="text-sm text-muted-foreground mt-1">Change what you allow at any time.</p>
            </div>
            <button
              onClick={openPreferences}
              className="inline-flex items-center gap-2 bg-coral-grad text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
            >
              <Settings2 className="h-4 w-4" /> Open preferences
            </button>
          </div>

          <div className="mt-10 space-y-10 text-foreground/85 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground">What is a cookie</h2>
              <p className="mt-3">A cookie is a small text file a website stores on your browser to remember information about your visit. Similar technologies (localStorage, pixels, SDKs) work the same way and are covered by this policy.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">The four categories we use</h2>
              <div className="mt-4 space-y-4">
                {[
                  { name: "Strictly necessary", when: "Always on", desc: "Required for the site to function: session, security, load balancing, and remembering your cookie choice itself. No consent needed under GDPR." },
                  { name: "Preferences", when: "Off by default", desc: "Remember your theme (dark/light), language and layout choices between visits." },
                  { name: "Analytics", when: "Off by default", desc: "Anonymised usage statistics (e.g. Google Analytics) so we can see what content works. Fires only after consent." },
                  { name: "Marketing", when: "Off by default", desc: "Attribution and retargeting pixels for ads we run (e.g. Meta, LinkedIn). Fires only after consent." },
                ].map((row) => (
                  <div key={row.name} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-foreground">{row.name}</p>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-coral">{row.when}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{row.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Third-party cookies</h2>
              <p className="mt-3">If enabled, third parties may set their own cookies when their scripts load: Google Analytics, Google Ads, Meta Pixel, LinkedIn Insight Tag. Their processing is governed by their own policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">How to withdraw consent</h2>
              <p className="mt-3">Click <button onClick={openPreferences} className="text-coral hover:underline font-semibold">manage cookie preferences</button> at any time, or clear the origami99-cookie-consent-v1 entry from your browser's local storage. Your choice is respected the next time the site loads.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground">Do Not Track and GPC</h2>
              <p className="mt-3">We honour the Global Privacy Control (GPC) signal as a valid opt-out under CCPA/CPRA. If your browser sends GPC, we treat you as opted out of sale or sharing.</p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
