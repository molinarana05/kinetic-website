"use client";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroDesktop = () => {
    return (
        // Removed explicit bg-color allowing InteractiveGrid to show through
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hidden md:flex">

            {/* Background Soundwave Mesh Removed */}

            {/* Right-side Gradient Blob for Balance */}
            {/* Right-side Gradient Blob Removed */}

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-6xl">
                    {/* Cluster 1: Message (Headline) */}
                    <h1 className="text-6xl md:text-8xl lg:text-[96px] font-black tracking-tighter mb-8 leading-none text-white uppercase">
                        <div className="flex flex-col gap-0 items-start">
                            {/* Line 1: Text + Arrow */}
                            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
                                <span>1 HOUR OF TALKING</span>
                                {/* Arrow Icon - At the end of Line 1 */}
                                <div className="relative w-[0.8em] h-[0.8em] inline-flex items-center justify-center">
                                    <div className="text-[#CCFF00] animate-flip drop-shadow-[0_0_20px_rgba(204,255,0,1)] filter brightness-110">
                                        <ArrowRight size="100%" strokeWidth={4} />
                                    </div>
                                </div>
                            </div>

                            {/* Line 2: Strictly Left Aligned */}
                            <span className="block animate-fade-in-up text-[#CCFF00]" style={{ animationDelay: "100ms" }}>
                                1 MONTH OF CONTENT
                            </span>
                        </div>
                    </h1>

                    {/* Cluster 2: Support (Promise) */}
                    <div className="flex flex-col items-start gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                        {/* Promise Line */}
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-light leading-relaxed">
                            Stop forcing yourself to write. I interview you once a month, extract your brilliance, and build a <span className="text-[#CCFF00] font-[900]">founder-led brand</span> that generates leads while you sleep.
                        </p>
                    </div>

                    {/* Cluster 3: Action (CTA) + Credibility */}
                    <div className="flex flex-col items-start gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="relative">
                                <Button
                                    href="#how-it-works"
                                    className="px-8 py-4 text-lg shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:shadow-[0_0_50px_rgba(204,255,0,0.8)] transition-all duration-300 hover:-translate-y-1 bg-[#CCFF00] text-black hover:bg-white rounded-[4px] font-[900]"
                                >
                                    START THE ENGINE
                                </Button>
                            </div>
                            <Button variant="secondary" className="border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] px-8 py-4 text-lg rounded-[4px] font-[900] transition-all duration-300 hover:-translate-y-1">
                                GET IN TOUCH
                            </Button>
                        </div>

                        {/* Credibility Line (Moved below buttons) */}
                        {/* Company Logo Strip */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs text-gray-600 font-mono uppercase tracking-widest">Led by Molina Rana — built at</span>
                            {[
                                { src: "/company-paytm.png", name: "Paytm", w: 56 },
                                { src: "/company-bajaj-finserv.png", name: "Bajaj Finserv", w: 64 },
                                { src: "/company-grant-thornton.png", name: "Grant Thornton", w: 80 },
                            ].map(({ src, name, w }) => (
                                <div key={name} className="relative h-5" style={{ width: w }}>
                                    <Image
                                        src={src}
                                        alt={name}
                                        fill
                                        className="object-contain object-left opacity-40 filter grayscale brightness-150"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0118] to-transparent pointer-events-none z-0" />
        </section >
    );
};
