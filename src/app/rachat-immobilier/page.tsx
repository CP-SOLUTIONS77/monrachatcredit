import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rachat de crédit immobilier",
  description:
    "Regroupez votre prêt immobilier avec vos autres crédits pour réduire votre mensualité globale ou financer un nouveau projet.",
};

export default function RachatImmobilierPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-orange">
        Rachat de crédit avec prêt immobilier
      </p>
      <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Regroupez votre prêt immobilier et vos crédits conso
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Quand un ou plusieurs crédits à la consommation viennent alourdir un
        prêt immobilier déjà en cours, le budget peut vite devenir tendu. Le
        rachat de crédit immobilier permet de regrouper l&apos;ensemble en un
        seul prêt, avec une seule mensualité et, souvent, une durée
        allongée.
      </p>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Dans quels cas y penser ?
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-neutral-900/70">
        <li className="flex items-start gap-2">
          <span className="mt-1 text-orange" aria-hidden>•</span>
          Un crédit travaux ou auto vient s&apos;ajouter au prêt immobilier
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-orange" aria-hidden>•</span>
          Un changement de situation (séparation, perte de revenus, retraite) réduit votre capacité de remboursement
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1 text-orange" aria-hidden>•</span>
          Vous voulez financer un nouveau projet (travaux, achat) sans alourdir votre reste à vivre
        </li>
      </ul>

      <h2 className="mt-10 font-heading text-xl font-semibold text-navy">
        Ce que ça change
      </h2>
      <p className="mt-3 text-sm text-neutral-900/70">
        Le nouveau prêt reprend une garantie (hypothèque ou caution) comme un
        crédit immobilier classique. La durée totale de remboursement est en
        général plus longue que celle des crédits d&apos;origine, ce qui
        permet de baisser la mensualité mais augmente le coût total du
        crédit. C&apos;est un compromis à évaluer ensemble selon votre
        priorité : alléger le budget mensuel ou limiter le coût total.
      </p>

      <Link
        href="/simulateur"
        className="mt-8 inline-block rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
      >
        Simuler mon rachat immobilier
      </Link>
    </div>
  );
}
