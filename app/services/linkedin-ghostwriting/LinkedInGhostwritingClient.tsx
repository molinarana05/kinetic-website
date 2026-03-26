"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, MessageSquare, TrendingUp, Eye, Zap, Users, ChevronDown } from "lucide-react";

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
    { q: "What is a LinkedIn ghostwriting agency?", a: "A LinkedIn ghostwriting agency researches your expertise, extracts your authentic opinions, and publishes high-quality content in your name. The best agencies don't write generic posts — they engineer your founder's voice to systematically attract the exact buyers you want." },
    { q: "Is LinkedIn ghostwriting ethical for B2B founders?", a: "Yes. Every major business leader works with speechwriters, communications advisors, and comms teams who help articulate their ideas. LinkedIn ghostwriting is the same model — a professional extracts your thinking and your experience, then packages it for maximum impact. Your ideas. Our words." },
    { q: "What results can a LinkedIn ghostwriting agency deliver?", a: "Moxie Digital clients have seen inbound DMs from target accounts within 30 days, increases in profile visits from ICP job titles within 60 days, and closed deals attributable to LinkedIn content within 90–180 days. We measure pipeline signals — not vanity metrics like impressions or likes." },
    { q: "How much does LinkedIn ghostwriting in India cost?", a: "LinkedIn ghostwriting retainers in India typically range from ₹50,000 to ₹3,00,000 per month depending on posting frequency and content depth. We offer outcome-focused retainers tied to pipeline contribution metrics rather than deliverable counts." },
    { q: "How do you capture my unique voice as a founder?", a: "We run a monthly 45–60 minute deep interview where we systematically extract your proprietary opinions, lived experiences, and unpublished stances on your industry. This raw material becomes the input for all content — ensuring every post sounds unmistakably like you." },
    { q: "Which industries do you specialize in for LinkedIn ghostwriting?", a: "We specialize in LinkedIn content for B2B SaaS founders, fintech executives, consulting firm partners, and enterprise service leaders. Our LinkedIn ghostwriting service is built for complex products with long sales cycles — not consumer brands or quick-win funnels." },
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
                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">LinkedIn Ghostwriting Agency — FAQ</h2>
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

