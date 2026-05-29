// Testimonials variant: SINGLE — one large featured quote, centered.
// Best for a flagship customer story or a strong one-liner with high impact.
// React + Tailwind, TypeScript. Responsive and accessible.

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
    <section aria-labelledby="testimonial-title" className="bg-gray-50 py-20 lg:py-28">
      <h2 id="testimonial-title" className="sr-only">
        Testimonial
      </h2>
      <figure className="mx-auto max-w-4xl px-6 text-center">
        {logo && (
          <div className="mb-8 flex justify-center [&>svg]:h-10 [&_img]:h-10">
            {logo}
          </div>
        )}
        <blockquote className="text-2xl font-semibold leading-9 text-gray-900 sm:text-3xl sm:leading-10">
          <p>“{quote}”</p>
        </blockquote>
        <figcaption className="mt-8 flex items-center justify-center gap-x-4">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt=""
              className="h-12 w-12 rounded-full bg-gray-100 object-cover"
            />
          )}
          <div className="text-left">
            <div className="font-semibold text-gray-900">{author}</div>
            {role && <div className="text-sm text-gray-500">{role}</div>}
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
