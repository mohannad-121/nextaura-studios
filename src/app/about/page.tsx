"use client";

import React from "react";
import { AuraButton } from "@/components/ui/AuraButton";
import { Flame, Compass, Cpu, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const content = {
    en: {
      tag: "About NextAura Studios",
      title: "A studio for things that move, play & connect.",
      subtitle:
        "NextAura Studios explores the intersection of creative software and interactive entertainment. We build products people genuinely want to touch, play, and remember.",
      premiseTag: "Core Premise",
      premiseTitle: "Software is not passive decor.",
      premiseBody:
        "Most digital products are designed like paperwork with glass surfaces. We treat every screen as an instrument—where visual temperature, physical resistance, sound, and kinetic motion form an undivided sensory whole.",
      ecoTag: "Ecosystem Context",
      ecoBody: (
        <>
          Operating as the dedicated entertainment and consumer product arm of the{" "}
          <span className="font-bold text-[#A90F24]">NextAura</span> ecosystem, we combine
          boutique creative agility with robust technical foundations.
        </>
      ),
      c1Num: "01 / Who We Are",
      c1Body:
        "We are a nimble team of game engineers, creative technologists, interaction architects, and graphic artists. We reject the divide between “serious utility” and “playful entertainment.” A mobile app should have the responsiveness of a game; a game should possess the design discipline of a world-class instrument.",
      c2Num: "02 / The Solar Aura Philosophy",
      c2Body:
        "Solar Aura is our guiding visual and behavioral dogma. It stands for warmth without clutter, radiant energy inside razor-sharp architectural restraint, and visual rhythm that feels powered by solar physics rather than arbitrary digital decoration.",
      c3Num: "03 / Creative Technology",
      c3Body:
        "We write native Swift, Metal shaders, Kotlin graphics pipelines, and WebGPU compute layers. We avoid heavy bloated black boxes. By writing close to the metal, our products maintain buttery 120 FPS fluency and sip battery sparingly.",
      c4Num: "04 / Future Horizons",
      c4Body:
        "As spatial computers, biometric wearables, and generative graphics accelerate, we are pioneering experiences that feel native to human hands and human eyes.",
      ctaTag: "Collaborations & Inquiries",
      ctaTitle: "Want to build something memorable together?",
      ctaDesc:
        "We collaborate with forward-looking founders, publishing partners, and ambitious brands.",
      ctaBtn: "Start a Project",
      ctaSec: "Contact Directory",
    },
    ar: {
      tag: "عن نكست أورا ستوديوز",
      title: "استوديو للأفكار التي تتحرك، تلهم، وتتصل.",
      subtitle:
        "يستكشف نكست أورا ستوديوز المساحة الفاصلة بين البرمجيات المبتكرة والترفيه التفاعلي. نبني منتجات وتطبيقات وألعاب يرغب الناس حقًا في لمسها، التفاعل معها، وتذكّرها.",
      premiseTag: "المنطلق الأساسي",
      premiseTitle: "البرمجيات ليست مجرد ديكور جامد.",
      premiseBody:
        "تُصمم أغلب المنتجات الرقمية كأنها معاملات ورقية على أسطح زجاجية. نحن نتعامل مع كل شاشة كآلة موسيقية حساسة، حيث تمتزج الدفء البصري والاستجابة الحركية والصوت لتشكل تجربة حسية متكاملة.",
      ecoTag: "سياق المنظومة",
      ecoBody: (
        <>
          بصفتنا ذراع المنتجات الترفيهية والتطبيقات التفاعلية لمنظومة{" "}
          <span className="font-bold text-[#A90F24]">نكست أورا</span>، نجمع بين المرونة
          الإبداعية العالية والأسس الهندسية المتينة.
        </>
      ),
      c1Num: "01 / من نحن",
      c1Body:
        "نحن فريق مرن من مهندسي الألعاب، رواد التكنولوجيا الإبداعية، ومهندسي واجهات التفاعل. نرفض الفصل بين “الفائدة العملية” و“المتعة التفاعلية”. يجب أن يتمتع تطبيق الموبايل بسرعة استجابة اللعبة، ويجب أن تمتلك اللعبة انضباط الأدوات العالمية.",
      c2Num: "02 / فلسفة سولار أورا",
      c2Body:
        "سولار أورا هي البوصلة البصرية والسلوكية لجميع ابتكاراتنا. تمثل الدفء دون تشويش، والطاقة المشعة ضمن إطار هندسي صارم، والإيقاع الحركي المستلهم من فيزياء الضوء والطاقة.",
      c3Num: "03 / التكنولوجيا الإبداعية",
      c3Body:
        "نطور بلغات Swift الأصلية، ومظللات Metal، وبيئات Kotlin، ومكتبات WebGPU. نتجنب الطبقات البرمجية الثقيلة لنضمن استجابة فائقة السرعة تبلغ 120 إطارًا في الثانية مع استهلاك فائق الكفاءة للبطارية.",
      c4Num: "04 / آفاق المستقبل",
      c4Body:
        "مع تسارع الحوسبة المكانية، الأجهزة القابلة للارتداء، والرسومات التوليدية، نبني تجارب تشعر الأيدي والأعين البشرية بأنها طبيعية وفطرية.",
      ctaTag: "الشراكات والمشاريع",
      ctaTitle: "هل ترغب في بناء مشروع استثنائي معًا؟",
      ctaDesc:
        "نتعاون مع المؤسسين الطموحين، دور النشر، والشركات التي تبحث عن ابتكارات رقمية غير تقليدية.",
      ctaBtn: "ابدأ مشروعك",
      ctaSec: "دليل التواصل",
    },
  };

  const text = isAr ? content.ar : content.en;

  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Studio Hero Header */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              {text.tag}
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.5rem,6.5vw,5.5rem)] tracking-tight text-[#151515] leading-[1.04] uppercase">
            {text.title}
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#666462] leading-relaxed font-normal">
            {text.subtitle}
          </p>
        </div>

        {/* Narrative Feature Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24 border-b border-black/8">
          {/* Left Column: Mission Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-gradient-to-b from-white via-[#FFFDFC] to-orange-50/20 border border-black/10 shadow-xs relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,106,26,0.15)]">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6A1A] via-[#A90F24] to-[#FFB24A]" aria-hidden="true" />
              <div className="p-8 sm:p-10 relative z-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF6A1A]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] font-bold block mb-3">
                  {text.premiseTag}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#151515] mb-4">
                  {text.premiseTitle}
                </h3>
                <p className="text-sm text-[#666462] leading-relaxed">
                  {text.premiseBody}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-[#A90F24]/8 via-[#FF6A1A]/5 to-[#FFB24A]/10 border border-[#A90F24]/20 overflow-hidden shadow-xs">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] to-[#FF6A1A]" aria-hidden="true" />
              <div className="p-8">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A90F24] font-bold block mb-3">
                  {text.ecoTag}
                </span>
                <p className="text-sm text-[#151515] leading-relaxed">
                  {text.ecoBody}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-5 h-5 text-[#FF6A1A]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  {text.c1Num}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {text.c1Body}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-5 h-5 text-[#A90F24]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  {text.c2Num}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {text.c2Body}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-[#FF7424]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  {text.c3Num}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {text.c3Body}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[#FFB24A]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  {text.c4Num}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                {text.c4Body}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-white via-[#FFFDFC] to-orange-50/30 border border-black/10 overflow-hidden shadow-md transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(255,106,26,0.2)]">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#A90F24] via-[#FF6A1A] to-[#FFB24A]" aria-hidden="true" />
          <div className="p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] font-bold">
                {text.ctaTag}
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151515] mt-1">
                {text.ctaTitle}
              </h3>
              <p className="text-sm text-[#666462] mt-2 max-w-lg">
                {text.ctaDesc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <AuraButton href="/start-project" variant="primary" size="lg" showArrow>
                {text.ctaBtn}
              </AuraButton>
              <AuraButton href="/contact" variant="secondary" size="lg">
                {text.ctaSec}
              </AuraButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
