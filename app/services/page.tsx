"use client";

import { useState, useRef } from "react";
import {
    motion, useInView, useMotionValue, useTransform, AnimatePresence
} from "framer-motion";
import {
    Zap, Wrench, Target, FileText, Lightbulb, TrendingUp,
    Phone, ArrowUpRight, CheckCircle2, XCircle, ChevronDown
} from "lucide-react";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

/* ─── Animated Counter ─────────────────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    if (inView && count === 0 && to > 0) {
        const step = to / 60;
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= to) { current = to; clearInterval(timer); }
            setCount(Math.round(current));
        }, 16);
    }

    return <span ref={ref}>{inView ? count : 0}{suffix}</span>;
}

/* ─── Magnetic Button ──────────────────────────────────────────────────── */
function MagneticBtn({
    children, href, className, style
}: {
    children: React.ReactNode; href: string; className?: string; style?: React.CSSProperties
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [8, -8]);
    const rotateY = useTransform(x, [-50, 50], [-8, 8]);

    function handleMouse(e: React.MouseEvent<HTMLAnchorElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            style={{ x, y, rotateX, rotateY, transformPerspective: 800, ...style }}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
        >
            {children}
        </motion.a>
    );
}

/* ─── Data ─────────────────────────────────────────────────────────────── */
const stats = [
    { value: 348, suffix: "%", label: "Conversion Growth", sub: "Bajaj Finserv", logo: "/company-bajaj-finserv.png" },
    { value: 80, suffix: "%", label: "LinkedIn Follower Growth", sub: "HighRadius", logo: "/company-highradius.png" },
    { value: 38, suffix: "%", label: "QoQ Inbound Demo Growth", sub: "Aviso AI", logo: "/company-aviso-ai.png" },
    { value: 50, suffix: "%", label: "Organic Traffic Growth", sub: "Grant Thornton", logo: "/company-grant-thornton.png" },
];

const services = [
    {
        id: "founder-engine",
        badge: "FLAGSHIP",
        title: "The Founder Engine",
        tagline: "Positioning that sticks. Pipeline that grows.",
        audience: "B2B SaaS · DevTools · AI · Consulting",
        timeline: "4-6 weeks",
        color: "#CCFF00",
        Icon: Zap,
        deliverables: [
            { name: "Monthly 60-Min Extraction Session", desc: "One hour with you. A month of high-authority content." },
            { name: "Full-Funnel Content Strategy", desc: "LinkedIn, long-form, email, all pulling toward pipeline." },
            { name: "Community and Advocacy Loops", desc: "Turn your team and customers into amplifiers." },
            { name: "Positioning and Messaging Refresh", desc: "ICP-first messaging that speaks to buyers, not browsers." },
            { name: "Pipeline Reporting and Analytics", desc: "MQLs, SALs, inbound demos, tracked weekly." },
        ],
        outcomes: ["Inbound demo growth", "LinkedIn authority", "Lower CAC via content", "Consistent posting without your time"],
    },
    {
        id: "growth-sprint",
        badge: "RAPID",
        title: "Growth Sprint",
        tagline: "Rapid results. No long-term lock-in.",
        audience: "Founders and teams needing quick wins",
        timeline: "2-3 weeks",
        color: "#a78bfa",
        Icon: ArrowUpRight,
        deliverables: [
            { name: "Deep-Dive Strategy Audit", desc: "Full teardown of your current brand, content, and funnel." },
            { name: "90-Day Battle Plan", desc: "A prioritised playbook you can hand to any marketer." },
            { name: "LinkedIn Profile Overhaul", desc: "Turn your profile into an inbound asset." },
            { name: "5 Flagship Content Pieces", desc: "Hook-driven pieces built from your unique POV." },
            { name: "Competitor Intelligence Report", desc: "Know exactly where you can own a niche." },
        ],
        outcomes: ["Immediate clarity", "Content to run with today", "Professional brand presence", "Competitive awareness"],
    },
    {
        id: "consulting",
        badge: "BESPOKE",
        title: "Custom Consulting",
        tagline: "Complex teams. Bespoke strategy.",
        audience: "Enterprises · Scale-ups · Marketing teams",
        timeline: "Scoped per engagement",
        color: "#38bdf8",
        Icon: Wrench,
        deliverables: [
            { name: "Workshops and Strategy Intensives", desc: "Half-day or full-day sessions with your marketing team." },
            { name: "Team Training and Playbooks", desc: "Proprietary frameworks your team can run independently." },
            { name: "Martech Stack Audit and Optimisation", desc: "Cut costs 30-60% while improving campaign output." },
            { name: "ABM Campaign Architecture", desc: "Account-based plays for enterprise sales cycles." },
            { name: "Demand Gen Engine Design", desc: "Full-funnel from awareness to booked meetings." },
        ],
        outcomes: ["Team capability uplift", "Ops cost reduction", "Scalable playbooks", "Senior strategy without headcount"],
    },
];

