// Hero variant: CENTERED — single column, everything centered, no visual.
// Best for early-stage / pre-launch when the message carries the page.
// React + Tailwind, TypeScript. Responsive and accessible.

type HeroCenteredProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroCentered({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroCenteredProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
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
    </section>
  );
}
