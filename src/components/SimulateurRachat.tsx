"use client";

import { useCallback, useState } from "react";
import { CreditSimulator, type SimulationResult } from "@/components/CreditSimulator";
import { LeadForm } from "@/components/LeadForm";

function euros(value: number): string {
  return `${Math.round(value).toLocaleString("fr-FR")} €`;
}

/** Simulateur et formulaire réunis : le résultat de la simulation part avec la demande. */
export function SimulateurRachat() {
  const [simulation, setSimulation] = useState<string>();

  const handleChange = useCallback((r: SimulationResult) => {
    setSimulation(
      [
        `Crédits à regrouper : ${euros(r.capital)}`,
        `Mensualités actuelles : ${euros(r.mensualiteActuelle)} par mois`,
        `Durée souhaitée : ${r.dureeAnnees} ans, au taux indicatif de ${r.taux.toFixed(1).replace(".", ",")} %`,
        `Nouvelle mensualité estimée : ${euros(r.nouvelleMensualite)} par mois`,
      ].join("\n"),
    );
  }, []);

  return (
    <>
      <div className="mt-8">
        <CreditSimulator onChange={handleChange} />
      </div>

      <h2 className="mt-16 font-heading text-2xl font-semibold text-navy">
        Passons à l&apos;étude de votre dossier
      </h2>
      <p className="mt-2 text-neutral-900/70">
        Laissez-nous vos coordonnées, gratuit et sans engagement. On vous rappelle sous 48h avec une
        proposition réelle. Vous préférez parler tout de suite ? Appelez le{" "}
        <a href="tel:+33164248345" className="font-semibold text-navy underline">
          01 64 24 83 45
        </a>
        .
      </p>
      <div className="mt-6">
        <LeadForm
          source="simulateur"
          withProjectFields
          simulation={simulation}
          submitLabel="Être rappelé avec une proposition"
        />
      </div>
    </>
  );
}
