// Hero variant: CENTERED — single column, everything centered, no visual.
// Best for early-stage / pre-launch when the message carries the page.
// React + Tailwind, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

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
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-accent">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
