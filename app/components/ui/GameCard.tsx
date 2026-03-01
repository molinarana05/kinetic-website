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
                        <Lock size={16} className="text-[#CCFF00] drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                        <span className="text-[12px] md:text-sm uppercase font-black text-[#CCFF00] tracking-widest drop-shadow-[0_0_8px_rgba(204,255,0,0.8)]">
                            PLAY TO UNLOCK
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[250px] relative z-30">
                        {gameComponent}
                    </div>

                    <div className="text-center mt-4 h-10 flex items-end justify-center pointer-events-none px-2">
                        <p className="text-sm md:text-base text-gray-300 font-medium italic drop-shadow-md">{gameThematicTieIn}</p>
                    </div>
                </Card>

                {/* Back (Revealed Content) */}
                <Card
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    className={`absolute inset-0 group p-6 border-[#CCFF00]/30 shadow-[0_0_30px_rgba(204,255,0,0.15)] bg-black/80 backdrop-blur-sm flex flex-col overflow-y-auto h-full transition-opacity duration-300 ${isUnlocked ? 'z-20 pointer-events-auto opacity-100' : 'z-10 pointer-events-none opacity-0'}`}
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

                    {/* Tag badge */}
                    <div className="mb-4 pointer-events-none flex-shrink-0">
                        <span className="text-[9px] font-bold text-black uppercase tracking-widest border border-[#CCFF00] bg-[#CCFF00] px-2 py-1 rounded shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                            {tag}
                        </span>
                    </div>

                    {/* Fixed-height headline zone — same across all cards */}
                    <div className="h-24 flex-shrink-0 pointer-events-none flex items-start">
                        <div className="text-3xl font-black text-white leading-tight uppercase tracking-tighter flex flex-wrap">
                            {headlinePrefix}
                            {headline}
                            {headlineSuffix}
                        </div>
                    </div>

                    {/* Fixed-height context zone — same across all cards */}
                    <div className="h-24 flex-shrink-0 pointer-events-none overflow-hidden">
                        <p className="text-[13px] md:text-sm text-gray-400 italic font-light border-l border-[#CCFF00]/50 pl-3">
                            {context}
                        </p>
                    </div>

                    {/* Bullets — always start at the same vertical position */}
                    <ul className="space-y-3 pointer-events-none mt-2">
                        {bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start text-gray-300 text-sm md:text-base">
                                <span className="flex-shrink-0 h-1.5 w-1.5 bg-[#CCFF00] rounded-full mt-[7px] mr-3" />
                                {bullet}
                            </li>
                        ))}
                    </ul>

                </Card>

            </motion.div>
        </motion.div>
    );
};
