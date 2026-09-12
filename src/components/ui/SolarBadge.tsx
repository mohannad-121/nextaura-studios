import React from "react";
import { cn } from "@/lib/utils";
import { ProjectStatus } from "@/types";

interface SolarBadgeProps {
  children?: React.ReactNode;
  variant?: "default" | "crimson" | "orange";
  status?: ProjectStatus;
  className?: string;
}

export function SolarBadge({
  children,
  variant = "default",
  status,
  className,
}: SolarBadgeProps) {
  if (status) {
    const statusStyles: Record<ProjectStatus, string> = {
      Released: "bg-emerald-500/10 text-emerald-800 border-emerald-500/20",
      "In Development": "bg-orange-500/10 text-[#FF6A1A] border-orange-500/25",
      Concept: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      "Coming Soon": "bg-amber-500/10 text-amber-700 border-amber-500/25",
    };

    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide",
          statusStyles[status],
          className
        )}
      >
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full animate-pulse",
            status === "Released" && "bg-emerald-500",
            status === "In Development" && "bg-[#FF6A1A]",
            status === "Concept" && "bg-purple-500",
            status === "Coming Soon" && "bg-amber-500"
          )}
        />
        {status}
      </span>
    );
  }

  const variantStyles = {
    default: "bg-black/5 text-[#151515] border-black/5",
    crimson: "bg-[#A90F24]/10 text-[#A90F24] border-[#A90F24]/20",
    orange: "bg-[#FF6A1A]/10 text-[#FF6A1A] border-[#FF6A1A]/25",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
