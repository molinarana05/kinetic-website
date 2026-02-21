"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterEffectProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    cursor?: boolean;
    onComplete?: () => void;
}

export const TypewriterEffect = ({
    text,
    delay = 0,
    speed = 50,
    className,
    cursor = true,
    onComplete
}: TypewriterEffectProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2px] h-[1em] bg-[#CCFF00] ml-1 align-middle"
                />
            )}
        </span>
    );
};
