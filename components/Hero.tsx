import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-neutral">
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/images3.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-placeholder.mp4" type="video/mp4" />
      </video>

      {/* Overlay sombre */}
      <div className="absolute inset-0 overlay-dark" />

      {/* Motif technique */}
      <div className="absolute inset-0 grid-pattern text-white opacity-[0.06]" />

      {/* Contenu */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <div className="badge badge-outline border-secondary/60 bg-secondary/10 text-secondary gap-2 px-4 py-4 mb-6 backdrop-blur">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-wide uppercase">
              Partenaire de confiance des établissements de santé
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Des équipements médicaux{" "}
            <span className="text-secondary">
              fiables
            </span>
            , une maintenance{" "}
            <span className="text-secondary">
              sans faille
            </span>
            .
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
            Carnegie Global Services Sarl accompagne les hôpitaux, cliniques et laboratoires
            du Cameroun dans la fourniture, l'installation et la maintenance de leurs
            équipements biomédicaux.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/devis"
              className="btn btn-primary btn-lg gap-2 shadow-xl shadow-primary/30"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="#video"
              className="btn btn-outline btn-lg border-white/30 text-white hover:bg-white hover:text-neutral gap-2"
            >
              <Play className="w-5 h-5" />
              Voir la vidéo
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" /> Douala, Cameroun
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" /> Techniciens certifiés
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Support 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/50 text-xs">
        <span>Découvrir</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}