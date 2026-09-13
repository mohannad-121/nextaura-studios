"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const DOMAINS = [
  {
    id: "apps",
    title: "Mobile Apps",
    subtitle: "Tactile & Circadian",
    description:
      "Beautiful, high-refresh mobile applications engineered around human perception. We replace static layouts with living interfaces that respond to natural rhythms and organic touch gestures.",
    tags: ["iOS & Android", "Spatial Haptics", "Zero-Latency UI", "Offline Architecture"],
    accent: "#A90F24",
    link: "/projects?category=apps",
    visualType: "app",
  },
  {
    id: "games",
    title: "Kinetic Games",
    subtitle: "Worlds Worth Playing",
    description:
      "Original game concepts built on pure kinetic motion, tight game loops, and visual wonder. Games designed for touch and gamepads that treat player agency as the primary art form.",
    tags: ["Custom Vector Physics", "120Hz Animation", "Dynamic Soundscapes", "Deep Replayability"],
    accent: "#FF6A1A",
    link: "/projects?category=games",
    visualType: "game",
  },
  {
    id: "products",
    title: "Digital Products",
    subtitle: "Instruments for Creators",
    description:
      "Focused creative software and consumer utility platforms. Minimalist tools that eliminate cognitive drag, giving creators direct, tactile control over their digital output.",
    tags: ["macOS & Web", "Bespoke Render Pipelines", "Local-First Storage", "Hardware Bridge"],
    accent: "#C31531",
    link: "/projects?category=products",
    visualType: "product",
  },
  {
    id: "experiments",
    title: "Experimental Experiences",
    subtitle: "The NextAura Playground",
    description:
      "Our sandbox for ideas that defy ordinary categorization. Spatial audio raytracing, compute shader gravitation, generative light installations, and speculative interface prototypes.",
    tags: ["Compute Shaders", "WebGPU & WebAudio", "Gesture Tracking", "Spatial Canvas"],
    accent: "#FF7424",
    link: "/projects?category=experiments",
    visualType: "experiment",
  },
];

