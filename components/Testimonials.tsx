import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="section-eyebrow">Témoignages</span>
          <h2 className="section-title mt-3">
            Ce que disent nos clients.
          </h2>
          <p className="mt-4 text-lg text-base-content/70">
            La confiance de nos partenaires est notre meilleure récompense.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="card bg-base-100 border border-base-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="card-body p-6 lg:p-8">
                <Quote className="w-8 h-8 text-secondary/30 mb-2" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-base-content/80 leading-relaxed italic">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-base-300">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-base-200 flex-shrink-0">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-base-content/60">
                      {t.role}
                    </div>
                    <div className="text-xs font-semibold text-secondary mt-0.5">
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}