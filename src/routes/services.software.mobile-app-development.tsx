import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/software-mobile";

const url = "https://ai-spark-engine-11.lovable.app/services/software/mobile-app-development";
const title = "Mobile App Development, Origami99";
const description = "iOS and Android apps built for day thirty retention, not launch day metrics.";

export const Route = createFileRoute("/services/software/mobile-app-development")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
