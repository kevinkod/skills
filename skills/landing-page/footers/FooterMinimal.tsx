// Footer variant: MINIMAL — centered brand, a single row of links, copyright.
// Best for small/simple sites that don't need multi-column navigation.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import type { ReactNode } from "react";

type FooterLink = { label: string; href: string };

type FooterMinimalProps = {
  brand: ReactNode;
  links?: FooterLink[];
  copyright?: string;
};

export function FooterMinimal({ brand, links, copyright }: FooterMinimalProps) {
  return (
    <footer aria-labelledby="footer-title" className="border-t border-border bg-surface-2">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 text-center">
        <div className="font-display text-lg font-semibold text-ink">{brand}</div>

        {links && links.length > 0 && (
          <nav aria-label="Footer" className="mt-6">
            <ul role="list" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {links.map((link) => (
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
          </nav>
        )}

        <p className="mt-8 text-sm text-muted">
          {copyright ?? <>© {brand}. All rights reserved.</>}
        </p>
      </div>
    </footer>
  );
}
