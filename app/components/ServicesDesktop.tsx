"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: "🔄",
        title: "Content Repurposing",
        description: "One interview. 30 touchpoints. Every channel, every week.",
        tag: "FLAGSHIP",
        href: "/services/content-repurposing",
    },
    {
        icon: "🔍",
        title: "SEO",
        description: "Pipeline-intent keywords. Topical authority. Organic leads that close.",
        tag: "ORGANIC",
        href: "/services/seo",
    },
    {
        icon: "🤖",
        title: "Answer Engine Optimization",
        description: "Be the answer Perplexity, ChatGPT & Gemini cite. Zero-click authority.",
        tag: "AEO",
        href: "/services/aeo",
    },
    {
        icon: "⚡",
        title: "Generative Engine Optimization",
        description: "Get cited inside AI-generated responses. Own the category in AI search.",
        tag: "GEO",
        href: "/services/geo",
    },
    {
        icon: "💼",
        title: "LinkedIn Branding",
        description: "Personal & company branding that attracts inbound. No cold outreach needed.",
        tag: "SOCIAL",
        href: "/services/linkedin-branding",
    },
    {
        icon: "📮",
        title: "Newsletters",
        description: "Own your audience forever. A community that buys — not just reads.",
        tag: "COMMUNITY",
        href: "/services/newsletters",
    },
    {
        icon: "📧",
        title: "Email Marketing",
        description: "Behavior-triggered sequences that move prospects to meetings on autopilot.",
        tag: "PIPELINE",
        href: "/services/email-marketing",
    },
    {
        icon: "🤖",
        title: "AI Agent Creation",
        description: "Custom AI agents that draft, publish and optimize your content at scale.",
        tag: "AI+HUMAN",
        href: "/services/ai-agents",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ServicesDesktop = () => {
    return (
        <section id="services" className="py-24 md:py-32 relative hidden md:block z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block"
                    >
                        Moxie Digital · Full-Stack Content Studio
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-[900] tracking-tight mb-4 uppercase"
                    >
                        WHAT WE DO
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em]"
                    >
                        EIGHT ENGINES. ONE SYSTEM. COMPOUNDING PIPELINE.
                    </motion.p>
                </div>

                {/* 4-col grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {services.map((svc, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Link href={svc.href} className="group block h-full">
                                <div className="h-full border border-white/5 bg-black/40 rounded-sm p-7 flex flex-col hover:border-[#CCFF00]/40 hover:-translate-y-1 hover:bg-black/60 hover:shadow-[0_0_30px_rgba(204,255,0,0.08)] transition-all duration-300">
                                    {/* Icon */}
                                    <div className="text-3xl mb-4">{svc.icon}</div>

                                    {/* Tag */}
                                    <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2 py-0.5 rounded self-start mb-4 leading-none">
                                        {svc.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-base font-black uppercase tracking-tight text-white mb-3 leading-tight group-hover:text-[#CCFF00] transition-colors duration-300">
                                        {svc.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-xs leading-relaxed flex-1">
                                        {svc.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-6 pt-4 border-gradient-t flex items-center justify-end">
                                        <span className="text-[#CCFF00] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            Learn more →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
