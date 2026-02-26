import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameProps } from './CoinFlipGame';

const GRID_SIZE = 12;
const TICK_RATE = 200;
const INITIAL_TIME = 15;
const WIN_SCORE = 3;

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export const SnakeGame: React.FC<GameProps> = ({ onWin, onLose }) => {
    const [status, setStatus] = useState<'IDLE' | 'PLAYING' | 'WIN' | 'LOSE'>('IDLE');
    const [, setTick] = useState(0);

    const gameState = useRef({
        snake: [{ x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 }],
        food: { x: 3, y: 3 },
        direction: 'UP' as Direction,
        nextDirection: 'UP' as Direction,
        score: 0,
        timeLeft: INITIAL_TIME
    });

    const spawnFood = useCallback((currentSnake: Point[]) => {
        let newX, newY;
        while (true) {
            newX = Math.floor(Math.random() * GRID_SIZE);
            newY = Math.floor(Math.random() * GRID_SIZE);
            if (!currentSnake.some(seg => seg.x === newX && seg.y === newY)) {
                return { x: newX, y: newY };
            }
        }
    }, []);

    const startGame = () => {
        gameState.current = {
            snake: [{ x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 }],
            food: spawnFood([{ x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 }]),
            direction: 'UP',
            nextDirection: 'UP',
            score: 0,
            timeLeft: INITIAL_TIME
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
                    if (gameState.current.direction !== 'DOWN') gameState.current.nextDirection = 'UP';
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (gameState.current.direction !== 'UP') gameState.current.nextDirection = 'DOWN';
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (gameState.current.direction !== 'RIGHT') gameState.current.nextDirection = 'LEFT';
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (gameState.current.direction !== 'LEFT') gameState.current.nextDirection = 'RIGHT';
                    e.preventDefault();
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [status]);

    // Unified Game and Timer loop
    useEffect(() => {
        if (status !== 'PLAYING') return;

        let tickCounter = 0;

        const interval = setInterval(() => {
            tickCounter++;
            const state = gameState.current;

            // Timer (every 5 ticks of 200ms = 1s)
            if (tickCounter % (1000 / TICK_RATE) === 0) {
                state.timeLeft -= 1;
                if (state.timeLeft <= 0) {
                    handleGameOver(state.score >= WIN_SCORE);
                    clearInterval(interval);
                    return;
                }
            }

            // Snake Movement
            const head = state.snake[0];
            const newHead = { ...head };

            // Resolve direction
            let resolvedNext = state.nextDirection;
            const currentDir = state.direction;
            if (currentDir === 'UP' && resolvedNext === 'DOWN') resolvedNext = 'UP';
            if (currentDir === 'DOWN' && resolvedNext === 'UP') resolvedNext = 'DOWN';
            if (currentDir === 'LEFT' && resolvedNext === 'RIGHT') resolvedNext = 'LEFT';
            if (currentDir === 'RIGHT' && resolvedNext === 'LEFT') resolvedNext = 'RIGHT';

            state.direction = resolvedNext;

            if (resolvedNext === 'UP') newHead.y -= 1;
            if (resolvedNext === 'DOWN') newHead.y += 1;
            if (resolvedNext === 'LEFT') newHead.x -= 1;
            if (resolvedNext === 'RIGHT') newHead.x += 1;

            // Wall collision
            if (
                newHead.x < 0 || newHead.x >= GRID_SIZE ||
                newHead.y < 0 || newHead.y >= GRID_SIZE
            ) {
                handleGameOver(false);
                clearInterval(interval);
                return;
            }

            // Self collision
            if (state.snake.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
                handleGameOver(false);
                clearInterval(interval);
                return;
            }

            const newSnake = [newHead, ...state.snake];

            // Eat food
            if (newHead.x === state.food.x && newHead.y === state.food.y) {
                state.score += 1;
                if (state.score >= WIN_SCORE) {
                    handleGameOver(true);
                    clearInterval(interval);
                    return;
                } else {
                    state.food = spawnFood(newSnake);
                }
            } else {
                newSnake.pop();
            }

            state.snake = newSnake;
            setTick(t => t + 1); // Trigger render
        }, TICK_RATE);

        return () => clearInterval(interval);
    }, [status, handleGameOver, spawnFood]);

    const { snake, food, direction, score, timeLeft } = gameState.current;

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex justify-between w-full max-w-[240px] mb-2 text-xs font-bold font-mono text-[#CCFF00]">
                <span>SCORE: {score}/{WIN_SCORE}</span>
                <span>TIME: {timeLeft}s</span>
            </div>

            <div
                className="bg-black border-2 border-white/10 relative"
                style={{
                    width: '240px',
                    height: '240px',
                }}
            >
                {/* Food */}
                {status !== 'IDLE' && (
                    <div
                        className="absolute bg-[#CCFF00] rounded-sm"
                        style={{
                            width: `${100 / GRID_SIZE}%`,
                            height: `${100 / GRID_SIZE}%`,
                            left: `${(food.x / GRID_SIZE) * 100}%`,
                            top: `${(food.y / GRID_SIZE) * 100}%`,
                        }}
                    />
                )}

                {/* Snake */}
                {status !== 'IDLE' && snake.map((seg, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-sm"
                        style={{
                            width: `${100 / GRID_SIZE}%`,
                            height: `${100 / GRID_SIZE}%`,
                            left: `${(seg.x / GRID_SIZE) * 100}%`,
                            top: `${(seg.y / GRID_SIZE) * 100}%`,
                            opacity: i === 0 ? 1 : 0.8,
                            transform: 'scale(0.6)', // Creates the "dotted" gap effect
                        }}
                    />
                ))}

                {/* Overlays */}
                {status === 'IDLE' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-30 pointer-events-auto">
                        <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); startGame(); }}
                            className="bg-[#CCFF00] text-black px-4 py-2 font-bold uppercase tracking-widest text-xs rounded hover:bg-white transition-colors relative z-50 pointer-events-auto cursor-pointer"
                        >
                            START GAME
                        </button>
                    </div>
                )}
            </div>

            {/* On-Screen Controls */}
            {status === 'PLAYING' && (
                <div className="mt-4 grid grid-cols-3 gap-2 w-full max-w-[240px]">
                    <div />
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => { if (gameState.current.direction !== 'DOWN') gameState.current.nextDirection = 'UP'; }}
                    >↑</button>
                    <div />
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => { if (gameState.current.direction !== 'RIGHT') gameState.current.nextDirection = 'LEFT'; }}
                    >←</button>
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => { if (gameState.current.direction !== 'UP') gameState.current.nextDirection = 'DOWN'; }}
                    >↓</button>
                    <button
                        className="bg-white/10 p-3 rounded flex items-center justify-center active:bg-[#CCFF00] active:text-black transition-colors"
                        onClick={() => { if (gameState.current.direction !== 'LEFT') gameState.current.nextDirection = 'RIGHT'; }}
                    >→</button>
                </div>
            )}
        </div>
    );
};
