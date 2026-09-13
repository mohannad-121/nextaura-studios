import React from "react";

const STEPS = [
  {
    num: "01",
    title: "IMAGINE",
    subtitle: "Speculative Spark",
    description:
      "We dissect possibilities. Unconstrained blue-sky sketching, physics experiments, and concept mapping to locate the emotional core of what needs to exist.",
    accent: "#A90F24",
  },
  {
    num: "02",
    title: "DESIGN",
    subtitle: "Tactile Architecture",
    description:
      "Translating ideas into living spatial layouts, typographic hierarchies, and haptic feedback maps. We sculpt the visual language before touching code.",
    accent: "#FF6A1A",
  },
  {
    num: "03",
    title: "BUILD",
    subtitle: "Engineered Precision",
    description:
      "Writing razor-sharp, zero-latency code. Custom shaders, optimized compute passes, and native platform bindings built for 120 FPS fluency.",
    accent: "#F59E0B",
  },
  {
    num: "04",
    title: "PLAY",
    subtitle: "Kinetic Testing",
    description:
      "We stress-test the sensation of use. We play, twist, drag, and break mechanics to evaluate whether the interaction creates genuine delight.",
    accent: "#E11D48",
  },
  {
    num: "05",
    title: "REFINE",
    subtitle: "Micro-Polish",
    description:
      "Polishing easing curves, tuning physics dampening, eliminating frame drops, and balancing solar contrast across real ambient lighting environments.",
    accent: "#8B5CF6",
  },
  {
    num: "06",
    title: "LAUNCH",
    subtitle: "Into The Wild",
    description:
      "Deploying to App Store, web, and custom platforms with robust telemetry, zero bloat, and memorable brand presentation.",
    accent: "#10B981",
  },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#FAF9F6] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6A1A]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              How We Work
            </span>
          </div>

          <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight text-[#151515] leading-[1.08] uppercase">
            The Creative Storyboard.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#666462] leading-relaxed">
            From initial ignition to public launch, our process is tailored for speed, aesthetic
            conviction, and uncompromised technical quality.
          </p>
        </div>

        {/* 6 Storyboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-orange-50/20 border border-black/10 hover:border-black/20 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_-8px_rgba(21,21,21,0.08)]"
            >
              {/* Top Accent Line */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: step.accent }}
                aria-hidden="true"
              />

              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/8">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md border shadow-xs"
                      style={{
                        backgroundColor: `${step.accent}15`,
                        color: step.accent,
                        borderColor: `${step.accent}30`,
                      }}
                    >
                      {step.num}
                    </span>
                    <span
                      className="text-[11px] font-mono font-semibold uppercase tracking-wider"
                      style={{ color: step.accent }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl tracking-tight text-[#151515] mb-3 group-hover:text-[#A90F24] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#666462] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/8 flex items-center justify-between text-[11px] font-mono text-[#151515]">
                  <span className="font-semibold">PHASE {step.num}</span>
                  <span
                    className="w-2 h-2 rounded-full shadow-xs transition-transform group-hover:scale-125"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
