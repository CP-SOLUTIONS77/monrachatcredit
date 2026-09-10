"use client";

import { useMemo, useState } from "react";

function formatEuros(value: number): string {
  return value.toLocaleString("fr-FR", {
    maximumFractionDigits: 0,
  });
}

function monthlyPayment(capital: number, annualRatePct: number, months: number): number {
  if (capital <= 0 || months <= 0) return 0;
  const r = annualRatePct / 100 / 12;
  if (r === 0) return capital / months;
  return (capital * r) / (1 - Math.pow(1 + r, -months));
}

export function CreditSimulator() {
  const [capital, setCapital] = useState(45000);
  const [mensualiteActuelle, setMensualiteActuelle] = useState(980);
  const [dureeAnnees, setDureeAnnees] = useState(15);
  const [taux, setTaux] = useState(4.5);

  const { nouvelleMensualite, economieMensuelle, coutTotalNouveau } = useMemo(() => {
    const months = dureeAnnees * 12;
    const mensualite = monthlyPayment(capital, taux, months);
    return {
      nouvelleMensualite: mensualite,
      economieMensuelle: mensualiteActuelle - mensualite,
      coutTotalNouveau: mensualite * months,
    };
  }, [capital, mensualiteActuelle, dureeAnnees, taux]);

  return (
    <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="capital" className="text-sm font-medium text-neutral-900">
            Capital total à regrouper
          </label>
          <div className="mt-1 flex items-center gap-2">
            <input
              id="capital"
              type="number"
              min={0}
              step={500}
              value={capital}
              onChange={(e) => setCapital(Number(e.target.value) || 0)}
              className="w-full rounded-lg border border-neutral-100 bg-white px-3 py-2 text-sm outline-none focus:border-navy"
            />
            <span className="text-sm text-neutral-900/60">€</span>
          </div>
        </div>

        <div>
          <label htmlFor="mensualite" className="text-sm font-medium text-neutral-900">
            Mensualités actuelles (total)
          </label>
          <div className="mt-1 flex items-center gap-2">
            <input
              id="mensualite"
              type="number"
              min={0}
              step={10}
              value={mensualiteActuelle}
              onChange={(e) => setMensualiteActuelle(Number(e.target.value) || 0)}
              className="w-full rounded-lg border border-neutral-100 bg-white px-3 py-2 text-sm outline-none focus:border-navy"
            />
            <span className="text-sm text-neutral-900/60">€ / mois</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="duree" className="text-sm font-medium text-neutral-900">
          Durée souhaitée du nouveau prêt : <strong>{dureeAnnees} ans</strong>
        </label>
        <input
          id="duree"
          type="range"
          min={5}
          max={25}
          step={1}
          value={dureeAnnees}
          onChange={(e) => setDureeAnnees(Number(e.target.value))}
          className="mt-2 w-full accent-orange"
        />
      </div>

      <div className="mt-6">
        <label htmlFor="taux" className="text-sm font-medium text-neutral-900">
          Taux indicatif : <strong>{taux.toFixed(1)} %</strong>
        </label>
        <input
          id="taux"
          type="range"
          min={2}
          max={8}
          step={0.1}
          value={taux}
          onChange={(e) => setTaux(Number(e.target.value))}
          className="mt-2 w-full accent-orange"
        />
      </div>

      <div className="mt-8 grid gap-4 border-t border-neutral-100 pt-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-neutral-900/60">Nouvelle mensualité estimée</p>
          <p className="mt-1 font-heading text-2xl font-semibold text-navy">
            {formatEuros(nouvelleMensualite)} €
          </p>
        </div>
        <div>
          <p className="text-sm text-neutral-900/60">
            {economieMensuelle >= 0 ? "Économie mensuelle" : "Surcoût mensuel"}
          </p>
          <p
            className={`mt-1 font-heading text-2xl font-semibold ${
              economieMensuelle >= 0 ? "text-orange" : "text-red-600"
            }`}
          >
            {economieMensuelle >= 0 ? "-" : "+"}
            {formatEuros(Math.abs(economieMensuelle))} €
          </p>
        </div>
        <div>
          <p className="text-sm text-neutral-900/60">Coût total du nouveau crédit</p>
          <p className="mt-1 font-heading text-2xl font-semibold text-neutral-900">
            {formatEuros(coutTotalNouveau)} €
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-neutral-900/50">
        Simulation indicative et non contractuelle, basée sur un taux moyen du
        marché. Le taux réel dépend de votre profil et sera confirmé après
        étude de votre dossier. Allonger la durée réduit la mensualité mais
        augmente en général le coût total du crédit.
      </p>
    </div>
  );
}
