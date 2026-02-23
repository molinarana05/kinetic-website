"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroHeadline = () => {
    // States: 
    // 0: Initial wait
    // 1: Typing generic text
    // 2: Pause before destruction
    // 3: Highlighting/Selecting generic text
    // 4: Backspacing highlighted text
    // 5: Typing sharp line 1 part 1 (Label: AI + HUMAN)
    // 6: Typing sharp line 1 part 2 ( CONTENT AT)
    // 7: Typing sharp line 2 (BUSINESS SPEED)
    // 8: Final pause before looping back to 0
    const [step, setStep] = useState(0);

    const genericText = "GENERIC B2B CONTENT AGENCY";
    const [genericDisplay, setGenericDisplay] = useState("");
    const [selectedAmount, setSelectedAmount] = useState(0);

    const sharpLabel = "AI + HUMAN";
    const sharp1Rest = " CONTENT AT";
    const sharp2 = "BUSINESS SPEED";

    const [labelDisplay, setLabelDisplay] = useState("");
    const [restDisplay, setRestDisplay] = useState("");
    const [sharp2Display, setSharp2Display] = useState("");

    // Timings
    const typeSpeed = 40;
    const deleteSpeed = 20; // Backspace speed
    const highlightSpeed = 15; // Selection speed

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (step === 0) {
            // Reset state for looping
            setGenericDisplay("");
            setSelectedAmount(0);
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
                timeout = setTimeout(() => setStep(2), 2000); // Wait longer before destruction!
            }
        } else if (step === 2) {
            setStep(3); // Start selecting
        } else if (step === 3) {
            // Highlighting effect
            if (selectedAmount < genericText.length) {
                timeout = setTimeout(() => {
                    setSelectedAmount(s => s + 1);
                }, highlightSpeed);
            } else {
                // Wait briefly, then start backspacing
                timeout = setTimeout(() => setStep(4), 300);
            }
        } else if (step === 4) {
            // Backspace delete
            if (genericDisplay.length > 0) {
                timeout = setTimeout(() => {
                    setGenericDisplay(prev => prev.substring(0, prev.length - 1));
                    setSelectedAmount(prev => Math.max(0, prev - 1)); // Shrink selection as we delete
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
    }, [step, genericDisplay, selectedAmount, labelDisplay, restDisplay, sharp2Display]);

    return (
        <h1 className="text-[9.5vw] md:text-8xl lg:text-[85px] xl:text-[90px] font-black tracking-tighter mb-6 lg:mb-8 leading-[1.1] md:leading-tight uppercase min-h-[3.3em] md:min-h-[2.2em]">
            {step < 5 ? (
                <div className="flex items-center text-white min-h-[3.3em] md:min-h-0">
                    {/* Render generic text with selection highlight */}
                    {selectedAmount > 0 ? (
                        <span className="leading-tight break-words">
                            {genericDisplay.substring(0, genericDisplay.length - selectedAmount)}
                            <span className="bg-[#CCFF00] text-black">
                                {genericDisplay.substring(genericDisplay.length - selectedAmount)}
                            </span>
                        </span>
                    ) : (
                        <span className="leading-tight break-words">{genericDisplay}</span>
                    )}
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

                    {/* Line 2: BUSINESS SPEED */}
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
