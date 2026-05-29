// Hero variant: GRADIENT — centered content on a dark gradient with soft blobs.
// Best for bold, design-forward products that want a vivid above-the-fold.
// React + Tailwind, TypeScript. Responsive and accessible.

type HeroGradientProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroGradient({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroGradientProps) {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900">
      {/* Decorative blurred accents */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 blur-3xl"
      />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-indigo-200 ring-1 ring-inset ring-white/20">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {subtitle}
        </p>

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
    </section>
  );
}
