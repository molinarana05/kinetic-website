"use client";
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { NavbarDesktop } from "./components/NavbarDesktop";
import { Hero } from "./components/Hero";
import { HeroDesktop } from "./components/HeroDesktop";
import { CredibilityStrip } from "./components/CredibilityStrip";
import { Services } from "./components/Services";
import { ServicesDesktop } from "./components/ServicesDesktop";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { NumberCounter } from "./components/ui/NumberCounter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import { InteractiveGrid } from "./components/ui/InteractiveGrid";
import { InteractiveGridDesktop } from "./components/ui/InteractiveGridDesktop";
// import { ShutterSection } from "./components/ui/ShutterSection"; // Removing Shutter effect
import { TestimonialsDesktop } from "./components/TestimonialsDesktop";
import { MatrixLogStream } from "./components/ui/MatrixLogStream";

export default function HomeClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const aboutImageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    return (
        <main className="min-h-screen bg-[#0a0118] text-white relative selection:bg-neon selection:text-black" style={{ backgroundColor: "#0a0118", color: "white" }}>
            {/* Interactive Grid Background */}
            <div className="md:hidden">
                <InteractiveGrid />
            </div>
            <InteractiveGridDesktop />

            {/* Matrix Log Stream (Dual Side) - Keeping for both as requested, but verify transparency */}
            <MatrixLogStream side="left" />
            <MatrixLogStream side="right" />



            <div className="md:hidden">
                <Navbar />
                <Hero />
            </div>
            <NavbarDesktop />
            <HeroDesktop />

            {/* Credibility Strip - Overlapping Hero slightly for flow */}
            <div className="relative z-10 -mt-24 md:mt-0">
                <CredibilityStrip />
            </div>

            <div className="relative z-10 md:hidden">
                <Services />
            </div>
            <ServicesDesktop />

            {/* How It Works */}
            <section id="how-it-works" className="py-16 md:py-24 bg-surface/30 relative z-10">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="text-center mb-12 md:mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-[900] mb-4 tracking-tight text-white uppercase"
                        >
                            HOW IT WORKS
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em]"
                        >
                            ENGINEERED FOR SPEED. OPTIMIZED FOR REVENUE.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative items-stretch">
                        {/* Connector Line - Animated fade-in with better visibility */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 0.6, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-neon to-transparent hidden md:block origin-left z-0"
                        />
                        {/* Flow Arrows */}
                        <div className="absolute top-[52px] left-0 right-0 hidden md:flex justify-around pointer-events-none z-0 px-[20%]">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.4 }}
                                transition={{ delay: 1.2 }}
                                className="text-neon text-xl font-thin select-none"
                            >→</motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.4 }}
                                transition={{ delay: 1.6 }}
                                className="text-neon text-xl font-thin select-none"
                            >→</motion.div>
                        </div>

                        {[
                            {
                                title: "THE DOWNLOAD",
                                tagLine: "No scripts. You talk, I extract.",
                                context: "One 60-min deep-dive call per month.",
                                get: <>Research-backed list of buyer questions<br />(prioritized)</>
                            },
                            {
                                title: "THE ENGINE",
                                tagLine: "20+ assets from your words.",
                                context: "LinkedIn posts, Newsletters, and Articles that make you the obvious choice.",
                                get: "Ready-to-publish posts, pages, and templates"
                            },
                            {
                                title: "THE GROWTH",
                                tagLine: "Authority without typing.",
                                context: "You build authority and pipeline while you sleep.",
                                get: "Living proof ledger of wins, learnings, and next actions"
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, x: -20 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.4, duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 flex"
                            >
                                <Card className="group flex-1 flex flex-col items-center text-center p-10 border-white/5 bg-black/40 hover:bg-black/60 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(189,0,255,0.1)] hover:border-neon/30">
                                    {/* Numbered Circle - Pulse on hover */}
                                    <div className="w-14 h-14 rounded-full bg-[#CCFF00] text-black flex items-center justify-center mb-6 font-bold text-xl neon-button-shadow group-hover:animate-pulse-glow transition-all duration-300">
                                        {i + 1}
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 tracking-widest text-white">{step.title}</h3>

                                    <div className="space-y-4">
                                        <p className="text-white text-xl font-bold leading-tight">{step.tagLine}</p>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                                            {step.context}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Early Wins */}
            <section id="early-wins" className="py-16 md:py-24 relative overflow-hidden z-10">
                <div className="container mx-auto px-6 md:px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-[900] mb-4 tracking-tight text-white uppercase"
                        >
                            EARLY WINS
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className=""
                        >
                            <p className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis">
                                REAL OUTCOMES FROM SYSTEMS WE BUILT.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                        className="grid md:grid-cols-3 gap-10 mb-20"
                    >
                        {[
                            {
                                tag: "SNAPSHOT",
                                system: "LinkedIn Content System",
                                headline: "+3 QUALIFIED DEMOS",
                                context: "B2B SaaS team (RevTech). Founder-led. Team of 15–50.",
                                bullets: [
                                    "Repositioned offer + rebuilt ICP messaging",
                                    "Launched LinkedIn content system + distribution",
                                    "Weekly proof-led iteration on winners"
                                ]
                            },
                            {
                                tag: "SNAPSHOT",
                                system: "Search-led Content Page",
                                headline: "TOP 3 RANKINGS",
                                context: "B2B SaaS team (Infrastructure). Pre-seed stage, serving global clients.",
                                bullets: [
                                    "Topic + keyword research mapped to funnel",
                                    "Content built for clarity + skimmability",
                                    "Internal linking + on-page SEO structure"
                                ]
                            },
                            {
                                tag: "SNAPSHOT",
                                system: "GTM Launch Kit",
                                headline: "SOLD OUT LAUNCH",
                                context: "D2C launch support: messaging + content kit.",
                                bullets: [
                                    "Launch narrative + landing page copy",
                                    "Content kit for social + email",
                                    "Proof assets + FAQs to remove objections"
                                ]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" }
                                    }
                                }}
                            >
                                <Card className="group h-full p-8 border-white/5 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-[6px] hover:shadow-[0_0_40px_rgba(189,0,255,0.15)] hover:border-neon/30 flex flex-col relative overflow-hidden">
                                    <div className="mb-6">
                                        <span className="text-[9px] font-bold text-black uppercase tracking-widest border border-neon/30 bg-[#CCFF00] px-2 py-1 rounded">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Headline: Punchy Newspaper Style */}
                                    <div className="text-3xl font-black text-white mb-4 leading-none pr-12 min-h-[3rem] items-center uppercase tracking-tighter flex">
                                        {i === 0 && <><span className="mr-1">+</span><NumberCounter end={3} duration={1.5} suffix=" QUALIFIED DEMOS" /></>}
                                        {i === 1 && <><span className="mr-2">TOP</span><NumberCounter end={3} duration={1.5} suffix=" RANKINGS" /></>}
                                        {i === 2 && "SOLD OUT LAUNCH"}
                                    </div>

                                    <p className="text-[11px] text-gray-500 italic mb-8 font-light border-l border-white/10 pl-3">
                                        {item.context}
                                    </p>

                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {item.bullets.map((bullet, j) => (
                                            <li key={j} className="flex items-start text-gray-400 text-sm">
                                                <span className="min-w-[4px] h-1 w-1 bg-neon/80 rounded-full mt-2 mr-3" />
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-white/[0.03] mt-auto flex justify-end">
                                        <div className="text-[10px] font-medium text-gray-600 flex items-center gap-2 group-hover:text-gray-400 transition-colors">
                                            <span className="text-[#CCFF00] group-hover:text-neon underline decoration-[#CCFF00]/30 underline-offset-4 transition-all duration-300">
                                                Details shared on call →
                                            </span>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Final CTA Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center pt-12 border-t border-white/[0.03]"
                    >
                        {/* Hook */}
                        <p className="text-gray-400 mb-8 text-lg font-light">
                            Ready to install this system in your business?
                        </p>
                        <Button
                            className="bg-[#CCFF00] text-black hover:bg-white hover:text-black px-12 py-6 text-lg rounded-[4px] font-[900] uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz', '_blank')}
                        >
                            START THE ENGINE
                        </Button>
                    </motion.div>
                </div>
            </section>


            {/* Testimonials */}


            <div className="md:hidden">
                <section id="testimonials" className="py-16 md:py-24 relative z-10 overflow-hidden">
                    <div className="container mx-auto px-6 md:px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl font-[900] mb-6 tracking-tight uppercase"
                            >
                                WHAT PEOPLE SAY
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em]"
                            >
                                REAL WORDS FROM PEOPLE WHO’VE SEEN THE WORK UP CLOSE.
                            </motion.p>
                        </div>

                        {/* Auto-Play Marquee */}
                        <div className="relative w-full">
                            <div className="flex overflow-hidden mask-linear-fade">
                                <motion.div
                                    className="flex gap-6 w-max pl-4"
                                    animate={{ x: "-50%" }}
                                    transition={{
                                        duration: 30,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatType: "loop"
                                    }}
                                >
                                    {[
                                        {
                                            quote: "Moxie turned our chaotic posting into a precise revenue engine. We stopped guessing and started dominating our niche.",
                                            name: "Anuraag Paul",
                                            company: "RELIANCE GROUP",
                                            image: "/anuraag-paul.png"
                                        },
                                        {
                                            quote: "We went from invisible to industry authority. Molina’s framework isn’t just content. It is business strategy disguised as posts.",
                                            name: "Aparupa Chakravarty",
                                            company: "SPATIAL EYE",
                                            image: "/aparupa-chakravarty.png"
                                        },
                                        {
                                            quote: "Finally, a system that respects my time. One hour with Molina creates a month of high-leverage assets. The clarity is unmatched.",
                                            name: "Kavita Rana",
                                            company: "SHARDA GLOBAL SCHOOL",
                                            image: "/kavita-rana.png"
                                        },
                                        {
                                            quote: "Moxie turned our chaotic posting into a precise revenue engine. We stopped guessing and started dominating our niche.",
                                            name: "Anuraag Paul",
                                            company: "RELIANCE GROUP",
                                            image: "/anuraag-paul.png"
                                        },
                                        {
                                            quote: "We went from invisible to industry authority. Molina’s framework isn’t just content. It is business strategy disguised as posts.",
                                            name: "Aparupa Chakravarty",
                                            company: "SPATIAL EYE",
                                            image: "/aparupa-chakravarty.png"
                                        },
                                        {
                                            quote: "Finally, a system that respects my time. One hour with Molina creates a month of high-leverage assets. The clarity is unmatched.",
                                            name: "Kavita Rana",
                                            company: "SHARDA GLOBAL SCHOOL",
                                            image: "/kavita-rana.png"
                                        }
                                    ].map((t, i) => (
                                        <div key={i} className="w-[85vw] md:w-[450px] shrink-0">
                                            <Card className="border-white/10 bg-black/60 p-8 h-full flex flex-col relative overflow-hidden group hover:border-[#CCFF00]/50 transition-colors">
                                                {/* Quote Mark - Fixed: Top Left + Lime + Opacity */}
                                                <div className="absolute top-4 left-4 text-[#CCFF00] opacity-40 font-serif text-[60px] leading-none pointer-events-none select-none">“</div>

                                                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light italic relative z-10 pt-4">"{t.quote}"</p>
                                                <div className="mt-auto flex items-center gap-3 relative z-10">
                                                    {/* Restored Avatar */}
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
                                                        {/* Using a placeholder if image fails, or just the img tag */}
                                                        {/* Placeholder until real images are confirmed, or use t.image if available in public folder */}
                                                        <img src={t.image} alt={`${t.name}, B2B client testimonial for Moxie Digital Content Engine`} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-bold text-neon tracking-widest text-sm mb-1 uppercase">{t.name}</div>
                                                        <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">{t.company}</div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <TestimonialsDesktop />

            {/* About */}
            < section id="about" className="py-16 md:py-40 relative z-10" >
                <div className="container mx-auto px-6 md:px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        {/* Wrapper to control Mobile Order */}
                        <div className="contents md:block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col md:hidden mb-8 text-center"
                            >
                                <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 block">THE OPERATOR</span>
                            </motion.div>

                            {/* Portrait Image Column */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                style={{ y: aboutImageY }}
                                className="relative group lg:pr-12 order-2 md:order-1"
                            >
                                <div className="relative aspect-[3/4] w-[90%] mx-auto md:w-full rounded-sm overflow-hidden border-[6px] border-[#CCFF00] shadow-[16px_16px_0px_0px_#111] bg-[#0a0118]">
                                    <img
                                        src="/molina-rana-cutout.png"
                                        alt="Molina Rana, Senior B2B Content Marketing Consultant and Founder of Moxie Digital"
                                        className="w-full h-full object-cover object-top grayscale brightness-[1.05] contrast-[1.2]"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Text Content Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col order-3 md:order-2 md:pl-8" // Added md:pl-8 for spacing
                        >
                            <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 hidden md:block">THE OPERATOR</span>
                            <h2 className="text-3xl md:text-5xl font-[900] text-white mb-6 md:mb-10 leading-none uppercase">
                                I AM NOT AN AGENCY. I AM A PARTNER.
                            </h2>

                            {/* Increased Side Margins/Padding for readability as requested */}
                            <div className="space-y-6 md:space-y-8 text-gray-300 text-lg leading-[1.6] font-medium px-4 md:px-0">
                                <p>
                                    Agencies charge for overhead. I charge for impact.
                                </p>
                                <p>
                                    When you hire Moxie, you get me. I have built the growth systems for market leaders like Paytm, Bajaj Finserv, and Grant Thornton. Now I install those same systems for you.
                                </p>
                                <p>
                                    No juniors. No account managers. No fluff. I am a senior operator running your content engine so you can stay in your zone of genius.
                                </p>
                            </div>

                            <div className="mt-8 md:mt-12 flex flex-col items-center md:items-start">
                                <Button
                                    href="#services"
                                    className="bg-[#CCFF00] text-black px-8 py-4 font-[900] tracking-[1px] uppercase text-sm hover:bg-white transition-colors duration-300 rounded-[4px]"
                                >
                                    START THE ENGINE
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16 md:py-24 relative z-10">
                <div className="container mx-auto px-6 md:px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-4 block">THE KNOWLEDGE BASE</span>
                        <h2 className="text-3xl md:text-5xl font-[900] text-white uppercase">COMMON QUESTIONS</h2>
                    </div>

                    <div className="space-y-[40px]">
                        {[
                            {
                                q: "What is a revenue-led content strategy for B2B founders?",
                                a: "Most agencies focus on vanity metrics like likes and impressions. A revenue-led strategy focuses on pipeline. I build a system that identifies the specific pain points of your ideal customers and addresses them with high-authority content. This transforms your LinkedIn profile from a social feed into a lead generation engine that attracts sales-ready prospects."
                            },
                            {
                                q: "How does a founder-led brand engine differ from a standard digital agency?",
                                a: "Agencies often assign junior account managers to your brand. They prioritize volume over depth. As a senior operator, I install a high-leverage system that I run personally. I use the same frameworks I built for market leaders like Paytm and Bajaj. You get senior-level strategy and execution without the agency overhead or the lack of business context."
                            },
                            {
                                q: "What is the time commitment required from a busy founder?",
                                a: "The goal of this system is to buy back your time. We use a high-leverage \"Extraction Session\" once a month. I spend sixty minutes extracting your unique insights and industry expertise. My team and I then turn that single hour into a full month of strategic content. You stay in your zone of genius while the engine runs in the background."
                            },
                            {
                                q: "Can this content engine actually drive measurable B2B pipeline?",
                                a: "Yes. We do not post for the sake of posting. Every piece of content is designed to move a prospect through the buyer’s journey. We target middle-of-the-funnel and bottom-of-the-funnel intent. This ensures that when a lead reaches out, they are already educated on your value and ready for a discovery call."
                            },
                            {
                                q: "Why is a \"Growth Engine\" better than hiring a full-time content manager?",
                                a: "A full-time hire requires management, benefits, and significant training. Most content managers understand writing but do not understand B2B business strategy. I provide a plug-and-play system that is already proven at scale. You get the output of a high-end marketing department for a fraction of the cost of a senior full-time hire."
                            },
                            {
                                q: "How long does it take to see results from a founder growth system?",
                                a: "Authority building is a compounding game. You will typically see a shift in the quality of your network and inbound engagement within the first thirty days. By day ninety, the engine is fully optimized. At this stage, the content begins to consistently drive inbound inquiries and positions you as the go-to authority in your specific niche."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="border-b border-white/10 pb-6"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between py-6 text-left group transition-colors"
                                >
                                    <span className="font-bold text-xl text-white group-hover:text-[#CCFF00] transition-colors">{item.q}</span>
                                    {openFaq === i ? <Minus className="text-[#CCFF00] shrink-0 ml-4 w-6 h-6" /> : <Plus className="text-[#CCFF00] shrink-0 ml-4 w-6 h-6" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 text-white text-lg font-medium leading-relaxed opacity-90 max-w-3xl">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Final CTA - The Decision */}
            <section className="relative overflow-hidden z-10">
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-[#CCFF00]" />

                <div className="container mx-auto px-6 md:px-4 pt-16 pb-24 max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left" // Centered on mobile
                    >
                        <span className="text-[18px] font-bold text-[#CCFF00] uppercase tracking-[0.2em] mb-6 block">THE DECISION</span>
                        <h2 className="text-4xl md:text-6xl font-[900] text-white mb-10 leading-[1.1] uppercase">
                            STOP GUESSING.<br />START OPERATING.
                        </h2>

                        {/* Equalized margins for subtext */}
                        <div className="space-y-6 text-white text-lg md:text-xl font-medium leading-[1.6] max-w-2xl mb-12 px-8 md:px-0">
                            <p>
                                Agencies want your retainer. I want your results.
                            </p>
                            <p>
                                The system is built. The engine is ready to be installed. I only partner with 2 founders at a time to ensure deep impact. If you are ready for a revenue-first content strategy, let us talk.
                            </p>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block w-[90%] sm:w-auto mx-auto md:mx-0" // Centered button
                        >
                            <Button
                                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-[#CCFF00] text-black px-8 py-4 font-[900] tracking-[1px] text-sm uppercase rounded-[4px] border-none hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                            >
                                BOOK YOUR ENGINE CALL
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Local Footer Grid for "Light Up" Effect */}
                <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                    <InteractiveGrid />
                </div>
            </section>

        </main >
    );
}
