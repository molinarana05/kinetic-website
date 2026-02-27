"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Bot, Search, Target, LayoutTemplate, Layers, LayoutList, Share2, SearchCheck, CheckCircle2 } from "lucide-react";

export function AEOClient() {
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
                        Future of Search
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        Answer Engine<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Optimization</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Stay competitive in a modern, AI-driven digital landscape. We ensure your brand is the <span className="text-white font-bold">definitive answer</span> cited by ChatGPT, Perplexity, and Google AI Overviews.
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
                            Get AI Visibility <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* What is AEO & Why it Matters */}
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
                            What Is <span className="text-[#CCFF00]">AEO?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            AEO is the practice of optimizing content for direct, conversational queries. As search engines evolve from displaying a list of webpages to providing <strong className="text-white">direct answers</strong>, they extract concise, contextual information directly from webpages. AEO ensures your brand provides that exact information.
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
                                The trade-off favors quality over quantity. Visitors arriving through AI search have a conversion rate 4.4 times higher than those from traditional organic search. AEO attracts highly qualified, intent-driven users.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <SearchCheck size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Authority & Trust</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                When virtual assistants (Siri, Alexa) and AI engines (ChatGPT, Copilot) directly reference your content in their generated snippets, it instantly establishes your brand as the definitive, trustworthy source on the subject.
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
                            AEO <span className="text-[#CCFF00] text-xl block mt-2">vs</span> SEO
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-0 md:pl-12">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            Traditional <strong className="text-white">SEO</strong> focuses on improving your site’s visibility and ranking through strong keywords and backlinks, helping users <em className="text-[#CCFF00] not-italic">find your content</em>.
                        </p>
                        <br />
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            <strong className="text-white">AEO</strong> ensures that you’ve structured your content in a way that AI tools can easily extract and present as a direct answer, helping users <em className="text-[#CCFF00] not-italic">get the answer instantly</em>.
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
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Playbook</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            AEO Best Practices
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
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Structuring For The Machine</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We align your content to AI algorithms without sacrificing its appeal to human readers. We format pages around natural, question-based headings, providing short and direct responses at the very top of sections.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Schema Markup:</strong> We generate technical JSON-LD schema to help AI engines instantly understand context and entities.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Content Formatting:</strong> Utilizing explicit instructions, studies, reports, anecdotes, and quotes to provide dense value.</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Phase 1 Visual: On-Site Optimization / Schema */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Unstructured Data */}
                                    <rect x="40" y="40" width="100" height="160" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="50" y="55" width="80" height="4" rx="2" fill="#6b7280" />
                                    <rect x="50" y="65" width="60" height="4" rx="2" fill="#6b7280" />
                                    <rect x="50" y="85" width="80" height="4" rx="2" fill="#4b5563" />
                                    <rect x="50" y="95" width="50" height="4" rx="2" fill="#4b5563" />
                                    <rect x="50" y="105" width="70" height="4" rx="2" fill="#4b5563" />
                                    <circle cx="90" cy="150" r="20" stroke="#4b5563" strokeWidth="1" />
                                    <text x="90" y="30" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">UNSTRUCTURED</text>

                                    {/* Transformation arrow container */}
                                    <g className="group-hover:translate-x-2 transition-transform duration-500">
                                        <path d="M150 120 L170 120 M165 115 L170 120 L165 125" stroke="#CCFF00" strokeWidth="2" fill="none" />
                                    </g>

                                    {/* Structured JSON-LD Data */}
                                    <rect x="180" y="40" width="100" height="160" rx="4" fill="#CCFF00" fillOpacity="0.05" stroke="#CCFF00" strokeWidth="1.5" className="group-hover:stroke-width-2 transition-all duration-300" />
                                    <text x="230" y="30" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">JSON-LD SCHEMA</text>

                                    {/* JSON Code Blocks */}
                                    <text x="190" y="60" fill="#CCFF00" fontSize="7" fontFamily="monospace">{"{"}</text>
                                    <text x="200" y="75" fill="#3b82f6" fontSize="7" fontFamily="monospace">"@context":</text>
                                    <text x="250" y="75" fill="#10b981" fontSize="7" fontFamily="monospace">"Schema"</text>

                                    <text x="200" y="90" fill="#3b82f6" fontSize="7" fontFamily="monospace">"@type":</text>
                                    <text x="250" y="90" fill="#10b981" fontSize="7" fontFamily="monospace">"Article"</text>

                                    <text x="200" y="105" fill="#3b82f6" fontSize="7" fontFamily="monospace">"headline":</text>
                                    <text x="250" y="105" fill="#10b981" fontSize="7" fontFamily="monospace">"AEO"</text>

                                    <text x="200" y="120" fill="#3b82f6" fontSize="7" fontFamily="monospace">"author":</text>
                                    <text x="210" y="130" fill="#10b981" fontSize="7" fontFamily="monospace">"{"{"} name: Brand {"}"}"</text>

                                    <text x="200" y="145" fill="#3b82f6" fontSize="7" fontFamily="monospace">"image":</text>
                                    <text x="210" y="155" fill="#10b981" fontSize="7" fontFamily="monospace">"[URL]"</text>

                                    <text x="200" y="170" fill="#3b82f6" fontSize="7" fontFamily="monospace">"publisher":</text>
                                    <text x="210" y="180" fill="#10b981" fontSize="7" fontFamily="monospace">"{"{"} @type: Org {"}"}"</text>

                                    <text x="190" y="195" fill="#CCFF00" fontSize="7" fontFamily="monospace">{"}"}</text>
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
                            {/* Phase 2 Visual: Off-Site Optimization / Citation Network */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Central Brand Node */}
                                    <circle cx="160" cy="120" r="28" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <circle cx="160" cy="120" r="36" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" className="group-hover:rotate-180 origin-center transition-transform duration-[3000ms] ease-linear" />
                                    <text x="160" y="123" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">YOUR BRAND</text>

                                    {/* Publication / Citation Nodes */}
                                    <circle cx="50" cy="50" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="50" y="75" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">Forbes</text>

                                    <circle cx="270" cy="50" r="20" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="270" y="80" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">TechCrunch</text>

                                    <circle cx="50" cy="190" r="14" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="50" y="215" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">G2 Reviews</text>

                                    <circle cx="270" cy="190" r="18" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="270" y="220" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">Industry Blog</text>

                                    {/* Connecting Lines (Citations) */}
                                    <g className="group-hover:stroke-[#CCFF00] transition-colors duration-1000">
                                        <path d="M63 60 L135 105" stroke="#4b5563" strokeWidth="1.5" />
                                        <polygon points="135,105 125,102 130,95" fill="#4b5563" className="group-hover:fill-[#CCFF00] transition-colors duration-1000" />

                                        <path d="M255 62 L185 102" stroke="#4b5563" strokeWidth="1.5" />
                                        <polygon points="185,102 190,95 195,102" fill="#4b5563" transform="rotate(30 185 102)" className="group-hover:fill-[#CCFF00] transition-colors duration-1000" />

                                        <path d="M64 185 L135 135" stroke="#4b5563" strokeWidth="1.5" />
                                        <polygon points="135,135 125,138 130,145" fill="#4b5563" />

                                        <path d="M255 180 L185 138" stroke="#4b5563" strokeWidth="1.5" />
                                        <polygon points="185,138 195,138 190,145" fill="#4b5563" transform="rotate(-30 185 138)" />
                                    </g>

                                    {/* Trust Signals Data Packets */}
                                    <circle cx="95" cy="80" r="3" fill="#CCFF00" className="group-hover:animate-pulse" />
                                    <circle cx="225" cy="80" r="3" fill="#CCFF00" className="group-hover:animate-pulse delay-75" />
                                    <circle cx="100" cy="160" r="3" fill="#CCFF00" className="group-hover:animate-pulse delay-150" />
                                    <circle cx="220" cy="160" r="3" fill="#CCFF00" className="group-hover:animate-pulse delay-300" />

                                    <text x="160" y="170" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">TRUST GAINED</text>
                                </svg>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">2</span>
                                    Off-Site Optimization
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Building The Reputation</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    AI engines prioritize trusted, authoritative sources. Your off-site footprint dictates how heavily an LLM weights your answers.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We focus on building powerful backlink profiles, managing reviews, optimizing local listings, and getting your content cited by the specific outlets that we know AI algorithms inherently prefer and trust.
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
                                    Execution & Measurement
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Visibility Analytics</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We don't just guess. We use advanced visibility analytics tools to track how often your content appears in answer boxes, voice search responses, and AI-generated summaries.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    By analyzing top responses, identifying what users in your niche are prompting, and spotting citation trends among competitors, we constantly iterate and refine your strategy to maximize your AI share of voice.
                                </p>
                            </div>
                            {/* Phase 3 Visual: Visibility Analytics / Metrics dashboard */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Dashboard Frame */}
                                    <rect x="30" y="30" width="260" height="180" rx="6" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="30" y="30" width="260" height="20" rx="6" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <circle cx="45" cy="40" r="3" fill="#ef4444" />
                                    <circle cx="55" cy="40" r="3" fill="#eab308" />
                                    <circle cx="65" cy="40" r="3" fill="#22c55e" />
                                    <text x="160" y="43" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">AEO VISIBILITY TRACKER</text>

                                    {/* KPI Blocks */}
                                    <rect x="40" y="60" width="70" height="30" rx="2" fill="#CCFF00" fillOpacity="0.1" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="50" y="73" fill="#9ca3af" fontSize="6" fontFamily="monospace">SHARE OF VOICE</text>
                                    <text x="50" y="85" fill="#CCFF00" fontSize="12" fontFamily="sans-serif" fontWeight="bold">68%</text>

                                    <rect x="120" y="60" width="70" height="30" rx="2" fill="#white" fillOpacity="0.05" stroke="#4b5563" strokeWidth="1" />
                                    <text x="130" y="73" fill="#9ca3af" fontSize="6" fontFamily="monospace">COMPETITOR AVG</text>
                                    <text x="130" y="85" fill="#eab308" fontSize="12" fontFamily="sans-serif" fontWeight="bold">24%</text>

                                    <rect x="200" y="60" width="80" height="30" rx="2" fill="#white" fillOpacity="0.05" stroke="#4b5563" strokeWidth="1" />
                                    <text x="210" y="73" fill="#9ca3af" fontSize="6" fontFamily="monospace">SGE APPEARANCES</text>
                                    <text x="210" y="85" fill="#white" fontSize="12" fontFamily="sans-serif" fontWeight="bold">+1,204</text>

                                    {/* Chart area */}
                                    <line x1="50" y1="190" x2="270" y2="190" stroke="#4b5563" strokeWidth="1" />
                                    <line x1="50" y1="110" x2="50" y2="190" stroke="#4b5563" strokeWidth="1" />

                                    {/* Grid Lines */}
                                    <line x1="50" y1="170" x2="270" y2="170" stroke="#4b5563" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="50" y1="150" x2="270" y2="150" stroke="#4b5563" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="50" y1="130" x2="270" y2="130" stroke="#4b5563" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="50" y1="110" x2="270" y2="110" stroke="#4b5563" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 2" />

                                    {/* Competitor Line */}
                                    <path d="M50 180 L90 175 L130 170 L170 165 L210 168 L250 160 L270 160" stroke="#eab308" strokeWidth="1.5" fill="none" />

                                    {/* Brand Line */}
                                    <path d="M50 170 L90 150 L130 160 L170 110 L210 130 L250 80 L270 70" fill="none" stroke="#CCFF00" strokeWidth="3" className="group-hover:stroke-white transition-colors duration-300" />

                                    {/* Area fill under brand line */}
                                    <path d="M50 170 L90 150 L130 160 L170 110 L210 130 L250 80 L270 70 L270 190 L50 190 Z" fill="#CCFF00" fillOpacity="0.1" />

                                    {/* Data Points */}
                                    <circle cx="170" cy="110" r="4" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <circle cx="250" cy="80" r="4" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
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
                        Become The<br />Definitive Answer.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Don't let your brand get skipped by the AI platforms driving the future of search. Let's optimize your enterprise for the answer engine era.
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
