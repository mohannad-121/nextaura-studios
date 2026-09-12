"use client";

import React from "react";

const WORDS = [
  "MOBILE APPS",
  "KINETIC GAMES",
  "DIGITAL PRODUCTS",
  "EXPERIMENTAL WORLDS",
  "SOLAR AURA",
  "TACTILE INTERACTION",
  "CREATIVE TECHNOLOGY",
  "FUTURE INTERFACES",
];

export function Marquee() {
  return (
    <div
      className="relative w-full border-y border-black/8 bg-[#F4F4F2] py-4 sm:py-5 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
        {[...WORDS, ...WORDS].map((word, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-10 mx-3 sm:mx-5">
            <span className="font-heading font-black text-xs sm:text-sm tracking-[0.25em] text-[#151515] uppercase">
              {word}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A1A]" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
