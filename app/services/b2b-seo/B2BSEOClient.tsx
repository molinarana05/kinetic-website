"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, TrendingUp, Search, Target, BarChart2, Zap, ChevronDown } from "lucide-react";

const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const faqs = [
    { q: "What makes Moxie Digital a specialist B2B SEO agency?", a: "We only work with B2B SaaS, consulting, and professional services companies. Every strategy, keyword cluster, and content piece is designed to reach enterprise decision-makers, not consumer audiences. Our B2B SEO services are built for long sales cycles, multi-stakeholder buying committees, and high-ticket deal sizes." },
    { q: "How is B2B SEO different from standard SEO?", a: "B2B SEO focuses on commercial intent keywords with low volume but high buyer quality. A keyword like 'b2b seo agency india' generates fewer searches than 'seo tips' but every searcher is a potential buyer with budget. We optimise for conversion quality, not traffic quantity." },
    { q: "Do you offer B2B SEO services across India?", a: "Yes. We work with B2B companies headquartered in Bangalore, Mumbai, Delhi/NCR, Hyderabad, Pune, and Chennai. Our team is remote-first and serves pan-India clients as well as Indian B2B SaaS companies with global targets." },
    { q: "What does a B2B SEO retainer include?", a: "Our retainers cover keyword strategy, topical cluster mapping, on-page SEO, technical audits, GEO/AEO optimisation, content creation (blogs, pillar pages, landing pages), and monthly reporting tied to pipeline signals — not just traffic." },
    { q: "How long does B2B SEO take to show results?", a: "In India's B2B market, where organic impression share is near zero for most niches, early ranking signals appear within 4–8 weeks for low-competition terms. Full pipeline contribution typically builds over 3–6 months as topical authority compounds." },
    { q: "Can you help an existing B2B SEO strategy that isn't working?", a: "Absolutely. Most of our clients come to us after 6–12 months of paying a generic agency for traffic that never converted. We audit your current content architecture, identify the pipeline disconnect, and rebuild the strategy around commercial intent." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
};

function FAQSection() {
    const [open, setOpen] = React.useState<number | null>(null);
    return (
        <section className="py-20 px-6 bg-black/40 border-y border-white/5">
            <div className="max-w-3xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Questions & Answers</span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">B2B SEO Agency India — FAQ</h2>
                </motion.div>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-sm overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors group">
                                <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                                <ChevronDown size={16} className={`text-[#CCFF00] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
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

export function B2BSEOClient() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script id="faq-schema-b2b-seo" type="application/ld+json" strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10">
                        B2B SEO Agency · India
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
                        B2B SEO Agency<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">India.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-4 leading-relaxed">
                        India's most specialized B2B SEO agency for SaaS, consulting, and professional services. We don't sell traffic — we engineer <span className="text-white font-bold">search intent that converts enterprise buyers.</span>
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="text-gray-500 text-sm mb-10 max-w-xl">
                        Serving B2B companies across Bangalore, Mumbai, Delhi/NCR, Hyderabad · <span className="text-[#CCFF00]">Low competition, high-intent keywords</span> · GEO + AEO optimized
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4">
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Get Your Free B2B SEO Audit <ArrowRight size={16} />
                        </a>
                        <Link href="/blog/b2b-seo-agency-india"
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded text-sm hover:border-[#CCFF00]/50 hover:text-[#CCFF00] transition-all">
                            Read the India SEO Report
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem: Traffic vs Pipeline */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The B2B SEO Problem in India</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">High Traffic.<br />Zero Pipeline.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Most B2B SEO agencies in India are stuck in 2019. They optimize for keyword volume — driving thousands of unqualified visitors who bounce back to Google in 4 seconds. Your CISO or CTO doesn't click generic blog posts. They use Perplexity. They read AI Overviews.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                In India's B2B SEO landscape, 92% of keywords have Low competition. Organic impression share for most B2B brands is 0%. That means <strong className="text-white">every page you publish is net-new territory</strong> — if it's properly optimized.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden group min-h-[340px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="170" y="20" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">INDIA B2B SEO — TRAFFIC vs PIPELINE DISCONNECT</text>
                                <line x1="50" y1="30" x2="50" y2="210" stroke="#374151" strokeWidth="1" />
                                <line x1="50" y1="210" x2="320" y2="210" stroke="#374151" strokeWidth="1" />
                                {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                                    <text key={q} x={95 + i * 60} y="225" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace">{q}</text>
                                ))}
                                <polyline points="50,180 110,140 170,100 230,70 290,45" stroke="#CCFF00" strokeWidth="2.5" strokeLinejoin="round" />
                                {[50, 110, 170, 230, 290].map((x, i) => {
                                    const ys = [180, 140, 100, 70, 45];
                                    return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#CCFF00" />;
                                })}
                                <text x="295" y="42" fill="#CCFF00" fontSize="8" fontFamily="monospace">Traffic ↑</text>
                                <polyline points="50,195 110,193 170,196 230,198 290,200" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 3" strokeLinejoin="round" />
                                <text x="295" y="202" fill="#ef4444" fontSize="8" fontFamily="monospace">Pipeline →</text>
                                <rect x="55" y="35" width="10" height="4" fill="#CCFF00" rx="1" /><text x="70" y="40" fill="#9ca3af" fontSize="7" fontFamily="monospace">Organic Traffic</text>
                                <rect x="55" y="48" width="10" height="4" fill="#ef4444" rx="1" /><text x="70" y="53" fill="#9ca3af" fontSize="7" fontFamily="monospace">Qualified Pipeline</text>
                                <text x="170" y="245" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">THE DISCONNECT KILLING ARR GROWTH IN INDIA</text>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Our B2B SEO Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The Signal SEO Stack</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Search size={32} />, title: "Intent Architecture", desc: "We map every B2B SEO keyword to a specific buyer persona, sales cycle stage, and commercial action. No vanity traffic — only buyer signals." },
                            { icon: <BarChart2 size={32} />, title: "GEO + AEO Layer", desc: "We optimize your content to appear inside Perplexity, ChatGPT, and Google AI Overviews — the new first page of B2B search in India." },
                            { icon: <TrendingUp size={32} />, title: "Topical Monopoly", desc: "We build content clusters that dominate entire B2B topic categories — not just individual keywords. Your brand becomes the default answer." },
                            { icon: <Zap size={32} />, title: "Technical SEO Audits", desc: "Core Web Vitals, schema markup, structured data, and crawl budget optimization for B2B SaaS at scale." },
                            { icon: <Target size={32} />, title: "Authority Engineering", desc: "Deep-link building from high-authority B2B and tech publications. Every backlink signals enterprise buyer trust." },
                            { icon: <ArrowRight size={32} />, title: "Pipeline Attribution", desc: "We connect every organic touch to CRM data. We report on revenue influenced — not just 'sessions' or 'impressions'." },
                        ].map((item) => (
                            <motion.div key={item.title} variants={fadeInUp}
                                className="bg-white/5 border border-white/10 p-8 rounded-sm group hover:border-[#CCFF00]/50 transition-colors">
                                <div className="text-[#CCFF00] mb-4">{item.icon}</div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection />

            {/* Related Services — Internal Linking */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500 mb-6">Related Services & Reading</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Content Marketing Agency India", href: "/services/content-marketing-india" },
                            { label: "LinkedIn Ghostwriting Agency", href: "/services/linkedin-ghostwriting" },
                            { label: "Answer Engine Optimization", href: "/services/aeo" },
                            { label: "B2B Content Marketing Agency", href: "/services/b2b-content-marketing" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/10 rounded-sm p-4 text-sm text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all flex items-center justify-between group">
                                {l.label} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {[
                            { label: "Read: Why B2B SEO Agencies in India Fail", href: "/blog/b2b-seo-agency-india" },
                            { label: "Read: How to Choose a B2B Marketing Agency", href: "/blog/how-to-choose-b2b-marketing-agency" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/5 rounded-sm p-4 text-sm text-gray-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/20 transition-all flex items-center gap-2 group">
                                <span className="text-[#CCFF00]/50 font-mono text-xs">↗</span> {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">Stop Buying Traffic.<br />Buy Pipeline.</h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Free B2B SEO audit — we'll show you the exact disconnect between your current search presence and your pipeline, and how we fix it.
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
