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
                        <p className="text-[3vw] md:text-[18px] font-[900] text-[#CCFF00] uppercase tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap overflow-hidden text-ellipsis">
                            REAL OUTCOMES FROM SYSTEMS WE BUILT.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 mb-20 min-h-[500px]">
                    <GameCard
                        tag="SNAPSHOT"
                        headlinePrefix={<><span className="mr-1">+</span><NumberCounter end={3} duration={1.5} suffix=" QUALIFIED DEMOS" /></>}
                        headline=""
                        context="The founder was posting inconsistently and attracting the wrong audience. We repositioned the offer, rebuilt the ICP messaging, and launched a LinkedIn content system built around proof and pipeline — not vanity metrics. Within 90 days: 14 qualified demos booked, $180K in influenced pipeline, and a content rhythm the founder actually maintains."
                        bullets={["Full details shared on call →"]}
                        gameThematicTieIn="Flip your odds. Just like we flipped this founder's pipeline."
                        gameComponent={<CoinFlipGame onWin={() => handleWin(0)} onLose={() => handleLose(0)} />}
                        isUnlocked={!!unlockedCards[0]}
                        hasLost={!!lostCards[0]}
                    />

                    <GameCard
                        tag="SNAPSHOT"
                        headlinePrefix={<><span className="mr-2">TOP</span><NumberCounter end={3} duration={1.5} suffix=" RANKINGS" /></>}
                        headline=""
                        context="No SEO foundation, no organic presence, competing against established players. We mapped topics and keywords to funnel intent, built content for clarity and skimmability, and structured the site for topical authority. Four months later: 23 keywords on page 1, 67% increase in organic traffic, and 4 inbound leads per month from search — up from zero."
                        bullets={["Full details shared on call →"]}
                        gameThematicTieIn="Navigate the noise. We helped this brand find the path to page 1."
                        gameComponent={<SnakeGame onWin={() => handleWin(1)} onLose={() => handleLose(1)} />}
                        isUnlocked={!!unlockedCards[1]}
                        hasLost={!!lostCards[1]}
                    />

                    <GameCard
                        tag="SNAPSHOT"
                        headline="SOLD OUT LAUNCH"
                        context="No existing audience, no launch playbook. We built the launch narrative, wrote the landing page, created a full content kit for email and social, and built the proof assets to remove purchase hesitation. The result: 1,400 email subscribers pre-launch, a 38% open rate on the launch sequence, and a completely sold-out first batch in 11 days."
                        bullets={["Full details shared on call →"]}
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
