// Reference logo cloud (social proof) section — "trusted by" brand logos.
// React + Tailwind, TypeScript. Responsive and accessible.
// Logos use a ReactNode slot, so there is no asset/icon-library dependency.
// Copy this component, then adapt the heading, logos, and colors to your brand.

import type { ReactNode } from "react";

type Logo = {
  /** Accessible name of the company, e.g. "Acme". */
  name: string;
  /** Logo element — an <img>, <svg>, or any node. */
  logo: ReactNode;
};

type LogoCloudProps = {
  heading?: string;
  logos: Logo[];
};

export function LogoCloud({
  heading = "Trusted by teams worldwide",
  logos,
}: LogoCloudProps) {
  return (
    <section aria-labelledby="logos-title" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="logos-title"
          className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500"
        >
          {heading}
        </h2>

        <ul
          role="list"
          className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5"
        >
          {logos.map((item) => (
            <li
              key={item.name}
              className="flex justify-center text-gray-400 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 [&_img]:h-8 [&_img]:w-auto [&>svg]:h-8 [&>svg]:w-auto"
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

// Usage example:
// <LogoCloud
//   heading="Trusted by fast-growing teams"
//   logos={[
//     { name: "Acme", logo: <img src="/logos/acme.svg" alt="" /> },
//     { name: "Globex", logo: <img src="/logos/globex.svg" alt="" /> },
//     { name: "Initech", logo: <img src="/logos/initech.svg" alt="" /> },
//     { name: "Umbrella", logo: <img src="/logos/umbrella.svg" alt="" /> },
//     { name: "Soylent", logo: <img src="/logos/soylent.svg" alt="" /> },
//   ]}
// />
