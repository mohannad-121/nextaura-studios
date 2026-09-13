"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MasterVisualObject } from "./MasterVisualObject";
import { HeroSequence } from "./HeroSequence";
import { InterfaceSequence } from "./InterfaceSequence";
import { GameSequence } from "./GameSequence";
import { PlaygroundSequence } from "./PlaygroundSequence";
import { ManifestoSequence } from "./ManifestoSequence";
import { FinalSequence } from "./FinalSequence";
import { ScrollProgressIndicator } from "./ScrollProgressIndicator";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HomeJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const masterVisualRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const interfaceRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<HTMLDivElement>(null);
  const playgroundRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  const [activeChapter, setActiveChapter] = useState(1);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const visual = masterVisualRef.current;
      if (!visual) return;

      const chassis = visual.querySelector(".object-chassis");
      const phoneHeader = visual.querySelector(".phone-ui-header");
      const phoneContent = visual.querySelector(".phone-ui-content");
      const gameControls = visual.querySelector(".game-ui-controls");
      const centerCore = visual.querySelector(".aura-center-core");
      const rings = visual.querySelector(".aura-rings");

      const svgPath = playgroundRef.current?.querySelector(".scroll-svg-path") as SVGPathElement | null;
      const travelerOrb = playgroundRef.current?.querySelector(".path-traveler-orb");

      // Setup initial SVG Path Dash Length if present
      let pathLength = 1000;
      if (svgPath) {
        pathLength = svgPath.getTotalLength();
        gsap.set(svgPath, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
      }

      // Master ScrollTrigger Timeline scrubbing through 5 main scenes
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress < 0.2) setActiveChapter(1);
            else if (progress < 0.4) setActiveChapter(2);
            else if (progress < 0.6) setActiveChapter(3);
            else if (progress < 0.8) setActiveChapter(4);
            else setActiveChapter(5);
          },
        },
      });

      // CHAPTER 1 → CHAPTER 2 TRANSFORMATION (Aura Core -> Phone Frame)
      masterTl
        .to(heroRef.current, { opacity: 0, y: -60, duration: 1 })
        .to(
          chassis,
          {
            borderRadius: "48px",
            width: "240px",
            height: "440px",
            borderColor: "#FF6A1A",
            boxShadow: "0 25px 70px -10px rgba(255,106,26,0.35)",
            duration: 1.5,
            ease: "power2.inOut",
          },
          "-=1"
        )
        .to(phoneHeader, { opacity: 1, duration: 0.5 }, "-=0.5")
        .to(phoneContent, { opacity: 1, duration: 0.8 }, "-=0.5")
        .to(centerCore, { scale: 0.5, opacity: 0.3, duration: 0.8 }, "-=0.8")

        // CHAPTER 2 → CHAPTER 3 TRANSFORMATION (Phone Frame -> Game Controller)
        .to(interfaceRef.current, { opacity: 0.3, duration: 1 })
        .to(
          chassis,
          {
            rotateZ: 90,
            scale: 1.1,
            borderColor: "#A90F24",
            boxShadow: "0 25px 70px -10px rgba(169,15,36,0.45)",
            duration: 1.5,
            ease: "power2.inOut",
          },
          "+=0.2"
        )
        .to(phoneHeader, { opacity: 0, duration: 0.3 }, "-=1")
        .to(phoneContent, { opacity: 0, duration: 0.3 }, "-=1")
        .to(gameControls, { opacity: 1, duration: 0.8 }, "-=0.5")
        .to(centerCore, { opacity: 1, scale: 0.8 }, "-=0.5")

        // CHAPTER 3 → CHAPTER 4 TRANSFORMATION (Game -> Digital Playground & SVG Path)
        .to(gameRef.current, { opacity: 0.4, duration: 1 })
        .to(
          chassis,
          {
            rotateZ: 0,
            borderRadius: "9999px",
            width: "140px",
            height: "140px",
            borderColor: "#D4AF37",
            duration: 1.2,
          },
          "+=0.2"
        )
        .to(gameControls, { opacity: 0, duration: 0.4 }, "-=1");

      // Animate SVG Path & Checkpoint Nodes in Chapter 4
      if (svgPath) {
        masterTl.to(
          svgPath,
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "none",
          },
          "-=0.5"
        );
      }

      // CHAPTER 4 → CHAPTER 5 TRANSFORMATION (Manifesto Kinetic Typography)
      masterTl
        .to(playgroundRef.current, { opacity: 0.4, duration: 1 })
        .to(visual, { opacity: 0.15, scale: 0.8, duration: 1 }, "-=0.5")
        .to(".manifesto-line-1", { x: "-10%", duration: 1.5 }, "-=0.5")
        .to(".manifesto-rule", { scaleX: 1, duration: 1 }, "-=1")

        // CHAPTER 5 → CHAPTER 6 REVEAL (Final Lockup & CTA)
        .to(manifestoRef.current, { opacity: 0.3, duration: 1 })
        .to(visual, { opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".final-logo-container", { scale: 0.85, opacity: 0, duration: 1 }, "-=0.3")
        .from(".final-heading", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#FAF9F6] text-[#151515] overflow-x-hidden">
      {/* Scroll Chapter Progress Indicator */}
      {!isReducedMotion && <ScrollProgressIndicator activeChapter={activeChapter} />}

      {/* Fixed Centered Master Visual Object (Pinned overlay on desktop) */}
      {!isReducedMotion && (
        <div className="hidden lg:flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <MasterVisualObject ref={masterVisualRef} />
        </div>
      )}

      {/* Continuous Scroll Chapters Stack */}
      <div className="relative z-10 flex flex-col w-full">
        <HeroSequence ref={heroRef} />
        <InterfaceSequence ref={interfaceRef} />
        <GameSequence ref={gameRef} />
        <PlaygroundSequence ref={playgroundRef} />
        <ManifestoSequence ref={manifestoRef} />
        <FinalSequence ref={finalRef} />
      </div>
    </div>
  );
}
