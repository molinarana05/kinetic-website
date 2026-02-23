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
        description: "Behavior-triggered sequences that move prospects to meetings on autopilot.",
        tag: "PIPELINE",
        href: "/services/email-marketing",
    },
    {
        icon: <AnimatedBot />,
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
        <section className="py-24 md:py-32 relative hidden md:block z-10">
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
                                <div className="h-full border border-white/10 bg-[#0a0118] shadow-2xl rounded-xl p-8 flex flex-col hover:border-[#CCFF00]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(204,255,0,0.15)] transition-all duration-300">
                                    {/* Icon */}
                                    <div className="text-4xl mb-5 flex items-center justify-start">{svc.icon}</div>

                                    {/* Tag */}
                                    <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2.5 py-1 rounded self-start mb-5 leading-none">
                                        {svc.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-4 leading-[1.1] group-hover:text-[#CCFF00] transition-colors duration-300">
                                        {svc.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#e8e4df] opacity-90 text-base leading-relaxed flex-1">
                                        {svc.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-8 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        <div className="w-10 h-10 rounded-full border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] bg-[#CCFF00]/10">
                                            <ArrowRight size={18} />
                                        </div>
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
