import {
  Code2, Globe, Search, Megaphone, Palette,
  Smartphone, Boxes, Database, Server, Cloud, Brain, ShoppingBag,
  Target, Video, BarChart3, FileText, Layers, Zap, PenTool, Layout, Sparkles,
} from "lucide-react";

export type SubService = {
  icon: typeof Code2;
  title: string;
  desc: string;
  /** Optional dedicated deep-dive page path, e.g. "/services/software/custom-software-development" */
  href?: string;
};

export type ServiceDef = {
  slug: string;
  icon: typeof Code2;
  title: string;
  tagline: string;
  hero: string;
  category: "Build" | "AI" | "Growth" | "Create" | "Scale";
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  tech: string[];
  subServices?: SubService[];
  tools?: { name: string; label?: string }[];
  faqs?: { q: string; a: string }[];
  caseSpotlight?: {
    client: string;
    story: string;
    metrics: { k: string; v: string }[];
  };
  deliverables?: string[];
  guarantees?: { title: string; body: string }[];
};

// Legacy slug redirects, keep old URLs alive after service consolidation.
export const LEGACY_REDIRECTS: Record<string, string> = {
  "software-development": "software",
  "mobile-app-development": "software",
  "ui-ux-design": "software",
  "custom-saas": "software",
  "erp-development": "software",
  "ai-solutions": "software",
  "industrial-deployment": "software",
  "cloud-solutions": "software",
  "analytics-cro": "digital-marketing",
  "google-meta-ads": "digital-marketing",
  "video-editing": "digital-marketing",
  "branding": "brand-identity",
};

