import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Shield, Lock, Mail } from "lucide-react";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";
const UPDATED = "July 7, 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy, Origami 99" },
      { name: "description", content: "How Origami 99 collects, uses and protects personal data. GDPR, CCPA/CPRA and global privacy rights explained plainly." },
      { property: "og:title", content: "Privacy Policy, Origami 99" },
      { property: "og:description", content: "How Origami 99 collects, uses and protects personal data. GDPR, CCPA/CPRA and global privacy rights explained plainly." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <article className="mx-auto max-w-3xl px-5 lg:px-8">
          <span className="inline-flex items-center gap-2 text-coral text-xs font-semibold tracking-widest uppercase">
            <Shield className="h-4 w-4" /> Legal
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {UPDATED}. This page is maintained by Origami 99 to answer common privacy questions about our website and services. It is written in plain language and is not a certification or legal opinion.</p>

          <div className="mt-10 space-y-12">
            <Section id="intro" title="1. Who we are">
              <p>
                Origami 99 ("we", "us", "our") is an AI-enabled creative and digital agency operating internationally, with team members in Pakistan, Saudi Arabia, Germany, Canada and the United States. This policy explains how we collect, use, disclose and protect personal data when you visit ai-spark-engine-11.lovable.app, contact us, or engage us for services.
              </p>
              <p>
                For any privacy question, contact <a href="mailto:engage@origami99.com" className="text-coral hover:underline">engage@origami99.com</a>.
              </p>
            </Section>

            <Section id="collect" title="2. Data we collect">
              <p>We only collect what we need to run the site and deliver our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact details</strong> you submit through forms (name, email, phone, company, message).</li>
                <li><strong>Usage data</strong> such as pages viewed, referrer, device, browser and coarse geolocation, collected only if you accept analytics cookies.</li>
                <li><strong>Marketing signals</strong> (ad clicks, retargeting IDs) collected only if you accept marketing cookies.</li>
                <li><strong>Client-project data</strong> that engaged customers share with us to deliver work. This is governed by our master services agreement, not this website policy.</li>
              </ul>
            </Section>

            <Section id="use" title="3. How we use it">
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and deliver proposals.</li>
                <li>Provide and improve the site (uptime, performance, bug fixes).</li>
                <li>Measure marketing effectiveness (only with analytics consent).</li>
                <li>Comply with legal, tax and accounting obligations.</li>
              </ul>
              <p>We do not sell personal information. We do not use your data to train third-party AI models without your explicit consent.</p>
            </Section>

            <Section id="legal-bases" title="4. Legal bases (GDPR)">
              <p>If you are in the EU, EEA or UK, we rely on one or more of the following legal bases under GDPR Article 6:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent</strong>, for analytics and marketing cookies (Article 6(1)(a)).</li>
                <li><strong>Contract</strong>, to respond to a request or deliver a signed engagement (Article 6(1)(b)).</li>
                <li><strong>Legitimate interests</strong>, to secure the site and prevent abuse (Article 6(1)(f)).</li>
                <li><strong>Legal obligation</strong>, for tax, accounting and required record-keeping (Article 6(1)(c)).</li>
              </ul>
            </Section>

            <Section id="rights" title="5. Your rights">
              <p>Depending on where you live, you have some or all of the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GDPR (EU/EEA/UK).</strong> Access, rectification, erasure, restriction, portability and objection (Articles 15 to 22). You may also lodge a complaint with your national data-protection authority.</li>
                <li><strong>CCPA / CPRA (California).</strong> Right to know, right to delete, right to correct, right to opt out of sale or sharing, right to limit the use of sensitive personal information, right to non-discrimination.</li>
                <li><strong>Other jurisdictions.</strong> We honour equivalent rights under Canada (PIPEDA), Brazil (LGPD), UAE (PDPL), Saudi Arabia (PDPL) and Australia (Privacy Act).</li>
              </ul>
              <p>To exercise any right, email <a href="mailto:engage@origami99.com" className="text-coral hover:underline">engage@origami99.com</a>. We respond within 30 days.</p>
            </Section>

            <Section id="cookies" title="6. Cookies and tracking">
              <p>
                We use a small number of cookies, grouped into four categories: strictly necessary, preferences, analytics and marketing. Non-essential categories are off by default and only fire after you consent. You can review and change your choice any time on our <a href="/cookies" className="text-coral hover:underline">Cookie Policy</a> page, or by clicking "Manage cookie preferences" in the footer.
              </p>
            </Section>

            <Section id="retention" title="7. Data retention">
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact form messages: 24 months from last contact, then deleted or anonymised.</li>
                <li>Analytics data: 14 months, aggregated after.</li>
                <li>Financial records: 7 years, per tax law.</li>
                <li>Client-project data: retained per the master services agreement, then deleted on request.</li>
              </ul>
            </Section>

            <Section id="subprocessors" title="8. Sub-processors and third parties">
              <p>We use vetted third parties to run the site and our business. Current sub-processors:</p>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40">
                    <tr className="text-left"><th className="p-3 font-semibold">Provider</th><th className="p-3 font-semibold">Purpose</th><th className="p-3 font-semibold">Location</th></tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border"><td className="p-3">Cloudflare</td><td className="p-3">Hosting, CDN, DDoS protection</td><td className="p-3">Global</td></tr>
                    <tr className="border-t border-border"><td className="p-3">Google Workspace</td><td className="p-3">Business email, docs</td><td className="p-3">EU / US</td></tr>
                    <tr className="border-t border-border"><td className="p-3">Google Analytics (optional)</td><td className="p-3">Anonymised traffic analytics</td><td className="p-3">EU / US</td></tr>
                    <tr className="border-t border-border"><td className="p-3">Meta / LinkedIn (optional)</td><td className="p-3">Ad attribution, retargeting</td><td className="p-3">EU / US</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Google Analytics and marketing pixels are loaded only if you accept the matching consent category.</p>
            </Section>

            <Section id="transfers" title="9. International transfers">
              <p>
                Because our team and infrastructure span multiple regions, personal data may be transferred outside your country. Where required, we rely on the European Commission's Standard Contractual Clauses (SCCs), the UK International Data Transfer Addendum, and adequacy decisions.
              </p>
            </Section>

            <Section id="security" title="10. Security">
              <p>
                We follow industry-standard practices: TLS in transit, encryption at rest for stored records, least-privilege access, audit logging, and mandatory two-factor authentication for the internal team. No system is 100% secure, and we do not claim to be an audited certification holder.
              </p>
            </Section>

            <Section id="children" title="11. Children's privacy">
              <p>Our services are intended for businesses. We do not knowingly collect personal data from anyone under 16.</p>
            </Section>

            <Section id="changes" title="12. Changes to this policy">
              <p>We update this policy when our practices change. The "Last updated" date at the top always reflects the current version.</p>
            </Section>

            <Section id="contact" title="13. Contact and DPO">
              <div className="rounded-2xl bg-card border border-border p-5">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-coral/15 border border-coral/30 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Data protection contact</p>
                    <a href="mailto:engage@origami99.com" className="text-coral hover:underline text-sm">engage@origami99.com</a>
                  </div>
                </div>
              </div>
            </Section>
          </div>

          <div className="mt-16 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            This page is app-owner editable content, not a legal opinion. Please consult qualified counsel for regulated processing.
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
