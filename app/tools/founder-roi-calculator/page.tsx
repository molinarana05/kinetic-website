"use client";

import { useState } from "react";
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { EmailGate } from "../../components/EmailGate";
import Link from "next/link";

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

function Slider({ label, min, max, step, value, onChange, prefix = "", suffix = "", helpText = "" }: {
    label: string; min: number; max: number; step: number; value: number;
    onChange: (v: number) => void; prefix?: string; suffix?: string; helpText?: string;
}) {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-300">{label}</label>
                <span className="text-[#CCFF00] font-black text-xl font-mono">{prefix}{value.toLocaleString()}{suffix}</span>
            </div>
            {helpText && <p className="text-gray-500 text-xs mb-2">{helpText}</p>}
            <input
                type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#CCFF00]"
            />
            <div className="flex justify-between text-gray-600 text-xs mt-1">
                <span>{prefix}{min.toLocaleString()}{suffix}</span>
                <span>{prefix}{max.toLocaleString()}{suffix}</span>
            </div>
        </div>
    );
}

function ResultCard({ label, value, highlight = false, sub = "" }: { label: string; value: string; highlight?: boolean; sub?: string }) {
    return (
        <div className={`p-6 rounded-xl border ${highlight ? 'border-[#CCFF00]/60 bg-[#CCFF00]/5' : 'border-white/10 bg-black/30'}`}>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
            <p className={`text-3xl font-black ${highlight ? 'text-[#CCFF00]' : 'text-white'}`}>{value}</p>
            {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
        </div>
    );
}

export default function FounderROICalculator() {
    const [monthlyAdSpend, setMonthlyAdSpend] = useState(5000);
    const [currentCAC, setCurrentCAC] = useState(1500);
    const [avgDealSize, setAvgDealSize] = useState(12000);
    const [closedDealsPerMonth, setClosedDealsPerMonth] = useState(3);
    const [contentBudget, setContentBudget] = useState(3000);
    const [showGate, setShowGate] = useState(false);
    const [unlocked, setUnlocked] = useState(false);

    // Calculations
    const currentMonthlyCost = monthlyAdSpend + currentCAC * closedDealsPerMonth;
    const currentMonthlyRevenue = avgDealSize * closedDealsPerMonth;
    const currentROI = ((currentMonthlyRevenue - currentMonthlyCost) / currentMonthlyCost * 100).toFixed(0);

    // Founder-led estimates (conservative): 40% lower CAC, 25% more deals from warm inbound
    const founderCAC = Math.round(currentCAC * 0.6);
    const founderDeals = Math.round(closedDealsPerMonth * 1.25);
    const founderMonthlyCost = contentBudget + founderCAC * founderDeals;
    const founderMonthlyRevenue = avgDealSize * founderDeals;
    const founderROI = ((founderMonthlyRevenue - founderMonthlyCost) / founderMonthlyCost * 100).toFixed(0);

    const annualRevenueUplift = (founderMonthlyRevenue - currentMonthlyRevenue) * 12;
    const annualCostSavings = (currentMonthlyCost - founderMonthlyCost) * 12;
    const paybackMonths = contentBudget > 0 ? Math.ceil(contentBudget / ((founderMonthlyRevenue - currentMonthlyRevenue) / 12 + (currentMonthlyCost - founderMonthlyCost) / 12)) : 0;

    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            {showGate && (
                <EmailGate
                    toolName="Founder Content ROI Calculator"
                    resultSummary={`Annual revenue uplift: $${annualRevenueUplift.toLocaleString()} | Payback: ${paybackMonths} months`}
                    resultPayload={{ monthlyAdSpend, currentCAC, avgDealSize, closedDealsPerMonth, contentBudget, annualRevenueUplift, annualCostSavings, paybackMonths, founderCAC, founderROI }}
                    onUnlock={() => { setShowGate(false); setUnlocked(true); }}
                />
            )}
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest">Free Tool</span>
                    <h1 className="text-4xl md:text-6xl font-black mt-3 mb-6 tracking-tighter">
                        Founder Content<br />ROI Calculator
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        See exactly how much revenue a founder-led content system generates compared to your current paid ads spend — in real numbers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-lg font-black uppercase tracking-widest mb-8 text-white">Your Current Numbers</h2>

                        <Slider
                            label="Monthly Ad Spend"
                            min={0} max={50000} step={500}
                            value={monthlyAdSpend}
                            onChange={setMonthlyAdSpend}
                            prefix="$"
                            helpText="Total monthly spend on paid ads (Google, LinkedIn, Meta, etc.)"
                        />
                        <Slider
                            label="Current CAC"
                            min={100} max={10000} step={100}
                            value={currentCAC}
                            onChange={setCurrentCAC}
                            prefix="$"
                            helpText="Average cost to acquire one new customer today"
                        />
                        <Slider
                            label="Average Deal Size"
                            min={1000} max={100000} step={1000}
                            value={avgDealSize}
                            onChange={setAvgDealSize}
                            prefix="$"
                            helpText="Average contract value (ACV) per new client"
                        />
                        <Slider
                            label="Deals Closed / Month"
                            min={1} max={30} step={1}
                            value={closedDealsPerMonth}
                            onChange={setClosedDealsPerMonth}
                            helpText="Average number of new clients you close each month"
                        />
                        <Slider
                            label="Founder Content Budget"
                            min={1000} max={15000} step={500}
                            value={contentBudget}
                            onChange={setContentBudget}
                            prefix="$"
                            helpText="Monthly investment in a founder-led content system (operator + tools)"
                        />
                    </div>

                    {/* Results — locked until email provided */}
                    <div className="space-y-6">
                        {!unlocked && (
                            <div className="border border-[#CCFF00]/20 rounded-2xl p-10 bg-black/20 flex flex-col items-center justify-center gap-4 min-h-[300px]">
                                <div className="text-4xl">🔒</div>
                                <p className="text-gray-400 text-sm text-center max-w-xs">Adjust your numbers above, then unlock your results.</p>
                                <button onClick={() => setShowGate(true)} className="bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-3 rounded-xl hover:bg-white transition-all text-sm">
                                    Unlock My Results →
                                </button>
                            </div>
                        )}
                        {unlocked && (
                            <>
                                {/* Current State */}
                                <div className="bg-black/30 border border-white/10 rounded-2xl p-8">
                                    <h2 className="text-sm font-black uppercase tracking-widest mb-6 text-gray-400">Current State (Ads-led)</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <ResultCard label="Monthly Revenue" value={`$${currentMonthlyRevenue.toLocaleString()}`} />
                                        <ResultCard label="Monthly Cost" value={`$${currentMonthlyCost.toLocaleString()}`} />
                                        <ResultCard label="ROI" value={`${currentROI}%`} />
                                        <ResultCard label="CAC" value={`$${currentCAC.toLocaleString()}`} />
                                    </div>
                                </div>

                                {/* Founder-Led State */}
                                <div className="bg-black/30 border border-[#CCFF00]/20 rounded-2xl p-8">
                                    <h2 className="text-sm font-black uppercase tracking-widest mb-1 text-[#CCFF00]">Founder-Led Content System</h2>
                                    <p className="text-gray-500 text-xs mb-6">Based on conservative 40% lower CAC + 25% more inbound deals</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <ResultCard label="Monthly Revenue" value={`$${founderMonthlyRevenue.toLocaleString()}`} highlight />
                                        <ResultCard label="Monthly Cost" value={`$${founderMonthlyCost.toLocaleString()}`} />
                                        <ResultCard label="ROI" value={`${founderROI}%`} highlight />
                                        <ResultCard label="New CAC" value={`$${founderCAC.toLocaleString()}`} highlight sub={`vs $${currentCAC.toLocaleString()} today`} />
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="bg-[#CCFF00]/5 border border-[#CCFF00]/40 rounded-2xl p-8">
                                    <h2 className="text-sm font-black uppercase tracking-widest mb-6 text-[#CCFF00]">The Opportunity</h2>
                                    <div className="grid grid-cols-1 gap-4">
                                        <ResultCard label="Annual Revenue Uplift" value={`+$${annualRevenueUplift.toLocaleString()}`} highlight sub="From higher deal volume via inbound" />
                                        <ResultCard label="Annual Cost Savings" value={annualCostSavings > 0 ? `+$${annualCostSavings.toLocaleString()}` : `-$${Math.abs(annualCostSavings).toLocaleString()}`} sub="Reduction in total acquisition cost" />
                                        <ResultCard label="Payback Period" value={paybackMonths > 0 ? `${paybackMonths} month${paybackMonths === 1 ? '' : 's'}` : "< 1 month"} sub="Time to recoup the content investment" />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 border-t border-white/10 pt-16 text-center">
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Want these numbers to be real?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        The calculator uses conservative estimates. Our clients typically see results at the higher end. Book a 30-min call to see what's realistic for your specific market.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                            className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white hover:-translate-y-1 transition-all">
                            Book a Free Strategy Call
                        </a>
                        <Link href="/blog" className="inline-block border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-4 rounded hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all">
                            Read the Insights Feed →
                        </Link>
                    </div>
                </div>

                {/* Disclaimer */}
                <p className="text-center text-gray-600 text-xs mt-12 max-w-2xl mx-auto">
                    Estimates are based on average outcomes from founder-led B2B content systems. Results vary based on industry, ICP, deal complexity, and content quality. This calculator is for illustrative purposes only.
                </p>
            </div>
        </main >
    );
}
