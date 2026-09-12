import React from "react";
import { AuraButton } from "@/components/ui/AuraButton";
import { Flame, Compass, Cpu, Sparkles } from "lucide-react";

export const metadata = {
  title: "The Studio — NextAura Studios",
  description:
    "NextAura Studios explores the space between software and entertainment. We build products people interact with, not simply look at.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 sm:pb-36 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Studio Hero Header */}
        <div className="max-w-4xl mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#A90F24]" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#666462]">
              About NextAura Studios
            </span>
          </div>

          <h1 className="font-heading font-black text-[clamp(2.5rem,6.5vw,5.5rem)] tracking-tight text-[#151515] leading-[1.04] uppercase">
            A studio for things that move, play & connect.
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[#666462] leading-relaxed font-normal">
            NextAura Studios explores the intersection of creative software and interactive
            entertainment. We build products people genuinely want to touch, play, and remember.
          </p>
        </div>

        {/* Narrative Feature Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-24 border-b border-black/8">
          {/* Left Column: Mission Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-black/8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF6A1A]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] font-bold block mb-3">
                Core Premise
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#151515] mb-4">
                Software is not passive decor.
              </h3>
              <p className="text-sm text-[#666462] leading-relaxed">
                Most digital products are designed like paperwork with glass surfaces. We treat
                every screen as an instrument—where visual temperature, physical resistance, sound,
                and kinetic motion form an undivided sensory whole.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F4F4F2] border border-black/8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A90F24] font-bold block mb-3">
                Ecosystem Context
              </span>
              <p className="text-sm text-[#151515] leading-relaxed">
                Operating as the dedicated entertainment and consumer product arm of the{" "}
                <span className="font-semibold text-[#A90F24]">NextAura</span> ecosystem, we combine
                boutique creative agility with robust technical foundations.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Flame className="w-5 h-5 text-[#FF6A1A]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  01 / Who We Are
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                We are a nimble team of game engineers, creative technologists, interaction
                architects, and graphic artists. We reject the divide between “serious utility” and
                “playful entertainment.” A mobile app should have the responsiveness of a game; a game
                should possess the design discipline of a world-class instrument.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-5 h-5 text-[#A90F24]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  02 / The Solar Aura Philosophy
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                Solar Aura is our guiding visual and behavioral dogma. It stands for warmth without
                clutter, radiant energy inside razor-sharp architectural restraint, and visual rhythm
                that feels powered by solar physics rather than arbitrary digital decoration.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-[#FF7424]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  03 / Creative Technology
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                We write native Swift, Metal shaders, Kotlin graphics pipelines, and WebGPU compute
                layers. We avoid heavy bloated black boxes. By writing close to the metal, our products
                maintain buttery 120 FPS fluency and sip battery sparingly.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[#FFB24A]" />
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#151515] font-bold">
                  04 / Future Horizons
                </h2>
              </div>
              <p className="text-base sm:text-lg text-[#666462] leading-relaxed">
                As spatial computers, biometric wearables, and generative graphics accelerate, we
                are pioneering experiences that feel native to human hands and human eyes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-black/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 shadow-xs">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A1A] font-bold">
              Collaborations & Inquiries
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151515] mt-1">
              Want to build something memorable together?
            </h3>
            <p className="text-sm text-[#666462] mt-2 max-w-lg">
              We collaborate with forward-looking founders, publishing partners, and ambitious brands.
            </p>
          </div>

          <AuraButton href="/contact" variant="primary" size="lg" showArrow className="shrink-0">
            Start a Conversation
          </AuraButton>
        </div>
      </div>
    </div>
  );
}
