// Example: a full landing page assembled from the default section components,
// in the recommended top-to-bottom order. Copy this file, swap in your real
// content, and replace any section with one of its variants (see the catalogs in
// ../references/). All data is inline so the page renders as-is.
//
// Swapping a variant: e.g. import { HeroGradient } from "../heroes/HeroGradient"
// and use it in place of <Hero ... /> below.
//
// ART DIRECTION: this page is theme-driven. Pick ONE vibe and either paste its
// @theme block into your app.css (after `@import "tailwindcss";`) or, in a
// Vite/Tailwind-v4 setup, import it:  import "../themes/aurora.css";
// Vibes: editorial · aurora · brutalist · playful
// (see ../themes/ and ../references/art-direction.md). Requires Tailwind v4.

import { Navbar } from "../Navbar";
import { Hero } from "../Hero";
import { LogoCloud } from "../LogoCloud";
import { Features } from "../Features";
import { Testimonials } from "../Testimonials";
import { Pricing } from "../Pricing";
import { FAQ } from "../FAQ";
import { CTA } from "../CTA";
import { Footer } from "../Footer";

// A tiny inline icon so feature cards have a visual without a dependency.
function DotIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="10" r="6" />
    </svg>
  );
}

// Text "logo" placeholder — replace with real <img>/<svg> brand marks.
function TextLogo({ children }: { children: string }) {
  return <span className="text-lg font-bold tracking-tight">{children}</span>;
}

export default function LandingPage() {
  return (
    <main>
      <Navbar
        brand="Acme"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        cta={{ label: "Get started", href: "/signup" }}
      />

      <Hero
        eyebrow="New"
        title="Launch your landing page in minutes"
        subtitle="Ready-to-use React + Tailwind sections, accessible and responsive out of the box."
        primaryCta={{ label: "Get started", href: "/signup" }}
        secondaryCta={{ label: "View demo", href: "/demo" }}
      />

      <LogoCloud
        heading="Trusted by fast-growing teams"
        logos={[
          { name: "Globex", logo: <TextLogo>Globex</TextLogo> },
          { name: "Initech", logo: <TextLogo>Initech</TextLogo> },
          { name: "Umbrella", logo: <TextLogo>Umbrella</TextLogo> },
          { name: "Soylent", logo: <TextLogo>Soylent</TextLogo> },
          { name: "Hooli", logo: <TextLogo>Hooli</TextLogo> },
        ]}
      />

      <div id="features">
        <Features
          eyebrow="Features"
          title="Everything you need to ship faster"
          subtitle="Composable sections you can drop into any React project."
          features={[
            { icon: <DotIcon />, title: "Fast", description: "Optimized markup, no heavy dependencies." },
            { icon: <DotIcon />, title: "Accessible", description: "Semantic HTML and AA contrast by default." },
            { icon: <DotIcon />, title: "Responsive", description: "Mobile-first layouts that scale up cleanly." },
          ]}
        />
      </div>

      <Testimonials
        eyebrow="Testimonials"
        title="Loved by builders"
        testimonials={[
          { quote: "We shipped our landing page in an afternoon.", author: "Jane Doe", role: "Founder, Acme" },
          { quote: "The components are clean and accessible by default.", author: "John Smith", role: "Engineer, Globex" },
          { quote: "Swapping section variants is effortless.", author: "Mia Wong", role: "Designer, Initech" },
        ]}
      />

      <div id="pricing">
        <Pricing
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free, upgrade when you grow."
          tiers={[
            {
              name: "Starter",
              description: "For side projects.",
              price: { monthly: 0, annual: 0 },
              features: ["1 project", "Community support"],
              cta: { label: "Get started", href: "/signup" },
            },
            {
              name: "Pro",
              description: "For growing teams.",
              price: { monthly: 29, annual: 24 },
              features: ["Unlimited projects", "Priority support", "Analytics"],
              cta: { label: "Start free trial", href: "/signup?plan=pro" },
              highlighted: true,
            },
            {
              name: "Enterprise",
              description: "For large orgs.",
              price: { monthly: 99, annual: 79 },
              features: ["SSO", "SLA", "Dedicated support"],
              cta: { label: "Contact sales", href: "/contact" },
            },
          ]}
        />
      </div>

      <div id="faq">
        <FAQ
          items={[
            { question: "Do I need a credit card to start?", answer: "No, the free tier needs no card." },
            { question: "Can I cancel anytime?", answer: "Yes, plans are month-to-month with no lock-in." },
            { question: "Which frameworks are supported?", answer: "Any React setup — Next.js, Vite, Remix." },
          ]}
        />
      </div>

      <CTA
        title="Ready to ship your landing page?"
        subtitle="Start free, no credit card required."
        primaryCta={{ label: "Get started", href: "/signup" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />

      <Footer
        brand="Acme"
        tagline="The fastest way to ship your landing page."
        columns={[
          { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
          { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
        ]}
        socials={[
          { label: "GitHub", href: "https://github.com/acme" },
          { label: "X", href: "https://x.com/acme" },
        ]}
        copyright="© 2026 Acme, Inc. All rights reserved."
      />
    </main>
  );
}
