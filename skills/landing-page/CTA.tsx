// Reference call-to-action (CTA) section — a focused band before the footer.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type CTAProps = {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTA({ title, subtitle, primaryCta, secondaryCta }: CTAProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="rounded-card bg-brand px-6 py-16 text-center shadow-cta sm:px-16">
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-on-brand sm:text-4xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-on-brand/80">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-on-brand px-6 text-base font-semibold text-brand transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
            >
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-control px-4 text-base font-semibold text-on-brand transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Usage example:
// <CTA
//   title="Ready to ship your landing page?"
//   subtitle="Start free, no credit card required."
//   primaryCta={{ label: "Get started", href: "/signup" }}
//   secondaryCta={{ label: "Talk to sales", href: "/contact" }}
// />
