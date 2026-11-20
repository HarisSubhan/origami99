import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/dm-meta";

const url = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/meta-ads";
const title = "Meta Ads Management, Origami99";
const description = "Facebook and Instagram ads run as a creative testing machine, with proper Conversions API tracking underneath.";

export const Route = createFileRoute("/services/digital-marketing/meta-ads")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
