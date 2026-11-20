import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/web-wix";

const url = "https://ai-spark-engine-11.lovable.app/services/web-development/wix-no-code";
const title = "Wix and No Code Development, Origami99";
const description = "The fastest route from idea to live URL, without giving up on brand or measurement.";

export const Route = createFileRoute("/services/web-development/wix-no-code")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
