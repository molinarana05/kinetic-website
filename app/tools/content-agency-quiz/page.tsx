"use client";
import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const questions = [
    {
        id: "pov", text: "Does your founder have a clear, defensible point of view on the industry?",
        helpText: "Not just expertise — a specific take that a meaningful portion of the market would disagree with.",
        options: [
            { label: "Yes — people know what we stand for and against", points: 2 },
            { label: "Somewhat — opinions exist but they're not documented or consistent", points: 1 },
            { label: "Not really — we try to keep everyone happy", points: 0 },
        ]
    },
    {
        id: "icp", text: "How clearly defined is your Ideal Customer Profile?",
        helpText: "Specific title, company size, industry, and current problem state — not just 'SMBs' or 'enterprises'.",
        options: [
            { label: "Crystal clear — we know exactly who we're for and who we're not for", points: 2 },
            { label: "Broadly defined — we know the industry but not the specific buyer", points: 1 },
            { label: "Still figuring it out", points: 0 },
        ]
    },
    {
        id: "proof", text: "Do you have at least 2–3 client success stories with specific outcomes?",
        helpText: "Real numbers, timelines, and before/after states — not just 'client loved working with us'.",
        options: [
            { label: "Yes — documented with specific metrics", points: 2 },
            { label: "We have testimonials but they're mostly qualitative", points: 1 },
            { label: "We're still building our client base", points: 0 },
        ]
    },
    {
        id: "founder", text: "Is your founder genuinely willing to be publicly visible?",
        helpText: "This isn't optional. Founder-led content only works if the founder will be on the record.",
        options: [
            { label: "Yes — already somewhat active and open to doing more", points: 2 },
            { label: "Willing but nervous — needs a system to make it manageable", points: 1 },
            { label: "Strongly prefers to stay behind the brand", points: 0 },
        ]
    },
    {
        id: "budget", text: "What's your current monthly marketing budget?",
        helpText: "This helps us assess whether a content system is a fit vs. other growth levers.",
        options: [
            { label: "$3,000+/month available for content and growth", points: 2 },
            { label: "$1,000–$2,999/month", points: 1 },
            { label: "Under $1,000/month right now", points: 0 },
        ]
    },
    {
        id: "pipeline", text: "How is your current pipeline primarily generated?",
        helpText: "Understanding your baseline helps us know what the content engine would replace or complement.",
        options: [
            { label: "Mostly referrals and word of mouth — we want to add inbound", points: 2 },
            { label: "Mostly cold outbound — we're looking for a warmer path", points: 2 },
            { label: "Primarily paid ads — we want to reduce dependency", points: 1 },
            { label: "No consistent pipeline system yet", points: 1 },
        ]
    },
];

type Verdict = "ready" | "almost" | "notYet";

const verdicts: Record<Verdict, { label: string; emoji: string; color: string; description: string; actions: string[] }> = {
    ready: {
        label: "You're Ready", emoji: "✅", color: "text-[#CCFF00]",
        description: "You have the foundations in place: a defined ICP, founder willingness, proof points, and budget. A founder-led content engine will compound quickly for you.",
        actions: [
            "Define your content pillars based on your ICP's top 3 pain points",
            "Set up the monthly Extraction Session cadence",
            "Build your 90-day content calendar before launching",
        ]
    },
    almost: {
        label: "Almost Ready", emoji: "🟡", color: "text-yellow-400",
        description: "You're close, but a few things will determine whether content drives real ROI or just fills a calendar. Fix these first — then the engine will run much hotter.",
        actions: [
            "Document 2-3 client case studies with specific numbers before investing in content",
            "Get the founder to commit to one specific niche rather than speaking broadly",
            "Decide whether content is a Q1 priority — a half-committed engine doesn't compound",
        ]
    },
    notYet: {
        label: "Not Quite Yet", emoji: "🔴", color: "text-red-400",
        description: "A content agency right now would be expensive and ineffective. The missing foundations will cause any content to fall flat. Fix these first — and then you'll be ready for the engine.",
        actions: [
            "Nail your ICP before creating content — without this, nothing else works",
            "Get 1-2 strong case studies — content without proof is just noise",
            "Discuss with the founder whether public visibility is genuinely on the table",
        ]
    }
};