export const SERVICES: ServiceDef[] = [
  {
    slug: "software",
    icon: Code2,
    title: "Software Development",
    tagline: "Software, apps, SaaS and ERP, built end to end by one senior team.",
    hero: "One team builds the whole thing. Apps for phones, systems for your office, products you sell to customers. We plan it, build it, launch it, and keep it running as you grow.",
    category: "Build",
    benefits: [
      { title: "One team for the whole build", desc: "Design, code, testing and hosting handled in house. No handoffs between vendors, no one to blame but us." },
      { title: "Senior people only", desc: "Every line of code is written or checked by a senior engineer. No juniors learning on your budget." },
      { title: "Built to run in the real world", desc: "Monitoring, backups, tests and documentation are part of the build, not an extra you pay for later." },
    ],
    process: [
      { step: "01", title: "Understand", desc: "We learn how your business works, agree what success looks like, and write the plan before any code." },
      { step: "02", title: "Plan the build", desc: "Data, security and hosting decisions made up front, in plain language, so there are no surprises later." },
      { step: "03", title: "Design", desc: "Clickable screens you can try before we build them, tested with the people who will use them daily." },
      { step: "04", title: "Build", desc: "Two week cycles with a working demo at the end of each one. You see real software, not status decks." },
      { step: "05", title: "Launch and grow", desc: "A smooth release with no downtime, then a roadmap and a team that stays with you after go live." },
    ],

    tech: ["TypeScript", "React", "Next.js", "Node.js", "Go", "Python", "React Native", "Swift", "Kotlin", "PostgreSQL", "Redis", "AWS", "GCP", "Kubernetes"],
    subServices: [
      { icon: Code2, title: "Custom Software Development", desc: "Bespoke platforms, internal tools and industrial systems engineered for performance and scale.", href: "/services/software/custom-software-development" },
      { icon: Database, title: "Custom SaaS Products", desc: "Multi tenant SaaS with auth, billing, entitlements and observability, MVP in six weeks.", href: "/services/software/custom-saas-products" },
      { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross platform iOS and Android apps with offline first architecture and store ready pipelines.", href: "/services/software/mobile-app-development" },
      { icon: Palette, title: "UI and UX Design", desc: "Research led product design and design systems that convert while feeling inevitable.", href: "/services/software/ui-ux-design" },
      { icon: Boxes, title: "ERP Development", desc: "Modular finance, inventory, HR and operations modules that integrate with your existing stack.", href: "/services/software/erp-development" },
      { icon: Brain, title: "AI Solutions", desc: "RAG pipelines, chatbots, custom LLM integrations and workflow automation tied to your KPIs." },
      { icon: Cloud, title: "Cloud and Infrastructure", desc: "AWS, GCP and Cloudflare architecture, cost tuned, multi region, 99.99 percent uptime." },
      { icon: Server, title: "DevOps and Deployment", desc: "CI CD, Kubernetes, blue green and canary releases engineered for industrial reliability." },
    ],
    tools: [
      { name: "React" }, { name: "Next.js" }, { name: "Node.js" }, { name: "TypeScript" },
      { name: "React Native" }, { name: "Swift" }, { name: "Kotlin" }, { name: "PostgreSQL" },
      { name: "Redis" }, { name: "AWS" }, { name: "GCP" }, { name: "Kubernetes" },
      { name: "Terraform" }, { name: "Stripe" }, { name: "Figma" }, { name: "OpenAI" },
    ],
    faqs: [
      { q: "Can you take a product from zero to launch?", a: "Yes. Most greenfield builds go from kickoff to a live MVP in six to nine weeks, then scale from there." },
      { q: "Do you work with our existing team?", a: "Often. We embed with in house product and engineering as a senior squad, or we run the whole build. Your call." },
      { q: "Who owns the code?", a: "You do. Full IP transfer, all repositories, credentials and documentation handed over from day one." },
      { q: "What about long term support?", a: "SLA backed maintenance, on call rotation and a continuous improvement backlog. We stay after launch." },
      { q: "How do you keep the build on budget?", a: "Fixed price roadmap, weekly demos, and a change log every Friday. No surprise invoices." },
      { q: "What if we already have a design system?", a: "Perfect. We extend it, document it and ship inside your existing tokens instead of forcing a rebuild." },
    ],
    caseSpotlight: {
      client: "Power Cabs",
      story: "A full dispatch, driver and finance platform rebuilt from scratch. Native driver app, live map, real time ride events, admin dashboards and payout automation, delivered in nine weeks.",
      metrics: [
        { k: "9 wks", v: "Kickoff to live" },
        { k: "42%", v: "Faster dispatch" },
        { k: "0", v: "Rollback releases" },
      ],
    },
    deliverables: [
      "Discovery, tech blueprint and roadmap",
      "Design system in Figma with tokens",
      "Native iOS and Android builds",
      "Web app with role based access",
      "Admin dashboard and reporting",
      "CI CD pipeline and observability",
      "Full documentation and handover",
      "90 days of post launch support",
    ],
    guarantees: [
      { title: "Fixed price roadmap", body: "You get a written scope and estimate before we start. No surprise invoices." },
      { title: "Weekly working demos", body: "Every Friday you see real software, not screenshots or status decks." },
      { title: "You own everything", body: "Repos, cloud accounts, design files, IP. Full handover from day one." },
    ],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    tagline: "Custom sites, ecommerce and CMS builds that convert on every device.",
    hero: "From hand coded React platforms to Shopify, WordPress, Webflow, Wix, Framer and AI assisted builds, we ship websites that load fast, rank well and turn visitors into revenue.",
    category: "Build",
    benefits: [
      { title: "Core Web Vitals green", desc: "Sub second loads with edge delivery, smart caching and image pipelines." },
      { title: "SEO ready by default", desc: "Semantic markup, structured data and clean URLs, tuned for search from day one." },
      { title: "Built for your team", desc: "A CMS your marketers actually use. No WordPress chaos, no locked in templates." },
    ],
    process: [
      { step: "01", title: "Strategy", desc: "Audience, goals, information architecture and conversion mapping before any pixels move." },
      { step: "02", title: "Design", desc: "Wireframes, design system and conversion led prototypes reviewed in Figma." },
      { step: "03", title: "Build", desc: "Component driven development with accessibility, analytics and CMS baked in." },
      { step: "04", title: "Launch", desc: "QA, performance budget, SEO migration and structured data validation." },
      { step: "05", title: "Optimize", desc: "A B tests, heatmaps and ongoing CRO improvements owned by a dedicated squad." },
    ],
    tech: ["React", "Next.js", "Astro", "Shopify", "WordPress", "Webflow", "Framer", "Wix", "Sanity", "Contentful", "Vercel", "Cloudflare"],
    subServices: [
      { icon: Code2, title: "Custom Web Development", desc: "Hand coded React and Next.js sites and web apps for brands that need every millisecond.", href: "/services/web-development/custom-web-development" },
      { icon: ShoppingBag, title: "Shopify and Ecommerce", desc: "Custom Shopify themes, headless storefronts, subscriptions and international commerce.", href: "/services/web-development/shopify-ecommerce" },
      { icon: FileText, title: "WordPress Development", desc: "Editorial and enterprise WordPress builds with headless architecture and speed budgets.", href: "/services/web-development/wordpress-development" },
      { icon: Layers, title: "Webflow and Framer", desc: "Design led marketing sites your team can update without ever opening a ticket.", href: "/services/web-development/webflow-framer" },
      { icon: Globe, title: "Wix and No Code", desc: "For lean brands that need to move today, launched fast, built to convert, not to look generic.", href: "/services/web-development/wix-no-code" },
      { icon: Brain, title: "AI Assisted Website Builds", desc: "AI generated first drafts, hand tuned by senior designers and engineers before launch." },
      { icon: Layout, title: "Landing Pages and Funnels", desc: "Purpose built pages for launches, campaigns and paid traffic, engineered for conversion." },
      { icon: Zap, title: "Web App Interfaces", desc: "Dashboards, admin panels and internal tools with premium UX and a real design system." },
    ],
    tools: [
      { name: "React" }, { name: "Next.js" }, { name: "Astro" }, { name: "Tailwind CSS" },
      { name: "Shopify" }, { name: "WordPress" }, { name: "Webflow" }, { name: "Framer" },
      { name: "Wix" }, { name: "Sanity" }, { name: "Contentful" }, { name: "Vercel" },
      { name: "Cloudflare" }, { name: "Figma" }, { name: "GA4" }, { name: "GSC" },
    ],
    faqs: [
      { q: "Which platform is right for us?", a: "It depends on your team, traffic and roadmap. Discovery is where we recommend Shopify vs headless, WordPress vs Sanity, Webflow vs custom React." },
      { q: "How fast can you launch a website?", a: "A high converting landing page in one to two weeks. A full custom site typically ships in four to eight weeks depending on scope." },
      { q: "Will the site rank on Google?", a: "SEO is baked in. Every build passes technical SEO, structured data and Core Web Vitals checks before it goes live." },
      { q: "Do you migrate from our current platform?", a: "Yes. WordPress to Next.js, Wix to Shopify, custom to Webflow. We plan redirects, preserve rankings and cut over without downtime." },
      { q: "What about ongoing updates?", a: "Your marketers own the CMS. We stay available for a monthly retainer covering iteration, testing and new pages." },
      { q: "Do you support ADA and WCAG accessibility?", a: "Every build ships to WCAG 2.2 AA. We run automated and manual audits before launch." },
    ],
    caseSpotlight: {
      client: "The Longshot Inc",
      story: "A custom Next.js marketing site with a headless CMS, integrated CRM and paid landing pages. Launch to first six figure month in seventy days.",
      metrics: [
        { k: "312%", v: "Traffic lift in 6 mo" },
        { k: "0.9s", v: "Median LCP" },
        { k: "100", v: "Lighthouse SEO" },
      ],
    },
    deliverables: [
      "Wireframes and design system in Figma",
      "Custom or CMS build to spec",
      "Analytics, GA4 and GTM setup",
      "Technical SEO, schema and redirects",
      "Core Web Vitals under 1s LCP",
      "WCAG 2.2 AA accessibility pass",
      "CRM and marketing tool integrations",
      "Post launch iteration and CRO support",
    ],
    guarantees: [
      { title: "Green Core Web Vitals", body: "If your site does not pass Core Web Vitals at launch, we fix it on our time." },
      { title: "No traffic loss on migration", body: "Full redirect map, structured data and preserved link equity, monitored for 90 days." },
      { title: "Your team runs the CMS", body: "No agency dependency. Your marketers publish without opening a ticket." },
    ],
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Growth Marketing",
    tagline: "Paid, organic and creative, orchestrated against revenue.",
    hero: "Google and Meta Ads, TikTok, YouTube, email, influencer, video and content, run by one senior team against a single revenue dashboard. Every dollar traced to pipeline, every creative tested to profit.",
    category: "Growth",
    benefits: [
      { title: "Profit, not impressions", desc: "We optimize against contribution margin and MER, not clicks or vanity engagement." },
      { title: "Creative that ships weekly", desc: "In house editors and motion designers producing new ads every week, tested against control." },
      { title: "Full funnel attribution", desc: "Server side tracking, GA4 and platform conversion APIs so you see the real numbers." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Account structure, tracking, creative and funnel teardown, benchmarked against the top five in your category." },
      { step: "02", title: "Strategy", desc: "ICP mapping, offer stack, channel mix and creative concepts, tied to revenue targets." },
      { step: "03", title: "Launch", desc: "Restructured campaigns, server side tracking, creative production and landing pages, live in weeks." },
      { step: "04", title: "Scale", desc: "Daily optimization, budget reallocation and creative rotation to profitably increase spend." },
      { step: "05", title: "Report", desc: "Weekly performance reviews, monthly business reviews and quarterly forecast updates." },
    ],
    tech: ["Google Ads", "Meta Ads", "TikTok Ads", "YouTube Ads", "GA4", "HubSpot", "Klaviyo", "Segment", "Triple Whale", "After Effects", "Premiere Pro"],
    subServices: [
      { icon: Target, title: "Google Ads", desc: "Search, Performance Max, YouTube and Display campaigns optimized daily for CPA and ROAS.", href: "/services/digital-marketing/google-ads" },
      { icon: Target, title: "Meta Ads", desc: "Facebook and Instagram Advantage plus, creative testing frameworks and retention funnels.", href: "/services/digital-marketing/meta-ads" },
      { icon: Target, title: "TikTok and Short Form Ads", desc: "Hook first creative built for the feed, tested to profit in seven day windows.", href: "/services/digital-marketing/tiktok-short-form-ads" },
      { icon: Megaphone, title: "Full Funnel Digital Marketing", desc: "Content, email, social and influencer working as one orchestrated funnel, not silos.", href: "/services/digital-marketing/full-funnel-digital-marketing" },
      { icon: Video, title: "Video Editing and Production", desc: "Reels, YouTube ads, brand films and motion graphics engineered for retention and conversion.", href: "/services/digital-marketing/video-editing-production" },
      { icon: PenTool, title: "Creative Strategy", desc: "Concepting, storyboarding and hook engineering. We produce the ideas as well as the ads." },
      { icon: BarChart3, title: "Analytics and CRO", desc: "Server side tracking, A B testing, heatmaps and data driven UX improvements that compound." },
      { icon: FileText, title: "Email and Lifecycle", desc: "Klaviyo and HubSpot flows that turn one time buyers into recurring revenue." },
    ],
    tools: [
      { name: "Google Ads" }, { name: "Meta Ads" }, { name: "TikTok" }, { name: "YouTube" },
      { name: "GA4" }, { name: "GTM" }, { name: "HubSpot" }, { name: "Klaviyo" },
      { name: "Segment" }, { name: "Triple Whale" }, { name: "Hyros" }, { name: "After Effects" },
      { name: "Premiere Pro" }, { name: "DaVinci" }, { name: "Figma" }, { name: "Notion" },
    ],
    faqs: [
      { q: "How soon do you launch?", a: "Kickoff to first campaign in ten to fourteen days on average, including tracking, creative and landing pages." },
      { q: "Do you require long contracts?", a: "No. Month to month after a ninety day foundation phase. We earn the relationship every month." },
      { q: "Can you handle video production in house?", a: "Yes. Concept, script, edit, motion, color and multi format exports all live under one roof." },
      { q: "How do you report performance?", a: "Live dashboards, weekly loom updates, monthly business reviews. Every metric tied to pipeline and revenue." },
      { q: "What is the minimum ad spend?", a: "We recommend at least ten thousand dollars per month in media to unlock proper testing velocity across platforms." },
      { q: "Do you build the landing pages too?", a: "Yes. Every campaign ships with purpose built pages, A B tested, tuned to hit CPA and ROAS targets." },
    ],
    caseSpotlight: {
      client: "Enfield Royal Clinic",
      story: "A full funnel overhaul for a premium aesthetics clinic. Server side tracking, weekly creative testing, landing pages per procedure and a Klaviyo lifecycle engine.",
      metrics: [
        { k: "4.8x", v: "Meta ROAS" },
        { k: "58%", v: "Lower CPL" },
        { k: "3x", v: "Booked calls" },
      ],
    },
    deliverables: [
      "Full account audit and rebuild",
      "Server side tracking and GA4",
      "Weekly creative production",
      "Campaign strategy and roadmap",
      "Landing pages per offer",
      "Email and lifecycle flows",
      "Live revenue dashboard",
      "Weekly and monthly reporting",
    ],
    guarantees: [
      { title: "No long contracts", body: "Month to month after a 90 day foundation phase. We earn the relationship every month." },
      { title: "Every dollar tracked", body: "Server side tracking and conversion APIs so you see the real numbers, not platform inflated ones." },
      { title: "You own the accounts", body: "Ad accounts, pixels, tracking, creative files. All yours from day one." },
    ],
  },
  {
    slug: "seo",
    icon: Search,
    title: "Search Engine Optimization",
    tagline: "Rank on page one for the keywords that actually pay.",
    hero: "Technical SEO, on page optimization, content engines and link acquisition, built to compound month after month.",
    category: "Growth",
    benefits: [
      { title: "Buyer intent keywords", desc: "We target queries that convert, not just queries that rank." },
      { title: "Technical fixes first", desc: "Crawlability, Core Web Vitals, schema and IA, all dialed in before content spend." },
      { title: "Content engine", desc: "Programmatic, editorial and refresh strategies, planned in one roadmap." },
    ],
    process: [
      { step: "01", title: "Audit", desc: "Technical, content and backlink teardown benchmarked against your top competitors." },
      { step: "02", title: "Strategy", desc: "Keyword universe, topical maps and a prioritized roadmap tied to revenue." },
      { step: "03", title: "Implementation", desc: "Technical fixes, content production and on page optimization." },
      { step: "04", title: "Authority", desc: "Digital PR, link building and brand mentions from real, relevant publications." },
      { step: "05", title: "Reporting", desc: "Monthly rankings, traffic and revenue dashboards with a clear next quarter plan." },
    ],
    tech: ["Ahrefs", "Semrush", "GSC", "Screaming Frog", "Schema.org", "GA4", "PageSpeed Insights", "Surfer SEO", "Clearscope", "Sitebulb"],
    subServices: [
      { icon: Search, title: "Technical SEO Audit", desc: "Full crawl, index, schema, Core Web Vitals and site architecture review with a prioritized fix list." },
      { icon: FileText, title: "On Page Optimization", desc: "Title tags, meta, headings, internal links, schema and content depth rewritten to match search intent." },
      { icon: Target, title: "Keyword and Content Strategy", desc: "Buyer intent keyword universe, topical maps and a 12 month editorial calendar tied to revenue." },
      { icon: PenTool, title: "SEO Content Production", desc: "Editorial and programmatic pages written by senior writers, briefed by SEO strategists, edited to rank." },
      { icon: Layers, title: "Link Building and Digital PR", desc: "Placements from real, relevant publications. No PBNs, no spam, only links that move the needle." },
      { icon: ShoppingBag, title: "Local and Ecommerce SEO", desc: "Google Business Profile, local citations, category page optimization and structured data for retail." },
      { icon: BarChart3, title: "Analytics and Reporting", desc: "GA4, Search Console and rank tracking rolled into one monthly dashboard tied to pipeline." },
      { icon: Zap, title: "Core Web Vitals Fixes", desc: "LCP, INP, CLS and TTFB engineered under Google thresholds by senior front end devs." },
    ],
    tools: [
      { name: "Ahrefs" }, { name: "Semrush" }, { name: "GSC" }, { name: "Screaming Frog" },
      { name: "Sitebulb" }, { name: "Surfer SEO" }, { name: "Clearscope" }, { name: "Schema.org" },
      { name: "GA4" }, { name: "GTM" }, { name: "PageSpeed" }, { name: "Looker Studio" },
    ],
    faqs: [
      { q: "How long until we see results?", a: "Technical wins land in the first 30 days. Meaningful ranking shifts show between month 3 and 6. Compounding revenue lift starts around month 6." },
      { q: "What if we already have an SEO agency?", a: "We start with a free teardown of your current work. If they are doing the job, we say so. If not, we show exactly where the gaps are." },
      { q: "Do you build backlinks?", a: "Yes. Digital PR, resource pages, guest features and unlinked mention reclamation. All from real, relevant publications. Zero PBNs." },
      { q: "How do you report progress?", a: "Monthly dashboard with rankings, traffic, conversions and revenue attribution. Plus a written narrative on what changed and why." },
      { q: "Can you help with local SEO?", a: "Yes. Google Business Profile, local citations, review systems, location pages and structured data for multi location brands." },
      { q: "Do you write the content too?", a: "Yes. Senior writers briefed by SEO strategists, edited against ranking pages. No AI slop, no template blogs." },
    ],
    caseSpotlight: {
      client: "A1 Phoenix Plumbing",
      story: "A local service business ranked page 5 for every buyer intent keyword. Twelve months of technical fixes, city landing pages and a review engine took them to the map pack for 40+ terms.",
      metrics: [
        { k: "+280%", v: "Organic leads" },
        { k: "40+", v: "Page 1 keywords" },
        { k: "4.9★", v: "Avg review score" },
      ],
    },
    deliverables: [
      "Technical SEO audit and fix list",
      "Keyword universe and topical map",
      "12 month editorial roadmap",
      "On page optimization sweep",
      "Schema markup implementation",
      "Backlink and digital PR campaigns",
      "Core Web Vitals engineering",
      "Monthly ranking and revenue dashboard",
    ],
    guarantees: [
      { title: "Real reporting, not vanity", body: "Every metric tied to revenue and pipeline. No inflated impression counts." },
      { title: "No PBNs, no spam", body: "Every link from a real, relevant publication. If Google penalizes it, we replace it." },
      { title: "Month to month", body: "No 12 month lock in. We earn the relationship with results, not contracts." },
    ],
  },
  {
    slug: "brand-identity",
    icon: Palette,
    title: "Brand and Identity",
    tagline: "Identity systems that turn companies into category leaders.",
    hero: "Brand strategy, visual identity, voice and guidelines, built for differentiation across every touchpoint your customers will ever see.",
    category: "Create",
    benefits: [
      { title: "Strategy first", desc: "Positioning, narrative and competitive frame before pixels ever move." },
      { title: "Systems, not logos", desc: "Tokens, motion and applications across product, packaging and marketing." },
      { title: "Guidelines that ship", desc: "Documented, opinionated and easy for your team to extend without us." },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Stakeholder workshops, competitive audit and market landscape." },
      { step: "02", title: "Strategy", desc: "Positioning, narrative and naming." },
      { step: "03", title: "Identity", desc: "Logo, color, type, photography and motion system." },
      { step: "04", title: "Application", desc: "Web, packaging, product, social and campaign systems." },
      { step: "05", title: "Guidelines", desc: "Brand book, tokens and on brand AI prompts for your team." },
    ],
    tech: ["Figma", "Illustrator", "After Effects", "Notion"],
    subServices: [
      { icon: Target, title: "Brand Strategy", desc: "Positioning, audience insight, market mapping and the sharp idea your category can remember." },
      { icon: Palette, title: "Visual Identity", desc: "Logo systems, color, typography, layout rules and art direction built to scale across every channel." },
      { icon: FileText, title: "Messaging and Voice", desc: "Narrative, value proposition, tone of voice, campaign lines and sales language your team can use immediately." },
      { icon: Layout, title: "Brand Applications", desc: "Pitch decks, social systems, print collateral, packaging, website direction and product interface styling." },
      { icon: PenTool, title: "Guidelines and Governance", desc: "A practical brand book with rules, examples and decision logic so the identity stays consistent after launch." },
      { icon: Sparkles, title: "Motion and Launch Assets", desc: "Animated marks, reveal systems, launch graphics and premium presentation assets for the first public impression." },
    ],
    tools: [
      { name: "Figma" }, { name: "Illustrator" }, { name: "Photoshop" }, { name: "After Effects" },
      { name: "Cinema 4D" }, { name: "Spline" }, { name: "Notion" }, { name: "Pitch" },
      { name: "Canva Systems" }, { name: "Brand Tokens" }, { name: "Motion Guidelines" }, { name: "Print Specs" },
    ],
    faqs: [
      { q: "Do you only design logos?", a: "No. The logo is one asset inside a larger system. We define positioning, voice, identity rules, launch assets and practical guidelines so the brand works across sales, product and marketing." },
      { q: "Can you refresh an existing brand?", a: "Yes. We preserve the equity worth keeping, remove the parts causing confusion, then rebuild the identity around a clearer commercial position." },
      { q: "Will our team be able to use the brand without you?", a: "Yes. Every engagement includes practical guidelines, reusable templates and rules your internal team can follow without waiting on an agency for every decision." },
      { q: "What deliverables do we receive?", a: "Strategy deck, logo system, type and color system, image direction, application examples, social and presentation templates, export files and a brand book." },
      { q: "How long does a full brand build take?", a: "Six to ten weeks depending on scope. A refresh can land in four weeks; a full identity from scratch runs eight to twelve." },
      { q: "Will you work with our in house designers?", a: "Yes. We hand off tokens, source files and guidelines built to be extended by your team, not to lock you in." },
    ],
    caseSpotlight: {
      client: "Hazel Beauty Bar",
      story: "A regional beauty studio positioned as a luxury category leader. New name direction, wordmark, packaging system, social identity and launch campaign, all live in eight weeks.",
      metrics: [
        { k: "8 wks", v: "Discovery to launch" },
        { k: "+63%", v: "Bookings post launch" },
        { k: "3x", v: "Social engagement" },
      ],
    },
    deliverables: [
      "Brand strategy and positioning deck",
      "Logo system with all lockups",
      "Full color and type system with tokens",
      "Photography and art direction rules",
      "Packaging and print application",
      "Social and pitch deck templates",
      "Motion identity and launch assets",
      "Practical brand book and governance",
    ],
    guarantees: [
      { title: "Strategy before pixels", body: "Every visual decision is defended by a written strategy. No mood boards without meaning." },
      { title: "Systems built to extend", body: "Tokens, rules and templates so your team scales the identity without us." },
      { title: "You own all source files", body: "Figma, Illustrator, After Effects, exports. Full ownership, no reseller trap." },
    ],
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
