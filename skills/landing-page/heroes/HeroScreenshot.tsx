// Hero variant: SCREENSHOT — centered copy with a large product screenshot below.
// Best for SaaS/app products where seeing the UI is the strongest selling point.
// React + Tailwind, TypeScript. Responsive and accessible.

type HeroScreenshotProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl: string;
  imageAlt: string;
};

export function HeroScreenshot({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt,
}: HeroScreenshotProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:pt-32">
        {/* Copy */}
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base font-semibold text-gray-900 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        <div className="mx-auto mt-16 max-w-5xl">
          <img
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            className="w-full rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </section>
  );
}
