import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { forwardRef, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};
const variants: Record<Variant, string> = {
  primary:
    "bg-coral-grad text-white shadow-glow hover:scale-[1.04] active:scale-[0.98] hover:shadow-[0_20px_50px_-10px_color-mix(in_oklab,var(--coral)_60%,transparent)]",
  secondary:
    "bg-card/80 backdrop-blur border border-border text-foreground hover:border-coral/50 hover:text-coral hover:bg-card",
  ghost:
    "border border-border/60 text-foreground hover:bg-foreground/5 hover:border-coral/40",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
};

export type CtaButtonProps =
  | (Common & { as?: "link"; href: string; to?: never; params?: never })
  | (Common & { as: "route"; to: string; params?: Record<string, string>; href?: never })
  | (Common & { as: "button"; onClick?: () => void; type?: "button" | "submit"; href?: never; to?: never });

export const CtaButton = forwardRef<HTMLElement, CtaButtonProps>(function CtaButton(
  props,
  ref,
) {
  const {
    variant = "primary",
    size = "lg",
    className = "",
    children,
    arrow = true,
  } = props;
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );
  if (props.as === "route") {
    return (
      <Link
        to={props.to}
        params={props.params}
        className={cls}
        ref={ref as never}
      >
        {inner}
      </Link>
    );
  }
  if (props.as === "button") {
    return (
      <button type={props.type ?? "button"} onClick={props.onClick} className={cls} ref={ref as never}>
        {inner}
      </button>
    );
  }
  return (
    <a href={props.href} className={cls} ref={ref as never}>
      {inner}
    </a>
  );
});
