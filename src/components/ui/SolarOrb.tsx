"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SolarOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only bind mouse listeners if window matches desktop pointer
    const checkPointer = () => {
      setIsDesktop(window.matchMedia("(pointer: fine) and (min-width: 1024px)").matches);
    };

    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalized displacement between -20px and +20px
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * 18;
    const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * 18;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] mx-auto flex items-center justify-center select-none"
    >
      {/* Dynamic Ambient Solar & Gold Backlight */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#A90F24]/20 to-[#FF6A1A]/20 blur-3xl pointer-events-none transform scale-90" />

      {/* Main Floating Parallax Canvas */}
      <motion.div
        style={{
          x: isDesktop ? smoothX : 0,
          y: isDesktop ? smoothY : 0,
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Outer Gold Orbit Track 1 */}
        <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-[#D4AF37]/35 animate-orbit-slow pointer-events-none">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
          <div className="absolute -bottom-1.5 left-1/3 w-2.5 h-2.5 rounded-full bg-[#A90F24] shadow-[0_0_10px_#A90F24]" />
        </div>

        {/* Counter Orbit Track 2 */}
        <div className="absolute inset-12 sm:inset-16 rounded-full border border-[#A90F24]/25 animate-orbit-reverse pointer-events-none">
          <div className="absolute top-1/4 -right-1 w-3 h-3 rounded-full bg-[#FFB24A] shadow-[0_0_12px_#FFB24A]" />
        </div>

        {/* Precision Solar & Gold Compass Ring */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full animate-orbit-slow pointer-events-none opacity-50"
          aria-hidden="true"
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="url(#solarGoldRingGradient)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle
            cx="200"
            cy="200"
            r="130"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.8"
            strokeOpacity="0.25"
          />
          <defs>
            <linearGradient id="solarGoldRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="45%" stopColor="#A90F24" />
              <stop offset="80%" stopColor="#FF6A1A" />
              <stop offset="100%" stopColor="#FFB24A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Luminous Gold-Crimson-Orange Core */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center animate-pulse-subtle">
          {/* Concentric Glow Layers */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#D52632] to-[#A90F24] opacity-90 shadow-[0_0_70px_rgba(212,175,55,0.35),0_0_120px_rgba(169,15,36,0.3)]" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#A90F24] via-[#D52632] to-[#FF7424] opacity-95" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-[#FFFDFC]/25 to-transparent backdrop-blur-xs" />

          {/* Core Brand Mark Emitting Light */}
          <div className="relative z-10 text-center text-white px-4">
            <span className="block text-[10px] tracking-[0.25em] uppercase font-semibold text-white/90 mb-0.5 font-serif-luxury italic">
              Energy Inside Control
            </span>
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white drop-shadow-md">
              NEXTAURA
            </span>
            <div className="mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[9px] tracking-widest text-[#F3E5AB] font-mono font-bold">
                SOLAR AURA
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
