"use server";

import { z } from "zod";
import { createBrevoLead } from "@/lib/brevo";

const leadSchema = z.object({
  firstname: z.string().trim().min(1, "Le prénom est requis."),
  lastname: z.string().trim().min(1, "Le nom est requis."),
  email: z.string().trim().email("Adresse e-mail invalide."),
  phone: z
    .string()
    .trim()
    .min(10, "Numéro de téléphone invalide.")
    .max(20, "Numéro de téléphone invalide."),
  message: z.string().trim().optional(),
  montant: z.string().trim().optional(),
  mensualite: z.string().trim().optional(),
  situation: z.string().trim().optional(),
  source: z.string().trim().min(1),
});

export type LeadFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof leadSchema>, string>>;
};

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse({
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    montant: formData.get("montant"),
    mensualite: formData.get("mensualite"),
    situation: formData.get("situation"),
    source: formData.get("source"),
  });

  if (!parsed.success) {
    const fieldErrors: LeadFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof leadSchema>;
      fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Merci de corriger les champs indiqués.",
      fieldErrors,
    };
  }

  const { firstname, lastname, email, phone, message, montant, mensualite, situation, source } =
    parsed.data;

  const details = [
    montant && `Montant total des crédits à regrouper : ${montant}`,
    mensualite && `Mensualités actuelles : ${mensualite}`,
    situation && `Situation : ${situation}`,
    message && `Message : ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await createBrevoLead({
      email,
      firstname,
      lastname,
      phone,
      message: details,
      source,
    });
  } catch (error) {
    console.error("Erreur envoi lead Brevo", error);
    return {
      status: "error",
      message:
        "Une erreur technique est survenue. Merci de nous appeler directement au 01 64 24 83 45.",
    };
  }

  return {
    status: "success",
    message: "Merci ! Votre demande a bien été enregistrée, on vous rappelle rapidement.",
  };
}
