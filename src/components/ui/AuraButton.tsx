"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuraButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function AuraButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  showArrow = false,
  onClick,
  type = "button",
  disabled = false,
}: AuraButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider font-semibold",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-semibold tracking-wide",
  };

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 overflow-hidden select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A1A] focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-[#A90F24] hover:bg-[#B5122B] text-white shadow-sm hover:shadow-[0_8px_25px_rgba(255,106,26,0.3)] active:scale-[0.98]",
    secondary:
      "bg-white/80 hover:bg-white text-[#151515] border border-black/10 hover:border-[#FF6A1A]/40 shadow-xs hover:shadow-[0_4px_16px_rgba(21,21,21,0.06)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-[#151515] hover:text-[#A90F24] hover:bg-black/5 active:scale-[0.98]",
  };

  const content = (
    <>
      {/* Traveling solar energy highlight on primary button */}
      {variant === "primary" && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent solar-sweep-anim opacity-80"
          aria-hidden="true"
        />
      )}

      {/* Subtle warm hover wash on secondary */}
      {variant === "secondary" && (
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FF6A1A]/0 via-[#FF6A1A]/5 to-[#A90F24]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], "group", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        "group disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
    >
      {content}
    </button>
  );
}
