"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import Link from "next/link";
import { ArrowRight, RefreshCw, Maximize, Target, Image as ImageIcon, LayoutTemplate, Share2 } from "lucide-react";

export function ContentRepurposingClient() {
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
                        Flagship Service
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        Content<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Repurposing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Stop creating net-new content every day. We build an extraction engine that turns <span className="text-white font-bold">one hour of your time</span> into a full month of strategic, high-converting assets.
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
                            Build Your Engine <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* What is Content Repurposing */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="py-16 md:py-24 px-6 bg-black/40 border-y border-white/5"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">
                        What Is <span className="text-[#CCFF00]">Repurposing Content?</span>
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                        Content repurposing (also known as “content recycling”) is the strategic practice of reusing high-value pillar content—like a founder interview, webinar, or whitepaper—to expand its reach. Instead of letting a great idea die after one post, we systematically transform it into completely new formats across every major channel.
                    </p>
                </div>
            </motion.section>

            {/* Why Is It Important? */}
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
                            Why Is Content Repurposing <br className="hidden md:block" /> Important?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            The #1 benefit of repurposing content is that it makes your marketing <span className="text-[#CCFF00] font-bold">MUCH easier to scale</span>.
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
                                <Maximize size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Effortless Scale</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                You don’t need to write every post, shoot every video, and design every infographic from scratch. We use one piece of core content as the foundation for daily social posts, newsletters, and articles.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">New Audiences</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                Not everyone reads blogs. Not everyone watches videos. Repurposing allows your best ideas to get in front of a completely new audience natively on the platforms they prefer to consume.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Best Practices / Our Methodology */}
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
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">Our Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            The Repurposing Playbook
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
                                    Find Evergreen Content
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Mining Evergreen Gold</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We start by identifying content that is ripe for repurposing. We recommend focusing almost 100% of efforts on <strong className="text-white">Evergreen Content</strong> because it has a limitless shelf life.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Instead of chasing yesterday's news, we look at your Google Analytics and identify the pages and topics that consistently drive traffic. We pull the core insights and use them as the bedrock for new formats.
                                </p>
                            </div>
                            {/* Step 1 Visual: Content funnel from raw → gold */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Source content blocks */}
                                    <rect x="10" y="10" width="70" height="36" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="45" y="32" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="monospace">WEBINAR</text>
                                    <rect x="90" y="10" width="70" height="36" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="125" y="32" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="monospace">PODCAST</text>
                                    <rect x="170" y="10" width="70" height="36" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="205" y="32" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="monospace">INTERVIEW</text>
                                    <rect x="250" y="10" width="60" height="36" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" />
                                    <text x="280" y="32" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">WHITEPAPER</text>
                                    {/* Funnel shape */}
                                    <path d="M10 58 L310 58 L210 120 L110 120 Z" fill="#CCFF00" fillOpacity="0.08" stroke="#CCFF00" strokeOpacity="0.4" strokeWidth="1.5" />
                                    <text x="160" y="96" textAnchor="middle" fill="#CCFF00" fontSize="9" fontFamily="monospace" fontWeight="bold">ANALYTICS FILTER</text>
                                    {/* Evergreen output */}
                                    <rect x="100" y="135" width="120" height="50" rx="6" fill="#CCFF00" fillOpacity="0.15" stroke="#CCFF00" strokeWidth="2" />
                                    <text x="160" y="156" textAnchor="middle" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">EVERGREEN</text>
                                    <text x="160" y="172" textAnchor="middle" fill="#CCFF00" fontSize="10" fontFamily="monospace" fontWeight="bold">GOLD</text>
                                    {/* Arrow down */}
                                    <line x1="160" y1="120" x2="160" y2="133" stroke="#CCFF00" strokeWidth="2" />
                                    <polygon points="160,135 155,127 165,127" fill="#CCFF00" />
                                    {/* Glow on hover */}
                                    <circle cx="160" cy="160" r="60" fill="#CCFF00" fillOpacity="0" className="group-hover:fill-[#CCFF00]/5 transition-all duration-700" />
                                    {/* Bottom label */}
                                    <text x="160" y="210" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace" letterSpacing="2">ANALYTICS-DRIVEN EXTRACTION</text>
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
                            {/* Step 2 Visual: Format matrix */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Central pillar */}
                                    <rect x="115" y="85" width="90" height="70" rx="8" fill="#CCFF00" fillOpacity="0.18" stroke="#CCFF00" strokeWidth="2" />
                                    <text x="160" y="116" textAnchor="middle" fill="#CCFF00" fontSize="9" fontFamily="monospace" fontWeight="bold">PILLAR</text>
                                    <text x="160" y="130" textAnchor="middle" fill="#CCFF00" fontSize="9" fontFamily="monospace" fontWeight="bold">CONTENT</text>
                                    {/* Satellite format boxes */}
                                    <rect x="14" y="14" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="52" y="34" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">LINKEDIN POST</text>
                                    <rect x="230" y="14" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="268" y="34" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">NEWSLETTER</text>
                                    <rect x="14" y="196" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="52" y="216" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">SEO ARTICLE</text>
                                    <rect x="230" y="196" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="268" y="216" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">SHORT VIDEO</text>
                                    <rect x="14" y="104" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="52" y="124" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">EMAIL SEQUENCE</text>
                                    <rect x="230" y="104" width="76" height="32" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="268" y="124" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">CAROUSEL</text>
                                    {/* Connector lines */}
                                    <line x1="90" y1="30" x2="115" y2="105" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                    <line x1="230" y1="30" x2="205" y2="105" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                    <line x1="90" y1="212" x2="115" y2="145" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                    <line x1="230" y1="212" x2="205" y2="145" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                    <line x1="90" y1="120" x2="115" y2="120" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                    <line x1="230" y1="120" x2="205" y2="120" stroke="#CCFF00" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 3" />
                                </svg>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">2</span>
                                    Adapt To Each Format
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">1:1 Format Matching</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    Your repurposed content needs to be a 1:1 match for the format you're using. Reciting a blog post in front of a camera is boring.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Whether it's an audio snippet, a slide deck, an infographic, or a LinkedIn text post, we adapt the pacing, the hooks, and the visuals so it feels exactly like it was made natively for that platform.
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
                                    Split Up & Go Visual
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Micro-Content & Visuals</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We break up long-form assets into smaller, bite-sized pieces for social media. A 60-minute interview holds dozens of micro-clips, quotes, and standalone frameworks.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    If you're sitting on a goldmine of text-based blog content, we will <strong>Go Visual</strong>. We adapt your most actionable tips into high-impact infographics and carousel slide decks that drive massive engagement on platforms like LinkedIn.
                                </p>
                            </div>
                            {/* Step 3 Visual: Long-form exploding into micro-pieces */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Source: long-form block */}
                                    <rect x="110" y="8" width="100" height="60" rx="5" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <text x="160" y="32" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">60-MIN</text>
                                    <text x="160" y="46" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">INTERVIEW</text>
                                    <rect x="116" y="54" width="88" height="4" rx="2" fill="#CCFF00" fillOpacity="0.4" />
                                    {/* Explosion lines */}
                                    <line x1="160" y1="68" x2="40" y2="120" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 3" />
                                    <line x1="160" y1="68" x2="100" y2="130" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 3" />
                                    <line x1="160" y1="68" x2="160" y2="128" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 3" />
                                    <line x1="160" y1="68" x2="220" y2="130" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 3" />
                                    <line x1="160" y1="68" x2="280" y2="120" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="5 3" />
                                    {/* Micro-content pieces */}
                                    <rect x="10" y="120" width="60" height="44" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="40" y="137" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">CLIP 1</text>
                                    <text x="40" y="151" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">30 secs</text>
                                    <rect x="78" y="130" width="56" height="40" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="106" y="147" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">QUOTE</text>
                                    <text x="106" y="160" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">CARD</text>
                                    <rect x="132" y="128" width="56" height="44" rx="4" fill="#CCFF00" fillOpacity="0.12" stroke="#CCFF00" strokeWidth="1" />
                                    <text x="160" y="145" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">INFOGRAPHIC</text>
                                    <text x="160" y="159" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace">/ CAROUSEL</text>
                                    <rect x="196" y="130" width="56" height="40" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="224" y="147" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">LINKEDIN</text>
                                    <text x="224" y="160" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">POST</text>
                                    <rect x="260" y="120" width="52" height="44" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="286" y="137" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">THREAD</text>
                                    <text x="286" y="151" textAnchor="middle" fill="#6b7280" fontSize="6" fontFamily="monospace">/ EMAIL</text>
                                    {/* Bottom label */}
                                    <text x="160" y="210" textAnchor="middle" fill="#6b7280" fontSize="8" fontFamily="monospace" letterSpacing="2">1 HOUR → 30+ ASSETS</text>
                                </svg>
                            </div>
                        </motion.div>

                        {/* Step 4 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                            className="grid md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Step 4 Visual: Omnipresence loop / distribution cycle */}
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Central brand circle */}
                                    <circle cx="160" cy="120" r="38" fill="#CCFF00" fillOpacity="0.12" stroke="#CCFF00" strokeWidth="2" />
                                    <text x="160" y="114" textAnchor="middle" fill="#CCFF00" fontSize="9" fontFamily="monospace" fontWeight="bold">YOUR</text>
                                    <text x="160" y="128" textAnchor="middle" fill="#CCFF00" fontSize="9" fontFamily="monospace" fontWeight="bold">BRAND</text>
                                    {/* Loop ring */}
                                    <circle cx="160" cy="120" r="76" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="8 5" />
                                    {/* Channel nodes on the ring */}
                                    <circle cx="160" cy="44" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="160" y="48" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">LINKEDIN</text>
                                    <circle cx="228" cy="80" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="228" y="84" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">NEWSLETTER</text>
                                    <circle cx="228" cy="160" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="228" y="164" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">EMAIL</text>
                                    <circle cx="160" cy="196" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="160" y="200" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">MEDIUM</text>
                                    <circle cx="92" cy="160" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="92" y="164" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">BLOG/SEO</text>
                                    <circle cx="92" cy="80" r="22" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <text x="92" y="84" textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="monospace">PODCAST</text>
                                    {/* Clockwise arrows on ring */}
                                    <path d="M180 44 Q220 60 228 58" stroke="#CCFF00" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#arr)" />
                                    <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#CCFF00" fillOpacity="0.8" /></marker></defs>
                                </svg>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">4</span>
                                    Reuse & Republish
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">The Omnipresence Loop</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We don't just say things once. We reuse your best tips, techniques, and strategies across multiple pieces of content by adding new spins, different examples, and fresh commentary.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We also strategically <strong>republish your existing content</strong> (content syndication) onto platforms like LinkedIn Articles and Medium to get extra eyeballs with minimal effort, scaling your authority everywhere.
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
                        Ready To Scale<br />Your Content?
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Stop burning out on daily content creation. Let us build your content repurposing engine and unlock your brand's full potential.
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
