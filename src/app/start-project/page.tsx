"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Sparkles, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AuraButton } from "@/components/ui/AuraButton";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("w-5 h-5", className)}
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

export default function StartProjectPage() {
  const { t, isRTL } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectType: "Mobile App",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypeOptions = [
    { key: "Mobile App", label: t.startProject.projectTypes.mobileApp },
    { key: "Game", label: t.startProject.projectTypes.game },
    { key: "Digital Product", label: t.startProject.projectTypes.digitalProduct },
    { key: "Interactive Experience", label: t.startProject.projectTypes.interactiveExp },
    { key: "Other", label: t.startProject.projectTypes.other },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};

    // Required: Name
    if (!formData.name.trim()) {
      errs.name = t.startProject.errors.nameRequired;
    }

    // Required: Phone (mandatory)
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = t.startProject.errors.phoneRequired;
    }

    // Optional: Email (only validated if entered)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = t.startProject.errors.emailInvalid;
    }

    // Required: Project Idea / Description
    if (!formData.idea.trim() || formData.idea.trim().length < 15) {
      errs.idea = t.startProject.errors.ideaRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header Banner */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF6A1A]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              {t.startProject.tag}
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.6rem,6.8vw,5.5rem)] tracking-tight text-[#151515] leading-[1.04] uppercase">
            {t.startProject.titleLine1}
            <br />
            <span className="solar-text-gradient">{t.startProject.titleLine2}</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-[#666462] leading-relaxed max-w-2xl font-normal">
            {t.startProject.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Reassurance, 1-Hour Response Box, & Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            {/* RESPONSE TIME BOX (Max 1 Hour) */}
            <div className="p-7 rounded-2xl bg-gradient-to-br from-white via-[#FFFDFC] to-orange-50/30 border border-[#D4AF37]/35 shadow-xs relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6A1A] via-[#A90F24] to-[#D4AF37] absolute top-0 left-0 right-0" aria-hidden="true" />
              
              <div className="flex items-center gap-2 mb-3 pt-2 text-[#A90F24]">
                <Clock className="w-5 h-5 text-[#FF6A1A]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A90F24]">
                  {t.startProject.responseBoxTitle}
                </span>
              </div>

              <p className="text-sm font-semibold text-[#151515] mb-2">
                {t.startProject.responseBoxDesc}
              </p>

              <div className="mt-4 pt-4 border-t border-black/8 flex items-center gap-2 text-xs text-[#666462]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active studio queue open</span>
              </div>
            </div>

            {/* Direct Reassurance Card */}
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#151515]">
                <Sparkles className="w-4 h-4 text-[#FF6A1A]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  {t.startProject.reviewBoxTitle}
                </span>
              </div>
              <p className="text-xs text-[#666462] leading-relaxed">
                {t.startProject.reviewBoxDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form or In-Place Success */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="p-8 sm:p-14 rounded-3xl bg-white border border-emerald-500/30 shadow-md text-center animate-in fade-in zoom-in-95 duration-400">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-4xl text-[#151515] tracking-tight">
                  {t.startProject.successTitle}
                </h3>
                <p className="mt-3 text-base text-[#666462] max-w-md mx-auto leading-relaxed">
                  {t.startProject.successDesc}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <AuraButton
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        company: "",
                        projectType: "Mobile App",
                        budget: "",
                        idea: "",
                      });
                      setErrors({});
                    }}
                  >
                    {t.startProject.submitAnother}
                  </AuraButton>
                  <a
                    href="https://wa.me/962799195498"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 font-semibold text-sm transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                    <span>{t.startProject.whatsappAltButton}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-xs relative"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#D4AF37]" aria-hidden="true" />
                
                <div className="p-8 sm:p-12 space-y-8">
                  {/* 1. Project Domain Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-3">
                      {t.startProject.projectDomainLabel} <span className="text-[#A90F24]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypeOptions.map((opt) => {
                        const isSelected = formData.projectType === opt.key;
                        return (
                          <button
                            type="button"
                            key={opt.key}
                            onClick={() => setFormData({ ...formData, projectType: opt.key })}
                            className={cn(
                              "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border",
                              isSelected
                                ? "bg-[#151515] text-white border-[#151515] shadow-xs"
                                : "bg-[#FAF9F6] text-[#666462] border-black/8 hover:text-[#151515] hover:border-black/20"
                            )}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Full Name & Phone Number (BOTH REQUIRED) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                        >
                          {t.startProject.fullNameLabel} <span className="text-[#A90F24]">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-[#A90F24] font-semibold uppercase">
                          {t.startProject.fullNameRequired}
                        </span>
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder={t.startProject.fullNamePlaceholder}
                        className={cn(
                          "w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all",
                          errors.name ? "border-red-500 bg-red-50/20" : "border-black/10"
                        )}
                      />
                      {errors.name && (
                        <span className="text-xs text-red-600 mt-1.5 block">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="phone"
                          className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                        >
                          {t.startProject.phoneLabel} <span className="text-[#A90F24]">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-[#A90F24] font-semibold uppercase">
                          {t.startProject.phoneRequired}
                        </span>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        placeholder={t.startProject.phonePlaceholder}
                        dir="ltr"
                        className={cn(
                          "w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all text-left",
                          errors.phone ? "border-red-500 bg-red-50/20" : "border-black/10"
                        )}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-600 mt-1.5 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* 3. Email (OPTIONAL) & Company (OPTIONAL) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                        >
                          {t.startProject.emailLabel}
                        </label>
                        <span className="text-[10px] font-mono text-[#969490] uppercase">
                          {t.startProject.emailOptional}
                        </span>
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder={t.startProject.emailPlaceholder}
                        className={cn(
                          "w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all",
                          errors.email ? "border-red-500 bg-red-50/20" : "border-black/10"
                        )}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-600 mt-1.5 block">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label
                          htmlFor="company"
                          className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                        >
                          {t.startProject.companyLabel}
                        </label>
                        <span className="text-[10px] font-mono text-[#969490] uppercase">
                          {t.startProject.companyOptional}
                        </span>
                      </div>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.startProject.companyPlaceholder}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border border-black/10 text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* 4. Expected Budget (FREE-TEXT INPUT - NO DROPDOWN) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="budget"
                        className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                      >
                        {t.startProject.budgetLabel}
                      </label>
                      <span className="text-[10px] font-mono text-[#969490] uppercase">
                        {t.startProject.budgetOptional}
                      </span>
                    </div>
                    <input
                      id="budget"
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder={t.startProject.budgetPlaceholder}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border border-black/10 text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all"
                    />
                  </div>

                  {/* 5. Project Idea / Description (REQUIRED) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="idea"
                        className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold"
                      >
                        {t.startProject.projectIdeaLabel} <span className="text-[#A90F24]">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-[#A90F24] font-semibold uppercase">
                        {t.startProject.projectIdeaRequired}
                      </span>
                    </div>
                    <textarea
                      id="idea"
                      rows={5}
                      value={formData.idea}
                      onChange={(e) => {
                        setFormData({ ...formData, idea: e.target.value });
                        if (errors.idea) setErrors({ ...errors, idea: "" });
                      }}
                      placeholder={t.startProject.projectIdeaPlaceholder}
                      className={cn(
                        "w-full px-4 py-3.5 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] placeholder:text-[#969490] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all resize-none leading-relaxed",
                        errors.idea ? "border-red-500 bg-red-50/20" : "border-black/10"
                      )}
                    />
                    {errors.idea && (
                      <span className="text-xs text-red-600 mt-1.5 block">{errors.idea}</span>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <AuraButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? t.startProject.submittingButton : t.startProject.submitButton}
                    </AuraButton>

                    <span className="text-xs font-mono text-[#969490]">
                      {t.startProject.directNote}
                    </span>
                  </div>
                </div>
              </form>
            )}

            {/* SECONDARY WHATSAPP ALTERNATIVE */}
            <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#151515]">
                    {t.startProject.whatsappAltTitle}
                  </h4>
                  <p className="text-xs text-[#666462]">
                    {t.startProject.whatsappAltSubtitle}
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/962799195498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider transition-all duration-300 shadow-xs hover:shadow-md shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{t.startProject.whatsappAltButton}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
