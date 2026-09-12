import React from "react";
import { AuraButton } from "@/components/ui/AuraButton";

export function PreFooterCTA() {
  return (
    <section className="relative py-28 sm:py-40 bg-[#FFFDFC] overflow-hidden border-b border-black/8 text-center">
      {/* Dynamic Luminous Solar Aura Flare Background */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] rounded-full bg-gradient-to-tr from-[#FF6A1A]/18 via-[#A90F24]/12 to-[#FFB24A]/15 blur-3xl opacity-85"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 flex flex-col items-center">
        {/* Solar Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 shadow-xs mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF6A1A] animate-ping" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#151515] font-semibold">
            NextAura Collaboration
          </span>
        </div>

        {/* Monumental Editorial Headline */}
        <h2 className="font-heading font-black text-[clamp(2.4rem,6vw,5.2rem)] tracking-tight leading-[1.05] text-[#151515] uppercase max-w-3xl">
          Got an idea worth building?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-xl text-[#666462] max-w-xl leading-relaxed">
          From first sketch to final screen, let’s turn it into something people want to use, play
          and remember.
        </p>

        {/* Action Button */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <AuraButton href="/contact" variant="primary" size="lg" showArrow>
            Start a Project
          </AuraButton>

          <AuraButton href="/projects" variant="secondary" size="lg">
            Browse Archive
          </AuraButton>
        </div>

        <p className="mt-8 text-xs font-mono text-[#969490]">
          Direct studio inquiry · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
