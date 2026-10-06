import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart, Wrench, Settings, GraduationCap,
  CheckCircle2, ChevronRight,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap = {
  ShoppingCart,
  Wrench,
  Settings,
  GraduationCap,
} as const;

const accentMap = {
  primary: "gradient-primary",
  secondary: "gradient-health",
  mixed: "gradient-mixed",
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="section-eyebrow">Nos expertises</span>
          <h2 className="section-title mt-3">
            Quatre pôles pour équiper et maintenir vos établissements.
          </h2>
          <p className="mt-4 text-lg text-base-content/70">
            De la fourniture à la formation, nous couvrons l'ensemble du cycle de vie
            de vos équipements médicaux.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <article
                key={s.id}
                className="group card bg-base-100 border border-base-300 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <figure className="relative h-56 overflow-hidden bg-base-200">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral/70 via-neutral/20 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${accentMap[s.accent]} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </figure>

                <div className="card-body p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                      {s.subtitle}
                    </span>
                  </div>
                  <h3 className="card-title text-xl font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-base-content/70 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-base-content/70">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="card-actions mt-6">
                    <Link
                      href={s.href}
                      className="link link-hover inline-flex items-center gap-2 text-sm font-bold text-primary"
                    >
                      En savoir plus
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}