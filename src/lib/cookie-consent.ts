// Client-side cookie consent store. GDPR + CCPA/CPRA aware.
// Non-essential categories default to DENIED until the visitor explicitly
// consents. Consent Mode v2 signals are dispatched so any later-added
// GA/Meta pixel picks up the current state.

import { useEffect, useSyncExternalStore } from "react";

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export interface ConsentState {
  version: number;
  timestamp: string;
  categories: Record<ConsentCategory, boolean>;
  region: "eu" | "us-ca" | "other";
}

const STORAGE_KEY = "origami99-cookie-consent-v1";
const CURRENT_VERSION = 1;

const EU_LANGS = new Set([
  "de", "fr", "it", "es", "pt", "nl", "sv", "fi", "da", "no", "pl",
  "cs", "sk", "hu", "ro", "bg", "el", "hr", "sl", "lt", "lv", "et",
  "ga", "mt", "en-gb", "en-ie",
]);

function detectRegion(): ConsentState["region"] {
  if (typeof navigator === "undefined") return "other";
  const lang = (navigator.language || "").toLowerCase();
  if (EU_LANGS.has(lang) || EU_LANGS.has(lang.split("-")[0])) return "eu";
  if (lang === "en-us") {
    // Loose California hint: timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      if (tz === "America/Los_Angeles") return "us-ca";
    } catch { /* noop */ }
  }
  return "other";
}

function read(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CURRENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

const listeners = new Set<() => void>();

function emit() {
  for (const l of listeners) l();
  // Dispatch a browser event so non-React code (analytics scripts, tag managers)
  // can also react.
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("cookie-consent-change"));
  }
}

function write(next: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  pushConsentMode(next);
  emit();
}

function pushConsentMode(state: ConsentState) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  const update = {
    ad_storage: state.categories.marketing ? "granted" : "denied",
    ad_user_data: state.categories.marketing ? "granted" : "denied",
    ad_personalization: state.categories.marketing ? "granted" : "denied",
    analytics_storage: state.categories.analytics ? "granted" : "denied",
    functionality_storage: state.categories.preferences ? "granted" : "denied",
    personalization_storage: state.categories.preferences ? "granted" : "denied",
    security_storage: "granted",
  };
  w.dataLayer.push({ event: "consent_update", ...update });
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", update);
  }
}

export function initConsentMode() {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // Default = denied (EU-safe). If a stored state exists we immediately update.
  w.dataLayer.push({
    event: "consent_default",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
  const existing = read();
  if (existing) pushConsentMode(existing);
}

export function acceptAll(): ConsentState {
  const state: ConsentState = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    region: detectRegion(),
    categories: { necessary: true, preferences: true, analytics: true, marketing: true },
  };
  write(state);
  return state;
}

export function rejectAll(): ConsentState {
  const state: ConsentState = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    region: detectRegion(),
    categories: { necessary: true, preferences: false, analytics: false, marketing: false },
  };
  write(state);
  return state;
}

export function saveCustom(cats: Partial<Record<ConsentCategory, boolean>>): ConsentState {
  const current = read();
  const state: ConsentState = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    region: current?.region ?? detectRegion(),
    categories: {
      necessary: true,
      preferences: !!cats.preferences,
      analytics: !!cats.analytics,
      marketing: !!cats.marketing,
    },
  };
  write(state);
  return state;
}

export function getConsent(): ConsentState | null {
  return read();
}

export function hasDecided(): boolean {
  return read() !== null;
}

export function hasConsent(cat: ConsentCategory): boolean {
  const state = read();
  if (!state) return cat === "necessary";
  return !!state.categories[cat];
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

export function useConsent(): ConsentState | null {
  return useSyncExternalStore(subscribe, read, () => null);
}

export function useConsentDecided(): boolean {
  const c = useConsent();
  return c !== null;
}

// Expose a global opener for the preferences modal so the footer,
// the /cookies page, and any external CTA can reopen it.
declare global {
  interface Window {
    __openCookiePreferences?: () => void;
  }
}

export function useRegisterPreferencesOpener(open: () => void) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.__openCookiePreferences = open;
    return () => {
      if (window.__openCookiePreferences === open) delete window.__openCookiePreferences;
    };
  }, [open]);
}

export function openPreferences() {
  if (typeof window !== "undefined" && typeof window.__openCookiePreferences === "function") {
    window.__openCookiePreferences();
  }
}
