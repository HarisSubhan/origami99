import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/dm-tiktok";

const url = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/tiktok-short-form-ads";
const title = "TikTok and Short Form Ads, Origami99";
const description = "TikTok, Reels and Shorts as a retention game, briefed and shot for the first three seconds.";

export const Route = createFileRoute("/services/digital-marketing/tiktok-short-form-ads")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
