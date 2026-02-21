"use client";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";

const services = [
    {
        title: "For B2B teams",
        target: "SaaS, DevTools, AI infra, consultancies",
        outcome: "Positioning that sticks; Inbound pipeline that grows",
        items: ["Positioning & messaging refresh", "LinkedIn & search content engine", "Community & advocacy loops"],
        timeline: "4–6 weeks",
    },
    {
        title: "For B2C brands",
        target: "Beauty, fashion, wellness, creators",
        outcome: "Stories that resonate; Community that follows",
        items: ["Story‑driven content direction", "Instagram & influencer loops", "Launch support & retention"],
        timeline: "6–8 weeks",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-16 md:py-32 relative">
            <div className="container mx-auto px-6 md:px-4">
                {/* Heading & Subheading */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-[900] mb-4 tracking-tight text-white uppercase"
                    >
                        WHAT WE DO
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em]"
                    >
                        TWO TRACKS. SAME OUTCOME. BOOKED BUSINESS.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                    className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
                >
                    {/* B2B Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <Card className="h-full hover:shadow-[0_0_40px_rgba(204,255,0,0.2)] hover:border-neon/30 transition-all duration-500 border-white/5 p-10 flex flex-col group relative overflow-hidden">
                            <div className="flex flex-col items-start gap-4 mb-1">
                                {/* Most Popular Tag - Now top-left and attached to title flow */}
                                <span className="text-[10px] font-bold text-neon uppercase tracking-widest border border-neon/30 bg-neon/5 px-2 py-0.5 rounded leading-none">
                                    FLAGSHIP
                                </span>
                                <h3 className="text-2xl font-bold text-white">THE FOUNDER ENGINE</h3>
                            </div>
                            <p className="text-sm text-gray-500 italic mb-8">SaaS, DevTools, AI infra, consultancies</p>

                            {/* Outcome Line - Single Line */}
                            <p className="text-lg text-white mb-6 font-medium leading-relaxed border-l-2 border-neon pl-4">
                                Positioning that sticks. Pipeline that grows.
                            </p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Monthly 60-Min Interview",
                                    "Strategy & Repurposing",
                                    "Pipeline Reporting"
                                ].map((item, j) => (
                                    <li key={j} className="flex items-start text-gray-300 text-sm md:text-base">
                                        <span className="min-w-[4px] h-1 w-1 bg-neon rounded-full mt-2.5 mr-3 shadow-[0_0_6px_#CCFF00]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-auto">
                                <a href="#contact" className="text-sm font-bold text-[#CCFF00] group-hover:text-white hover:underline transition-colors flex items-center gap-2">
                                    See The Engine <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </a>
                                <span className="text-xs border border-white/40 text-white px-3 py-1 rounded-full bg-white/20 font-medium">
                                    4–6 weeks
                                </span>
                            </div>
                        </Card>
                    </motion.div>

                    {/* B2C Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <Card className="h-full hover:shadow-[0_0_40px_rgba(204,255,0,0.2)] hover:border-neon/30 transition-all duration-500 border-white/5 p-10 flex flex-col group overflow-hidden">
                            <div className="pt-7"> {/* Spacing to align with B2B card's extra tag header */}
                                <h3 className="text-2xl font-bold mb-1 text-white">CUSTOM CONSULTING</h3>
                            </div>
                            <p className="text-sm text-gray-500 italic mb-8">For complex teams needing bespoke strategy.</p>

                            {/* Outcome Line - Single Line */}
                            <p className="text-lg text-white mb-6 font-medium leading-relaxed border-l-2 border-neon pl-4">
                                Stories that sell. Community that follows.
                            </p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {[
                                    "Workshops & Strategy Audits",
                                    "Team Training & Playbooks",
                                    "Ad-hoc Growth SPRINTS"
                                ].map((item, j) => (
                                    <li key={j} className="flex items-start text-gray-300 text-sm md:text-base">
                                        <span className="min-w-[4px] h-1 w-1 bg-neon rounded-full mt-2.5 mr-3 shadow-[0_0_6px_#CCFF00]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-between items-end border-t border-white/5 pt-6 mt-auto">
                                <a href="#contact" className="text-sm font-bold text-[#CCFF00] group-hover:text-white hover:underline transition-colors flex items-center gap-2">
                                    Book a Consult <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </a>
                                <span className="text-xs border border-white/40 text-white px-3 py-1 rounded-full bg-white/20 font-medium">
                                    6–8 weeks
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
};
