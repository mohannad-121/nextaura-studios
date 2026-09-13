"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AuraButton } from "@/components/ui/AuraButton";
import { cn } from "@/lib/utils";

// Official Authentic SVG Flags
function JordanFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={cn("w-9 h-auto rounded-md shadow-xs border border-black/10 shrink-0", className)}
      aria-label="Flag of Jordan"
    >
      <rect width="120" height="20" fill="#000000" />
      <rect y="20" width="120" height="20" fill="#FFFFFF" />
      <rect y="40" width="120" height="20" fill="#007A3D" />
      <polygon points="0,0 60,30 0,60" fill="#CE1126" />
      {/* 7-pointed white star */}
      <polygon
        points="
          20,24 21.2,27.5 24.8,26.5 22.8,29.5 25.5,32 21.8,32.5 22,36 
          19.2,33.5 17,35.8 17.8,32.2 14.5,31.2 17.5,29 15.8,26 19,27.2
        "
        fill="#FFFFFF"
      />
    </svg>
  );
}

function UAEFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={cn("w-9 h-auto rounded-md shadow-xs border border-black/10 shrink-0", className)}
      aria-label="Flag of United Arab Emirates"
    >
      <rect x="30" y="0" width="90" height="20" fill="#00732F" />
      <rect x="30" y="20" width="90" height="20" fill="#FFFFFF" />
      <rect x="30" y="40" width="90" height="20" fill="#000000" />
      <rect x="0" y="0" width="30" height="60" fill="#CE1126" />
    </svg>
  );
}

// Official Platform Icons
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("w-6 h-6", className)}
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
      className={cn("w-6 h-6", className)}
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

