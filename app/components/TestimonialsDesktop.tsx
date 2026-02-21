"use client";
import { motion } from "framer-motion";

export const TestimonialsDesktop = () => {
    return (
        <section className="py-24 relative z-10 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[900] mb-4 uppercase tracking-tight">
                        TRUSTED BY FOUNDERS
                    </h2>
                    <div className="w-24 h-1 bg-[#CCFF00] mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            n: "Anuraag Paul",
                            r: "Reliance Group",
                            q: "Moxie turned our chaotic posting into a precise revenue engine. We stopped guessing and started dominating our niche.",
                            img: "/anuraag-paul.png"
                        },
                        {
                            n: "Aparupa Chakravarty",
                            r: "Spatial Eye",
                            q: "We went from invisible to industry authority. Molina’s framework isn’t just content. It is business strategy disguised as posts.",
                            img: "/aparupa-chakravarty.png"
                        },
                        {
                            n: "Kavita Rana",
                            r: "Sharda Global School",
                            q: "Finally, a system that respects my time. One hour with Molina creates a month of high-leverage assets. The clarity is unmatched.",
                            img: "/kavita-rana.png"
                        },
                        {
                            n: "Arjun Mehta",
                            r: "Co-Founder, ScaleUp A.I.",
                            q: "The clarity we got was instant. We stopped wasting time on content that didn't convert. Moxie is the real deal.",
                            img: "/arjun-mehta.png"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors duration-300"
                        >
                            <p className="text-xl text-gray-300 mb-6 leading-relaxed">"{item.q}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CCFF00] to-black flex items-center justify-center font-bold text-black border border-[#CCFF00] overflow-hidden">
                                    {item.img ? (
                                        <img src={item.img} alt={`${item.n}, ${item.r} - Testimonial for Moxie Digital Marketing`} className="w-full h-full object-cover" />
                                    ) : (
                                        item.n.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider">{item.n}</h4>
                                    <p className="text-sm text-[#CCFF00]">{item.r}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
