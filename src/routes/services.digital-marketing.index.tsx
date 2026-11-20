import { createFileRoute } from "@tanstack/react-router";
import { PremiumServicePage } from "@/components/service3d/PremiumServicePage";
import { getService } from "@/lib/services-data";

const service = getService("digital-marketing")!;

export const Route = createFileRoute("/services/digital-marketing/")({
  head: () => ({
    meta: [
      { title: `${service.title} | Origami 99` },
      { name: "description", content: service.tagline },
      { property: "og:title", content: `${service.title} | Origami 99` },
      { property: "og:description", content: service.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MarketingPage,
});

function MarketingPage() {
  return (
    <PremiumServicePage
      service={service}
      variant="marketing"
      eyebrow="Google Ads, Meta Ads, TikTok, video, email and content"
      metrics={[
        { value: "4.7x", label: "Average blended ROAS" },
        { value: "42%", label: "Average CPA reduction" },
        { value: "12x", label: "Creative shipped vs in house" },
        { value: "10d", label: "Kickoff to first live campaign" },
      ]}
      problem={{
        headline: "Ad spend without an operating system is a slow leak.",
        body: "Fragmented agencies, tracking that lies, creative that never refreshes, and reports built to impress rather than inform. We replace the chaos with one senior team, server side attribution you can trust, and a creative engine that ships weekly against your revenue number.",
        stakes: [
          "Broken tracking hides your best campaigns and rewards your worst.",
          "Creative fatigue quietly doubles CPA within six weeks.",
          "Siloed channels mean paid pays to acquire what organic already converted.",
          "Vanity metrics are how bad quarters get dressed up as good ones.",
        ],
      }}
      pricing={[
        {
          name: "Launch",
          blurb: "New brand or new channel. Foundations, tracking and first campaigns live in two weeks.",
          features: ["Google or Meta account build", "Server side tracking", "Creative kit and landing page", "Weekly optimization", "Monthly business review"],
        },
        {
          name: "Growth",
          blurb: "Full funnel across paid, organic and lifecycle. Our most popular engagement.",
          features: ["Google, Meta and one extra channel", "Creative production weekly", "Email and lifecycle flows", "CRO on top landing pages", "Real time dashboard"],
          featured: true,
        },
        {
          name: "Scale",
          blurb: "Seven and eight figure budgets managed with a dedicated senior pod and in house studio.",
          features: ["Dedicated growth pod", "Full video and motion studio", "MMM and incrementality testing", "Influencer and partnerships", "Executive reporting and forecasting"],
        },
      ]}
      workFilter="Ecommerce"
      workDiscipline="web"
    />

  );
}
