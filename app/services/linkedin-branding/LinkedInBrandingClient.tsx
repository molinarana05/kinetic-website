"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Clock, Target, Rss, Layers, Presentation, Users, CheckCircle2, Bot } from "lucide-react";

export function LinkedInBrandingClient() {
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
                        Founder Authority
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        17-Minute<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Brand Engine</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        A generic profile means missed opportunities. We execute a proven strategy to boost visibility, attract opportunities, and build your <span className="text-white font-bold">industry authority</span> in a fraction of the time.
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
                            Grow Your Network <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Build a Brand */}
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
                            Why Build A <span className="text-[#CCFF00]">Personal Brand?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            Personal branding helps you build a professional reputation. There's a solid psychological reasoning behind this: <strong className="text-white">People do business with brands they trust.</strong> By showcasing your expertise publicly, you're building a massive pipeline on the world's largest professional networking site (1.4 billion visits/month).
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
                                <Users size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Stop Chasing Growth Hacks</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                Company pages grow slower by default. Your personal network is where the leverage is. We study real winners in your niche—not curated UGC accounts—to surface content angles that actually gain traction.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Unapologetic Authenticity</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                Copying templates is a no-go in the LinkedIn community. We don't write fluff. We extract your genuine worldview, long-form thoughts, and opinions on industry developments to set the grounds for meaningful conversation.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Automation vs Manual */}
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
                            AUTOMATION <span className="text-[#CCFF00] text-xl block mt-2">vs</span> MANUAL
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-0 md:pl-12">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                            Manual posting is time-consuming. You research, write, and publish individually, hoping it succeeds. This leads to burnout and inconsistency.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            <strong className="text-white">Our Systems</strong> utilize advanced queue management, trend analysis, and inspiration layers. We prepare a week of optimized content in a fraction of the time, so you never suffer from writer's block.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* The 17 Minute Timeline */}
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
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Methodology</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            The 17-Minute Daily Breakdown
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {/* Step 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-start bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            {/* Phase 1 Visual: Topic Creation / Generator */}
                            <div className="bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[420px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Input Data / Historical Posts */}
                                    <path d="M120 40 L200 40 L180 80 L140 80 Z" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <rect x="135" y="20" width="15" height="10" fill="#CCFF00" fillOpacity="0.4" className="animate-[bounce_2s_infinite]" />
                                    <rect x="155" y="10" width="15" height="10" fill="#4b5563" fillOpacity="0.3" className="animate-[bounce_2s_infinite_200ms]" />
                                    <rect x="175" y="25" width="15" height="10" fill="#CCFF00" fillOpacity="0.8" className="animate-[bounce_2s_infinite_400ms]" />
                                    <text x="160" y="65" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">PAST DATA</text>

                                    {/* The "Machine" / Blueprint Interface */}
                                    <rect x="80" y="80" width="160" height="80" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <line x1="80" y1="100" x2="240" y2="100" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.5" />

                                    <circle cx="100" cy="130" r="12" stroke="#CCFF00" strokeWidth="2" strokeDasharray="2 2" className="group-hover:animate-[spin_4s_linear_infinite]" />
                                    <circle cx="100" cy="130" r="4" fill="#CCFF00" />

                                    <circle cx="220" cy="130" r="12" stroke="#CCFF00" strokeWidth="2" strokeDasharray="2 2" className="group-hover:animate-[spin_4s_linear_infinite_reverse]" />
                                    <circle cx="220" cy="130" r="4" fill="#CCFF00" />

                                    <rect x="130" y="115" width="60" height="30" rx="2" fill="#CCFF00" fillOpacity="0.1" stroke="#CCFF00" strokeWidth="1" />
                                    <path d="M140 130 L150 120 L160 135 L170 125 L180 140" stroke="#CCFF00" strokeWidth="1.5" fill="none" />
                                    <text x="160" y="93" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">TEMPLATE ENGINE</text>

                                    {/* Output Generation */}
                                    <path d="M140 160 L180 160 L200 200 L120 200 Z" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />

                                    <g className="group-hover:translate-y-4 transition-transform duration-700">
                                        <rect x="135" y="200" width="50" height="30" rx="2" fill="#CCFF00" fillOpacity="0.2" stroke="#CCFF00" strokeWidth="1.5" />
                                        <rect x="140" y="205" width="40" height="4" rx="2" fill="#CCFF00" />
                                        <rect x="140" y="213" width="35" height="4" rx="2" fill="#CCFF00" fillOpacity="0.5" />
                                        <rect x="140" y="221" width="20" height="4" rx="2" fill="#CCFF00" fillOpacity="0.5" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    Topic Creation
                                    <span className="text-xs font-mono bg-[#CCFF00] text-black px-2 py-1 rounded inline-block w-max">5 Minutes/Day</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Instead of staring at a blank page for 30 minutes, we utilize content inspiration layers and formatters to rapidly draft posts similar in style and language to your best historical content.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-start bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            {/* Phase 2 Visual: Industry News / Radar */}
                            <div className="shrink-0 w-full md:w-64 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[240px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Radar UI */}
                                    <circle cx="160" cy="120" r="90" fill="#1a1a2e" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1" />
                                    <circle cx="160" cy="120" r="60" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1" />
                                    <circle cx="160" cy="120" r="30" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1" />
                                    <circle cx="160" cy="120" r="4" fill="#CCFF00" />

                                    <line x1="160" y1="30" x2="160" y2="210" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1" />
                                    <line x1="70" y1="120" x2="250" y2="120" stroke="#CCFF00" strokeOpacity="0.2" strokeWidth="1" />

                                    {/* Radar Sweep */}
                                    <path d="M160 120 L160 30 A 90 90 0 0 1 250 120 Z" fill="#CCFF00" fillOpacity="0.1" className="group-hover:animate-[spin_4s_linear_infinite] origin-center" style={{ transformOrigin: '160px 120px' }} />
                                    <line x1="160" y1="120" x2="160" y2="30" stroke="#CCFF00" strokeWidth="2" className="group-hover:animate-[spin_4s_linear_infinite] origin-center" style={{ transformOrigin: '160px 120px' }} />

                                    {/* Detected News Nodes */}
                                    <circle cx="210" cy="70" r="6" fill="#CCFF00" className="group-hover:animate-ping" />
                                    <text x="220" y="73" fill="#9ca3af" fontSize="8" fontFamily="monospace">Tech Update</text>

                                    <circle cx="100" cy="90" r="4" fill="#CCFF00" className="opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-150" />
                                    <text x="95" y="85" textAnchor="end" fill="#9ca3af" fontSize="8" fontFamily="monospace" className="opacity-0 group-hover:opacity-100 transition-opacity">Competitor Move</text>

                                    <circle cx="130" cy="180" r="5" fill="#CCFF00" className="opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity delay-300" />
                                    <text x="125" y="195" textAnchor="end" fill="#9ca3af" fontSize="8" fontFamily="monospace" className="opacity-0 group-hover:opacity-100 transition-opacity">Market Shift</text>

                                    {/* Perspective Filter Box */}
                                    <path d="M150 120 L270 120 M150 120 L150 200" stroke="#CCFF00" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                                    <rect x="230" y="160" width="70" height="40" rx="4" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="1.5" />
                                    <text x="265" y="175" textAnchor="middle" fill="#CCFF00" fontSize="7" fontFamily="monospace" fontWeight="bold">BRAND LENS</text>
                                    <rect x="240" y="182" width="50" height="3" rx="1.5" fill="#CCFF00" fillOpacity="0.5" />
                                    <rect x="240" y="189" width="30" height="3" rx="1.5" fill="#CCFF00" fillOpacity="0.5" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    Industry News
                                    <span className="text-xs font-mono bg-[#CCFF00] text-black px-2 py-1 rounded inline-block w-max">5 Minutes/Day</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We systemize news gathering via alerts, allowing you to instantly share your perspective on the latest developments. Being the first to break news adds immense value to your community.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-start bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            {/* Phase 3 Visual: Interacting / Network Graph */}
                            <div className="shrink-0 w-full md:w-64 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[240px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Central Founder Node */}
                                    <circle cx="160" cy="120" r="24" fill="#1a1a2e" stroke="#CCFF00" strokeWidth="2" />
                                    <text x="160" y="123" textAnchor="middle" fill="#CCFF00" fontSize="8" fontFamily="monospace" fontWeight="bold">FOUNDER</text>

                                    {/* Target ICP Nodes */}
                                    <circle cx="260" cy="60" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1.5" className="group-hover:stroke-[#CCFF00] transition-colors duration-500" />
                                    <text x="260" y="62" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">CMO</text>

                                    <circle cx="60" cy="60" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1.5" className="group-hover:stroke-[#CCFF00] transition-colors duration-500 delay-100" />
                                    <text x="60" y="62" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">CEO</text>

                                    <circle cx="40" cy="180" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1.5" className="group-hover:stroke-[#CCFF00] transition-colors duration-500 delay-200" />
                                    <text x="40" y="182" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">VP SALES</text>

                                    <circle cx="280" cy="180" r="16" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1.5" className="group-hover:stroke-[#CCFF00] transition-colors duration-500 delay-300" />
                                    <text x="280" y="182" textAnchor="middle" fill="#9ca3af" fontSize="6" fontFamily="monospace">FOUNDER</text>

                                    {/* Neutral / Non-ICP Nodes */}
                                    <circle cx="160" cy="20" r="10" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.5" />
                                    <circle cx="300" cy="120" r="8" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.5" />

                                    {/* Interaction Lines (Comments/Likes) */}
                                    <g stroke="#CCFF00" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <line x1="175" y1="105" x2="245" y2="70" />
                                        <line x1="145" y1="105" x2="75" y2="70" />
                                        <line x1="145" y1="135" x2="55" y2="170" />
                                        <line x1="175" y1="135" x2="265" y2="170" />
                                    </g>

                                    {/* Pulse animations moving outward */}
                                    <circle cx="210" cy="87" r="3" fill="#CCFF00" className="opacity-0 group-hover:animate-[ping_3s_infinite_100ms]" />
                                    <circle cx="110" cy="87" r="3" fill="#CCFF00" className="opacity-0 group-hover:animate-[ping_3s_infinite_300ms]" />
                                    <circle cx="100" cy="152" r="3" fill="#CCFF00" className="opacity-0 group-hover:animate-[ping_3s_infinite_500ms]" />
                                    <circle cx="220" cy="152" r="3" fill="#CCFF00" className="opacity-0 group-hover:animate-[ping_3s_infinite_700ms]" />

                                    {/* Impression Rings */}
                                    <circle cx="160" cy="120" r="50" stroke="#CCFF00" strokeWidth="1" strokeOpacity="0.2" className="group-hover:scale-150 transform origin-center transition-transform duration-[2000ms] opacity-0 group-hover:opacity-100" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    Interacting
                                    <span className="text-xs font-mono bg-[#CCFF00] text-black px-2 py-1 rounded inline-block w-max">5 Minutes/Day</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Engaging in other people’s posts makes you more visible. We leave insightful comments on industry leaders' posts and participate in high-value groups to connect directly with targeted ICPs.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 4 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-start bg-white/5 border border-white/10 p-8 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            {/* Phase 4 Visual: Queue Management / Calendar Track */}
                            <div className="shrink-0 w-full md:w-64 bg-white/5 border border-white/10 rounded-sm p-4 flex flex-col items-center justify-center relative overflow-hidden group min-h-[240px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Timeline Background */}
                                    <rect x="40" y="40" width="240" height="160" rx="4" fill="#1a1a2e" stroke="#4b5563" strokeWidth="1" />
                                    <path d="M40,70 L280,70" stroke="#4b5563" strokeWidth="1" />

                                    {/* Days Label Header */}
                                    <text x="80" y="60" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">MON</text>
                                    <text x="160" y="60" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">TUE</text>
                                    <text x="240" y="60" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="monospace">WED</text>

                                    <line x1="120" y1="40" x2="120" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 2" />
                                    <line x1="200" y1="40" x2="200" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="2 2" />

                                    {/* Time Tracks (Rows) */}
                                    <text x="25" y="95" textAnchor="end" fill="#6b7280" fontSize="7" fontFamily="monospace">08:00</text>
                                    <line x1="40" y1="92" x2="280" y2="92" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.3" />

                                    <text x="25" y="145" textAnchor="end" fill="#6b7280" fontSize="7" fontFamily="monospace">12:00</text>
                                    <line x1="40" y1="142" x2="280" y2="142" stroke="#4b5563" strokeWidth="1" strokeOpacity="0.3" />

                                    <text x="25" y="195" textAnchor="end" fill="#6b7280" fontSize="7" fontFamily="monospace">16:00</text>

                                    {/* Scheduled Posts */}
                                    <g className="group-hover:opacity-100 opacity-60 transition-opacity duration-500">
                                        {/* Mon 8am Post */}
                                        <rect x="50" y="80" width="60" height="24" rx="2" fill="#CCFF00" fillOpacity="0.2" stroke="#CCFF00" strokeWidth="1" />
                                        <text x="55" y="91" fill="#CCFF00" fontSize="6" fontFamily="sans-serif">Story / Frame</text>
                                        <circle cx="102" cy="92" r="4" fill="#CCFF00" />
                                        <path d="M100 92 L102 94 L105 90" stroke="#1a1a2e" strokeWidth="1" fill="none" />

                                        {/* Tue 12pm Post */}
                                        <rect x="130" y="130" width="60" height="24" rx="2" fill="#CCFF00" fillOpacity="0.2" stroke="#CCFF00" strokeWidth="1" />
                                        <text x="135" y="141" fill="#CCFF00" fontSize="6" fontFamily="sans-serif">Carousel</text>
                                        <circle cx="182" cy="142" r="4" fill="#CCFF00" />
                                        <path d="M180 142 L182 144 L185 140" stroke="#1a1a2e" strokeWidth="1" fill="none" />

                                        {/* Wed 8am Post - Animating in */}
                                        <g className="group-hover:translate-x-0 -translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <rect x="210" y="80" width="60" height="24" rx="2" fill="#CCFF00" fillOpacity="0.8" stroke="#CCFF00" strokeWidth="1" />
                                            <text x="215" y="91" fill="#1a1a2e" fontSize="6" fontFamily="sans-serif" fontWeight="bold">Video Snippet</text>
                                            <circle cx="262" cy="92" r="4" fill="#1a1a2e" />
                                            <path d="M260 92 L262 94 L265 90" stroke="#CCFF00" strokeWidth="1" fill="none" />
                                        </g>
                                    </g>

                                    {/* Current Time Indicator */}
                                    <line x1="200" y1="40" x2="200" y2="200" stroke="#ef4444" strokeWidth="1.5" className="group-hover:translate-x-10 transition-transform duration-[2000ms] ease-linear" />
                                    <polygon points="197,40 203,40 200,45" fill="#ef4444" className="group-hover:translate-x-10 transition-transform duration-[2000ms] ease-linear" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    Queue Management
                                    <span className="text-xs font-mono bg-[#CCFF00] text-black px-2 py-1 rounded inline-block w-max">2 Minutes/Day</span>
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Posting too often overwhelms your audience; posting randomly yields zero traction. We manage your content queue mathematically so news-related posts and core monthly topics never overlap.
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
                        Consistency Is<br />The Unlock.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Stop trying to manually hack the LinkedIn algorithm. Let us implement a 17-minute daily architecture that positions you as the undisputed thought leader in your niche.
                    </p>
                    <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl"
                    >
                        Start Growing Today <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
