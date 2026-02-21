"use client";

import { useEffect, useRef } from "react";

interface Dot {
    x: number;
    y: number;
    baseSize: number;
    phase: number;
    speed: number;
}

export const InteractiveGridDesktop = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const dotsRef = useRef<Dot[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Grid configuration
        const gap = 30; // Spacing between dots
        const influenceRadius = 200; // Increased radius for clearer fade effect (was 150)
        const sideStreamWidth = 120; // Width of the MatrixLogStreams to avoid

        const initDots = () => {
            dotsRef.current = [];
            for (let x = 0; x < width; x += gap) {
                // Skip dots that would fall behind the left or right MatrixLogStreams
                // if (x < sideStreamWidth || x > width - sideStreamWidth) {
                //    continue;
                // }
                // Restore full grid for desktop if legacy code had full grid?
                // The git show output had the sideStreamWidth logic. I will keep it.
                if (x < sideStreamWidth || x > width - sideStreamWidth) {
                    continue;
                }

                for (let y = 0; y < height; y += gap) {
                    dotsRef.current.push({
                        x,
                        y,
                        baseSize: 1.5,
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.0005 + Math.random() * 0.0015
                    });
                }
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initDots();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        let animationFrameId: number;

        const draw = (time: number) => {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#CCFF00"; // Lime Green (Neon)

            dotsRef.current.forEach(dot => {
                // Twinkle Calculation
                const twinkle = Math.sin(time * dot.speed + dot.phase);

                // Opacity Range: Ultra Subtle for background texture
                // Base opacity between 0.03 and 0.13
                const opacity = 0.03 + (twinkle + 1) * 0.05;

                // Proximity Calculation (Fade Out)
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let finalAlpha = opacity;

                if (distance < influenceRadius) {
                    const normalizedDist = distance / influenceRadius;
                    // Linear fade: 0 at mouse center, full opacity at radius edge
                    // Squaring normalizedDist makes the "hole" feel steeper/clearer
                    finalAlpha = opacity * (normalizedDist * normalizedDist);
                }

                ctx.globalAlpha = finalAlpha;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.baseSize, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1.0;
            animationFrameId = requestAnimationFrame(draw);
        };

        animationFrameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none hidden md:block"
            style={{ width: "100%", height: "100%" }}
        />
    );
};
