import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rachat de crédit à la consommation",
  description:
    "Regroupez vos crédits conso, découverts et prêts personnels en une seule mensualité, sans prêt immobilier.",
};

export default function RachatConsoPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-orange">
        Rachat de crédits à la consommation
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Un seul crédit pour remplacer plusieurs mensualités
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Crédit auto, crédit travaux, prêt personnel, découvert bancaire : ces
        petits crédits s&apos;accumulent parfois plus vite qu&apos;on ne le
        pense. Le rachat de crédit conso permet de les regrouper en un seul
        prêt, avec une seule mensualité, sans prêt immobilier associé.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Crédits concernés
      </h2>
      <ul className="mt-3 grid gap-2 text-sm text-neutral-900/70 sm:grid-cols-2">
        {[
          "Crédit auto ou moto",
          "Crédit travaux",
          "Prêt personnel",
          "Crédit renouvelable (revolving)",
          "Découvert bancaire",
          "Dettes familiales ou fiscales, selon dossier",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 text-orange" aria-hidden>•</span>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Ce qu&apos;on regarde avec vous
      </h2>
      <p className="mt-3 text-sm text-neutral-900/70">
        Le montant total à regrouper, votre taux d&apos;endettement actuel et
        la mensualité cible qui vous laisse un reste à vivre confortable.
        Selon le montant, le rachat de crédit conso peut aussi inclure un
        montant de trésorerie complémentaire pour un projet.
      </p>

      <Link
        href="/simulateur"
        className="mt-8 inline-block rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
      >
        Simuler mon rachat de crédits conso
      </Link>
    </div>
  );
}
