import { ReactNode } from "react";

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.2rem] p-2 bg-neutral-900 border border-white/10 shadow-2xl ${className}`}
      style={{ boxShadow: "0 30px 60px -18px rgba(0,0,0,0.7)" }}
    >
      <div className="relative rounded-[1.7rem] overflow-hidden bg-black" style={{ aspectRatio: "9 / 19" }}>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-black z-20" />
        <div className="absolute inset-0">{children}</div>
      </div>
    </div>
  );
}
