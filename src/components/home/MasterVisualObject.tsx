"use client";

import React, { forwardRef } from "react";
import Image from "next/image";

export const MasterVisualObject = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] lg:w-[560px] lg:h-[560px] flex items-center justify-center pointer-events-none select-none transition-transform"
      aria-hidden="true"
    >
      {/* Dynamic Background Solar Glow */}
      <div className="aura-glow absolute inset-0 rounded-full bg-gradient-to-tr from-[#A90F24]/30 via-[#FF6A1A]/35 to-[#FFB24A]/20 blur-3xl opacity-80" />

      {/* Layer 1: Radial Technical Radar Rings & Grid */}
      <svg
        className="aura-rings absolute inset-0 w-full h-full text-black/10"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle
          cx="250"
          cy="250"
          r="230"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <circle
          cx="250"
          cy="250"
          r="180"
          stroke="url(#ring-grad)"
          strokeWidth="1.5"
        />
        <circle
          cx="250"
          cy="250"
          r="130"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeDasharray="2 4"
        />

        {/* Orbital Target Crosshairs */}
        <line x1="250" y1="10" x2="250" y2="490" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
        <line x1="10" y1="250" x2="490" y2="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />

        {/* Orbiting Micro-Elements */}
        <circle cx="250" cy="20" r="4" fill="#FF6A1A" />
        <circle cx="430" cy="250" r="3" fill="#A90F24" />
        <circle cx="250" cy="430" r="4" fill="#D4AF37" />

        <defs>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A90F24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF6A1A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Layer 2: Evolving Chassis / Phone Outline / Game Controller Container */}
      <div className="object-chassis relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full border-2 border-[#FF6A1A]/40 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(255,106,26,0.25)] flex items-center justify-center overflow-hidden transition-all duration-300">
        
        {/* Phone Notch & Status Bar (Revealed during Phone transformation) */}
        <div className="phone-ui-header absolute top-3 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/90 rounded-full flex items-center justify-between px-3 opacity-0 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A1A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </div>

        {/* Inner Screen Content - App Interface Layer */}
        <div className="phone-ui-content absolute inset-4 top-10 bottom-10 rounded-2xl bg-gradient-to-b from-[#151515] to-[#252321] p-4 flex flex-col justify-between opacity-0 transition-opacity">
          <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>NEXTAURA OS</span>
            <span className="text-[#FF6A1A] font-bold">120Hz HAPTIC</span>
          </div>

          <div className="space-y-2.5 my-auto">
            <div className="h-8 rounded-lg bg-white/10 border border-white/15 flex items-center px-3 justify-between">
              <span className="text-[11px] font-bold text-white">Circadian Interface</span>
              <div className="w-6 h-3.5 rounded-full bg-[#FF6A1A] flex items-center justify-end px-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>

            <div className="h-14 rounded-lg bg-gradient-to-r from-[#A90F24]/40 to-[#FF6A1A]/40 border border-[#FF6A1A]/30 p-2.5 flex flex-col justify-between">
              <div className="flex justify-between text-[9px] font-mono text-white/80">
                <span>GESTURE LATENCY</span>
                <span className="text-[#D4AF37]">0.2ms</span>
              </div>
              <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#FF6A1A] to-[#D4AF37] h-full w-[88%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around border-t border-white/10 pt-2 text-[10px] text-white/60">
            <span className="text-white font-bold">APPS</span>
            <span>PLAY</span>
            <span>TACTILE</span>
          </div>
        </div>

        {/* Game Controller D-Pad & Kinetic Controls (Revealed during Game transformation) */}
        <div className="game-ui-controls absolute inset-0 flex items-center justify-between px-6 opacity-0 transition-opacity">
          {/* D-Pad */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute w-5 h-16 bg-[#151515] rounded-sm" />
            <div className="absolute w-16 h-5 bg-[#151515] rounded-sm" />
            <div className="absolute w-3 h-3 bg-[#A90F24] rounded-full z-10" />
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <div className="w-7 h-7 rounded-full bg-[#FF6A1A] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">A</div>
            <div className="w-7 h-7 rounded-full bg-[#A90F24] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">B</div>
            <div className="w-7 h-7 rounded-full bg-[#D4AF37] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">X</div>
            <div className="w-7 h-7 rounded-full bg-[#151515] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">Y</div>
          </div>
        </div>

        {/* Core Aura Glowing Sphere & Logo Lockup */}
        <div className="aura-center-core relative w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#FF6A1A] via-[#A90F24] to-[#151515] p-1 shadow-[0_0_40px_rgba(255,106,26,0.6)] flex items-center justify-center transition-transform duration-300">
          <div className="w-full h-full rounded-full bg-[#FAF9F6]/90 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center">
            <Image
              src="/brand/logo.png"
              alt="NextAura Emblem"
              width={56}
              height={56}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-[0_4px_12px_rgba(255,106,26,0.5)]"
            />
            <span className="mt-1 font-heading font-black text-xs sm:text-sm text-[#151515] tracking-tight">
              NEXT<span className="solar-text-gradient">AURA</span>
            </span>
          </div>
        </div>
      </div>

      {/* Outer Floating Geometric Accent Nodes */}
      <div className="floating-nodes absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/4 px-2.5 py-1 rounded-full bg-white/90 border border-black/10 text-[9px] font-mono text-[#151515] shadow-xs">
          CONCEPT → INTERFACE
        </div>
        <div className="absolute bottom-6 right-1/4 px-2.5 py-1 rounded-full bg-white/90 border border-[#A90F24]/30 text-[9px] font-mono text-[#A90F24] shadow-xs font-bold">
          120 FPS KINETIC
        </div>
      </div>
    </div>
  );
});

MasterVisualObject.displayName = "MasterVisualObject";
