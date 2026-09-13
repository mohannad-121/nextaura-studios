"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SignalDotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "crimson" | "orange" | "dark";
  glow?: boolean;
}

export const SignalDot = forwardRef<HTMLDivElement, SignalDotProps>(
  ({ className, size = "md", variant = "crimson", glow = true }, ref) => {
    const sizeClasses = {
      sm: "w-2 h-2 sm:w-2.5 sm:h-2.5",
      md: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5",
      lg: "w-4 h-4 sm:w-5 sm:h-5",
    };

    const variantStyles = {
      crimson: {
        bg: "bg-[#A90F24]",
        glow: "shadow-[0_0_18px_rgba(169,15,36,0.6),0_0_35px_rgba(169,15,36,0.25)]",
      },
      orange: {
        bg: "bg-[#FF6A1A]",
        glow: "shadow-[0_0_18px_rgba(255,106,26,0.6),0_0_35px_rgba(255,106,26,0.25)]",
      },
      dark: {
        bg: "bg-[#151515]",
        glow: "shadow-[0_0_15px_rgba(21,21,21,0.4)]",
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-full transition-transform will-change-transform flex items-center justify-center pointer-events-none",
          sizeClasses[size],
          variantStyles[variant].bg,
          glow && variantStyles[variant].glow,
          className
        )}
      >
        <span className="w-1/3 h-1/3 rounded-full bg-white/70" />
      </div>
    );
  }
);

SignalDot.displayName = "SignalDot";
