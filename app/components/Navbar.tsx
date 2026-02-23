"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "bg-black/90 backdrop-blur-md border-b border-[#CCFF00]" : "bg-transparent"
            )}
        >
            <div
                className="relative container mx-auto px-6 md:px-16 h-24 flex items-center justify-between"
            >
                <div className="max-w-6xl w-full flex items-center justify-between">
                    <Link href="/" className="relative h-10 md:h-12 lg:h-14 z-50 flex items-center justify-start">
                        {/* Using the uploaded logo */}
                        <img src="/logo.png?v=new" alt="Moxie Digital - B2B Content Marketing and Founder-Led Growth Agency Logo" className="object-contain object-left h-full w-auto" />
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
                        {[{ name: "Services", href: "/services" }, { name: "Early Wins", href: "/#early-wins" }, { name: "Insights", href: "/blog" }, { name: "Tools", href: "/tools" }, { name: "About", href: "/about" }, { name: "FAQ", href: "/#faq" }].map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider py-1"
                            >
                                <TypewriterEffect
                                    text={item.name}
                                    delay={1000 + (index * 200)}
                                    speed={30}
                                    cursor={false}
                                />
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <Button
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="hidden md:block"
                    >
                        <TypewriterEffect text="BOOK A CALL" delay={2000} speed={20} cursor={false} />
                    </Button>

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 text-[#CCFF00] p-2"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>

                    {/* MOBILE OVERLAY */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
                            >
                                {[{ name: "Services", href: "/services" }, { name: "Early Wins", href: "/#early-wins" }, { name: "Insights", href: "/blog" }, { name: "Tools", href: "/tools" }, { name: "About", href: "/about" }, { name: "FAQ", href: "/#faq" }].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-[900] text-white uppercase tracking-tight hover:text-[#CCFF00] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="text-[#CCFF00] text-xl font-bold uppercase tracking-widest mt-8 border border-[#CCFF00] px-8 py-4 rounded hover:bg-[#CCFF00] hover:text-black transition-all"
                                >
                                    BOOK A CALL
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};
