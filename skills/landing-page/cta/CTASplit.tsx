// CTA variant: SPLIT — copy on the left, supporting image on the right.
// Best when a product shot or illustration reinforces the final ask.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type CTASplitProps = {
  title: string;
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl: string;
  imageAlt: string;
};

export function CTASplit({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt,
}: CTASplitProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="overflow-hidden rounded-card bg-brand text-on-brand shadow-cta">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Copy */}
            <div className="px-8 py-12 sm:px-12">
              <h2
                id="cta-title"
                className="font-display text-3xl font-bold tracking-tight text-on-brand sm:text-4xl"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-lg leading-8 text-on-brand/80">{subtitle}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-4">
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

            {/* Visual */}
            <div className="h-full">
              <img
                src={imageUrl}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full rounded-card object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
