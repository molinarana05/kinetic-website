"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { cn } from "@/lib/utils";

export const NavbarDesktop = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 hidden md:block",
                scrolled ? "bg-black/90 backdrop-blur-md border-b border-[#CCFF00]" : "bg-transparent"
            )}
        >
            <div
                className="relative max-w-6xl mx-auto flex items-center justify-between"
            >
                <Link href="/" className="h-8 md:h-10 lg:h-12 relative flex items-center z-[100]">
                    {/* Using the uploaded logo */}
                    <img src="/logo.png?v=new" alt="Moxie Digital - B2B Content Marketing and Founder-Led Growth Agency Logo" className="object-contain h-full w-auto" />
                </Link>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
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
                    className="block"
                >
                    <TypewriterEffect text="BOOK A CALL" delay={2000} speed={20} cursor={false} />
                </Button>
            </div>
        </nav>
    );
};
