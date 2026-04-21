"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, FileText, Users, Zap, BarChart2, Layers, ChevronDown } from "lucide-react";

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
    { q: "What does a content marketing agency in India actually do for B2B companies?", a: "A B2B content marketing agency in India builds the content infrastructure that makes enterprise buyers trust you before they ever contact your sales team. This includes SEO-optimised blog posts, pillar landing pages, LinkedIn thought leadership, newsletters, and case studies — all connected by an internal linking strategy." },
    { q: "How is a B2B content marketing agency different from a general digital agency?", a: "General digital agencies run the same playbook for D2C brands and B2B software companies. A specialist B2B content marketing agency like Moxie understands long sales cycles, multi-stakeholder buying committees, and the difference between content that gets shares vs. content that gets pipeline." },
    { q: "How much does a content marketing agency in India charge?", a: "Retainers range from ₹80,000 to ₹5,00,000+ per month depending on the scope. Most generic agencies in India charge ₹2-3L per month and deliver volume — we charge for outcomes. Our engagements are tied to pipeline signals, not deliverable counts." },
    { q: "Which industries do you specialize in?", a: "We specialize in B2B SaaS, fintech, enterprise consulting, and professional services. Our clients include Series A–C funded startups, GCC divisions of global enterprises, and founder-led consulting firms across India." },
    { q: "Do you offer content marketing services in Mumbai, Bangalore, Delhi, and Hyderabad?", a: "Yes. Moxie Digital is a remote-first agency that has worked with B2B brands headquartered across all major Indian metros including Bangalore, Mumbai, Delhi/NCR, Hyderabad, Pune, and Chennai. All services are available nationwide." },
    { q: "What results can I expect from B2B content marketing?", a: "In India's low-competition B2B content market, well-optimised landing pages can appear in search results within 4–8 weeks. Full pipeline contribution — tracked through CRM attribution — typically builds over 3–6 months as topical authority compounds across your content cluster." },
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
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">Content Marketing Agency India — FAQ</h2>
                </motion.div>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-sm overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors">
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

