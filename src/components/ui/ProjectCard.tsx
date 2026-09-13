"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { SolarBadge } from "./SolarBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-[#FAF8F5] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.2),0_0_30px_rgba(169,15,36,0.15)] flex flex-col justify-between",
        className
      )}
    >
      {/* Top Dynamic Metallic Gold & Crimson Accent Line */}
      <div
        className="h-1.5 w-full bg-gradient-to-r transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(90deg, #D4AF37 0%, #A90F24 40%, #FF6A1A 75%, #FFB24A 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Solar Pointer Radial Light Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 106, 26, 0.16), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Visual Canvas / Interactive Header */}
      <div className="relative w-full aspect-16/10 bg-gradient-to-br from-[#FFF5F0] via-[#FAF0F2] to-[#FFFBF0] overflow-hidden border-b border-black/8 p-6 flex flex-col justify-between">
        {/* Ambient Color Glow */}
        <div
          className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${project.theme.accent}35 0%, #FF6A1A18 45%, transparent 70%)`,
          }}
        />

        {/* Abstract Architectural SVG Pattern for Project Category */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90 transition-transform duration-700 group-hover:scale-105">
          {project.category === "games" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <polygon
                points="100,20 160,100 40,100"
                fill="rgba(255, 106, 26, 0.08)"
                stroke={project.theme.accent}
                strokeWidth="2"
                strokeDasharray="4 4"
                className="group-hover:rotate-6 transition-transform duration-700 origin-center"
              />
              <circle cx="100" cy="65" r="28" fill="rgba(169, 15, 36, 0.1)" stroke="#A90F24" strokeWidth="2.5" />
              <circle cx="100" cy="65" r="10" fill={project.theme.accent} />
              <line x1="20" y1="65" x2="180" y2="65" stroke="rgba(255, 106, 26, 0.25)" strokeWidth="1.5" />
            </svg>
          )}

          {project.category === "apps" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <rect
                x="60"
                y="15"
                width="80"
                height="90"
                rx="14"
                fill="rgba(169, 15, 36, 0.05)"
                stroke={project.theme.accent}
                strokeWidth="2"
              />
              <circle cx="100" cy="30" r="3.5" fill="#A90F24" opacity="0.8" />
              <rect x="72" y="45" width="56" height="7" rx="3.5" fill="#A90F24" opacity="0.85" />
              <rect x="72" y="58" width="40" height="5" rx="2.5" fill="#FF6A1A" opacity="0.7" />
              <rect x="72" y="69" width="48" height="5" rx="2.5" fill="#FFB24A" opacity="0.8" />
            </svg>
          )}

          {project.category === "experiments" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <circle cx="100" cy="60" r="45" fill="rgba(255, 106, 26, 0.06)" stroke="#FF6A1A" strokeWidth="1.5" strokeDasharray="6 3" />
              <circle cx="100" cy="60" r="28" fill="rgba(169, 15, 36, 0.12)" stroke="#A90F24" strokeWidth="2" />
              <line x1="40" y1="60" x2="160" y2="60" stroke="#FFB24A" strokeWidth="1.5" />
              <line x1="100" y1="15" x2="100" y2="105" stroke="#FFB24A" strokeWidth="1.5" />
              <circle cx="130" cy="40" r="5" fill="#FF7424" />
              <circle cx="70" cy="80" r="4" fill="#A90F24" />
            </svg>
          )}

          {project.category === "products" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <rect x="40" y="25" width="120" height="70" rx="8" fill="rgba(195, 21, 49, 0.04)" stroke="#C31531" strokeWidth="1.5" strokeOpacity="0.4" />
              <line x1="40" y1="42" x2="160" y2="42" stroke="#C31531" strokeWidth="1" strokeOpacity="0.25" />
              <circle cx="52" cy="34" r="3" fill="#A90F24" />
              <circle cx="62" cy="34" r="3" fill="#FF6A1A" />
              <circle cx="72" cy="34" r="3" fill="#FFB24A" />
              <rect x="52" y="55" width="45" height="28" rx="4" fill={project.theme.accent} opacity="0.35" />
              <rect x="105" y="55" width="43" height="12" rx="3" fill="#A90F24" opacity="0.2" />
              <rect x="105" y="72" width="30" height="8" rx="2" fill="#FF6A1A" opacity="0.25" />
            </svg>
          )}
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <SolarBadge status={project.status} />
          <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-white/80 border border-black/8 text-[#151515] tracking-wider shadow-xs">
            {project.year}
          </span>
        </div>

        {/* Bottom Platform Chips */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
          {project.platforms.map((p) => (
            <span
              key={p}
              className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-white/90 text-[#A90F24] border border-[#A90F24]/20 shadow-xs"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Card Content Information */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md bg-[#FF6A1A]/10 text-[#FF6A1A] border border-[#FF6A1A]/20">
              {project.categoryLabel}
            </span>
            <div className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-black/8 flex items-center justify-center text-[#666462] group-hover:bg-[#A90F24] group-hover:text-white group-hover:border-[#A90F24] transition-all duration-300 shadow-xs">
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <h3 className="font-heading text-xl font-bold tracking-tight text-[#151515] group-hover:text-[#A90F24] transition-colors duration-300 mt-2">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[#666462] line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Bottom Link Trigger */}
        <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between">
          <span className="text-xs font-bold tracking-wide text-[#151515] group-hover:text-[#A90F24] transition-colors duration-300 flex items-center gap-1">
            Explore Project
          </span>
          <span className="text-xs font-mono font-semibold text-[#FF6A1A] group-hover:translate-x-1 transition-transform duration-300">
            View Specs →
          </span>
        </div>
      </div>

      {/* Full Card Accessible Link */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`View project details for ${project.title}`}
      />
    </div>
  );
}

