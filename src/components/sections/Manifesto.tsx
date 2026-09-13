"use client";

import React from "react";

const LINES = [
  { text: "We don't build screens just to fill them.", highlight: false },
  { text: "We build products people want to explore.", highlight: true },
  { text: "Games they want to return to.", highlight: false },
  { text: "Apps that feel natural.", highlight: true },
  { text: "Experiences with identity.", highlight: false },
];

export function Manifesto() {
  return (
    <section className="relative py-28 sm:py-44 bg-[#F4F4F2] border-b border-black/8 overflow-hidden select-none">
      {/* Dynamic Central Solar Aura Ambient Backlight */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#A90F24]/10 via-[#FF6A1A]/10 to-[#FFB24A]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10 text-center">
        {/* Top Section Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/35 shadow-xs mb-12 sm:mb-16 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24]" />
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#151515] font-bold">
            The NextAura Manifesto
          </span>
        </div>

        {/* Large Typographic Manifesto */}
        <div className="flex flex-col gap-6 sm:gap-10">
          {LINES.map((line, idx) => (
            <p
              key={idx}
              className={`font-serif-luxury text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight leading-[1.08] transition-colors duration-500 ${
                line.highlight
                  ? "solar-text-gradient drop-shadow-sm italic font-bold"
                  : "text-[#151515] hover:text-[#A90F24]"
              }`}
            >
              “{line.text}”
            </p>
          ))}
        </div>

        {/* Studio Signature */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#D4AF37]/25 max-w-md mx-auto flex items-center justify-center gap-4">
          <span className="w-10 h-0.5 bg-[#D4AF37]" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#666462]">
            NEXT<span className="solar-text-gradient font-bold">AURA</span> STUDIOS · MANIFESTO
          </span>
          <span className="w-10 h-0.5 bg-[#D4AF37]" />
        </div>
      </div>
    </section>
  );
}
