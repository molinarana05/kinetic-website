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
                            {/* Phase 1 Visual: On-Site Optimization / Content Formatting */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Document Outline */}
                                    <rect x="40" y="30" width="140" height="180" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />

                                    {/* Raw Content inside Document */}
                                    <rect x="55" y="50" width="100" height="6" rx="2" fill="#9ca3af" />
                                    <rect x="55" y="65" width="110" height="4" rx="2" fill="#4b5563" />
                                    <rect x="55" y="75" width="105" height="4" rx="2" fill="#4b5563" />
                                    <rect x="55" y="85" width="90" height="4" rx="2" fill="#4b5563" />

                                    <rect x="55" y="110" width="80" height="6" rx="2" fill="#9ca3af" />
                                    <rect x="55" y="125" width="100" height="4" rx="2" fill="#4b5563" />
                                    <rect x="55" y="135" width="110" height="4" rx="2" fill="#4b5563" />
                                    <rect x="55" y="145" width="85" height="4" rx="2" fill="#4b5563" />

                                    {/* Scanning/Extraction Effect */}
                                    <path d="M45 95 L175 95" stroke="#CCFF00" strokeWidth="2" strokeDasharray="4 4" className="group-hover:translate-y-6 transition-transform duration-1000 ease-in-out" />
                                    <path d="M45 155 L175 155" stroke="#CCFF00" strokeWidth="2" strokeDasharray="4 4" className="group-hover:-translate-y-6 transition-transform duration-1000 ease-in-out" />

                                    <rect x="180" y="45" width="12" height="12" rx="2" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                    <text x="186" y="54" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="sans-serif">H2</text>
                                    <path d="M192 51 L210 51" stroke="#CCFF00" strokeWidth="1" strokeDasharray="2 2" />

                                    <rect x="180" y="105" width="12" height="12" rx="2" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                    <text x="186" y="114" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="sans-serif">H2</text>
                                    <path d="M192 111 L210 111" stroke="#CCFF00" strokeWidth="1" strokeDasharray="2 2" />

                                    {/* Extracted Core Component Box */}
                                    <rect x="210" y="70" width="80" height="100" rx="4" fill="#CCFF00" fillOpacity="0.1" stroke="#CCFF00" strokeWidth="1.5" />
                                    <text x="250" y="85" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">EXTRACTED</text>
                                    <text x="250" y="95" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">DIRECT ANSWER</text>

                                    <rect x="220" y="110" width="60" height="4" rx="2" fill="#CCFF00" fillOpacity="0.8" />
                                    <rect x="220" y="120" width="55" height="4" rx="2" fill="#CCFF00" fillOpacity="0.8" />
                                    <rect x="220" y="130" width="60" height="4" rx="2" fill="#CCFF00" fillOpacity="0.8" />
                                    <rect x="220" y="140" width="40" height="4" rx="2" fill="#CCFF00" fillOpacity="0.8" />

                                    {/* Connecting Bracket */}
                                    <path d="M205 51 Q 200 51 200 65 L 200 111 Q 200 125 205 125 M 200 88 L 210 88" stroke="#CCFF00" strokeWidth="1" fill="none" />
                                </svg>
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
                            {/* Phase 2 Visual: Off-Site Optimization / Trust Building Loop */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* AI Engine Target */}
                                    <circle cx="160" cy="120" r="40" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <circle cx="160" cy="120" r="30" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" className="group-hover:rotate-180 origin-center transition-transform duration-[3000ms] ease-linear" />
                                    <text x="160" y="117" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">AI ENGINE</text>
                                    <text x="160" y="128" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">CONFIDENCE: 98%</text>

                                    {/* Orbiting Elements */}
                                    <g className="group-hover:animate-[spin_10s_linear_infinite] origin-center" style={{ transformOrigin: '160px 120px' }}>
                                        <circle cx="160" cy="120" r="80" stroke="#4b5563" strokeWidth="1" strokeDasharray="4 4" fill="none" />

                                        {/* Element 1: Publications */}
                                        <g transform="translate(160, 40)">
                                            <circle cx="0" cy="0" r="14" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                            <rect x="-6" y="-6" width="12" height="12" rx="1" fill="#CCFF00" fillOpacity="0.2" />
                                            <text x="0" y="-18" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace" className="animate-[spin_-10s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>PUBLICATIONS</text>
                                        </g>

                                        {/* Element 2: Social Media */}
                                        <g transform="translate(240, 120)">
                                            <circle cx="0" cy="0" r="14" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                            <circle cx="0" cy="0" r="6" fill="#CCFF00" fillOpacity="0.2" />
                                            <text x="20" y="3" textAnchor="start" fill="#9ca3af" fontSize="6" fontFamily="monospace" className="animate-[spin_-10s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>SOCIAL SIGNALS</text>
                                        </g>

                                        {/* Element 3: Reviews */}
                                        <g transform="translate(160, 200)">
                                            <circle cx="0" cy="0" r="14" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                            <polygon points="0,-6 2,-1 7,-1 3,2 4,7 0,4 -4,7 -3,2 -7,-1 -2,-1" fill="#CCFF00" fillOpacity="0.5" />
                                            <text x="0" y="24" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace" className="animate-[spin_-10s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>VERIFIED REVIEWS</text>
                                        </g>

                                        {/* Element 4: Backlinks */}
                                        <g transform="translate(80, 120)">
                                            <circle cx="0" cy="0" r="14" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1" />
                                            <path d="M-4 -2 C-6 -2 -6 2 -4 2 L-2 2 M4 -2 C6 -2 6 2 4 2 L2 2 M-2 0 L2 0" stroke="#CCFF00" strokeWidth="1.5" fill="none" />
                                            <text x="-20" y="3" textAnchor="end" fill="#9ca3af" fontSize="6" fontFamily="monospace" className="animate-[spin_-10s_linear_infinite]" style={{ transformOrigin: '0px 0px' }}>BACKLINKS</text>
                                        </g>
                                    </g>

                                    {/* Data Streams into Center */}
                                    <path d="M160 54 L160 80 M160 186 L160 160 M226 120 L200 120 M94 120 L120 120" stroke="#CCFF00" strokeWidth="1.5" strokeDasharray="2 2" />

                                    <circle cx="160" cy="65" r="2" fill="#CCFF00" className="group-hover:animate-ping" />
                                    <circle cx="160" cy="175" r="2" fill="#CCFF00" className="group-hover:animate-ping delay-100" />
                                    <circle cx="215" cy="120" r="2" fill="#CCFF00" className="group-hover:animate-ping delay-200" />
                                    <circle cx="105" cy="120" r="2" fill="#CCFF00" className="group-hover:animate-ping delay-300" />
                                </svg>
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
                            {/* Phase 3 Visual: Visibility Analytics / Comparison Chart */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Chart Axes */}
                                    <line x1="50" y1="200" x2="280" y2="200" stroke="#4b5563" strokeWidth="1" />
                                    <line x1="50" y1="40" x2="50" y2="200" stroke="#4b5563" strokeWidth="1" />
                                    <text x="165" y="25" textAnchor="middle" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">AI PROMPT TO BRAND CITATION</text>

                                    {/* Grid Lines */}
                                    <line x1="50" y1="160" x2="280" y2="160" stroke="#4b5563" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="50" y1="120" x2="280" y2="120" stroke="#4b5563" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="50" y1="80" x2="280" y2="80" stroke="#4b5563" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 2" />

                                    {/* Bars - Competitor 1 */}
                                    <rect x="70" y="140" width="30" height="60" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="70" y="100" width="30" height="40" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" className="opacity-50" />
                                    <text x="85" y="215" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Comp A</text>

                                    {/* Bars - Competitor 2 */}
                                    <rect x="120" y="120" width="30" height="80" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="120" y="90" width="30" height="30" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" className="opacity-50" />
                                    <text x="135" y="215" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Comp B</text>

                                    {/* Bars - Brand (Glowing/Animated) */}
                                    <rect x="170" y="90" width="30" height="110" rx="2" fill="#CCFF00" fillOpacity="0.2" stroke="#CCFF00" strokeWidth="1.5" />
                                    <rect x="170" y="50" width="30" height="40" rx="2" fill="#CCFF00" fillOpacity="0.8" className="group-hover:-translate-y-2 transition-transform duration-500" />
                                    <text x="185" y="215" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace" fontWeight="bold">BRAND</text>

                                    {/* Arrow showing brand dominance */}
                                    <path d="M185 30 L185 45 M180 40 L185 45 L190 40" stroke="#CCFF00" strokeWidth="1.5" fill="none" className="group-hover:-translate-y-2 transition-transform duration-500" />
                                    <text x="185" y="20" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="sans-serif">+32%</text>

                                    {/* Bars - Competitor 3 */}
                                    <rect x="220" y="150" width="30" height="50" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="220" y="130" width="30" height="20" rx="2" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" className="opacity-50" />
                                    <text x="235" y="215" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">Comp C</text>

                                    {/* Legend */}
                                    <rect x="250" y="50" width="8" height="8" rx="1" fill="#CCFF00" fillOpacity="0.8" />
                                    <text x="262" y="57" fill="#9ca3af" fontSize="6" fontFamily="monospace">GEO Traffic</text>
                                    <rect x="250" y="65" width="8" height="8" rx="1" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="262" y="72" fill="#9ca3af" fontSize="6" fontFamily="monospace">SEO Traffic</text>
                                </svg>
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
