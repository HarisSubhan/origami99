import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/software-ui-ux";

const url = "https://ai-spark-engine-11.lovable.app/services/software/ui-ux-design";
const title = "UI and UX Design, Origami99";
const description = "Product design that removes friction, ships in code, and is measured against real metrics.";

export const Route = createFileRoute("/services/software/ui-ux-design")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
