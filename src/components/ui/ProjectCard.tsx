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
        "group relative rounded-2xl bg-white border border-black/8 hover:border-[#FF6A1A]/35 overflow-hidden transition-all duration-500 hover:shadow-[0_16px_40px_rgba(21,21,21,0.06),0_0_24px_rgba(255,106,26,0.1)] flex flex-col justify-between",
        className
      )}
    >
      {/* Solar Pointer Radial Light Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 106, 26, 0.12), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Visual Canvas / Interactive Header */}
      <div className="relative w-full aspect-16/10 bg-gradient-to-br from-[#F4F4F2] via-[#ECECEA] to-[#FAF9F6] overflow-hidden border-b border-black/5 p-6 flex flex-col justify-between">
        {/* Subtle Ambient Color Glow */}
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${project.theme.accent}25, transparent 65%)`,
          }}
        />

        {/* Abstract Architectural SVG Pattern for Project Category */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-85 transition-transform duration-700 group-hover:scale-105">
          {project.category === "games" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <polygon
                points="100,20 160,100 40,100"
                fill="none"
                stroke={project.theme.accent}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="group-hover:rotate-6 transition-transform duration-700 origin-center"
              />
              <circle cx="100" cy="65" r="28" fill="none" stroke="#A90F24" strokeWidth="2" />
              <circle cx="100" cy="65" r="8" fill={project.theme.accent} />
              <line x1="20" y1="65" x2="180" y2="65" stroke="rgba(21,21,21,0.08)" strokeWidth="1" />
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
                fill="none"
                stroke={project.theme.accent}
                strokeWidth="1.5"
              />
              <circle cx="100" cy="30" r="3" fill="#151515" opacity="0.4" />
              <rect x="72" y="45" width="56" height="6" rx="3" fill="#A90F24" opacity="0.7" />
              <rect x="72" y="58" width="40" height="4" rx="2" fill="rgba(21,21,21,0.15)" />
              <rect x="72" y="68" width="48" height="4" rx="2" fill="rgba(21,21,21,0.15)" />
            </svg>
          )}

          {project.category === "experiments" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <circle cx="100" cy="60" r="45" fill="none" stroke="#FF6A1A" strokeWidth="1" strokeDasharray="6 3" />
              <circle cx="100" cy="60" r="28" fill="none" stroke="#A90F24" strokeWidth="1.5" />
              <line x1="40" y1="60" x2="160" y2="60" stroke="#FFB24A" strokeWidth="1" />
              <line x1="100" y1="15" x2="100" y2="105" stroke="#FFB24A" strokeWidth="1" />
              <circle cx="130" cy="40" r="4" fill="#FF7424" />
              <circle cx="70" cy="80" r="3" fill="#A90F24" />
            </svg>
          )}

          {project.category === "products" && (
            <svg viewBox="0 0 200 120" className="w-4/5 h-4/5">
              <rect x="40" y="25" width="120" height="70" rx="8" fill="none" stroke="#151515" strokeWidth="1.2" strokeOpacity="0.2" />
              <line x1="40" y1="42" x2="160" y2="42" stroke="#151515" strokeWidth="1" strokeOpacity="0.1" />
              <circle cx="52" cy="34" r="2.5" fill="#A90F24" />
              <circle cx="62" cy="34" r="2.5" fill="#FF6A1A" />
              <circle cx="72" cy="34" r="2.5" fill="#FFB24A" />
              <rect x="52" y="55" width="45" height="28" rx="4" fill={project.theme.accent} opacity="0.18" />
              <rect x="105" y="55" width="43" height="12" rx="3" fill="#151515" opacity="0.1" />
              <rect x="105" y="72" width="30" height="8" rx="2" fill="#151515" opacity="0.08" />
            </svg>
          )}
        </div>

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between w-full">
          <SolarBadge status={project.status} />
          <span className="text-xs font-mono text-[#666462] tracking-wider">{project.year}</span>
        </div>

        {/* Bottom Platform Chips */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mt-auto">
          {project.platforms.map((p) => (
            <span
              key={p}
              className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-sm bg-black/5 text-[#151515]/70"
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
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#FF6A1A]">
              {project.categoryLabel}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#666462] group-hover:text-[#A90F24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>

          <h3 className="font-heading text-xl font-bold tracking-tight text-[#151515] group-hover:text-[#A90F24] transition-colors duration-300">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-[#666462] line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Bottom Link Trigger */}
        <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-wide text-[#151515] group-hover:text-[#A90F24] transition-colors duration-300">
            Explore Project
          </span>
          <span className="text-xs font-mono text-[#969490]">View Specs →</span>
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
