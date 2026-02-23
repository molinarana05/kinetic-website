"use client";
import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { Hero } from "./components/Hero";
import { HeroDesktop } from "./components/HeroDesktop";
import { CredibilityStrip } from "./components/CredibilityStrip";
import { ChaosVsCalm } from "./components/ChaosVsCalm";
import { Services } from "./components/Services";
import { ServicesDesktop } from "./components/ServicesDesktop";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { NumberCounter } from "./components/ui/NumberCounter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus, RefreshCw, Search, Brain, Zap, Briefcase, Mail, Bot, ArrowRight, Send } from "lucide-react";
import { InteractiveGrid } from "./components/ui/InteractiveGrid";
import { InteractiveGridDesktop } from "./components/ui/InteractiveGridDesktop";
import { MatrixLogStream } from "./components/ui/MatrixLogStream";
import { TestimonialsDesktop } from "./components/TestimonialsDesktop";
import Link from "next/link";
import { GamifiedEarlyWins } from "./components/GamifiedEarlyWins";

// ─── Animated heading for Hero ────────────────────────────────────────────────
const AnimatedHeroHeading = () => {
    const [phase, setPhase] = useState(0);
    const genericAgency = "GENERIC B2B CONTENT AGENCY";
    const [typed1, setTyped1] = useState("");
    const aiHuman = "AI + HUMAN";
    const contentAt = " CONTENT AT";
    const speed = "BREAKNECK SPEED";
    const [typed2, setTyped2] = useState("");
    const [typed3, setTyped3] = useState("");
    const [typed4, setTyped4] = useState("");

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (phase === 0) {
            setTyped1(""); setTyped2(""); setTyped3(""); setTyped4("");
            timer = setTimeout(() => setPhase(1), 500);
        } else if (phase === 1) {
            if (typed1.length < genericAgency.length)
                timer = setTimeout(() => setTyped1(genericAgency.substring(0, typed1.length + 1)), 40);
            else timer = setTimeout(() => setPhase(2), 1500);
        } else if (phase === 2) {
            setPhase(3);
        } else if (phase === 3) {
            timer = setTimeout(() => setPhase(4), 800);
        } else if (phase === 4) {
            if (typed1.length > 0)
                timer = setTimeout(() => setTyped1(t => t.substring(0, t.length - 1)), 30);
            else timer = setTimeout(() => setPhase(5), 300);
        } else if (phase === 5) {
            if (typed2.length < aiHuman.length)
                timer = setTimeout(() => setTyped2(aiHuman.substring(0, typed2.length + 1)), 40);
            else timer = setTimeout(() => setPhase(6), 150);
        } else if (phase === 6) {
            if (typed3.length < contentAt.length)
                timer = setTimeout(() => setTyped3(contentAt.substring(0, typed3.length + 1)), 40);
            else timer = setTimeout(() => setPhase(7), 200);
        } else if (phase === 7) {
            if (typed4.length < speed.length)
                timer = setTimeout(() => setTyped4(speed.substring(0, typed4.length + 1)), 40);
            else timer = setTimeout(() => setPhase(8), 5000);
        } else if (phase === 8) {
            setPhase(0);
        }
        return () => clearTimeout(timer);
    }, [phase, typed1, typed2, typed3, typed4]);

    return (
        <h1 className="text-[9.5vw] md:text-8xl lg:text-[85px] xl:text-[90px] font-black tracking-tighter mb-6 lg:mb-8 leading-[1.1] md:leading-tight uppercase min-h-[3.3em] md:min-h-[2.2em]">
            {phase < 5 ? (
                <div className="flex items-center text-white min-h-[3.3em] md:min-h-0">
                    <span className={`leading-tight break-words transition-all duration-300 ${phase >= 3 ? "line-through decoration-[#CCFF00] decoration-[4px] md:decoration-[8px] opacity-50" : ""}`}>
                        {typed1}
                    </span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-2 align-middle flex-shrink-0"
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-2 md:gap-4 items-start">
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap leading-tight">
                        <span className={`inline-block border-[3px] border-[#CCFF00] ${phase >= 5 ? "bg-[#CCFF00] text-black px-2 md:px-4 py-1 rounded-[4px]" : "text-transparent border-transparent px-2 md:px-4 py-1"}`}>
                            {typed2}
                            {phase === 5 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                    className="inline-block w-[3px] md:w-[6px] h-[0.8em] bg-black ml-1 align-middle"
                                />
                            )}
                        </span>
                        <span className="text-white relative top-1">{typed3}</span>
                        {phase === 6 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 mt-2 align-middle"
                            />
                        )}
                    </div>
                    <div className="flex items-center leading-tight">
                        <span className="text-white">{typed4}</span>
                        {phase >= 7 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: phase === 8 ? 0 : 1 }}
                                transition={{ duration: 0.4, repeat: phase === 8 ? 0 : Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-3 align-middle"
                            />
                        )}
                    </div>
                </div>
            )}
        </h1>
    );
};

