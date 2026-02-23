"use client";
import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const postTypes = [
    { id: "story", label: "📖 Personal Story", desc: "A lesson from your own experience" },
    { id: "contrarian", label: "🔥 Contrarian Take", desc: "Push back on conventional wisdom" },
    { id: "tactical", label: "🛠️ Tactical Tip", desc: "A specific, actionable framework" },
    { id: "hotTake", label: "⚡ Hot Take", desc: "A bold, polarizing opinion" },
    { id: "question", label: "❓ Provocative Question", desc: "Make your ICP think or debate" },
];

const hookTemplates: Record<string, (industry: string, topic: string) => string[]> = {
    story: (ind, top) => [
        `I made a mistake in ${ind} that cost us [X]. Here's what I'd do differently:`,
        `3 years ago, I knew nothing about ${top}. Here's the one thing that changed everything:`,
        `Nobody told me this when I started in ${ind}. I had to learn it the hard way:`,
        `I tried every advice on ${top}. Most of it was wrong. Here's what actually worked:`,
        `We almost [failed/quit/pivoted] because of ${top}. Here's how close it really was:`,
    ],
    contrarian: (ind, top) => [
        `The ${ind} industry has been lying to you about ${top}. Here's the truth:`,
        `Hot take: ${top} is massively overrated in ${ind}. Here's what actually moves the needle:`,
        `Everyone in ${ind} says to do [X] about ${top}. They're wrong. Here's why:`,
        `Unpopular opinion: the conventional advice on ${top} is actively hurting ${ind} founders.`,
        `I've studied ${ind} for [N] years. The most common ${top} advice is completely backwards.`,
    ],
    tactical: (ind, top) => [
        `The exact ${top} framework I use in ${ind} that takes 20 minutes and saves hours:`,
        `5 things every ${ind} founder gets wrong about ${top} (and how to fix them):`,
        `Here's the 3-step process I use for ${top} in ${ind}. Steal it:`,
        `${top} in ${ind} doesn't have to be complicated. My system, step by step:`,
        `The ${top} playbook I wish existed when I started in ${ind}:`,
    ],
    hotTake: (ind, top) => [
        `${top} is the most overused term in ${ind}. Fight me.`,
        `If you're not doing ${top} in ${ind} by 2026, you're already behind. This is why:`,
        `The ${ind} founders winning right now all have one thing in common: they've cracked ${top}.`,
        `${top} is not a growth tactic. It's a survival requirement for ${ind} in 2026.`,
        `Most ${ind} companies spend 10x more on ads than on ${top}. That's exactly why they lose.`,
    ],
    question: (ind, top) => [
        `What's the most counterintuitive thing you've learned about ${top} in ${ind}?`,
        `If you could undo one decision about ${top} in your ${ind} career, what would it be?`,
        `What would ${ind} look like if everyone finally got ${top} right?`,
        `Is ${top} actually important in ${ind}, or is it just an excuse to avoid the hard work?`,
        `What does 'doing ${top} right' actually look like in ${ind}? Most people can't answer this.`,
    ],
};

export default function LinkedInHookGenerator() {
    const [industry, setIndustry] = useState("");
    const [topic, setTopic] = useState("");
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [pendingHooks, setPendingHooks] = useState<string[]>([]);
    const [hooks, setHooks] = useState<string[]>([]);
    const [showGate, setShowGate] = useState(false);
    const [copied, setCopied] = useState<number | null>(null);

    const generate = () => {
        if (!industry || !topic || !selectedType) return;
        setPendingHooks(hookTemplates[selectedType](industry, topic));
        setShowGate(true);
    };

    const copyHook = (hook: string, idx: number) => {
        navigator.clipboard.writeText(hook);
        setCopied(idx);
        setTimeout(() => setCopied(null), 2000);
    };

    const canGenerate = industry.trim() && topic.trim() && selectedType;

    return (
        <main className="min-h-screen bg-[#0d0b0b] text-white">
            {showGate && (
                <EmailGate
                    toolName="LinkedIn Hook Generator"
                    resultSummary={`5 LinkedIn hooks for: ${topic} (${industry})`}
                    resultPayload={{ industry, topic, postType: selectedType, hooks: pendingHooks }}
                    onUnlock={() => { setHooks(pendingHooks); setShowGate(false); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Link href="/tools" className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono mb-4 inline-block hover:text-white transition-colors">← All Tools</Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">LinkedIn Hook<br />Generator</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">The first line is the only line that matters. Generate 5 scroll-stopping openers in seconds.</p>
                </div>

                <div className="space-y-6">
                    <div className="border border-white/10 rounded-2xl p-6 bg-black/30 space-y-5">
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-2 block">Your Industry</label>
                            <input
                                type="text" value={industry} onChange={e => setIndustry(e.target.value)}
                                placeholder="e.g. B2B SaaS, VC, Fintech, HR Tech..."
                                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#CCFF00] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-2 block">Topic / Insight</label>
                            <input
                                type="text" value={topic} onChange={e => setTopic(e.target.value)}
                                placeholder="e.g. founder-led content, cold outbound, pricing strategy..."
                                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#CCFF00] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-3 block">Post Type</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {postTypes.map(pt => (
                                    <button key={pt.id} onClick={() => setSelectedType(pt.id)}
                                        className={`text-left px-4 py-3 rounded-xl border transition-all ${selectedType === pt.id ? "border-[#CCFF00] bg-[#CCFF00]/10 text-white" : "border-white/10 text-gray-400 hover:border-white/30"}`}>
                                        <div className="font-bold text-sm">{pt.label}</div>
                                        <div className="text-xs text-gray-500">{pt.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button onClick={generate} disabled={!canGenerate}
                        className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all ${canGenerate ? "bg-[#CCFF00] text-black hover:bg-white" : "bg-white/10 text-gray-600 cursor-not-allowed"}`}>
                        Generate 5 Hooks →
                    </button>

                    {hooks.length > 0 && (
                        <div className="space-y-3">
                            <h2 className="text-lg font-black uppercase tracking-widest text-white">Your Hooks</h2>
                            <p className="text-gray-500 text-xs">Replace the bracketed [placeholders] with your specifics. Click any hook to copy.</p>
                            {hooks.map((hook, i) => (
                                <button key={i} onClick={() => copyHook(hook, i)}
                                    className="w-full text-left border border-white/10 hover:border-[#CCFF00]/50 rounded-xl p-5 bg-black/30 transition-all group">
                                    <div className="flex items-start justify-between gap-4">
                                        <p className="text-white text-sm leading-relaxed">{hook}</p>
                                        <span className={`shrink-0 text-xs font-bold uppercase tracking-widest mt-1 transition-colors ${copied === i ? "text-[#CCFF00]" : "text-gray-600 group-hover:text-gray-400"}`}>
                                            {copied === i ? "✓ Copied" : "Copy"}
                                        </span>
                                    </div>
                                </button>
                            ))}
                            <button onClick={generate} className="w-full border border-white/20 text-gray-400 py-3 rounded-xl text-sm hover:border-white/50 transition-all">
                                Regenerate
                            </button>
                        </div>
                    )}

                    <div className="bg-black/40 border border-[#CCFF00]/30 p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Need someone to build the full post?</h3>
                        <p className="text-gray-400 mb-6 text-sm">Moxie Digital turns your raw ideas into a full month of platform-native content that actually converts.</p>
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-all">Book a Free Call</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
