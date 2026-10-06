import { Package, Users, Clock, Award } from "lucide-react";
import { kpis } from "@/lib/data";

const iconMap = [Package, Users, Clock, Award];

export default function StatsSection() {
  return (
    <section className="bg-base-200 py-16 lg:py-20 border-y border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {kpis.map((kpi, i) => {
            const Icon = iconMap[i];
            return (
              <div
                key={kpi.label}
                className="card bg-base-100 border border-base-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="card-body p-6 items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-base-content tracking-tight">
                    {kpi.value}
                  </div>
                  <div className="text-sm font-bold text-base-content mt-1">
                    {kpi.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}