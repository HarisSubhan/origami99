import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/software-erp";

const url = "https://ai-spark-engine-11.lovable.app/services/software/erp-development";
const title = "ERP Development, Origami99";
const description = "Custom ERP built around your operations, with finance, inventory, sales and HR on one shared ledger.";

export const Route = createFileRoute("/services/software/erp-development")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
