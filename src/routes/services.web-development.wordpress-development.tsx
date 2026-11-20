import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/web-wordpress";

const url = "https://ai-spark-engine-11.lovable.app/services/web-development/wordpress-development";
const title = "WordPress Development, Origami99";
const description = "Fast, secure, block editor first WordPress sites your marketing team owns.";

export const Route = createFileRoute("/services/web-development/wordpress-development")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
