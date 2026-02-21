"use client";
import { useEffect, useRef } from "react";

interface MatrixLogStreamProps {
    side?: "left" | "right";
}

export const MatrixLogStream = ({ side = "right" }: MatrixLogStreamProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 60;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const fontSize = 10;
        const columns = width / fontSize;
        const drops: number[] = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";

        const draw = () => {
            // Use destination-out to fade existing pixels to transparency
            // This ensures the canvas remains transparent, showing the CSS background perfectly
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "source-over";

            ctx.fillStyle = "#CCFF00";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const handleResize = () => {
            height = window.innerHeight;
            canvas.height = height;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={`fixed top-0 bottom-0 z-[30] pointer-events-none w-[60px] hidden lg:block ${side === "left" ? "left-0" : "right-0"}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full opacity-40"
            />
        </div>
    );
};
