import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameProps } from './CoinFlipGame';

const COLS = 15;
const ROWS = 13;
const TICK_RATE = 200;

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const INITIAL_LAYOUT = [
    "WWWWWWWWWWWWWWW",
    "W.   .   .   .W",
    "W WWWW   WWWW W",
    "W.           .W",
    "W WWWW W WWWW W",
    "W      W      W",
    "W.WW W G W WW.W",
    "W    W   W    W",
    "W.WW W G W WW.W",
    "W             W",
    "W.  WW W WW  .W",
    "W.     P     .W",
    "WWWWWWWWWWWWWWW",
];

const parseMap = () => {
    const walls: Point[] = [];
    const dots: Point[] = [];
    let initialPacman: Point = { x: 7, y: 11 };
    const initialGhosts: Point[] = [];

    INITIAL_LAYOUT.forEach((rowStr, y) => {
        for (let x = 0; x < rowStr.length; x++) {
            const ch = rowStr[x];
            if (ch === 'W') walls.push({ x, y });
            if (ch === '.') dots.push({ x, y });
            if (ch === 'P') initialPacman = { x, y };
            if (ch === 'G') initialGhosts.push({ x, y });
        }
    });
    return { walls, dots, initialPacman, initialGhosts };
};

const mapData = parseMap();

