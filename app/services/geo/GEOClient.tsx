"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Cpu, Target, Layers, FileText, Share2, SearchCheck, CheckCircle2 } from "lucide-react";

export function GEOClient() {
    const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-6 block border border-[#CCFF00]/30 inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10"
                    >
                        AI Search Strategy
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        Generative Engine<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Optimization</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Explore what Answer Engine Optimization is and why it's necessary for your business to stay competitive. We make your content more likely to <span className="text-white font-bold">appear as a direct response</span> to user AI questions.
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
                            Dominate AI Search <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* The Shift to Answer Engines */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 md:mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            The Shift to <span className="text-[#CCFF00]">AI Search</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            As search engines evolve from displaying a list of webpages to providing direct answers via platforms like ChatGPT, Google AI Overviews, and Microsoft Copilot, they rely on extracting concise, contextual information directly from your content.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">4.4x Higher Conversion</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                The data is clear: visitors arriving through AI search have a conversion rate 4.4 times higher than those from traditional organic search. Generating direct answers captures highly intent-driven users instantly.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <SearchCheck size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Enhanced Credibility</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                Appearing in AI-generated snippets and featured content doesn't just increase visibility—it makes your brand look significantly more trustworthy as the absolute authoritative source on the topic at hand.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* AEO vs SEO */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="py-16 md:py-24 px-6 bg-[#CCFF00]/5 border-y border-[#CCFF00]/10"
            >
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/3 text-center md:text-right">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                            GEO <span className="text-[#CCFF00] text-xl block mt-2">vs</span> SEO
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-0 md:pl-12">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                            Traditional <strong className="text-white">SEO</strong> focuses on improving your site’s visibility and ranking through strong keywords and backlinks—helping users <em className="text-[#CCFF00] not-italic">find your content</em>.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            <strong className="text-white">GEO / Answer Engine Optimization</strong> ensures you’ve structured your content in a way that search engines and AI tools can easily extract and present as a direct answer—helping users <em className="text-[#CCFF00] not-italic">get the answer instantly</em>.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Best Practices Implementation */}
            <section className="py-20 md:py-32 px-6 bg-black relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent" />

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-20"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Execution</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            Integrating SEO with AEO
                        </h2>
                    </motion.div>

                    <div className="space-y-16 md:space-y-32">
                        {/* Phase 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">1</span>
                                    On-Site Optimization
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Discoverability & Indexing</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We align your content to AI algorithms without sacrificing its appeal to human readers. We handle the foundational technical requirements: meta tags, header optimization, and XML sitemaps to guarantee extraction.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Schema Markup:</strong> We generate structured data to help AI engines interpret key information natively.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Content Formatting:</strong> Organizing pages around natural, question-based headings with short direct responses at the top.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <FileText size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:scale-110" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Structure For The Prompt</p>
                            </div>
                        </motion.div>

                        {/* Phase 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <Share2 size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:rotate-12" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Authoritative Footprint</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">2</span>
                                    Off-Site Optimization
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Building The Reputation</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    AI engines prioritize trusted, authoritative sources. We reinforce your credibility by citing authoritative sources internally, and ensuring your brand is represented accurately across the web.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    This includes building powerful backlink profiles, optimizing local listings, managing reviews, and disseminating your content organically across social channels and industry publications.
                                </p>
                            </div>
                        </motion.div>

                        {/* Phase 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            <div>
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">3</span>
                                    Visibility Analytics
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Prioritizing Efforts</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We use AI visibility analytics to track how often your content appears in answer boxes, voice search responses, or AI-generated summaries across different tools.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    By tracking your brand's AI visibility against your competitors, we identify exactly which formats work well and iterate continuously to capture max share-of-voice in your niche.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <Layers size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:-translate-y-2" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Measure & Iterate</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">
                        Stay Visible.<br />Stay Competitive.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Don't let your brand get skipped by the AI platforms driving the future of search. Master Answer Engine Optimization today.
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
