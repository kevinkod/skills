// Hero variant: GRADIENT — centered content on a bold brand band with soft blobs.
// Best for bold, design-forward products that want a vivid above-the-fold.
// React + Tailwind, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

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
    <section className="relative isolate overflow-hidden bg-brand text-on-brand">
      {/* Decorative blurred accents */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-accent)] opacity-30 blur-3xl"
      />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center rounded-full border border-on-brand/20 bg-on-brand/10 px-3 py-1 text-sm font-medium text-on-brand">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl font-bold tracking-tight text-on-brand sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-brand/80">
          {subtitle}
        </p>

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
