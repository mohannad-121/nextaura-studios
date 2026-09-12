import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhatWeCreate } from "@/components/sections/WhatWeCreate";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyStudio } from "@/components/sections/WhyStudio";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { PreFooterCTA } from "@/components/sections/PreFooterCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhatWeCreate />
      <FeaturedProjects />
      <WhyStudio />
      <Manifesto />
      <ProcessSection />
      <CapabilitiesGrid />
      <PreFooterCTA />
    </>
  );
}
