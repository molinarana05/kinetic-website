"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import {
    ArrowRight,
    Search,
    Target,
    BarChart2,
    Zap,
    ChevronDown,
    FileText,
    Share2,
    Users,
    CheckCircle,
    AlertTriangle,
    Rocket,
    Shield,
    Layers,
} from "lucide-react";

/* ── constants ─────────────────────────────────────────── */

const calendarUrl =
    "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

/* ── FAQ data + JSON-LD ──────────────────────────────────── */

const faqs = [
    {
        q: "What should I look for in a SaaS SEO agency?",
        a: "Look for deep understanding of SaaS funnels, the ability to target commercial-intent keywords beyond blog writing, proof of ranking pages that influence pipeline, and a clear process covering content creation, on-page optimization, and reporting tied to revenue — not just traffic.",
    },
    {
        q: "How is SaaS SEO different from general SEO?",
        a: "SaaS SEO requires product-level understanding, buyer intent mapping, and content that helps prospects evaluate solutions. Buying journeys are longer, involve multiple stakeholders, and demand bottom-of-funnel pages, comparison content, and category clarity — not just blog posts chasing volume keywords.",
    },
    {
        q: "When should a SaaS company hire an SEO agency?",
        a: "When your rankings are weak despite having content, when rankings are okay but leads aren't materialising, when your team lacks bandwidth, when you're guessing on keywords, or when your pages aren't built for buyer intent — those are all clear signals it's time to bring in a specialist SaaS SEO agency.",
    },
    {
        q: "Do SaaS startups need SEO early?",
        a: "Yes. Early-stage SaaS companies that invest in commercial-intent SEO build compounding organic authority before competitors. Starting with even a handful of well-targeted BOFU pages can generate qualified pipeline months before paid channels become cost-effective at scale.",
    },
    {
        q: "What results should I expect from a SaaS SEO agency?",
        a: "Within the first 8–12 weeks you should see low-competition keyword rankings and indexed commercial pages. Over 3–6 months, expect ranking improvements for competitive terms, growing organic traffic from buyer-intent queries, and measurable pipeline contribution from search — not just impressions.",
    },
    {
        q: "How do I choose an SEO agency for B2B SaaS?",
        a: "Evaluate whether the agency targets commercial-intent keywords rather than vanity traffic, whether they can build comparison and use-case content, whether they understand SaaS funnels and buying committees, and whether their reporting connects organic search to pipeline and revenue.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

/* ── FAQ Component ───────────────────────────────────────── */

function FAQSection() {
    const [open, setOpen] = React.useState<number | null>(null);
    return (
        <section id="faq" className="py-20 px-6 bg-black/40 border-y border-white/5">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                        Questions & Answers
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                        SaaS SEO Agency — FAQ
                    </h2>
                </motion.div>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors group"
                            >
                                <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                                <ChevronDown
                                    size={16}
                                    className={`text-[#CCFF00] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            {open === i && (
                                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Main Page Component ─────────────────────────────────── */

export function SaaSSEOClient() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script
                id="faq-schema-saas-seo"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            {/* ═══════════ Section 1 · Hero ═══════════ */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10"
                    >
                        SaaS SEO Services
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        SEO Agency for<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">
                            SaaS Companies.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-4 leading-relaxed"
                    >
                        Moxie helps B2B SaaS brands grow through commercial-intent SEO, founder-led authority, and{" "}
                        <span className="text-white font-bold">
                            content systems built to attract buyers — not random clicks.
                        </span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-gray-500 text-sm mb-10 max-w-xl"
                    >
                        Pipeline-first SEO for SaaS startups, growth-stage products, and lean marketing teams ·{" "}
                        <span className="text-[#CCFF00]">Commercial intent, not vanity traffic</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href={calendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]"
                        >
                            Book a Strategy Call <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 2 · Why SaaS SEO Is Different ═══════════ */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                                The SaaS SEO Problem
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">
                                Why SaaS SEO Is<br />
                                Different.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                SEO for SaaS companies is not the same as local SEO or e-commerce SEO. SaaS buying journeys are longer, involve multiple decision-makers, and the traffic you attract is worthless unless it maps to actual buyer intent.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                You need bottom-of-funnel pages, comparison content, use-case pages, and category clarity.{" "}
                                <strong className="text-white">
                                    SaaS SEO has to support revenue, not blog vanity metrics.
                                </strong>
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                SaaS SEO needs product understanding, buyer intent mapping, and content that helps prospects evaluate solutions — not generic 2,000-word blog posts chasing informational keywords.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden group min-h-[340px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="170" y="20" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">SAAS SEO — TYPICAL AGENCY vs MOXIE</text>
                                <line x1="50" y1="30" x2="50" y2="210" stroke="#374151" strokeWidth="1" />
                                <line x1="50" y1="210" x2="320" y2="210" stroke="#374151" strokeWidth="1" />
                                {["M1", "M3", "M6", "M9"].map((q, i) => (
                                    <text key={q} x={95 + i * 60} y="225" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">{q}</text>
                                ))}
                                {/* Generic agency: traffic up, pipeline flat */}
                                <polyline points="50,180 110,140 170,100 230,70 290,45" stroke="#4b5563" strokeWidth="2" strokeDasharray="5 3" strokeLinejoin="round" />
                                <text x="295" y="42" fill="#6b7280" fontSize="7" fontFamily="monospace">Traffic ↑</text>
                                <polyline points="50,195 110,193 170,196 230,198 290,200" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 3" strokeLinejoin="round" />
                                <text x="295" y="202" fill="#ef4444" fontSize="7" fontFamily="monospace">Pipeline →</text>
                                {/* Moxie: traffic moderate, pipeline up */}
                                <polyline points="50,185 110,170 170,150 230,125 290,100" stroke="#CCFF00" strokeWidth="2.5" strokeLinejoin="round" />
                                {[50, 110, 170, 230, 290].map((x, i) => {
                                    const ys = [185, 170, 150, 125, 100];
                                    return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#CCFF00" />;
                                })}
                                <text x="295" y="98" fill="#CCFF00" fontSize="7" fontFamily="monospace">Pipeline ↑</text>
                                {/* Legend */}
                                <rect x="55" y="35" width="10" height="4" fill="#4b5563" rx="1" /><text x="70" y="40" fill="#9ca3af" fontSize="7" fontFamily="monospace">Generic Agency Traffic</text>
                                <rect x="55" y="48" width="10" height="4" fill="#CCFF00" rx="1" /><text x="70" y="53" fill="#9ca3af" fontSize="7" fontFamily="monospace">Moxie Pipeline Growth</text>
                                <text x="170" y="245" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">TRAFFIC ALONE DOES NOT BUILD PIPELINE</text>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 3 · What Moxie Actually Does ═══════════ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            SaaS SEO Services
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                            What Moxie Actually Does
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Not another generic SEO retainer. Every deliverable is built to move pipeline for SaaS companies.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: <Search size={32} />,
                                title: "Keyword Strategy Around Buyer Intent",
                                desc: "We map every keyword to a specific stage of the SaaS buying journey. No vanity volume — only commercial-intent terms that signal a prospect is evaluating solutions and ready to act.",
                            },
                            {
                                icon: <Target size={32} />,
                                title: "Commercial Pages & Comparison Content",
                                desc: "Alternative pages, competitor comparisons, and use-case content that capture buyers mid-evaluation. These are the pages that actually influence pipeline for SaaS companies.",
                            },
                            {
                                icon: <FileText size={32} />,
                                title: "BOFU Blog Content That Ranks & Converts",
                                desc: "Bottom-of-funnel content targeting the exact queries your buyers search before signing. Every article is built to rank and drive qualified leads — not just impressions.",
                            },
                            {
                                icon: <Layers size={32} />,
                                title: "On-Page SEO & Internal Linking",
                                desc: "Technical on-page optimization, semantic structure, and internal linking architecture that tells search engines exactly what your SaaS product does and who it's for.",
                            },
                            {
                                icon: <Share2 size={32} />,
                                title: "Content Repurposing & Distribution",
                                desc: "Every piece of SEO content gets repurposed for LinkedIn, email, and founder-led channels. We extend the reach of organic content beyond search to build authority everywhere.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-8 rounded-sm group hover:border-[#CCFF00]/50 transition-colors"
                            >
                                <div className="text-[#CCFF00] mb-4">{item.icon}</div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 4 · Who This Is For ═══════════ */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            Built For
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                            Who This Is For
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Our SaaS SEO services are designed for companies that need real pipeline, not agency busywork.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {[
                            {
                                icon: <Rocket size={28} />,
                                label: "B2B SaaS Companies",
                                detail: "You sell software to other businesses and need organic search to reach decision-makers — not casual browsers.",
                            },
                            {
                                icon: <Zap size={28} />,
                                label: "SaaS Startups That Need Traction",
                                detail: "Early-stage teams that can't wait 18 months for content to compound. You need high-intent pages ranking fast.",
                            },
                            {
                                icon: <Users size={28} />,
                                label: "Founder-Led SaaS Brands",
                                detail: "Founders who want SEO that sounds like their brand — not agency-generated filler that kills credibility.",
                            },
                            {
                                icon: <BarChart2 size={28} />,
                                label: "Lean Marketing Teams",
                                detail: "Small teams that need strategy and execution without hiring 5 people. We plug the gap between intention and output.",
                            },
                            {
                                icon: <AlertTriangle size={28} />,
                                label: "Companies With Stale Content",
                                detail: "You already have content but it's not driving qualified traffic. Rankings exist but pipeline doesn't follow.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.label}
                                variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-6 rounded-sm group hover:border-[#CCFF00]/50 transition-colors flex gap-4"
                            >
                                <div className="text-[#CCFF00] flex-shrink-0 mt-1">{item.icon}</div>
                                <div>
                                    <h3 className="text-base font-black uppercase tracking-widest text-white mb-2">
                                        {item.label}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 5 · What to Look For ═══════════ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-14"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            Evaluation Criteria
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                            What to Look For in a SaaS SEO Agency
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Not every SEO agency understands SaaS. Here is what separates a real SaaS SEO partner from a generic vendor.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="space-y-4"
                    >
                        {[
                            "Deep understanding of SaaS funnels — TOFU, MOFU, BOFU — and how search maps to each stage.",
                            "Ability to target commercial-intent keywords that influence pipeline, not just informational traffic.",
                            "Capability beyond blog writing — landing pages, comparison pages, use-case content, and technical documentation.",
                            "Proof of ranking pages that actually influence pipeline and revenue for SaaS companies.",
                            "Clear process for content strategy, on-page optimization, and reporting tied to business outcomes.",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-sm p-5 group hover:border-[#CCFF00]/50 transition-colors"
                            >
                                <CheckCircle size={20} className="text-[#CCFF00] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300 text-base leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 6 · When to Switch from DIY ═══════════ */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-14"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            Warning Signs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
                            When to Switch from DIY SEO to an Agency
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            DIY SEO works until it doesn't. Here are the signs it's time to bring in a specialist SaaS SEO agency.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-2 gap-5"
                    >
                        {[
                            "You have content but rankings are weak or stagnant.",
                            "Rankings are okay but qualified leads are not coming.",
                            "Your team does not have bandwidth for consistent SEO execution.",
                            "You are guessing on keywords instead of using buyer-intent data.",
                            "Your pages are not built for buyer intent — they attract the wrong audience.",
                            "You've spent on a generic agency and pipeline hasn't moved.",
                        ].map((sign, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-sm p-5 group hover:border-[#CCFF00]/50 transition-colors"
                            >
                                <AlertTriangle size={18} className="text-[#CCFF00] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300 text-sm leading-relaxed">{sign}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 7 · Why Moxie ═══════════ */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                            The Moxie Difference
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
                            Why Moxie
                        </h2>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {[
                            {
                                icon: <Shield size={28} />,
                                title: "Not a Bloated Agency",
                                desc: "No account managers who've never written a SaaS landing page. You work with strategists who understand your product, market, and buyer.",
                            },
                            {
                                icon: <Target size={28} />,
                                title: "Built for Lean B2B SaaS Teams",
                                desc: "We are the SEO team you don't have to hire. Strategy and execution in one place — no 5-person agency overhead for a 3-person marketing team.",
                            },
                            {
                                icon: <Zap size={28} />,
                                title: "Strategy + Execution",
                                desc: "We don't hand you a 40-page audit and wish you luck. We build the keyword strategy, write the content, optimize the pages, and track the pipeline impact.",
                            },
                            {
                                icon: <FileText size={28} />,
                                title: "Content That Ranks and Sounds Like a Brand",
                                desc: "No generic AI-generated filler. Every piece of content is built to rank on search engines and sound like your actual brand — because SaaS buyers can smell template content instantly.",
                            },
                            {
                                icon: <Share2 size={28} />,
                                title: "SEO + Repurposing + Founder Visibility",
                                desc: "We don't do SEO in a vacuum. Your organic content feeds LinkedIn, email, and founder-led channels — the full organic engine, not just one channel.",
                            },
                            {
                                icon: <BarChart2 size={28} />,
                                title: "Pipeline Reporting, Not Vanity Dashboards",
                                desc: "We report on revenue influenced by organic search — not just sessions, impressions, or keyword counts. If it doesn't move pipeline, it doesn't matter.",
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-8 rounded-sm group hover:border-[#CCFF00]/50 transition-colors"
                            >
                                <div className="text-[#CCFF00] mb-4">{item.icon}</div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════ Section 8 · FAQ ═══════════ */}
            <FAQSection />

            {/* ═══════════ Related Services — Internal Linking ═══════════ */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500 mb-6">
                        Related Services & Reading
                    </h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "B2B SEO Agency India", href: "/services/b2b-seo" },
                            { label: "Content Marketing Agency India", href: "/services/content-marketing-india" },
                            { label: "B2B Content Marketing Agency", href: "/services/b2b-content-marketing" },
                            { label: "LinkedIn Ghostwriting Agency", href: "/services/linkedin-ghostwriting" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="border border-white/10 rounded-sm p-4 text-sm text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all flex items-center justify-between group"
                            >
                                {l.label}{" "}
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {[
                            { label: "Read: Why B2B SEO Agencies in India Fail", href: "/blog/b2b-seo-agency-india" },
                            { label: "Read: How to Choose a B2B Marketing Agency", href: "/blog/how-to-choose-b2b-marketing-agency" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="border border-white/5 rounded-sm p-4 text-sm text-gray-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/20 transition-all flex items-center gap-2 group"
                            >
                                <span className="text-[#CCFF00]/50 font-mono text-xs">↗</span> {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ Final CTA ═══════════ */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">
                        Stop Chasing Traffic.<br />
                        Start Building Pipeline.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Moxie helps B2B SaaS companies turn SEO into pipeline by combining commercial-intent content, positioning, and organic distribution. Let's talk about your search strategy.
                    </p>
                    <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl"
                    >
                        Book Your Strategy Call <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
