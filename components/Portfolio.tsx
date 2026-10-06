"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

const categories = ["Tous", "Installation", "Maintenance", "Vente", "Formation"];

export default function Portfolio() {
  const [active, setActive] = useState("Tous");
  const filtered =
    active === "Tous" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="realisations" className="py-20 lg:py-28 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Réalisations</span>
            <h2 className="section-title mt-3">
              Des projets concrets sur le terrain.
            </h2>
            <p className="mt-4 text-lg text-base-content/70">
              Un aperçu de nos interventions récentes dans les établissements de santé
              au Cameroun.
            </p>
          </div>

          <div className="tabs tabs-boxed bg-base-200 p-1.5 border border-base-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`tab font-bold transition-all ${
                  active === cat
                    ? "tab-active !bg-primary !text-primary-content"
                    : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group card bg-base-100 border border-base-300 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <figure className="relative h-56 overflow-hidden bg-base-200">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`badge badge-sm font-extrabold tracking-wider uppercase ${
                      p.badge === "Terminé"
                        ? "badge-success text-white"
                        : p.badge === "En cours"
                        ? "badge-warning"
                        : "badge-primary"
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>
              </figure>

              <div className="card-body p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge badge-sm badge-primary badge-outline font-bold uppercase">
                    {p.category}
                  </span>
                  <span className="text-xs font-semibold text-base-content/60">
                    {p.sector}
                  </span>
                </div>
                <h3 className="card-title text-lg leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-base-content/60 inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {p.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/realisations" className="btn btn-outline btn-lg gap-2">
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}