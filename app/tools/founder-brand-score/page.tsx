"use client";
import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const questions = [
    {
        id: "frequency", text: "How often do you post original content on LinkedIn?",
        options: [
            { label: "Daily or more", points: 15 },
            { label: "3–4x per week", points: 12 },
            { label: "1–2x per week", points: 7 },
            { label: "A few times per month", points: 3 },
            { label: "Rarely or never", points: 0 },
        ]
    },
    {
        id: "niche", text: "How clearly defined is the niche you're known for?",
        options: [
            { label: "Crystal clear — people in my ICP immediately know what I do", points: 15 },
            { label: "Fairly clear — most people get it", points: 10 },
            { label: "Somewhat broad — I'm working on narrowing it", points: 5 },
            { label: "I speak to everyone", points: 0 },
        ]
    },
    {
        id: "google", text: "When a prospect Googles your name, what do they find?",
        options: [
            { label: "Strong LinkedIn + website articles/interviews/press", points: 15 },
            { label: "Good LinkedIn, maybe a website", points: 10 },
            { label: "Just a basic LinkedIn profile", points: 5 },
            { label: "Very little or nothing relevant", points: 0 },
        ]
    },
    {
        id: "inbound", text: "How many inbound leads from content did you get last month?",
        options: [
            { label: "5+", points: 15 },
            { label: "2–4", points: 10 },
            { label: "1", points: 5 },
            { label: "Zero", points: 0 },
        ]
    },
    {
        id: "pov", text: "Do you have a defined contrarian take or 'enemy' your brand stands against?",
        options: [
            { label: "Yes — it's baked into everything I say", points: 10 },
            { label: "Informally — I have opinions but haven't codified them", points: 6 },
            { label: "Not really", points: 2 },
            { label: "No — I try not to upset anyone", points: 0 },
        ]
    },
    {
        id: "visual", text: "Is there a consistent visual and tonal style to your LinkedIn content?",
        options: [
            { label: "Yes — people recognize my posts instantly", points: 10 },
            { label: "Somewhat consistent", points: 6 },
            { label: "Not really — it varies post to post", points: 2 },
            { label: "I don't think about this", points: 0 },
        ]
    },
    {
        id: "analytics", text: "How closely do you track content performance?",
        options: [
            { label: "Weekly — I know what's working and double down on it", points: 10 },
            { label: "Occasionally — I check in but don't act on it", points: 5 },
            { label: "Rarely", points: 1 },
            { label: "I don't track it at all", points: 0 },
        ]
    },
    {
        id: "newsletter", text: "Do you have an owned audience beyond LinkedIn? (newsletter, community, email list)",
        options: [
            { label: "Yes — active newsletter or list with 500+ subscribers", points: 10 },
            { label: "Small list — fewer than 500", points: 6 },
            { label: "Planning to start one", points: 2 },
            { label: "No owned audience yet", points: 0 },
        ]
    },
];

type Tier = { label: string; emoji: string; color: string; description: string; actions: string[] };

const tiers: Tier[] = [
    {
        label: "Engine Running", emoji: "⚡", color: "text-[#CCFF00]",
        description: "Your founder brand is a genuine pipeline asset. You're generating inbound, you're visible to the right people, and your content has a clear POV.",
        actions: ["Focus on converting your audience into owned channels (newsletter)", "Start creating case studies while wins are fresh", "Explore podcast appearances and cross-channel distribution"]
    },
    {
        label: "Moving", emoji: "🚀", color: "text-green-400",
        description: "You're making real progress. You have the fundamentals in place but there are a few levers you haven't pulled yet that would meaningfully accelerate your inbound.",
        actions: ["Sharpen your contrarian POV and weave it into every post", "Step up posting frequency to 4x+ per week", "Start tracking analytics weekly and doubling down on top performers"]
    },
    {
        label: "Idling", emoji: "🟡", color: "text-yellow-400",
        description: "You have potential but the engine isn't converting yet. You might be posting inconsistently, speaking too broadly, or missing the distribution mechanics that turn content into leads.",
        actions: ["Kill the broad content — pick one ICP and one niche immediately", "Commit to 3x per week posting for 60 days straight", "Spend 20 minutes per day commenting strategically in your ICP's feed"]
    },
    {
        label: "Stalled", emoji: "🔴", color: "text-red-400",
        description: "Your brand isn't working for you yet — but the good news is that every single item here is fixable with the right system.",
        actions: ["Define your niche before you post another piece of content", "Get a professional headshot and rebuild your LinkedIn profile this week", "Start with 2 posts per week — ship before perfect"]
    },
];