export default function ContactPage() {
  const { t } = useLanguage();

  const contactData = {
    phoneDisplay: "+962 79 919 5498",
    phoneHref: "tel:+962799195498",
    whatsappHref: "https://wa.me/962799195498",
    email: "info@next-aura-ai.com",
    emailHref: "mailto:info@next-aura-ai.com",
    igAi: {
      handle: "@nextauraai",
      href: "https://www.instagram.com/nextauraai/",
    },
    igStudios: {
      handle: "@nextaura.studios",
      href: "https://www.instagram.com/nextaura.studios/",
    },
  };

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Editorial Directory Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              {t.contact.tag}
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.6rem,6.8vw,5.5rem)] tracking-tight text-[#151515] leading-[1.04] uppercase">
            {t.contact.titleLine1}
            <br />
            <span className="solar-text-gradient">{t.contact.titleLine2}</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#666462] leading-relaxed max-w-2xl font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Directory Structure Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Main Communication Channels Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* ROW 1: PHONE */}
            <a
              href={contactData.phoneHref}
              className="group block p-6 sm:p-7 rounded-2xl bg-white border border-black/8 hover:border-[#A90F24]/40 shadow-xs hover:shadow-[0_12px_32px_-8px_rgba(169,15,36,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-black/8 flex items-center justify-center text-[#151515] group-hover:bg-[#A90F24] group-hover:text-white group-hover:border-[#A90F24] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#969490] font-bold block mb-1">
                      {t.contact.phoneLabel}
                    </span>
                    <bdo dir="ltr" className="font-heading font-black text-xl sm:text-2xl text-[#151515] tracking-tight block">
                      {contactData.phoneDisplay}
                    </bdo>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center text-[#969490] group-hover:text-[#A90F24] group-hover:border-[#A90F24]/30 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </div>
              </div>
            </a>

            {/* ROW 2: WHATSAPP */}
            <a
              href={contactData.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-white via-[#FFFDFC] to-emerald-50/30 border border-black/8 hover:border-emerald-500/40 shadow-xs hover:shadow-[0_12px_32px_-8px_rgba(37,211,102,0.2)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/25 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-700 font-bold">
                        {t.contact.whatsappLabel}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <bdo dir="ltr" className="font-heading font-black text-xl sm:text-2xl text-[#151515] tracking-tight block">
                      {contactData.phoneDisplay}
                    </bdo>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-xs font-mono font-bold tracking-wider uppercase text-emerald-700">
                    {t.contact.whatsappCta}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                  </div>
                </div>
              </div>
            </a>

            {/* ROW 3: EMAIL */}
            <a
              href={contactData.emailHref}
              className="group block p-6 sm:p-7 rounded-2xl bg-white border border-black/8 hover:border-[#FF6A1A]/40 shadow-xs hover:shadow-[0_12px_32px_-8px_rgba(255,106,26,0.15)] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF9F6] border border-black/8 flex items-center justify-center text-[#151515] group-hover:bg-[#FF6A1A] group-hover:text-white group-hover:border-[#FF6A1A] transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#969490] font-bold block mb-1">
                      {t.contact.emailLabel}
                    </span>
                    <span className="font-heading font-bold text-[15px] sm:text-xl text-[#151515] tracking-tight block break-all sm:break-normal">
                      {contactData.email}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center text-[#969490] group-hover:text-[#FF6A1A] group-hover:border-[#FF6A1A]/30 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                </div>
              </div>
            </a>

            {/* ROW 4 & 5: INSTAGRAM TWO DISTINCT PROFILES */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-rose-50/20 border border-black/8 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-black/8 pb-3">
                <div className="flex items-center gap-2 text-[#E1306C]">
                  <InstagramIcon className="w-5 h-5" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#151515]">
                    {t.contact.instagramLabel}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#969490] uppercase tracking-wider">
                  Official Channels
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {/* Account 1: NEXTAURA AI */}
                <a
                  href={contactData.igAi.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/ig flex items-center justify-between p-4 rounded-xl bg-[#FAF9F6] border border-black/6 hover:border-[#E1306C]/40 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white flex items-center justify-center shadow-xs">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#969490] font-bold block">
                        {t.contact.igAiTitle}
                      </span>
                      <span className="text-sm font-heading font-bold text-[#151515] group-hover/ig:text-[#E1306C] transition-colors dir-ltr block">
                        {contactData.igAi.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#969490] group-hover/ig:text-[#E1306C] transition-transform duration-300 group-hover/ig:translate-x-0.5 group-hover/ig:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover/ig:-translate-x-0.5" />
                </a>

                {/* Account 2: NEXTAURA STUDIOS */}
                <a
                  href={contactData.igStudios.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/ig flex items-center justify-between p-4 rounded-xl bg-[#FAF9F6] border border-black/6 hover:border-[#A90F24]/40 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A90F24] via-[#D52632] to-[#FF6A1A] text-white flex items-center justify-center shadow-xs">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#969490] font-bold block">
                        {t.contact.igStudiosTitle}
                      </span>
                      <span className="text-sm font-heading font-bold text-[#151515] group-hover/ig:text-[#A90F24] transition-colors dir-ltr block">
                        {contactData.igStudios.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#969490] group-hover/ig:text-[#A90F24] transition-transform duration-300 group-hover/ig:translate-x-0.5 group-hover/ig:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover/ig:-translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Geographic Presence & Studio Assurance */}
          <div className="lg:col-span-5 space-y-6">
            {/* OUR PRESENCE */}
            <div className="p-7 sm:p-8 rounded-2xl bg-white border border-black/10 shadow-xs relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#FF6A1A] to-[#A90F24] absolute top-0 left-0 right-0" aria-hidden="true" />
              
              <div className="flex items-center gap-2 mb-2 pt-2 text-[#A90F24]">
                <MapPin className="w-4 h-4" />
                <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#151515]">
                  {t.contact.presenceTitle}
                </h2>
              </div>
              <p className="text-xs text-[#666462] mb-6 leading-relaxed">
                {t.contact.presenceSubtitle}
              </p>

              <div className="space-y-4">
                {/* Location 1: Jordan */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-black/6 flex items-center justify-between gap-4 transition-colors hover:bg-white hover:border-[#A90F24]/30">
                  <div className="flex items-center gap-3.5">
                    <JordanFlag />
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#151515]">
                        {t.contact.jordanTitle}
                      </h3>
                      <p className="text-xs text-[#666462]">
                        {t.contact.jordanDesc}
                      </p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                </div>

                {/* Location 2: UAE - Dubai */}
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-black/6 flex items-center justify-between gap-4 transition-colors hover:bg-white hover:border-[#FF6A1A]/30">
                  <div className="flex items-center gap-3.5">
                    <UAEFlag />
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#151515]">
                        {t.contact.uaeTitle}
                      </h3>
                      <p className="text-xs text-[#666462]">
                        {t.contact.uaeDesc}
                      </p>
                    </div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-black/8 flex items-center gap-2.5 text-xs text-[#969490]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span>{t.contact.directLineNote}</span>
              </div>
            </div>

            {/* Quick Link Card to /start-project */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#151515] to-[#252525] text-white shadow-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF6A1A]/20 via-[#A90F24]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFB24A] font-bold block mb-2">
                  {t.contact.startProjectBannerTitle}
                </span>
                <p className="text-sm text-[#ECECEA] mb-6 leading-relaxed">
                  {t.contact.startProjectBannerDesc}
                </p>
                <AuraButton href="/start-project" variant="primary" size="md" showArrow>
                  {t.contact.startProjectBannerCta}
                </AuraButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
