"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { NavbarDesktop } from "./NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, FileText, Zap, Target, BarChart2, Users, ChevronDown } from "lucide-react";

const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

type Stat = { value: string; label: string };
type Props = {
    city: string;
    subtitle: string;
    heroLine1: string;
    heroLine2: string;
    problem: string;
    problemChart: "bangalore" | "mumbai" | "delhi" | "hyderabad";
    stats: Stat[];
    slug: string;
};

function getCityFaqs(city: string) {
    return [
        { q: `Why work with a specialized B2B content marketing agency in ${city}?`, a: `Generic agencies in ${city} use high-volume, B2C playbooks that fail for enterprise software sales. Moxie Digital specializes exclusively in B2B SaaS and technical consulting, creating authority-driven content that actually converts your target buying committee.` },
        { q: `Do you have offices in ${city}?`, a: `Moxie Digital is a remote-first agency. While we serve many enterprise and scale-up clients based in ${city}, our distributed team model ensures your retainer pays for top-tier content strategy, not expensive office overhead in major tech hubs.` },
        { q: `What results can a ${city} B2B company expect?`, a: `We optimize for pipeline over traffic. Expect improved search rankings for commercial terms within 8-12 weeks, increased profile engagement from target technical ICPs on LinkedIn, and measurable inbound leads tied directly to content touches.` },
        { q: `How do you capture complex technical narratives?`, a: `We never rely on AI wrappers for primary research. Our strategy relies on deep, 60-minute subject matter expert interviews every month with your founders or technical leads to build proprietary insights that resonate with senior technical buyers.` }
    ];
}

// Each city gets a unique SVG chart
function CityChart({ city }: { city: Props["problemChart"] }) {
    if (city === "bangalore") {
        // Bar chart: Generic Agency vs Moxie — Signal in content
        return (
            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">CONTENT QUALITY: GENERIC vs SIGNAL-FIRST</text>
                <line x1="50" y1="220" x2="310" y2="220" stroke="#374151" strokeWidth="1" />
                <line x1="50" y1="30" x2="50" y2="220" stroke="#374151" strokeWidth="1" />
                {/* Generic Agency Bar */}
                <rect x="80" y="170" width="60" height="50" fill="#374151" rx="2" />
                <text x="110" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">25%</text>
                <text x="110" y="235" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Generic Agency</text>
                <text x="110" y="244" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">Technical Depth</text>
                {/* Moxie Bar */}
                <rect x="200" y="60" width="60" height="160" fill="#CCFF00" fillOpacity="0.25" stroke="#CCFF00" strokeWidth="1" rx="2" />
                <text x="230" y="55" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace">90%</text>
                <text x="230" y="235" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">Moxie Digital</text>
                <text x="230" y="244" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">Technical Depth</text>
                <text x="170" y="255" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">SIGNAL DEPTH IN PUBLISHED CONTENT</text>
            </svg>
        );
    }
    if (city === "mumbai") {
        // Timeline: Enterprise sales cycle vs content cadence mismatch
        return (
            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">CONTENT CADENCE VS ENTERPRISE SALES CYCLE</text>
                {/* Timeline axis */}
                <line x1="40" y1="130" x2="310" y2="130" stroke="#374151" strokeWidth="1.5" />
                {/* Months */}
                {["M1", "M3", "M6", "M9", "M12", "M18"].map((m, i) => {
                    const x = 40 + i * 52;
                    return (
                        <g key={m}>
                            <line x1={x} y1="125" x2={x} y2="135" stroke="#374151" strokeWidth="1" />
                            <text x={x} y="147" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">{m}</text>
                        </g>
                    );
                })}
                {/* Generic agency — only posts for first 3 months then stops */}
                <rect x="40" y="90" width="104" height="30" fill="#374151" fillOpacity="0.6" rx="2" />
                <text x="92" y="109" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Generic Agency Active</text>
                {/* Moxie — full 18-month nurture */}
                <rect x="40" y="55" width="270" height="30" fill="#CCFF00" fillOpacity="0.18" stroke="#CCFF00" strokeWidth="1" rx="2" />
                <text x="175" y="74" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">Moxie Long-Cycle Nurture → Deal Closed</text>
                {/* Labels */}
                <text x="35" y="80" fill="#6b7280" fontSize="7" fontFamily="monospace" textAnchor="end">Moxie</text>
                <text x="35" y="110" fill="#6b7280" fontSize="7" fontFamily="monospace" textAnchor="end">Generic</text>
                {/* Deal icon */}
                <circle cx="310" cy="70" r="10" fill="#CCFF00" fillOpacity="0.3" stroke="#CCFF00" strokeWidth="1.5" />
                <text x="310" y="74" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">✓</text>
                <text x="170" y="255" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">18-MONTH ENTERPRISE SALES CYCLE — MUMBAI AVERAGE</text>
            </svg>
        );
    }
    if (city === "delhi") {
        // Volume vs Revenue scatter: lots of content, no revenue
        return (
            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">CONTENT VOLUME vs QUALIFIED PIPELINE</text>
                <line x1="50" y1="30" x2="50" y2="210" stroke="#374151" strokeWidth="1" />
                <line x1="50" y1="210" x2="310" y2="210" stroke="#374151" strokeWidth="1" />
                <text x="170" y="225" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">Content Volume →</text>
                <text x="20" y="130" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace" transform="rotate(-90,20,130)">Pipeline →</text>
                {/* Generic agency dots — high volume, near-zero pipeline */}
                {[[80,205],[120,202],[160,200],[190,203],[230,198],[270,205]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="5" fill="#ef4444" fillOpacity="0.7" />
                ))}
                <text x="220" y="192" fill="#ef4444" fontSize="7" fontFamily="monospace">Volume-first</text>
                {/* Moxie dots — moderate volume, high pipeline */}
                {[[80,140],[110,110],[130,80],[160,60]].map(([x,y],i) => (
                    <circle key={i} cx={x} cy={y} r="5" fill="#CCFF00" fillOpacity="0.8" />
                ))}
                <text x="170" y="55" fill="#CCFF00" fontSize="7" fontFamily="monospace">Signal-first</text>
                <text x="170" y="245" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">NCR AGENCY OUTPUT — 90-DAY SPRINT ANALYSIS</text>
            </svg>
        );
    }
    // hyderabad — trust score over time
    return (
        <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">ENTERPRISE TRUST SCORE — AI vs HUMAN CONTENT</text>
            <line x1="50" y1="30" x2="50" y2="210" stroke="#374151" strokeWidth="1" />
            <line x1="50" y1="210" x2="310" y2="210" stroke="#374151" strokeWidth="1" />
            {["W1","W2","W3","W4","W6","W8"].map((w, i) => (
                <text key={w} x={50 + i * 50} y="223" textAnchor="middle" fill="#6b7280" fontSize="7" fontFamily="monospace">{w}</text>
            ))}
            {/* AI content — starts ok, drops fast */}
            <polyline points="50,120 100,130 150,150 200,175 250,195 300,205" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 3" />
            <text x="305" y="205" fill="#ef4444" fontSize="7" fontFamily="monospace">AI</text>
            {/* Human expert content — climbs steadily */}
            <polyline points="50,150 100,130 150,100 200,75 250,55 300,40" stroke="#CCFF00" strokeWidth="2.5" />
            <text x="305" y="40" fill="#CCFF00" fontSize="7" fontFamily="monospace">Human</text>
            <text x="170" y="245" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">GCC PROCUREMENT TRUST — HYDERABAD DEEP-TECH BUYERS</text>
        </svg>
    );
}

