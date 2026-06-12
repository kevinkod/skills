// FAQ variant: GRID — all questions visible in a two-column layout, no toggles.
// Best when answers are short and you want everything scannable at once.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type QA = { question: string; answer: string };

type FAQGridProps = {
  title?: string;
  items: QA[];
};

export function FAQGrid({
  title = "Frequently asked questions",
  items,
}: FAQGridProps) {
  return (
    <section aria-labelledby="faq-title" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="faq-title"
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {title}
        </h2>

        <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.question}
              className="rounded-card border border-border bg-surface-2 p-6"
            >
              <dt className="text-base font-semibold text-ink">
                {item.question}
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
