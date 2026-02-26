"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Mail, Target, Layers, FileText, Send, UserCheck, Inbox, Flame } from "lucide-react";

export function NewsletterClient() {
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
                        Owned Audience
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        Master The<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Inbox</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Success depends on your ability to build and nurture a list of engaged subscribers. We create newsletters that reach a crowd, driving a <span className="text-[#CCFF00] font-bold">36x return on investment</span>.
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
                            Start Your Engine <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Newsletters Matter */}
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
                            The Ultimate <span className="text-[#CCFF00]">Growth Moat</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            Newsletters remain one of the most powerful digital marketing tools at your disposal. They let you communicate directly with prospects in a personalized way. Ideally, receiving your newsletter should feel like getting an update from a helpful friend, not a pushy salesperson.
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
                                <Flame size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">$36 ROI For Every $1</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                Email marketing delivers a higher return than any other channel. When you make a habit of sending personalized updates that add genuine value, your business reaps invaluable rewards and outsized conversions.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <UserCheck size={120} className="text-[#CCFF00]" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest text-[#CCFF00] mb-4 relative z-10">Complete Control</h3>
                            <p className="text-gray-300 leading-relaxed relative z-10 text-lg">
                                The most overlooked benefit: You have complete control over your list. You won't suddenly lose access to your subscribers due to a social media algorithm change. It is true owned attention.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Educate vs Sell */}
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
                            NURTURE <span className="text-[#CCFF00] text-xl block mt-2">vs</span> SELL
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l md:border-l-2 border-white/10 pl-0 md:pl-12">
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                            Most brands fail at newsletters because they treat them purely as a sales vehicle. The inbox is sacred.
                        </p>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            <strong className="text-white">Our Strategy</strong> focuses on educating and entertaining first. When we do motivate readers to take action (read a post, RSVP, or buy), they trust the recommendation because we established thought-leadership first.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* What's In The Newsletter */}
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
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Deliverables</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            Building The Publication
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
                                    Content Architecture
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Immediate Value</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    We don't send emails just for the sake of it. We design a replicable format tailored to your brand, mixing weekly content digests, in-depth guides, industry interviews, and case studies.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Target className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Clear CTAs:</strong> Every send has an explicit intention.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <Target className="text-[#CCFF00] shrink-0 mt-1" size={20} />
                                        <span><strong className="text-white">Length Testing:</strong> We A/B test length to find the optimal engagement threshold for your unique readership.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-sm p-8 aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                <FileText size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:scale-110" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Editorial DNA</p>
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
                                <Layers size={80} className="text-[#CCFF00]/40 group-hover:text-[#CCFF00] transition-colors mb-6 duration-500 group-hover:rotate-12" />
                                <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">Relevance at Scale</p>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="text-[#CCFF00] font-mono text-sm uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#CCFF00]/20 text-[#CCFF00] font-bold">2</span>
                                    Segmentation
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Personalized Delivery</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    It’s unlikely that all of your subscribers share the exact same needs. We implement tag-based segmentation to send targeted updates to specific lists.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    By personalizing your newsletters, we ensure readers only receive the information most relevant to them, drastically improving open rates, engagement, and conversion metrics.
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
                        Launch Your<br />Publication.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Turn rented social media attention into owned community. Start building the highest ROI asset your business will ever own.
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
