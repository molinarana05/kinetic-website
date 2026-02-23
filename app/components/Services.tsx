"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
    {
        icon: "🔄",
        title: "Content Repurposing",
        description: "One interview. 30 touchpoints across every channel.",
        tag: "FLAGSHIP",
        href: "/services/content-repurposing",
    },
    {
        icon: "🔍",
        title: "SEO",
        description: "Pipeline-intent keywords. Organic leads that close.",
        tag: "ORGANIC",
        href: "/services/seo",
    },
    {
        icon: "🧠",
        title: "AEO",
        description: "Be the answer AI tools cite. Zero-click authority.",
        tag: "AEO",
        href: "/services/aeo",
    },
    {
        icon: "⚡",
        title: "GEO",
        description: "Get cited inside AI-generated answers. Own the category.",
        tag: "GEO",
        href: "/services/geo",
    },
    {
        icon: "💼",
        title: "LinkedIn Branding",
        description: "Personal & company branding that attracts inbound.",
        tag: "SOCIAL",
        href: "/services/linkedin-branding",
    },
    {
        icon: "📮",
        title: "Newsletters",
        description: "Own your audience forever. Community that buys.",
        tag: "COMMUNITY",
        href: "/services/newsletters",
    },
    {
        icon: "📧",
        title: "Email Marketing",
        description: "Behavior-triggered sequences that move prospects to meetings.",
        tag: "PIPELINE",
        href: "/services/email-marketing",
    },
    {
        icon: "🤖",
        title: "AI Agents",
        description: "AI speed. Human intelligence. Content at scale.",
        tag: "AI+HUMAN",
        href: "/services/ai-agents",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-16 relative z-10 md:hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
                        Full-Stack Content Studio
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl font-[900] mb-3 tracking-tight text-white uppercase"
                    >
                        WHAT WE DO
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[3.5vw] font-[900] text-[#CCFF00] uppercase tracking-[0.1em]"
                    >
                        EIGHT ENGINES. ONE SYSTEM.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link href={svc.href} className="group block h-full">
                                <div className="h-full border border-white/5 bg-black/40 rounded-xl p-6 flex flex-col hover:border-[#CCFF00]/30 transition-all duration-300">
                                    <div className="text-3xl mb-4">{svc.icon}</div>
                                    <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2 py-1 rounded self-start mb-4 leading-none">
                                        {svc.tag}
                                    </span>
                                    <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-3 leading-tight group-hover:text-[#CCFF00] transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-[#e8e4df] opacity-80 text-xs leading-relaxed flex-1">
                                        {svc.description}
                                    </p>
                                    <div className="mt-6 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-8 h-8 rounded-full border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] bg-[#CCFF00]/10">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
