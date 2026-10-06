export type ServiceId = "vente" | "maintenance" | "installation" | "formation";
export type EquipementId = "imagerie" | "bloc" | "labo" | "monitoring" | "autre";
export type UrgenceId = "urgent" | "week" | "planned";

export interface ServiceDef {
  id: ServiceId;
  label: string;
  desc: string;
  prestations: string[];
}

export interface EquipementDef {
  id: EquipementId;
  label: string;
  detail: string;
}

export interface UrgenceDef {
  id: UrgenceId;
  label: string;
  detail: string;
}

export const SERVICES: ServiceDef[] = [
  {
    id: "vente",
    label: "Vente d'équipements",
    desc: "Imagerie, bloc, labo, monitoring",
    prestations: [
      "Imagerie médicale",
      "Bloc opératoire",
      "Laboratoire",
      "Monitoring patient",
      "Équipements de soins",
      "Consommables & accessoires",
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance biomédicale",
    desc: "Préventive, curative, contrat",
    prestations: [
      "Contrat préventif",
      "Dépannage d'urgence",
      "Pièces de rechange",
      "Audit de parc",
      "Mise en conformité",
      "Rapports d'intervention",
    ],
  },
  {
    id: "installation",
    label: "Installation & mise en service",
    desc: "Déploiement clé en main",
    prestations: [
      "Installation sur site",
      "Calibration & tests",
      "Raccordements techniques",
      "Formation utilisateurs",
      "Documentation",
      "Réception & validation",
    ],
  },
  {
    id: "formation",
    label: "Formation & assistance",
    desc: "Utilisateurs & techniciens",
    prestations: [
      "Formation utilisateurs",
      "Formation techniciens",
      "Maintenance 1er niveau",
      "Sécurité & bonnes pratiques",
      "Supports pédagogiques",
      "Certification",
    ],
  },
];

export const EQUIPEMENTS: EquipementDef[] = [
  { id: "imagerie", label: "Imagerie médicale", detail: "Scanner, IRM, radiologie" },
  { id: "bloc", label: "Bloc opératoire", detail: "Anesthésie, chirurgie" },
  { id: "labo", label: "Laboratoire", detail: "Analyse, biologie" },
  { id: "monitoring", label: "Monitoring patient", detail: "Signes vitaux, ECG" },
  { id: "autre", label: "Autre équipement", detail: "À préciser" },
];

export const URGENCES: UrgenceDef[] = [
  { id: "urgent", label: "Urgent", detail: "24 – 48h" },
  { id: "week", label: "Sous 1 semaine", detail: "Délai standard" },
  { id: "planned", label: "Planifié", detail: "> 1 mois" },
];

export interface QuoteInput {
  service: string;
  prestations: string[];
  equipement: string;
  urgence: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  ville: string;
  message: string;
  website: string;
}

export const emptyQuote: QuoteInput = {
  service: "",
  prestations: [],
  equipement: "",
  urgence: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  ville: "",
  message: "",
  website: "",
};

export type QuoteErrors = Partial<Record<keyof QuoteInput, string>>;

export function labelOf<T extends { id: string; label: string }>(arr: T[], id: string): string {
  return arr.find((x) => x.id === id)?.label ?? "";
}

export function validateQuote(data: QuoteInput): { ok: true } | { ok: false; errors: QuoteErrors } {
  const errors: QuoteErrors = {};

  if (!data.service) errors.service = "Sélectionnez un service.";
  if (!data.equipement) errors.equipement = "Sélectionnez un type d'équipement.";
  if (!data.urgence) errors.urgence = "Sélectionnez un niveau d'urgence.";
  if (!data.name.trim() || data.name.trim().length < 2) errors.name = "Indiquez votre nom complet.";
  if (!data.company.trim() || data.company.trim().length < 2) errors.company = "Indiquez le nom de votre établissement.";
  if (!data.email.trim()) errors.email = "L'e-mail est requis.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Format d'e-mail invalide.";

  const phone = data.phone.replace(/[\s.\-()]/g, "");
  if (!phone) errors.phone = "Le téléphone est requis.";
  else if (!/^\+?\d{8,15}$/.test(phone)) errors.phone = "Format invalide (ex: +237 6XX XX XX XX).";

  if (data.message.length > 1000) errors.message = "Message trop long (1000 caractères max).";

  if (Object.keys(errors).length > 0) return { ok: false, errors };
  return { ok: true };
}