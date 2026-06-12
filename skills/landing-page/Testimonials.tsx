// Reference testimonials section — customer quotes with author + avatar.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Avatars are optional <img>; quotes use semantic <figure>/<blockquote>.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type Testimonial = {
  quote: string;
  author: string;
  /** Role and/or company, e.g. "CTO, Acme". */
  role?: string;
  /** Avatar image URL. Optional. */
  avatarUrl?: string;
};

type TestimonialsProps = {
  eyebrow?: string;
  title: string;
  testimonials: Testimonial[];
};

export function Testimonials({
  eyebrow,
  title,
  testimonials,
}: TestimonialsProps) {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-surface-2 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            id="testimonials-title"
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
        </div>

        {/* Quotes */}
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <li key={t.author}>
              <figure className="flex h-full flex-col justify-between rounded-card border border-border bg-surface p-8 shadow-card">
                <blockquote className="text-base leading-7 text-ink">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  {t.avatarUrl && (
                    <img
                      src={t.avatarUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-surface-2 object-cover"
                    />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      {t.author}
                    </div>
                    {t.role && <div className="text-sm text-muted">{t.role}</div>}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Usage example:
// <Testimonials
//   eyebrow="Testimonials"
//   title="Loved by builders"
//   testimonials={[
//     {
//       quote: "We shipped our landing page in an afternoon.",
//       author: "Jane Doe",
//       role: "Founder, Acme",
//       avatarUrl: "/avatars/jane.jpg",
//     },
//     {
//       quote: "The components are clean and accessible by default.",
//       author: "John Smith",
//       role: "Engineer, Globex",
//     },
//   ]}
// />
