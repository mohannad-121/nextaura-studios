import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { SolarBadge } from "@/components/ui/SolarBadge";
import { AuraButton } from "@/components/ui/AuraButton";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  return (
    <article className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute top-20 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.theme.accent} 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#666462] hover:text-[#A90F24] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Selected Works
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF6A1A]">
              {project.categoryLabel}
            </span>
            <span className="text-[#969490]">·</span>
            <SolarBadge status={project.status} />
          </div>

          <h1 className="font-heading font-black text-[clamp(2.5rem,6.5vw,5.5rem)] tracking-tight text-[#151515] leading-[1.04] uppercase">
            {project.title}
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-[#666462] leading-snug font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-black/8 mb-16 shadow-xs">
          <div>
            <span className="block text-[11px] font-mono tracking-widest uppercase text-[#969490]">
              Category
            </span>
            <span className="font-heading font-bold text-sm sm:text-base text-[#151515] mt-1 block">
              {project.categoryLabel}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-mono tracking-widest uppercase text-[#969490]">
              Year
            </span>
            <span className="font-heading font-bold text-sm sm:text-base text-[#151515] mt-1 block">
              {project.year}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-mono tracking-widest uppercase text-[#969490]">
              Platforms
            </span>
            <span className="font-heading font-bold text-sm sm:text-base text-[#151515] mt-1 block">
              {project.platforms.join(", ")}
            </span>
          </div>
          <div>
            <span className="block text-[11px] font-mono tracking-widest uppercase text-[#969490]">
              Status
            </span>
            <span className="font-heading font-bold text-sm sm:text-base text-[#A90F24] mt-1 block">
              {project.status}
            </span>
          </div>
        </div>

        {/* Hero Visual Canvas */}
        <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-3xl bg-gradient-to-br from-[#F4F4F2] via-[#FFFDFC] to-[#ECECEA] border border-black/8 overflow-hidden mb-20 flex items-center justify-center p-8 shadow-sm">
          {/* Solar Ambient Dispersion */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.theme.accent} 0%, transparent 65%)`,
            }}
          />

          {/* Abstract Generative Graphic Centerpiece */}
          <div className="relative z-10 text-center max-w-md">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl mx-auto bg-gradient-to-tr from-[#A90F24] via-[#D52632] to-[#FF6A1A] shadow-[0_0_40px_rgba(255,106,26,0.3)] flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
            <p className="font-mono text-xs tracking-widest uppercase text-[#666462]">
              NEXTAURA STUDIOS · ARCHITECTURE VISUALIZATION
            </p>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#151515] mt-2">
              {project.title} Specimen
            </h3>
          </div>
        </div>

        {/* Narrative Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-black/8">
          {/* Left Summary & Specs */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-white border border-black/8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#969490] mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF6A1A]" />
                Technology Stack
              </h4>
              <ul className="space-y-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm font-medium text-[#151515]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A90F24]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.metrics && (
              <div className="p-6 rounded-2xl bg-[#F4F4F2] border border-black/8">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#969490] mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#A90F24]" />
                  Engine Metrics
                </h4>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex justify-between items-center text-xs">
                      <span className="text-[#666462]">{m.label}</span>
                      <span className="font-mono font-bold text-[#151515]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Editorial Storytelling */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF6A1A] font-bold mb-3">
                01 / The Overview
              </h2>
              <p className="text-base sm:text-lg text-[#151515] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A90F24] font-bold mb-3">
                02 / The Design Challenge
              </h2>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7424] font-bold mb-3">
                03 / The Sensation & Experience
              </h2>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {project.experience}
              </p>
            </div>
          </div>
        </div>

        {/* Next Project Teaser Navigation */}
        <div className="mt-20 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#969490]">
              Next Project in Archive
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151515] mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs text-[#666462] font-mono mt-0.5">{nextProject.categoryLabel}</p>
          </div>

          <AuraButton href={`/projects/${nextProject.slug}`} variant="primary" showArrow>
            Explore {nextProject.title}
          </AuraButton>
        </div>
      </div>
    </article>
  );
}
