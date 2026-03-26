"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import {
    Search, FileText, Repeat2, Mail, Linkedin, Bot, Zap, Globe,
    BarChart2, MapPin, Wrench, BookOpen, ChevronDown, ArrowRight, Newspaper
} from "lucide-react";

const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

// ─── MENU DATA ───────────────────────────────────────────────────────────────

const menuData = {
    Services: {
        sections: [
            {
                label: "Core Services",
                items: [
                    { icon: <Search size={15} />, label: "B2B SEO Agency India", href: "/services/b2b-seo", desc: "Search intent that converts enterprise buyers" },
                    { icon: <FileText size={15} />, label: "Content Marketing India", href: "/services/content-marketing-india", desc: "Authority-first content, never volume-first" },
                    { icon: <Linkedin size={15} />, label: "LinkedIn Ghostwriting", href: "/services/linkedin-ghostwriting", desc: "Founder voice that earns pipeline, not likes" },
                    { icon: <Repeat2 size={15} />, label: "Content Repurposing", href: "/services/content-repurposing", desc: "1 hour of your time → 30+ strategic assets" },
                    { icon: <Mail size={15} />, label: "Email Marketing", href: "/services/email-marketing", desc: "Thesis-driven newsletters that open and convert" },
                    { icon: <Bot size={15} />, label: "AI Agents for Marketing", href: "/services/ai-agents", desc: "Autonomous content ops at startup speed" },
                ],
            },
            {
                label: "Optimization",
                items: [
                    { icon: <Zap size={15} />, label: "AEO — Answer Engines", href: "/services/aeo", desc: "Rank inside AI answers, not just Google" },
                    { icon: <Globe size={15} />, label: "GEO — Generative Engines", href: "/services/geo", desc: "Optimized for ChatGPT, Perplexity & Gemini" },
                    { icon: <Linkedin size={15} />, label: "LinkedIn Branding", href: "/services/linkedin-branding", desc: "Build a visually premium founder presence" },
                    { icon: <BarChart2 size={15} />, label: "B2B Content Strategy", href: "/services/b2b", desc: "Full-funnel authority strategy for SaaS" },
                    { icon: <Newspaper size={15} />, label: "Newsletter Strategy", href: "/services/newsletters", desc: "Opinionated newsletters your buyers read" },
                ],
            },
            {
                label: "By City",
                items: [
                    { icon: <MapPin size={15} />, label: "Bangalore", href: "/services/content-marketing-bangalore", desc: "For Bangalore SaaS & deep tech founders" },
                    { icon: <MapPin size={15} />, label: "Mumbai", href: "/services/content-marketing-mumbai", desc: "Enterprise & fintech B2B marketing" },
                    { icon: <MapPin size={15} />, label: "Delhi / NCR", href: "/services/content-marketing-delhi", desc: "Scale-up marketing for Gurgaon & Noida" },
                    { icon: <MapPin size={15} />, label: "Hyderabad", href: "/services/content-marketing-hyderabad", desc: "GCC & deep-tech content strategy" },
                ],
            },
        ],
        featured: {
            label: "Start Here",
            title: "Free Strategy Audit",
            desc: "45-min call. We audit your current content and show you exactly where pipeline is leaking.",
            cta: "Book Your Audit",
            href: calendarUrl,
            external: true,
        }
    },

    Insights: {
        sections: [
            {
                label: "Latest Op-Eds",
                items: [
                    { icon: <BookOpen size={15} />, label: "How to Choose a B2B Agency", href: "/blog/how-to-choose-b2b-marketing-agency", desc: "The founder's ultimate filter" },
                    { icon: <BookOpen size={15} />, label: "LinkedIn for B2B Founders", href: "/blog/b2b-founder-linkedin-content-guide", desc: "Why likes don't equal revenue" },
                    { icon: <BookOpen size={15} />, label: "Content Repurposing ROI", href: "/blog/content-repurposing-roi", desc: "The math behind scaling with less" },
                    { icon: <BookOpen size={15} />, label: "AI in B2B Marketing", href: "/blog/ai-agent-marketing", desc: "Why AI is losing you enterprise deals" },
                    { icon: <BookOpen size={15} />, label: "B2B Newsletter Strategy", href: "/blog/b2b-newsletter-strategy", desc: "Stop sending updates. Send opinions." },
                    { icon: <BookOpen size={15} />, label: "Zero-Click Search Strategy", href: "/blog/zero-click-search-strategy", desc: "Win when no one clicks anymore" },
                ],
            },
            {
                label: "City & Niche Guides",
                items: [
                    { icon: <MapPin size={15} />, label: "B2B SEO Agency India", href: "/blog/b2b-seo-agency-india", desc: "Full India market breakdown" },
                    { icon: <MapPin size={15} />, label: "Content Marketing India", href: "/blog/content-marketing-agency-india", desc: "Why generic agencies fail" },
                    { icon: <MapPin size={15} />, label: "Bangalore Agency Guide", href: "/blog/content-marketing-agency-bangalore", desc: "SaaS-specific pitfalls" },
                    { icon: <MapPin size={15} />, label: "Mumbai Agency Guide", href: "/blog/content-marketing-agency-mumbai", desc: "Enterprise marketing playbook" },
                    { icon: <MapPin size={15} />, label: "Delhi/NCR Agency Guide", href: "/blog/content-marketing-agency-delhi", desc: "Volume vs pipeline analysis" },
                    { icon: <MapPin size={15} />, label: "Hyderabad Agency Guide", href: "/blog/content-marketing-agency-hyderabad", desc: "GCC & deep-tech content" },
                ],
            },
        ],
        featured: {
            label: "Browse All",
            title: "The Moxie Journal",
            desc: "Deep-dive op-eds on B2B marketing, founder branding, and building authority in India's enterprise market.",
            cta: "Read All Articles",
            href: "/blog",
            external: false,
        }
    },

    Tools: {
        sections: [
            {
                label: "Free Tools",
                items: [
                    { icon: <Zap size={15} />, label: "LinkedIn Hook Generator", href: "/tools/linkedin-hook-generator", desc: "Generate hooks that stop the scroll" },
                    { icon: <BarChart2 size={15} />, label: "Founder Brand Score", href: "/tools/founder-brand-score", desc: "Grade your LinkedIn authority in 60 seconds" },
                    { icon: <Search size={15} />, label: "LinkedIn Profile Grader", href: "/tools/linkedin-profile-grader", desc: "Identify gaps killing your inbound" },
                    { icon: <FileText size={15} />, label: "Content Idea Generator", href: "/tools/content-idea-generator", desc: "ICP-targeted content ideas instantly" },
                    { icon: <Wrench size={15} />, label: "Content Agency Quiz", href: "/tools/content-agency-quiz", desc: "Find out which agency model fits you" },
                    { icon: <BarChart2 size={15} />, label: "Founder ROI Calculator", href: "/tools/founder-roi-calculator", desc: "See the exact ROI of founder-led content" },
                ],
            },
        ],
        featured: {
            label: "Most Used",
            title: "LinkedIn Hook Generator",
            desc: "The most-used free tool in our suite. Generate scroll-stopping hooks calibrated for B2B buyers.",
            cta: "Try It Free →",
            href: "/tools/linkedin-hook-generator",
            external: false,
        }
    },
};

