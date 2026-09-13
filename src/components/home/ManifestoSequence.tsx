"use client";

import React, { forwardRef } from "react";

export const ManifestoSequence = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="manifesto-section relative min-h-screen w-full flex flex-col justify-center px-6 sm:px-10 py-32 bg-[#F4F4F2] border-t border-black/8 overflow-hidden select-none"
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-gradient-to-r from-[#FF6A1A]/10 via-[#A90F24]/8 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-start gap-12">
        {/* Chapter Subtitle */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-black/10 shadow-xs text-xs font-mono font-bold tracking-widest text-[#151515] uppercase">
          CHAPTER 05 // STUDIO PHILOSOPHY
        </div>

        {/* Monumental Kinematic Text Block */}
        <div className="w-full flex flex-col gap-4 py-8">
          {/* Line 1: Moves horizontally during scroll */}
          <div className="manifesto-line-1 whitespace-nowrap font-heading font-black text-[clamp(2.8rem,7.5vw,7.2rem)] tracking-tight text-[#151515] uppercase leading-none">
            TECHNOLOGY SHOULD <span className="solar-text-gradient font-serif-luxury capitalize italic font-bold">Disappear.</span>
          </div>

          {/* Thin Stretching Crimson Rule */}
          <div className="manifesto-rule w-full h-1 bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#D4AF37] my-4 rounded-full origin-left scale-x-0" />

          {/* Line 2: Fixed monumental statement */}
          <div className="manifesto-line-2 font-heading font-black text-[clamp(2.8rem,7.5vw,7.2rem)] tracking-tight text-[#151515] uppercase leading-none">
            THE EXPERIENCE <span className="text-[#A90F24]">SHOULD REMAIN.</span>
          </div>
        </div>

        {/* Quiet Editorial Quote */}
        <p className="manifesto-quote text-lg sm:text-2xl text-[#666462] max-w-2xl leading-relaxed font-normal">
          We strip away complexity until only the feeling of raw delight remains. Software should not feel like code; it should feel like magic in your hands.
        </p>
      </div>
    </section>
  );
});

ManifestoSequence.displayName = "ManifestoSequence";
