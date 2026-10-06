import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/images10.jpeg"
        alt="Équipement médical"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-neutral/85" />
      <div className="absolute inset-0 grid-pattern text-white opacity-[0.05]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Un projet d'équipement ou de maintenance ?
        </h2>
        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          Nos experts analysent vos besoins et vous proposent une solution adaptée
          à votre établissement. Réponse garantie sous 24h ouvrées.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/devis" className="btn btn-primary btn-lg gap-2 shadow-xl shadow-primary/30">
            Demander un devis
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline btn-lg border-white/30 text-white hover:bg-white hover:text-neutral"
          >
            Nous contacter
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary" />
            +237 6 XX XX XX XX
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="w-4 h-4 text-secondary" />
            contact@carnegleglobal.com
          </span>
        </div>
      </div>
    </section>
  );
}