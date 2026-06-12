"use client";

// Hero variant: WAITLIST — centered copy with an inline email capture form.
// Best for pre-launch / waitlist pages where the goal is to collect emails.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: uses useState for the email field, so it needs "use client" in Next.js.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import { useState } from "react";

type HeroWaitlistProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  /** Called with the submitted email. Return a promise to show pending state. */
  onSubmit?: (email: string) => void | Promise<void>;
  ctaLabel?: string;
  placeholder?: string;
  /** Reassurance line under the form, e.g. "No spam. Unsubscribe anytime." */
  note?: string;
};

export function HeroWaitlist({
  eyebrow,
  title,
  subtitle,
  onSubmit,
  ctaLabel = "Join the waitlist",
  placeholder = "you@example.com",
  note,
}: HeroWaitlistProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await onSubmit?.(email);
    setSubmitted(true);
  }

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:py-32">
        {eyebrow && (
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 text-sm font-medium text-accent">
            {eyebrow}
          </p>
        )}

        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
          {subtitle}
        </p>

        {submitted ? (
          <p
            role="status"
            className="mx-auto mt-10 max-w-md rounded-control border border-green-200 bg-green-50 px-4 py-3 text-base font-medium text-green-800"
          >
            Thanks! You're on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="waitlist-email" className="sr-only">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="min-h-11 flex-1 rounded-control border border-border px-4 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-brand px-6 text-base font-semibold text-on-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {ctaLabel}
            </button>
          </form>
        )}

        {note && !submitted && (
          <p className="mt-4 text-sm text-muted">{note}</p>
        )}
      </div>
    </section>
  );
}
