// CTA variant: GRADIENT — full-width vivid band, centered copy and action.
// Best as a high-energy closing nudge with no image needed.
// React + Tailwind, TypeScript. Responsive and accessible.

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
      className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 -z-10 h-72 w-72 rounded-full bg-white/20 blur-3xl"
      />
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-24">
        <h2
          id="cta-title"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={primaryCta.href}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primaryCta.label}
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base font-semibold text-white transition hover:text-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {secondaryCta.label} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
