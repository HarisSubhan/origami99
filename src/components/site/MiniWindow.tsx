import { ReactNode } from "react";

export function MiniWindow({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-[#0b0f1a] border border-white/10 shadow-2xl ${className}`}
      style={{ boxShadow: "0 20px 50px -15px rgba(0,0,0,0.65)" }}
    >
      <div className="flex items-center gap-1.5 px-2 py-1.5 bg-[#0d1220] border-b border-white/5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        {title && <span className="ml-2 text-[10px] font-mono text-white/50 truncate">{title}</span>}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
