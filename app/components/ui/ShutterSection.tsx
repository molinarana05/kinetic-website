"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ShutterSectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const ShutterSection = ({ children, className, id }: ShutterSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    // We want a hard, mechanical wipe from right to left (or left to right)
    // clip-path: inset(0 100% 0 0) -> inset(0 0 0 0)
    // Mapping scroll 0->1 to percentage 100->0

    // However, user requested: "as I scroll, the new section should be 'unveiled' by a horizontal line that moves across the screen"

    const clipPathVal = useTransform(scrollYProgress, [0, 1], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

    // Adding a subtle "shutter line" effect - a border that moves with the wipe?
    // That might be complex to sync perfectly with clip-path without layout thrashing.
    // Let's stick to the high-performance clip-path first.

    return (
        <section ref={ref} id={id} className={`relative ${className}`}>
            <motion.div
                style={{ clipPath: clipPathVal }}
                className="relative z-10 w-full h-full will-change-[clip-path]"
            >
                {children}
            </motion.div>

            {/* Optional: The "Line" itself could be a separate absolute element 
                tracking the same progress if we really want to sell the "scanner" look.
            */}
        </section>
    );
};
