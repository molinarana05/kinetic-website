"use client";
import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const painPoints = [
    "Generating qualified inbound leads", "Standing out in a crowded market", "Shortening the sales cycle",
    "Justifying marketing spend / ROI", "Building trust with enterprise buyers", "Differentiating from cheaper competitors",
    "Hiring / attracting top talent", "Retaining customers and reducing churn", "Scaling without a big marketing team", "Creating content consistently",
];

const formats = ["LinkedIn post", "Short-form video script", "Newsletter section", "Twitter/X thread", "Blog article intro", "Podcast talking point"];

type Idea = { week: number; day: string; angle: string; format: string; hook: string };

function generateIdeas(icp: string, industry: string, pains: string[]): Idea[] {
    const slots = [
        { day: "Mon", angle: "Thought Leadership" }, { day: "Wed", angle: "Proof / Case Study" }, { day: "Fri", angle: "How-To / Tactical" },
        { day: "Mon", angle: "Contrarian Take" }, { day: "Thu", angle: "Behind the Scenes" }, { day: "Mon", angle: "Industry Observation" },
        { day: "Wed", angle: "Client Story" }, { day: "Fri", angle: "Hot Take" }, { day: "Tue", angle: "Myth-Busting" },
        { day: "Thu", angle: "Personal Story" }, { day: "Mon", angle: "Data / Stat" }, { day: "Wed", angle: "Framework / System" },
        { day: "Fri", angle: "Q&A / Community" }, { day: "Mon", angle: "Prediction" }, { day: "Thu", angle: "Lessons Learned" },
        { day: "Mon", angle: "Thought Leadership" }, { day: "Wed", angle: "Proof" }, { day: "Fri", angle: "Contrarian Take" },
        { day: "Tue", angle: "Tutorial" }, { day: "Thu", angle: "List / Roundup" }, { day: "Mon", angle: "Opinion Piece" },
        { day: "Wed", angle: "Story" }, { day: "Fri", angle: "Tactical Tip" }, { day: "Mon", angle: "Industry News Take" },
        { day: "Thu", angle: "Results / Wins" }, { day: "Mon", angle: "Myth vs Reality" }, { day: "Wed", angle: "Process Reveal" },
        { day: "Fri", angle: "Challenge" }, { day: "Tue", angle: "Recommendation" }, { day: "Thu", angle: "Reflection / Ask" },
    ];

    const hooks = [
        `What every ${icp} gets wrong about ${pains[0] || "growth"}`,
        `The ${industry} playbook nobody talks about`,
        `I spent a year testing ${pains[1] || "content"} with ${icp}s. Here's what works:`,
        `Hot take: ${industry} handles ${pains[0] || "pipeline"} all wrong`,
        `Here's what the best ${icp}s do differently`,
        `The real reason ${icp}s struggle with ${pains[1] || "scaling"}`,
        `We tried everything. This was the only thing that fixed ${pains[0] || "inbound"}.`,
        `3 ${industry} truths the consultants won't tell you`,
        `What I'd tell a new ${icp} on day one`,
        `The ${industry} myth costing you deals`,
        `Every ${icp} I've talked to this year has the same problem`,
        `The ${industry} misconception that kills pipeline`,
        `This is what actually moves the needle for ${icp}s`,
        `${pains[2] || "Revenue growth"} is solved. Here's what ${icp}s ignore:`,
        `I used to think ${pains[0] || "brand"} didn't matter in ${industry}. I was wrong.`,
        `The ${industry} tactic that changed everything`,
        `A framework for ${pains[0] || "growth"} any ${icp} can steal`,
        `Unpopular opinion: ${industry} doesn't need more leads. It needs better ones.`,
        `What a ${icp}'s calendar reveals about their priorities`,
        `The conversation every ${icp} should be having but isn't`,
        `${industry} in 2026 is a different game. Here's how to play it:`,
        `Why "more content" isn't the answer for ${icp}s`,
        `The ${industry} problem that looks like a ${pains[0] || "marketing"} problem`,
        `If you're a ${icp} and you're not doing [X], read this.`,
        `The ${pains[1] || "growth"} advice that actually works vs. what sounds smart`,
        `An honest answer to the question every ${icp} is afraid to ask`,
        `Quietly, the best ${icp}s in ${industry} all do this one thing`,
        `${industry} contrarian: ${pains[2] || "what drives results"} is not the real lever`,
        `My honest take on ${pains[0] || "content"} after years in ${industry}`,
        `The question that separates ${icp}s who win from those who grind`,
    ];

    return slots.map((t, i) => ({
        week: Math.floor(i / 7) + 1,
        day: t.day, angle: t.angle,
        format: formats[i % formats.length],
        hook: hooks[i],
    }));
}

