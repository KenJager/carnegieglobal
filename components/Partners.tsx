import Image from "next/image";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section className="py-16 lg:py-20 bg-base-200 border-y border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="section-eyebrow">Ils nous font confiance</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-3">
            Nos partenaires & références
          </h2>
        </div>

        <div className="flex justify-center items-center gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex items-center justify-center p-1 bg-base-100 border border-base-300 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              {/* Placeholder texte en attendant les vrais logos */}
              {/* <span className="text-xs font-bold text-base-content/60 text-center group-hover:text-primary transition-colors">
                {p.name}
              </span> */}
              
              <Image
                src={p.logo}
                alt={p.name}
                width={60}
                height={60}
                className="object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}