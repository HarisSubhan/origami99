// Real client work only. Every entry below is a build we shipped.

import pcDashboard from "@/assets/work/powercabs-dashboard.jpg";
import theductiblesShot from "@/assets/work/theductibles-shot.jpg";
import silentedgecoShot from "@/assets/work/silentedgeco-shot.jpg";
import caliprogarageShot from "@/assets/work/caliprogarage-shot.jpg";
import caligaragedoorgatesShot from "@/assets/work/caligaragedoorgates-shot.jpg";
import sanjoseheatcoolingShot from "@/assets/work/sanjoseheatcooling-shot.jpg";
import snzventuresShot from "@/assets/work/snzventures-shot.jpg";
import exposksaShot from "@/assets/work/exposksa-shot.jpg";
import albakirbarbershopShot from "@/assets/work/albakirbarbershop-shot.jpg";
import thelongshotincShot from "@/assets/work/thelongshotinc-shot.jpg";
import realtoratifShot from "@/assets/work/realtoratif-shot.jpg";
import enfieldroyalShot from "@/assets/work/enfieldroyal-shot.jpg";
import dubaisafariShot from "@/assets/work/dubaisafari-shot.jpg";
import tamrsolutionsShot from "@/assets/work/tamrsolutions-shot.jpg";
import culturehijabShot from "@/assets/work/culturehijab-shot.jpg";
import susanShot from "@/assets/work/susan-shot.jpg";
import hazelbeautybarShot from "@/assets/work/hazelbeautybar-shot.jpg";
import myexploreislamShot from "@/assets/work/myexploreislam-shot.jpg";
import glowieShot from "@/assets/work/glowie-shot.jpg";
import luxmarkShot from "@/assets/work/luxmark-shot.jpg";
import agogShot from "@/assets/work/agog-shot.jpg";
import ambleShot from "@/assets/work/amble-shot.jpg";
import a1phoenixplumbingShot from "@/assets/work/a1phoenixplumbing-shot.jpg";
import cmjDoorShot from "@/assets/work/live/cmj-door.jpg";
import axonposShot from "@/assets/work/live/axonpos.jpg";
import alayaNoirShot from "@/assets/work/live/alaya-noir.jpg";
import thomasForumShot from "@/assets/work/live/thomas-forum.jpg";
import ambientShot from "@/assets/work/live/ambient.jpg";
import projF79cShot from "@/assets/work/live/proj-f79c.jpg";
import agogTravelShot from "@/assets/work/live/agog-travel.jpg";
import electroluxPowerShot from "@/assets/work/live/electrolux-power.jpg";
import evolveLagreeShot from "@/assets/work/live/evolve-lagree.jpg";
import mrPureWaterShot from "@/assets/work/live/mr-pure-water.jpg";
import rxlUsaShot from "@/assets/work/live/rxl-usa.jpg";
import snzStudentShot from "@/assets/work/live/snz-student.jpg";
import snzGatewayShot from "@/assets/work/live/snz-gateway.jpg";

export type Category =
  | "All" | "Software" | "Ecommerce" | "WordPress" | "SEO" | "Local SEO" | "Web" | "Healthcare";
export type Discipline = "software" | "web" | "seo" | "marketing" | "brand";

export type Project = {
  slug: string;
  client: string;
  domain: string;
  category: Exclude<Category, "All">;
  tagline: string;
  outcome?: string;
  region?: string;
  stack?: string[];
  shotUrl?: string;
  featured?: boolean;
  discipline?: Discipline;
};

const LIVE_STILLS: Record<string, string> = {
  "cmj-door": cmjDoorShot,
  "axonpos": axonposShot,
  "alaya-noir": alayaNoirShot,
  "thomas-forum": thomasForumShot,
  "ambient": ambientShot,
  "proj-f79c": projF79cShot,
  "agog-travel": agogTravelShot,
  "electrolux-power": electroluxPowerShot,
  "evolve-lagree": evolveLagreeShot,
  "mr-pure-water": mrPureWaterShot,
  "rxl-usa": rxlUsaShot,
  "snz-student": snzStudentShot,
  "snz-gateway": snzGatewayShot,
};

