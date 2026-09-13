import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Selected Works", href: "/projects" },
  { label: "The Studio", href: "/about" },
  { label: "Collaborate", href: "/contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://linkedin.com", isExternal: true },
  { label: "X / Twitter", href: "https://x.com", isExternal: true },
  { label: "Instagram", href: "https://instagram.com", isExternal: true },
  { label: "GitHub", href: "https://github.com", isExternal: true },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F4F4F2] border-t border-black/8 pt-16 sm:pt-24 pb-12 overflow-hidden">
      {/* Subtle Animated Solar Ambient Glow behind footer wordmark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-t from-[#FF6A1A]/15 via-[#A90F24]/10 to-transparent blur-3xl opacity-75"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Section: Quick Links & Studio Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-black/8">
          {/* Studio Brand Statement */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24]" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
                  Creative Technology & Entertainment
                </span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#151515] max-w-md leading-snug">
                We build what people want to play, use and remember.
              </p>
            </div>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#666462] px-3 py-1.5 rounded-full bg-black/4 border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A1A] animate-ping" />
                Available for selected product & game collaborations
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#969490] mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#151515] hover:text-[#A90F24] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#969490] mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#666462] hover:text-[#151515] transition-colors duration-200"
                  >
                    {social.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#FF6A1A]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sculptural Giant Wordmark */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <h2 className="font-heading font-black text-[clamp(2.8rem,11.5vw,11.5rem)] tracking-tighter leading-none text-[#151515]">
            NEXT<span className="solar-text-gradient">AURA</span>
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-1">
            <div className="h-px bg-gradient-to-r from-transparent via-[#FF6A1A]/40 to-transparent flex-1 max-w-xs" />
            <span className="font-mono text-xs sm:text-base tracking-[0.4em] uppercase text-[#A90F24] font-bold">
              STUDIOS
            </span>
            <div className="h-px bg-gradient-to-r from-transparent via-[#FF6A1A]/40 to-transparent flex-1 max-w-xs" />
          </div>
        </div>

        {/* Copyright & Ecosystem Statement */}
        <div className="pt-8 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666462]">
          <p>© {currentYear} NextAura Studios. All rights reserved.</p>
          <p className="font-medium text-[#151515]">
            Part of the <span className="font-bold text-[#151515]">NEXT<span className="solar-text-gradient">AURA</span></span> ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
