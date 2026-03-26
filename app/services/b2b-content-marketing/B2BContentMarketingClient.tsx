"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, FileText, Target, TrendingUp, Zap, ChevronDown, Rocket } from "lucide-react";

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
    { q: "What should I look for in a B2B content marketing agency?", a: "Look for technical depth and senior practitioners. A generic digital agency will assign junior writers who use AI to spin existing Google results. A true B2B content marketing agency uses deep subject matter expert interviews to extract proprietary insights that technical buyers actually care about." },
    { q: "How do you measure ROI for B2B content marketing?", a: "We measure pipeline, not just traffic. B2B content marketing ROI is measured by tracking organic or social touches from target accounts, inbound demo requests, and shortening sales cycles for complex technical products." },
    { q: "Is content marketing for B2B software different than B2C?", a: "Completely different. B2C content relies on emotion, volume, and impulse buying. B2B content must convince a buying committee (CTO, CFO, end-users) over a 6-12 month sales cycle through data, technical authority, and reduced operational risk." },
    { q: "What is your B2B content strategy process?", a: "We start with Intent Architecture — mapping your exact buyer personas to their search queries and pain points. We then extract your founder/SME knowledge, build a Topical Monopoly around those commercial keywords, and distribute the content natively across LinkedIn, SEO, and newsletters." },
    { q: "Do you offer enterprise B2B content marketing services?", a: "Yes. Our enterprise services include multi-stakeholder content mapping for ABM campaigns, deep technical whitepapers, executive ghostwriting on LinkedIn, and global AEO/GEO optimization." },
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
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">B2B Content Marketing — FAQ</h2>
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

export function B2BContentMarketingClient() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script id="faq-schema-b2b-content" type="application/ld+json" strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10">
                        B2B Content Marketing Agency
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
                        B2B Content<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Marketing Agency.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-4 leading-relaxed">
                        We build high-trust content engines that convert enterprise buyers. Because your CTO target audience isn't reading generic listicles.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="text-gray-500 text-sm mb-10 max-w-xl">
                        Technical depth · Founder Extraction · <span className="text-[#CCFF00]">Pipeline metrics only</span>
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4">
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Book a Strategy Call <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Process</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">B2B Requires Senior Talent</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Target size={32} />, title: "Technical ICPs", desc: "We write for CISOs, CFOs, and engineers. We never dumb down complex SaaS platforms for algorithmic reach." },
                            { icon: <FileText size={32} />, title: "SME Extraction", desc: "No AI hallucinated facts. We spend 1 hour/month interviewing your internal experts and building proprietary intelligence." },
                            { icon: <TrendingUp size={32} />, title: "Pipeline Tracking", desc: "We map content touches across the entire 6-month enterprise sales cycle." },
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
                    <h2 className="text-xs uppercase tracking-[0.3em] font-mono text-gray-500 mb-6">Related Services & Pages</h2>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Content Marketing Agency India", href: "/services/content-marketing-india" },
                            { label: "B2B SEO Agency India", href: "/services/b2b-seo" },
                            { label: "LinkedIn Ghostwriting Agency", href: "/services/linkedin-ghostwriting" },
                            { label: "Content Repurposing", href: "/services/content-repurposing" },
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
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">Ready for Signal?</h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Stop buying traffic and start generating pipeline. Let's discuss your enterprise content strategy.
                    </p>
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl">
                        Schedule Call <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
