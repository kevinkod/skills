// Reference features section — responsive grid (1 col → 2 at md → 3 at lg).
// React + Tailwind, TypeScript. Responsive and accessible.
// Icons are passed via a ReactNode slot, so there is no icon-library dependency.
// Copy this component, then adapt the content, grid, and colors to your brand.

import type { ReactNode } from "react";

type Feature = {
  /** Any SVG/icon element, e.g. <svg .../> or <CheckIcon />. Optional. */
  icon?: ReactNode;
  title: string;
  description: string;
};

type FeaturesProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
};

export function Features({ eyebrow, title, subtitle, features }: FeaturesProps) {
  return (
    <section aria-labelledby="features-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {eyebrow}
            </p>
          )}
          <h2
            id="features-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-gray-600">{subtitle}</p>
          )}
        </div>

        {/* Feature grid */}
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li key={feature.title}>
              {feature.icon && (
                <div
                  aria-hidden="true"
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white [&>svg]:h-6 [&>svg]:w-6"
                >
                  {feature.icon}
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Usage example:
// <Features
//   eyebrow="Features"
//   title="Everything you need to ship faster"
//   subtitle="Ready-to-use sections, accessible and responsive out of the box."
//   features={[
//     { icon: <BoltIcon />, title: "Fast", description: "Optimized, no heavy deps." },
//     { icon: <LockIcon />, title: "Accessible", description: "Semantic, AA contrast." },
//     { icon: <PhoneIcon />, title: "Responsive", description: "Mobile-first layouts." },
//   ]}
// />
