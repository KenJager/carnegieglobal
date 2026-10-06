import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { videos } from "@/lib/data";

const highlights = [
  "Une équipe dédiée au secteur de la santé",
  "Plus de 10 ans d'expérience terrain",
  "Techniciens certifiés et formés en continu",
  "Interventions rapides sur tout le territoire",
];

export default function VideoSection() {
  return (
    <section id="video" className="py-20 lg:py-28 bg-neutral text-neutral-content relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern text-white opacity-[0.05]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-secondary font-bold text-sm tracking-[0.2em] uppercase">
              En vidéo
            </span>
            <h2 className="section-title mt-3 text-neutral-content">
              {videos.presentation.title}
            </h2>
            <p className="mt-4 text-lg text-neutral-content/80 leading-relaxed">
              {videos.presentation.description}
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-neutral-content/80">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary btn-lg gap-2">
                Nous contacter
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Vidéo */}
          <div className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl video-shadow border border-neutral-content/10">
              <video
                controls
                poster={videos.presentation.poster}
                className="w-full h-full object-cover"
                preload="metadata"
              >
                <source src={videos.presentation.src} type="video/mp4" />
              </video>

              {/* Play overlay (visible avant lecture) */}
              <div className="absolute inset-0 flex items-center justify-center bg-neutral/30 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-2xl">
                  <Play className="w-8 h-8 text-primary-content ml-1" />
                </div>
              </div>
            </div>

            {/* Badge flottant */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-content rounded-2xl px-6 py-4 shadow-2xl hidden sm:block">
              <div className="text-2xl font-extrabold leading-none">10+</div>
              <div className="text-[10px] font-semibold tracking-wider uppercase opacity-90">
                Ans d'expertise
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}