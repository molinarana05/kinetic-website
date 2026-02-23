"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ChaosVsCalm = () => {
    const [merged, setMerged] = useState(false);
    const [glitches, setGlitches] = useState<{ id: number; text: string; top: string; left: string }[]>([]);

    const noiseTexts = [
        "Hi sir, we can do SEO for 1st page",
        "10 ChatGPT prompts for B2B",
        "Synergize scalable paradigms",
        "Just touching base on my last 14 emails",
        "We are the leading provider of solutions",
        "Unlock hyper-growth potential",
        "Buy our list of 100k verified leads",
        "Hope this email finds you well",
    ];

    // Generate random noise
    useEffect(() => {
        if (!merged) {
            const interval = setInterval(() => {
                setGlitches((prev) => {
                    const newGlitch = {
                        id: Date.now(),
                        text: noiseTexts[Math.floor(Math.random() * noiseTexts.length)],
                        top: `${Math.random() * 90}%`,
                        left: `${Math.random() * 80}%`,
                    };
                    return [...prev.slice(-15), newGlitch]; // Keep last 15
                });
            }, 100);

            return () => clearInterval(interval);
        }
    }, [merged]);

    return (
        <section id="how-it-works" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black cursor-pointer border-y border-white/10" onClick={() => setMerged(!merged)}>
            {/* The Left Side (Chaos) */}
            <motion.div
                initial={false}
                animate={{ width: merged ? "0%" : "50%", opacity: merged ? 0 : 1 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute left-0 top-0 bottom-0 bg-[#0d0b0b] overflow-hidden flex flex-col justify-center border-r border-white/10"
            >
                {/* Glitchy elements */}
                {glitches.map((glitch) => (
                    <motion.div
                        key={glitch.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 1.1] }}
                        transition={{ duration: 0.3 }}
                        className="absolute text-[10px] md:text-sm font-mono text-gray-500 bg-white/5 border border-white/10 p-2 md:p-3 whitespace-nowrap"
                        style={{ top: glitch.top, left: glitch.left }}
                    >
                        {glitch.text}
                    </motion.div>
                ))}

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                <div className="relative z-10 w-full flex justify-center text-center px-4">
                    <h2 className="text-3xl md:text-6xl font-black text-white/50 uppercase tracking-tighter">
                        The Noise
                    </h2>
                </div>
            </motion.div>

            {/* The Right Side (Calm) */}
            <motion.div
                initial={false}
                animate={{
                    width: merged ? "100%" : "50%",
                    left: merged ? "0%" : "50%",
                    backgroundColor: merged ? "#0a0118" : "#0d0b0b"
                }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                className="absolute top-0 bottom-0 flex flex-col items-center justify-center overflow-hidden px-6 md:px-12"
            >
                <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
                    <AnimatePresence mode="wait">
                        {!merged ? (
                            <motion.div
                                key="calm"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                                    The Signal
                                </h2>
                                <p className="text-sm md:text-xl text-gray-400 font-serif italic">
                                    Click to synthesize.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="merged"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col items-center w-full"
                            >
                                <span className="text-[#CCFF00] font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-6 block">
                                    Engineered for Pipeline
                                </span>
                                <h2 className="text-4xl md:text-7xl lg:text-[90px] font-black text-white uppercase tracking-tighter leading-[1.1] mb-8">
                                    Clarity Over Chaos
                                </h2>
                                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl leading-relaxed mb-12">
                                    We replace fragmented, spray-and-pray marketing with a centralized AI + Human content engine. One system that compounds authority, captures intent, and converts category demand into qualified pipeline.
                                </p>

                                {/* Process Steps that appear after merge */}
                                <div className="grid md:grid-cols-3 gap-6 w-full text-left">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                                        className="border-t border-[#CCFF00]/30 pt-4"
                                    >
                                        <div className="text-[#CCFF00] font-mono text-xs mb-2 tracking-widest">PHASE 01</div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Strategic Extraction</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">We extract your proprietary IP through intensive founder interviews. No generic research, only lived experience.</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
                                        className="border-t border-[#CCFF00]/30 pt-4"
                                    >
                                        <div className="text-[#CCFF00] font-mono text-xs mb-2 tracking-widest">PHASE 02</div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Engineered Distribution</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">AI systems splinter that IP into 30+ optimized touchpoints across SEO, LinkedIn, and Email simultaneously.</p>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
                                        className="border-t border-[#CCFF00]/30 pt-4"
                                    >
                                        <div className="text-[#CCFF00] font-mono text-xs mb-2 tracking-widest">PHASE 03</div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">Pipeline Capture</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">We build the automated funnels that turn that attention into booked meetings and closed-won revenue.</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Click affordance for undiscovered users */}
            {!merged && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 text-white flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-mono text-gray-400 bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm shadow-2xl">
                        Click Anywhere To Synthesize
                    </span>
                </motion.div>
            )}
        </section>
    );
};
