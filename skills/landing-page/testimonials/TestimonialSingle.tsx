// Testimonials variant: SINGLE — one large featured quote, centered.
// Best for a flagship customer story or a strong one-liner with high impact.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

type TestimonialSingleProps = {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
  /** Optional company logo element shown above the quote. */
  logo?: React.ReactNode;
};

export function TestimonialSingle({
  quote,
  author,
  role,
  avatarUrl,
  logo,
}: TestimonialSingleProps) {
  return (
    <section aria-labelledby="testimonial-title" className="bg-surface-2 py-20 lg:py-28">
      <h2 id="testimonial-title" className="sr-only">
        Testimonial
      </h2>
      <figure className="mx-auto max-w-4xl px-6 text-center">
        {logo && (
          <div className="mb-8 flex justify-center [&>svg]:h-10 [&_img]:h-10">
            {logo}
          </div>
        )}
        <blockquote className="font-display text-2xl font-semibold leading-9 text-ink sm:text-3xl sm:leading-10">
          <p>
            <span className="text-accent">“</span>
            {quote}
            <span className="text-accent">”</span>
          </p>
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-x-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt=""
              className="h-12 w-12 rounded-full bg-surface-2 object-cover"
            />
          )}
          <div className="text-left">
            <div className="font-semibold text-ink">{author}</div>
            {role && <div className="text-sm text-muted">{role}</div>}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
