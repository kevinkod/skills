// Reference call-to-action (CTA) section — a focused band before the footer.
// React + Tailwind, TypeScript. Responsive and accessible.
// Copy this component, then adapt the copy, links, and colors to your brand.

type CTAProps = {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTA({ title, subtitle, primaryCta, secondaryCta }: CTAProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="rounded-3xl bg-gray-900 px-6 py-16 text-center sm:px-16">
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-300">
              {subtitle}
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base font-semibold text-white transition hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
