"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight } from "lucide-react";
import { AuraButton } from "@/components/ui/AuraButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.studio, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 overflow-y-auto"
    >
      {/* Dynamic Solar Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#FF6A1A]/15 to-[#A90F24]/10 blur-3xl pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
              src="/brand/logo.png"
              alt="NextAura Studios Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,106,26,0.35)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl tracking-tight text-[#151515]">
              NEXT<span className="solar-text-gradient">AURA</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#FF6A1A] uppercase">
              STUDIOS
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageSwitcher variant="mobile" />
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-full border border-black/10 bg-white/80 flex items-center justify-center text-[#151515] hover:text-[#A90F24] hover:border-[#FF6A1A]/30 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Oversized Editorial Links */}
      <nav className="relative z-10 my-auto py-8 flex flex-col gap-5">
        {navLinks.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="group flex items-center justify-between text-3xl sm:text-4xl font-heading font-bold tracking-tight text-[#151515] hover:text-[#A90F24] transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-[#969490] group-hover:text-[#FF6A1A] transition-colors">
                  0{idx + 1}
                </span>
                <span className={isActive ? "text-[#A90F24]" : ""}>{link.label}</span>
              </div>
              <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 rtl:group-hover:translate-x-0 rtl:-scale-x-100 transition-all duration-300 text-[#FF6A1A]" />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Action and Studio Ecosystem note */}
      <div className="relative z-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <AuraButton href="/start-project" onClick={onClose} variant="primary" showArrow className="w-full sm:w-auto">
          {t.nav.startProject}
        </AuraButton>

        <div className="text-xs text-[#666462]">
          <p className="font-medium text-[#151515]">NEXT<span className="solar-text-gradient font-bold">AURA</span> STUDIOS</p>
          <p className="text-[11px] text-[#969490]">{t.nav.partOfEcosystem}</p>
        </div>
      </div>
    </div>
  );
}
