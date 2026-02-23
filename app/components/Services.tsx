"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, RefreshCw, Search, Sparkles, Globe, Linkedin, Mail, Send, Bot } from "lucide-react";

// Animated Neon Vectors
const AnimatedRefresh = () => <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }}><RefreshCw className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedSearch = () => <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><Search className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedSparkles = () => <motion.div animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Sparkles className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedGlobe = () => <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}><Globe className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedLinkedin = () => <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Linkedin className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedMail = () => <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><Mail className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedSend = () => <motion.div animate={{ x: [0, 5, 0], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Send className="text-[#CCFF00]" size={36} /></motion.div>;
const AnimatedBot = () => <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Bot className="text-[#CCFF00]" size={36} /></motion.div>;

const services = [
    {
        icon: <AnimatedRefresh />,
        title: "Content Repurposing",
        description: "One interview. 30 touchpoints across every channel.",
        tag: "FLAGSHIP",
        href: "/services/content-repurposing",
    },
    {
        icon: <AnimatedSearch />,
        title: "SEO",
        description: "Pipeline-intent keywords. Organic leads that close.",
        tag: "ORGANIC",
        href: "/services/seo",
    },
    {
        icon: <AnimatedSparkles />,
        title: "AEO",
        description: "Be the answer AI tools cite. Zero-click authority.",
        tag: "AEO",
        href: "/services/aeo",
    },
    {
        icon: <AnimatedGlobe />,
        title: "GEO",
        description: "Get cited inside AI-generated answers. Own the category.",
        tag: "GEO",
        href: "/services/geo",
    },
    {
        icon: <AnimatedLinkedin />,
        title: "LinkedIn Branding",
        description: "Personal & company branding that attracts inbound.",
        tag: "SOCIAL",
        href: "/services/linkedin-branding",
    },
    {
        icon: <AnimatedMail />,
        title: "Newsletters",
        description: "Own your audience forever. Community that buys.",
        tag: "COMMUNITY",
        href: "/services/newsletters",
    },
    {
        icon: <AnimatedSend />,
        title: "Email Marketing",
        description: "Behavior-triggered sequences that move prospects to meetings.",
        tag: "PIPELINE",
        href: "/services/email-marketing",
    },
    {
        icon: <AnimatedBot />,
        title: "AI Agents",
        description: "AI speed. Human intelligence. Content at scale.",
        tag: "AI+HUMAN",
        href: "/services/ai-agents",
    },
];

export const Services = () => {
    return (
        <section className="py-16 relative z-10 md:hidden">
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
                                <div className="h-full border border-white/10 bg-[#0a0118] shadow-xl rounded-xl p-6 flex flex-col hover:border-[#CCFF00]/40 transition-all duration-300">
                                    <div className="text-3xl mb-4 flex items-center justify-start">{svc.icon}</div>
                                    <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2 py-1 rounded self-start mb-4 leading-none">
                                        {svc.tag}
                                    </span>
                                    <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-3 leading-tight group-hover:text-[#CCFF00] transition-colors duration-300">
                                        {svc.title}
                                    </h3>
                                    <p className="text-[#e8e4df] opacity-90 text-sm leading-relaxed flex-1">
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
