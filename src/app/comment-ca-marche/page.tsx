import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "Les étapes d'un rachat de crédit : étude du dossier, comparaison des banques, négociation, signature et déblocage des fonds.",
};

const STEPS = [
  {
    title: "1. Un premier échange, sans engagement",
    text: "Par téléphone au 01 64 24 83 45 ou en agence, on regarde ensemble vos crédits en cours (montants, mensualités, taux), vos revenus et votre projet. Cet échange est gratuit et ne vous engage à rien.",
  },
  {
    title: "2. Le montage du dossier",
    text: "On vous indique les justificatifs à réunir : pièce d'identité, justificatifs de revenus (3 derniers bulletins de salaire ou bilans), relevés de comptes, tableaux d'amortissement des crédits en cours, avis d'imposition. On vous aide à les rassembler.",
  },
  {
    title: "3. La comparaison entre plusieurs banques",
    text: "En tant que courtier indépendant, on ne travaille pas pour une seule banque. Votre dossier est présenté à plusieurs établissements partenaires, qui étudient votre capacité de remboursement et proposent chacun leurs conditions.",
  },
  {
    title: "4. La négociation",
    text: "On compare les offres reçues (taux, durée, frais de dossier, assurance emprunteur) et on négocie les meilleures conditions pour votre situation, pas pour la marge d'une banque en particulier.",
  },
  {
    title: "5. L'offre de prêt et le délai de réflexion",
    text: "Une fois l'offre choisie, la banque vous adresse une offre de prêt. La loi impose un délai de réflexion de 10 jours minimum avant de pouvoir l'accepter.",
  },
  {
    title: "6. Le déblocage des fonds",
    text: "Après acceptation, la banque rembourse directement vos anciens crédits. Vous n'avez plus qu'une seule mensualité, adaptée à votre budget.",
  },
];

const DOCUMENTS = [
  "Pièce d'identité en cours de validité",
  "3 derniers bulletins de salaire (ou 2 derniers bilans pour un indépendant)",
  "3 derniers relevés de comptes bancaires",
  "Tableaux d'amortissement de tous les crédits en cours",
  "Dernier avis d'imposition",
  "Justificatif de domicile récent",
];

export default function CommentCaMarchePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-navy sm:text-4xl">
        Comment se passe votre rachat de crédit
      </h1>
      <p className="mt-4 text-neutral-900/70">
        De la première prise de contact au déblocage des fonds, voici les
        étapes d&apos;un dossier de regroupement de crédits, et le délai
        moyen à prévoir.
      </p>

      <div className="mt-10 space-y-8">
        {STEPS.map((step) => (
          <div key={step.title} className="border-l-2 border-orange pl-5">
            <h2 className="font-heading font-semibold text-navy">
              {step.title}
            </h2>
            <p className="mt-1 text-sm text-neutral-900/70">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-neutral-50 p-6">
        <h2 className="font-heading font-semibold text-navy">
          Les documents à préparer
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-neutral-900/70">
          {DOCUMENTS.map((doc) => (
            <li key={doc} className="flex items-start gap-2">
              <span className="mt-1 text-orange" aria-hidden>
                •
              </span>
              {doc}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-8 text-sm text-neutral-900/60">
        Délai moyen entre le premier échange et le déblocage des fonds :
        généralement entre 4 et 8 semaines, selon la complexité du dossier et
        la réactivité des pièces transmises.
      </p>

      <Link
        href="/simulateur"
        className="mt-8 inline-block rounded-full bg-orange px-6 py-3 font-heading font-semibold text-white transition hover:brightness-95"
      >
        Simuler mon rachat de crédit
      </Link>
    </div>
  );
}