function getVerdict(score: number, answers: Record<string, number | null>): Verdict {
    if (answers.founder === 0) return "notYet";
    if (score >= 10) return "ready";
    if (score >= 6) return "almost";
    return "notYet";
}

export default function ContentAgencyQuiz() {
    const [answers, setAnswers] = useState<Record<string, number | null>>(() =>
        Object.fromEntries(questions.map(q => [q.id, null]))
    );
    const [showGate, setShowGate] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const answered = Object.values(answers).filter(v => v !== null).length;
    const score = Object.values(answers).filter(Boolean).reduce<number>((s, v) => s + (v ?? 0), 0);
    const verdictKey = getVerdict(score, answers);
    const verdict = verdicts[verdictKey];

    return (
        <main className="min-h-screen bg-[#0d0b0b] text-white">
            {showGate && (
                <EmailGate
                    toolName="Content Agency Readiness Quiz"
                    resultSummary={`Agency Readiness Verdict: ${verdict.label}`}
                    resultPayload={{ score, verdict: verdictKey, verdictLabel: verdict.label, answers }}
                    onUnlock={() => { setShowGate(false); setShowResults(true); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Link href="/tools" className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono mb-4 inline-block hover:text-white transition-colors">← All Tools</Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Are You Ready for a<br />Content Agency?</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">6 honest questions. Get a straight verdict on whether a founder content engine will work for you — or what needs to happen first.</p>
                </div>
                {!showResults ? (
                    <div className="space-y-6">
                        {questions.map((q, i) => (
                            <div key={q.id} className="border border-white/10 rounded-2xl p-6 bg-black/30">
                                <p className="font-bold text-white mb-1"><span className="text-[#CCFF00] font-mono mr-2">{String(i + 1).padStart(2, "0")}.</span>{q.text}</p>
                                <p className="text-gray-500 text-xs mb-4">{q.helpText}</p>
                                <div className="space-y-2">
                                    {q.options.map((opt) => (
                                        <button key={opt.label} onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.points }))}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all ${answers[q.id] === opt.points && answers[q.id] !== null ? "border-[#CCFF00] bg-[#CCFF00]/10 text-white font-bold" : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"}`}>
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {answered === questions.length && (
                            <button onClick={() => setShowGate(true)} className="w-full bg-[#CCFF00] text-black font-black uppercase tracking-widest py-5 rounded-xl text-lg hover:bg-white transition-all">
                                Get My Verdict →
                            </button>
                        )}
                        {answered < questions.length && <p className="text-center text-gray-600 text-sm">{questions.length - answered} questions remaining</p>}
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div className="border border-white/10 rounded-2xl p-10 bg-black/30 text-center">
                            <div className={`text-6xl font-black mb-3 ${verdict.color}`}>{verdict.emoji}</div>
                            <div className={`text-3xl font-black mb-4 ${verdict.color}`}>{verdict.label}</div>
                            <p className="text-gray-400 max-w-md mx-auto">{verdict.description}</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-black uppercase tracking-widest mb-4">Your Next Steps</h2>
                            <div className="space-y-3">
                                {verdict.actions.map((a, i) => (
                                    <div key={i} className="border border-[#CCFF00]/20 rounded-xl p-4 bg-[#CCFF00]/5 flex gap-3">
                                        <span className="text-[#CCFF00] font-black">→</span>
                                        <p className="text-gray-300 text-sm">{a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-black/40 border border-[#CCFF00]/30 p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">
                                {verdictKey === "ready" ? "Let's build your engine." : "Let's talk through it."}
                            </h3>
                            <p className="text-gray-400 mb-6 text-sm">
                                {verdictKey === "ready" ? "Book a 30-min call to map out your system." : "Book a free call — we'll tell you exactly what to do before investing."}
                            </p>
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-all">Book a Free Call</a>
                        </div>
                        <button onClick={() => { setShowResults(false); setShowGate(false); setAnswers(Object.fromEntries(questions.map(q => [q.id, null]))); }} className="w-full border border-white/20 text-gray-400 py-3 rounded-xl text-sm hover:border-white/50 transition-all">Retake Quiz</button>
                    </div>
                )}
            </div>
        </main>
    );
}
