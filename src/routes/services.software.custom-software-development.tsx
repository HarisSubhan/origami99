import { createFileRoute } from "@tanstack/react-router";
import Page from "@/components/service-pages/software-custom-software";

const url = "https://ai-spark-engine-11.lovable.app/services/software/custom-software-development";
const title = "Custom Software Development, Origami99";
const description = "Bespoke web platforms, internal tools and back office systems engineered around the way your team actually works.";

export const Route = createFileRoute("/services/software/custom-software-development")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", name: title, description, provider: { "@type": "Organization", name: "Origami99" }, url }) }],
  }),
  component: Page,
});
