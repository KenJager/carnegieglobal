import Image from "next/image";
import Link from "next/link";
import { Heart, Microscope, Stethoscope, Activity, ArrowRight } from "lucide-react";

const domains = [
  { icon: Activity, label: "Imagerie médicale", desc: "Scanner, IRM, radiologie" },
  { icon: Heart, label: "Cardiologie", desc: "ECG, échographie, monitoring" },
  { icon: Microscope, label: "Laboratoire", desc: "Analyse, biologie, microscopie" },
  { icon: Stethoscope, label: "Bloc opératoire", desc: "Anesthésie, chirurgie, stérilisation" },
];

export default function MedicalExpertise() {
  return (
    <section className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images empilées */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/images1.jpeg"
                alt="Intervention biomédicale en hôpital"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Image secondaire flottante */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-48 lg:w-56 aspect-square rounded-2xl overflow-hidden border-4 border-base-100 shadow-2xl">
              <Image
                src="/images/images2.jpeg"
                alt="Équipement médical"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>

            {/* Badge flottant */}
            <div className="absolute -top-4 -left-4 bg-secondary text-secondary-content rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-extrabold leading-none">100%</div>
              <div className="text-[10px] font-semibold tracking-wider uppercase opacity-90">
                Certifié
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2">
            <span className="section-eyebrow-green">Expertise médicale</span>
            <h2 className="section-title mt-3">
              Au cœur de la chaîne de soins.
            </h2>
            <p className="mt-4 text-lg text-base-content/70 leading-relaxed">
              Nos techniciens biomédicaux interviennent sur l'ensemble des équipements
              critiques de vos établissements de santé. De l'imagerie au bloc opératoire,
              nous garantissons la disponibilité et la fiabilité de votre parc.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {domains.map((d) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="card bg-base-100 border border-base-300 hover:border-secondary/40 hover:shadow-lg transition-all"
                  >
                    <div className="card-body p-5">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="font-bold text-sm">{d.label}</div>
                      <div className="text-xs text-base-content/60">{d.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/services/maintenance"
                className="btn btn-primary gap-2"
              >
                Découvrir notre maintenance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}