type MenuKey = keyof typeof menuData;
const menuKeys = Object.keys(menuData) as MenuKey[];

// ─── DROPDOWN PANEL ──────────────────────────────────────────────────────────

function MegaMenuPanel({ menuKey }: { menuKey: MenuKey }) {
    const data = menuData[menuKey];
    const { featured } = data;
    const sections = "sections" in data ? data.sections : [];

    return (
        <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] z-[300] overflow-hidden"
            style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.9))' }}>
            {/* Arrow pointer */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#161616] border-l border-t border-white/10 rotate-45" />
            <div className="mt-1.5 bg-[#161616]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-[1fr_230px]">
                    {/* Left: Sections */}
                    <div className={cn("p-5 grid gap-5", sections.length === 1 ? "grid-cols-1" : sections.length === 2 ? "grid-cols-2" : "grid-cols-3")}>
                        {sections.map((section) => (
                            <div key={section.label}>
                                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#CCFF00]/50 mb-2.5 px-2 border-b border-white/5 pb-1.5">{section.label}</p>
                                <ul className="space-y-px">
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href}
                                                className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#CCFF00]/8 transition-all duration-150 border border-transparent hover:border-[#CCFF00]/15">
                                                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-md bg-white/5 group-hover:bg-[#CCFF00]/15 text-gray-500 group-hover:text-[#CCFF00] transition-all duration-150">{item.icon}</span>
                                                <div className="min-w-0">
                                                    <p className="text-[12.5px] font-semibold text-gray-300 group-hover:text-white transition-colors leading-tight truncate">{item.label}</p>
                                                    <p className="text-[10.5px] text-gray-600 group-hover:text-gray-400 transition-colors leading-tight mt-0.5 truncate">{item.desc}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    {/* Right: Featured card */}
                    <div className="bg-gradient-to-br from-[#CCFF00]/8 via-[#CCFF00]/4 to-transparent border-l border-white/5 p-5 flex flex-col justify-between">
                        <div>
                            <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-[#CCFF00] bg-[#CCFF00]/10 border border-[#CCFF00]/20 px-2 py-0.5 rounded-full mb-3">{featured.label}</span>
                            <p className="text-[14px] font-black text-white uppercase tracking-tight leading-tight mb-2">{featured.title}</p>
                            <p className="text-[11px] text-gray-400 leading-relaxed">{featured.desc}</p>
                        </div>
                        {featured.external ? (
                            <a href={featured.href} target="_blank" rel="noopener noreferrer"
                                className="mt-5 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-3 rounded-lg hover:bg-white hover:scale-[1.02] transition-all duration-150 shadow-[0_4px_20px_rgba(204,255,0,0.2)]">
                                {featured.cta} <ArrowRight size={11} />
                            </a>
                        ) : (
                            <Link href={featured.href}
                                className="mt-5 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-3 rounded-lg hover:bg-white hover:scale-[1.02] transition-all duration-150 shadow-[0_4px_20px_rgba(204,255,0,0.2)]">
                                {featured.cta} <ArrowRight size={11} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────

export const NavbarDesktop = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openMenu = (key: MenuKey) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setActiveMenu(key);
    };

    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
    };

    const cancelClose = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
    };

    const simpleLinks = [
        { name: "Early Wins", href: "/#early-wins" },
        { name: "About", href: "/about" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 hidden md:block",
            scrolled ? "bg-black/90 backdrop-blur-md border-b border-[#CCFF00]/20" : "bg-transparent"
        )}>
            <div className="relative max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="h-10 md:h-14 lg:h-20 relative flex items-center z-10">
                    <img src="/logo.png?v=new" alt="Moxie Digital Logo" className="object-contain h-full w-auto" />
                </Link>

                {/* Nav Items */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
                    {/* Mega menu items */}
                    {menuKeys.map((key) => (
                        <div key={key} className="relative"
                            onMouseEnter={() => openMenu(key)}
                            onMouseLeave={scheduleClose}>
                            <button
                                className={cn(
                                    "group flex items-center gap-1 text-sm font-medium uppercase tracking-wider py-1 transition-colors relative",
                                    activeMenu === key ? "text-[#CCFF00]" : "text-gray-400 hover:text-white"
                                )}>
                                {key}
                                <ChevronDown size={12} className={cn("transition-transform duration-200", activeMenu === key ? "rotate-180 text-[#CCFF00]" : "")} />
                                <span className={cn("absolute bottom-0 left-0 h-[1px] bg-[#CCFF00] transition-all duration-300", activeMenu === key ? "w-full" : "w-0 group-hover:w-full")} />
                            </button>

                            {activeMenu === key && (
                                <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
                                    <MegaMenuPanel menuKey={key} />
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Simple links */}
                    {simpleLinks.map((item) => (
                        <Link key={item.name} href={item.href}
                            className="group relative text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider py-1 whitespace-nowrap">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <Button
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="block">
                    BOOK A CALL
                </Button>
            </div>
        </nav>
    );
};
