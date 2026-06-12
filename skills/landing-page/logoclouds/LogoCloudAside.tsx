// LogoCloud variant: ASIDE — heading on the left, logo grid on the right.
// Best when the proof statement needs words next to the logos.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").

import type { ReactNode } from "react";

type Logo = { name: string; logo: ReactNode };

type LogoCloudAsideProps = {
  heading: string;
  subtext?: string;
  logos: Logo[];
};

export function LogoCloudAside({ heading, subtext, logos }: LogoCloudAsideProps) {
  return (
    <section aria-labelledby="logos-title" className="bg-surface py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-3 lg:gap-12">
        {/* Heading */}
        <div className="lg:col-span-1">
          <h2
            id="logos-title"
            className="text-2xl font-bold tracking-tight text-ink"
          >
            {heading}
          </h2>
          {subtext && (
            <p className="mt-3 text-base leading-7 text-muted">{subtext}</p>
          )}
        </div>

        {/* Logos */}
        <ul
          role="list"
          className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:col-span-2"
        >
          {logos.map((item) => (
            <li
              key={item.name}
              className="flex justify-center text-muted grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 [&_img]:h-8 [&_img]:w-auto [&>svg]:h-8 [&>svg]:w-auto"
            >
              <span className="sr-only">{item.name}</span>
              {item.logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
