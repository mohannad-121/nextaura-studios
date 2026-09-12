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

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#FAF9F6] border border-black/8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#A90F24]/10 flex items-center justify-center text-[#A90F24] font-bold text-sm shrink-0">
              NA
            </div>
            <div>
              <p className="font-heading font-bold text-base text-[#151515]">
                Have a proprietary concept in mind?
              </p>
              <p className="text-xs text-[#666462]">
                We partner with select founders, brands, and creative teams to build new digital products.
              </p>
            </div>
          </div>

          <AuraButton href="/contact" variant="primary" size="sm" showArrow className="shrink-0">
            Pitch an Idea
          </AuraButton>
        </div>
      </div>
    </section>
  );
}
