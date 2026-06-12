// Reference footer section — link columns, brand, social links, copyright.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Social icons use a ReactNode slot, so there is no icon-library dependency.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import type { ReactNode } from "react";

type FooterLink = { label: string; href: string };

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  /** Accessible name, e.g. "GitHub". */
  label: string;
  href: string;
  /** Any SVG/icon element. Optional. */
  icon?: ReactNode;
};

type FooterProps = {
  /** Brand name or a logo element. */
  brand: ReactNode;
  tagline?: string;
  columns: FooterColumn[];
  socials?: SocialLink[];
  /** Defaults to the current year + brand if a string brand is given. */
  copyright?: string;
};

export function Footer({
  brand,
  tagline,
  columns,
  socials,
  copyright,
}: FooterProps) {
  return (
    <footer
      aria-labelledby="footer-title"
      className="border-t border-border bg-surface-2 text-muted"
    >
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="font-display text-lg font-semibold text-ink">
              {brand}
            </div>
            {tagline && (
              <p className="mt-3 text-sm leading-6 text-muted">{tagline}</p>
            )}
            {socials && socials.length > 0 && (
              <ul role="list" className="mt-6 flex gap-4">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="inline-flex text-muted transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&>svg]:h-5 [&>svg]:w-5"
                    >
                      <span className="sr-only">{social.label}</span>
                      {social.icon ?? (
                        <span aria-hidden="true">{social.label}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2"
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-ink">{column.title}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm leading-6 text-muted transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-muted">
          {copyright ?? <>© {brand}. All rights reserved.</>}
        </div>
      </div>
    </footer>
  );
}

// Usage example:
// <Footer
//   brand="Acme"
//   tagline="The fastest way to ship your landing page."
//   columns={[
//     { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
//     { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Blog", href: "/blog" }] },
//     { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
//   ]}
//   socials={[
//     { label: "GitHub", href: "https://github.com/acme", icon: <GitHubIcon /> },
//     { label: "X", href: "https://x.com/acme", icon: <XIcon /> },
//   ]}
//   copyright="© 2026 Acme, Inc. All rights reserved."
// />
