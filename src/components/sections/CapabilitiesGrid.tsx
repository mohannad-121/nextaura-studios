import React from "react";
import { Smartphone, Monitor, Gamepad2, Sparkles, Orbit, Layers } from "lucide-react";

const CAPABILITIES = [
  { label: "iOS & iPadOS", icon: Smartphone, desc: "Swift, SwiftUI & Metal Native" },
  { label: "Android", icon: Layers, desc: "Kotlin & Low-latency Graphics" },
  { label: "Web Platform", icon: Monitor, desc: "Next.js, WebGPU & Canvas Shaders" },
  { label: "Game Systems", icon: Gamepad2, desc: "Physics Simulation & Custom Engines" },
  { label: "Spatial Tech", icon: Orbit, desc: "Vision & Spatial Acoustic Audio" },
  { label: "Tactile Haptics", icon: Sparkles, desc: "Sensory Vibration & Direct Feedback" },
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
                className="group p-5 rounded-xl bg-white border border-black/6 hover:border-[#FF6A1A]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-black/6 flex items-center justify-center text-[#151515] group-hover:bg-[#A90F24]/10 group-hover:text-[#A90F24] transition-colors mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-[#151515] group-hover:text-[#A90F24] transition-colors">
                    {cap.label}
                  </h4>
                  <p className="text-[11px] text-[#666462] mt-1 leading-snug">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
