import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/web-custom";

const url = "https://ai-spark-engine-11.lovable.app/services/web-development/custom-web-development";
const title = "Custom Web Development, Origami99";
const description = "Hand coded websites tuned for Core Web Vitals, wired to a headless CMS your team can actually run.";

export const Route = createFileRoute("/services/web-development/custom-web-development")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