export function CityPageClient({ city, subtitle, heroLine1, heroLine2, problem, problemChart, stats, slug }: Props) {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    const faqs = getCityFaqs(city);
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    };

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script id={`faq-schema-${city.toLowerCase().replace(/[\/\s]/g, '-')}`} type="application/ld+json" strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10">
                        {city} · B2B Content Marketing
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
                        {heroLine1}<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">{heroLine2}</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed">
                        {subtitle}
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4">
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Get Your Strategy Audit <ArrowRight size={16} />
                        </a>
                        <Link href={`/blog/${slug}`}
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded text-sm hover:border-[#CCFF00]/50 hover:text-[#CCFF00] transition-all">
                            Read the {city} Analysis
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The {city} Problem</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">Why Most<br />Agencies Fail Here.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">{problem}</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-sm p-4 relative overflow-hidden group min-h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <CityChart city={problemChart} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {stats.map((s) => (
                            <motion.div key={s.value} variants={fadeInUp}
                                className="border border-white/10 bg-white/5 p-8 rounded-sm text-center group hover:border-[#CCFF00]/40 transition-colors">
                                <div className="text-4xl md:text-5xl font-black text-[#CCFF00] mb-3">{s.value}</div>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 md:py-32 px-6 bg-black relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Our Approach for {city}</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">Signal. Not Volume.</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <FileText size={28} />, title: "Deep Technical Writing", desc: "Our writers have domain expertise in your vertical. We interview your engineers, not Google." },
                            { icon: <Zap size={28} />, title: "GEO + AEO Optimized", desc: "Every asset is structured to appear in AI tools and Google AI Overviews — the new search interface." },
                            { icon: <Target size={28} />, title: "ICP-First Strategy", desc: "Every word is written for a specific buyer persona — not a generic 'decision maker'." },
                            { icon: <BarChart2 size={28} />, title: "Pipeline Attribution", desc: "We report on revenue signals, not impressions. You'll know exactly what content closed which deal." },
                            { icon: <Users size={28} />, title: "Senior Practitioners", desc: "No junior content pods. Your account is managed by experienced B2B strategists." },
                            { icon: <ArrowRight size={28} />, title: "Outcome Contracts", desc: "We tie renewals to pipeline contribution — not deliverable volume. Your success is our metric." },
                        ].map((item) => (
                            <motion.div key={item.title} variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-8 rounded-sm group hover:border-[#CCFF00]/50 transition-colors">
                                <div className="text-[#CCFF00] mb-4">{item.icon}</div>
                                <h3 className="text-base font-black uppercase tracking-widest text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-3xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Questions & Answers</span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Content Marketing Agency {city} — FAQ</h2>
                    </motion.div>
                    <div className="space-y-2">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-white/10 rounded-sm overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors group">
                                    <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                                    <ChevronDown size={16} className={`text-[#CCFF00] flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500 mb-6">Related Services & Regions</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Content Marketing Agency India", href: "/services/content-marketing-india" },
                            { label: "B2B SEO Agency India", href: "/services/b2b-seo" },
                            { label: "B2B Content Marketing", href: "/services/b2b-content-marketing" },
                            { label: "LinkedIn Ghostwriting", href: "/services/linkedin-ghostwriting" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/10 rounded-sm p-4 text-sm text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all flex items-center justify-between group">
                                {l.label} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">
                        Ready to Win<br />{city}?
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        One strategy call. We will audit your current content, show you the pipeline gap, and tell you exactly how we close it.
                    </p>
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl">
                        Book Your Free Audit <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
