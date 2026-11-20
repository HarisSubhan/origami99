import { ReactNode } from "react";

type Props = {
  url?: string;
  children: ReactNode;
  className?: string;
  /** aspect ratio, default 16/10 */
  aspect?: string;
};

export function BrowserFrame({ url, children, className = "", aspect = "16 / 10" }: Props) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-card border border-border shadow-2xl ${className}`}
      style={{ boxShadow: "0 30px 80px -20px color-mix(in oklab, var(--foreground) 25%, transparent), 0 0 0 1px color-mix(in oklab, var(--foreground) 4%, transparent)" }}
    >
      {/* Chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-muted border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        {url && (
          <div className="ml-3 flex-1 truncate rounded-md bg-background/60 border border-border px-3 py-1 text-[11px] text-muted-foreground font-mono">
            {url}
          </div>
        )}
      </div>
      {/* Viewport */}
      <div style={{ aspectRatio: aspect }} className="relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}
