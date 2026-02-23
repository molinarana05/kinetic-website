import Link from "next/link";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free B2B Marketing Tools | Moxie Digital",
    description: "Free tools for B2B founders: LinkedIn profile grader, founder brand score, hook generator, content idea bank, and content agency readiness quiz.",
    alternates: { canonical: "https://www.moxie-digital.com/tools" },
};

const tools = [
    {
        slug: "linkedin-profile-grader",
        emoji: "📊",
        title: "LinkedIn Profile Grader",
        description: "10 questions. Get your profile score out of 100 with a breakdown of exactly what's costing you leads.",
        badge: "Most Popular",
        time: "3 min",
    },
    {
        slug: "founder-brand-score",
        emoji: "⚡",
        title: "Founder Brand Score",
        description: "8 questions. Find out if your personal brand is an engine or a LinkedIn profile collecting dust.",
        badge: null,
        time: "4 min",
    },
    {
        slug: "linkedin-hook-generator",
        emoji: "🎣",
        title: "LinkedIn Hook Generator",
        description: "Enter your industry and topic — get 5 scroll-stopping first lines instantly, ready to copy.",
        badge: "Instant",
        time: "1 min",
    },
    {
        slug: "content-idea-generator",
        emoji: "📅",
        title: "B2B Content Idea Generator",
        description: "Tell us your ICP — get a full 30-idea content calendar with angles, formats, and hooks.",
        badge: null,
        time: "2 min",
    },
    {
        slug: "content-agency-quiz",
        emoji: "🔍",
        title: "Content Agency Readiness Quiz",
        description: "6 honest questions. Get a straight verdict on whether a content system will work for you right now.",
        badge: null,
        time: "3 min",
    },
    {
        slug: "founder-roi-calculator",
        emoji: "💰",
        title: "Founder Content ROI Calculator",
        description: "Compare your current paid ads spend vs. a founder-led content system — in real dollar terms.",
        badge: null,
        time: "2 min",
    },
];

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest">Free Tools</span>
                    <h1 className="text-5xl md:text-7xl font-black mt-3 mb-6 tracking-tighter">
                        The B2B Founder<br />Toolkit
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Six free tools built for B2B founders who want more pipeline from content — without the guesswork. No email required.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tools.map((tool) => (
                        <Link key={tool.slug} href={`/tools/${tool.slug}`}
                            className="group border border-white/10 hover:border-[#CCFF00]/50 rounded-2xl p-7 bg-black/20 hover:bg-black/40 transition-all flex flex-col">
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl">{tool.emoji}</span>
                                {tool.badge && (
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 px-2 py-0.5 rounded-full">
                                        {tool.badge}
                                    </span>
                                )}
                            </div>
                            <h2 className="text-lg font-black text-white mb-2 group-hover:text-[#CCFF00] transition-colors">
                                {tool.title}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed flex-1">{tool.description}</p>
                            <div className="flex items-center justify-between mt-5 pt-4 border-gradient-t">
                                <span className="text-xs text-gray-600 font-mono">{tool.time}</span>
                                <span className="text-xs uppercase tracking-widest font-bold text-[#CCFF00] group-hover:translate-x-1 transition-transform">
                                    Open →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 text-center border-gradient-t pt-16">
                    <p className="text-gray-500 text-sm mb-6">Built by Moxie Digital. These tools are completely free — forever.</p>
                    <Link href="/" className="text-[#CCFF00] hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                        ← Back to Moxie Digital
                    </Link>
                </div>
            </div>
        </main>
    );
}
