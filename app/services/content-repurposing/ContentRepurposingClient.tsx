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
                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <RefreshCw size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:rotate-180" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Analytics Driven Extraction</p>
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
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <LayoutTemplate size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:scale-110" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Platform-Native formatting</p>
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
                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <ImageIcon size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:-translate-y-2" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Visual Transformation</p>
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
                            <div className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <Share2 size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:rotate-12" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Strategic Syndication</p>
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
