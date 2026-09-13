"use client";

import React, { forwardRef } from "react";
import { Smartphone, Zap, Eye, Sliders } from "lucide-react";

export const InterfaceSequence = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="interface-section relative min-h-screen w-full flex items-center justify-center px-6 sm:px-10 py-20 bg-[#FAF9F6] border-t border-black/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Editorial Typography */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A90F24]/10 border border-[#A90F24]/20 text-[#A90F24] text-xs font-mono font-bold tracking-widest uppercase mb-6">
            CHAPTER 02 // MOBILE APPS
          </div>

          <h2 className="interface-heading font-heading font-black text-[clamp(2.4rem,5.5vw,5rem)] tracking-tight text-[#151515] leading-[1.02] uppercase">
            NOT JUST APPS. <br />
            <span className="solar-text-gradient font-serif-luxury capitalize italic font-bold">
              Experiences
            </span>{" "}
            <br />
            WITH IDENTITY.
          </h2>

          <p className="interface-copy mt-6 text-base sm:text-lg text-[#666462] leading-relaxed max-w-lg">
            We transform static layouts into tactile applications that feel like natural extensions
            of your hands. Every touch, swipe, and transition is calibrated for zero latency and
            spatial delight.
          </p>

          {/* Feature Micro-Badges */}
          <div className="interface-badges mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/8 shadow-xs">
              <div className="p-2 rounded-lg bg-[#FF6A1A]/10 text-[#FF6A1A]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#151515]">Zero Latency</span>
                <span className="text-[10px] font-mono text-[#969490]">120Hz Haptics</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-black/8 shadow-xs">
              <div className="p-2 rounded-lg bg-[#A90F24]/10 text-[#A90F24]">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold text-[#151515]">Circadian UI</span>
                <span className="text-[10px] font-mono text-[#969490]">Organic Light</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Stage Anchor (Master Visual Object gets pinned/placed here during scrub) */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] sm:min-h-[480px]">
          {/* Subtle Ambient Framing Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#FF6A1A]/10 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
});

InterfaceSequence.displayName = "InterfaceSequence";
