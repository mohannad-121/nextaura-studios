"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AuraButton } from "@/components/ui/AuraButton";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8",
          isScrolled ? "py-3" : "py-5 sm:py-6"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between rounded-full transition-all duration-300 px-5 sm:px-7",
            isScrolled
              ? "bg-[#FFFDFC]/85 backdrop-blur-md border border-black/8 shadow-[0_8px_24px_rgba(21,21,21,0.04)] py-2.5"
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
                className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,106,26,0.35)]"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-tight text-[#151515] leading-none">
                NEXTAURA
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#A90F24] font-bold uppercase leading-tight mt-0.5">
                STUDIOS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/4 p-1 rounded-full border border-black/5">
            {NAV_ITEMS.map((item) => {
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

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <AuraButton href="/contact" variant="primary" size="sm" showArrow>
              Start a Project
            </AuraButton>
          </div>

          {/* Mobile Animated Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open mobile navigation menu"
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full border border-black/10 bg-white/80 active:scale-95 transition-all"
          >
            <span className="w-5 h-0.5 bg-[#151515] rounded-full transition-all" />
            <span className="w-3.5 h-0.5 bg-[#A90F24] rounded-full self-end mr-2.5 transition-all" />
          </button>
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
