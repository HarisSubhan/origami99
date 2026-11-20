import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/web-webflow";

const url = "https://ai-spark-engine-11.lovable.app/services/web-development/webflow-framer";
const title = "Webflow and Framer Development, Origami99";
const description = "Marketing sites on Webflow and Framer that your team can move without engineering.";

export const Route = createFileRoute("/services/web-development/webflow-framer")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