export function WhatWeCreate() {
  return (
    <section className="relative py-24 sm:py-36 bg-[#FAF9F6] border-b border-black/8 overflow-hidden">
      {/* Background Ambient Warmth */}
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[#FF6A1A]/8 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              What We Create
            </span>
          </div>

          <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight text-[#151515] leading-[1.08] uppercase">
            We build experiences that live in your hands, on your screen, and in your memory.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#666462] leading-relaxed">
            Every product we design is conceived as a distinct digital world. We fuse technical
            discipline with creative spark to invent software people genuinely enjoy spending time with.
          </p>
        </div>

        {/* 4 Interactive Category Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DOMAINS.map((domain, index) => {
            return (
              <div
                key={domain.id}
                className="group relative rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-orange-50/20 border border-black/10 hover:border-[#FF6A1A]/60 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_22px_50px_-12px_rgba(255,106,26,0.18),0_0_30px_rgba(169,15,36,0.12)] overflow-hidden"
              >
                {/* Top Dynamic Accent Line */}
                <div
                  className="h-1.5 w-full bg-gradient-to-r"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${domain.accent} 0%, #FF6A1A 60%, #FFB24A 100%)`,
                  }}
                  aria-hidden="true"
                />

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 relative z-10">
                  {/* Solar Radial Hover Light */}
                  <div
                    className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, ${domain.accent}35 0%, #FF6A1A15 50%, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Top Bar with Sequence Number & Arrow */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-mono text-xs font-bold tracking-wider px-2.5 py-0.5 rounded-md border shadow-xs"
                        style={{
                          backgroundColor: `${domain.accent}15`,
                          color: domain.accent,
                          borderColor: `${domain.accent}30`,
                        }}
                      >
                        0{index + 1}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#A90F24]">
                        {domain.subtitle}
                      </span>
                    </div>

                    <Link
                      href={domain.link}
                      className="w-9 h-9 rounded-full border border-black/10 bg-[#FAF9F6] flex items-center justify-center text-[#151515] group-hover:bg-[#A90F24] group-hover:text-white group-hover:border-[#A90F24] transition-all duration-300 shadow-xs"
                      aria-label={`Explore ${domain.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {/* Abstract Interactive Visual World */}
                  <div className="relative w-full h-44 sm:h-52 rounded-xl bg-gradient-to-br from-[#FFF5F0] via-[#FAF0F2] to-[#FFFBF0] border border-black/8 mb-8 flex items-center justify-center overflow-hidden shadow-inner">
                    {/* Visual: Mobile App */}
                    {domain.visualType === "app" && (
                      <div className="relative w-36 h-48 rounded-[20px] bg-white border-2 border-[#A90F24]/20 shadow-lg p-3 flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="w-10 h-1.5 rounded-full bg-[#A90F24]/30 mx-auto mb-2" />
                        <div className="space-y-2">
                          <div className="w-full h-8 rounded-lg bg-gradient-to-r from-[#A90F24]/15 to-[#FF6A1A]/15 border border-[#A90F24]/20 flex items-center px-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24] animate-ping" />
                          </div>
                          <div className="w-3/4 h-2 rounded-full bg-[#FF6A1A]/30" />
                          <div className="w-1/2 h-2 rounded-full bg-[#FFB24A]/40" />
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-black/5">
                          <div className="w-4 h-4 rounded-full bg-[#FF6A1A] shadow-xs" />
                          <div className="w-8 h-2 rounded-full bg-[#A90F24]/30" />
                        </div>
                      </div>
                    )}

                    {/* Visual: Game */}
                    {domain.visualType === "game" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-[#FF6A1A]/50 animate-orbit-slow" />
                        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-tr from-[#A90F24] via-[#D52632] to-[#FF6A1A] shadow-[0_0_25px_rgba(255,106,26,0.4)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                        <div className="absolute bottom-6 left-12 px-3 py-1 rounded-md bg-white border border-[#FF6A1A]/30 text-[10px] font-mono font-bold text-[#A90F24] shadow-sm">
                          120 FPS
                        </div>
                      </div>
                    )}

                    {/* Visual: Product */}
                    {domain.visualType === "product" && (
                      <div className="relative w-48 h-32 rounded-lg bg-white border border-[#C31531]/20 shadow-lg p-3 flex flex-col justify-between group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-black/5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#A90F24]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6A1A]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB24A]" />
                          <span className="text-[8px] font-mono text-[#A90F24] font-bold ml-auto">KROMA.APP</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 my-1">
                          <div className="h-10 rounded-sm bg-[#FFFBF0] border border-[#FF6A1A]/20" />
                          <div className="h-10 rounded-sm bg-gradient-to-b from-[#A90F24]/15 to-[#FF6A1A]/15 border border-[#A90F24]/30" />
                          <div className="h-10 rounded-sm bg-[#FFFBF0] border border-[#FF6A1A]/20" />
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-[#A90F24] to-[#FF6A1A]" />
                      </div>
                    )}

                    {/* Visual: Experiment */}
                    {domain.visualType === "experiment" && (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-[#FF7424]/30 via-[#A90F24]/20 to-transparent animate-pulse-subtle" />
                        <svg viewBox="0 0 160 160" className="w-32 h-32 animate-orbit-reverse">
                          <polygon
                            points="80,15 140,50 140,115 80,150 20,115 20,50"
                            fill="rgba(255, 116, 36, 0.08)"
                            stroke="#FF7424"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <circle cx="80" cy="80" r="16" fill="#A90F24" />
                          <circle cx="80" cy="80" r="6" fill="#FFB24A" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-2xl tracking-tight text-[#151515] group-hover:text-[#A90F24] transition-colors duration-300">
                      {domain.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#666462] leading-relaxed">
                      {domain.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-black/8">
                      {domain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-semibold tracking-wide px-2.5 py-1 rounded-md bg-white text-[#A90F24] border border-[#A90F24]/20 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