/* ─── Process Steps for Conveyor Belt ─────────────────────────────────── */
const processSteps = [
    { step: "01", title: "Discovery Call", desc: "30 minutes. We map your ICP, current state, and biggest growth lever.", Icon: Phone },
    { step: "02", title: "Strategy Blueprint", desc: "A custom plan built around your business model, not a template.", Icon: FileText },
    { step: "03", title: "Extraction Session", desc: "We mine your expertise, POV, and stories into high-value content.", Icon: Lightbulb },
    { step: "04", title: "Build and Launch", desc: "Content production, distribution, and community activation running.", Icon: Zap },
    { step: "05", title: "Measure and Scale", desc: "Weekly reporting on MQLs, demos, and pipeline contribution.", Icon: TrendingUp },
];

const faqs = [
    {
        q: "How much of my time will this take?",
        a: "The Founder Engine is designed around a monthly 60-minute extraction session. That is it. We handle everything else: strategy, writing, posting, reporting."
    },
    {
        q: "Do I need a large team or budget?",
        a: "No. Most clients are lean founding teams. We are built for challenger brands doing real revenue but without agency-sized budgets. We bring the senior strategy they cannot otherwise afford."
    },
    {
        q: "What results can I expect and when?",
        a: "Most clients see inbound inquiries from LinkedIn within the first 30 days of consistent posting. Meaningful pipeline impact typically shows in months 2-3. We track and report everything weekly."
    },
    {
        q: "Is this just content writing?",
        a: "No. Content is the output. The input is positioning, ICP analysis, competitive intelligence, community building, and marketing ops. Content is what makes it visible. The engine is what makes it convert."
    },
    {
        q: "What industries do you specialise in?",
        a: "B2B SaaS, AI, FinTech, DevTools, Consulting, and B2B products with 30-180 day sales cycles. We have worked across India, EMEA, and North America markets."
    },
];

