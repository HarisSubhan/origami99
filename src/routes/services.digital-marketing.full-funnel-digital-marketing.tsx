import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/dm-full-funnel";

const url = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/full-funnel-digital-marketing";
const title = "Full Funnel Digital Marketing, Origami99";
const description = "One plan across every channel, budget allocated by stage of business and measured without kidding yourself.";

export const Route = createFileRoute("/services/digital-marketing/full-funnel-digital-marketing")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
