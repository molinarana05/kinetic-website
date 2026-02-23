"use client";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { HeroHeadline } from "./HeroHeadline";

export const Hero = () => {
    return (
        // Removed explicit bg-color allowing InteractiveGrid to show through
        // Changed items-center to items-start to allow top-padding to define position
        <section className="relative min-h-screen flex items-start pt-32 md:pt-48 overflow-hidden">

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
                    <div className="mb-4 md:mb-8 text-white">
                        <HeroHeadline />
                    </div>

                    {/* Cluster 2: Support (Promise) */}
                    <div className="flex flex-col items-start gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                        {/* Promise Line */}
                        <h2 className="text-lg md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                            A full-stack content studio powered by <span className="text-[#CCFF00] font-[900]">AI precision</span> and <span className="text-[#CCFF00] font-[900]">senior human strategy</span>. Eight engines. One system. Compounding pipeline.
                        </h2>
                    </div>

                    {/* Cluster 3: Action (CTA) + Credibility */}
                    <div className="flex flex-col items-start gap-8 opacity-0 animate-fade-in-up w-full" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <div className="relative w-full sm:w-auto">
                                <Button
                                    href="#how-it-works"
                                    className="w-full sm:w-auto px-8 py-4 text-lg shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:shadow-[0_0_50px_rgba(204,255,0,0.8)] transition-all duration-300 hover:-translate-y-1 bg-[#CCFF00] text-black hover:bg-white rounded-[4px] font-[900]"
                                >
                                    START THE ENGINE
                                </Button>
                            </div>
                            <Button variant="secondary" className="w-full sm:w-auto border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] px-8 py-4 text-lg rounded-[4px] font-[900] transition-all duration-300 hover:-translate-y-1">
                                GET IN TOUCH
                            </Button>
                        </div>

                        {/* Credibility Line (Moved below buttons) */}
                        <p className="text-xs md:text-sm font-medium text-gray-500">
                            <span className="text-gray-400">Led by Molina Rana</span> <span className="mx-2 text-gray-600">/</span> Paytm <span className="mx-2 text-gray-600">/</span> Bajaj Finserv <span className="mx-2 text-gray-600">/</span> Grant Thornton Bharat
                        </p>
                    </div>
                </div>
            </div>



            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0b0b] to-transparent pointer-events-none z-0" />
        </section >
    );
};
