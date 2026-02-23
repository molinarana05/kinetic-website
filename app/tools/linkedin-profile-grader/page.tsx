"use client";
import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const questions = [
    { id: "headline", text: "Does your headline include your target keyword or the problem you solve (not just your job title)?", tip: "e.g. 'Helping B2B SaaS founders build inbound pipeline' beats 'Founder at Acme Corp'" },
    { id: "banner", text: "Do you have a custom profile banner (not the default LinkedIn blue)?", tip: "Your banner is the first visual impression. A branded banner adds instant credibility." },
    { id: "about", text: "Is your About section longer than 200 words AND does it end with a clear CTA?", tip: "Your About section is your best-converting real estate. Most people waste it with a resume." },
    { id: "photo", text: "Is your profile photo professional, well-lit, and cropped to your face?", tip: "Profiles with photos get 21x more views. Quality matters." },
    { id: "frequency", text: "Do you post original content at least 3 times per week?", tip: "Consistency is the only algorithm hack that actually works. 3x/week is the minimum for compounding growth." },
    { id: "featured", text: "Is your Featured section populated with a lead magnet, case study, or booking link?", tip: "Most profiles leave Featured empty. It's the highest-click real estate on your profile." },
    { id: "connections", text: "Do you have 500+ connections in your target market?", tip: "Your reach is your network. 500+ connections puts you above the 'new account' threshold for distribution." },
    { id: "creator", text: "Is Creator Mode activated on your profile?", tip: "Creator Mode unlocks analytics, the 'Follow' button, LinkedIn newsletters, and topic tags." },
    { id: "recommendations", text: "Do you have 3+ LinkedIn recommendations from clients or colleagues?", tip: "Recommendations are B2B social proof. They appear directly on your profile and build immediate trust." },
    { id: "engagement", text: "Do you comment meaningfully on 5+ posts per day in your ICP's feed?", tip: "Commenting is the most underrated growth lever on LinkedIn. Every smart comment is a micro-post." },
];

const recommendations: Record<string, string> = {
    headline: "Rewrite your headline to lead with the outcome you deliver, not your title. Example: 'I help [ICP] achieve [result] without [pain]'",
    banner: "Create a branded banner in Canva. Include your name, tagline, and one CTA. Takes 20 minutes, pays forever.",
    about: "Rewrite your About section using this structure: Hook → Credibility → Proof → CTA. End with your booking link.",
    photo: "Invest in a quality headshot. Natural light + a plain background is sufficient. Avoid busy or dark backgrounds.",
    frequency: "Start with 3 posts per week. Block 2 hours on Mondays to batch write your week's posts.",
    featured: "Pin a booking link, your best case study, or a lead magnet PDF as the first item in Featured.",
    connections: "Spend 15 min/day sending targeted connection requests to your ICP. Include a short, non-salesy note.",
    creator: "Turn on Creator Mode in Settings > Visibility > Creator mode. It takes 30 seconds.",
    recommendations: "Message 3-5 past clients or collaborators this week and ask for a recommendation. Most people say yes.",
    engagement: "Set a timer for 20 minutes each morning to leave 5-7 substantive comments in your ICP's feed.",
};

