"use client";

// Reference navbar / header section — sticky top nav with a mobile menu.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Stateful: the mobile menu uses useState, so it needs "use client" in Next.js.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import { useState } from "react";
import type { ReactNode } from "react";

type NavLink = { label: string; href: string };

type NavbarProps = {
  /** Brand name or a logo element. */
  brand: ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
};

export function Navbar({ brand, links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a
          href="/"
          className="font-display text-lg font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {brand}
        </a>

        {/* Desktop links */}
        <ul role="list" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {cta && (
          <a
            href={cta.href}
            className="hidden min-h-11 items-center justify-center rounded-control bg-brand px-5 text-sm font-semibold text-on-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:inline-flex"
          >
            {cta.label}
          </a>
        )}

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-control text-ink hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-border md:hidden">
          <ul role="list" className="space-y-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-control px-3 py-2 text-base font-medium text-muted hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {cta && (
              <li>
                <a
                  href={cta.href}
                  className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-control bg-brand px-5 text-base font-semibold text-on-brand shadow-cta transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {cta.label}
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}

// Usage example:
// <Navbar
//   brand="Acme"
//   links={[
//     { label: "Features", href: "#features" },
//     { label: "Pricing", href: "#pricing" },
//     { label: "FAQ", href: "#faq" },
//   ]}
//   cta={{ label: "Get started", href: "/signup" }}
// />