/* ─── Conveyor Belt Component ──────────────────────────────────────────── */
function ConveyorBelt() {
    const doubled = [...processSteps, ...processSteps, ...processSteps];

    return (
        <div className="relative overflow-hidden py-4">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

            {/* Track line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent" />

            <motion.div
                className="flex gap-5"
                style={{ width: "max-content" }}
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
                {doubled.map((step, i) => (
                    <motion.div
                        key={`${step.step}-${i}`}
                        className="flex-shrink-0 w-72 bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative group hover:border-[#CCFF00]/40 transition-all duration-300"
                        whileHover={{ scale: 1.03, y: -4 }}
                    >
                        {/* Step number */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center group-hover:bg-[#CCFF00]/20 transition-colors">
                                <step.Icon size={18} className="text-[#CCFF00]" strokeWidth={2} />
                            </div>
                            <span className="text-[10px] font-black text-[#CCFF00] font-mono tracking-[0.3em]">{step.step}</span>
                        </div>
                        <h3 className="font-black text-white text-base mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>

                        {/* Connector arrow (not on last of each set) */}
                        {(i % processSteps.length) !== processSteps.length - 1 && (
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-full flex items-center justify-center">
                                <span className="text-[#CCFF00] text-xs font-black">›</span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

/* ─── Company Logo Component ───────────────────────────────────────────── */
function CompanyLogo({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
    return (
        <div className="h-5 flex items-center">
            {/* Try image, fallback to styled text */}
            <span className="text-xs font-bold text-gray-500 tracking-tight">{fallback}</span>
        </div>
    );
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#0a0118] text-white overflow-x-hidden">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="relative pt-28 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center">
                {/* Animated background glow */}
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #CCFF00 0%, transparent 70%)" }}
                    animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#CCFF00] rounded-full opacity-40 pointer-events-none"
                        style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 20}%` }}
                        animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                ))}

                <div className="max-w-5xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em]">Services</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#CCFF00]/40 to-transparent" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6"
                    >
                        Marketing that
                        <br />
                        <span className="text-[#CCFF00] relative inline-block">
                            moves pipeline
                            <motion.span
                                className="absolute -bottom-1 left-0 h-1 bg-[#CCFF00] rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-10"
                    >
                        Not another agency retainer. A 360 degree growth operator who runs brand, demand gen, content, and ops as one system and reports on pipeline, not posts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <MagneticBtn href={BOOKING_URL}
                            className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm cursor-pointer">
                            Book a Free Strategy Call
                            <ArrowUpRight size={16} />
                        </MagneticBtn>
                        <Link href="#services-detail"
                            className="inline-flex items-center gap-2 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all text-sm">
                            See All Services
                            <ChevronDown size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ── STATS ────────────────────────────────────────────────── */}
            <section className="py-16 border-gradient-y bg-black/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-black text-[#CCFF00] tabular-nums">
                                    <Counter to={s.value} suffix={s.suffix} />
                                </div>
                                <div className="text-white font-bold text-sm mt-1">{s.label}</div>
                                <div className="flex items-center justify-center gap-1.5 mt-1">
                                    {s.logo ? (
                                        <div className="h-4 relative flex items-center">
                                            <Image
                                                src={s.logo}
                                                alt={`${s.sub} - Moxie Digital B2B Content Client`}
                                                width={60}
                                                height={16}
                                                className="object-contain opacity-60 filter grayscale"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                    const next = (e.target as HTMLImageElement).nextSibling as HTMLElement;
                                                    if (next) next.style.display = 'block';
                                                }}
                                            />
                                            <span className="text-gray-600 text-xs font-mono hidden">{s.sub}</span>
                                        </div>
                                    ) : (
                                        <span className="text-gray-600 text-xs font-mono">{s.sub}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES DETAIL ──────────────────────────────────────── */}
            <section id="services-detail" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase">What We Do</h2>
                        <div className="w-16 h-1 bg-[#CCFF00] mb-6" />
                        <p className="text-gray-400 max-w-xl">Three engagement models. Same obsession: booked meetings, not vanity metrics.</p>
                    </motion.div>

                    {/* Tab Switcher */}
                    <div className="flex gap-2 mb-10 flex-wrap">
                        {services.map((s, i) => (
                            <motion.button
                                key={s.id}
                                onClick={() => setActiveService(i)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${activeService === i
                                    ? "text-black shadow-lg"
                                    : "border border-white/10 text-gray-400 hover:border-white/30 bg-black/20"
                                    }`}
                                style={activeService === i ? { backgroundColor: s.color } : {}}
                            >
                                <s.Icon size={14} strokeWidth={2.5} />
                                {s.title}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Service Panel */}
                    <AnimatePresence mode="wait">
                        {services.map((s, i) => activeService === i && (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                                className="grid md:grid-cols-2 gap-8"
                            >
                                {/* Left */}
                                <div className="border border-white/10 rounded-2xl p-8 bg-black/30 relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0 opacity-5 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at 30% 50%, ${s.color}, transparent 70%)` }}
                                    />
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                                            style={{ backgroundColor: `${s.color}18`, border: `1px solid ${s.color}40` }}>
                                            <s.Icon size={22} style={{ color: s.color }} strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest border rounded-full px-3 py-1"
                                            style={{ color: s.color, borderColor: `${s.color}50`, backgroundColor: `${s.color}10` }}>
                                            {s.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-black mb-2" style={{ color: s.color }}>{s.title}</h3>
                                    <p className="text-white text-lg font-bold mb-1 border-l-2 pl-4" style={{ borderColor: s.color }}>{s.tagline}</p>
                                    <p className="text-gray-500 text-sm mb-6 ml-6">For: {s.audience}</p>

                                    <div className="mb-6">
                                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">You will walk away with:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {s.outcomes.map(o => (
                                                <span key={o} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">{o}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between border-gradient-t pt-5">
                                        <span className="text-gray-500 text-sm font-mono">Timeline: <span className="text-white font-bold">{s.timeline}</span></span>
                                        <MagneticBtn href={BOOKING_URL}
                                            className="text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl cursor-pointer flex items-center gap-2"
                                            style={{ backgroundColor: s.color, color: "black" }}>
                                            Book a Call <ArrowUpRight size={13} />
                                        </MagneticBtn>
                                    </div>
                                </div>

                                {/* Right - Deliverables */}
                                <div className="space-y-3">
                                    <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">What is Included</p>
                                    {s.deliverables.map((d, j) => (
                                        <motion.div
                                            key={d.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: j * 0.07, duration: 0.3 }}
                                            className="border border-white/10 rounded-xl p-5 bg-black/20 hover:border-white/20 transition-colors group"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                                                    style={{ backgroundColor: s.color, boxShadow: `0 0 8px ${s.color}` }} />
                                                <div>
                                                    <p className="font-bold text-white text-sm group-hover:text-[#CCFF00] transition-colors">{d.name}</p>
                                                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{d.desc}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* ── HOW IT WORKS - CONVEYOR BELT ────────────────────────── */}
            <section className="py-24 bg-black/40 border-gradient-y overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase">How It Works</h2>
                        <div className="w-16 h-1 bg-[#CCFF00] mb-4" />
                        <p className="text-gray-400 max-w-xl">From first call to booked pipeline. Here is the exact process.</p>
                    </motion.div>
                </div>

                {/* Conveyor Belt */}
                <ConveyorBelt />

                {/* CTA below belt */}
                <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
                    <MagneticBtn href={BOOKING_URL}
                        className="inline-flex items-center gap-2 border border-[#CCFF00]/40 text-[#CCFF00] font-black uppercase tracking-widest px-8 py-3 rounded-xl text-xs cursor-pointer hover:bg-[#CCFF00]/10 transition-colors">
                        Start at Step 01: Book Discovery Call
                        <Target size={14} />
                    </MagneticBtn>
                </div>
            </section>

            {/* ── WHO IT IS FOR ────────────────────────────────────────── */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase">Who It is For</h2>
                        <div className="w-16 h-1 bg-[#CCFF00] mb-4" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border border-[#CCFF00]/30 rounded-2xl p-8 bg-[#CCFF00]/5"
                        >
                            <h3 className="font-black text-[#CCFF00] uppercase tracking-tight text-lg mb-5 flex items-center gap-2">
                                <CheckCircle2 size={20} className="text-[#CCFF00]" />
                                Perfect Fit
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "B2B founders who know content matters but do not have time to do it right",
                                    "SaaS companies with 30-180 day sales cycles and enterprise buyers",
                                    "Teams that want inbound leads, not just impressions",
                                    "Brands that have a story worth telling but have not found the system",
                                    "Marketing leaders who need a senior operator, not another agency layer",
                                ].map(item => (
                                    <li key={item} className="flex gap-3 text-gray-200 text-sm leading-relaxed">
                                        <span className="text-[#CCFF00] flex-shrink-0 font-bold mt-0.5">+</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border border-white/10 rounded-2xl p-8 bg-black/20"
                        >
                            <h3 className="font-black text-gray-400 uppercase tracking-tight text-lg mb-5 flex items-center gap-2">
                                <XCircle size={20} />
                                Not a Good Fit
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Brands looking for cheap content production without strategy",
                                    "Companies expecting 1,000 followers in week 1",
                                    "Teams that need 40 generic posts a month but nothing cohesive",
                                    "Businesses with no clear ICP or value proposition yet",
                                    "Anyone looking for a hands-off vendor to outsource thinking to",
                                ].map(item => (
                                    <li key={item} className="flex gap-3 text-gray-500 text-sm leading-relaxed">
                                        <span className="text-gray-600 flex-shrink-0 font-bold mt-0.5">-</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────────────────────── */}
            <section className="py-24 px-6 bg-black/40 border-gradient-t">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-black tracking-tighter mb-3 uppercase">FAQ</h2>
                        <div className="w-16 h-1 bg-[#CCFF00]" />
                    </motion.div>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                className="border border-white/10 rounded-2xl overflow-hidden bg-black/20"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-7 py-5 text-left group"
                                >
                                    <span className="font-bold text-white text-sm pr-4 group-hover:text-[#CCFF00] transition-colors">{faq.q}</span>
                                    <motion.span
                                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="text-[#CCFF00] font-black text-xl flex-shrink-0"
                                    >+</motion.span>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                        >
                                            <p className="px-7 pb-6 text-gray-400 text-sm leading-relaxed border-gradient-t pt-4">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ─────────────────────────────────────────────── */}
            <section className="py-28 px-6 relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(204,255,0,0.07) 0%, transparent 70%)" }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-5 block">Ready When You Are</span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                            Stop posting.<br /><span className="text-[#CCFF00]">Start converting.</span>
                        </h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            Book a free 30-minute strategy call. You will leave with a clear picture of what is blocking your pipeline and exactly how to fix it, whether you work with us or not.
                        </p>
                        <MagneticBtn href={BOOKING_URL}
                            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-12 py-5 rounded text-base cursor-pointer shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:shadow-[0_0_60px_rgba(204,255,0,0.5)] transition-shadow">
                            Book Your Free Strategy Call
                            <ArrowUpRight size={20} />
                        </MagneticBtn>
                        <p className="text-gray-600 text-xs mt-5 font-mono">No commitment. No pitch deck. Just strategy.</p>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
