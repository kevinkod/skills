// LogoCloud variant: MARQUEE — logos scroll horizontally in a continuous loop.
// Best when you have many logos and want subtle motion as social proof.
// React + Tailwind v4, TypeScript. Responsive and accessible.
// Themed via semantic tokens — pick a vibe in ../themes (see SKILL.md "Art direction").
// Pure CSS animation (no JS). Respects prefers-reduced-motion via motion-reduce.
//
// Tailwind config — add this keyframe/animation:
//   theme: { extend: {
//     keyframes: { marquee: { '0%': { transform: 'translateX(0)' },
//                             '100%': { transform: 'translateX(-50%)' } } },
//     animation: { marquee: 'marquee 30s linear infinite' },
//   }}

import type { ReactNode } from "react";

type Logo = { name: string; logo: ReactNode };

type LogoCloudMarqueeProps = {
  heading?: string;
  logos: Logo[];
};

export function LogoCloudMarquee({
  heading = "Trusted by teams worldwide",
  logos,
}: LogoCloudMarqueeProps) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const row = [...logos, ...logos];

  return (
    <section aria-labelledby="logos-title" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2
          id="logos-title"
          className="text-center text-sm font-semibold uppercase tracking-wide text-muted"
        >
          {heading}
        </h2>

        {/* Edge fade + clip */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul
            role="list"
            aria-label="Customer logos"
            className="flex w-max items-center gap-16 animate-marquee motion-reduce:anim-none"
          >
            {row.map((item, i) => (
              <li
                key={`${item.name}-${i}`}
                aria-hidden={i >= logos.length}
                className="flex shrink-0 items-center text-muted grayscale opacity-70 [&_img]:h-8 [&_img]:w-auto [&>svg]:h-8 [&>svg]:w-auto"
              >
                <span className="sr-only">{i < logos.length ? item.name : ""}</span>
                {item.logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
