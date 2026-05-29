// Hero variant: BACKGROUND IMAGE — full-bleed photo with a dark overlay.
// Best for lifestyle/brand pages where an image sets the mood.
// React + Tailwind, TypeScript. Responsive and accessible.
// The image is decorative (CSS background); keep the contrast high for legibility.

type HeroBackgroundImageProps = {
  imageUrl: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function HeroBackgroundImage({
  imageUrl,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HeroBackgroundImageProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image + overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gray-900/70" />

      <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:py-44">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/30">
            {eyebrow}
          </p>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
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
