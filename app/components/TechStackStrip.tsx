"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * AI tools & platforms Moxie Digital uses — displayed as a
 * seamless, infinitely-scrolling marquee strip.
 *
 * Logos that ship with a white/light background get `invert: true`
 * so they render as white-on-dark automatically.
 */
const TOOLS: Tool[] = [
    { name: "OpenAI",         src: "/tool-openai.png",       w: 160, invert: true },
    { name: "Google Gemini",  src: "/tool-gemini.png",        w: 52,  invert: false },
    { name: "Claude",         src: "/tool-claude.png",        w: 48,  invert: false, roundIcon: true },
    { name: "Perplexity",     src: "/tool-perplexity.png",    w: 48,  invert: false, roundIcon: true },
    { name: "Antigravity",    src: "/tool-antigravity.png",   w: 52,  invert: false },
    { name: "Lovable",        src: "/tool-lovable.png",       w: 150, invert: true },
];

interface Tool {
    name: string;
    src: string;
    w: number;
    invert: boolean;
    roundIcon?: boolean;
}

// Double the array so the CSS translateX(-50%) loops seamlessly
const TRACK = [...TOOLS, ...TOOLS];

export const TechStackStrip = () => {
    return (
        <section className="py-12 md:py-20 relative z-10 overflow-hidden">
            {/* Decorative top divider */}
            <div className="w-full max-w-5xl mx-auto px-6 mb-8 md:mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
            </div>

            {/* Heading */}
            <div className="container mx-auto px-6 max-w-6xl text-center mb-8 md:mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-3 block"
                >
                    Our AI Arsenal
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-[900] tracking-tight uppercase mb-4"
                >
                    BUILT ALONGSIDE THE TEAMS SHAPING AI
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    We operate inside the ecosystems that matter. Early adopters,
                    active contributors, and direct access to the platforms
                    rewriting how B2B growth actually works.
                </motion.p>
            </div>

            {/* ── Marquee ── */}
            <div
                className="relative w-full overflow-hidden"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
            >
                <div
                    className="flex items-center gap-16 md:gap-24"
                    style={{
                        width: "max-content",
                        animation: "marquee 28s linear infinite",
                        willChange: "transform",
                    }}
                    onMouseEnter={(e) =>
                        (e.currentTarget.style.animationPlayState = "paused")
                    }
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.animationPlayState = "running")
                    }
                >
                    {TRACK.map((tool, i) => (
                        <div
                            key={`${tool.name}-${i}`}
                            className="shrink-0 flex items-center justify-center gap-3"
                            style={{ height: 56 }}
                        >
                            {/* Logo image */}
                            <div
                                className={`relative flex items-center justify-center ${tool.roundIcon ? "rounded-xl overflow-hidden" : ""}`}
                                style={{ width: tool.w, height: 48 }}
                            >
                                <Image
                                    src={tool.src}
                                    alt={`${tool.name} – used by Moxie Digital`}
                                    width={tool.w}
                                    height={48}
                                    className="object-contain max-h-full"
                                    style={{
                                        filter: tool.invert
                                            ? "invert(1) brightness(2)"
                                            : "none",
                                        opacity: 0.85,
                                    }}
                                    draggable={false}
                                />
                            </div>

                            {/* Name label (only for icon-only logos) */}
                            {!tool.invert && (
                                <span className="text-white/70 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">
                                    {tool.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative bottom divider */}
            <div className="w-full max-w-5xl mx-auto px-6 mt-8 md:mt-12">
                <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
            </div>
        </section>
    );
};
