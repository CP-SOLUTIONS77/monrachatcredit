import type { Metadata } from "next";
import { SimulateurRachat } from "@/components/SimulateurRachat";

export const metadata: Metadata = {
  title: "Simuler mon rachat de crédit",
  description:
    "Estimez gratuitement votre nouvelle mensualité après regroupement de crédits.",
  alternates: { canonical: "/simulateur" },
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

      <SimulateurRachat />
    </div>
  );
}
