"use client";

// Navbar variant: ANNOUNCEMENT BAR — dismissible promo strip above the nav.
// Best for launches, sales, or news you want visible without crowding the nav.
// React + Tailwind, TypeScript. Responsive and accessible.
// Stateful: bar dismissal + mobile menu use useState, so it needs "use client".

import { useState } from "react";
import type { ReactNode } from "react";

type NavLink = { label: string; href: string };

type NavbarAnnouncementProps = {
  brand: ReactNode;
  links: NavLink[];
  cta?: { label: string; href: string };
  announcement: {
    text: string;
    /** Optional inline link at the end of the announcement. */
    link?: { label: string; href: string };
  };
};

export function NavbarAnnouncement({
  brand,
  links,
  cta,
  announcement,
}: NavbarAnnouncementProps) {
  const [showBar, setShowBar] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Announcement bar */}
      {showBar && (
        <div className="bg-indigo-600 text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-x-3 px-6 py-2 text-sm">
            <p>
              {announcement.text}{" "}
              {announcement.link && (
                <a
                  href={announcement.link.href}
                  className="font-semibold underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {announcement.link.label} <span aria-hidden="true">→</span>
                </a>
              )}
            </p>
            <button
              type="button"
              onClick={() => setShowBar(false)}
              className="absolute right-6 text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="sr-only">Dismiss announcement</span>
              <span aria-hidden="true">✕</span>
            </button>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between border-b border-gray-200 px-6 py-4"
      >
        <a
          href="/"
          className="text-lg font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {brand}
        </a>

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

        {cta && (
          <a
            href={cta.href}
            className="hidden min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:inline-flex"
          >
            {cta.label}
          </a>
        )}

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu-announcement"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="text-xl">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu-announcement" className="border-b border-gray-200 md:hidden">
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
