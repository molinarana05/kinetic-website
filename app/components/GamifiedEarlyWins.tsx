"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GameCard } from "./ui/GameCard";
import { NumberCounter } from "./ui/NumberCounter";
import { Button } from "./ui/Button";

import { CoinFlipGame } from "./games/CoinFlipGame";
import { SnakeGame } from "./games/SnakeGame";
import { PacManGame } from "./games/PacManGame";

export const GamifiedEarlyWins: React.FC = () => {
    const [unlockedCards, setUnlockedCards] = useState<Record<number, boolean>>({});
    const [lostCards, setLostCards] = useState<Record<number, boolean>>({});

    const handleWin = (index: number) => {
        setUnlockedCards((prev) => ({ ...prev, [index]: true }));
        setLostCards((prev) => ({ ...prev, [index]: false }));
    };

    const handleLose = (index: number) => {
        setLostCards((prev) => ({ ...prev, [index]: true }));
        // optionally reset lost card state after a delay if we want them to keep trying
        setTimeout(() => {
            setLostCards((prev) => ({ ...prev, [index]: false }));
        }, 1000);
    };

    return (
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
                        <p className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis mb-6">
                            REAL OUTCOMES FROM SYSTEMS WE BUILT.
                        </p>
                        <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                            B2B doesn't have to be boring. We gamified our results using the power of arcade nostalgia to make reading case studies engaging. <br />
                            <span className="text-[#CCFF00] mt-2 block font-black uppercase tracking-widest text-xs md:text-sm">Win these quick retro challenges to unlock the strategies and numbers behind our early wins.</span>
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mb-20 min-h-[500px]">
                    <GameCard
                        tag="SNAPSHOT"
                        headlinePrefix={<><span className="mr-1">+</span><NumberCounter end={3} duration={1.5} suffix=" QUALIFIED DEMOS" /></>}
                        headline=""
                        context="The founder was posting inconsistently and attracting the wrong audience. We stepped in with a complete overhaul:"
                        bullets={[
                            "Repositioned the offer and rebuilt ICP messaging",
                            "Launched a LinkedIn content system built around proof and pipeline",
                            "Generated 14 qualified demos in 90 days",
                            "$180K in influenced pipeline directly from our system"
                        ]}
                        gameThematicTieIn="Flip your odds. Just like we flipped this founder's pipeline."
                        gameComponent={<CoinFlipGame onWin={() => handleWin(0)} onLose={() => handleLose(0)} />}
                        isUnlocked={!!unlockedCards[0]}
                        hasLost={!!lostCards[0]}
                    />

                    <GameCard
                        tag="SNAPSHOT"
                        headlinePrefix={<><span className="mr-2">TOP</span><NumberCounter end={3} duration={1.5} suffix=" RANKINGS" /></>}
                        headline=""
                        context="No SEO foundation, no organic presence, competing against established players. We built a topical authority engine:"
                        bullets={[
                            "Mapped topics and keywords directly to funnel intent",
                            "Structured the site and content for clarity and skimmability",
                            "Ranked 23 keywords on Page 1 within four months",
                            "Drove a 67% increase in organic traffic and 4 inbound leads/month"
                        ]}
                        gameThematicTieIn="Navigate the noise. We helped this brand find the path to page 1."
                        gameComponent={<SnakeGame onWin={() => handleWin(1)} onLose={() => handleLose(1)} />}
                        isUnlocked={!!unlockedCards[1]}
                        hasLost={!!lostCards[1]}
                    />

                    <GameCard
                        tag="SNAPSHOT"
                        headline="SOLD OUT LAUNCH"
                        context="No existing audience and no launch playbook. We established the entire go-to-market content strategy for their first batch:"
                        bullets={[
                            "Built the launch narrative and high-converting landing page",
                            "Created a full content kit across email and social media",
                            "Generated 1,400 email subscribers pre-launch with a 38% open rate",
                            "Sold out the entire first batch of 500 units in just 11 days"
                        ]}
                        gameThematicTieIn="Clear the board. That's exactly what we did for this launch."
                        gameComponent={<PacManGame onWin={() => handleWin(2)} onLose={() => handleLose(2)} />}
                        isUnlocked={!!unlockedCards[2]}
                        hasLost={!!lostCards[2]}
                    />
                </div>

                {/* Final CTA Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center pt-12 border-gradient-t"
                >
                    <p className="text-gray-400 mb-8 text-lg font-light">
                        Ready to install this system in your business?
                    </p>
                    <Button
                        className="bg-[#CCFF00] text-black hover:bg-white hover:text-black px-12 py-6 text-lg rounded-[4px] font-[900] uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all duration-300 transform hover:scale-105 border-transparent"
                        onClick={() => window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz', '_blank')}
                    >
                        START THE ENGINE
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
