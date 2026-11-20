import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/dm-video";

const url = "https://ai-spark-engine-11.lovable.app/services/digital-marketing/video-editing-production";
const title = "Video Editing and Production, Origami99";
const description = "Ads, brand films, tutorials and short form, shot and edited by a team that thinks in retention curves.";

export const Route = createFileRoute("/services/digital-marketing/video-editing-production")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary_large_image" }],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, url }) }],
  }),
  component: Page,
});
