// Testimonials variant: MASONRY — a dense multi-column wall of short quotes.
// Best for showing volume of love (many concise quotes) as social proof.
// React + Tailwind, TypeScript. Responsive and accessible.
// Uses CSS columns so cards of varying height pack tightly without JS.

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

type TestimonialsMasonryProps = {
  eyebrow?: string;
  title: string;
  testimonials: Testimonial[];
};

export function TestimonialsMasonry({
  eyebrow,
  title,
  testimonials,
}: TestimonialsMasonryProps) {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
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

        {/* CSS columns masonry; list semantics preserved via role */}
        <ul
          role="list"
          className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid"
        >
          {testimonials.map((t) => (
            <li key={t.author}>
              <figure className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                <blockquote className="text-sm leading-6 text-gray-700">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-x-3">
                  {t.avatarUrl && (
                    <img
                      src={t.avatarUrl}
                      alt=""
                      className="h-8 w-8 rounded-full bg-gray-100 object-cover"
                    />
                  )}
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {t.author}
                    </div>
                    {t.role && (
                      <div className="text-xs text-gray-500">{t.role}</div>
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