function getTier(score: number): Tier {
    if (score >= 80) return tiers[0];
    if (score >= 60) return tiers[1];
    if (score >= 35) return tiers[2];
    return tiers[3];
}

export default function FounderBrandScore() {
    const [answers, setAnswers] = useState<Record<string, number | null>>(() =>
        Object.fromEntries(questions.map(q => [q.id, null]))
    );
    const [showGate, setShowGate] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const answered = Object.values(answers).filter(v => v !== null).length;
    const totalPoints = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0);
    const score = Math.round((Object.values(answers).filter(Boolean).reduce<number>((s, v) => s + (v ?? 0), 0) / totalPoints) * 100);
    const tier = getTier(score);

    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            {showGate && (
                <EmailGate
                    toolName="Founder Brand Score"
                    resultSummary={`Founder Brand Score: ${score}/100 — ${tier.label}`}
                    resultPayload={{ score, tier: tier.label, actions: tier.actions }}
                    onUnlock={() => { setShowGate(false); setShowResults(true); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Link href="/tools" className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono mb-4 inline-block hover:text-white transition-colors">← All Tools</Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Founder Brand<br />Score</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">8 questions. Find out if your personal brand is an engine — or just a LinkedIn profile collecting dust.</p>
                </div>

                {!showResults ? (
                    <div className="space-y-6">
                        {questions.map((q, i) => (
                            <div key={q.id} className="border border-white/10 rounded-2xl p-6 bg-black/30">
                                <p className="font-bold text-white mb-4"><span className="text-[#CCFF00] font-mono mr-2">{String(i + 1).padStart(2, "0")}.</span>{q.text}</p>
                                <div className="space-y-2">
                                    {q.options.map((opt) => (
                                        <button key={opt.label}
                                            onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.points }))}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all border ${answers[q.id] === opt.points ? "border-[#CCFF00] bg-[#CCFF00]/10 text-white font-bold" : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"}`}>
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {answered === questions.length && (
                            <button onClick={() => setShowGate(true)} className="w-full bg-[#CCFF00] text-black font-black uppercase tracking-widest py-5 rounded-xl text-lg hover:bg-white transition-all mt-2">
                                Get My Score →
                            </button>
                        )}
                        {answered < questions.length && <p className="text-center text-gray-600 text-sm">{questions.length - answered} questions remaining</p>}
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="border border-white/10 rounded-2xl p-10 bg-black/30 text-center">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Your Founder Brand Score</p>
                            <div className={`text-8xl font-black mb-2 ${tier.color}`}>{score}<span className="text-3xl text-gray-500">/100</span></div>
                            <div className={`text-3xl font-black mb-2 ${tier.color}`}>{tier.emoji} {tier.label}</div>
                            <p className="text-gray-400 max-w-md mx-auto">{tier.description}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-black uppercase tracking-widest mb-4">Your Priority Actions</h2>
                            <div className="space-y-3">
                                {tier.actions.map((action, i) => (
                                    <div key={i} className="border border-[#CCFF00]/20 rounded-xl p-4 bg-[#CCFF00]/5 flex gap-3">
                                        <span className="text-[#CCFF00] font-black mt-0.5">→</span>
                                        <p className="text-gray-300 text-sm">{action}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black/40 border border-[#CCFF00]/30 p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Ready to install the engine?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Moxie Digital builds founder content systems that turn your brand score from {tier.label === "Stalled" ? "Stalled to Moving" : tier.label === "Idling" ? "Idling to Engine Running" : "great to exceptional"}.</p>
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-all">Book a Free Call</a>
                        </div>
                        <button onClick={() => { setShowResults(false); setShowGate(false); setAnswers(Object.fromEntries(questions.map(q => [q.id, null]))); }} className="w-full border border-white/20 text-gray-400 py-3 rounded-xl text-sm hover:border-white/50 transition-all">Retake Quiz</button>
                    </div>
                )}
            </div>
        </main>
    );
}
