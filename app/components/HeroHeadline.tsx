"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroHeadline = () => {
    // States: 
    // 0: Initial wait
    // 1: Typing generic text
    // 2: Pause before destruction
    // 3: Highlighting/Selecting generic text
    // 4: Typing sharp line 1 (AI + HUMAN)
    // 5: Typing sharp line 2 (CONTENT AT)
    // 6: Typing sharp line 3 (BUSINESS SPEED)
    // 7: Complete
    const [step, setStep] = useState(0);

    const genericText = "GENERIC B2B CONTENT AGENCY";
    const [genericDisplay, setGenericDisplay] = useState("");
    const [selectedAmount, setSelectedAmount] = useState(0); // For highlight effect

    const sharp1 = "AI + HUMAN";
    const sharp2 = "CONTENT AT";
    const sharp3 = "BUSINESS SPEED";

    const [sharp1Display, setSharp1Display] = useState("");
    const [sharp2Display, setSharp2Display] = useState("");
    const [sharp3Display, setSharp3Display] = useState("");

    // Timings
    const typeSpeed = 40;
    const deleteSpeed = 20;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (step === 0) {
            timeout = setTimeout(() => setStep(1), 500);
        } else if (step === 1) {
            if (genericDisplay.length < genericText.length) {
                timeout = setTimeout(() => {
                    setGenericDisplay(genericText.substring(0, genericDisplay.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(2), 1200); // Pause
            }
        } else if (step === 2) {
            setStep(3); // Start deleting
        } else if (step === 3) {
            // Highlighting effect: we simulate selection by wrapping the end in a background color
            if (selectedAmount < genericText.length) {
                timeout = setTimeout(() => {
                    setSelectedAmount(s => s + 1);
                }, deleteSpeed);
            } else {
                // Once fully selected, blink once then clear and move to step 4
                timeout = setTimeout(() => {
                    setGenericDisplay(""); // Delete it all
                    setSelectedAmount(0);
                    setStep(4);
                }, 400);
            }
        } else if (step === 4) {
            if (sharp1Display.length < sharp1.length) {
                timeout = setTimeout(() => {
                    setSharp1Display(sharp1.substring(0, sharp1Display.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(5), 200);
            }
        } else if (step === 5) {
            if (sharp2Display.length < sharp2.length) {
                timeout = setTimeout(() => {
                    setSharp2Display(sharp2.substring(0, sharp2Display.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setStep(6), 200);
            }
        } else if (step === 6) {
            if (sharp3Display.length < sharp3.length) {
                timeout = setTimeout(() => {
                    setSharp3Display(sharp3.substring(0, sharp3Display.length + 1));
                }, typeSpeed);
            } else {
                setStep(7); // Done
            }
        }

        return () => clearTimeout(timeout);
    }, [step, genericDisplay, selectedAmount, sharp1Display, sharp2Display, sharp3Display]);

    return (
        <h1 className="text-[9.5vw] md:text-8xl lg:text-[90px] font-black tracking-tighter mb-6 md:mb-8 leading-[1.1] md:leading-none uppercase">
            {step < 4 ? (
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
                <div className="flex flex-col gap-0 items-start">
                    {/* Line 1 */}
                    <div className="flex items-center gap-2 md:gap-3 leading-tight">
                        <span className="text-[#CCFF00]">{sharp1Display}</span>
                        {step === 4 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-2 align-middle"
                            />
                        )}
                    </div>
                    {/* Line 2 */}
                    <div className="flex items-center leading-tight">
                        <span className="text-white">{sharp2Display}</span>
                        {step === 5 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-2 align-middle"
                            />
                        )}
                    </div>
                    {/* Line 3 */}
                    <div className="flex items-center leading-tight">
                        <span className="text-white">{sharp3Display}</span>
                        {step >= 6 && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: step === 7 ? 0 : 1 }}
                                transition={{ duration: 0.4, repeat: step === 7 ? 0 : Infinity, repeatType: "reverse" }}
                                className="inline-block w-[3px] md:w-[8px] h-[0.8em] bg-[#CCFF00] ml-1 md:ml-2 align-middle"
                            />
                        )}
                    </div>
                </div>
            )}
        </h1>
    );
};
