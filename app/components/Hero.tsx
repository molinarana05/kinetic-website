"use client";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { HeroHeadline } from "./HeroHeadline";
import { TypewriterEffect } from "./ui/TypewriterEffect";

export const Hero = () => {
    return (
        // Removed explicit bg-color allowing InteractiveGrid to show through
        // Added flex-col to stack the top section and the centered section naturally
        <section className="relative min-h-screen flex flex-col items-start justify-center pt-24 md:pt-32 pb-24 overflow-hidden">

            {/* Desktop-Only: Restored Atmospheric Elements */}
            <div className="absolute inset-0 z-0 hidden md:block pointer-events-none">
                {/* Right-side Gradient Blob (Purple/Cosmic) */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(120,40,200,0.4)_0%,transparent_70%)] blur-[100px] mix-blend-screen opacity-60" />

                {/* Left-side Subtle Glow (Lime/Electric) */}
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(204,255,0,0.15)_0%,transparent_70%)] blur-[80px] mix-blend-screen opacity-40" />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-16"> {/* Increased side padding for mobile */}
                <div className="max-w-6xl">
                    {/* Cluster 1: Message (Headline) */}
                    <div className="mb-4 md:mb-6 text-white">
                        <HeroHeadline />
                    </div>

                    {/* Cluster 2: Support (Promise) */}
                    <div className="flex flex-col items-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                        {/* Promise Line */}
                        <h2 className="text-lg md:text-2xl text-gray-200 w-full max-w-4xl font-light leading-relaxed">
                            A full-stack content studio powered by <span className="text-[#CCFF00] font-[900]">AI precision</span> and <span className="text-[#CCFF00] font-[900]">senior human strategy</span>.
                        </h2>
                    </div>
                </div>
            </div>

            {/* Visual Break / Divider */}
            <div className="w-full h-px bg-white/10 md:bg-transparent max-w-6xl mx-auto px-6 md:px-16 mb-8 mt-4 hidden md:block" />

            {/* Centered Area: Tagline + CTAs */}
            <div className="relative z-10 container mx-auto px-6 md:px-16 flex flex-col items-center text-center">
                <div className="max-w-4xl w-full flex flex-col items-center">
                    {/* Tagline */}
                    <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                        <span className="text-sm md:text-lg text-[#CCFF00] font-[900] tracking-widest uppercase">
                            <TypewriterEffect text="Eight engines. One system. Compounding pipeline." delay={2000} speed={40} cursor={true} className="inline" />
                        </span>
                    </div>

                    {/* Cluster 3: Action (CTA) + Credibility */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full px-4">
                            <Button href="/demo" className="w-full sm:w-auto px-10 py-5 text-xl shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:shadow-[0_0_50px_rgba(204,255,0,0.8)] transition-all duration-300 hover:-translate-y-1 bg-[#CCFF00] text-black hover:bg-white rounded-[4px] font-[900]">START THE ENGINE!!!</Button>
                            <Button href="/demo" className="w-full sm:w-auto px-10 py-5 text-xl transition-all duration-300 hover:-translate-y-1 bg-white text-black hover:bg-[#CCFF00] rounded-[4px] font-[900]">BOOK A DEMO</Button>
                        </div>



                    </div>
                </div>
            </div>



            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0118] to-transparent pointer-events-none z-0" />
        </section >
    );
};
