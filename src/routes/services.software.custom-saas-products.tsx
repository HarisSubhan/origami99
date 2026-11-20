import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/software-saas";

const url = "https://ai-spark-engine-11.lovable.app/services/software/custom-saas-products";
const title = "Custom SaaS Product Development, Origami99";
const description = "Multi tenant SaaS products with billing, trials, seats, permissions and admin from day one.";

export const Route = createFileRoute("/services/software/custom-saas-products")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