export function LinkedInGhostwritingClient() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script id="faq-schema-linkedin" type="application/ld+json" strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#CCFF00]/5 blur-[130px] rounded-full pointer-events-none" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10">
                        LinkedIn Ghostwriting Agency · India
                    </motion.span>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8">
                        LinkedIn<br />Ghostwriting<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Agency.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-4 leading-relaxed">
                        We turn your founder's expertise into a <span className="text-white font-bold">precision-engineered LinkedIn pipeline</span>. No broetry, no templates — only verified Signal that your exact buyers cannot ignore.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
                        className="text-gray-500 text-sm mb-10 max-w-xl">
                        Built for B2B SaaS founders, fintech executives & consulting partners · <span className="text-[#CCFF00]">Zero competition on this keyword</span> — rank #1 in 2–4 weeks
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4">
                        <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded text-sm hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Build Your LinkedIn Voice <ArrowRight size={16} />
                        </a>
                        <Link href="/blog/b2b-founder-linkedin-content-guide"
                            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded text-sm hover:border-[#CCFF00]/50 hover:text-[#CCFF00] transition-all">
                            Read the LinkedIn Manifesto
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* The Problem: Likes vs Pipeline Funnel */}
            <section className="py-20 px-6 bg-black/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                        className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The LinkedIn Ghostwriting Problem</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 uppercase">Applause Is Not<br />A Pipeline.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Standard LinkedIn ghostwriters optimize for "engagement." They write generic motivational content that collects hundreds of likes — from students, job seekers, and fellow marketers, none of whom will ever buy your software or sign your contract.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                We write for the 12 people on the planet with your exact buying criteria. Vanity metrics will drop. Revenue will climb. That is the only trade-off worth making.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-sm p-6 relative overflow-hidden group min-h-[360px]">
                            <svg viewBox="0 0 340 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="170" y="18" textAnchor="middle" fill="#6b7280" fontSize="9" fontFamily="monospace" letterSpacing="2">VANITY ENGAGEMENT → ZERO PIPELINE</text>
                                {[
                                    { label: "Impressions", value: "200,000", w: 280, fill: "#374151", y: 30 },
                                    { label: "Likes / Reactions", value: "3,400", w: 200, fill: "#4b5563", y: 75 },
                                    { label: "Profile Visits", value: "480", w: 140, fill: "#6b7280", y: 120 },
                                    { label: "Qualified Leads", value: "12", w: 80, fill: "#CCFF00", y: 165 },
                                    { label: "Closed Revenue", value: "2", w: 40, fill: "#CCFF00", y: 210 },
                                ].map((s) => (
                                    <g key={s.label}>
                                        <rect x={(340 - s.w) / 2} y={s.y} width={s.w} height={36} rx="3" fill={s.fill} fillOpacity={s.fill === "#CCFF00" ? 0.2 : 0.6} stroke={s.fill === "#CCFF00" ? "#CCFF00" : "none"} strokeWidth="1" />
                                        <text x="170" y={s.y + 20} textAnchor="middle" fill={s.fill === "#CCFF00" ? "#CCFF00" : "#9ca3af"} fontSize="8" fontFamily="monospace" fontWeight="bold">{s.label}</text>
                                        <text x={170 + s.w / 2 + 8} y={s.y + 20} fill="#6b7280" fontSize="7" fontFamily="monospace">{s.value}</text>
                                    </g>
                                ))}
                                <text x="170" y="265" textAnchor="middle" fill="#4b5563" fontSize="7" fontFamily="monospace" letterSpacing="1">GENERIC GHOSTWRITER OUTPUT — TYPICAL 90 DAYS</text>
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Our LinkedIn Ghostwriting Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">The Signal Voice System</h2>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
                        className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <MessageSquare size={32} />, title: "Deep Interview Extraction", desc: "One hour per month. Structured interview to extract your proprietary opinions, operating experiences, and contrarian stances. Raw material no AI can replicate." },
                            { icon: <Eye size={32} />, title: "Hook Engineering", desc: "Algorithmic hook formulas applied to your real insights — exactly 120 characters that stop a thumb scrolling at 60 miles per hour." },
                            { icon: <TrendingUp size={32} />, title: "Native Format Mastery", desc: "Short posts, long essays, polls, carousels — engineered natively for LinkedIn's distribution algorithm. Never cross-posted filler." },
                            { icon: <Users size={32} />, title: "ICP Targeting Logic", desc: "Every post written for one specific buyer profile. We write for CISOs — not 'everyone in tech'. For CFOs — not 'finance people'." },
                            { icon: <Zap size={32} />, title: "Contrarian Thesis Creation", desc: "The posts that generate qualified pipeline make buyers say 'I disagree — tell me more.' We architect that intellectual friction deliberately." },
                            { icon: <ArrowRight size={32} />, title: "Pipeline Reporting", desc: "We track DMs, profile visits from target accounts, and inbound conversations — not likes. Your report shows revenue signals, not vanity metrics." },
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
                            { label: "Content Marketing Agency India", href: "/services/content-marketing-india" },
                            { label: "B2B SEO Agency India", href: "/services/b2b-seo" },
                            { label: "B2B Content Marketing Agency", href: "/services/b2b-content-marketing" },
                            { label: "LinkedIn Branding", href: "/services/linkedin-branding" },
                        ].map(l => (
                            <Link key={l.href} href={l.href}
                                className="border border-white/10 rounded-sm p-4 text-sm text-gray-400 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all flex items-center justify-between group">
                                {l.label} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        {[
                            { label: "Read: The B2B Founder's LinkedIn Content Guide (Why Likes ≠ Pipeline)", href: "/blog/b2b-founder-linkedin-content-guide" },
                            { label: "Read: LinkedIn Ghostwriting — Is it Ethical?", href: "/blog/linkedin-ghostwriting-agency" },
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
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">Stop Collecting Likes.<br />Collect Deals.</h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        One call. We'll audit your current LinkedIn presence, identify exactly why it's not converting, and show you the System we use instead.
                    </p>
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl">
                        Build Your Voice <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
