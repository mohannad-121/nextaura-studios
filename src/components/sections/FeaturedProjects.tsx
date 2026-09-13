import React from "react";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { AuraButton } from "@/components/ui/AuraButton";

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="relative py-24 sm:py-36 bg-[#FFFDFC] border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6A1A]" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
                Portfolio / Selected Works
              </span>
            </div>

            <h2 className="font-heading font-black text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight text-[#151515] leading-[1.08] uppercase">
              Selected Worlds.
            </h2>

            <p className="mt-4 text-base text-[#666462] max-w-xl">
              An ongoing catalog of games, mobile applications, and experimental digital products
              engineered with tactile craftsmanship.
            </p>
          </div>

          <AuraButton href="/projects" variant="secondary" showArrow className="self-start md:self-auto">
            View All Projects ({PROJECTS.length})
          </AuraButton>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Bottom Banner Card */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-white via-[#FFFDFC] to-orange-50/30 border border-black/10 hover:border-[#FF6A1A]/50 transition-all duration-500 overflow-hidden shadow-xs hover:shadow-[0_16px_36px_-8px_rgba(255,106,26,0.15)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#FFB24A]" aria-hidden="true" />
          <div className="p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#A90F24] via-[#D52632] to-[#FF6A1A] text-white font-bold text-base flex items-center justify-center shrink-0 shadow-md">
                NA
              </div>
              <div>
                <p className="font-heading font-bold text-base text-[#151515]">
                  Have a proprietary concept in mind?
                </p>
                <p className="text-xs text-[#666462] mt-0.5">
                  We partner with select founders, brands, and creative teams to build new digital products.
                </p>
              </div>
            </div>

            <AuraButton href="/contact" variant="primary" size="sm" showArrow className="shrink-0">
              Pitch an Idea
            </AuraButton>
          </div>
        </div>
      </div>
    </section>
  );
}
