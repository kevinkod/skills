"use client";

// Reference FAQ section — accessible accordion of question/answer pairs.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: tracks the open item with useState, so it needs "use client" in Next.js.
// Copy this component, then adapt the questions and colors to your brand.

import { useState } from "react";

type QA = { question: string; answer: string };

type FAQProps = {
  title?: string;
  items: QA[];
};

export function FAQ({ title = "Frequently asked questions", items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="faq-title"
          className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {title}
        </h2>

        <dl className="mt-12 divide-y divide-gray-200">
          {items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className="py-5">
                <dt>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
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
    </section>
  );
}

// Usage example:
// <FAQ
//   items={[
//     { question: "Do I need a credit card to start?", answer: "No, the free tier needs no card." },
//     { question: "Can I cancel anytime?", answer: "Yes, plans are month-to-month with no lock-in." },
//     { question: "Which frameworks are supported?", answer: "Any React setup — Next.js, Vite, Remix." },
//   ]}
// />
