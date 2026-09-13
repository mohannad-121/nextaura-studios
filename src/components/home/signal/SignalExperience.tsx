"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SignalDot } from "./SignalDot";
import { AuraButton } from "@/components/ui/AuraButton";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SignalExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // Core animated refs
  const initialDotRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // SVG Paths
  const desktopSvgPathRef = useRef<SVGPathElement>(null);
  const mobileSvgPathRef = useRef<SVGPathElement>(null);
  const splitPathCrimsonRef = useRef<SVGPathElement>(null);
  const splitPathOrangeRef = useRef<SVGPathElement>(null);
  const splitPathDarkRef = useRef<SVGPathElement>(null);

  // Act 2: IDEA
  const ideaContainerRef = useRef<HTMLDivElement>(null);
  const ideaLettersRef = useRef<HTMLSpanElement[]>([]);

  // Act 3 & 4: Interface Frame
  const frameContainerRef = useRef<HTMLDivElement>(null);
  const frameToggleThumbRef = useRef<HTMLDivElement>(null);
  const frameSliderFillRef = useRef<HTMLDivElement>(null);
  const frameTabIndicatorRef = useRef<HTMLDivElement>(null);

  // Act 5 & 6: Play / Game
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameNode1Ref = useRef<HTMLDivElement>(null);
  const gameNode2Ref = useRef<HTMLDivElement>(null);
  const gameObstacleRef = useRef<HTMLDivElement>(null);

  // Act 7: Multi-Signal
  const multiContainerRef = useRef<HTMLDivElement>(null);
  const wordBuildRef = useRef<HTMLDivElement>(null);
  const wordPlayRef = useRef<HTMLDivElement>(null);
  const wordExperienceRef = useRef<HTMLDivElement>(null);

  // Act 9: Final Reveal
  const finalContainerRef = useRef<HTMLDivElement>(null);
  const finalBaselineRef = useRef<HTMLDivElement>(null);
  const finalLogoRef = useRef<HTMLDivElement>(null);
  const finalStatementRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const activePath = isMobile
        ? mobileSvgPathRef.current
        : desktopSvgPathRef.current;

      // Calculate path lengths for scrub drawing
      if (activePath) {
        const len = activePath.getTotalLength();
        gsap.set(activePath, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
      }

      [splitPathCrimsonRef.current, splitPathOrangeRef.current, splitPathDarkRef.current].forEach(
        (path) => {
          if (path) {
            const l = path.getTotalLength();
            gsap.set(path, {
              strokeDasharray: l,
              strokeDashoffset: l,
            });
          }
        }
      );

      // Dedicated GSAP matchMedia for desktop & mobile choreographies
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP CHOREOGRAPHY (min-width: 768px)
      // ==========================================
      mm.add("(min-width: 768px)", () => {
        const desktopPath = desktopSvgPathRef.current;
        const dLen = desktopPath ? desktopPath.getTotalLength() : 2000;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });

        // ACT 1: Empty Screen & First Movement (0.00 -> 0.12)
        tl.to(scrollHintRef.current, { opacity: 0, y: 15, duration: 0.05, ease: "power1.out" }, 0)
          .to(
            initialDotRef.current,
            {
              scaleX: 2.4,
              scaleY: 0.6,
              duration: 0.04,
              ease: "power2.out",
            },
            0.01
          )
          .to(
            initialDotRef.current,
            {
              scaleX: 1,
              scaleY: 1,
              y: 80,
              duration: 0.08,
              ease: "power2.inOut",
            },
            0.05
          );

        // Vector path starts drawing
        if (desktopPath) {
          tl.to(
            desktopPath,
            {
              strokeDashoffset: dLen * 0.75,
              duration: 0.15,
              ease: "none",
            },
            0.03
          );
        }

        // ACT 2: "IDEA." Created & Fractured (0.12 -> 0.28)
        tl.to(initialDotRef.current, { opacity: 0, duration: 0.03 }, 0.12)
          .to(
            ideaContainerRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.05,
              ease: "power2.out",
            },
            0.13
          )
          .fromTo(
            ideaLettersRef.current,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.06,
              ease: "power3.out",
            },
            0.14
          );

        if (desktopPath) {
          tl.to(
            desktopPath,
            {
              strokeDashoffset: dLen * 0.5,
              duration: 0.15,
              ease: "none",
            },
            0.18
          );
        }

        // IDEA fractures and breaks apart
        tl.to(
          ideaLettersRef.current[0],
          { x: -90, y: -40, rotation: -12, opacity: 0, duration: 0.07 },
          0.24
        )
          .to(
            ideaLettersRef.current[1],
            { x: -30, y: 50, rotation: 8, opacity: 0, duration: 0.07 },
            0.24
          )
          .to(
            ideaLettersRef.current[2],
            { x: 50, y: -50, rotation: -8, opacity: 0, duration: 0.07 },
            0.24
          )
          .to(
            ideaLettersRef.current[3],
            { x: 100, y: 30, rotation: 15, opacity: 0, duration: 0.07 },
            0.24
          )
          .to(
            ideaLettersRef.current[4], // The dot '.'
            { x: 140, y: -20, scale: 1.5, opacity: 0, duration: 0.07 },
            0.24
          )
          .to(ideaContainerRef.current, { opacity: 0, duration: 0.02 }, 0.3);

        // ACT 3 & 4: IDEA Becomes Device Frame & User Enters Interface (0.28 -> 0.48)
        tl.to(
          frameContainerRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.08,
            ease: "back.out(1.2)",
          },
          0.3
        )
          .to(
            frameToggleThumbRef.current,
            {
              x: 28,
              backgroundColor: "#A90F24",
              duration: 0.05,
            },
            0.34
          )
          .to(
            frameSliderFillRef.current,
            {
              width: "82%",
              duration: 0.06,
            },
            0.36
          )
          .to(
            frameTabIndicatorRef.current,
            {
              x: 88,
              duration: 0.05,
            },
            0.38
          )
          // Frame scales to exceed viewport — user enters the interface!
          .to(
            frameContainerRef.current,
            {
              scale: 5,
              opacity: 0.1,
              duration: 0.1,
              ease: "power2.inOut",
            },
            0.42
          )
          .to(frameContainerRef.current, { opacity: 0, duration: 0.02 }, 0.49);

        // ACT 5 & 6: Interface Breaks Free → Play & Kinetic Mini-Game (0.48 -> 0.68)
        tl.to(
          gameContainerRef.current,
          {
            opacity: 1,
            duration: 0.05,
          },
          0.5
        )
          // Checkpoint 1 hit
          .to(
            gameNode1Ref.current,
            {
              scale: 1.6,
              borderColor: "#FF6A1A",
              boxShadow: "0 0 30px rgba(255,106,26,0.6)",
              duration: 0.05,
            },
            0.54
          )
          .to(
            gameNode1Ref.current,
            {
              scale: 1,
              opacity: 0.4,
              duration: 0.04,
            },
            0.58
          )
          // Avoid obstacle diamond
          .to(
            gameObstacleRef.current,
            {
              rotation: 180,
              scale: 1.2,
              duration: 0.06,
            },
            0.6
          )
          // Checkpoint 2 hit
          .to(
            gameNode2Ref.current,
            {
              scale: 1.8,
              borderColor: "#A90F24",
              boxShadow: "0 0 35px rgba(169,15,36,0.7)",
              duration: 0.05,
            },
            0.63
          )
          .to(
            gameContainerRef.current,
            {
              opacity: 0,
              duration: 0.05,
            },
            0.67
          );

        // ACT 7: The Signal Multiplies (0.68 -> 0.82)
        tl.to(
          multiContainerRef.current,
          {
            opacity: 1,
            duration: 0.04,
          },
          0.69
        );

        // Scrub split paths
        [splitPathCrimsonRef.current, splitPathOrangeRef.current, splitPathDarkRef.current].forEach(
          (p) => {
            if (p) {
              const l = p.getTotalLength();
              tl.to(
                p,
                {
                  strokeDashoffset: 0,
                  duration: 0.1,
                  ease: "none",
                },
                0.7
              );
            }
          }
        );

        tl.fromTo(
          wordBuildRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.04 },
          0.71
        )
          .fromTo(
            wordPlayRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.04 },
            0.73
          )
          .fromTo(
            wordExperienceRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.04 },
            0.75
          );

        // ACT 8: Symmetry & Everything Disappears (0.82 -> 0.88)
        tl.to(
          [
            wordBuildRef.current,
            wordPlayRef.current,
            wordExperienceRef.current,
            multiContainerRef.current,
          ],
          {
            opacity: 0,
            y: -20,
            duration: 0.05,
          },
          0.82
        );

        if (desktopPath) {
          tl.to(
            desktopPath,
            {
              strokeDashoffset: dLen,
              duration: 0.05,
            },
            0.82
          );
        }

        // Return to single center signal
        tl.fromTo(
          initialDotRef.current,
          { opacity: 0, scale: 0.5, y: 0 },
          { opacity: 1, scale: 1, y: 0, duration: 0.04 },
          0.85
        );

        // ACT 9: Final Reveal — NEXTAURA STUDIOS (0.88 -> 1.00)
        tl.to(
          initialDotRef.current,
          {
            scale: 2.2,
            boxShadow: "0 0 35px rgba(169,15,36,0.8)",
            duration: 0.03,
          },
          0.87
        )
          .to(
            initialDotRef.current,
            {
              scaleX: 18,
              scaleY: 0.3,
              opacity: 0.8,
              duration: 0.04,
            },
            0.89
          )
          .to(initialDotRef.current, { opacity: 0, duration: 0.02 }, 0.92)
          .to(
            finalBaselineRef.current,
            {
              width: "280px",
              opacity: 1,
              duration: 0.04,
            },
            0.9
          )
          .to(
            finalContainerRef.current,
            {
              opacity: 1,
              duration: 0.05,
            },
            0.91
          )
          .fromTo(
            finalLogoRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.05 },
            0.92
          )
          .fromTo(
            finalStatementRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.04 },
            0.94
          )
          .fromTo(
            finalCtaRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.04 },
            0.96
          );
      });

      // ==========================================
      // MOBILE CHOREOGRAPHY (max-width: 767px)
      // Dedicated path restricted to central 60% viewport
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        const mobilePath = mobileSvgPathRef.current;
        const mLen = mobilePath ? mobilePath.getTotalLength() : 1500;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });

        // Mobile Act 1: Instant reaction on touch scroll (0.00 -> 0.12)
        tl.to(scrollHintRef.current, { opacity: 0, y: 10, duration: 0.04 }, 0)
          .to(
            initialDotRef.current,
            {
              scaleX: 2,
              scaleY: 0.6,
              duration: 0.04,
            },
            0.01
          )
          .to(
            initialDotRef.current,
            {
              scaleX: 1,
              scaleY: 1,
              y: 50,
              duration: 0.06,
            },
            0.04
          );

        if (mobilePath) {
          tl.to(
            mobilePath,
            {
              strokeDashoffset: mLen * 0.75,
              duration: 0.15,
              ease: "none",
            },
            0.03
          );
        }

        // Mobile Act 2: "IDEA." (0.12 -> 0.28)
        tl.to(initialDotRef.current, { opacity: 0, duration: 0.03 }, 0.12)
          .to(
            ideaContainerRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.05,
            },
            0.13
          )
          .fromTo(
            ideaLettersRef.current,
            { y: 25, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.02,
              duration: 0.06,
            },
            0.14
          );

        if (mobilePath) {
          tl.to(
            mobilePath,
            {
              strokeDashoffset: mLen * 0.5,
              duration: 0.15,
              ease: "none",
            },
            0.18
          );
        }

        // Mobile Fracture
        tl.to(
          ideaLettersRef.current[0],
          { x: -40, y: -20, opacity: 0, duration: 0.06 },
          0.24
        )
          .to(
            ideaLettersRef.current[1],
            { x: -15, y: 30, opacity: 0, duration: 0.06 },
            0.24
          )
          .to(
            ideaLettersRef.current[2],
            { x: 25, y: -25, opacity: 0, duration: 0.06 },
            0.24
          )
          .to(
            ideaLettersRef.current[3],
            { x: 50, y: 15, opacity: 0, duration: 0.06 },
            0.24
          )
          .to(
            ideaLettersRef.current[4],
            { x: 60, scale: 1.3, opacity: 0, duration: 0.06 },
            0.24
          )
          .to(ideaContainerRef.current, { opacity: 0, duration: 0.02 }, 0.29);

        // Mobile Act 3 & 4: Device Outline & Enter Interface (0.28 -> 0.48)
        tl.to(
          frameContainerRef.current,
          {
            opacity: 1,
            scale: 0.9,
            duration: 0.08,
          },
          0.3
        )
          .to(
            frameToggleThumbRef.current,
            {
              x: 24,
              backgroundColor: "#A90F24",
              duration: 0.05,
            },
            0.34
          )
          .to(
            frameSliderFillRef.current,
            {
              width: "75%",
              duration: 0.05,
            },
            0.36
          )
          // Frame expands past mobile viewport
          .to(
            frameContainerRef.current,
            {
              scale: 4.5,
              opacity: 0.15,
              duration: 0.1,
            },
            0.42
          )
          .to(frameContainerRef.current, { opacity: 0, duration: 0.02 }, 0.49);

        // Mobile Act 5 & 6: Play Mode (0.48 -> 0.68)
        tl.to(
          gameContainerRef.current,
          {
            opacity: 1,
            duration: 0.05,
          },
          0.5
        )
          .to(
            gameNode1Ref.current,
            {
              scale: 1.5,
              borderColor: "#FF6A1A",
              boxShadow: "0 0 25px rgba(255,106,26,0.6)",
              duration: 0.05,
            },
            0.54
          )
          .to(
            gameNode1Ref.current,
            {
              scale: 1,
              opacity: 0.4,
              duration: 0.04,
            },
            0.58
          )
          .to(
            gameObstacleRef.current,
            {
              rotation: 90,
              scale: 1.15,
              duration: 0.05,
            },
            0.6
          )
          .to(
            gameNode2Ref.current,
            {
              scale: 1.6,
              borderColor: "#A90F24",
              boxShadow: "0 0 25px rgba(169,15,36,0.6)",
              duration: 0.05,
            },
            0.63
          )
          .to(
            gameContainerRef.current,
            {
              opacity: 0,
              duration: 0.04,
            },
            0.67
          );

        // Mobile Act 7: Signal Multiplies (0.68 -> 0.82)
        tl.to(
          multiContainerRef.current,
          {
            opacity: 1,
            duration: 0.04,
          },
          0.69
        );

        tl.fromTo(
          wordBuildRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.04 },
          0.71
        )
          .fromTo(
            wordPlayRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.04 },
            0.74
          )
          .fromTo(
            wordExperienceRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.04 },
            0.77
          );

        // Mobile Act 8: Return to Void (0.82 -> 0.88)
        tl.to(
          [
            wordBuildRef.current,
            wordPlayRef.current,
            wordExperienceRef.current,
            multiContainerRef.current,
          ],
          {
            opacity: 0,
            duration: 0.05,
          },
          0.82
        );

        if (mobilePath) {
          tl.to(
            mobilePath,
            {
              strokeDashoffset: mLen,
              duration: 0.05,
            },
            0.82
          );
        }

        tl.fromTo(
          initialDotRef.current,
          { opacity: 0, scale: 0.5, y: 0 },
          { opacity: 1, scale: 1, y: 0, duration: 0.04 },
          0.85
        );

        // Mobile Act 9: Final Reveal (0.88 -> 1.00)
        tl.to(
          initialDotRef.current,
          {
            scale: 2,
            duration: 0.03,
          },
          0.87
        )
          .to(
            initialDotRef.current,
            {
              scaleX: 12,
              scaleY: 0.3,
              opacity: 0.7,
              duration: 0.04,
            },
            0.89
          )
          .to(initialDotRef.current, { opacity: 0, duration: 0.02 }, 0.92)
          .to(
            finalBaselineRef.current,
            {
              width: "180px",
              opacity: 1,
              duration: 0.04,
            },
            0.9
          )
          .to(
            finalContainerRef.current,
            {
              opacity: 1,
              duration: 0.05,
            },
            0.91
          )
          .fromTo(
            finalLogoRef.current,
            { y: 25, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.05 },
            0.92
          )
          .fromTo(
            finalStatementRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.04 },
            0.94
          )
          .fromTo(
            finalCtaRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.04 },
            0.96
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isReducedMotion]);

  // Accessibility reduced-motion clean vertical layout
  if (isReducedMotion) {
    return (
      <div className="w-full min-h-screen bg-[#FAF9F6] text-[#151515] px-6 py-24 flex flex-col items-center justify-center text-center">
        <SignalDot size="lg" className="mb-8" />
        <h1 className="text-4xl sm:text-6xl font-heading font-black tracking-tight mb-4">
          NEXT<span className="solar-text-gradient">AURA</span> STUDIOS
        </h1>
        <p className="max-w-xl text-lg text-[#666462] mb-8 leading-relaxed">
          We build digital products, kinetic experiences, and games that people genuinely want to touch and remember.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <AuraButton href="/contact" variant="primary" showArrow>
            Start a Project
          </AuraButton>
          <AuraButton href="/about" variant="secondary">
            The Studio
          </AuraButton>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FAF9F6] text-[#151515] overflow-x-hidden h-[680vh] sm:h-[750vh]"
    >
      {/* 
        Sticky Viewport Stage (100svh pinned canvas)
        Ensures perfect behavior on mobile dynamic toolbars
      */}
      <div
        ref={stageRef}
        className="sticky top-0 left-0 w-full h-[100svh] overflow-hidden flex items-center justify-center select-none"
      >
        {/* Subtle Warm Vignette */}
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(250,249,246,0)_100%)]"
          aria-hidden="true"
        />

        {/* ========================================================================= */}
        {/* SVG VECTOR CANVASES (Desktop & Mobile)                                    */}
        {/* ========================================================================= */}
        {/* DESKTOP SVG CANVAS (viewBox: 0 0 1000 1000) */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Main Desktop Signal Path */}
          <path
            ref={desktopSvgPathRef}
            d="M 500 500 
               C 500 560, 420 620, 360 620 
               C 280 620, 240 500, 320 420 
               L 680 420 
               C 740 420, 780 480, 740 540 
               C 680 620, 560 620, 500 520 
               L 500 480 
               C 500 400, 440 340, 500 340 
               C 560 340, 600 400, 500 500 Z"
            stroke="#A90F24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_8px_rgba(169,15,36,0.35)]"
          />

          {/* Act 7: 3-Way Chromatic Split Paths */}
          <path
            ref={splitPathCrimsonRef}
            d="M 500 500 C 440 420, 320 400, 260 360"
            stroke="#A90F24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            ref={splitPathOrangeRef}
            d="M 500 500 C 500 380, 500 300, 500 240"
            stroke="#FF6A1A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            ref={splitPathDarkRef}
            d="M 500 500 C 560 420, 680 400, 740 360"
            stroke="#151515"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* MOBILE SVG CANVAS (viewBox: 0 0 400 800) */}
        {/* Carefully optimized within central 60% viewport width (X: 80 - 320) */}
        <svg
          className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Main Mobile Signal Path */}
          <path
            ref={mobileSvgPathRef}
            d="M 200 400 
               C 200 460, 160 520, 140 520 
               C 110 520, 110 420, 140 360 
               L 260 360 
               C 290 360, 290 440, 260 480 
               C 220 540, 180 540, 170 480 
               C 160 420, 200 380, 200 400 Z"
            stroke="#A90F24"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_10px_rgba(169,15,36,0.45)]"
          />
        </svg>

        {/* ========================================================================= */}
        {/* PROTAGONIST: THE ONE SIGNAL DOT                                           */}
        {/* ========================================================================= */}
        <div className="absolute z-30 flex flex-col items-center justify-center pointer-events-none">
          <SignalDot ref={initialDotRef} size="md" variant="crimson" glow={true} />

          {/* Minimal "SCROLL" hint text (disappears immediately on interaction) */}
          <div
            ref={scrollHintRef}
            className="mt-6 text-[9px] sm:text-[10px] font-mono tracking-[0.4em] uppercase text-[#7A7570] font-medium transition-opacity duration-300 select-none"
          >
            SCROLL
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 2: "IDEA." TYPOGRAPHY                                                 */}
        {/* ========================================================================= */}
        <div
          ref={ideaContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none flex items-center justify-center"
        >
          <div className="text-[clamp(3.5rem,14vw,10rem)] font-heading font-black tracking-tight text-[#151515] flex items-center">
            {["I", "D", "E", "A", "."].map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) ideaLettersRef.current[index] = el;
                }}
                className="inline-block transition-transform will-change-transform"
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 3 & 4: ABSTRACT INTERFACE FRAME & ENTERING THE INTERFACE              */}
        {/* ========================================================================= */}
        <div
          ref={frameContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none w-[260px] sm:w-[320px] h-[480px] sm:h-[560px] rounded-[42px] border-2 border-[#151515]/80 bg-[#FFFDFC]/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] p-6 flex flex-col justify-between overflow-hidden will-change-transform"
        >
          {/* Top Notch Pill */}
          <div className="w-20 h-1.5 bg-[#151515]/20 rounded-full mx-auto" />

          {/* Minimalist UI Primitives */}
          <div className="space-y-6 my-auto">
            {/* Minimal Segmented Tabs */}
            <div className="relative flex items-center justify-between bg-black/4 p-1 rounded-full border border-black/5 text-[10px] font-mono tracking-wider font-semibold text-[#666]">
              <div
                ref={frameTabIndicatorRef}
                className="absolute top-1 left-1 w-20 h-[calc(100%-8px)] bg-white rounded-full shadow-xs transition-transform"
              />
              <span className="relative z-10 px-3 py-1 text-[#151515]">DESIGN</span>
              <span className="relative z-10 px-3 py-1">CODE</span>
              <span className="relative z-10 px-3 py-1">PLAY</span>
            </div>

            {/* Abstract Switch */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <span className="text-xs font-mono tracking-widest text-[#666] uppercase">
                Interactive State
              </span>
              <div className="w-12 h-6 bg-black/10 rounded-full p-0.5 flex items-center relative">
                <div
                  ref={frameToggleThumbRef}
                  className="w-5 h-5 bg-white rounded-full shadow-md transition-all will-change-transform"
                />
              </div>
            </div>

            {/* Abstract Slider */}
            <div className="space-y-2 p-3 rounded-2xl bg-[#FAF9F6] border border-black/5">
              <div className="flex justify-between text-[10px] font-mono text-[#888]">
                <span>RESPONSIVE ENGINE</span>
                <span className="text-[#A90F24] font-bold">100%</span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  ref={frameSliderFillRef}
                  className="h-full bg-gradient-to-r from-[#FF6A1A] to-[#A90F24] w-[30%] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="w-28 h-1 bg-[#151515]/20 rounded-full mx-auto" />
        </div>

        {/* ========================================================================= */}
        {/* ACT 5 & 6: PLAY & KINETIC MINI-GAME                                       */}
        {/* ========================================================================= */}
        <div
          ref={gameContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none w-full max-w-lg h-80 flex items-center justify-between px-8"
        >
          {/* Checkpoint Target 1 */}
          <div
            ref={gameNode1Ref}
            className="w-12 h-12 rounded-full border-2 border-[#151515]/40 flex items-center justify-center transition-all"
          >
            <div className="w-3 h-3 rounded-full bg-[#FF6A1A]" />
          </div>

          {/* Kinetic Diamond Obstacle */}
          <div
            ref={gameObstacleRef}
            className="w-10 h-10 border border-[#D4AF37] rotate-45 flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-[#D4AF37]" />
          </div>

          {/* Checkpoint Target 2 */}
          <div
            ref={gameNode2Ref}
            className="w-14 h-14 rounded-full border-2 border-[#151515]/40 flex items-center justify-center transition-all"
          >
            <div className="w-4 h-4 rounded-full bg-[#A90F24]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 7: MULTI-SIGNAL WORDS (BUILD / PLAY / EXPERIENCE)                      */}
        {/* ========================================================================= */}
        <div
          ref={multiContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none w-full max-w-4xl h-full flex flex-col md:flex-row items-center justify-around px-6"
        >
          <div
            ref={wordBuildRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#A90F24]"
          >
            BUILD
          </div>
          <div
            ref={wordPlayRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#FF6A1A]"
          >
            PLAY
          </div>
          <div
            ref={wordExperienceRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#151515]"
          >
            EXPERIENCE
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 9: FINAL REVEAL — NEXTAURA STUDIOS + CTA                               */}
        {/* ========================================================================= */}
        <div
          ref={finalContainerRef}
          className="absolute z-30 opacity-0 flex flex-col items-center justify-center text-center px-6 max-w-3xl"
        >
          {/* Expanding Signal Baseline */}
          <div
            ref={finalBaselineRef}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#A90F24] to-transparent w-0 opacity-0 mb-6"
          />

          {/* NEXTAURA STUDIOS Wordmark */}
          <div ref={finalLogoRef} className="space-y-1 mb-6">
            <h1 className="font-heading font-black text-[clamp(2.8rem,9vw,6.5rem)] tracking-tight text-[#151515] leading-none">
              NEXT<span className="solar-text-gradient">AURA</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.45em] text-[#D4AF37] font-bold uppercase">
              STUDIOS
            </p>
          </div>

          {/* Editorial Philosophy Statement */}
          <p
            ref={finalStatementRef}
            className="text-lg sm:text-2xl md:text-3xl font-heading font-semibold text-[#151515] tracking-tight max-w-xl mb-8 leading-snug"
          >
            BUILD SOMETHING PEOPLE WANT TO TOUCH.
          </p>

          {/* Direct CTA Action */}
          <div ref={finalCtaRef} className="flex flex-col sm:flex-row items-center gap-4">
            <AuraButton href="/contact" variant="primary" size="lg" showArrow>
              Start a Project
            </AuraButton>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#666] hover:text-[#151515] px-4 py-2 transition-colors uppercase"
            >
              The Studio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
