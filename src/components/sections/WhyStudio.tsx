import React from "react";
import { Zap, Eye, Cpu } from "lucide-react";

const PRINCIPLES = [
  {
    num: "01",
    title: "DESIGN FIRST",
    subtitle: "Intentionality & Human Feeling",
    description:
      "Every experience begins with the human holding the device and the feeling we want to create. We don't start with templates or generic wireframes; we design from emotional resonance and tactile intuition outward.",
    accent: "#A90F24",
    icon: Eye,
  },
  {
    num: "02",
    title: "BUILT TO FEEL FAST",
    subtitle: "Performance as a Craft",
    description:
      "Sluggish software breaks immersion. We treat 120 FPS render pipelines, sub-10ms input response, and microscopic bundle footprints not merely as benchmarks, but as foundational pillars of product aesthetics.",
    accent: "#FF6A1A",
    icon: Zap,
  },
  {
    num: "03",
    title: "CREATIVITY + TECHNOLOGY",
    subtitle: "Engineering Unleashing Imagination",
    description:
      "Code is our paint. Hardware capabilities, compute shaders, and spatial sensors exist to enable bold narrative storytelling and playful interaction, rather than boxing in what is possible.",
    accent: "#C31531",
    icon: Cpu,
  },
];

export function WhyStudio() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#FAF9F6] border-b border-black/8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              The Studio Philosophy
            </span>
          </div>

          <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight text-[#151515] leading-[1.08] uppercase">
            Energy inside control.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666462] leading-relaxed">
            The tension between fire and precision defines NextAura Studios. We bring relentless
            creative energy into disciplined, elegant systems.
          </p>
        </div>

        {/* 3 Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.num}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-black/8 hover:border-[#FF6A1A]/35 transition-all duration-500 hover:shadow-[0_16px_36px_rgba(21,21,21,0.04)]"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/6">
                    <span className="font-mono text-2xl font-bold tracking-tight text-[#151515] group-hover:text-[#A90F24] transition-colors">
                      {principle.num}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-black/8 flex items-center justify-center text-[#151515] group-hover:bg-[#A90F24]/10 group-hover:text-[#A90F24] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] block mb-2">
                    {principle.subtitle}
                  </span>

                  <h3 className="font-heading font-bold text-2xl tracking-tight text-[#151515] mb-4">
                    {principle.title}
                  </h3>

                  <p className="text-sm text-[#666462] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/5 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#FF6A1A]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#969490]">
                    Core Pillar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
