"use client";

import React, { forwardRef } from "react";
import { AuraButton } from "@/components/ui/AuraButton";
import { ArrowDown } from "lucide-react";

interface HeroSequenceProps {
  onExploreClick?: () => void;
}

export const HeroSequence = forwardRef<HTMLDivElement, HeroSequenceProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className="hero-section relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 overflow-hidden bg-solar-grid"
    >
      {/* Top Studio Badge */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/35 shadow-xs backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#151515] font-bold">
            NEXTAURA STUDIOS · ENTER THE AURA
          </span>
        </div>

        <span className="hidden sm:inline-block text-[11px] font-mono text-[#969490] tracking-widest uppercase">
          EST. 2026 / INDEPENDENT DIGITAL STUDIO
        </span>
      </div>

      {/* Main Editorial Hero Text Content */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        <div className="lg:col-span-8 flex flex-col items-start">
          <h1 className="hero-heading font-heading font-black text-[clamp(2.8rem,7vw,6.4rem)] tracking-[-0.035em] leading-[0.98] text-[#151515] uppercase">
            WE BUILD WHAT <br />
            PEOPLE WANT <br />
            TO <span className="solar-text-gradient font-serif-luxury capitalize italic font-bold">Play, Use</span> <br />
            & REMEMBER.
          </h1>

          <p className="hero-subtext mt-6 sm:mt-8 text-base sm:text-xl text-[#666462] max-w-xl leading-relaxed font-normal">
            NextAura Studios creates high-refresh mobile applications, kinetic games, and tactile
            digital experiences engineered around human perception.
          </p>

          <div className="hero-cta mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <AuraButton href="/about" variant="primary" size="lg" showArrow>
              The Studio Approach
            </AuraButton>

            <AuraButton href="/contact" variant="secondary" size="lg">
              Start a Project
            </AuraButton>
          </div>
        </div>
      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="hero-footer max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[#969490] border-t border-black/8 pt-4 z-10">
        <span className="tracking-widest uppercase">MOBILE APPS · GAMES · INTERACTIVE PRODUCTS</span>
        <div className="flex items-center gap-2 text-[#151515] font-semibold">
          <span className="tracking-widest">SCROLL TO ENTER</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF6A1A] animate-bounce" />
        </div>
      </div>
    </section>
  );
});

HeroSequence.displayName = "HeroSequence";
