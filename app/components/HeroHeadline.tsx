"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroHeadline = () => {
    // States: 
    // 0: Initial wait
    // 1: Typing generic text
    // 2: Pause before destruction
    // 3: Strikethrough generic text
    // 4: Backspacing (delete generic text letter by letter)
    // 5: Typing sharp line 1 part 1 (Label: AI + HUMAN)
    // 6: Typing sharp line 1 part 2 ( CONTENT AT)
    // 7: Typing sharp line 2 (BREAKNECK SPEED)
    // 8: Final pause before looping back to 0
    const [step, setStep] = useState(0);

    const genericText = "GENERIC B2B CONTENT AGENCY";
    const [genericDisplay, setGenericDisplay] = useState("");

    const sharpLabel = "AI + HUMAN";
    const sharp1Rest = " CONTENT AT";
    const sharp2 = "BREAKNECK SPEED";

    const [labelDisplay, setLabelDisplay] = useState("");
    const [restDisplay, setRestDisplay] = useState("");
    const [sharp2Display, setSharp2Display] = useState("");

    // Timings
    const typeSpeed = 40;
    const deleteSpeed = 30; // Letter-by-letter backspace speed
    const pauseBeforeStrike = 1500;
    const pauseAfterStrike = 800;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (step === 0) {
            // Reset state for looping
            setGenericDisplay("");
            setLabelDisplay("");
            setRestDisplay("");
            setSharp2Display("");
            timeout = setTimeout(() => setStep(1), 500);
        } else if (step === 1) {
            if (genericDisplay.length < genericText.length) {
                timeout = setTimeout(() => {
                    setGenericDisplay(genericText.substring(0, genericDisplay.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(2), pauseBeforeStrike);
            }
        } else if (step === 2) {
            // Start Strikethrough
            setStep(3);
        } else if (step === 3) {
            // Hold the strikethrough for a moment before backspacing
            timeout = setTimeout(() => setStep(4), pauseAfterStrike);
        } else if (step === 4) {
            // Backspace delete
            if (genericDisplay.length > 0) {
                timeout = setTimeout(() => {
                    setGenericDisplay(prev => prev.substring(0, prev.length - 1));
                }, deleteSpeed);
            } else {
                timeout = setTimeout(() => setStep(5), 300);
            }
        } else if (step === 5) {
            if (labelDisplay.length < sharpLabel.length) {
                timeout = setTimeout(() => {
                    setLabelDisplay(sharpLabel.substring(0, labelDisplay.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(6), 150);
            }
        } else if (step === 6) {
            if (restDisplay.length < sharp1Rest.length) {
                timeout = setTimeout(() => {
                    setRestDisplay(sharp1Rest.substring(0, restDisplay.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(7), 200);
            }
        } else if (step === 7) {
            if (sharp2Display.length < sharp2.length) {
                timeout = setTimeout(() => {
                    setSharp2Display(sharp2.substring(0, sharp2Display.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(8), 5000); // Hold for 5 seconds
            }
        } else if (step === 8) {
            // Loop! Back to 0
            setStep(0);
        }

        return () => clearTimeout(timeout);
    }, [step, genericDisplay, labelDisplay, restDisplay, sharp2Display]);

    return (
        <h1 className="text-[9.5vw] md:text-8xl lg:text-[85px] xl:text-[90px] font-black tracking-tighter mb-6 lg:mb-8 leading-[1.1] md:leading-tight uppercase min-h-[3.3em] md:min-h-[2.2em]">
            {step < 5 ? (
                <div className="flex items-center text-white min-h-[3.3em] md:min-h-0">
                    <span
                        className={`leading-tight break-words transition-all duration-300 ${step >= 3 ? "line-through decoration-[#CCFF00] decoration-[4px] md:decoration-[8px] opacity-50" : ""}`}
                    >
                        {genericDisplay}
                    </span>
                    {/* Blinking cursor */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-2 align-middle flex-shrink-0"
                    />
                </div>
            ) : (
                <div className="flex flex-col gap-2 md:gap-4 items-start">
                    {/* Line 1: [LABEL] + REST */}
                    <div className="flex items-center gap-2 md:gap-4 flex-wrap leading-tight">
                        {/* The Label */}
                        <span className={`inline-block border-[3px] border-[#CCFF00] ${step >= 5 ? 'bg-[#CCFF00] text-black px-2 md:px-4 py-1 rounded-[4px]' : 'text-transparent border-transparent px-2 md:px-4 py-1'}`}>
                            {labelDisplay}
                            {step === 5 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                    className="inline-block w-[3px] md:w-[6px] h-[0.8em] bg-black ml-1 align-middle"
                                />
                            )}
                        </span>

                        {/* The Rest of Line 1 */}
                        <span className="text-white relative top-1">{restDisplay}</span>
                        {step === 6 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 mt-2 align-middle"
                            />
                        )}
                    </div>

                    {/* Line 2: BREAKNECK SPEED */}
                    <div className="flex items-center leading-tight">
                        <span className="text-white">{sharp2Display}</span>
                        {step >= 7 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: step === 8 ? 0 : 1 }}
                                transition={{ duration: 0.4, repeat: step === 8 ? 0 : Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-3 align-middle"
                            />
                        )}
                    </div>
                </div>
            )}
        </h1>
    );
};
