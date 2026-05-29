// Pricing variant: SINGLE — one centered plan card with a feature list.
// Best for products with one plan (or a dominant plan) — no comparison needed.
// React + Tailwind, TypeScript. Responsive and accessible.

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
    <section aria-labelledby="pricing-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {eyebrow}
            </p>
          )}
          <h2
            id="pricing-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-3xl bg-gray-900 p-8 text-white ring-1 ring-gray-900">
          <h3 className="text-lg font-semibold">{planName}</h3>
          <p className="mt-4 flex items-baseline gap-x-1">
            <span className="text-5xl font-bold tracking-tight">
              {currency}
              {price}
            </span>
            <span className="text-sm font-semibold text-gray-300">{period}</span>
          </p>

          <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
            {features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <span aria-hidden="true" className="text-indigo-400">
                  ✓
                </span>
                <span className="text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={cta.href}
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-white px-6 text-base font-semibold text-gray-900 transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {cta.label}
          </a>

          {note && <p className="mt-4 text-center text-xs text-gray-400">{note}</p>}
        </div>
      </div>
    </section>
  );
}
