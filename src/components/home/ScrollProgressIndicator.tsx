"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressIndicatorProps {
  activeChapter: number;
  totalChapters?: number;
  chapterLabels?: string[];
}

export function ScrollProgressIndicator({
  activeChapter,
  totalChapters = 5,
  chapterLabels = ["AURA", "INTERFACE", "KINETIC", "PLAYGROUND", "PHILOSOPHY"],
}: ScrollProgressIndicatorProps) {
  return (
    <div
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="flex flex-col items-end gap-3 bg-white/70 backdrop-blur-md p-3.5 rounded-full border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        {Array.from({ length: totalChapters }).map((_, idx) => {
          const isActive = activeChapter === idx + 1;
          return (
            <div key={idx} className="group relative flex items-center gap-3">
              {/* Chapter Label Tooltip */}
              <span
                className={cn(
                  "text-[10px] font-mono tracking-widest uppercase transition-all duration-300 px-2 py-0.5 rounded bg-[#151515] text-white whitespace-nowrap opacity-0 group-hover:opacity-100",
                  isActive && "opacity-100 bg-[#A90F24]"
                )}
              >
                0{idx + 1} // {chapterLabels[idx] || ""}
              </span>

              {/* Progress Dot / Ring */}
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 border",
                  isActive
                    ? "bg-[#FF6A1A] border-[#A90F24] scale-125 shadow-[0_0_10px_rgba(255,106,26,0.8)]"
                    : "bg-black/15 border-transparent"
                )}
              />
            </div>
          );
        })}
      </div>

      <div className="text-[9px] font-mono tracking-widest text-[#969490] uppercase rotate-90 origin-right translate-y-8 pr-2">
        SCROLL EXPERIENCE
      </div>
    </div>
  );
}
