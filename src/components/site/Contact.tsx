import { motion } from "motion/react";
import { useState } from "react";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Globe, Loader2,
  Code2, ShoppingCart, Search, Target, Megaphone, Brain, Smartphone, Palette, HelpCircle,
} from "lucide-react";
import { leadsApi } from "@/lib/admin/api";

const locations = [
  { country: "Pakistan", city: "Islamabad", flag: "🇵🇰" },
  { country: "Saudi Arabia", city: "Kingdom of Saudi Arabia", flag: "🇸🇦" },
  { country: "Germany", city: "Berlin", flag: "🇩🇪" },
  { country: "Canada", city: "Toronto", flag: "🇨🇦" },
  { country: "USA", city: "Austin, Texas", flag: "🇺🇸" },
];

const SERVICE_OPTIONS = [
  { value: "Custom Software", icon: Code2 },
  { value: "Web / Mobile App", icon: Smartphone },
  { value: "E-commerce", icon: ShoppingCart },
  { value: "SEO & Content", icon: Search },
  { value: "Google Ads", icon: Target },
  { value: "Meta Ads", icon: Megaphone },
  { value: "AI Integration", icon: Brain },
  { value: "Brand & Design", icon: Palette },
  { value: "Not sure yet", icon: HelpCircle },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", company: "", service: SERVICE_OPTIONS[0].value, message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email and a short message.");
      return;
    }

    setSubmitting(true);
    try {
      await leadsApi.create({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        company: form.company.trim() || null,
        service: form.service || null,
        message: form.message.trim(),
        source: "Website /#contact",
        pageUrl: typeof window !== "undefined" ? window.location.href : null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
      });
      setSent(true);
      setForm(empty);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 surface-cta text-foreground overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-coral/20 diamond rounded-[5rem] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Two ways to start
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-balance">
            Book a call, or <span className="text-coral">send the brief.</span>
          </h2>
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-lg">
            Tell us where you are stuck. We come back with a fixed price roadmap, timeline and exactly who on our team is on it, inside 24 hours. No decks, no pressure.
          </p>

          <div className="mt-8 sm:mt-10 space-y-3">
            {[
              { i: Phone, l: "+92 315 5317998", h: "tel:+923155317998" },
              { i: Phone, l: "+92 337 7771527", h: "tel:+923377771527" },
              { i: Mail, l: "engage@origami99.com", h: "mailto:engage@origami99.com" },
            ].map((c) => (
              <a key={c.l} href={c.h} className="flex items-center gap-4 group">
                <div className="h-12 w-12 rounded-2xl surface-cta-card flex items-center justify-center group-hover:bg-coral group-hover:border-coral group-hover:text-primary-foreground transition-all">
                  <c.i className="h-5 w-5" />
                </div>
                <span className="font-medium">{c.l}</span>
              </a>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-4 w-4 text-coral" />
              <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Global Presence</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.country}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 surface-cta-card rounded-2xl px-3 py-2.5 hover:border-coral/40 hover:shadow-glow transition-all"
                >
                  <span className="text-2xl leading-none">{loc.flag}</span>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm truncate">{loc.country}</div>
                    <div className="text-xs text-muted-foreground truncate flex items-center gap-1">
                      <MapPin className="h-3 w-3 shrink-0" /> {loc.city}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="surface-cta-card rounded-3xl p-6 sm:p-8 shadow-glow"
        >
          {sent ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="h-16 w-16 text-coral mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thanks, we're on it.</h3>
              <p className="text-muted-foreground">A strategist will reach out within 24 hours with your custom plan.</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-coral underline-offset-4 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Start your project</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@company.com" />
                <Field label="Phone" name="phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+1 555 0100" />
                <Field label="Company" name="company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} placeholder="Acme Inc." />
                <div className="sm:col-span-2">
                  <div id="service-label" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    What can we help with?
                  </div>
                  <div
                    role="radiogroup"
                    aria-labelledby="service-label"
                    className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2"
                  >
                    {SERVICE_OPTIONS.map((opt) => {
                      const active = form.service === opt.value;
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setForm({ ...form, service: opt.value })}
                          className={`group relative flex items-center gap-2 p-3 rounded-xl border text-left text-sm font-semibold transition-all ${
                            active
                              ? "bg-coral/20 border-coral text-foreground shadow-glow scale-[1.02]"
                              : "bg-background/40 border-border text-foreground/85 hover:border-coral/50 hover:bg-card/80"
                          }`}
                        >
                          <span className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${active ? "bg-coral-grad text-primary-foreground" : "bg-card text-coral"}`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="leading-tight">{opt.value}</span>
                          {active && (
                            <motion.span
                              layoutId="svc-check"
                              className="absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-coral text-primary-foreground flex items-center justify-center"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                            </motion.span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tell us about your project *</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What are you trying to build or grow?"
                  className="mt-2 w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral resize-none"
                />
              </div>
              {error && (
                <p className="mt-3 text-sm text-coral bg-coral/10 border border-coral/30 rounded-lg px-3 py-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-coral-grad px-6 py-4 rounded-full font-semibold shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
              >
                {submitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <><Send className="h-4 w-4" /> Get My Free Quote</>}
              </button>
              <p className="mt-3 text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required, value, onChange,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full bg-background/55 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral"
      />
    </div>
  );
}