export function ContentMarketingIndiaClient() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script id="faq-schema-cm-india" type="application/ld+json" strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10">
                        Content Marketing Agency · India
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
                        Content Marketing<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Agency India.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-4 leading-relaxed">
                        India's only B2B content marketing agency that refuses to sell you units of output. We engineer <span className="text-white font-bold">authority that enterprise buyers trust</span> — and pipelines that compound.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="text-gray-500 text-sm mb-10 max-w-xl">
                        B2B SaaS · Fintech · Consulting · Professional Services · <span className="text-[#CCFF00]">Pan-India & Global</span>
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4">
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Build Your Content Strategy <ArrowRight size={16} />
                        </a>
                        <Link href="/blog/content-marketing-agency-india"
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded text-sm hover:border-[#CCFF00]/50 hover:text-[#CCFF00] transition-all">
                            Read the India Content Report
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem: Budget Allocation */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Real Problem with Indian Content Marketing Agencies</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">Where Your ₹5L Retainer<br />Actually Goes.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                A standard ₹5,00,000 monthly retainer from a generic Indian content marketing agency does not buy you ₹5,00,000 of execution. By the time they remove overhead, account management, and junior staffing costs, less than 40% reaches actual content creation.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We operate differently. Lean team, senior practitioners, zero account management bloat. Over 80% of your budget goes directly into strategy and execution that converts enterprise buyers.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden group min-h-[340px]">
                            <svg viewBox="0 0 340 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">WHERE YOUR ₹5L RETAINER GOES</text>
                                <text x="85" y="40" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace" fontWeight="bold">GENERIC AGENCY</text>
                                <circle cx="85" cy="115" r="60" fill="none" stroke="#1f2937" strokeWidth="28" />
                                <circle cx="85" cy="115" r="60" fill="none" stroke="#ef4444" strokeWidth="28" strokeDasharray="75.4 301.6" strokeDashoffset="0" />
                                <circle cx="85" cy="115" r="60" fill="none" stroke="#f97316" strokeWidth="28" strokeDasharray="75.4 301.6" strokeDashoffset="-75.4" />
                                <circle cx="85" cy="115" r="60" fill="none" stroke="#374151" strokeWidth="28" strokeDasharray="150.8 226.2" strokeDashoffset="-150.8" />
                                <text x="85" y="110" textAnchor="middle" fill="#CCFF00" fontSize="14" fontFamily="monospace" fontWeight="bold">40%</text>
                                <text x="85" y="126" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Actual Content</text>
                                <text x="255" y="40" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">MOXIE DIGITAL</text>
                                <circle cx="255" cy="115" r="60" fill="none" stroke="#1f2937" strokeWidth="28" />
                                <circle cx="255" cy="115" r="60" fill="none" stroke="#CCFF00" strokeWidth="28" strokeDasharray="241.3 135.7" strokeDashoffset="0" />
                                <circle cx="255" cy="115" r="60" fill="none" stroke="#4b5563" strokeWidth="28" strokeDasharray="75.4 301.6" strokeDashoffset="-241.3" />
                                <text x="255" y="110" textAnchor="middle" fill="#CCFF00" fontSize="14" fontFamily="monospace" fontWeight="bold">80%</text>
                                <text x="255" y="126" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Actual Content</text>
                                <text x="170" y="245" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">BUDGET ALLOCATION — CONTENT MARKETING AGENCY INDIA</text>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Our Content Marketing Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The Authority Stack</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <FileText size={32} />, title: "Signal-First Content", desc: "Every piece attacks a core industry assumption. No listicles. No AI-spun filler. Only proprietary insight enterprise buyers cannot find elsewhere." },
                            { icon: <Users size={32} />, title: "Senior Practitioners Only", desc: "Your account is run by a founding team member who has actually scaled B2B brands. Not delegated to a junior content pod." },
                            { icon: <Layers size={32} />, title: "Topical Clusters", desc: "We build a fortress of semantically related content around your commercial keywords to dominate entire topic categories." },
                            { icon: <Zap size={32} />, title: "GEO Ready", desc: "Every content asset is optimized for Generative Engine Optimization — structured to appear inside ChatGPT, Perplexity, and Google AI Overviews." },
                            { icon: <BarChart2 size={32} />, title: "Outcome Contracts", desc: "We tie renewals to pipeline contribution metrics, not deliverable counts. Your success is our only metric." },
                            { icon: <ArrowRight size={32} />, title: "Native Distribution", desc: "Each channel gets content purpose-built for it. LinkedIn posts written for LinkedIn. Essays optimised for search. No waterfall repurposing." },
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

            {/* Related Services */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500 mb-6">Related Services & Reading</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Content Marketing Agency Bangalore", href: "/services/content-marketing-bangalore" },
                            { label: "Content Marketing Agency Mumbai", href: "/services/content-marketing-mumbai" },
                            { label: "Content Marketing Agency Delhi/NCR", href: "/services/content-marketing-delhi" },
                            { label: "B2B SEO Agency India", href: "/services/b2b-seo" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/10 rounded-sm p-4 text-sm text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all flex items-center justify-between group">
                                {l.label} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {[
                            { label: "Read: Why Content Marketing Agencies in India Are Failing B2B Brands", href: "/blog/content-marketing-agency-india" },
                            { label: "Read: How to Choose a B2B Marketing Agency (The Founder's Filter)", href: "/blog/how-to-choose-b2b-marketing-agency" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/5 rounded-sm p-4 text-sm text-gray-500 hover:text-[#CCFF00] hover:border-[#CCFF00]/20 transition-all flex items-center gap-2">
                                <span className="text-[#CCFF00]/50 font-mono text-xs">↗</span> {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">Stop Buying Noise.<br />Buy Authority.</h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        One strategy call. We'll show you exactly where your content marketing is bleeding pipeline — and how we rebuild it.
                    </p>
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl">
                        Book a Strategy Call <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
