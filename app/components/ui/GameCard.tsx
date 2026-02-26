import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card } from './Card';
import { Lock } from 'lucide-react';
import { NumberCounter } from './NumberCounter';

interface GameCardProps {
    tag: string;
    headline: string;
    headlinePrefix?: React.ReactNode;
    headlineSuffix?: React.ReactNode;
    context: string;
    bullets: string[];
    gameComponent: React.ReactNode;
    gameThematicTieIn: string;
    isUnlocked: boolean;
    hasLost: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
    tag,
    headline,
    headlinePrefix,
    headlineSuffix,
    context,
    bullets,
    gameComponent,
    gameThematicTieIn,
    isUnlocked,
    hasLost
}) => {
    const controls = useAnimation();

    useEffect(() => {
        if (hasLost) {
            controls.start({
                x: [0, -10, 10, -10, 10, -5, 5, 0],
                transition: { duration: 0.5 }
            });
        }
    }, [hasLost, controls]);

    // Flip animation variants
    const cardVariants = {
        locked: { rotateY: 0 },
        unlocked: { rotateY: 180, transition: { duration: 0.6, type: 'spring', stiffness: 60 } }
    };

    return (
        <motion.div animate={controls} style={{ perspective: 1000 }} className="h-full">
            <motion.div
                variants={cardVariants}
                initial="locked"
                animate={isUnlocked ? "unlocked" : "locked"}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full h-full"
            >
                {/* Front (Game View) */}
                <Card
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}
                    className={`absolute inset-0 group p-8 border-white/5 bg-black/40 backdrop-blur-sm flex flex-col overflow-hidden h-full transition-opacity duration-300 ${!isUnlocked ? 'z-20 pointer-events-auto opacity-100' : 'z-10 pointer-events-none opacity-0'}`}
                >
                    <div className="flex items-center justify-center gap-2 mb-2 pointer-events-none">
                        <Lock size={14} className="text-[#CCFF00]" />
                        <span className="text-[10px] uppercase font-bold text-[#CCFF00] tracking-widest">
                            PLAY TO UNLOCK
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[250px] relative z-30">
                        {gameComponent}
                    </div>

                    <div className="text-center mt-4 h-10 flex items-end justify-center pointer-events-none">
                        <p className="text-xs text-gray-400 font-light italic">{gameThematicTieIn}</p>
                    </div>
                </Card>

                {/* Back (Revealed Content) */}
                <Card
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    className={`absolute inset-0 group p-8 border-[#CCFF00]/30 shadow-[0_0_30px_rgba(204,255,0,0.15)] bg-black/80 backdrop-blur-sm flex flex-col overflow-hidden h-full transition-opacity duration-300 ${isUnlocked ? 'z-20 pointer-events-auto opacity-100' : 'z-10 pointer-events-none opacity-0'}`}
                >
                    {/* Unlocked Flash */}
                    {isUnlocked && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 bg-[#CCFF00]/20 pointer-events-none"
                        />
                    )}

                    <div className="mb-6 pointer-events-none">
                        <span className="text-[9px] font-bold text-black uppercase tracking-widest border border-[#CCFF00] bg-[#CCFF00] px-2 py-1 rounded shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                            {tag}
                        </span>
                    </div>

                    <div className="text-3xl font-black text-white mb-4 leading-none pr-12 min-h-[3rem] items-center uppercase tracking-tighter flex pointer-events-none">
                        {headlinePrefix}
                        {headline}
                        {headlineSuffix}
                    </div>

                    <p className="text-[13px] md:text-sm text-gray-400 italic mb-6 font-light border-l border-[#CCFF00]/50 pl-3 pointer-events-none">
                        {context}
                    </p>

                    <ul className="space-y-4 mb-10 flex-grow pointer-events-none">
                        {bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start text-gray-300 text-sm md:text-base">
                                <span className="min-w-[5px] h-1.5 w-1.5 bg-[#CCFF00] rounded-full mt-2 mr-3" />
                                {bullet}
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 border-gradient-t mt-auto flex justify-end">
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-medium text-gray-600 flex items-center gap-2 group-hover:text-gray-400 transition-colors pointer-events-auto cursor-pointer">
                            <span className="text-[#CCFF00] group-hover:text-white underline decoration-[#CCFF00]/30 underline-offset-4 transition-all duration-300">
                                Details shared on call →
                            </span>
                        </a>
                    </div>
                </Card>

            </motion.div>
        </motion.div>
    );
};