export default function ContentIdeaGenerator() {
    const [icp, setIcp] = useState("");
    const [industry, setIndustry] = useState("");
    const [selectedPains, setSelectedPains] = useState<string[]>([]);
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [pendingIdeas, setPendingIdeas] = useState<Idea[]>([]);
    const [showGate, setShowGate] = useState(false);
    const [copied, setCopied] = useState(false);

    const togglePain = (p: string) => setSelectedPains(prev =>
        prev.includes(p) ? prev.filter(x => x !== p) : prev.length < 3 ? [...prev, p] : prev
    );
    const generate = () => {
        if (!canGenerate) return;
        setPendingIdeas(generateIdeas(icp, industry, selectedPains));
        setShowGate(true);
    };
    const copyAll = () => {
        navigator.clipboard.writeText(ideas.map(i => `Week ${i.week} • ${i.day} [${i.angle}]\nFormat: ${i.format}\nHook: ${i.hook}`).join("\n\n"));
        setCopied(true); setTimeout(() => setCopied(false), 2000);
    };
    const canGenerate = icp.trim() && industry.trim() && selectedPains.length > 0;
    const weeks = [1, 2, 3, 4];

    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            {showGate && (
                <EmailGate
                    toolName="B2B Content Idea Generator"
                    resultSummary={`30 content ideas for ${icp}s in ${industry}`}
                    resultPayload={{ icp, industry, painPoints: selectedPains }}
                    onUnlock={() => { setIdeas(pendingIdeas); setShowGate(false); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Link href="/tools" className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono mb-4 inline-block hover:text-white transition-colors">← All Tools</Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">B2B Content<br />Idea Generator</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">30 targeted content ideas — with hooks, angles, and formats — in 10 seconds.</p>
                </div>
                <div className="space-y-6">
                    <div className="border border-white/10 rounded-2xl p-6 bg-black/30 space-y-5">
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-2 block">Your ICP's Job Title</label>
                            <input type="text" value={icp} onChange={e => setIcp(e.target.value)} placeholder="e.g. VP of Marketing, Series A Founder..."
                                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#CCFF00] transition-colors" />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-2 block">Your Industry</label>
                            <input type="text" value={industry} onChange={e => setIndustry(e.target.value)} placeholder="e.g. B2B SaaS, Fintech, HR Tech..."
                                className="w-full bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#CCFF00] transition-colors" />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-1 block">Your ICP's Top Pain Points</label>
                            <p className="text-gray-600 text-xs mb-3">Select up to 3</p>
                            <div className="flex flex-wrap gap-2">
                                {painPoints.map(p => (
                                    <button key={p} onClick={() => togglePain(p)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${selectedPains.includes(p) ? "border-[#CCFF00] bg-[#CCFF00]/10 text-[#CCFF00]" : "border-white/20 text-gray-500 hover:border-white/40"} ${selectedPains.length >= 3 && !selectedPains.includes(p) ? "opacity-30 cursor-not-allowed" : ""}`}>
                                        {p}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button onClick={generate} disabled={!canGenerate}
                        className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-lg transition-all ${canGenerate ? "bg-[#CCFF00] text-black hover:bg-white" : "bg-white/10 text-gray-600 cursor-not-allowed"}`}>
                        Generate 30 Content Ideas →
                    </button>
                    {ideas.length > 0 && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-black uppercase tracking-widest">Your 30-Idea Calendar</h2>
                                <button onClick={copyAll} className={`text-xs uppercase tracking-widest font-bold transition-colors ${copied ? "text-[#CCFF00]" : "text-gray-500 hover:text-white"}`}>{copied ? "✓ Copied" : "Copy All"}</button>
                            </div>
                            {weeks.map(w => {
                                const wIdeas = ideas.filter(i => i.week === w);
                                return wIdeas.length > 0 && (
                                    <div key={w}>
                                        <h3 className="text-sm font-black uppercase tracking-widest text-[#CCFF00] mb-3">Week {w}</h3>
                                        <div className="space-y-2">
                                            {wIdeas.map((idea, i) => (
                                                <div key={i} className="border border-white/10 rounded-xl p-4 bg-black/30">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-xs font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-0.5 rounded">{idea.day}</span>
                                                        <span className="text-xs uppercase tracking-widest text-gray-500">{idea.angle}</span>
                                                        <span className="text-xs text-gray-600 ml-auto">{idea.format}</span>
                                                    </div>
                                                    <p className="text-white text-sm">{idea.hook}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <div className="bg-black/40 border border-[#CCFF00]/30 p-8 rounded-2xl text-center">
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Need someone to write these for you?</h3>
                        <p className="text-gray-400 mb-6 text-sm">Moxie Digital turns your calendar into a live content engine — written in your voice, optimized for pipeline.</p>
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-all">Book a Free Call</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