// ─── Services data ─────────────────────────────────────────────────────────────
const servicesData = [
    { icon: <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 6, ease: "linear" }}><RefreshCw className="text-[#CCFF00]" size={36} /></motion.div>, title: "Content Repurposing", description: "One interview. 30 touchpoints across every channel.", tag: "FLAGSHIP", href: "/services/content-repurposing" },
    { icon: <motion.div animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><Search className="text-[#CCFF00]" size={36} /></motion.div>, title: "SEO", description: "Pipeline-intent keywords. Organic leads that close.", tag: "ORGANIC", href: "/services/seo" },
    { icon: <motion.div animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Brain className="text-[#CCFF00]" size={36} /></motion.div>, title: "AEO", description: "Be the answer AI tools cite. Zero-click authority.", tag: "AEO", href: "/services/aeo" },
    { icon: <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}><Zap className="text-[#CCFF00]" size={36} /></motion.div>, title: "GEO", description: "Get cited inside AI-generated answers. Own the category.", tag: "GEO", href: "/services/geo" },
    { icon: <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Briefcase className="text-[#CCFF00]" size={36} /></motion.div>, title: "LinkedIn Branding", description: "Personal & company branding that attracts inbound.", tag: "SOCIAL", href: "/services/linkedin-branding" },
    { icon: <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}><Send className="text-[#CCFF00]" size={36} /></motion.div>, title: "Newsletters", description: "Own your audience forever. Community that buys.", tag: "COMMUNITY", href: "/services/newsletters" },
    { icon: <motion.div animate={{ x: [0, 5, 0], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Mail className="text-[#CCFF00]" size={36} /></motion.div>, title: "Email Marketing", description: "Behavior-triggered sequences that move prospects to meetings on autopilot.", tag: "PIPELINE", href: "/services/email-marketing" },
    { icon: <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}><Bot className="text-[#CCFF00]" size={36} /></motion.div>, title: "AI Agent Creation", description: "Custom AI agents that draft, publish and optimize your content at scale.", tag: "AI+HUMAN", href: "/services/ai-agents" },
];

