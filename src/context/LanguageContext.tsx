"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

export interface Translations {
  // Navigation
  nav: {
    home: string;
    studio: string;
    contact: string;
    startProject: string;
    switchLang: string;
    ecosystem: string;
    partOfEcosystem: string;
  };

  // Contact Page
  contact: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappCta: string;
    emailLabel: string;
    instagramLabel: string;
    igAiTitle: string;
    igStudiosTitle: string;
    presenceTitle: string;
    presenceSubtitle: string;
    jordanTitle: string;
    jordanDesc: string;
    uaeTitle: string;
    uaeDesc: string;
    directLineNote: string;
    startProjectBannerTitle: string;
    startProjectBannerDesc: string;
    startProjectBannerCta: string;
  };

  // Start Project Page
  startProject: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    fullNameLabel: string;
    fullNameRequired: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phoneRequired: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailOptional: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyOptional: string;
    companyPlaceholder: string;
    projectDomainLabel: string;
    projectDomainRequired: string;
    projectIdeaLabel: string;
    projectIdeaRequired: string;
    projectIdeaPlaceholder: string;
    budgetLabel: string;
    budgetOptional: string;
    budgetPlaceholder: string;
    responseBoxTitle: string;
    responseBoxDesc: string;
    reviewBoxTitle: string;
    reviewBoxDesc: string;
    submitButton: string;
    submittingButton: string;
    directNote: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
    whatsappAltTitle: string;
    whatsappAltSubtitle: string;
    whatsappAltButton: string;
    errors: {
      nameRequired: string;
      phoneRequired: string;
      emailInvalid: string;
      ideaRequired: string;
    };
    projectTypes: {
      mobileApp: string;
      game: string;
      digitalProduct: string;
      interactiveExp: string;
      other: string;
    };
  };

  // Footer
  footer: {
    tag: string;
    statement: string;
    status: string;
    exploreTitle: string;
    connectTitle: string;
    presenceTitle: string;
    locations: string;
    luxuryTagline: string;
    copyright: string;
    ecosystemPart: string;
    directContact: string;
  };

  // Common
  common: {
    startProject: string;
    theStudio: string;
    messageUs: string;
    openWhatsapp: string;
    openInstagram: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      studio: "Studio",
      contact: "Contact",
      startProject: "Start a Project",
      switchLang: "العربية",
      ecosystem: "NEXTAURA STUDIOS",
      partOfEcosystem: "Part of the NextAura ecosystem",
    },
    contact: {
      tag: "GET IN TOUCH",
      titleLine1: "LET'S START A",
      titleLine2: "CONVERSATION.",
      subtitle:
        "Direct communication channels to the studio. Whether discussing a new production, technological inquiry, or creative collaboration, we are reachable across our direct channels.",
      phoneLabel: "PHONE",
      whatsappLabel: "WHATSAPP",
      whatsappCta: "MESSAGE US",
      emailLabel: "EMAIL",
      instagramLabel: "INSTAGRAM",
      igAiTitle: "NEXTAURA AI",
      igStudiosTitle: "NEXTAURA STUDIOS",
      presenceTitle: "OUR PRESENCE",
      presenceSubtitle: "Regional headquarters and creative presence across the Middle East.",
      jordanTitle: "JORDAN",
      jordanDesc: "Regional presence & engineering base",
      uaeTitle: "UNITED ARAB EMIRATES",
      uaeDesc: "Dubai — Commercial & production studio",
      directLineNote: "Direct lines monitored daily by our creative and technical leads.",
      startProjectBannerTitle: "Have a specific project in mind?",
      startProjectBannerDesc: "Send us your concept brief, target platforms, and feature details.",
      startProjectBannerCta: "Start a Project",
    },
    startProject: {
      tag: "PROJECT INTAKE",
      titleLine1: "START SOMETHING",
      titleLine2: "WORTH BUILDING.",
      subtitle:
        "Tell us what you have in mind. We review every submission with our engineering and design leads and respond promptly.",
      fullNameLabel: "Full Name",
      fullNameRequired: "Required",
      fullNamePlaceholder: "e.g. Alex Vance",
      phoneLabel: "Phone Number",
      phoneRequired: "Required",
      phonePlaceholder: "+962 7X XXX XXXX or +971 XX XXX XXXX",
      emailLabel: "Email Address",
      emailOptional: "Optional",
      emailPlaceholder: "alex@company.com",
      companyLabel: "Company / Brand Name",
      companyOptional: "Optional",
      companyPlaceholder: "e.g. Acme Interactive",
      projectDomainLabel: "Project Domain",
      projectDomainRequired: "Select domain",
      projectIdeaLabel: "Project Idea & Scope",
      projectIdeaRequired: "Required",
      projectIdeaPlaceholder:
        "Tell us what you want to build, what problem it solves, target users, platforms, and any features you already have in mind...",
      budgetLabel: "Expected Budget",
      budgetOptional: "Optional",
      budgetPlaceholder: "e.g. $1,500 / 1,000 JOD / Not sure yet",
      responseBoxTitle: "FAST RESPONSE",
      responseBoxDesc:
        "We’ll get back to you as quickly as possible. Our maximum expected response time is within 1 hour.",
      reviewBoxTitle: "DIRECT ENGINEERING REVIEW",
      reviewBoxDesc:
        "Your submission goes directly to our creative technical directors. We analyze mechanics, scope feasibility, and platform architectures before responding.",
      submitButton: "SEND PROJECT",
      submittingButton: "SENDING INTAKE...",
      directNote: "Direct transmission · Maximum 1-hour response time guarantee",
      successTitle: "PROJECT RECEIVED.",
      successDesc: "Thank you for reaching out. We have received your project details and will contact you within 1 hour.",
      submitAnother: "Submit Another Project",
      whatsappAltTitle: "PREFER WHATSAPP?",
      whatsappAltSubtitle: "Message us directly on WhatsApp for immediate communication with our studio lead.",
      whatsappAltButton: "OPEN WHATSAPP",
      errors: {
        nameRequired: "Please enter your full name.",
        phoneRequired: "Please enter your phone number so we can reach you.",
        emailInvalid: "Please enter a valid email address.",
        ideaRequired: "Please describe your project idea (at least 15 characters).",
      },
      projectTypes: {
        mobileApp: "Mobile App",
        game: "Game",
        digitalProduct: "Digital Product",
        interactiveExp: "Interactive Experience",
        other: "Other",
      },
    },
    footer: {
      tag: "Creative Technology & Entertainment",
      statement: "We build what people want to play, use and remember.",
      status: "Available for selected product & game collaborations",
      exploreTitle: "Explore",
      connectTitle: "Direct Channels",
      presenceTitle: "Presence",
      locations: "Jordan · Dubai, UAE",
      luxuryTagline: "Crafted With Luxury Engineering",
      copyright: "NextAura Studios. All rights reserved.",
      ecosystemPart: "Part of the NextAura ecosystem.",
      directContact: "Official Studio Email",
    },
    common: {
      startProject: "Start a Project",
      theStudio: "The Studio",
      messageUs: "Message Us",
      openWhatsapp: "Open WhatsApp",
      openInstagram: "View Instagram",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      studio: "الاستوديو",
      contact: "تواصل معنا",
      startProject: "ابدأ مشروعك",
      switchLang: "English",
      ecosystem: "نكست أورا ستوديوز",
      partOfEcosystem: "جزء من منظومة نكست أورا",
    },
    contact: {
      tag: "تواصل معنا",
      titleLine1: "لنبدأ",
      titleLine2: "المحادثة.",
      subtitle:
        "قنوات الاتصال المباشرة مع الاستوديو. سواء كنت ترغب في مناقشة إنتاج جديد، استفسار تقني، أو تعاون إبداعي، نحن متاحون دائمًا عبر قنواتنا المباشرة.",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
      whatsappCta: "راسلنا",
      emailLabel: "البريد الإلكتروني",
      instagramLabel: "إنستغرام",
      igAiTitle: "نكست أورا للذكاء الاصطناعي",
      igStudiosTitle: "نكست أورا ستوديوز",
      presenceTitle: "تواجدنا الجغرافي",
      presenceSubtitle: "المقرات الإقليمية وحضورنا الإبداعي والتقني في الشرق الأوسط.",
      jordanTitle: "الأردن",
      jordanDesc: "التواجد الإقليمي وقاعدة التطوير الهندسي",
      uaeTitle: "الإمارات العربية المتحدة",
      uaeDesc: "دبي — استوديو الإنتاج والشراكات التجارية",
      directLineNote: "قنوات تواصل مباشرة يُشرف عليها قادة التصميم والتطوير يوميًا.",
      startProjectBannerTitle: "هل لديك فكرة مشروع محددة؟",
      startProjectBannerDesc: "أرسل لنا تفاصيل فكرتك، المنصات المستهدفة، والميزات المطلوبة.",
      startProjectBannerCta: "ابدأ مشروعك الآن",
    },
    startProject: {
      tag: "استقبال المشاريع",
      titleLine1: "ابدأ فكرة",
      titleLine2: "تستحق التنفيذ.",
      subtitle:
        "احكيلنا شو في بالك، وسنراجع فكرتك مع قادة الهندسة والتصميم ونتواصل معك بأسرع وقت.",
      fullNameLabel: "الاسم الكامل",
      fullNameRequired: "إجباري",
      fullNamePlaceholder: "مثال: رامي العمري",
      phoneLabel: "رقم الهاتف",
      phoneRequired: "إجباري",
      phonePlaceholder: "+962 7X XXX XXXX أو +971 XX XXX XXXX",
      emailLabel: "البريد الإلكتروني",
      emailOptional: "اختياري",
      emailPlaceholder: "name@company.com",
      companyLabel: "اسم الشركة / البراند",
      companyOptional: "اختياري",
      companyPlaceholder: "مثال: استوديو الأفق",
      projectDomainLabel: "مجال المشروع",
      projectDomainRequired: "اختر المجال",
      projectIdeaLabel: "فكرة المشروع والوصف",
      projectIdeaRequired: "إجباري",
      projectIdeaPlaceholder:
        "احكيلنا عن فكرتك، شو حابب تبني، المشكلة اللي بتحلها، المستخدمين المستهدفين، والمنصات أو الميزات اللي بتفكر فيها...",
      budgetLabel: "الميزانية المتوقعة",
      budgetOptional: "اختياري",
      budgetPlaceholder: "مثال: 1000 د.أ / 1500$ / غير متأكد بعد",
      responseBoxTitle: "رد سريع",
      responseBoxDesc:
        "سنرد عليك بأسرع وقت ممكن. الحد الأقصى المتوقع للرد هو خلال ساعة واحدة.",
      reviewBoxTitle: "مراجعة هندسية مباشرة",
      reviewBoxDesc:
        "يصل طلبك مباشرة إلى قادة التطوير والتصميم في الاستوديو لتحليل جدوى الفكرة، المنصات، والمتطلبات التقنية قبل التواصل معك.",
      submitButton: "إرسال المشروع",
      submittingButton: "جاري الإرسال...",
      directNote: "إرسال مباشر ومؤمّن · ضمان الرد خلال ساعة واحدة كحد أقصى",
      successTitle: "تم استلام طلبك.",
      successDesc: "شكرًا لتواصلك معنا. استلمنا تفاصيل مشروعك وسنتواصل معك خلال ساعة واحدة.",
      submitAnother: "إرسال فكرة مشروع أخرى",
      whatsappAltTitle: "تفضل واتساب؟",
      whatsappAltSubtitle: "راسلنا مباشرة على واتساب للتحدث الفوري مع مسؤول الاستوديو.",
      whatsappAltButton: "فتح واتساب",
      errors: {
        nameRequired: "يرجى كتابة الاسم الكامل.",
        phoneRequired: "يرجى إدخال رقم هاتفك حتى نتمكن من التواصل معك.",
        emailInvalid: "يرجى إدخال بريد إلكتروني صحيح.",
        ideaRequired: "يرجى كتابة وصف لفكرة مشروعك (15 حرفًا على الأقل).",
      },
      projectTypes: {
        mobileApp: "تطبيق موبايل",
        game: "لعبة",
        digitalProduct: "منتج رقمي",
        interactiveExp: "تجربة تفاعلية",
        other: "أخرى",
      },
    },
    footer: {
      tag: "التكنولوجيا الإبداعية والترفيه",
      statement: "نبني ما يحب الناس التفاعل معه، استخدامه، وتذكّره.",
      status: "متاحون لمشاريع وتطبيقات وألعاب مختارة",
      exploreTitle: "استكشف",
      connectTitle: "قنوات التواصل",
      presenceTitle: "المقرات",
      locations: "الأردن · دبي، الإمارات",
      luxuryTagline: "صُممت بمعايير هندسية فاخرة",
      copyright: "نكست أورا ستوديوز. جميع الحقوق محفوظة.",
      ecosystemPart: "جزء من منظومة نكست أورا المتكاملة.",
      directContact: "البريد الرسمي للاستوديو",
    },
    common: {
      startProject: "ابدأ مشروعك",
      theStudio: "الاستوديو",
      messageUs: "راسلنا",
      openWhatsapp: "فتح واتساب",
      openInstagram: "حساب إنستغرام",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "nextaura_lang_preference";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = saved;
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const next = language === "en" ? "ar" : "en";
    setLanguage(next);
  };

  const isRTL = language === "ar";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRTL,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
