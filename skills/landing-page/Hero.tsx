// Reference hero section — "split" variant (text on the left, visual on the right).
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Product visual URL; if absent, a themed accent panel is shown. */
  imageUrl?: string;
  imageAlt?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt = "",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Text column */}
        <div className="max-w-xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-accent">
              {eyebrow}
            </p>
          )}

          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted">{subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-brand px-6 text-base font-semibold text-on-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-control px-4 text-base font-semibold text-ink transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual column */}
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="eager"
              className="w-full rounded-card border border-border shadow-card"
            />
          ) : (
            <div
              aria-hidden="true"
              className="aspect-[4/3] w-full rounded-card border border-border bg-surface-2 bg-[image:var(--gradient-accent)] shadow-card"
            />
          )}
        </div>
      </div>
    </section>
  );
}

// Usage example:
// <Hero
//   eyebrow="New"
//   title="Launch your landing page in minutes"
//   subtitle="Ready-to-use React + Tailwind sections, accessible and responsive."
//   primaryCta={{ label: "Get started", href: "/signup" }}
//   secondaryCta={{ label: "View demo", href: "/demo" }}
// />
