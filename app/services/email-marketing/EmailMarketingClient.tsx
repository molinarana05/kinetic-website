"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { ArrowRight, Mail, Target, Zap, ShieldCheck, Heart, RefreshCcw, LayoutTemplate, Activity } from "lucide-react";

export function EmailMarketingClient() {
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
                        Direct Response
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-8"
                    >
                        Beyond The<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-white">Open Rate</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Email marketing is the strategic use of automated sequences to promote products and services. But if your benchmark for success is a 30% open rate with zero meetings booked, <span className="text-[#CCFF00] font-bold">it's a failed program.</span>
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
                            Optimize For Revenue <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Advantages of Email Marketing */}
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
                            The Triad Of <span className="text-[#CCFF00]">Advantage</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                            A powerful digital marketing channel, direct email allows you to continuously educate leads, accelerate the sales cycle, and drive middle-of-the-funnel prospects toward a booked discovery call.
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
                            <Zap size={48} className="text-[#CCFF00] mb-6 relative z-10" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 relative z-10">Conversions</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                Launching a sale or promotion? You can send an email campaign to drive direct sales. Techniques like abandoned cart emails and special offers inherently drive high-intent revenue.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <Target size={48} className="text-[#CCFF00] mb-6 relative z-10" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 relative z-10">Brand Awareness</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                Direct communication ensures your brand shines straight through to the inbox. Consistent, high-value content keeps your agency top-of-mind the moment they are ready to buy.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 p-8 rounded-sm relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                            <Heart size={48} className="text-[#CCFF00] mb-6 relative z-10" />
                            <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-4 relative z-10">Customer Loyalty</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">
                                Email drives loyalty at every stage of the buyer journey: lead-nurturing, conversion, onboarding, and retention. It is unparalleled for lifetime value expansion.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Campaign Architecture */}
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
                            Campaign Architecture
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">We deploy three primary classifications of email marketing to monetize your audience.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {/* Type 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            <div className="shrink-0 md:w-1/3">
                                <h3 className="text-3xl font-black uppercase tracking-wide text-white mb-2">Promotional</h3>
                                <div className="h-1 w-12 bg-[#CCFF00] mb-4 mt-6" />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Strategic campaigns designed specifically to spotlight special offers, new releases, or gated assets. These consist typically of 3-10 sequential emails sent over several days or weeks, building urgency and intent leading to a clear call-to-action to book a demo or purchase.
                                </p>
                            </div>
                        </motion.div>

                        {/* Type 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            <div className="shrink-0 md:w-1/3">
                                <h3 className="text-3xl font-black uppercase tracking-wide text-white mb-2">Informational</h3>
                                <div className="h-1 w-12 bg-[#CCFF00] mb-4 mt-6" />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    <strong className="text-white">Newsletters:</strong> Regular touchpoints that share news, milestones, or high-value insights to maintain brand awareness.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    <strong className="text-white">Announcements:</strong> Broadcasts regarding company changes, service updates, or critical information necessary for your active client base.
                                </p>
                            </div>
                        </motion.div>

                        {/* Type 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex flex-col md:flex-row gap-8 items-center bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm hover:border-[#CCFF00]/30 transition-colors"
                        >
                            <div className="shrink-0 md:w-1/3">
                                <h3 className="text-3xl font-black uppercase tracking-wide text-white mb-2">Re-Engagement</h3>
                                <div className="h-1 w-12 bg-[#CCFF00] mb-4 mt-6" />
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Automated sequences designed to reconnect with customers or subscribers who haven't been active recently. We utilize trigger-based behavioral sequences to warm up cold pipeline and pull them back into an active buying cycle.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Execution Playbook */}
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
                            The Execution <span className="text-[#CCFF00]">Playbook</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Step 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex gap-6"
                        >
                            <div className="shrink-0 mt-1"><ShieldCheck size={32} className="text-[#CCFF00]" /></div>
                            <div>
                                <h4 className="text-2xl font-black uppercase text-white mb-3">List Building & Law</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    We build opt-in strategies to capture high-intent leads legally. We strictly adhere to CAN-SPAM, GDPR, and other compliance frameworks to ensure domain safety and maximum deliverability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex gap-6"
                        >
                            <div className="shrink-0 mt-1"><LayoutTemplate size={32} className="text-[#CCFF00]" /></div>
                            <div>
                                <h4 className="text-2xl font-black uppercase text-white mb-3">Intent-Based Segmentation</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Your list is segmented by buyer readiness: cold prospect, warm lead, active pipeline, customer. Each segment receives the right behavioral trigger at the exact right moment.
                                </p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="flex gap-6"
                        >
                            <div className="shrink-0 mt-1"><Activity size={32} className="text-[#CCFF00]" /></div>
                            <div>
                                <h4 className="text-2xl font-black uppercase text-white mb-3">Performance Optimization</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    We measure what actually matters: reply rate, demo bookings, and pipeline influenced. We actively optimize subject lines, delivery timing, and CTA placement to maximize revenue attribution.
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
                        Generate Pipeline.<br />Not Open Rates.
                    </h2>
                    <p className="text-black/70 font-medium text-xl mb-12 max-w-2xl mx-auto">
                        Turn your email list into an automated engine that educates leads and books discovery calls on autopilot.
                    </p>
                    <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-black text-[#CCFF00] font-black uppercase tracking-widest px-12 py-6 rounded text-lg hover:bg-gray-900 hover:scale-105 transition-all shadow-xl"
                    >
                        Audit Your Email Strategy <ArrowRight size={20} />
                    </a>
                </div>
            </section>
        </main>
    );
}
