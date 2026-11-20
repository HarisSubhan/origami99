import { createFileRoute } from "@tanstack/react-router";
import { PremiumServicePage } from "@/components/service3d/PremiumServicePage";
import { getService } from "@/lib/services-data";

const service = getService("brand-identity")!;

export const Route = createFileRoute("/services/brand-identity")({
  head: () => {
    const url = "https://ai-spark-engine-11.lovable.app/services/brand-identity";
    const title = "Brand Identity Services, Origami99";
    const description = "Premium brand strategy, visual identity, messaging, launch assets and brand guidelines for ambitious companies.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Brand Identity Services",
            description,
            provider: { "@type": "Organization", name: "Origami99", url: "https://ai-spark-engine-11.lovable.app" },
            url,
          }),
        },
      ],
    };
  },
  component: BrandIdentityPage,
});

function BrandIdentityPage() {
  return (
    <PremiumServicePage
      service={service}
      variant="brand"
      eyebrow="Strategy, identity, voice, launch systems and brand governance"
      metrics={[
        { value: "90d", label: "Strategy to rollout" },
        { value: "4x", label: "More consistent campaign output" },
        { value: "12", label: "Core brand assets delivered" },
        { value: "100%", label: "Source files and guidelines owned by you" },
      ]}
      problem={{
        headline: "A pretty logo cannot carry a weak position.",
        body: "Most brands look assembled, not authored. The website says one thing, the sales deck says another, the social feed feels borrowed, and the team improvises every new asset. We build identity systems with strategic logic, visual discipline and practical rules your company can actually use.",
        stakes: [
          "A vague brand forces buyers to compare you on price.",
          "Inconsistent visuals make every campaign feel less credible.",
          "Unclear messaging slows sales conversations and weakens referrals.",
          "A brand without rules becomes expensive to maintain as the company grows.",
        ],
      }}
      pricing={[
        {
          name: "Identity Sprint",
          blurb: "A focused refresh for brands that need clarity, consistency and launch ready assets fast.",
          features: ["Positioning workshop", "Logo refinement", "Color and type system", "Social and deck templates", "Compact brand guide"],
        },
        {
          name: "Brand System",
          blurb: "Complete strategy, identity, voice and rollout system for serious market repositioning.",
          features: ["Competitive strategy", "Full visual identity", "Messaging and voice", "Motion direction", "Complete brand book"],
          featured: true,
        },
        {
          name: "Launch World",
          blurb: "Premium identity plus campaign assets, website direction and product level visual systems.",
          features: ["Brand system", "Launch campaign kit", "Website art direction", "Packaging or product UI", "Ongoing creative governance"],
        },
      ]}
      workDiscipline="brand"
    />
  );
}