// ─── Services Mobile ───────────────────────────────────────────────────────────
const ServicesMobile = () => (
    <section className="py-16 relative z-10 md:hidden">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">Full-Stack Content Studio</span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-[900] mb-3 tracking-tight text-white uppercase">WHAT WE DO</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[3.5vw] font-[900] text-[#CCFF00] uppercase tracking-[0.1em]">EIGHT ENGINES. ONE SYSTEM.</motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {servicesData.map((svc, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                        <Link href={svc.href} className="group block h-full">
                            <div className="h-full border border-white/10 bg-[#0a0118] shadow-xl rounded-xl p-6 flex flex-col hover:border-[#CCFF00]/40 transition-all duration-300">
                                <div className="text-3xl mb-4 flex items-center justify-start">{svc.icon}</div>
                                <span className="text-[9px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2 py-1 rounded self-start mb-4 leading-none">{svc.tag}</span>
                                <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-3 leading-tight group-hover:text-[#CCFF00] transition-colors duration-300">{svc.title}</h3>
                                <p className="text-[#e8e4df] opacity-90 text-sm leading-relaxed flex-1">{svc.description}</p>
                                <div className="mt-6 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="w-8 h-8 rounded-full border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] bg-[#CCFF00]/10"><ArrowRight size={14} /></div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// ─── Services Desktop ──────────────────────────────────────────────────────────
const ServicesDesktopInline = () => (
    <section className="py-24 md:py-32 relative hidden md:block z-10">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
                <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Moxie Digital · Full-Stack Content Studio</motion.span>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-[900] tracking-tight mb-4 uppercase">WHAT WE DO</motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em]">EIGHT ENGINES. ONE SYSTEM. COMPOUNDING PIPELINE.</motion.p>
            </div>
            <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-5"
            >
                {servicesData.map((svc, i) => (
                    <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}>
                        <Link href={svc.href} className="group block h-full">
                            <div className="h-full border border-white/10 bg-[#0a0118] shadow-2xl rounded-xl p-8 flex flex-col hover:border-[#CCFF00]/40 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(204,255,0,0.15)] transition-all duration-300">
                                <div className="text-4xl mb-5 flex items-center justify-start">{svc.icon}</div>
                                <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest border border-[#CCFF00]/30 bg-[#CCFF00]/5 px-2.5 py-1 rounded self-start mb-5 leading-none">{svc.tag}</span>
                                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mb-4 leading-[1.1] group-hover:text-[#CCFF00] transition-colors duration-300">{svc.title}</h3>
                                <p className="text-[#e8e4df] opacity-90 text-base leading-relaxed flex-1">{svc.description}</p>
                                <div className="mt-8 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                    <div className="w-10 h-10 rounded-full border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] bg-[#CCFF00]/10"><ArrowRight size={18} /></div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

// ─── Noise & Signal Section (THE FIX IS HERE) ─────────────────────────────────
interface NoiseWord {
    id: number;
    text: string;
    top: string;
    left: string;
}

const NoiseAndSignal = () => {
    const [synthesized, setSynthesized] = useState(false);
    const [noiseWords, setNoiseWords] = useState<NoiseWord[]>([]);

    const phrases = [
        "Hi sir, we can do SEO for 1st page",
        "10 ChatGPT prompts for B2B",
        "Synergize scalable paradigms",
        "Just touching base on my last 14 emails",
        "We are the leading provider of solutions",
        "Unlock hyper-growth potential",
        "Buy our list of 100k verified leads",
        "Hope this email finds you well",
    ];

    useEffect(() => {
        if (synthesized) return;
        const interval = setInterval(() => {
            setNoiseWords(prev => {
                // FIX: Generate positions that avoid the center vertical zone
                // THE NOISE heading is vertically centered (approx 35%–65% top).
                // So we pick a position in the top 30% OR bottom 30% of the panel.
                const useTopZone = Math.random() > 0.5;
                const top = useTopZone
                    ? Math.random() * 28          // 0–28% (well above heading)
                    : 70 + Math.random() * 25;    // 70–95% (well below heading)

                // Horizontal: stay within the left panel width (0–55%)
                // but also avoid dead center left area (20-40%) to not crowd the heading
                let left: number;
                const useLeftEdge = Math.random() > 0.5;
                left = useLeftEdge
                    ? Math.random() * 18           // 0–18% (far left)
                    : 38 + Math.random() * 22;     // 38–60% (right side of noise panel)

                const word: NoiseWord = {
                    id: Date.now() + Math.random(),
                    text: phrases[Math.floor(Math.random() * phrases.length)],
                    top: `${top}%`,
                    left: `${left}%`,
                };
                return [...prev.slice(-40), word];
            });
        }, 200);
        return () => clearInterval(interval);
    }, [synthesized]);

    return (
        <section
            id="how-it-works"
            className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black cursor-pointer border-y border-white/10"
            onClick={() => setSynthesized(!synthesized)}
        >
            {/* Left panel: THE NOISE */}
            <motion.div
                initial={false}
                animate={{ width: synthesized ? "0%" : "50%", opacity: synthesized ? 0 : 1 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute left-0 top-0 bottom-0 bg-[#0d0b0b] overflow-hidden flex flex-col justify-center border-r border-white/10"
            >
                {/* Floating noise words — now positioned around the heading, not on it */}
                {noiseWords.map(word => (
                    <motion.div
                        key={word.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.05], y: [0, -10] }}
                        transition={{ duration: 6, times: [0, 0.1, 0.9, 1], ease: "linear" }}
                        className="absolute text-[10px] md:text-sm font-mono text-gray-300 bg-black/80 border border-white/10 p-2 md:p-3 whitespace-nowrap z-20 shadow-lg backdrop-blur-sm"
                        style={{ top: word.top, left: word.left }}
                    >
                        {word.text}
                    </motion.div>
                ))}

                {/* Grain overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

                {/* THE NOISE heading — sits clearly in the center, z-30 above noise words */}
                <div className="relative z-30 w-full flex justify-center text-center px-4">
                    <h2 className="text-3xl md:text-6xl font-black text-white/50 uppercase tracking-tighter">
                        The Noise
                    </h2>
                </div>
            </motion.div>

            {/* Right panel: THE SIGNAL */}
            <motion.div
                initial={false}
                animate={{
                    width: synthesized ? "100%" : "50%",
                    left: synthesized ? "0%" : "50%",
                    backgroundColor: synthesized ? "#0a0118" : "#0d0b0b",
                }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute top-0 bottom-0 flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden px-6 md:px-12 py-16 md:py-0"
            >
                <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                    <AnimatePresence mode="wait">
                        {synthesized ? (
                            <motion.div
                                key="merged"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col items-center w-full"
                            >
                                <span className="text-[#CCFF00] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block">Engineered for Pipeline</span>
                                <h2 className="text-4xl md:text-7xl lg:text-[90px] font-black text-white uppercase tracking-tighter leading-[1.1] mb-8">Clarity Over Chaos</h2>
                                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed mb-12">
                                    We replace fragmented, spray-and-pray marketing with a centralized AI + Human content engine. One system that compounds authority, captures intent, and converts category demand into qualified pipeline.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6 w-full text-left">
                                    {[
                                        { phase: "PHASE 01", title: "Strategic Extraction", desc: "We extract your proprietary IP through intensive founder interviews. No generic research, only lived experience." },
                                        { phase: "PHASE 02", title: "Engineered Distribution", desc: "AI systems splinter that IP into 30+ optimized touchpoints across SEO, LinkedIn, and Email simultaneously." },
                                        { phase: "PHASE 03", title: "Pipeline Capture", desc: "We build the automated funnels that turn that attention into booked meetings and closed-won revenue." },
                                    ].map((item, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.2 }} className="border-t border-[#CCFF00]/30 pt-4">
                                            <div className="text-[#CCFF00] font-mono text-xs mb-2 tracking-widest">{item.phase}</div>
                                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{item.title}</h3>
                                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="calm"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">The Signal</h2>
                                <p className="text-sm md:text-xl text-gray-400 font-serif italic">Click to synthesize.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Bottom CTA pill */}
            {!synthesized && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 text-white flex flex-col items-center gap-2 pointer-events-none"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(204,255,0,0.2)", "0 0 50px rgba(204,255,0,0.6)", "0 0 20px rgba(204,255,0,0.2)"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-black bg-[#CCFF00] px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-white/20 shadow-2xl"
                    >
                        Click Anywhere To Synthesize
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

// ─── Main HomeClient ───────────────────────────────────────────────────────────
export default function HomeClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const aboutImageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <main className="min-h-screen bg-[#0a0118] text-white relative selection:bg-neon selection:text-black" style={{ backgroundColor: "#0a0118", color: "white" }}>
            {/* Interactive Grid Background */}
            <div className="md:hidden">
                <InteractiveGrid />
            </div>
            <InteractiveGridDesktop />

            {/* Matrix Log Stream */}
            <MatrixLogStream side="left" />
            <MatrixLogStream side="right" />

            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            {/* Hero — Mobile */}
            <section className="relative min-h-screen flex items-start pt-32 md:pt-48 overflow-hidden md:hidden">
                <div className="relative z-10 container mx-auto px-6 md:px-16">
                    <div className="max-w-6xl">
                        <div className="mb-4 md:mb-8 text-white">
                            <AnimatedHeroHeading />
                        </div>
                        <div className="flex flex-col items-start gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                            <h2 className="text-lg md:text-2xl text-gray-200 max-w-4xl font-light leading-relaxed">
                                A full-stack content studio powered by <span className="text-[#CCFF00] font-[900]">AI precision</span> and <span className="text-[#CCFF00] font-[900]">senior human strategy</span>. <span className="text-[#CCFF00] font-[900]">Eight engines. One system. Compounding pipeline.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-start gap-8 opacity-0 animate-fade-in-up w-full" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                                <Button href="#how-it-works" className="w-full sm:w-auto px-8 py-4 text-lg shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:shadow-[0_0_50px_rgba(204,255,0,0.8)] transition-all duration-300 hover:-translate-y-1 bg-[#CCFF00] text-black hover:bg-white rounded-[4px] font-[900]">START THE ENGINE</Button>
                                <Button variant="secondary" className="w-full sm:w-auto border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] px-8 py-4 text-lg rounded-[4px] font-[900] transition-all duration-300 hover:-translate-y-1">GET IN TOUCH</Button>
                            </div>
                            <p className="text-xs md:text-sm font-medium text-gray-500">
                                <span className="text-gray-400">Led by Molina Rana</span> <span className="mx-2 text-gray-600">/</span> Paytm <span className="mx-2 text-gray-600">/</span> Bajaj Finserv <span className="mx-2 text-gray-600">/</span> Grant Thornton Bharat
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0118] to-transparent pointer-events-none z-0" />
            </section>

            {/* Hero — Desktop */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hidden md:flex">
                <div className="relative z-10 container mx-auto px-4">
                    <div className="max-w-6xl">
                        <AnimatedHeroHeading />
                        <div className="flex flex-col items-start gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl font-light leading-relaxed">
                                A full-stack content studio powered by <span className="text-[#CCFF00] font-[900]">AI precision</span> and <span className="text-[#CCFF00] font-[900]">senior human strategy</span>. <span className="text-[#CCFF00] font-[900]">Eight engines. One system. Compounding pipeline.</span>
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <Button href="#how-it-works" className="px-8 py-4 text-lg shadow-[0_0_40px_rgba(204,255,0,0.5)] hover:shadow-[0_0_50px_rgba(204,255,0,0.8)] transition-all duration-300 hover:-translate-y-1 bg-[#CCFF00] text-black hover:bg-white rounded-[4px] font-[900]">START THE ENGINE</Button>
                                <Button variant="secondary" className="border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] px-8 py-4 text-lg rounded-[4px] font-[900] transition-all duration-300 hover:-translate-y-1">GET IN TOUCH</Button>
                            </div>
                            <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                                Led by Molina Rana — Paytm / Bajaj Finserv / Grant Thornton
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0118] to-transparent pointer-events-none z-0" />
            </section>

            {/* Credibility Strip */}
            <div className="relative z-10 -mt-24 md:mt-0">
                <section className="py-10 md:py-16 border-gradient-y bg-[#0a0118] relative z-20">
                    <div className="w-full px-5 md:px-[80px] relative z-10 grid md:grid-cols-[200px_1fr] items-center gap-8 md:gap-12">
                        <h3 className="text-xs text-gray-500 font-medium uppercase tracking-widest text-center md:text-left whitespace-nowrap">Trusted by / Past work</h3>
                        <div className="relative w-full overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
                            {/* Logo marquee — simplified static version */}
                            <div className="flex items-center gap-8 overflow-hidden opacity-60">
                                {["Paytm", "Bajaj Finserv", "Grant Thornton", "HighRadius", "Aviso AI", "Reliance", "Allianz", "ScaleUp AI"].map((name, i) => (
                                    <span key={i} className="text-xs text-gray-400 font-mono uppercase tracking-widest whitespace-nowrap shrink-0">{name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* AI + Human Philosophy Strip */}
            <section className="py-12 md:py-16 bg-[#CCFF00] text-black relative z-10 overflow-hidden transform -skew-y-1 my-16 md:my-24 shadow-[0_0_50px_rgba(204,255,0,0.15)]">
                <div className="transform skew-y-1">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] mb-3 block opacity-80">Our Approach</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">The AI + Human Philosophy</h2>
                        <p className="text-lg md:text-2xl font-bold max-w-4xl mx-auto leading-snug">
                            AI creates the speed. Humans bring the strategy, taste, and truth. We don&apos;t replace expertise with automation; we arm senior strategists with autonomous engines to build compounding pipeline.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <div id="services">
                <div className="relative z-10 md:hidden">
                    <Services />
                </div>
                <ServicesDesktop />
            </div>

            {/* 4. Split-Screen Chaos vs. Calm */}
            <ChaosVsCalm />

            {/* Noise & Signal — THE FIXED SECTION */}
            <NoiseAndSignal />

            {/* Early Wins */}
            <GamifiedEarlyWins />

            {/* Testimonials */}
            <div className="md:hidden">
                <section id="testimonials" className="py-16 md:py-24 relative z-10 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-[900] mb-6 tracking-tight uppercase">WHAT PEOPLE SAY</motion.h2>
                            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em]">REAL WORDS FROM PEOPLE WHO&apos;VE SEEN THE WORK UP CLOSE.</motion.p>
                        </div>
                        <div className="relative w-full">
                            <div className="flex overflow-hidden mask-linear-fade">
                                <motion.div className="flex gap-6 w-max pl-4" animate={{ x: "-50%" }} transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }}>
                                    {[
                                        { quote: "Moxie turned our chaotic posting into a precise revenue engine. We stopped guessing and started dominating our niche.", name: "Anuraag Paul", company: "RELIANCE GROUP", image: "/anuraag-paul.png" },
                                        { quote: "We went from invisible to industry authority. Molina's framework isn't just content. It is business strategy disguised as posts.", name: "Aparupa Chakravarty", company: "SPATIAL EYE", image: "/aparupa-chakravarty.png" },
                                        { quote: "Finally, a system that respects my time. One hour with Molina creates a month of high-leverage assets. The clarity is unmatched.", name: "Kavita Rana", company: "SHARDA GLOBAL SCHOOL", image: "/kavita-rana.png" },
                                        { quote: "Moxie turned our chaotic posting into a precise revenue engine. We stopped guessing and started dominating our niche.", name: "Anuraag Paul", company: "RELIANCE GROUP", image: "/anuraag-paul.png" },
                                        { quote: "We went from invisible to industry authority. Molina's framework isn't just content. It is business strategy disguised as posts.", name: "Aparupa Chakravarty", company: "SPATIAL EYE", image: "/aparupa-chakravarty.png" },
                                        { quote: "Finally, a system that respects my time. One hour with Molina creates a month of high-leverage assets. The clarity is unmatched.", name: "Kavita Rana", company: "SHARDA GLOBAL SCHOOL", image: "/kavita-rana.png" },
                                    ].map((t, i) => (
                                        <div key={i} className="w-[85vw] md:w-[450px] shrink-0">
                                            <Card className="border-white/10 bg-black/60 p-8 h-full flex flex-col relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                                                <div className="absolute top-4 left-4 text-[#CCFF00] opacity-40 font-serif text-[60px] leading-none pointer-events-none select-none">&ldquo;</div>
                                                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light italic relative z-10 pt-4">&ldquo;{t.quote}&rdquo;</p>
                                                <div className="mt-auto flex items-center gap-3 relative z-10">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                                                        <img src={t.image} alt={`${t.name}, B2B client testimonial for Moxie Digital`} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-bold text-neon tracking-widest text-sm mb-1 uppercase">{t.name}</div>
                                                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{t.company}</div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <TestimonialsDesktop />

            {/* About */}
            <section id="about" className="py-16 md:py-40 relative z-10">
                <div className="container mx-auto px-6 md:px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <div className="contents md:block">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col md:hidden mb-8 text-center">
                                <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 block">THE OPERATOR</span>
                            </motion.div>
                            {/* Portrait Image Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{ y: aboutImageY }}
                                className="relative group lg:pr-12 order-2 md:order-1"
                            >
                                <div className="relative aspect-[3/4] w-[90%] mx-auto md:w-full rounded-sm overflow-hidden border-[6px] border-[#CCFF00] shadow-[16px_16px_0px_0px_#111] bg-[#0a0118]">
                                    <img
                                        src="/molina-rana-cutout.png"
                                        alt="Molina Rana, Senior B2B Content Marketing Consultant and Founder of Moxie Digital"
                                        className="w-full h-full object-cover object-top grayscale brightness-[1.05] contrast-[1.2]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col order-3 md:order-2 md:pl-8">
                            <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 hidden md:block">THE OPERATOR</span>
                            <h2 className="text-3xl md:text-5xl font-[900] text-white mb-6 md:mb-10 leading-none uppercase">I AM NOT AN AGENCY. I AM A PARTNER.</h2>
                            <div className="space-y-6 md:space-y-8 text-gray-300 text-lg leading-[1.6] font-medium px-4 md:px-0">
                                <p>Agencies charge for overhead. I charge for impact.</p>
                                <p>When you hire Moxie, you get me. I have built the growth systems for market leaders like Paytm, Bajaj Finserv, and Grant Thornton. Now I install those same systems for you.</p>
                                <p>No juniors. No account managers. No fluff. I am a senior operator running your content engine so you can stay in your zone of genius.</p>
                            </div>
                            <div className="mt-8 md:mt-12 flex flex-col items-center md:items-start">
                                <Button href="#services" className="bg-[#CCFF00] text-black px-8 py-4 font-[900] tracking-[1px] uppercase text-sm hover:bg-white transition-colors duration-300 rounded-[4px]">START THE ENGINE</Button>
                            </div>
                        </motion.div>
                    </div>
                </div >
            </section >

            {/* FAQ */}
            < section id="faq" className="py-16 md:py-24 relative z-10" >
                <div className="container mx-auto px-6 md:px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-4 block">THE KNOWLEDGE BASE</span>
                        <h2 className="text-3xl md:text-5xl font-[900] text-white uppercase">COMMON QUESTIONS</h2>
                    </div>
                    <div className="space-y-[40px]">
                        {[
                            { q: "What is Moxie Digital?", a: "Moxie Digital is a full-stack content studio powered by AI precision and senior human strategy. We build eight distinct content engines into a single compounding system that drives B2B pipeline." },
                            { q: "What is your AI + Human approach?", a: "AI creates the speed, and humans bring the strategy, taste, and truth. We use autonomous AI agents to research, draft, and optimize at scale, while senior strategists provide the editorial judgment and industry expertise." },
                            { q: "What services do you offer?", a: "We offer eight core engines: Content Repurposing, SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), LinkedIn Branding, Newsletters, Email Marketing, and custom AI Agents." },
                            { q: "What is Answer Engine Optimization (AEO)?", a: "AEO is the practice of optimizing your website and content so that AI-powered answer engines (like Perplexity, ChatGPT, and Google AI Overviews) cite your brand as a trusted source when users ask relevant questions." },
                            { q: "What is the time commitment required from me?", a: "For our flagship Content Repurposing engine, it is just one 60-minute interview per month. We extract your insights and turn that single hour into 30 days of strategic content across every channel." },
                            { q: "Can this content engine actually drive measurable B2B pipeline?", a: "Yes. We don't post for the sake of engagement. Every piece of content—whether it is an SEO article or an AI agent output—is designed to move a prospect through the buyer's journey toward a discovery call." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="border-gradient-b pb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between py-6 text-left group transition-colors"
                                >
                                    <span className="font-bold text-xl text-white group-hover:text-[#CCFF00] transition-colors">{item.q}</span>
                                    {openFaq === i ? <Minus className="text-[#CCFF00] shrink-0 ml-4 w-6 h-6" /> : <Plus className="text-[#CCFF00] shrink-0 ml-4 w-6 h-6" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <div className="pt-4 text-white text-lg font-medium leading-relaxed opacity-90 max-w-3xl">{item.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden z-10">
                <div className="w-full h-[1px] bg-[#CCFF00]" />
                <div className="container mx-auto px-6 md:px-4 pt-16 pb-24 max-w-6xl relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 block">THE DECISION</span>
                        <h2 className="text-4xl md:text-6xl font-[900] text-white mb-10 leading-[1.1] uppercase">STOP GUESSING.<br />START OPERATING.</h2>
                        <div className="space-y-6 text-white text-lg md:text-xl font-medium leading-[1.6] max-w-2xl mb-12 px-8 md:px-0">
                            <p>Agencies want your retainer. I want your results.</p>
                            <p>The system is built. The engine is ready to be installed. I only partner with 2 founders at a time to ensure deep impact. If you are ready for a revenue-first content strategy, let us talk.</p>
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="block w-[90%] sm:w-auto mx-auto md:mx-0">
                            <Button
                                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#CCFF00] text-black px-8 py-4 font-[900] tracking-[1px] text-sm uppercase rounded-[4px] border-none hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                BOOK YOUR ENGINE CALL
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                    <InteractiveGrid />
                </div>
            </section>
        </main>
    );
}
