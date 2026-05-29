// Pricing variant: TABLE — feature comparison matrix across plans.
// Best when plans differ on many features and buyers want to compare row by row.
// React + Tailwind, TypeScript. Responsive (horizontal scroll on small screens)
// and accessible (semantic <table> with scoped headers).

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
        <span aria-hidden="true" className="text-indigo-600">
          ✓
        </span>
        <span className="sr-only">Included</span>
      </>
    ) : (
      <>
        <span aria-hidden="true" className="text-gray-300">
          –
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <span className="text-sm text-gray-700">{value}</span>;
}

export function PricingTable({ title, plans, rows }: PricingTableProps) {
  return (
    <section aria-labelledby="pricing-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="pricing-title"
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
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
                      plan.highlighted ? "rounded-t-xl bg-gray-50" : ""
                    }`}
                  >
                    <div className="text-base font-semibold text-gray-900">
                      {plan.name}
                    </div>
                    <div className="mt-1 text-sm text-gray-600">{plan.price}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="py-4 pr-4 text-sm font-medium text-gray-900"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={plans[i].name}
                      className={`px-4 py-4 ${
                        plans[i].highlighted ? "bg-gray-50" : ""
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
                      plan.highlighted ? "rounded-b-xl bg-gray-50" : ""
                    }`}
                  >
                    <a
                      href={plan.cta.href}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
