"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Search, Code, FileText, Link as LinkIcon, Bot, BarChart, Globe } from "lucide-react";

export function SEOClient() {
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
                        Search Optimization
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        B2B SaaS<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">SEO Engine</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        What Is SEO and How Does it Work? We strip away the confusion and engineer <span className="text-white font-bold">Search Engine Optimization</span> strategies that capture high-intent buyers and generate quality pipeline.
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
                            Dominate Search <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* The 3 Pillars of SEO */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mb-16 md:mb-24 text-center"
                    >
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Foundation</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
                            The Three Pillars of SEO
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            While SEO algorithms evolve constantly, the core concepts do not. We build your organic search strategy on these three unbreakable components.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <Code size={48} className="text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4">1. Technical<br /><span className="text-[#CCFF00]">Optimization</span></h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                The behind-the-scenes architecture. We ensure search engines can properly crawl, render, and index your entire site, maximizing Core Web Vitals and site speed.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <FileText size={48} className="text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4">2. On-Page<br /><span className="text-[#CCFF00]">Optimization</span></h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Crafting content that satisfies user intent. We target exact keywords to provide an unparalleled user experience and satisfying answers to searcher queries.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <LinkIcon size={48} className="text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4">3. Off-Page<br /><span className="text-[#CCFF00]">Optimization</span></h3>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Enhancing your site's reputation outside your own domain. Driven heavily by high-quality backlinks to establish immense domain authority and trust.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* How Search Engines Work */}
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
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Mechanics</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            How Search Engines Work
                        </h2>
                    </motion.div>

                    <div className="space-y-16 md:space-y-32">
                        {/* Step 1 */}
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
                                    Discovery Phase
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Search Engine Crawling</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Search engines send out web crawlers (often called spiders or Googlebots) to find new pages and record information about them.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> They discover new web pages that exist.</li>
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> They periodically check existing content for updates.</li>
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> They follow internal links to map your entire site structure.</li>
                                </ul>
                            </div>
                            {/* Step 1 Visual: Crawler / Discovery */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Web Nodes */}
                                    <circle cx="60" cy="50" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="160" cy="30" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="260" cy="50" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="40" cy="120" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="280" cy="120" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="160" cy="200" r="24" fill="#CCFF00" fillOpacity="0.1" stroke="#CCFF00" strokeWidth="2" />
                                    {/* Links */}
                                    <path d="M72 40 L148 35 M172 35 L248 40 M50 63 L45 105 M270 63 L275 105 M52 130 L140 190 M268 130 L180 190 M75 55 L145 190 M245 55 L175 190 M160 46 L160 176" stroke="#4b5563" strokeWidth="0.5" strokeDasharray="3 3" />
                                    {/* Crawler Agent */}
                                    <circle cx="160" cy="110" r="12" fill="#CCFF00" />
                                    <circle cx="160" cy="110" r="30" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 2" className="group-hover:stroke-[#CCFF00] transition-colors duration-700" />
                                    <path d="M150 110 L120 90 M170 110 L200 90 M150 115 L110 140 M170 115 L210 140" stroke="#CCFF00" strokeWidth="1.5" />
                                    {/* Scan lines & Labels */}
                                    <line x1="80" y1="110" x2="140" y2="110" stroke="#CCFF00" strokeWidth="2" strokeDasharray="2 4" />
                                    <line x1="240" y1="110" x2="180" y2="110" stroke="#CCFF00" strokeWidth="2" strokeDasharray="2 4" />
                                    <text x="160" y="204" textAnchor="middle" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">YOUR SITE</text>
                                    <text x="160" y="80" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" className="opacity-0 group-hover:opacity-100 transition-opacity">CRAWLING</text>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Step 2 Visual: Indexing / Database */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Filter Funnel */}
                                    <path d="M60 40 L260 40 L190 120 L130 120 Z" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    {/* Incoming Data */}
                                    <rect x="80" y="20" width="30" height="10" fill="#CCFF00" fillOpacity="0.4" />
                                    <rect x="140" y="10" width="40" height="15" fill="#4b5563" fillOpacity="0.3" />
                                    <rect x="200" y="25" width="25" height="12" fill="#CCFF00" fillOpacity="0.8" />
                                    {/* Processing Area */}
                                    <line x1="100" y1="80" x2="220" y2="80" stroke="#CCFF00" strokeWidth="2" strokeDasharray="4 4" className="group-hover:stroke-white transition-colors" />
                                    <text x="160" y="75" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace">QUALITY EVALUATION</text>
                                    {/* Rejected Data */}
                                    <path d="M120 100 Q 80 140 40 180" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                                    <text x="40" y="195" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">DISCARDED</text>
                                    {/* Database Storage (Indexed) */}
                                    <rect x="110" y="150" width="100" height="60" rx="4" fill="#CCFF00" fillOpacity="0.1" stroke="#CCFF00" strokeWidth="2" />
                                    <line x1="110" y1="165" x2="210" y2="165" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <line x1="110" y1="180" x2="210" y2="180" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <line x1="110" y1="195" x2="210" y2="195" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="160" y="175" textAnchor="middle" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">SITE IN INDEX</text>
                                    {/* Arrow pointing down to DB */}
                                    <path d="M160 125 L160 145 M155 140 L160 145 L165 140" stroke="#CCFF00" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">2</span>
                                    Decision Phase
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Search Engine Indexing</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Once crawled, the engine decides if the content is worthy of being added to its massive database index.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Pages providing unique and valuable content are filed away. Spammy, duplicate, or inaccessible content is discarded. Only indexed pages can be surfaced to searchers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
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
                                    Execution Phase
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Search Engine Ranking</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Out of over 200+ signals, algorithms like RankBrain organize indexed content to provide the most highly-relevant answer.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> We optimize for Google's E-E-A-T framework.</li>
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> We build to increase dwell time and reduce bounce rate.</li>
                                    <li className="flex items-start text-gray-300"><span className="text-[#CCFF00] mr-2">✓</span> We target search intent over keyword stuffing.</li>
                                </ul>
                            </div>
                            {/* Step 3 Visual: Ranking Algorithm */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Search Bar */}
                                    <rect x="60" y="20" width="200" height="24" rx="12" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1" />
                                    <circle cx="75" cy="32" r="4" stroke="#CCFF00" strokeWidth="1" />
                                    <line x1="78" y1="35" x2="82" y2="39" stroke="#CCFF00" strokeWidth="1" />
                                    <text x="95" y="35" fill="#9ca3af" fontSize="9" fontFamily="monospace">"b2b saas solution"</text>

                                    {/* Ranking Blocks */}
                                    <g className="group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                                        <rect x="80" y="70" width="160" height="36" rx="4" fill="#CCFF00" fillOpacity="0.15" stroke="#CCFF00" strokeWidth="2" />
                                        <text x="95" y="88" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">1. YOUR CONTENT</text>
                                        <rect x="200" y="78" width="30" height="12" rx="2" fill="#CCFF00" fillOpacity="0.2" />
                                        <text x="215" y="86" textAnchor="middle" fill="#CCFF00" fontSize="6" fontFamily="monospace">E-E-A-T</text>
                                    </g>

                                    <g className="opacity-70">
                                        <rect x="80" y="115" width="160" height="30" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                        <text x="95" y="132" fill="#6b7280" fontSize="9" fontFamily="monospace">2. Competitor A</text>
                                    </g>

                                    <g className="opacity-50">
                                        <rect x="80" y="155" width="160" height="30" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                        <text x="95" y="172" fill="#6b7280" fontSize="9" fontFamily="monospace">3. Competitor B</text>
                                    </g>

                                    <g className="opacity-30">
                                        <rect x="80" y="195" width="160" height="30" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                        <text x="95" y="212" fill="#6b7280" fontSize="9" fontFamily="monospace">4. Competitor C</text>
                                    </g>

                                    {/* Algorithmic lines */}
                                    <path d="M260 88 Q 290 88 290 140 Q 290 192 260 192" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                                    <text x="290" y="135" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" transform="rotate(90 290 135)">RANKBRAIN</text>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Step 4 AI */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Step 4 Visual: AI/SGE Integration */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* AI Overview Box */}
                                    <rect x="40" y="30" width="240" height="90" rx="8" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                    <path d="M40 50 L280 50" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="55" y="44" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">✨ AI OVERVIEW</text>

                                    {/* Generated Text Lines */}
                                    <rect x="55" y="65" width="200" height="4" rx="2" fill="#9ca3af" fillOpacity="0.8" />
                                    <rect x="55" y="77" width="180" height="4" rx="2" fill="#9ca3af" fillOpacity="0.8" />
                                    <rect x="55" y="89" width="150" height="4" rx="2" fill="#9ca3af" fillOpacity="0.8" />

                                    {/* Citation Badge */}
                                    <rect x="55" y="102" width="90" height="14" rx="4" fill="#CCFF00" fillOpacity="0.2" stroke="#CCFF00" strokeWidth="1" />
                                    <text x="60" y="111" fill="#CCFF00" fontSize="7" fontFamily="monospace">"Source: Your Brand"</text>

                                    {/* Connection to Traditional Results */}
                                    <line x1="160" y1="120" x2="160" y2="150" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="2" strokeDasharray="4 4" />
                                    <circle cx="160" cy="150" r="3" fill="#CCFF00" />

                                    {/* Traditional Result snippet */}
                                    <rect x="60" y="160" width="200" height="50" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="70" y="175" fill="#3b82f6" fontSize="10" fontFamily="sans-serif" className="group-hover:underline cursor-pointer">Your Brand Guide 2026</text>
                                    <text x="70" y="185" fill="#10b981" fontSize="7" fontFamily="monospace">https://yourbrand.com/guide</text>
                                    <rect x="70" y="195" width="170" height="3" rx="1.5" fill="#6b7280" />
                                    <rect x="70" y="202" width="130" height="3" rx="1.5" fill="#6b7280" />
                                </svg>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">4</span>
                                    The Future
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">AI and SEO Integration</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Search is no longer just blue links. We build <strong className="text-white">Answer Engine Optimization (AEO)</strong> into every campaign.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We optimize content specifically to feed Google's AI Overviews, Perplexity, and ChatGPT. By targeting direct conversational questions, we guarantee your brand isn't skipped by the LLM platforms of the future.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-32 px-6 bg-[#CCFF00]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black mb-8">
                        Rank For Revenue.<br />Not Vanity.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Stop buying traffic and hoping it converts. Let us engineer an organic search engine that captures high-intent demand.
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
