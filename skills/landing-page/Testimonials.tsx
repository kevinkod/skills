// Reference testimonials section — customer quotes with author + avatar.
// React + Tailwind, TypeScript. Responsive and accessible.
// Avatars are optional <img>; quotes use semantic <figure>/<blockquote>.
// Copy this component, then adapt the content and colors to your brand.

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
      className="bg-gray-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {eyebrow}
            </p>
          )}
          <h2
            id="testimonials-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
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
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <blockquote className="text-base leading-7 text-gray-700">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  {t.avatarUrl && (
                    <img
                      src={t.avatarUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100 object-cover"
                    />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {t.author}
                    </div>
                    {t.role && (
                      <div className="text-sm text-gray-500">{t.role}</div>
                    )}
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
