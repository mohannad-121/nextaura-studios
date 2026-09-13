"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "navbar" | "mobile" | "compact";
}

export function LanguageSwitcher({
  className,
  variant = "navbar",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  if (variant === "mobile") {
    return (
      <div
        className={cn(
          "inline-flex items-center p-1 rounded-full bg-white/90 border border-black/10 shadow-xs",
          className
        )}
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          aria-label="Switch to English"
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200",
            language === "en"
              ? "bg-[#151515] text-white shadow-xs"
              : "text-[#666462] hover:text-[#151515]"
          )}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage("ar")}
          aria-label="التبديل إلى اللغة العربية"
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200",
            language === "ar"
              ? "bg-gradient-to-r from-[#A90F24] to-[#FF6A1A] text-white shadow-xs"
              : "text-[#666462] hover:text-[#151515]"
          )}
        >
          العربية
        </button>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center p-0.5 rounded-full bg-black/5 border border-black/8 backdrop-blur-xs select-none",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="Switch to English"
        className={cn(
          "px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider transition-all duration-200",
          language === "en"
            ? "bg-[#151515] text-white shadow-xs"
            : "text-[#666462] hover:text-[#151515]"
        )}
      >
        EN
      </button>
      <span className="text-[#969490]/40 text-[10px] px-0.5">/</span>
      <button
        type="button"
        onClick={() => setLanguage("ar")}
        aria-label="التبديل إلى العربية"
        className={cn(
          "px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider transition-all duration-200",
          language === "ar"
            ? "bg-gradient-to-r from-[#A90F24] to-[#FF6A1A] text-white shadow-xs"
            : "text-[#666462] hover:text-[#151515]"
        )}
      >
        AR
      </button>
    </div>
  );
}
