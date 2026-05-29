"use client";

// Navbar variant: CENTERED LOGO — links split left/right around a centered brand.
// Best for editorial / brand-led sites that want a symmetric header.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: the mobile menu uses useState, so it needs "use client" in Next.js.

import { useState } from "react";
import type { ReactNode } from "react";

type NavLink = { label: string; href: string };

type NavbarCenteredProps = {
  brand: ReactNode;
  /** Split across the two sides of the centered brand on desktop. */
  links: NavLink[];
};

export function NavbarCentered({ brand, links }: NavbarCenteredProps) {
  const [open, setOpen] = useState(false);
  const mid = Math.ceil(links.length / 2);
  const left = links.slice(0, mid);
  const right = links.slice(mid);

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:grid md:grid-cols-3"
      >
        {/* Left links (desktop) */}
        <ul role="list" className="hidden items-center gap-8 md:flex">
          {left.map((link) => (
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

        {/* Brand (centered on desktop) */}
        <a
          href="/"
          className="text-lg font-bold text-gray-900 md:justify-self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {brand}
        </a>

        {/* Right links (desktop) */}
        <ul role="list" className="hidden items-center justify-end gap-8 md:flex">
          {right.map((link) => (
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

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu-centered"
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
        <div id="mobile-menu-centered" className="border-t border-gray-200 md:hidden">
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
          </ul>
        </div>
      )}
    </header>
  );
}
