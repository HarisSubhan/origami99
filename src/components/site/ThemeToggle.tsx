import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Theme = "dark" | "light";

const SESSION_KEY = "origami99-theme-session";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = sessionStorage.getItem(SESSION_KEY) as Theme | null;
  return stored === "dark" ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Clear any legacy persisted preference so returning visitors default to light.
    try {
      localStorage.removeItem("origami99-theme");
      localStorage.removeItem("origami99-theme-v2");
    } catch {}
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      sessionStorage.setItem(SESSION_KEY, next);
    } catch {}
  };

  if (!mounted) {
    return <div className={compact ? "h-9 w-9" : "h-10 w-10"} aria-hidden />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative ${compact ? "h-9 w-9" : "h-10 w-10"} rounded-full flex items-center justify-center border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 hover:border-coral/50 transition-all overflow-hidden`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -18, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 18, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4 text-coral" />
          ) : (
            <Sun className="h-4 w-4 text-coral" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
