import { motion } from "motion/react";

// Real client logos (uploaded to CDN)
import enfieldroyalLogo from "@/assets/logos/enfieldroyal-logo.png";
import dubaisafariLogo from "@/assets/logos/dubaisafari-logo.svg";
import exposksaLogo from "@/assets/logos/exposksa-logo.png";
import theductiblesLogo from "@/assets/logos/theductibles-logo.svg";
import realtoratifLogo from "@/assets/logos/realtoratif-logo.png";
import caliprogarageLogo from "@/assets/logos/caliprogarage-logo.jpg";
import caligaragedoorgatesLogo from "@/assets/logos/caligaragedoorgates-logo.jpg";
import sanjoseheatcoolingLogo from "@/assets/logos/sanjoseheatcooling-logo.png";
import a1phoenixplumbingLogo from "@/assets/logos/a1phoenixplumbing-logo.png";
import tamrsolutionsLogo from "@/assets/logos/tamrsolutions-logo.png";
import culturehijabLogo from "@/assets/logos/culturehijab-logo.png";
import luxmarkLogo from "@/assets/logos/luxmark-logo.jpg";
import agogLogo from "@/assets/logos/agog-logo.png";
import ambleLogo from "@/assets/logos/amble-logo.png";
import albakirbarbershopLogo from "@/assets/logos/albakirbarbershop-logo.png";
import thelongshotincLogo from "@/assets/logos/thelongshotinc-logo.jpg";
import silentedgecoLogo from "@/assets/logos/silentedgeco-logo.png";
import myexploreislamLogo from "@/assets/logos/myexploreislam-logo.png";
import susanLogo from "@/assets/logos/culturehijab-logo.png";

import { generatedLogos, usServiceLogos } from "./GeneratedLogos";
import type { ReactElement } from "react";

type Logo = { name: string; src?: string; Component?: (p: { className?: string }) => ReactElement };

// Top row, real client logos + our original partner marks
const topLogos: Logo[] = [
  { name: "Enfield Royal Clinics", src: enfieldroyalLogo },
  { name: "Dubai Safari Park",     src: dubaisafariLogo },
  { name: "Expo's KSA",            src: exposksaLogo },
  { name: "Culture Hijab",         src: culturehijabLogo },
  { name: "Luxmark",               src: luxmarkLogo },
  { name: "AGOG",                  src: agogLogo },
  { name: "Amble",                 src: ambleLogo },
  { name: "TAMR Solutions",        src: tamrsolutionsLogo },
  { name: "My Explore Islam",      src: myexploreislamLogo },
  { name: "Susan",                 src: susanLogo },
  { name: "Realtor Atif",          src: realtoratifLogo },
  ...generatedLogos.map((g) => ({ name: g.name, Component: g.Component })),
];

// Bottom row, US service-business set + remaining real US client logos.
// No overlap with top row.
const bottomLogos: Logo[] = [
  { name: "The Ductibles",          src: theductiblesLogo },
  { name: "Cali Pro Garage",        src: caliprogarageLogo },
  { name: "Cali Garage Doors",      src: caligaragedoorgatesLogo },
  { name: "San Jose Heat & Cooling", src: sanjoseheatcoolingLogo },
  { name: "A1 Phoenix Plumbing",    src: a1phoenixplumbingLogo },
  { name: "Al Bakir Barbershop",    src: albakirbarbershopLogo },
  { name: "The Longshot Inc.",      src: thelongshotincLogo },
  { name: "Silent Edge Co.",        src: silentedgecoLogo },
  ...usServiceLogos.map((g) => ({ name: g.name, Component: g.Component })),
];

export function TrustedBy() {
  const rowA = [...topLogos, ...topLogos];
  const rowB = [...bottomLogos.slice().reverse(), ...bottomLogos.slice().reverse()];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-section-grad overflow-hidden">
      <div className="absolute inset-0 grid-bg-soft opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[40rem] h-40 bg-coral/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-coral text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="h-2 w-2 bg-coral diamond" /> Trusted by
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-balance">
            The names that let us <span className="text-coral">into their P&L.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            A visible slice of the roster, US home services, healthcare groups, luxury retail, hospitality and B2B SaaS. Hundreds more ship under NDA and white-label.
          </p>
        </div>

        {/* Sliding marquees, top and bottom rows never share a logo */}
        <div className="space-y-3 sm:space-y-4">
          <MarqueeRow items={rowA} direction="left" duration={42} />
          <MarqueeRow items={rowB} direction="right" duration={50} />
        </div>

        {/* Trust metrics */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
          {[
            { v: "Hundreds", l: "Websites shipped" },
            { v: "20+", l: "Industries served" },
            { v: "5", l: "Countries · one team" },
            { v: "99.98%", l: "Production uptime" },
          ].map((m, i) => (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl bg-card/40 backdrop-blur border border-border p-4 sm:p-5 text-center hover:border-coral/40 transition-colors"
            >
              <div className="font-display text-2xl sm:text-3xl font-bold text-coral">{m.v}</div>
              <div className="mt-1 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-muted-foreground">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: Logo[];
  direction: "left" | "right";
  duration: number;
}) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <motion.div
        className="flex gap-3 sm:gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            title={logo.name}
            className="shrink-0 h-16 sm:h-20 w-36 sm:w-44 px-4 rounded-xl bg-white border border-border flex items-center justify-center shadow-sm hover:shadow-md hover:border-coral/40 hover:-translate-y-0.5 transition-all"
          >
            {logo.src ? (
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                loading="lazy"
                className="max-h-10 sm:max-h-12 max-w-full object-contain"
              />
            ) : logo.Component ? (
              <logo.Component className="max-h-8 sm:max-h-10 w-auto text-navy-deep" />
            ) : null}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
