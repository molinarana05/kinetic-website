"use client";
import { useState, FormEvent } from "react";

interface EmailGateProps {
    toolName: string;
    resultSummary: string; // Short description of what they're about to see
    onUnlock: (email: string, name: string, company: string) => void;
    resultPayload: Record<string, unknown>; // The full result to send to Notion
}

export function EmailGate({ toolName, resultSummary, onUnlock, resultPayload }: EmailGateProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }
        setLoading(true);
        setError("");

        try {
            await fetch("/api/collect-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    company: company.trim(),
                    toolName,
                    result: resultPayload,
                }),
            });
        } catch {
            // Silently ignore — always unlock for the user
        }

        setLoading(false);
        onUnlock(email, name, company);
    };

    return (
        <div className="fixed inset-0 bg-[#0a0118]/90 backdrop-blur-sm z-50 flex items-center justify-center px-6">
            <div className="w-full max-w-md border border-[#CCFF00]/40 rounded-2xl bg-black p-8 shadow-2xl shadow-[#CCFF00]/5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center text-2xl mb-6 mx-auto">
                    🔓
                </div>

                <h2 className="text-2xl font-black text-white text-center mb-2 tracking-tighter">Your results are ready</h2>
                <p className="text-gray-400 text-sm text-center mb-8">
                    Enter your details to unlock your <span className="text-[#CCFF00] font-bold">{resultSummary}</span>. We&apos;ll send it to your inbox too.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1 block">First Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Molina"
                            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1 block">Work Email <span className="text-[#CCFF00]">*</span></label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@company.com"
                            required
                            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1 block">Company</label>
                        <input
                            type="text"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                            placeholder="Acme Corp"
                            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#CCFF00] transition-colors"
                        />
                    </div>

                    {error && <p className="text-red-400 text-xs">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading || !email}
                        className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all ${loading || !email ? "bg-white/10 text-gray-600 cursor-not-allowed" : "bg-[#CCFF00] text-black hover:bg-white"}`}
                    >
                        {loading ? "Unlocking…" : "Unlock My Results →"}
                    </button>

                    <p className="text-gray-700 text-xs text-center">
                        No spam. No retargeting. Just your results. We might reach out if we think we can help.
                    </p>
                </form>
            </div>
        </div>
    );
}
