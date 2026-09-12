"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  const cursorX = useSpring(0, { damping: 28, stiffness: 220, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 220, mass: 0.5 });

  useEffect(() => {
    // Only enable if high precision pointer (mouse) and not touch
    const checkFinePointer = () => {
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsPointerDevice(hasFinePointer && !prefersReducedMotion);
    };

    checkFinePointer();

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", checkFinePointer);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkFinePointer);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isPointerDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Solar Aura ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#FF6A1A]/35 bg-[#FF6A1A]/10 pointer-events-none transition-[width,height] duration-200"
      />
      {/* Precision crimson center dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#A90F24] pointer-events-none"
      />
    </div>
  );
}
