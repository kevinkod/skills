// Features variant: SPLIT — sticky heading column beside a compact feature list.
// Best when the section intro needs weight (heading + CTA) next to many features.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Icons use a ReactNode slot, so there is no icon-library dependency.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import type { ReactNode } from "react";

type Feature = {
  icon?: ReactNode;
  title: string;
  description: string;
};

type FeaturesSplitProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  features: Feature[];
};

export function FeaturesSplit({
  eyebrow,
  title,
  subtitle,
  cta,
  features,
}: FeaturesSplitProps) {
  return (
    <section
      aria-labelledby="features-title"
      className="bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-3 lg:gap-16">
        {/* Heading column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id="features-title"
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-muted">{subtitle}</p>
          )}
          {cta && (
            <a
              href={cta.href}
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-control bg-brand px-6 text-base font-semibold text-on-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {cta.label}
            </a>
          )}
        </div>

        {/* Feature list */}
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-2"
        >
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-x-4">
              {feature.icon && (
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-brand text-on-brand shadow-cta [&>svg]:h-5 [&>svg]:w-5"
                >
                  {feature.icon}
                </div>
              )}
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
