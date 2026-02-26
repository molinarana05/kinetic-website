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
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                                <Presentation size={32} />
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
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                                <Rss size={32} />
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
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                                <Users size={32} />
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
                            <div className="shrink-0 w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                                <Layers size={32} />
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
