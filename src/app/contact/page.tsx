"use client";

import React, { useState } from "react";
import { AuraButton } from "@/components/ui/AuraButton";
import { CheckCircle2, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  "Mobile App",
  "Game",
  "Digital Product",
  "Interactive Experience",
  "Other",
];

const BUDGET_RANGES = ["< $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Mobile App",
    budget: "$25k - $50k",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = "Please provide at least a brief message (15+ chars).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Frontend interaction simulation & clear TODO integration point
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // NOTE FOR BACKEND INTEGRATION:
      // Connect to your production API endpoint (e.g., /api/contact or Resend/SendGrid)
      console.log("Inquiry payload received on client:", formData);
    }, 800);
  };

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              Inquiry / Collaboration
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.5rem,6vw,5rem)] tracking-tight text-[#151515] leading-[1.05] uppercase">
            Let’s create something people will remember.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#666462] leading-relaxed">
            Have a game mechanic, mobile application, or digital product in mind? Send us a brief
            overview. We evaluate every inquiry with our creative and engineering leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Studio Contact Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-orange-50/20 border border-black/10 overflow-hidden shadow-xs">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6A1A] to-[#A90F24]" aria-hidden="true" />
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] font-bold block mb-4">
                  Direct Channel
                </span>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-[#969490] block">General & Project Inquiries</span>
                    <a
                      href="mailto:hello@nextaurastudios.com"
                      className="font-heading font-bold text-lg text-[#151515] hover:text-[#A90F24] transition-colors flex items-center gap-2 mt-1"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#A90F24]/10 text-[#A90F24] flex items-center justify-center border border-[#A90F24]/20 shadow-xs">
                        <Mail className="w-4 h-4" />
                      </div>
                      hello@nextaurastudios.com
                    </a>
                  </div>

                  <div className="pt-4 border-t border-black/8">
                    <span className="text-xs text-[#969490] block">Studio Location</span>
                    <span className="text-sm font-semibold text-[#151515] mt-1 block">
                      Distributed Global Studio
                    </span>
                    <span className="text-xs text-[#666462]">Operating in UTC / EST / CET</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#A90F24]/10 via-[#FF6A1A]/5 to-[#FFB24A]/10 border border-[#A90F24]/20 overflow-hidden shadow-xs">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#FFB24A]" aria-hidden="true" />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2 text-[#A90F24]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Our Response Time
                  </span>
                </div>
                <p className="text-xs text-[#666462] leading-relaxed">
                  We review submissions within 24 to 48 business hours. If your concept aligns with
                  our active production pipeline, we will schedule an introductory technical discovery
                  session.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="p-10 sm:p-14 rounded-3xl bg-white border border-emerald-500/30 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151515]">
                  Inquiry Transmitted.
                </h3>
                <p className="mt-3 text-sm text-[#666462] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#151515]">{formData.name}</span>.
                  Your brief has been staged on our studio intake board. We will reach out to{" "}
                  <span className="font-semibold text-[#151515]">{formData.email}</span> shortly.
                </p>
                <div className="mt-8">
                  <AuraButton
                    variant="secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "Mobile App",
                        budget: "$25k - $50k",
                        message: "",
                      });
                    }}
                  >
                    Submit Another Brief
                  </AuraButton>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl bg-gradient-to-b from-white via-[#FFFDFC] to-orange-50/20 border border-black/10 overflow-hidden shadow-xs space-y-8 relative"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#FFB24A]" aria-hidden="true" />
                <div className="p-8 sm:p-12 space-y-8">
                {/* 1. Project Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-3">
                    Project Domain <span className="text-[#A90F24]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={cn(
                            "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border",
                            isSelected
                              ? "bg-[#151515] text-white border-[#151515]"
                              : "bg-[#FAF9F6] text-[#666462] border-black/8 hover:text-[#151515] hover:border-black/20"
                          )}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Basic Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-2"
                    >
                      Your Name <span className="text-[#A90F24]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Vance"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all",
                        errors.name ? "border-red-500" : "border-black/10"
                      )}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-600 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-2"
                    >
                      Email Address <span className="text-[#A90F24]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all",
                        errors.email ? "border-red-500" : "border-black/10"
                      )}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* 3. Company & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-2"
                    >
                      Company / Studio / Brand
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Interactive"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/10 text-sm text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-2">
                      Estimated Budget Range (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border border-black/10 text-sm text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all"
                    >
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 4. Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-widest text-[#151515] font-bold mb-2"
                  >
                    Project Concept & Vision <span className="text-[#A90F24]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what you want to build, target platforms, timeline, and key mechanics..."
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-[#FAF9F6] border text-sm text-[#151515] focus:outline-none focus:ring-2 focus:ring-[#FF6A1A]/40 transition-all resize-none",
                      errors.message ? "border-red-500" : "border-black/10"
                    )}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-600 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Trigger */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <AuraButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    showArrow
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Transmitting Brief..." : "Send Project Brief"}
                  </AuraButton>

                  <span className="text-xs font-mono text-[#969490]">
                    Direct transmission · No spam guarantee
                  </span>
                </div>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
