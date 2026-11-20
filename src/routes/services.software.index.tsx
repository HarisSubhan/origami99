import { createFileRoute } from "@tanstack/react-router";
import { PremiumServicePage } from "@/components/service3d/PremiumServicePage";
import { Platforms } from "@/components/site/Platforms";
import { getService } from "@/lib/services-data";


const service = getService("software")!;

const SITE_URL = "https://ai-spark-engine-11.lovable.app";
const PAGE_URL = `${SITE_URL}/services/software`;

export const Route = createFileRoute("/services/software/")({
  head: () => ({
    meta: [
      { title: `${service.title} | Origami 99` },
      { name: "description", content: service.tagline },
      { property: "og:title", content: `${service.title} | Origami 99` },
      { property: "og:description", content: service.tagline },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${service.title} | Origami 99` },
      { name: "twitter:description", content: service.tagline },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.tagline,
          url: PAGE_URL,
          provider: { "@type": "Organization", name: "Origami99", url: SITE_URL },
          areaServed: ["PK", "SA", "AE", "CA", "US"],
          serviceType: "Custom software, SaaS, mobile apps and ERP engineering",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (service.faqs ?? []).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: SoftwarePage,
});

function SoftwarePage() {
  return (
    <PremiumServicePage
      service={service}
      variant="software"
      eyebrow="Custom software, mobile apps, SaaS and ERP"
      metrics={[
        { value: "450+", label: "Products shipped" },
        { value: "6wk", label: "MVP to launch" },
        { value: "99.99%", label: "Uptime in production" },
        { value: "0", label: "Juniors on your account" },
      ]}
      problem={{
        headline: "Most software projects fail before the first release.",
        body: "Growing scope, junior developers, too many vendors and plans that live only in slides kill more products than bad ideas ever do. We built the studio to fix that. Senior people, one team that owns the result, and working software you can use every two weeks.",
        stakes: [
          "Every month of delay is revenue you never get back.",
          "Messy code slows down every release and every new hire.",
          "A confusing product loses users before it gets a fair chance.",
          "With no monitoring, every small issue turns into a long outage.",
        ],
      }}
      pricing={[
        {
          name: "MVP Sprint",
          blurb: "From idea to a live product in six weeks. Best for founders and new internal products.",
          features: ["Discovery and technical plan", "Design system and prototype", "Full build, front and back", "Live on your cloud", "Two weeks of support after launch"],
        },
        {
          name: "Product Squad",
          blurb: "A dedicated senior team shipping your roadmap every two weeks. Our most popular option.",
          features: ["Product manager, designer and engineers", "Two week cycles with live demos", "We own the backlog and roadmap", "Monitoring and response times in writing", "Strategy review every quarter"],
          featured: true,
        },
        {
          name: "Enterprise Build",
          blurb: "Large platforms, ERP and SaaS with many moving parts, delivered end to end.",
          features: ["Full solution architecture", "Several teams working in parallel", "Security and compliance work", "Support around the clock", "Custom integrations and data migration"],
        },
      ]}

      workFilter="Software"
      workDiscipline="software"
      extraSection={<Platforms />}
    />

  );
}
