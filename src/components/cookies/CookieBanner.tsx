import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Cookie, Settings2, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  acceptAll,
  rejectAll,
  saveCustom,
  hasDecided,
  getConsent,
  useRegisterPreferencesOpener,
  type ConsentCategory,
} from "@/lib/cookie-consent";

type Cat = Exclude<ConsentCategory, "necessary">;

const CATEGORIES: { key: Cat; label: string; desc: string }[] = [
  {
    key: "preferences",
    label: "Preferences",
    desc: "Remember your theme, language and site preferences.",
  },
  {
    key: "analytics",
    label: "Analytics",
    desc: "Anonymised usage stats so we can improve the site (e.g. Google Analytics).",
  },
  {
    key: "marketing",
    label: "Marketing",
    desc: "Attribution and retargeting pixels for the ads we run (e.g. Meta, LinkedIn).",
  },
];

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [custom, setCustom] = useState<Record<Cat, boolean>>({
    preferences: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    if (!hasDecided()) setVisible(true);
    else {
      const c = getConsent();
      if (c) setCustom({ preferences: c.categories.preferences, analytics: c.categories.analytics, marketing: c.categories.marketing });
    }
  }, []);

  useRegisterPreferencesOpener(() => {
    const c = getConsent();
    if (c) setCustom({ preferences: c.categories.preferences, analytics: c.categories.analytics, marketing: c.categories.marketing });
    setVisible(true);
    setPrefsOpen(true);
  });

  if (!mounted) return null;

  const closeAll = () => {
    setVisible(false);
    setPrefsOpen(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Preferences modal backdrop */}
          {prefsOpen && (
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
              onClick={() => setPrefsOpen(false)}
            />
          )}

          <motion.div
            role="dialog"
            aria-label="Cookie consent"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className={`fixed z-[100] bottom-4 left-4 right-4 sm:right-auto sm:w-[400px] ${prefsOpen ? "sm:w-[520px]" : ""} rounded-3xl bg-navy-deep text-white border border-white/10 shadow-2xl overflow-hidden`}
            style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-coral-grad" />
            <div className="p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="shrink-0 h-10 w-10 rounded-2xl bg-coral/15 border border-coral/30 flex items-center justify-center">
                  <Cookie className="h-5 w-5 text-coral" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold">Cookies on Origami 99</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">
                    We use cookies to run this site, remember your preferences and measure what works. You can accept all, reject non-essential, or customise your choice. See our{" "}
                    <Link to="/privacy" onClick={closeAll} className="text-coral hover:underline">Privacy Policy</Link> and{" "}
                    <Link to="/cookies" onClick={closeAll} className="text-coral hover:underline">Cookie Policy</Link>.
                  </p>
                </div>
                <button
                  onClick={closeAll}
                  aria-label="Close cookie banner"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {prefsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-5 space-y-3"
                >
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-3.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold">Strictly necessary</p>
                        <p className="text-xs text-white/60 mt-0.5">Required for the site to work (session, security, load balancing). Always on.</p>
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-coral">Always on</span>
                    </div>
                  </div>
                  {CATEGORIES.map((c) => (
                    <label
                      key={c.key}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-3.5 cursor-pointer hover:border-coral/40 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={custom[c.key]}
                        onChange={(e) => setCustom((prev) => ({ ...prev, [c.key]: e.target.checked }))}
                        className="mt-1 h-4 w-4 accent-coral"
                      />
                      <div>
                        <p className="text-sm font-semibold">{c.label}</p>
                        <p className="text-xs text-white/60 mt-0.5">{c.desc}</p>
                      </div>
                    </label>
                  ))}
                </motion.div>
              )}

              <div className="mt-5 flex flex-col sm:flex-row gap-2">
                {prefsOpen ? (
                  <>
                    <button
                      onClick={() => { saveCustom(custom); closeAll(); }}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-coral-grad px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
                    >
                      Save my choices
                    </button>
                    <button
                      onClick={() => setPrefsOpen(false)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => { acceptAll(); closeAll(); }}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-coral-grad px-4 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all"
                    >
                      Accept all
                    </button>
                    <button
                      onClick={() => { rejectAll(); closeAll(); }}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors"
                    >
                      Reject non-essential
                    </button>
                    <button
                      onClick={() => setPrefsOpen(true)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border border-white/15 hover:bg-white/5 transition-colors"
                      aria-label="Customise cookies"
                    >
                      <Settings2 className="h-4 w-4" />
                      Customise
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
