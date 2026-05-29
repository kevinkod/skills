// CTA variant: SPLIT — copy on the left, supporting image on the right.
// Best when a product shot or illustration reinforces the final ask.
// React + Tailwind, TypeScript. Responsive and accessible.

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
    <section aria-labelledby="cta-title" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-gray-900">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Copy */}
            <div className="px-8 py-12 sm:px-12">
              <h2
                id="cta-title"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                {title}
              </h2>
              {subtitle && (
                <p className="mt-4 text-lg leading-8 text-gray-300">{subtitle}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center gap-4">
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

            {/* Visual */}
            <div className="h-full">
              <img
                src={imageUrl}
                alt={imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
