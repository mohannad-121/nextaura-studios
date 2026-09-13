"use client";

import React from "react";
import { AuraButton } from "@/components/ui/AuraButton";
import { SolarOrb } from "@/components/ui/SolarOrb";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-solar-grid">
      {/* Ambient Solar Lighting Bloom */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FF6A1A]/12 via-[#A90F24]/8 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FFB24A]/10 via-[#FF6A1A]/5 to-transparent blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Brand Identity Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/35 shadow-xs mb-6 sm:mb-8 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#666462] font-semibold">
                Apps · Games · Digital Experiences
              </span>
            </div>

            {/* Editorial Monumental Heading */}
            <h1 className="font-heading font-black text-[clamp(2.6rem,6.4vw,5.6rem)] tracking-[-0.035em] leading-[1.04] text-[#151515] uppercase">
              We Build What <br />
              People Want to{" "}
              <span className="relative inline-block">
                <span className="solar-text-gradient font-serif-luxury capitalize tracking-normal italic font-semibold">Play, Use</span>
              </span>{" "}
              <br />& Remember.
            </h1>

            {/* Studio Purpose Statement */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#666462] max-w-xl leading-relaxed font-normal">
              NextAura Studios is an independent digital studio designing ambitious mobile apps,
              kinetic games, and tactile software experiences. Powered by solar energy, grounded in
              engineering precision.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <AuraButton href="/projects" variant="primary" size="lg" showArrow>
                Explore Selected Works
              </AuraButton>

              <AuraButton href="/about" variant="secondary" size="lg">
                The Studio Approach
              </AuraButton>
            </div>

            {/* Conceptual Quick Highlights */}
            <div className="mt-12 pt-8 border-t border-[#D4AF37]/25 grid grid-cols-3 gap-6 sm:gap-8 w-full max-w-lg">
              <div>
                <span className="block text-[11px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase">
                  Design
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#151515]">
                  Tactile & Alive
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-widest text-[#FF6A1A] font-bold uppercase">
                  Speed
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#151515]">
                  120 FPS Fluid
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono tracking-widest text-[#A90F24] font-bold uppercase">
                  Philosophy
                </span>
                <span className="font-heading font-bold text-sm sm:text-base text-[#A90F24]">
                  Solar Aura
                </span>
              </div>
            </div>
          </div>

          {/* Right / Interactive Solar Aura Visual Object */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <SolarOrb />
          </div>
        </div>
      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full mt-12 flex items-center justify-between text-xs font-mono text-[#969490] border-t border-black/5 pt-4">
        <span>EST. 2026 / INDEPENDENT DIGITAL STUDIO</span>
        <div className="flex items-center gap-2 text-[#151515] font-semibold">
          <span>SCROLL DOWN</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FF6A1A] animate-bounce" />
        </div>
      </div>
    </section>
  );
}
