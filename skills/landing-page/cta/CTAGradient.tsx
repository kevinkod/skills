// CTA variant: GRADIENT — full-width vivid band, centered copy and action.
// Best as a high-energy closing nudge with no image needed.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type CTAGradientProps = {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function CTAGradient({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTAGradientProps) {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-brand bg-[image:var(--gradient-accent)]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-on-brand/20 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
        <h2
          id="cta-title"
          className="font-display text-3xl font-bold tracking-tight text-on-brand sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-on-brand/80">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={primaryCta.href}
            className="inline-flex min-h-11 items-center justify-center rounded-control bg-on-brand px-6 text-base font-semibold text-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
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
    </section>
  );
}
