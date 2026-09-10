import type { Metadata } from "next";
import { CreditSimulator } from "@/components/CreditSimulator";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Simuler mon rachat de crédit",
  description:
    "Estimez gratuitement votre nouvelle mensualité après regroupement de crédits.",
};

export default function SimulateurPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Simuler mon rachat de crédit
      </h1>
      <p className="mt-4 text-neutral-900/70">
        Ajustez les curseurs pour estimer votre nouvelle mensualité. Le
        résultat est indicatif — on affine avec vous une fois votre dossier
        étudié.
      </p>

      <div className="mt-8">
        <CreditSimulator />
      </div>

      <h2 className="mt-16 font-heading text-2xl font-semibold text-navy">
        Passons à l&apos;étude de votre dossier
      </h2>
      <p className="mt-2 text-neutral-900/70">
        Laissez-nous vos coordonnées, gratuit et sans engagement. On vous
        rappelle sous 48h avec une proposition réelle.
      </p>
      <div className="mt-6">
        <LeadForm source="simulateur" withProjectFields submitLabel="Démarrer ma simulation" />
      </div>
    </div>
  );
}