const liveClip = (slug: string) => ({ shotUrl: LIVE_STILLS[slug] });

export const projects: Project[] = [
  // Recorded live builds
  { slug: "cmj-door", client: "CMJ Door & Hardware", domain: "cmjdoor.com", category: "Web", tagline: "Commercial door catalog with instant quote requests.", outcome: "Quote requests up 3.2x", region: "Miami, USA", stack: ["React", "Tailwind", "Forms API"], ...liveClip("cmj-door"), featured: true },
  { slug: "axonpos", client: "AxonPOS", domain: "axonpos.io", category: "Software", tagline: "Point of sale and stock control with live store analytics.", outcome: "24 stores on one system", region: "Multi region", stack: ["React", "Node", "Postgres"], ...liveClip("axonpos") },
  { slug: "alaya-noir", client: "Alaya Noir", domain: "alayanoir.com", category: "Ecommerce", tagline: "Luxury footwear storefront with editorial product pages.", outcome: "Add to cart up 64%", region: "UAE", stack: ["Headless", "Stripe"], ...liveClip("alaya-noir"), discipline: "brand" },
  { slug: "thomas-forum", client: "Thomas Forum", domain: "thomasforum.com", category: "Web", tagline: "Investment platform site with a fast publishing workflow.", outcome: "Sub second page loads", region: "USA", stack: ["React", "CMS"], ...liveClip("thomas-forum") },
  { slug: "ambient-building", client: "Ambient Building Products", domain: "ambientbp.com", category: "Ecommerce", tagline: "Flooring and materials catalog with sample ordering.", outcome: "18M sq ft delivered", region: "USA", stack: ["Headless", "Search"], ...liveClip("ambient"), discipline: "brand" },
  { slug: "autoparts-pos", client: "AutoParts POS", domain: "autopartspos.app", category: "Software", tagline: "Counter billing and parts lookup for spare parts workshops.", outcome: "Billing time cut in half", region: "Pakistan", stack: ["React", "Node", "Postgres"], ...liveClip("proj-f79c") },
  { slug: "agog-travel", client: "AGOG Travel Solutions", domain: "agogtravel.com", category: "Web", tagline: "Curated journeys, umrah and visa services with guided search.", outcome: "2.6x enquiry volume", region: "Islamabad", stack: ["React", "Booking API"], ...liveClip("agog-travel") },
  { slug: "electrolux-power", client: "Electrolux Power", domain: "electroluxpower.com", category: "Web", tagline: "Solar and storage site with instant quote and savings proof.", outcome: "235kW installed base", region: "Islamabad", stack: ["React", "Quote engine"], ...liveClip("electrolux-power") },
  { slug: "evolve-lagree", client: "Evolve Lagree", domain: "evolvelagree.com", category: "Web", tagline: "Boutique fitness studio with class booking and intro offers.", outcome: "600+ member class base", region: "Katy, Texas", stack: ["React", "Booking"], ...liveClip("evolve-lagree"), discipline: "brand" },
  { slug: "mr-pure-water", client: "Mr. Pure Water", domain: "mrpurewater.com", category: "Ecommerce", tagline: "Whole home water systems with bundles and same day install.", outcome: "Online orders up 38%", region: "USA", stack: ["Ecommerce", "Scheduling"], ...liveClip("mr-pure-water") },
  { slug: "rxl-usa", client: "RXL USA", domain: "rxlusa.com", category: "Web", tagline: "Precision fabrication for data center infrastructure.", outcome: "Built to millimetre spec", region: "USA", stack: ["React", "Motion"], ...liveClip("rxl-usa") },
  { slug: "snz-student-services", client: "SnZ Student Services", domain: "snzventures.com/students", category: "Web", tagline: "Study abroad counselling with matching and visa support.", outcome: "1,200+ students placed", region: "Europe", stack: ["React", "CRM"], ...liveClip("snz-student") },
  { slug: "snz-europe-gateway", client: "SnZ Europe Gateway", domain: "snzventures.com/europe", category: "Web", tagline: "Company formation, fintech licensing and relocation funnel.", outcome: "400+ advisory clients", region: "Europe", stack: ["React", "CRM"], ...liveClip("snz-gateway") },

  // Shipped client platforms and sites
  { slug: "powercabs", client: "PowerCabs", domain: "dispatch.powercabs.ie", category: "Software", tagline: "Taxi dispatch with driver and passenger apps.", outcome: "500+ drivers, 24/7 dispatch", region: "Dublin", stack: ["React", "Node", "Maps"], shotUrl: pcDashboard, featured: true },
  { slug: "enfield-royal-clinics", client: "Enfield Royal Clinics", domain: "enfieldroyalclinics.com.pk", category: "Healthcare", tagline: "WordPress rebuild and technical SEO for a surgical group.", outcome: "Page 1 for 120+ terms", region: "Pakistan", stack: ["WordPress", "SEO"], shotUrl: enfieldroyalShot },
  { slug: "dubai-safari", client: "Dubai Safari Park", domain: "dubaisafari.ae", category: "Web", tagline: "Bilingual ticketing for a flagship wildlife destination.", outcome: "Delivered two weeks early", region: "Dubai", stack: ["Web", "Ticketing"], shotUrl: dubaisafariShot },
  { slug: "expos-ksa", client: "Expo's KSA", domain: "expos-ksa.com", category: "Web", tagline: "Bilingual events platform for a Saudi exhibitions agency.", outcome: "Bilingual, KSA ready", region: "Saudi Arabia", stack: ["Web", "RTL"], shotUrl: exposksaShot },
  { slug: "susan", client: "Susan", domain: "susan.fi", category: "Software", tagline: "AI assistant for newcomers navigating public services.", outcome: "AI first, Helsinki", region: "Finland", stack: ["AI", "React"], shotUrl: susanShot },
  { slug: "glowie", client: "Glowie", domain: "glowie.fi", category: "Software", tagline: "Voice first AI tutor for high school STEM subjects.", outcome: "Voice first edtech", region: "Finland", stack: ["AI", "Voice"], shotUrl: glowieShot },
  { slug: "tamr-solutions", client: "TAMR Solutions", domain: "tamrsolutions.com", category: "Software", tagline: "B2B SaaS site and partner portal for a data platform.", outcome: "5x inbound leads", region: "Saudi Arabia", stack: ["React", "Portal"], shotUrl: tamrsolutionsShot },
  { slug: "realtor-atif", client: "Realtor Atif", domain: "realtoratif.com", category: "WordPress", tagline: "Dubai real estate portal with listings and VR tours.", outcome: "Dubai luxury market", region: "Dubai", stack: ["WordPress", "Listings"], shotUrl: realtoratifShot },
  { slug: "the-longshot-inc", client: "The Longshot Inc.", domain: "thelongshotinc.ca", category: "Web", tagline: "Case study heavy agency site with a lean funnel.", outcome: "Toronto agency refresh", region: "Canada", stack: ["Web", "CRO"], shotUrl: thelongshotincShot },
  { slug: "hazel-beauty-bar", client: "Hazel Beauty Bar", domain: "hazelbeautybar.ca", category: "WordPress", tagline: "Brand forward booking site for a Toronto beauty bar.", outcome: "Bookings up 3.1x", region: "Canada", stack: ["WordPress", "Booking"], shotUrl: hazelbeautybarShot },
  { slug: "culture-hijab", client: "Culture Hijab", domain: "culturehijab.com", category: "Ecommerce", tagline: "Modest fashion storefront with lifecycle flows.", outcome: "Revenue up 218% in 120 days", region: "USA", stack: ["Shopify", "Klaviyo"], shotUrl: culturehijabShot, discipline: "brand" },
  { slug: "luxmark", client: "Luxmark", domain: "luxmark.pk", category: "Ecommerce", tagline: "Premium lifestyle store with a mobile first product page.", outcome: "Mobile first PDP", region: "Pakistan", stack: ["Shopify"], shotUrl: luxmarkShot, discipline: "brand" },
  { slug: "agog", client: "AGOG", domain: "agog.com.pk", category: "Ecommerce", tagline: "Fashion retailer with homepage storytelling and merchandising.", outcome: "Visual merch overhaul", region: "Pakistan", stack: ["Shopify"], shotUrl: agogShot, discipline: "brand" },
  { slug: "amble", client: "Amble", domain: "amble.com.pk", category: "Ecommerce", tagline: "Lookbook style store built around content commerce.", outcome: "Content commerce build", region: "Pakistan", stack: ["Shopify"], shotUrl: ambleShot, discipline: "brand" },
  { slug: "my-explore-islam", client: "My Explore Islam", domain: "myexploreislam.com", category: "Web", tagline: "Education platform with courses, articles and community.", outcome: "Courses, community, UGC", region: "Global", stack: ["Web", "LMS"], shotUrl: myexploreislamShot },
  { slug: "al-bakir-barbershop", client: "Al Bakir Barbershop", domain: "albakirbarbershop.com", category: "WordPress", tagline: "Booking first grooming site with appointments and gallery.", outcome: "Booking first funnel", region: "USA", stack: ["WordPress"], shotUrl: albakirbarbershopShot },
  { slug: "silent-edge-co", client: "Silent Edge Co.", domain: "silentedgeco.com", category: "WordPress", tagline: "Facility services site with a catalog and quote flow.", outcome: "Quote funnel and catalog", region: "USA", stack: ["WordPress"], shotUrl: silentedgecoShot },
  { slug: "the-ductibles", client: "The Ductibles", domain: "theductibles.com", category: "Local SEO", tagline: "Duct cleaning brand refresh with local SEO.", outcome: "Rank 1 in Calgary", region: "Canada", stack: ["SEO", "GBP"], shotUrl: theductiblesShot },
  { slug: "cali-pro-garage", client: "Cali Pro Garage", domain: "caliprogarage.com", category: "Local SEO", tagline: "Garage door service with booking and local SEO in 12 cities.", outcome: "Rank 1 in 12 cities", region: "California", stack: ["SEO", "GBP"], shotUrl: caliprogarageShot },
  { slug: "cali-garage-doors-gates", client: "Cali Garage Doors & Gates", domain: "caligaragedoorgates.com", category: "WordPress", tagline: "Sister brand with dedicated landing pages on one backend.", outcome: "Two brands, one backend", region: "California", stack: ["WordPress"], shotUrl: caligaragedoorgatesShot },
  { slug: "san-jose-heat-cooling", client: "San Jose Heat & Cooling", domain: "sanjoseheatandcooling.com", category: "Local SEO", tagline: "HVAC technical SEO built for Bay Area rankings.", outcome: "Top 3 map pack", region: "California", stack: ["SEO", "GBP"], shotUrl: sanjoseheatcoolingShot },
  { slug: "a1-phoenix-plumbing", client: "A1 Phoenix Plumbing", domain: "a1phoenixplumbing.com", category: "Local SEO", tagline: "Plumbing brand with local SEO and emergency funnels.", outcome: "412 extra calls a month", region: "Arizona", stack: ["SEO", "GBP"], shotUrl: a1phoenixplumbingShot },
  { slug: "snz-ventures", client: "SNZ Ventures", domain: "snzventures.com", category: "Web", tagline: "Holding company site with portfolio and investor relations.", outcome: "Portfolio and IR site", region: "Europe", stack: ["React"], shotUrl: snzventuresShot },
];

export const CATEGORIES: Category[] = ["All", "Software", "WordPress", "Ecommerce", "SEO", "Local SEO", "Web", "Healthcare"];

export function projectDiscipline(p: Project): Discipline {
  if (p.discipline) return p.discipline;
  if (p.category === "Software") return "software";
  if (p.category === "SEO" || p.category === "Local SEO") return "seo";
  return "web";
}
