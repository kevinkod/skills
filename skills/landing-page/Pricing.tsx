"use client";

// Reference pricing section — tiers with a monthly/annual billing toggle.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: uses useState, so it needs "use client" in the Next.js App Router.
// Prices are stored per month; the annual price is the per-month amount when
// billed annually. Copy this component, then adapt tiers, copy, and colors.

import { useState } from "react";

type Tier = {
  name: string;
  description: string;
  /** Per-month price in the chosen period (e.g. monthly: 29, annual: 24). */
  price: { monthly: number; annual: number };
  features: string[];
  cta: { label: string; href: string };
  /** Highlight this tier as "Most popular". */
  highlighted?: boolean;
};

type PricingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tiers: Tier[];
  /** Currency symbol prepended to the price. Defaults to "$". */
  currency?: string;
};

type Period = "monthly" | "annual";

export function Pricing({
  eyebrow,
  title,
  subtitle,
  tiers,
  currency = "$",
}: PricingProps) {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section aria-labelledby="pricing-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
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

        {/* Billing toggle */}
        <div
          role="group"
          aria-label="Billing period"
          className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-full bg-gray-100 p-1"
        >
          {(["monthly", "annual"] as const).map((value) => {
            const active = period === value;
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => setPeriod(value)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  active
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {value === "monthly" ? "Monthly" : "Annual"}
              </button>
            );
          })}
        </div>

        {/* Tiers */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl p-8 ring-1 ${
                tier.highlighted
                  ? "bg-gray-900 text-white ring-gray-900"
                  : "bg-white text-gray-900 ring-gray-200"
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
              </div>

              <p
                className={`mt-2 text-sm leading-6 ${
                  tier.highlighted ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>

              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {currency}
                  {tier.price[period]}
                </span>
                <span
                  className={`text-sm font-semibold ${
                    tier.highlighted ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  /mo
                </span>
              </p>
              <p
                className={`mt-1 text-xs ${
                  tier.highlighted ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {period === "annual" ? "billed annually" : "billed monthly"}
              </p>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <span aria-hidden="true" className="text-indigo-400">
                      ✓
                    </span>
                    <span
                      className={
                        tier.highlighted ? "text-gray-200" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.cta.href}
                className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-lg px-6 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.highlighted
                    ? "bg-white text-gray-900 hover:bg-gray-100 focus-visible:outline-white"
                    : "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
                }`}
              >
                {tier.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Usage example:
// <Pricing
//   eyebrow="Pricing"
//   title="Simple, transparent pricing"
//   subtitle="Start free, upgrade when you grow."
//   tiers={[
//     {
//       name: "Starter",
//       description: "For side projects.",
//       price: { monthly: 0, annual: 0 },
//       features: ["1 project", "Community support"],
//       cta: { label: "Get started", href: "/signup" },
//     },
//     {
//       name: "Pro",
//       description: "For growing teams.",
//       price: { monthly: 29, annual: 24 },
//       features: ["Unlimited projects", "Priority support", "Analytics"],
//       cta: { label: "Start free trial", href: "/signup?plan=pro" },
//       highlighted: true,
//     },
//     {
//       name: "Enterprise",
//       description: "For large orgs.",
//       price: { monthly: 99, annual: 79 },
//       features: ["SSO", "SLA", "Dedicated support"],
//       cta: { label: "Contact sales", href: "/contact" },
//     },
//   ]}
// />
