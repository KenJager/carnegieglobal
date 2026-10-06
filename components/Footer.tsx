import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {  LinkedinIcon, FacebookIcon, TwitterIcon } from '@/components/icons'
import { agencies, socialLinks } from "@/lib/data";
import Logo from "./Logo";

const socialIcons : any = {
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon
}

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-content/10">
          <div className="lg:col-span-2">
            <Logo theme="dark" className="mb-5" />
            <p className="text-sm leading-relaxed max-w-md text-neutral-content/70">
              Carnegie Global Services Sarl — Fournisseur d'équipements médicaux et prestataire
              de maintenance biomédicale au Cameroun. Au service des établissements de santé
              depuis plus de 10 ans.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => {
                const Icon = socialIcons[s.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-lg bg-neutral-content/10 hover:bg-secondary hover:text-secondary-content flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-neutral-content/70">
              <li>
                <Link href="/services/vente" className="hover:text-secondary">
                  Vente d'équipements
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-secondary">
                  Maintenance biomédicale
                </Link>
              </li>
              <li>
                <Link href="/services/installation" className="hover:text-secondary">
                  Installation & mise en service
                </Link>
              </li>
              <li>
                <Link href="/services/formation" className="hover:text-secondary">
                  Formation & assistance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-neutral-content/70">
              {agencies.map((a) => (
                <li key={a.name}>
                  <div className="font-semibold text-neutral-content">{a.name}</div>
                  <div className="flex flex-col mt-1 space-y-1">
                    <div className="inline-flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-secondary mt-0.5 flex-shrink-0" />
                      {a.address}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      {a.phone}
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                      {a.email}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-content/50">
          <p>© {new Date().getFullYear()} Carnegie Global Services Sarl. Tous droits réservés.</p>
          <p>Douala · Cameroun</p>
        </div>
      </div>
    </footer>
  );
}