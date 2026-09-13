"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuraButton } from "@/components/ui/AuraButton";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SignalExperience() {
  const stageRef = useRef<HTMLDivElement>(null);

  // SVG Elements
  const desktopSvgRef = useRef<SVGSVGElement>(null);
  const mobileSvgRef = useRef<SVGSVGElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);

  // Moving Signal Head (in SVG coordinates)
  const dHeadDotRef = useRef<SVGCircleElement>(null);
  const dHeadGlowRef = useRef<SVGCircleElement>(null);
  const dHeadCoreRef = useRef<SVGCircleElement>(null);

  const mHeadDotRef = useRef<SVGCircleElement>(null);
  const mHeadGlowRef = useRef<SVGCircleElement>(null);
  const mHeadCoreRef = useRef<SVGCircleElement>(null);

  // Act 1: Initial Center Dot & Hint
  const openingDotWrapRef = useRef<HTMLDivElement>(null);
  const initialDotRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  // Act 2: IDEA Elements
  const ideaContainerRef = useRef<HTMLDivElement>(null);
  const ideaTextMaskRef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLSpanElement>(null);
  const letterDRef = useRef<HTMLSpanElement>(null);
  const letterERef = useRef<HTMLSpanElement>(null);
  const letterARef = useRef<HTMLSpanElement>(null);
  const letterDotRef = useRef<HTMLSpanElement>(null);

  // Act 3 & 4: Frame & Full Viewport Interface
  const frameWrapperRef = useRef<HTMLDivElement>(null);
  const frameDeviceRef = useRef<HTMLDivElement>(null);
  const frameToggleThumbRef = useRef<HTMLDivElement>(null);
  const frameSliderFillRef = useRef<HTMLDivElement>(null);
  const frameTabIndicatorRef = useRef<HTMLDivElement>(null);
  const fullScreenUIRef = useRef<HTMLDivElement>(null);
  const fullToggleThumbRef = useRef<HTMLDivElement>(null);
  const fullSliderFillRef = useRef<HTMLDivElement>(null);
  const fullTabActiveRef = useRef<HTMLDivElement>(null);

  // Act 5 & 6: Play & Kinetic Mini-Game Course
  const playWordRef = useRef<HTMLDivElement>(null);
  const gameCourseRef = useRef<HTMLDivElement>(null);
  const gameRingRef = useRef<HTMLDivElement>(null);
  const gameObstacleRef = useRef<HTMLDivElement>(null);
  const gameTwinOrbsRef = useRef<HTMLDivElement>(null);
  const gameCheckpointRef = useRef<HTMLDivElement>(null);

  // Act 7: Multi-Signal Branches
  const multiContainerRef = useRef<HTMLDivElement>(null);
  const branchCrimsonRef = useRef<SVGPathElement>(null);
  const branchOrangeRef = useRef<SVGPathElement>(null);
  const branchDarkRef = useRef<SVGPathElement>(null);
  const wordBuildRef = useRef<HTMLDivElement>(null);
  const wordPlayBranchRef = useRef<HTMLDivElement>(null);
  const wordExpRef = useRef<HTMLDivElement>(null);

  // Act 9: Final Reveal
  const finalContainerRef = useRef<HTMLDivElement>(null);
  const finalBaselineRef = useRef<HTMLDivElement>(null);
  const finalWordmarkRef = useRef<HTMLDivElement>(null);
  const finalStatementRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) return;

    const timer = setTimeout(() => {
      setupScrollChoreography();
    }, 60);

    return () => clearTimeout(timer);
  }, []);

  function setupScrollChoreography() {
    if (!stageRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // =========================================================================
      // 1. DESKTOP CHOREOGRAPHY (min-width: 768px)
      // =========================================================================
      mm.add("(min-width: 768px)", () => {
        const path = desktopPathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength() || 2400;
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        // Initialize branch paths
        [branchCrimsonRef.current, branchOrangeRef.current, branchDarkRef.current].forEach((bp) => {
          if (bp) {
            const bl = bp.getTotalLength() || 600;
            gsap.set(bp, {
              strokeDasharray: bl,
              strokeDashoffset: bl,
            });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            pin: true,
            start: "top top",
            end: "+=4400",
            scrub: 0.6,
            anticipatePin: 1,
          },
        });

        // -------------------------------------------------------------
        // ACT 1: EMPTY OPENING & FIRST MOVEMENT (0.00 -> 0.14)
        // -------------------------------------------------------------
        tl.to(scrollHintRef.current, { opacity: 0, y: 15, duration: 0.03, ease: "power1.out" }, 0)
          .to(
            initialDotRef.current,
            {
              scaleX: 2.2,
              scaleY: 0.55,
              duration: 0.02,
              ease: "power2.out",
            },
            0.01
          )
          .to(
            initialDotRef.current,
            {
              scaleX: 1,
              scaleY: 1,
              duration: 0.03,
              ease: "power2.inOut",
            },
            0.03
          )
          .to(openingDotWrapRef.current, { opacity: 0, duration: 0.02 }, 0.04)
          .to([dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current], { opacity: 1, duration: 0.02 }, 0.04)
          // Segment 1: Path draws down to the start of IDEA horizontal stroke
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.76,
              duration: 0.10,
              ease: "none",
            },
            0.04
          )
          .to(
            [dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current],
            {
              attr: { cx: 180, cy: 480 },
              duration: 0.10,
              ease: "none",
            },
            0.04
          );

        // -------------------------------------------------------------
        // ACT 2: LINE CREATES "IDEA." & FRACTURES (0.14 -> 0.26)
        // -------------------------------------------------------------
        tl.to(ideaContainerRef.current, { opacity: 1, duration: 0.02 }, 0.14)
          // Signal dot strikes horizontally across IDEA and reveals text through clip-path
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.56,
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(
            [dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current],
            {
              attr: { cx: 820, cy: 480 },
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(
            ideaTextMaskRef.current,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(letterDotRef.current, { scale: 1.4, color: "#A90F24", duration: 0.02 }, 0.21)
          // IDEA fractures and breaks away
          .to(letterIRef.current, { x: -90, y: -40, rotate: -12, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterDRef.current, { x: -35, y: 50, rotate: 10, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterERef.current, { x: 45, y: -50, rotate: -8, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterARef.current, { x: 95, y: 30, rotate: 15, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterDotRef.current, { x: 120, y: -20, opacity: 0, duration: 0.04 }, 0.22)
          .to(ideaContainerRef.current, { opacity: 0, duration: 0.02 }, 0.26);

        // -------------------------------------------------------------
        // ACT 3: IDEA TRANSFORMS INTO THE DEVICE FRAME (0.26 -> 0.38)
        // -------------------------------------------------------------
        tl.to(frameWrapperRef.current, { opacity: 1, scale: 1, duration: 0.05, ease: "power2.out" }, 0.26)
          // Signal draws the frame outline
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.36,
              duration: 0.10,
              ease: "none",
            },
            0.26
          )
          .to(
            [dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current],
            {
              attr: { cx: 500, cy: 240 },
              duration: 0.10,
              ease: "none",
            },
            0.26
          )
          // Abstract UI elements appear inside the frame
          .to(frameToggleThumbRef.current, { x: 28, backgroundColor: "#A90F24", duration: 0.04 }, 0.32)
          .to(frameSliderFillRef.current, { width: "80%", duration: 0.04 }, 0.33)
          .to(frameTabIndicatorRef.current, { x: 80, duration: 0.04 }, 0.34);

        // -------------------------------------------------------------
        // ACT 4: ENTERING THE INTERFACE (0.38 -> 0.50)
        // -------------------------------------------------------------
        // Frame scales up 6x until borders exit viewport — user enters the interface!
        tl.to(
          frameDeviceRef.current,
          {
            scale: 5.5,
            opacity: 0.1,
            duration: 0.08,
            ease: "power2.inOut",
          },
          0.38
        )
          .to(frameWrapperRef.current, { opacity: 0, duration: 0.02 }, 0.45)
          // Full-screen product mode takes over
          .to(fullScreenUIRef.current, { opacity: 1, duration: 0.04 }, 0.40)
          .to(fullToggleThumbRef.current, { x: 50, backgroundColor: "#A90F24", duration: 0.04 }, 0.42)
          .to(fullSliderFillRef.current, { width: "95%", duration: 0.04 }, 0.44)
          .to(fullTabActiveRef.current, { x: 180, duration: 0.04 }, 0.46);

        // -------------------------------------------------------------
        // ACT 5 & 6: INTERFACE BREAKS FREE → PLAY & MINI-GAME (0.50 -> 0.68)
        // -------------------------------------------------------------
        tl.to(fullScreenUIRef.current, { opacity: 0, scale: 1.1, duration: 0.04 }, 0.50)
          .to(playWordRef.current, { opacity: 1, scale: 1, duration: 0.04, ease: "back.out(1.5)" }, 0.51)
          .to(playWordRef.current, { opacity: 0, y: -40, duration: 0.03 }, 0.54)
          // Mini-Game Course activated
          .to(gameCourseRef.current, { opacity: 1, duration: 0.03 }, 0.54)
          // Signal travels through kinetic course
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.16,
              duration: 0.12,
              ease: "none",
            },
            0.54
          )
          .to(
            [dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current],
            {
              attr: { cx: 640, cy: 400 },
              duration: 0.12,
              ease: "none",
            },
            0.54
          )
          // Ring 1 Gate Pulse
          .to(gameRingRef.current, { scale: 2, borderColor: "#FF6A1A", opacity: 0, duration: 0.04 }, 0.56)
          // Obstacle Diamond Rotates
          .to(gameObstacleRef.current, { rotate: 180, scale: 1.3, duration: 0.04 }, 0.59)
          // Twin Orbs Split & Merge
          .to(gameTwinOrbsRef.current, { opacity: 1, scale: 1.4, duration: 0.03 }, 0.61)
          .to(gameTwinOrbsRef.current, { opacity: 0, scale: 0.5, duration: 0.03 }, 0.64)
          // Checkpoint Node Hit
          .to(gameCheckpointRef.current, { scale: 2.2, borderColor: "#A90F24", boxShadow: "0 0 35px #A90F24", duration: 0.04 }, 0.64)
          .to(gameCourseRef.current, { opacity: 0, duration: 0.03 }, 0.67);

        // -------------------------------------------------------------
        // ACT 7: THE SIGNAL MULTIPLIES (0.68 -> 0.80)
        // -------------------------------------------------------------
        tl.to(multiContainerRef.current, { opacity: 1, duration: 0.03 }, 0.68);

        [branchCrimsonRef.current, branchOrangeRef.current, branchDarkRef.current].forEach((bp) => {
          if (bp) {
            tl.to(bp, { strokeDashoffset: 0, duration: 0.08, ease: "none" }, 0.69);
          }
        });

        tl.fromTo(wordBuildRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04 }, 0.70)
          .fromTo(wordPlayBranchRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04 }, 0.72)
          .fromTo(wordExpRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04 }, 0.74);

        // -------------------------------------------------------------
        // ACT 8: DISSOLVE & SYMMETRY BACK TO VOID (0.80 -> 0.86)
        // -------------------------------------------------------------
        tl.to(
          [wordBuildRef.current, wordPlayBranchRef.current, wordExpRef.current, multiContainerRef.current],
          { opacity: 0, y: -15, duration: 0.03 },
          0.80
        )
          // Retract and fade out all SVG paths so screen becomes completely quiet again
          .to(
            [path, branchCrimsonRef.current, branchOrangeRef.current, branchDarkRef.current],
            {
              opacity: 0,
              duration: 0.04,
              ease: "power2.inOut",
            },
            0.81
          )
          .to([dHeadDotRef.current, dHeadGlowRef.current, dHeadCoreRef.current], { opacity: 0, duration: 0.02 }, 0.83)
          // Return to pure quiet ivory void with single centered crimson dot
          .to(openingDotWrapRef.current, { opacity: 1, duration: 0.02 }, 0.84)
          .fromTo(
            initialDotRef.current,
            { scale: 0.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.03 },
            0.84
          );

        // -------------------------------------------------------------
        // ACT 9: FINAL REVEAL — NEXTAURA STUDIOS + CTA (0.86 -> 1.00)
        // -------------------------------------------------------------
        tl.to(initialDotRef.current, { scale: 2.2, duration: 0.03 }, 0.86)
          .to(initialDotRef.current, { scaleX: 18, scaleY: 0.3, opacity: 0.8, duration: 0.03 }, 0.88)
          .to(initialDotRef.current, { opacity: 0, duration: 0.02 }, 0.90)
          .to(finalBaselineRef.current, { width: "320px", opacity: 1, duration: 0.03 }, 0.89)
          .to(finalContainerRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.04 }, 0.90)
          .fromTo(finalWordmarkRef.current, { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.91)
          .fromTo(finalStatementRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.93)
          .fromTo(finalCtaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.95);
      });

      // =========================================================================
      // 2. MOBILE CHOREOGRAPHY (max-width: 767px)
      // Dedicated path strictly inside central 60% viewport (X: 80 to 320)
      // =========================================================================
      mm.add("(max-width: 767px)", () => {
        const path = mobilePathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength() || 1800;
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            pin: true,
            start: "top top",
            end: "+=3200",
            scrub: 0.5,
            anticipatePin: 1,
          },
        });

        // Mobile Act 1: First scroll reaction (0.00 -> 0.14)
        tl.to(scrollHintRef.current, { opacity: 0, y: 10, duration: 0.03 }, 0)
          .to(initialDotRef.current, { scaleX: 2, scaleY: 0.6, duration: 0.02 }, 0.01)
          .to(initialDotRef.current, { scaleX: 1, scaleY: 1, duration: 0.03 }, 0.03)
          .to(openingDotWrapRef.current, { opacity: 0, duration: 0.02 }, 0.04)
          .to([mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current], { opacity: 1, duration: 0.02 }, 0.04)
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.76,
              duration: 0.10,
              ease: "none",
            },
            0.04
          )
          .to(
            [mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current],
            {
              attr: { cx: 110, cy: 380 },
              duration: 0.10,
              ease: "none",
            },
            0.04
          );

        // Mobile Act 2: IDEA (0.14 -> 0.26)
        tl.to(ideaContainerRef.current, { opacity: 1, duration: 0.02 }, 0.14)
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.56,
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(
            [mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current],
            {
              attr: { cx: 290, cy: 380 },
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(
            ideaTextMaskRef.current,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.09,
              ease: "none",
            },
            0.14
          )
          .to(letterDotRef.current, { scale: 1.3, color: "#A90F24", duration: 0.02 }, 0.21)
          .to(letterIRef.current, { x: -40, y: -20, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterDRef.current, { x: -15, y: 30, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterERef.current, { x: 20, y: -25, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterARef.current, { x: 45, y: 15, opacity: 0, duration: 0.04 }, 0.22)
          .to(letterDotRef.current, { x: 60, scale: 1.3, opacity: 0, duration: 0.04 }, 0.22)
          .to(ideaContainerRef.current, { opacity: 0, duration: 0.02 }, 0.26);

        // Mobile Act 3: Frame Assembly (0.26 -> 0.38)
        tl.to(frameWrapperRef.current, { opacity: 1, scale: 0.92, duration: 0.05 }, 0.26)
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.36,
              duration: 0.10,
              ease: "none",
            },
            0.26
          )
          .to(
            [mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current],
            {
              attr: { cx: 200, cy: 320 },
              duration: 0.10,
              ease: "none",
            },
            0.26
          )
          .to(frameToggleThumbRef.current, { x: 22, backgroundColor: "#A90F24", duration: 0.04 }, 0.32)
          .to(frameSliderFillRef.current, { width: "75%", duration: 0.04 }, 0.33);

        // Mobile Act 4: Enter Interface (0.38 -> 0.50)
        tl.to(frameDeviceRef.current, { scale: 4.5, opacity: 0.12, duration: 0.08 }, 0.38)
          .to(frameWrapperRef.current, { opacity: 0, duration: 0.02 }, 0.45)
          .to(fullScreenUIRef.current, { opacity: 1, duration: 0.04 }, 0.40)
          .to(fullToggleThumbRef.current, { x: 38, backgroundColor: "#A90F24", duration: 0.04 }, 0.42)
          .to(fullSliderFillRef.current, { width: "90%", duration: 0.05 }, 0.44);

        // Mobile Act 5 & 6: Play Mode (0.50 -> 0.68)
        tl.to(fullScreenUIRef.current, { opacity: 0, duration: 0.04 }, 0.50)
          .to(playWordRef.current, { opacity: 1, scale: 1, duration: 0.04 }, 0.51)
          .to(playWordRef.current, { opacity: 0, duration: 0.03 }, 0.54)
          .to(gameCourseRef.current, { opacity: 1, duration: 0.03 }, 0.54)
          .to(
            path,
            {
              strokeDashoffset: pathLength * 0.16,
              duration: 0.12,
              ease: "none",
            },
            0.54
          )
          .to(
            [mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current],
            {
              attr: { cx: 190, cy: 480 },
              duration: 0.12,
              ease: "none",
            },
            0.54
          )
          .to(gameRingRef.current, { scale: 1.8, borderColor: "#FF6A1A", opacity: 0, duration: 0.04 }, 0.56)
          .to(gameObstacleRef.current, { rotate: 90, duration: 0.04 }, 0.59)
          .to(gameCheckpointRef.current, { scale: 1.8, borderColor: "#A90F24", duration: 0.04 }, 0.64)
          .to(gameCourseRef.current, { opacity: 0, duration: 0.03 }, 0.67);

        // Mobile Act 7 & 8: Symmetry & Void (0.68 -> 0.86)
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 0.12,
            ease: "none",
          },
          0.68
        )
          .to(
            [mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current],
            {
              attr: { cx: 200, cy: 400 },
              duration: 0.12,
              ease: "none",
            },
            0.68
          )
          .to(path, { opacity: 0, duration: 0.04, ease: "power2.out" }, 0.79)
          .to([mHeadDotRef.current, mHeadGlowRef.current, mHeadCoreRef.current], { opacity: 0, duration: 0.02 }, 0.82)
          .to(openingDotWrapRef.current, { opacity: 1, duration: 0.02 }, 0.83)
          .fromTo(initialDotRef.current, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.03 }, 0.84);

        // Mobile Act 9: Final Reveal (0.86 -> 1.00)
        tl.to(initialDotRef.current, { scale: 2, duration: 0.03 }, 0.86)
          .to(initialDotRef.current, { scaleX: 12, scaleY: 0.3, opacity: 0.7, duration: 0.03 }, 0.88)
          .to(initialDotRef.current, { opacity: 0, duration: 0.02 }, 0.90)
          .to(finalBaselineRef.current, { width: "220px", opacity: 1, duration: 0.03 }, 0.89)
          .to(finalContainerRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.04 }, 0.90)
          .fromTo(finalWordmarkRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.91)
          .fromTo(finalStatementRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.93)
          .fromTo(finalCtaRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.04 }, 0.95);
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }

  // Accessibility reduced motion clean layout
  if (isReducedMotion) {
    return (
      <div className="w-full min-h-screen bg-[#FAF9F6] text-[#151515] px-6 py-28 flex flex-col items-center justify-center text-center">
        <div className="w-4 h-4 rounded-full bg-[#A90F24] shadow-[0_0_20px_rgba(169,15,36,0.6)] mb-8" />
        <h1 className="text-4xl sm:text-7xl font-heading font-black tracking-tight mb-4 text-[#151515]">
          NEXT<span className="solar-text-gradient">AURA</span> STUDIOS
        </h1>
        <p className="max-w-xl text-lg text-[#666462] mb-10 leading-relaxed font-sans">
          We build digital products, kinetic experiences, and games that people genuinely want to touch and remember.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <AuraButton href="/start-project" variant="primary" showArrow>
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
    <div className="relative w-full bg-[#FAF9F6] text-[#151515]">
      {/* 
        STAGE PINNED DIRECTLY BY GSAP SCROLLTRIGGER
        GSAP wraps stageRef in pin-spacer (+4400px desktop, +3200px mobile)
      */}
      <div
        ref={stageRef}
        className="w-full h-screen h-[100svh] overflow-hidden flex items-center justify-center select-none relative"
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75)_0%,rgba(250,249,246,0)_100%)]"
          aria-hidden="true"
        />

        {/* ========================================================================= */}
        {/* DESKTOP SVG VECTOR CANVAS (viewBox: 0 0 1000 1000)                        */}
        {/* ========================================================================= */}
        <svg
          ref={desktopSvgRef}
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Main Continuous Desktop Signal Path (4px deep crimson) */}
          <path
            ref={desktopPathRef}
            d="M 500 500 
               C 500 580, 420 640, 320 640 
               C 220 640, 160 520, 180 480 
               L 820 480 
               C 860 480, 880 540, 840 580 
               C 780 640, 680 260, 500 240 
               C 380 240, 310 320, 310 400 
               L 310 680 
               C 310 740, 380 780, 500 780 
               C 620 780, 690 740, 690 680 
               L 690 400 
               C 690 320, 620 240, 500 240 
               C 420 240, 360 320, 440 400 
               C 520 480, 640 400, 500 500 Z"
            stroke="#A90F24"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_12px_rgba(169,15,36,0.5)]"
          />

          {/* Active Moving Dot at head of Desktop path */}
          <circle ref={dHeadGlowRef} cx="500" cy="500" r="16" fill="#A90F24" opacity="0" />
          <circle ref={dHeadDotRef} cx="500" cy="500" r="7.5" fill="#A90F24" opacity="0" />
          <circle ref={dHeadCoreRef} cx="500" cy="500" r="2.8" fill="#FF6A1A" opacity="0" />

          {/* Act 7: 3-Way Chromatic Branches */}
          <path
            ref={branchCrimsonRef}
            d="M 500 500 C 420 420, 300 380, 220 340"
            stroke="#A90F24"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            ref={branchOrangeRef}
            d="M 500 500 C 500 380, 500 280, 500 200"
            stroke="#FF6A1A"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            ref={branchDarkRef}
            d="M 500 500 C 580 420, 700 380, 780 340"
            stroke="#151515"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>

        {/* ========================================================================= */}
        {/* MOBILE SVG VECTOR CANVAS (viewBox: 0 0 400 800)                           */}
        {/* Strictly centralized within central 60% viewport (X: 80 to 320)           */}
        {/* ========================================================================= */}
        <svg
          ref={mobileSvgRef}
          className="md:hidden absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 400 800"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Main Continuous Mobile Signal Path (3.8px deep crimson) */}
          <path
            ref={mobilePathRef}
            d="M 200 400 
               C 200 470, 160 520, 120 520 
               C 80 520, 80 420, 110 380 
               L 290 380 
               C 320 380, 330 440, 300 480 
               C 260 540, 220 540, 190 480 
               C 160 420, 200 320, 200 400 Z"
            stroke="#A90F24"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="filter drop-shadow-[0_0_12px_rgba(169,15,36,0.55)]"
          />

          {/* Active Moving Dot at head of Mobile path */}
          <circle ref={mHeadGlowRef} cx="200" cy="400" r="14" fill="#A90F24" opacity="0" />
          <circle ref={mHeadDotRef} cx="200" cy="400" r="6.5" fill="#A90F24" opacity="0" />
          <circle ref={mHeadCoreRef} cx="200" cy="400" r="2.5" fill="#FF6A1A" opacity="0" />
        </svg>

        {/* ========================================================================= */}
        {/* ACT 1: EMPTY OPENING — SINGLE CRIMSON POINT IN EXACT CENTER               */}
        {/* ========================================================================= */}
        <div
          ref={openingDotWrapRef}
          className="absolute z-30 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300"
        >
          {/* Centered crimson point with soft glow */}
          <div
            ref={initialDotRef}
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#A90F24] shadow-[0_0_18px_rgba(169,15,36,0.7),0_0_35px_rgba(169,15,36,0.3)] flex items-center justify-center will-change-transform"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          </div>

          {/* Subtle tiny text: SCROLL (disappears immediately on first scroll) */}
          <div
            ref={scrollHintRef}
            className="mt-6 text-[9px] sm:text-[10px] font-mono tracking-[0.45em] uppercase text-[#7A7570] font-semibold select-none"
          >
            SCROLL
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 2: "IDEA." REVEALED THROUGH THE SIGNAL LINE & FRACTURED               */}
        {/* ========================================================================= */}
        <div
          ref={ideaContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none flex items-center justify-center"
        >
          {/* Hardware-accelerated clip-path reveals text horizontally */}
          <div
            ref={ideaTextMaskRef}
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            className="text-[clamp(3.8rem,17vw,11.5rem)] font-heading font-black tracking-tight text-[#151515] flex items-center select-none will-change-transform"
          >
            <span ref={letterIRef} className="inline-block transition-transform will-change-transform">I</span>
            <span ref={letterDRef} className="inline-block transition-transform will-change-transform">D</span>
            <span ref={letterERef} className="inline-block transition-transform will-change-transform">E</span>
            <span ref={letterARef} className="inline-block transition-transform will-change-transform">A</span>
            <span ref={letterDotRef} className="inline-block transition-transform will-change-transform text-[#A90F24]">.</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 3: IDEA BECOMES THE FRAME (Centered Abstract Device)                  */}
        {/* ========================================================================= */}
        <div
          ref={frameWrapperRef}
          className="absolute z-20 opacity-0 pointer-events-none flex items-center justify-center w-full h-full"
        >
          <div
            ref={frameDeviceRef}
            className="w-[78vw] max-w-[380px] h-[64vh] max-h-[560px] rounded-[38px] border-[3px] border-[#151515] bg-[#FFFDFC]/95 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.18)] p-6 flex flex-col justify-between overflow-hidden will-change-transform"
          >
            {/* Dynamic Island Notch Pill */}
            <div className="w-20 h-2 bg-[#151515]/25 rounded-full mx-auto" />

            {/* Abstract UI Primitives */}
            <div className="space-y-6 my-auto">
              {/* Segmented Tab Bar */}
              <div className="relative flex items-center justify-between bg-black/5 p-1 rounded-full border border-black/5 text-[10px] font-mono tracking-wider font-semibold text-[#666]">
                <div
                  ref={frameTabIndicatorRef}
                  className="absolute top-1 left-1 w-20 h-[calc(100%-8px)] bg-white rounded-full shadow-xs transition-transform"
                />
                <span className="relative z-10 px-3 py-1 text-[#151515]">DESIGN</span>
                <span className="relative z-10 px-3 py-1">CODE</span>
                <span className="relative z-10 px-3 py-1">PLAY</span>
              </div>

              {/* Large Interactive Switch */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F6] border border-black/8">
                <span className="text-xs font-mono tracking-widest text-[#555] uppercase font-medium">
                  State Engine
                </span>
                <div className="w-14 h-7 bg-black/10 rounded-full p-0.5 flex items-center relative">
                  <div
                    ref={frameToggleThumbRef}
                    className="w-6 h-6 bg-white rounded-full shadow-md transition-all will-change-transform"
                  />
                </div>
              </div>

              {/* Wide Progress Slider */}
              <div className="space-y-2 p-3.5 rounded-2xl bg-[#FAF9F6] border border-black/8">
                <div className="flex justify-between text-[11px] font-mono text-[#777]">
                  <span>RESPONSIVE CORE</span>
                  <span className="text-[#A90F24] font-bold">100%</span>
                </div>
                <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
                  <div
                    ref={frameSliderFillRef}
                    className="h-full bg-gradient-to-r from-[#FF6A1A] to-[#A90F24] w-[25%] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="w-28 h-1.5 bg-[#151515]/20 rounded-full mx-auto" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 4: ENTERING THE INTERFACE — FULL VIEWPORT PRODUCT MODE                 */}
        {/* ========================================================================= */}
        <div
          ref={fullScreenUIRef}
          className="absolute inset-0 z-20 opacity-0 pointer-events-none flex flex-col justify-between p-6 sm:p-14 max-w-5xl mx-auto my-auto"
        >
          {/* Top Status Navigation */}
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A90F24] font-bold">
              SYSTEM ONLINE // PRODUCT MODE
            </span>
            <div className="relative w-48 sm:w-64 flex items-center bg-black/5 p-1 rounded-full text-xs font-mono">
              <div
                ref={fullTabActiveRef}
                className="absolute top-1 left-1 w-20 h-[calc(100%-8px)] bg-[#151515] rounded-full shadow-xs transition-transform"
              />
              <span className="relative z-10 px-4 py-1 text-white font-medium">APP</span>
              <span className="relative z-10 px-4 py-1 text-[#666]">MOTION</span>
              <span className="relative z-10 px-4 py-1 text-[#666]">PLAY</span>
            </div>
          </div>

          {/* Center Full Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-auto">
            <div className="p-6 rounded-3xl bg-[#FFFDFC] border-2 border-black/10 shadow-lg flex items-center justify-between">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-[#999]">INTERACTION</h4>
                <p className="text-xl font-heading font-bold text-[#151515]">Tactile Feedback</p>
              </div>
              <div className="w-20 h-10 bg-black/10 rounded-full p-1 flex items-center">
                <div
                  ref={fullToggleThumbRef}
                  className="w-8 h-8 bg-white rounded-full shadow-md will-change-transform"
                />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#FFFDFC] border-2 border-black/10 shadow-lg flex flex-col justify-between">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-mono uppercase tracking-widest text-[#999]">LATENCY</span>
                <span className="text-lg font-mono font-bold text-[#A90F24]">0.02ms</span>
              </div>
              <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden">
                <div
                  ref={fullSliderFillRef}
                  className="h-full bg-gradient-to-r from-[#FF6A1A] to-[#A90F24] w-[30%] will-change-transform"
                />
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-xs font-mono text-[#888] text-center">
            SCROLL CONTROLS THE DIGITAL WORLD
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 5: INTERFACE BREAKS FREE → WORD "PLAY"                                */}
        {/* ========================================================================= */}
        <div
          ref={playWordRef}
          className="absolute z-20 opacity-0 pointer-events-none flex items-center justify-center"
        >
          <h2 className="text-[clamp(4rem,18vw,12rem)] font-heading font-black tracking-tight text-[#FF6A1A] select-none">
            PLAY
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* ACT 6: KINETIC MINI-GAME COURSE (Rings, Obstacles, Checkpoints)            */}
        {/* ========================================================================= */}
        <div
          ref={gameCourseRef}
          className="absolute z-20 opacity-0 pointer-events-none w-full max-w-2xl h-80 flex items-center justify-between px-6 sm:px-12"
        >
          {/* Node 1: Target Ring Gate */}
          <div
            ref={gameRingRef}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-[#A90F24] flex items-center justify-center shadow-[0_0_25px_rgba(169,15,36,0.3)] transition-transform"
          >
            <div className="w-4 h-4 rounded-full bg-[#A90F24]" />
          </div>

          {/* Node 2: Rotating Diamond Obstacle */}
          <div
            ref={gameObstacleRef}
            className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center"
          >
            <div className="w-3 h-3 bg-[#D4AF37]" />
          </div>

          {/* Node 3: Twin Split Orbs */}
          <div ref={gameTwinOrbsRef} className="flex flex-col gap-8 items-center opacity-0">
            <div className="w-4 h-4 rounded-full bg-[#FF6A1A] shadow-md" />
            <div className="w-4 h-4 rounded-full bg-[#A90F24] shadow-md" />
          </div>

          {/* Node 4: Checkpoint Ring */}
          <div
            ref={gameCheckpointRef}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-[3px] border-[#151515] flex items-center justify-center transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-[#151515]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 7: THE SIGNAL MULTIPLIES (BUILD / PLAY / EXPERIENCE)                   */}
        {/* ========================================================================= */}
        <div
          ref={multiContainerRef}
          className="absolute z-20 opacity-0 pointer-events-none w-full max-w-4xl h-full flex flex-col md:flex-row items-center justify-around px-6 select-none"
        >
          <div
            ref={wordBuildRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#A90F24]"
          >
            BUILD
          </div>
          <div
            ref={wordPlayBranchRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#FF6A1A]"
          >
            PLAY
          </div>
          <div
            ref={wordExpRef}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#151515]"
          >
            EXPERIENCE
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACT 9: FINAL REVEAL — NEXTAURA STUDIOS WORDMARK & CTA                     */}
        {/* ========================================================================= */}
        <div
          ref={finalContainerRef}
          className="absolute z-30 opacity-0 pointer-events-none flex flex-col items-center justify-center text-center px-6 max-w-3xl select-none"
        >
          {/* Signal baseline expansion */}
          <div
            ref={finalBaselineRef}
            className="h-[3px] bg-gradient-to-r from-transparent via-[#A90F24] to-transparent w-0 opacity-0 mb-6"
          />

          {/* Studio Wordmark */}
          <div ref={finalWordmarkRef} className="space-y-1 mb-6">
            <h1 className="font-heading font-black text-[clamp(2.8rem,9.5vw,7rem)] tracking-tight text-[#151515] leading-none">
              NEXT<span className="solar-text-gradient">AURA</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.45em] text-[#D4AF37] font-bold uppercase">
              STUDIOS
            </p>
          </div>

          {/* Statement */}
          <p
            ref={finalStatementRef}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[#151515] tracking-tight max-w-xl mb-8 leading-snug"
          >
            BUILD SOMETHING PEOPLE WANT TO TOUCH.
          </p>

          {/* CTA Buttons */}
          <div ref={finalCtaRef} className="flex flex-col sm:flex-row items-center gap-4">
            <AuraButton href="/start-project" variant="primary" size="lg" showArrow>
              Start a Project
            </AuraButton>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#666] hover:text-[#151515] px-4 py-2 transition-colors uppercase font-medium"
            >
              The Studio <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
