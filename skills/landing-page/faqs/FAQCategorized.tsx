"use client";

// FAQ variant: CATEGORIZED — questions grouped under category headings, accordion.
// Best for larger FAQs (billing, account, technical…) that benefit from grouping.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: tracks the open item with useState, so it needs "use client" in Next.js.

import { useState } from "react";

type QA = { question: string; answer: string };
type Category = { name: string; items: QA[] };

type FAQCategorizedProps = {
  title?: string;
  categories: Category[];
};

export function FAQCategorized({
  title = "Frequently asked questions",
  categories,
}: FAQCategorizedProps) {
  // Open key is "categoryIndex-itemIndex" to keep it unique across groups.
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="faq-title"
          className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {title}
        </h2>

        <div className="mt-12 space-y-12">
          {categories.map((category, ci) => (
            <div key={category.name}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                {category.name}
              </h3>
              <dl className="mt-4 divide-y divide-gray-200">
                {category.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const open = openKey === key;
                  const panelId = `faq-panel-${key}`;
                  const buttonId = `faq-button-${key}`;
                  return (
                    <div key={item.question} className="py-5">
                      <dt>
                        <button
                          type="button"
                          id={buttonId}
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setOpenKey(open ? null : key)}
                          className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <span>{item.question}</span>
                          <span aria-hidden="true" className="text-xl text-indigo-600">
                            {open ? "–" : "+"}
                          </span>
                        </button>
                      </dt>
                      {open && (
                        <dd
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="mt-3 text-base leading-7 text-gray-600"
                        >
                          {item.answer}
                        </dd>
                      )}
                    </div>
                  );
                })}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
