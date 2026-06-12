// Pricing variant: TABLE — feature comparison matrix across plans.
// Best when plans differ on many features and buyers want to compare row by row.
// React + Tailwind v4, TypeScript. Responsive (horizontal scroll on small screens)
// and accessible (semantic <table> with scoped headers).
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import type { ReactNode } from "react";

type Plan = {
  name: string;
  price: string; // pre-formatted, e.g. "$29/mo" or "Free"
  cta: { label: string; href: string };
  highlighted?: boolean;
};

type FeatureRow = {
  label: string;
  /** One cell per plan, in the same order as `plans`. A boolean renders a check/dash. */
  values: (boolean | string)[];
};

type PricingTableProps = {
  title: string;
  plans: Plan[];
  rows: FeatureRow[];
};

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <>
        <span aria-hidden="true" className="text-accent">
          ✓
        </span>
        <span className="sr-only">Included</span>
      </>
    ) : (
      <>
        <span aria-hidden="true" className="text-muted">
          –
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-sm text-muted">{value}</span>;
}

export function PricingTable({ title, plans, rows }: PricingTableProps) {
  return (
    <section aria-labelledby="pricing-title" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="pricing-title"
          className="font-display text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="py-4 pr-4" />
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`px-4 py-4 align-bottom ${
                      plan.highlighted ? "rounded-t-card bg-surface-2" : ""
                    }`}
                  >
                    <div className="text-base font-semibold text-ink">
                      {plan.name}
                    </div>
                    <div className="mt-1 text-sm text-muted">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="py-4 pr-4 text-sm font-medium text-ink"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={plans[i].name}
                      className={`px-4 py-4 ${
                        plans[i].highlighted ? "bg-surface-2" : ""
                      }`}
                    >
                      <Cell value={value} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="py-6 pr-4" />
                {plans.map((plan) => (
                  <td
                    key={plan.name}
                    className={`px-4 py-6 ${
                      plan.highlighted ? "rounded-b-card bg-surface-2" : ""
                    }`}
                  >
                    <a
                      href={plan.cta.href}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-control bg-brand px-4 text-sm font-semibold text-on-brand transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {plan.cta.label}
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
