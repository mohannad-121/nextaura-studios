"use client";

import React, { forwardRef } from "react";
import { Sparkles, Code2, Palette, Cpu, Layers, Flame } from "lucide-react";

export const PlaygroundSequence = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="playground-section relative min-h-[160vh] w-full flex flex-col items-center justify-center px-6 sm:px-10 py-24 bg-[#FAF9F6] border-t border-black/8 overflow-hidden"
    >
      {/* Chapter Header */}
      <div className="max-w-4xl mx-auto text-center z-10 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#151515] text-xs font-mono font-bold tracking-widest uppercase mb-4">
          CHAPTER 04 // THE DIGITAL PLAYGROUND
        </div>

        <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,4.5rem)] tracking-tight text-[#151515] uppercase leading-[1.05]">
          FROM IDEA <span className="text-[#FF6A1A]">→</span> INTERACTION{" "}
          <span className="text-[#A90F24]">→</span> EXPERIENCE
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#666462] max-w-xl mx-auto">
          Watch our visual engineering system construct itself as you scroll through the studio pipeline.
        </p>
      </div>

      {/* SVG Scroll-Linked Continuous Energy Path */}
      <div className="relative w-full max-w-5xl h-[380px] sm:h-[480px] mx-auto z-10 my-8">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 450"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Faint Background Guide Path */}
          <path
            d="M 50 225 C 200 80, 350 370, 500 225 C 650 80, 800 370, 950 225"
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="3"
            strokeDasharray="6 6"
          />

          {/* Animated Glowing Foreground Path (strokeDashoffset scrubbed by GSAP) */}
          <path
            className="scroll-svg-path"
            d="M 50 225 C 200 80, 350 370, 500 225 C 650 80, 800 370, 950 225"
            stroke="url(#path-glow-grad)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Scroll-following Traveler Orb Node */}
          <circle className="path-traveler-orb" cx="50" cy="225" r="10" fill="#FF6A1A">
            <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
          </circle>

          <defs>
            <linearGradient id="path-glow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A90F24" />
              <stop offset="50%" stopColor="#FF6A1A" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>

        {/* 5 Milestone Checkpoint Cards along the curve */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-8 pointer-events-none">
          {/* Milestone 1: IDEA */}
          <div className="checkpoint-node checkpoint-1 flex flex-col items-center gap-2 translate-y-[-60px]">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#A90F24]/30 shadow-md flex items-center justify-center text-[#A90F24]">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#151515] uppercase bg-white/90 px-2.5 py-1 rounded-full border border-black/8">
              01. IDEA
            </span>
          </div>

          {/* Milestone 2: DESIGN */}
          <div className="checkpoint-node checkpoint-2 flex flex-col items-center gap-2 translate-y-[80px]">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#FF6A1A]/30 shadow-md flex items-center justify-center text-[#FF6A1A]">
              <Palette className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#151515] uppercase bg-white/90 px-2.5 py-1 rounded-full border border-black/8">
              02. DESIGN
            </span>
          </div>

          {/* Milestone 3: CODE */}
          <div className="checkpoint-node checkpoint-3 flex flex-col items-center gap-2 translate-y-[-60px]">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-md flex items-center justify-center text-[#151515]">
              <Code2 className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#151515] uppercase bg-white/90 px-2.5 py-1 rounded-full border border-black/8">
              03. CODE
            </span>
          </div>

          {/* Milestone 4: INTERACTION */}
          <div className="checkpoint-node checkpoint-4 flex flex-col items-center gap-2 translate-y-[80px]">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#FF6A1A]/30 shadow-md flex items-center justify-center text-[#FF6A1A]">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#151515] uppercase bg-white/90 px-2.5 py-1 rounded-full border border-black/8">
              04. INTERACTION
            </span>
          </div>

          {/* Milestone 5: EXPERIENCE */}
          <div className="checkpoint-node checkpoint-5 flex flex-col items-center gap-2 translate-y-[-60px]">
            <div className="w-12 h-12 rounded-2xl bg-[#151515] border border-[#A90F24] shadow-lg flex items-center justify-center text-white">
              <Flame className="w-6 h-6 text-[#FF6A1A]" />
            </div>
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase bg-[#A90F24] px-2.5 py-1 rounded-full shadow-xs">
              05. EXPERIENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
});

PlaygroundSequence.displayName = "PlaygroundSequence";