export const PacManGame: React.FC<GameProps> = ({ onWin, onLose }) => {
    const [status, setStatus] = useState<'IDLE' | 'PLAYING' | 'WIN' | 'LOSE'>('IDLE');
    const [, setTick] = useState(0);

    const gameState = useRef({
        pacman: mapData.initialPacman,
        ghosts: mapData.initialGhosts,
        dots: mapData.dots,
        direction: 'UP' as Direction,
        nextDirection: 'UP' as Direction,
        tickCount: 0
    });

    const startGame = () => {
        gameState.current = {
            pacman: { ...mapData.initialPacman },
            ghosts: mapData.initialGhosts.map(g => ({ ...g })),
            dots: mapData.dots.map(d => ({ ...d })),
            direction: 'UP',
            nextDirection: 'UP',
            tickCount: 0
        };
        setStatus('PLAYING');
    };

    const handleGameOver = useCallback((isWin: boolean) => {
        setStatus(isWin ? 'WIN' : 'LOSE');
        if (isWin) {
            onWin();
        } else {
            onLose();
        }
    }, [onWin, onLose]);

    // Input handling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (status !== 'PLAYING') return;
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    gameState.current.nextDirection = 'UP'; e.preventDefault(); break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    gameState.current.nextDirection = 'DOWN'; e.preventDefault(); break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    gameState.current.nextDirection = 'LEFT'; e.preventDefault(); break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    gameState.current.nextDirection = 'RIGHT'; e.preventDefault(); break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [status]);

    const isWall = (x: number, y: number) => {
        return mapData.walls.some(w => w.x === x && w.y === y);
    };

    // Unified Game loop
    useEffect(() => {
        if (status !== 'PLAYING') return;

        const interval = setInterval(() => {
            const state = gameState.current;
            state.tickCount++;

            // --- Pacman Movement ---
            let newDir = state.nextDirection;
            let nx = state.pacman.x;
            let ny = state.pacman.y;

            if (newDir === 'UP') ny -= 1;
            if (newDir === 'DOWN') ny += 1;
            if (newDir === 'LEFT') nx -= 1;
            if (newDir === 'RIGHT') nx += 1;

            if (isWall(nx, ny)) {
                newDir = state.direction;
                nx = state.pacman.x;
                ny = state.pacman.y;
                if (newDir === 'UP') ny -= 1;
                if (newDir === 'DOWN') ny += 1;
                if (newDir === 'LEFT') nx -= 1;
                if (newDir === 'RIGHT') nx += 1;

                if (!isWall(nx, ny)) {
                    state.direction = newDir;
                    state.pacman = { x: nx, y: ny };
                }
            } else {
                state.direction = newDir;
                state.pacman = { x: nx, y: ny };
            }

            // --- Dot Collection ---
            const dotIdx = state.dots.findIndex(d => d.x === state.pacman.x && d.y === state.pacman.y);
            if (dotIdx !== -1) {
                state.dots.splice(dotIdx, 1);
                if (state.dots.length === 0) {
                    handleGameOver(true);
                    clearInterval(interval);
                    return;
                }
            }

            // --- Ghost Movement (Even Ticks) & Collisions ---
            if (state.tickCount % 2 === 0) {
                state.ghosts = state.ghosts.map(g => {
                    const adjacent = [
                        { x: g.x, y: g.y - 1 },
                        { x: g.x, y: g.y + 1 },
                        { x: g.x - 1, y: g.y },
                        { x: g.x + 1, y: g.y },
                    ].filter(p => !isWall(p.x, p.y));

                    if (adjacent.length === 0) return g;
                    return adjacent[Math.floor(Math.random() * adjacent.length)];
                });
            }

            // Collision check (Pacman <-> Ghost)
            if (state.ghosts.some(g => g.x === state.pacman.x && g.y === state.pacman.y)) {
                handleGameOver(false);
                clearInterval(interval);
                return;
            }

            setTick(t => t + 1); // Trigger render

        }, TICK_RATE);

        return () => clearInterval(interval);
    }, [status, handleGameOver]);

    const { pacman, ghosts, dots } = gameState.current;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex justify-between w-full max-w-[240px] mb-2 text-xs font-bold font-mono text-[#CCFF00]">
                <span>SCORE: {mapData.dots.length - dots.length}/{mapData.dots.length}</span>
            </div>

            <div
                className="bg-black relative"
                style={{
                    width: '240px',
                    height: `${(240 / COLS) * ROWS}px`,
                }}
            >
                {/* Dots */}
                {status !== 'IDLE' && dots.map((dot, i) => (
                    <div
                        key={`dot-${i}`}
                        className="absolute bg-white/50 rounded-full"
                        style={{
                            width: `${(100 / COLS) * 0.3}%`,
                            height: `${(100 / ROWS) * 0.3}%`,
                            left: `${(dot.x / COLS) * 100 + (100 / COLS) * 0.35}%`,
                            top: `${(dot.y / ROWS) * 100 + (100 / ROWS) * 0.35}%`,
                        }}
                    />
                ))}

                {/* Walls */}
                {status !== 'IDLE' && mapData.walls.map((wall, i) => (
                    <div
                        key={`wall-${i}`}
                        className="absolute bg-[#1A1A1A] border border-[#333]"
                        style={{
                            width: `${100 / COLS}%`,
                            height: `${100 / ROWS}%`,
                            left: `${(wall.x / COLS) * 100}%`,
                            top: `${(wall.y / ROWS) * 100}%`,
                        }}
                    />
                ))}

                {/* Pacman */}
                {status !== 'IDLE' && (
                    <div
                        className="absolute bg-[#CCFF00] rounded-full z-10"
                        style={{
                            width: `${(100 / COLS) * 0.8}%`,
                            height: `${(100 / ROWS) * 0.8}%`,
                            left: `${(pacman.x / COLS) * 100 + (100 / COLS) * 0.1}%`,
                            top: `${(pacman.y / ROWS) * 100 + (100 / ROWS) * 0.1}%`,
                            transition: 'left 0.2s linear, top 0.2s linear'
                        }}
                    />
                )}

                {/* Ghosts */}
                {status !== 'IDLE' && ghosts.map((ghost, i) => (
                    <div
                        key={`ghost-${i}`}
                        className="absolute bg-purple-500 rounded-t-full rounded-b-sm z-10"
                        style={{
                            width: `${(100 / COLS) * 0.8}%`,
                            height: `${(100 / ROWS) * 0.8}%`,
                            left: `${(ghost.x / COLS) * 100 + (100 / COLS) * 0.1}%`,
                            top: `${(ghost.y / ROWS) * 100 + (100 / ROWS) * 0.1}%`,
                            transition: 'left 0.4s linear, top 0.4s linear'
                        }}
                    />
                ))}

                {/* Overlays */}
                {(status === 'IDLE' || status === 'LOSE') && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-30 pointer-events-auto">
                        {status === 'LOSE' && <p className="text-red-500 font-bold mb-3 tracking-widest text-sm">GAME OVER</p>}
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); startGame(); }}
                            className="bg-[#CCFF00] text-black px-4 py-2 font-bold uppercase tracking-widest text-xs rounded hover:bg-white transition-colors relative z-50 pointer-events-auto cursor-pointer"
                        >
                            {status === 'LOSE' ? 'TRY AGAIN' : 'START GAME'}
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Controls */}
            {status === 'PLAYING' && (
                <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-[240px] md:hidden">
                    <div />
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => gameState.current.nextDirection = 'UP'}
                    >↑</button>
                    <div />
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => gameState.current.nextDirection = 'LEFT'}
                    >←</button>
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => gameState.current.nextDirection = 'DOWN'}
                    >↓</button>
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => gameState.current.nextDirection = 'RIGHT'}
                    >→</button>
                </div>
            )}
        </div>
    );
};
