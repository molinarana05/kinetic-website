"use client";

import { useEffect, useRef } from "react";

export const InteractiveGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const isHoveringTextRef = useRef(false);

    // Store the connections for the spanning tree
    // Horizontal: connections[y][x] = true means (x,y) connects to (x+1,y)
    // Vertical:   connections[x][y] = true means (x,y) connects to (x,y+1)
    const horizontalRef = useRef<boolean[][]>([]);
    const verticalRef = useRef<boolean[][]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const gridSize = 40;
        const influenceRadius = 200;
        const color = "#CCFF00"; // Lime Green

        const initGrid = () => {
            const cols = Math.ceil(width / gridSize) + 1;
            const rows = Math.ceil(height / gridSize) + 1;

            // Reset connections
            horizontalRef.current = Array(rows).fill(null).map(() => Array(cols).fill(false));
            verticalRef.current = Array(cols).fill(null).map(() => Array(rows).fill(false));

            // Generate Spanning Tree (guarantees full connectivity, no loops, no breaks)
            const visited = new Set<string>();
            const stack: { c: number, r: number }[] = [];

            // Start at random point
            const startC = Math.floor(Math.random() * cols);
            const startR = Math.floor(Math.random() * rows);
            stack.push({ c: startC, r: startR });
            visited.add(`${startC},${startR}`);

            while (stack.length > 0) {
                // Bias towards newest for "long winding paths" (Circuit style) vs "branchy"
                // 90% chance to pick newest, 10% random for some branching
                const index = Math.random() > 0.1 ? stack.length - 1 : Math.floor(Math.random() * stack.length);
                const current = stack[index];

                const neighbors = [
                    { c: current.c, r: current.r - 1, dir: 'up' },
                    { c: current.c + 1, r: current.r, dir: 'right' },
                    { c: current.c, r: current.r + 1, dir: 'down' },
                    { c: current.c - 1, r: current.r, dir: 'left' }
                ].filter(n =>
                    n.c >= 0 && n.c < cols &&
                    n.r >= 0 && n.r < rows &&
                    !visited.has(`${n.c},${n.r}`)
                );

                if (neighbors.length > 0) {
                    // Pick random unvisited neighbor
                    const next = neighbors[Math.floor(Math.random() * neighbors.length)];

                    // Mark connection
                    if (next.dir === 'up') verticalRef.current[current.c][next.r] = true;
                    if (next.dir === 'down') verticalRef.current[current.c][current.r] = true;
                    if (next.dir === 'left') horizontalRef.current[current.r][next.c] = true;
                    if (next.dir === 'right') horizontalRef.current[current.r][current.c] = true;

                    visited.add(`${next.c},${next.r}`);
                    stack.push({ c: next.c, r: next.r });
                } else {
                    // Dead end, backtrack
                    stack.splice(index, 1);
                }
            }
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initGrid();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };

            // Smart Text Detection
            const target = e.target as HTMLElement;
            if (target) {
                const tag = target.tagName.toLowerCase();
                const isText =
                    tag === 'p' ||
                    tag === 'h1' ||
                    tag === 'h2' ||
                    tag === 'h3' ||
                    tag === 'span' ||
                    tag === 'a' ||
                    tag === 'button' ||
                    target.closest('.text-content');

                const hasText = target.innerText && target.innerText.trim().length > 0;
                isHoveringTextRef.current = (isText || hasText) && tag !== 'div' && tag !== 'section';
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        let animationFrameId: number;

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Base Style
            ctx.strokeStyle = color;
            ctx.lineCap = "square";

            // Helper to check distance to a segment
            const getDistanceToSegment = (x1: number, y1: number, x2: number, y2: number) => {
                // Vertical or Horizontal only
                if (x1 === x2) { // Vertical
                    if (mouseRef.current.y >= Math.min(y1, y2) && mouseRef.current.y <= Math.max(y1, y2)) {
                        return Math.abs(mouseRef.current.x - x1);
                    }
                } else { // Horizontal
                    if (mouseRef.current.x >= Math.min(x1, x2) && mouseRef.current.x <= Math.max(x1, x2)) {
                        return Math.abs(mouseRef.current.y - y1);
                    }
                }
                // Endpoints
                return Math.min(
                    Math.hypot(mouseRef.current.x - x1, mouseRef.current.y - y1),
                    Math.hypot(mouseRef.current.x - x2, mouseRef.current.y - y2)
                );
            };

            // Draw Horizontal Connections
            horizontalRef.current.forEach((row, r) => {
                const y = r * gridSize;
                row.forEach((isConnected, c) => {
                    if (isConnected) {
                        const x1 = c * gridSize;
                        const x2 = (c + 1) * gridSize;

                        // Safety Zone for Data Streams (70px margins)
                        if (x1 < 70 || x2 > width - 70) return;

                        // Responsive Opacity: Brighter on Mobile (0.25), Subtle on Desktop (0.04)
                        const isMobile = width < 768;
                        let alpha = isMobile ? 0.3 : 0.04;
                        let lineWidth = 0.5;

                        if (!isHoveringTextRef.current) {
                            const dist = getDistanceToSegment(x1, y, x2, y);
                            if (dist < influenceRadius) {
                                const intensity = 1 - (dist / influenceRadius);
                                alpha = 0.03 + (intensity * 0.35);
                                lineWidth = 0.5 + (intensity * 1.5);
                            }
                        }

                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = lineWidth;
                        ctx.beginPath();
                        ctx.moveTo(x1, y);
                        ctx.lineTo(x2, y);
                        ctx.stroke();
                    }
                });
            });

            // Draw Vertical Connections
            verticalRef.current.forEach((col, c) => {
                const x = c * gridSize;

                // Safety Zone for Data Streams (70px margins)
                if (x < 70 || x > width - 70) return;

                col.forEach((isConnected, r) => {
                    if (isConnected) {
                        const y1 = r * gridSize;
                        const y2 = (r + 1) * gridSize;

                        // Responsive Opacity: Brighter on Mobile (0.25), Subtle on Desktop (0.04)
                        const isMobile = width < 768;
                        let alpha = isMobile ? 0.3 : 0.04;
                        let lineWidth = 0.5;

                        if (!isHoveringTextRef.current) {
                            const dist = getDistanceToSegment(x, y1, x, y2);
                            if (dist < influenceRadius) {
                                const intensity = 1 - (dist / influenceRadius);
                                alpha = 0.1 + (intensity * 0.35);
                                lineWidth = 0.5 + (intensity * 1.5);
                            }
                        }

                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = lineWidth;
                        ctx.beginPath();
                        ctx.moveTo(x, y1);
                        ctx.lineTo(x, y2);
                        ctx.stroke();
                    }
                });
            });

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
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ width: "100%", height: "100%" }}
        />
    );
};
