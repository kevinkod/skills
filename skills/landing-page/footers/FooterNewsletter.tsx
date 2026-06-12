"use client";

// Footer variant: NEWSLETTER — link columns plus an email signup form.
// Best when you want to capture subscribers from the footer.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").
// Stateful: the signup form uses useState, so it needs "use client" in Next.js.

import { useState } from "react";
import type { ReactNode } from "react";

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

type FooterNewsletterProps = {
  brand: ReactNode;
  columns: FooterColumn[];
  newsletterTitle?: string;
  newsletterText?: string;
  onSubscribe?: (email: string) => void | Promise<void>;
  copyright?: string;
};

export function FooterNewsletter({
  brand,
  columns,
  newsletterTitle = "Subscribe to our newsletter",
  newsletterText,
  onSubscribe,
  copyright,
}: FooterNewsletterProps) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await onSubscribe?.(email);
    setDone(true);
  }

  return (
    <footer aria-labelledby="footer-title" className="border-t border-border bg-surface-2 text-muted">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-ink">
                  {column.title}
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Newsletter */}
          <div className="max-w-md">
            <h3 className="text-sm font-semibold text-ink">{newsletterTitle}</h3>
            {newsletterText && (
              <p className="mt-2 text-sm text-muted">{newsletterText}</p>
            )}
            {done ? (
              <p role="status" className="mt-4 text-sm font-medium text-green-400">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="min-h-11 flex-1 rounded-control border border-border bg-surface-2 px-4 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-11 items-center justify-center rounded-control bg-brand px-5 text-base font-semibold text-on-brand transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted">
          {copyright ?? <>© {brand}. All rights reserved.</>}
        </div>
      </div>
    </footer>
  );
}
