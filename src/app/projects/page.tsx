"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProjectCategory) || "all";
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Archive Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              Studio Works Archive
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] tracking-tight text-[#151515] leading-[1.05] uppercase">
            Selected Worlds & Systems.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#666462] leading-relaxed">
            Every entry represents our commitment to kinetic animation, intuitive interaction, and
            unapologetic visual identity across mobile, web, and spatial surfaces.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 select-none border-b border-black/8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === "all"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap flex items-center gap-2 border",
                  isSelected
                    ? "bg-[#151515] text-white border-[#151515] shadow-xs"
                    : "bg-white text-[#666462] border-black/8 hover:text-[#151515] hover:border-black/20"
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                    isSelected ? "bg-white/20 text-white" : "bg-black/5 text-[#666462]"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-black/8">
            <p className="font-heading font-bold text-lg text-[#151515]">No projects found</p>
            <p className="text-sm text-[#666462] mt-1">Try selecting another category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F6] pt-40 text-center font-mono text-xs text-[#969490]">Loading archive...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
