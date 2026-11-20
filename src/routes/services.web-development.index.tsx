import { createFileRoute } from "@tanstack/react-router";
import { PremiumServicePage } from "@/components/service3d/PremiumServicePage";
import { getService } from "@/lib/services-data";

const service = getService("web-development")!;

const SITE_URL = "https://ai-spark-engine-11.lovable.app";
const PAGE_URL = `${SITE_URL}/services/web-development`;

export const Route = createFileRoute("/services/web-development/")({
  head: () => ({
    meta: [
      { title: `${service.title} | Origami 99` },
      { name: "description", content: service.tagline },
      { property: "og:title", content: `${service.title} | Origami 99` },
      { property: "og:description", content: service.tagline },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${service.title} | Origami 99` },
      { name: "twitter:description", content: service.tagline },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.tagline,
          url: PAGE_URL,
          provider: { "@type": "Organization", name: "Origami99", url: SITE_URL },
          areaServed: ["PK", "SA", "AE", "CA", "US"],
          serviceType: "Custom web, Shopify, WordPress, Webflow, Framer, Wix and AI assisted website development",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (service.faqs ?? []).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: WebPage,
});

function WebPage() {
  return (
    <PremiumServicePage
      service={service}
      variant="web"
      eyebrow="Custom, Shopify, WordPress, Webflow, Framer, Wix, AI assisted"
      metrics={[
        { value: "0.9s", label: "Median LCP across builds" },
        { value: "312%", label: "Average traffic lift in 6 months" },
        { value: "100", label: "Lighthouse SEO score" },
        { value: "48h", label: "Landing page turnaround" },
      ]}
      problem={{
        headline: "Your website is either working, or it is quietly costing you.",
        body: "Slow load times, weak SEO foundations, and CMS platforms your team dreads updating. Every one of those is a leak in your funnel. We ship websites that load fast, rank naturally, convert on every device, and stay easy for your marketers to run.",
        stakes: [
          "A one second delay drops conversions by 7 percent on average.",
          "Bad Core Web Vitals silently cap your paid and organic reach.",
          "A CMS your team avoids means launches slip, or never happen.",
          "Poor mobile UX loses the 68 percent of buyers who start on phones.",
        ],
      }}
      pricing={[
        {
          name: "Landing Page",
          blurb: "Purpose built for launches, campaigns and paid traffic. Live in one to two weeks.",
          features: ["Conversion focused design", "Custom code or Framer", "Analytics and A B ready", "SEO and schema baked in", "One round of iterations"],
        },
        {
          name: "Full Website",
          blurb: "Marketing site with CMS your team runs without ever opening a ticket. Most popular.",
          features: ["Up to 15 core pages", "Design system in Figma", "Headless CMS or Webflow", "SEO migration and redirects", "90 day performance support"],
          featured: true,
        },
        {
          name: "Ecommerce or Web App",
          blurb: "Shopify, headless commerce or a full custom web application. Built to scale.",
          features: ["Custom theme or web app", "Payments and subscriptions", "Third party integrations", "Analytics and CRO baseline", "Ongoing product squad optional"],
        },
      ]}
      workFilter="Web"
      workDiscipline="web"
    />

  );
}
