// Pricing variant: SINGLE — one centered plan card with a feature list.
// Best for products with one plan (or a dominant plan) — no comparison needed.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type PricingSingleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  planName: string;
  price: number;
  /** e.g. "/mo" or "one-time". Defaults to "/mo". */
  period?: string;
  currency?: string;
  features: string[];
  cta: { label: string; href: string };
  note?: string;
};

export function PricingSingle({
  eyebrow,
  title,
  subtitle,
  planName,
  price,
  period = "/mo",
  currency = "$",
  features,
  cta,
  note,
}: PricingSingleProps) {
  return (
    <section aria-labelledby="pricing-title" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id="pricing-title"
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-muted">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-card border border-brand bg-brand p-8 text-on-brand shadow-card">
          <h3 className="text-lg font-semibold">{planName}</h3>
          <p className="mt-4 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight">
              {currency}
              {price}
            </span>
            <span className="text-sm font-semibold text-on-brand/70">{period}</span>
          </p>

          <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
            {features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <span aria-hidden="true" className="text-on-brand">
                  ✓
                </span>
                <span className="text-on-brand/90">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={cta.href}
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-control bg-on-brand px-6 text-base font-semibold text-brand transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-brand"
          >
            {cta.label}
          </a>

          {note && <p className="mt-4 text-center text-xs text-on-brand/60">{note}</p>}
        </div>
      </div>
    </section>
  );
}
