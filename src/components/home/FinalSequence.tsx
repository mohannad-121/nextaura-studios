"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { AuraButton } from "@/components/ui/AuraButton";

export const FinalSequence = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="final-section relative min-h-screen w-full flex flex-col items-center justify-center px-6 sm:px-10 py-32 bg-[#FFFDFC] text-center border-t border-black/8 overflow-hidden"
    >
      {/* Dynamic Luminous Solar Aura Flare Background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] rounded-full bg-gradient-to-tr from-[#FF6A1A]/20 via-[#A90F24]/15 to-[#D4AF37]/20 blur-3xl opacity-90" />

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Converging Brand Emblem Lockup */}
        <div className="final-logo-container relative mb-8 flex flex-col items-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center mb-4">
            <Image
              src="/brand/logo.png"
              alt="NextAura Emblem"
              width={112}
              height={112}
              className="w-full h-full object-contain drop-shadow-[0_4px_25px_rgba(255,106,26,0.5)]"
            />
          </div>

          <span className="font-heading font-black text-2xl sm:text-4xl tracking-tight text-[#151515]">
            NEXT<span className="solar-text-gradient">AURA</span> STUDIOS
          </span>
          <span className="text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase font-bold mt-1">
            CREATIVE TECHNOLOGY & ENTERTAINMENT
          </span>
        </div>

        {/* Final Headline */}
        <h2 className="final-heading font-heading font-black text-[clamp(2.5rem,6vw,5.5rem)] tracking-tight leading-[1.04] text-[#151515] uppercase max-w-3xl">
          GOT AN IDEA <br />
          WORTH <span className="solar-text-gradient font-serif-luxury capitalize italic font-bold">Building?</span>
        </h2>

        <p className="final-copy mt-6 text-base sm:text-xl text-[#666462] max-w-xl leading-relaxed">
          From initial concept to production-ready software, let’s build something people want to play, use, and remember.
        </p>

        {/* Main CTA */}
        <div className="final-cta mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <AuraButton href="/contact" variant="primary" size="lg" showArrow className="shadow-lg">
            Start a Project
          </AuraButton>

          <AuraButton href="/about" variant="secondary" size="lg">
            Meet The Studio
          </AuraButton>
        </div>

        <p className="mt-8 text-xs font-mono text-[#D4AF37] font-semibold tracking-wider">
          Direct studio inquiry · Response within 24 hours
        </p>
      </div>
    </section>
  );
});

FinalSequence.displayName = "FinalSequence";
