// Hero section de référence — variante "split" (texte à gauche, visuel à droite).
// React + Tailwind, TypeScript. Responsive et accessible.
// Copie ce composant puis adapte le contenu, les liens et les couleurs à ta charte.

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** URL du visuel produit ; si absent, un placeholder dégradé est affiché. */
  imageUrl?: string;
  imageAlt?: string;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  imageAlt = "",
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Colonne texte */}
        <div className="max-w-xl">
          {eyebrow && (
            <p className="mb-4 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">{subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={primaryCta.href}
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-indigo-600 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex min-h-11 items-center justify-center rounded-lg px-4 text-base font-semibold text-gray-900 transition hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
        </div>

        {/* Colonne visuel */}
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              loading="eager"
              className="w-full rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          ) : (
            <div
              aria-hidden="true"
              className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl ring-1 ring-gray-900/10"
            />
          )}
        </div>
      </div>
    </section>
  );
}

// Exemple d'usage :
// <Hero
//   eyebrow="Nouveau"
//   title="Lance ta landing page en quelques minutes"
//   subtitle="Des sections React + Tailwind prêtes à l'emploi, accessibles et responsive."
//   primaryCta={{ label: "Commencer", href: "/signup" }}
//   secondaryCta={{ label: "Voir la démo", href: "/demo" }}
// />
