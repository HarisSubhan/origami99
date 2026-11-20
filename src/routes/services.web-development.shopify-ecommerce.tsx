import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/web-shopify";

const url = "https://ai-spark-engine-11.lovable.app/services/web-development/shopify-ecommerce";
const title = "Shopify and Ecommerce Development, Origami99";
const description = "Shopify stores built for purchase intent, from PDP anatomy through checkout to app stack discipline.";

export const Route = createFileRoute("/services/web-development/shopify-ecommerce")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
