"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AuraButton } from "@/components/ui/AuraButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // Reveal navbar only after scrolling ~220px on Home page, or 20px on other pages
      const threshold = pathname === "/" ? 220 : 20;
      setIsScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.studio, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // On initial SSR and on Home page before scrolling, navbar is completely hidden
  const isHome = !mounted || pathname === "/" || pathname === "";
  const shouldShowNav = !isHome || isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-4 sm:px-8",
          isScrolled ? "py-2 sm:py-2.5" : "py-4 sm:py-5",
          shouldShowNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "max-w-6xl mx-auto flex items-center justify-between rounded-full transition-all duration-500 px-4 sm:px-6",
            isScrolled
              ? "bg-[#FFFDFC]/95 backdrop-blur-xl border border-[#D4AF37]/35 shadow-[0_10px_30px_-5px_rgba(212,175,55,0.15),0_0_20px_rgba(169,15,36,0.1)] py-2"
              : "bg-transparent border border-transparent py-1"
          )}
        >
          {/* Brand Wordmark & Official Emblem */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/brand/logo.png"
                alt="NextAura Studios Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-[#151515] leading-none">
                NEXT<span className="solar-text-gradient">AURA</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#D4AF37] font-bold uppercase leading-tight mt-0.5">
                STUDIOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/4 p-1 rounded-full border border-black/5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 select-none",
                    isActive
                      ? "text-white bg-[#151515] shadow-xs"
                      : "text-[#666462] hover:text-[#151515] hover:bg-black/4"
                  )}
                >
                  {isActive && (
                    <span
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF6A1A]"
                      aria-hidden="true"
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Language Switcher & Start a Project CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <AuraButton href="/start-project" variant="primary" size="sm" showArrow>
              {t.nav.startProject}
            </AuraButton>
          </div>

          {/* Mobile Actions: Language Switcher & Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-full border border-black/10 bg-white/80 active:scale-95 transition-all"
            >
              <span className="w-4.5 h-0.5 bg-[#151515] rounded-full transition-all" />
              <span className="w-3 h-0.5 bg-[#A90F24] rounded-full self-end mr-2 transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
