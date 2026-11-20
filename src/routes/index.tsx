import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Stats } from "@/components/site/Stats";
import { Work } from "@/components/site/Work";

import { GlobalPresence } from "@/components/site/GlobalPresence";
import { Testimonials } from "@/components/site/Testimonials";
import { TrustedBy } from "@/components/site/TrustedBy";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Platforms } from "@/components/site/Platforms";

import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://ai-spark-engine-11.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Origami99 · Brands that convert, engineered end to end" },
      { name: "description", content: "One senior team, end to end. Hundreds of production platforms, AI-powered software, web and mobile apps, SEO and paid media, engineered for measurable ROI." },
      { property: "og:title", content: "Origami99 · Brands that convert, engineered end to end" },
      { property: "og:description", content: "One senior team, end to end. Hundreds of production platforms across four continents, built for measurable ROI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Origami99 · Brands that convert, engineered end to end" },
      { name: "twitter:description", content: "One senior team, end to end. Hundreds of production platforms, engineered for measurable ROI." },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How fast can you start my project?", acceptedAnswer: { "@type": "Answer", text: "Discovery kicks off within 3 to 5 business days of signing. Most projects begin design or build the following week." } },
            { "@type": "Question", name: "What does it cost?", acceptedAnswer: { "@type": "Answer", text: "Every engagement is scoped and quoted individually. After a free 20-minute intro call we send a fixed, itemised proposal within 48 hours." } },
            { "@type": "Question", name: "Where is Origami99 based?", acceptedAnswer: { "@type": "Answer", text: "One senior team across Pakistan, Saudi Arabia, Germany, Canada and the USA, following the sun so your project moves 24/7." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <TrustedBy />
        <Platforms />
        <Work />
        <Stats />
        <Services />
        <Process />
        
        <GlobalPresence />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