export default function LinkedInProfileGrader() {
    const [answers, setAnswers] = useState<Record<string, boolean | null>>(() =>
        Object.fromEntries(questions.map(q => [q.id, null]))
    );
    const [showGate, setShowGate] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const answered = Object.values(answers).filter(v => v !== null).length;
    const score = Object.entries(answers).filter(([, v]) => v === true).length * 10;
    const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
    const gradeColor = grade === "A" ? "text-[#CCFF00]" : grade === "B" ? "text-green-400" : grade === "C" ? "text-yellow-400" : "text-red-400";
    const gaps = questions.filter(q => answers[q.id] === false);

    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            {showGate && (
                <EmailGate
                    toolName="LinkedIn Profile Grader"
                    resultSummary={`LinkedIn profile score: ${score}/100 (Grade ${grade})`}
                    resultPayload={{ score, grade, gaps: gaps.map(g => g.id) }}
                    onUnlock={() => { setShowGate(false); setShowResults(true); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />
            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Link href="/tools" className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono mb-4 inline-block hover:text-white transition-colors">← All Tools</Link>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">LinkedIn Profile<br />Grader</h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">10 questions. Instant score out of 100. Find out exactly what's keeping your profile from converting.</p>
                </div>

                {!showResults ? (
                    <div className="space-y-5">
                        {questions.map((q, i) => (
                            <div key={q.id} className="border border-white/10 rounded-2xl p-6 bg-black/30">
                                <p className="font-bold text-white mb-1"><span className="text-[#CCFF00] font-mono mr-2">{String(i + 1).padStart(2, "0")}.</span>{q.text}</p>
                                <p className="text-gray-500 text-xs mb-4">{q.tip}</p>
                                <div className="flex gap-3">
                                    {[true, false].map((val) => (
                                        <button key={String(val)}
                                            onClick={() => setAnswers(prev => ({ ...prev, [q.id]: val }))}
                                            className={`flex-1 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all ${answers[q.id] === val ? (val ? "bg-[#CCFF00] text-black" : "bg-red-500/80 text-white") : "border border-white/20 text-gray-400 hover:border-white/50"}`}>
                                            {val ? "✓ Yes" : "✗ No"}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {answered === questions.length && (
                            <button onClick={() => setShowGate(true)}
                                className="w-full bg-[#CCFF00] text-black font-black uppercase tracking-widest py-5 rounded-xl text-lg hover:bg-white transition-all mt-4">
                                Get My Score →
                            </button>
                        )}
                        {answered < questions.length && (
                            <p className="text-center text-gray-600 text-sm">{questions.length - answered} questions remaining</p>
                        )}
                    </div>
                ) : (
                    <div className="space-y-8">
                        {/* Score */}
                        <div className="border border-[#CCFF00]/40 rounded-2xl p-10 bg-black/30 text-center">
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Your LinkedIn Profile Score</p>
                            <div className={`text-8xl font-black mb-2 ${gradeColor}`}>{score}<span className="text-3xl text-gray-500">/100</span></div>
                            <div className={`text-4xl font-black ${gradeColor} mb-4`}>Grade: {grade}</div>
                            <p className="text-gray-400 max-w-md mx-auto">
                                {score >= 90 ? "Your profile is a lead magnet. The engine is running — now focus on content quality and consistency." :
                                    score >= 70 ? "Solid foundation. A few targeted fixes will meaningfully improve your inbound conversion." :
                                        score >= 50 ? "You're leaving significant pipeline on the table. The fixes are straightforward." :
                                            "Your profile is working against you. The good news: these are all fixable in a weekend."}
                            </p>
                        </div>

                        {/* Gaps */}
                        {gaps.length > 0 && (
                            <div>
                                <h2 className="text-xl font-black uppercase tracking-widest mb-4 text-white">Your Priority Fixes</h2>
                                <div className="space-y-3">
                                    {gaps.map(q => (
                                        <div key={q.id} className="border border-red-500/20 rounded-xl p-5 bg-red-500/5">
                                            <p className="font-bold text-white text-sm mb-1">{q.text}</p>
                                            <p className="text-gray-400 text-xs">→ {recommendations[q.id]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-black/40 border border-[#CCFF00]/30 p-8 rounded-2xl text-center">
                            <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Want someone to fix this for you?</h3>
                            <p className="text-gray-400 mb-6 text-sm">Moxie Digital builds founder content systems that turn LinkedIn into your top pipeline channel.</p>
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white transition-all">Book a Free Call</a>
                        </div>
                        <button onClick={() => { setShowResults(false); setShowGate(false); setAnswers(Object.fromEntries(questions.map(q => [q.id, null]))); }} className="w-full border border-white/20 text-gray-400 py-3 rounded-xl text-sm hover:border-white/50 transition-all">Retake Quiz</button>
                    </div>
                )}
            </div>
        </main>
    );
}
