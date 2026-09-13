import React from "react";
import { Smartphone, Monitor, Gamepad2, Sparkles, Orbit, Layers } from "lucide-react";

const CAPABILITIES = [
  { label: "iOS & iPadOS", icon: Smartphone, desc: "Swift, SwiftUI & Metal Native", accent: "#A90F24", gradient: "from-[#A90F24]/12 to-[#FF6A1A]/8" },
  { label: "Android", icon: Layers, desc: "Kotlin & Low-latency Graphics", accent: "#10B981", gradient: "from-[#10B981]/12 to-[#059669]/8" },
  { label: "Web Platform", icon: Monitor, desc: "Next.js, WebGPU & Canvas Shaders", accent: "#8B5CF6", gradient: "from-[#8B5CF6]/12 to-[#6366F1]/8" },
  { label: "Game Systems", icon: Gamepad2, desc: "Physics Simulation & Custom Engines", accent: "#FF6A1A", gradient: "from-[#FF6A1A]/12 to-[#FFB24A]/8" },
  { label: "Spatial Tech", icon: Orbit, desc: "Vision & Spatial Acoustic Audio", accent: "#F59E0B", gradient: "from-[#F59E0B]/12 to-[#D97706]/8" },
  { label: "Tactile Haptics", icon: Sparkles, desc: "Sensory Vibration & Direct Feedback", accent: "#E11D48", gradient: "from-[#E11D48]/12 to-[#C31531]/8" },
];

export function CapabilitiesGrid() {
  return (
    <section className="relative py-20 bg-[#F4F4F2] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#A90F24] font-bold">
              Engineering Matrix
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight text-[#151515] mt-1">
              Platforms & Technical Capabilities
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#FF6A1A] animate-pulse" />
            <span className="text-xs font-mono text-[#666462]">
              Part of the NextAura ecosystem
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-10">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.label}
                className="group relative rounded-xl bg-white border border-black/10 hover:border-black/20 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_12px_28px_-6px_rgba(21,21,21,0.08)]"
              >
                {/* Top Accent Line */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: cap.accent }}
                  aria-hidden="true"
                />

                <div className="p-5 flex flex-col justify-between flex-1">
                  {/* Subtle Background Glow Tint on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    aria-hidden="true"
                  />

                  <div
                    className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 mb-4 shadow-xs"
                    style={{
                      backgroundColor: `${cap.accent}15`,
                      color: cap.accent,
                      border: `1px solid ${cap.accent}30`,
                    }}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </div>

                  <div className="relative z-10">
                    <h4
                      className="font-heading font-bold text-sm text-[#151515] transition-colors duration-200"
                      style={{ color: cap.accent }}
                    >
                      {cap.label}
                    </h4>
                    <p className="text-[11px] text-[#666462] mt-1 leading-snug">
                      {cap.desc}
                    </p>
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

