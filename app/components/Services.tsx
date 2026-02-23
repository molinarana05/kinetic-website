"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
                                <div className="h-full border border-white/5 bg-black/40 rounded-sm p-5 flex flex-col hover:border-[#CCFF00]/30 transition-all duration-300">
                                    <div className="text-2xl mb-3">{svc.icon}</div>
                                    <span className="text-[8px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-1.5 py-0.5 rounded self-start mb-3 leading-none">
                                        {svc.tag}
                                    </span>
                                    <h3 className="text-sm font-black uppercase tracking-tight text-white mb-2 leading-tight group-hover:text-[#CCFF00] transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-600 text-[10px] leading-relaxed flex-1">
                                        {svc.description}
                                    </p>
                                    <div className="mt-4 pt-3 border-gradient-t">
                                        <span className="text-[#CCFF00] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn more →
                                        </span>
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
