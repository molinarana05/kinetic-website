"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Using a simplified type intersection to avoid "onAbort" conflicts between Button and Anchor types
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    href?: string;
    target?: string;
    rel?: string;
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & { href?: string }>(
    ({ className, variant = "primary", href, ...props }, ref) => {
        const localRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
        // Use external ref if provided, otherwise local
        const targetRef = (ref || localRef) as React.MutableRefObject<HTMLButtonElement | HTMLAnchorElement>;

        const [position, setPosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
            const handleMouseMove = (e: MouseEvent) => {
                if (!targetRef.current) return;

                const { clientX, clientY } = e;
                const rect = targetRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = clientX - centerX;
                const distanceY = clientY - centerY;

                // User Request: Snap within 30px with high-frequency vibration
                const maxDistance = 150; // Capture range (larger than snap range to start pulling)
                const snapRange = 30; // The "urgent" zone

                if (Math.abs(distanceX) < maxDistance && Math.abs(distanceY) < maxDistance) {
                    // Calculate pull
                    let moveX = distanceX * 0.2;
                    let moveY = distanceY * 0.2;

                    // Add vibration if within the tight snap range
                    if (Math.abs(distanceX) < snapRange && Math.abs(distanceY) < snapRange) {
                        // High frequency vibration (jitter)
                        moveX += (Math.random() - 0.5) * 10;
                        moveY += (Math.random() - 0.5) * 10;
                    }

                    setPosition({ x: moveX, y: moveY });
                } else {
                    setPosition({ x: 0, y: 0 });
                }
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, []);

        // Spring physics for smooth snap
        const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };

        const styles = cn(
            "px-8 py-4 rounded-[2px] font-[900] tracking-[1px] text-sm uppercase transition-colors duration-300 inline-block text-center relative z-10",
            variant === "primary"
                ? "bg-[#CCFF00] text-black hover:bg-white hover:text-black shadow-[0_0_20px_rgba(204,255,0,0.5)] hover:shadow-[0_0_30px_rgba(204,255,0,0.8)]"
                : "bg-transparent border border-[#CCFF00] text-[#CCFF00] hover:bg-[#CCFF00]/10",
            className
        );

        const MotionComponent = href ? motion.a : motion.button;

        return (
            <MotionComponent
                ref={targetRef as any}
                href={href}
                className={styles}
                {...(props as any)}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", ...springConfig }}
            >
                {props.children}
            </MotionComponent>
        );
    }
);
Button.displayName = "Button";

export { Button };
