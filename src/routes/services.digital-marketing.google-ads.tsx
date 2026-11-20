import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/dm-google";

const url = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/google-ads";
const title = "Google Ads Management, Origami99";
const description = "Search, Performance Max and conversion tracking done by a team that treats Google Ads as intent, offer and data.";

export const Route = createFileRoute("/services/digital-marketing/google-ads")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
