"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.487 15.527 3.336 17L2.062 21.651C2.012 21.834 2.066 22.03 2.203 22.164C2.339 22.298 2.536 22.348 2.718 22.293L7.26 20.916C8.683 21.619 10.297 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM6.741 18.067L6.447 18.243C5.228 18.973 3.826 19.467 3.826 19.467L4.764 16.035L4.57 15.71C3.805 14.428 3.388 12.946 3.388 11.458C3.388 6.786 7.247 2.977 12 2.977C16.753 2.977 20.612 6.786 20.612 11.458C20.612 16.13 16.753 19.939 12 19.939C10.457 19.939 8.928 19.497 7.603 18.665L7.284 18.465L6.741 18.067ZM16.368 14.341C16.147 14.23 15.062 13.696 14.86 13.623C14.658 13.549 14.51 13.513 14.363 13.734C14.216 13.955 13.792 14.453 13.663 14.601C13.535 14.748 13.406 14.767 13.185 14.656C12.964 14.545 12.253 14.312 11.411 13.561C10.755 12.976 10.312 12.253 10.183 12.032C10.054 11.811 10.17 11.691 10.28 11.581C10.38 11.482 10.501 11.323 10.612 11.194C10.722 11.065 10.759 10.973 10.833 10.825C10.906 10.678 10.87 10.549 10.814 10.438C10.759 10.328 10.317 9.24 10.133 8.798C9.953 8.367 9.77 8.426 9.632 8.419C9.499 8.412 9.345 8.412 9.19 8.412C9.035 8.412 8.784 8.47 8.57 8.703C8.356 8.936 7.755 9.499 7.755 10.654C7.755 11.808 8.595 12.923 8.713 13.081C8.831 13.239 10.366 15.602 12.719 16.617C13.279 16.858 13.715 17.003 14.056 17.111C14.618 17.29 15.13 17.265 15.534 17.204C15.986 17.137 16.924 16.637 17.119 16.084C17.315 15.531 17.315 15.052 17.256 14.952C17.197 14.853 17.049 14.794 16.829 14.683L16.368 14.341Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.studio, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.nav.startProject, href: "/start-project" },
  ];

  const directChannels = [
    {
      label: "info@next-aura-ai.com",
      href: "mailto:info@next-aura-ai.com",
      icon: <Mail className="w-3.5 h-3.5" />,
    },
    {
      label: "+962 79 919 5498",
      href: "https://wa.me/962799195498",
      icon: <WhatsAppIcon className="w-3.5 h-3.5" />,
    },
    {
      label: "@nextauraai",
      href: "https://www.instagram.com/nextauraai/",
      icon: <InstagramIcon className="w-3.5 h-3.5" />,
    },
    {
      label: "@nextaura.studios",
      href: "https://www.instagram.com/nextaura.studios/",
      icon: <InstagramIcon className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <footer className="relative bg-[#F4F4F2] border-t border-black/8 pt-16 sm:pt-24 pb-12 overflow-hidden">
      {/* Subtle Animated Solar Ambient Glow behind footer wordmark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-t from-[#FF6A1A]/15 via-[#A90F24]/10 to-transparent blur-3xl opacity-75"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Top Section: Quick Links & Studio Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-black/8">
          {/* Studio Brand Statement */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A90F24]" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
                  {t.footer.tag}
                </span>
              </div>
              <p className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#151515] max-w-md leading-snug">
                {t.footer.statement}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-[#666462] px-3 py-1.5 rounded-full bg-black/4 border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A1A] animate-ping" />
                {t.footer.status}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#969490] mb-4">
              {t.footer.exploreTitle}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
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

          {/* Direct Channels */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#969490] mb-4">
              {t.footer.connectTitle}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {directChannels.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#666462] hover:text-[#151515] transition-colors duration-200"
                  >
                    <span className="text-[#151515] group-hover:text-[#A90F24] transition-colors">
                      {item.icon}
                    </span>
                    <span className="dir-ltr">{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5 transition-all text-[#FF6A1A]" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-black/8 text-xs text-[#969490]">
              <span className="font-mono uppercase tracking-widest block text-[10px] text-[#A90F24] font-bold mb-1">
                {t.footer.presenceTitle}
              </span>
              <span className="text-[#666462] font-medium">{t.footer.locations}</span>
            </div>
          </div>
        </div>

        {/* Sculptural Giant Wordmark */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <h2 className="font-heading font-black text-[clamp(2.8rem,11.5vw,11.5rem)] tracking-tighter leading-none text-[#151515]">
            NEXT<span className="solar-text-gradient">AURA</span>
          </h2>
          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-2">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-1 max-w-xs" />
            <span className="font-serif-luxury italic text-sm sm:text-lg tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              {t.footer.luxuryTagline}
            </span>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-1 max-w-xs" />
          </div>
        </div>

        {/* Copyright & Ecosystem Statement */}
        <div className="pt-8 border-t border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666462]">
          <p>© {currentYear} {t.footer.copyright}</p>
          <p className="font-medium text-[#151515]">
            {t.footer.ecosystemPart}
          </p>
        </div>
      </div>
    </footer>
  );
}
