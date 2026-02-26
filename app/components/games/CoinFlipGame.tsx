import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface GameProps {
    onWin: () => void;
    onLose: () => void;
}

export const CoinFlipGame: React.FC<GameProps> = ({ onWin, onLose }) => {
    const [flipping, setFlipping] = useState(false);
    const [result, setResult] = useState<'HEADS' | 'TAILS' | null>(null);
    const [showResultMsg, setShowResultMsg] = useState(false);

    const handleFlip = (choice: 'HEADS' | 'TAILS') => {
        if (flipping) return;
        setFlipping(true);
        setShowResultMsg(false);

        // Always land on TAILS as a secret Easter egg cheat
        const flipResult = 'TAILS';

        // CSS flip ends around 1.5s
        setTimeout(() => {
            setFlipping(false);
            setResult(flipResult);
            setShowResultMsg(true);

            setTimeout(() => {
                if (flipResult === choice) {
                    onWin();
                } else {
                    onLose();
                    // Reset slightly after lose shake
                    setTimeout(() => {
                        setResult(null);
                        setShowResultMsg(false);
                    }, 500);
                }
            }, 500); // give time to read result before trigger
        }, 1500);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center p-4">
            <div className="relative w-24 h-24 mb-6 perspective-1000">
                <motion.div
                    animate={
                        flipping
                            ? { rotateY: [0, 1800], transition: { duration: 1.5, ease: "easeInOut" } }
                            : { rotateY: result === 'TAILS' ? 180 : 0 }
                    }
                    className="w-full h-full relative"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-[#CCFF00] rounded-full flex items-center justify-center text-center px-1 border-4 border-black font-black text-black tracking-widest text-[11px] leading-tight"
                        style={{ backfaceVisibility: 'hidden' }}>
                        FLIP<br />COIN
                    </div>
                    {/* TAILS */}
                    <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center border-4 border-[#CCFF00] text-[#CCFF00] font-black tracking-widest text-sm"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        TAILS
                    </div>
                </motion.div>
            </div>

            <div className="flex gap-4 w-full">
                <button
                    onClick={() => handleFlip('HEADS')}
                    disabled={flipping}
                    className="flex-1 bg-black border border-[#CCFF00]/50 hover:border-[#CCFF00] text-[#CCFF00] py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
                >
                    HEADS
                </button>
                <button
                    onClick={() => handleFlip('TAILS')}
                    disabled={flipping}
                    className="flex-1 bg-black border border-[#CCFF00]/50 hover:border-[#CCFF00] text-[#CCFF00] py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors disabled:opacity-50"
                >
                    TAILS
                </button>
            </div>

            {showResultMsg && !flipping && (
                <div className="text-[#CCFF00] text-sm font-bold mt-4 uppercase tracking-widest">
                    {result === 'HEADS' ? 'HEADS IT IS!' : 'TAILS IT IS!'}
                </div>
            )}
        </div>
    );
};
