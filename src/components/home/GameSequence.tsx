"use client";

import React, { forwardRef } from "react";
import { Gamepad2, Sparkles, Target, Compass } from "lucide-react";

export const GameSequence = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section
      ref={ref}
      className="game-section relative min-h-screen w-full flex items-center justify-center px-6 sm:px-10 py-20 bg-[#151515] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Background Solar Flare Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-tr from-[#A90F24]/25 via-[#FF6A1A]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Game Controller Stage Anchor */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center relative min-h-[360px] sm:min-h-[480px]">
          <div className="absolute w-80 h-80 rounded-full bg-[#A90F24]/15 blur-3xl pointer-events-none" />
        </div>

        {/* Right Column: Editorial Typography */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A1A]/20 border border-[#FF6A1A]/40 text-[#FF6A1A] text-xs font-mono font-bold tracking-widest uppercase mb-6">
            CHAPTER 03 // KINETIC GAMES
          </div>

          <h2 className="game-heading font-heading font-black text-[clamp(2.4rem,5.5vw,4.8rem)] tracking-tight leading-[1.04] uppercase text-white">
            WE DON'T JUST <br />
            BUILD SCREENS. <br />
            WE BUILD <span className="solar-text-gradient font-serif-luxury capitalize italic font-bold">Interaction.</span>
          </h2>

          <div className="game-subheading mt-4 text-2xl sm:text-3xl font-heading font-bold text-[#FF6A1A] tracking-tight uppercase">
            GAMES THAT FEEL ALIVE.
          </div>

          <p className="game-copy mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-lg">
            Original game concepts powered by custom kinetic physics, tight feedback loops, and tactile
            gamepad response. Crafted with luxury experimental game engineering.
          </p>

          {/* Game Spec Cards */}
          <div className="game-specs mt-8 grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
              <Gamepad2 className="w-5 h-5 text-[#FF6A1A]" />
              <div>
                <span className="block text-xs font-bold text-white">Tactile Loop</span>
                <span className="text-[10px] font-mono text-white/60">Sub-millisecond</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
              <Target className="w-5 h-5 text-[#D4AF37]" />
              <div>
                <span className="block text-xs font-bold text-white">Vector Physics</span>
                <span className="text-[10px] font-mono text-white/60">60-120 FPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

GameSequence.displayName = "GameSequence";
