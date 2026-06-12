// Features variant: ALTERNATING — image/text rows that zigzag down the page.
// Best for storytelling: a few rich features, each with its own visual.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type Feature = {
  title: string;
  description: string;
  bullets?: string[];
  imageUrl: string;
  imageAlt: string;
};

type FeaturesAlternatingProps = {
  eyebrow?: string;
  title: string;
  features: Feature[];
};

export function FeaturesAlternating({
  eyebrow,
  title,
  features,
}: FeaturesAlternatingProps) {
  return (
    <section
      aria-labelledby="features-title"
      className="bg-surface py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
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
        </div>

        <div className="mt-16 space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Text — order flips on odd rows for the zigzag */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-2xl font-bold tracking-tight text-ink">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-muted">
                  {feature.description}
                </p>
                {feature.bullets && feature.bullets.length > 0 && (
                  <ul role="list" className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-x-3 text-muted">
                        <span aria-hidden="true" className="text-accent">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  src={feature.imageUrl}
                  alt={feature.imageAlt}
                  loading="lazy"
                  className="w-full rounded-card border border-border bg-surface-2 shadow-card"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
