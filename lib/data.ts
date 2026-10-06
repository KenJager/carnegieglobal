/* ============================================
   NAVIGATION
   ============================================ */
export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

/* ============================================
   KPIs / STATS
   ============================================ */
export const kpis = [
  { value: "+150", label: "Équipements installés" },
  { value: "+80", label: "Clients accompagnés" },
  { value: "24/7", label: "Support technique" },
  { value: "10+", label: "Ans d'expérience" },
];

/* ============================================
   SERVICES
   ============================================ */
export interface Service {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  accent: "primary" | "secondary" | "mixed";
}

export const services: Service[] = [
  {
    id: "vente",
    icon: "ShoppingCart",
    title: "Vente d'équipements médicaux",
    subtitle: "Distribution & fourniture",
    description:
      "Fourniture d'équipements médicaux et biomédicaux certifiés pour hôpitaux, cliniques et laboratoires. Un catalogue complet et une expertise de sourcing international.",
    features: [
      "Imagerie médicale",
      "Bloc opératoire",
      "Laboratoire & analyse",
      "Monitoring patient",
    ],
    image: "/images/images1.jpeg",
    href: "/services/vente",
    accent: "primary",
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Maintenance biomédicale",
    subtitle: "Préventive & curative",
    description:
      "Contrats de maintenance préventive et dépannage d'urgence de vos équipements médicaux. Nos techniciens certifiés assurent la continuité de vos soins.",
    features: [
      "Contrats sur mesure",
      "Dépannage 24/7",
      "Pièces de rechange",
      "Rapports d'intervention",
    ],
    image: "/images/images4.jpg",
    href: "/services/maintenance",
    accent: "secondary",
  },
  {
    id: "installation",
    icon: "Settings",
    title: "Installation & mise en service",
    subtitle: "Déploiement clé en main",
    description:
      "Installation, calibration et mise en service de vos équipements. Formation de vos équipes et accompagnement à la prise en main.",
    features: [
      "Installation sur site",
      "Calibration & tests",
      "Formation utilisateurs",
      "Documentation technique",
    ],
    image: "/images/images10.jpeg",
    href: "/services/installation",
    accent: "primary",
  },
  {
    id: "formation",
    icon: "GraduationCap",
    title: "Formation & assistance",
    subtitle: "Transfert de compétences",
    description:
      "Formation de vos équipes techniques et soignantes à l'utilisation, la maintenance de premier niveau et la sécurité des équipements médicaux.",
    features: [
      "Formation utilisateurs",
      "Formation techniciens",
      "Supports pédagogiques",
      "Certification",
    ],
    image: "/images/images7.jpeg",
    href: "/services/formation",
    accent: "secondary",
  },
];

/* ============================================
   PORTFOLIO
   ============================================ */
export interface Project {
  id: number;
  title: string;
  category: "Installation" | "Maintenance" | "Vente" | "Formation";
  sector: string;
  badge: "Terminé" | "En cours" | "Avant/Après";
  location: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Installation scanner CT — Hôpital régional",
    category: "Installation",
    sector: "Hôpital public",
    badge: "Terminé",
    location: "Douala",
    image: "/images/projects/scanner.jpg",
  },
  {
    id: 2,
    title: "Contrat maintenance bloc opératoire",
    category: "Maintenance",
    sector: "Clinique privée",
    badge: "En cours",
    location: "Douala",
    image: "/images/projects/bloc.jpg",
  },
  {
    id: 3,
    title: "Fourniture 20 moniteurs multiparamétriques",
    category: "Vente",
    sector: "Clinique privée",
    badge: "Terminé",
    location: "Yaoundé",
    image: "/images/projects/moniteurs.jpg",
  },
  {
    id: 4,
    title: "Formation biomédicale — CHU",
    category: "Formation",
    sector: "Hôpital universitaire",
    badge: "Terminé",
    location: "Yaoundé",
    image: "/images/projects/formation.jpg",
  },
  {
    id: 5,
    title: "Maintenance préventive laboratoire",
    category: "Maintenance",
    sector: "Laboratoire",
    badge: "En cours",
    location: "Douala",
    image: "/images/projects/labo.jpg",
  },
  {
    id: 6,
    title: "Installation autoclave — stérilisation",
    category: "Installation",
    sector: "Clinique privée",
    badge: "Terminé",
    location: "Bafoussam",
    image: "/images/projects/autoclave.jpg",
  },
];

/* ============================================
   TÉMOIGNAGES
   ============================================ */
export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Ngo Bakang",
    role: "Directeur médical",
    company: "Clinique de l'Ouest",
    quote:
      "Une équipe réactive et professionnelle. Leurs interventions sur nos équipements de bloc sont toujours rapides et efficaces.",
    photo: "/images/team/temoignage-1.jpg",
  },
  {
    name: "Mme Fadimatou",
    role: "Ingénieure biomédicale",
    company: "CHU de Douala",
    quote:
      "La qualité de leur maintenance préventive nous a permis de réduire considérablement nos pannes et nos coûts.",
    photo: "/images/team/temoignage-2.jpg",
  },
  {
    name: "M. Etoundi Paul",
    role: "Directeur d'établissement",
    company: "Hôpital privé Bonanjo",
    quote:
      "Un partenaire fiable pour notre parc d'équipements. Leur formation de nos équipes a fait la différence.",
    photo: "/images/team/temoignage-3.jpg",
  },
];

/* ============================================
   COORDONNÉES
   ============================================ */
export const agencies = [
  {
    name: "Siège social",
    address: "Douala, Cameroun",
    phone: "+237 6 XX XX XX XX",
    email: "contact@carnegleglobal.com",
  },
];

export const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "LinkedinIcon" },
  { name: "Facebook", href: "#", icon: "FacebookIcon" },
  { name: "Twitter", href: "#", icon: "TwitterIcon" },
  { name: "YouTube", href: "#", icon: "YoutubeIcon" },
];

/* ============================================
   PARTENAIRES / CERTIFICATIONS
   ============================================ */
export const partners = [
  { name: "Ministère de la Santé", logo: "/images/partners/edm_imaging_logo.jpeg" },
  { name: "OMS Cameroun", logo: "/images/partners/sonoscapemedicalcorp_logo.jpeg" },
  { name: "UNICEF", logo: "/images/partners/whx_dubai_logo.jpeg" },
  { name: "CHU Douala", logo: "/images/partners/wondfo_logo.jpeg" },
];

/* ============================================
   VIDÉOS
   ============================================ */
export const videos = {
  hero: {
    src: "/videos/hero-placeholder.mp4",
    poster: "/images/images10.jpeg",
  },
  presentation: {
    src: "/videos/presentation.mp4",
    poster: "/images/video-presentation-poster.jpg",
    title: "Découvrez Carnegie Global Services",
    description:
      "Une équipe dédiée au service des établissements de santé camerounais.",
  },
};