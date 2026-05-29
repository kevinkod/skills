"use client";

// Reference navbar / header section — sticky top nav with a mobile menu.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: the mobile menu uses useState, so it needs "use client" in Next.js.
// Copy this component, then adapt the brand, links, and colors to your brand.

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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <a
          href="/"
          className="text-lg font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {brand}
        </a>

        {/* Desktop links */}
        <ul role="list" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            className="hidden min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-flex"
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-gray-200 md:hidden">
          <ul role="list" className="space-y-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {cta && (
              <li>
                <a
                  href={cta.href}
                  className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-indigo-600 px-5 text-base font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
