import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rachat de crédit et regroupement de crédits à Montereau",
  description:
    "Trop de mensualités, un budget serré ? On étudie votre dossier, on compare les banques et on négocie le meilleur rachat de crédit pour vous, sans frais si le dossier n'aboutit pas.",
};

const BENEFITS = [
  {
    title: "Une seule mensualité",
    text: "Crédit conso, prêt immobilier, découvert : on regroupe tout en un seul prêt, à un seul taux.",
  },
  {
    title: "Un budget qui respire",
    text: "La mensualité peut baisser jusqu'à 60 %, en allongeant la durée de remboursement.",
  },
  {
    title: "Zéro engagement",
    text: "L'étude de votre dossier et la simulation sont gratuites et sans obligation.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Vous nous parlez de votre situation",
    text: "Par téléphone ou en agence : vos crédits en cours, vos revenus, votre projet.",
  },
  {
    step: "2",
    title: "On compare les banques pour vous",
    text: "En tant que courtier indépendant, on interroge plusieurs établissements, pas un seul.",
  },
  {
    step: "3",
    title: "On négocie les meilleures conditions",
    text: "Taux, durée, assurance emprunteur : on défend votre dossier, pas la marge d'une banque.",
  },
  {
    step: "4",
    title: "Vous signez, on vous accompagne",
    text: "Jusqu'au déblocage des fonds et au remboursement de vos anciens crédits.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-orange">
              Regroupement &amp; rachat de crédit
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Trop de crédits, plus assez de marge ?
            </h1>
            <p className="mt-5 max-w-xl text-lg text-neutral-900/80">
              On regroupe vos crédits en une seule mensualité, adaptée à votre
              budget. Étude gratuite, comparaison entre plusieurs banques,
              accompagnement jusqu&apos;à la signature.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/simulateur"
                className="rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Simuler mon rachat de crédit
              </Link>
              <a
                href="tel:+33164248345"
                className="rounded-full border border-navy px-6 py-3 font-heading font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                Appeler le 01 64 24 83 45
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-neutral-900/70">
              <span className="text-orange" aria-hidden>
                ★★★★★
              </span>
              <span>5,0 / 5 — 84 avis Google</span>
            </div>
          </div>

          <div className="rounded-3xl bg-navy/5 p-8">
            <p className="font-heading font-semibold text-navy">
              Exemple de regroupement
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-navy/10 pb-3">
                <dt className="text-neutral-900/70">Avant : 4 crédits</dt>
                <dd className="font-heading font-semibold text-neutral-900">
                  980 € / mois
                </dd>
              </div>
              <div className="flex items-center justify-between border-b border-navy/10 pb-3">
                <dt className="text-neutral-900/70">Après regroupement</dt>
                <dd className="font-heading font-semibold text-neutral-900">
                  410 € / mois
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-neutral-900/70">Économie mensuelle</dt>
                <dd className="font-heading text-xl font-semibold text-orange">
                  570 € / mois
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-neutral-900/50">
              Exemple illustratif, à titre indicatif. Un rachat de crédit allonge
              en général la durée totale de remboursement.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-100 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title}>
              <h2 className="font-heading font-semibold text-navy">
                {benefit.title}
              </h2>
              <p className="mt-2 text-sm text-neutral-900/70">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
          Comment se passe votre rachat de crédit
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item) => (
            <div key={item.step}>
              <span className="font-heading text-3xl font-semibold text-orange">
                {item.step}
              </span>
              <h3 className="mt-2 font-heading font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-900/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-14 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold">
              Un dossier à étudier ?
            </h2>
            <p className="mt-1 text-white/80">
              Réponse sous 48h, sans engagement.
            </p>
          </div>
          <Link
            href="/simulateur"
            className="rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
          >
            Démarrer ma simulation
          </Link>
        </div>
      </section>
    </>
  );
}
