"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";

interface FormData {
    name: string;
    email: string;
    role: string;
    message: string;
    newsletter: boolean;
}

export function DemoForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        role: "",
        message: "",
        newsletter: true
    });
    
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        setStatus("submitting");

        try {
            const response = await fetch("/api/demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit request.");
            }

            setStatus("success");
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred.");
        }
    };

    const inputClasses = "w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00] transition-all duration-300";
    const labelClasses = "block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2";

    if (status === "success") {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/40 border border-[#CCFF00]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden glass-card"
            >
                <div className="absolute inset-0 bg-[#CCFF00]/5 pointer-events-none" />
                <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-[#CCFF00]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#CCFF00]/50"
                >
                    <CheckCircle2 className="w-10 h-10 text-[#CCFF00]" />
                </motion.div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Request Received</h3>
                <p className="text-gray-300 text-lg max-w-md mx-auto mb-8">
                    We've securely logged your requirements. Our system is processing it, and we will be in touch shortly to deploy your engine.
                </p>
                <Button 
                    onClick={() => { setStatus("idle"); setFormData({name: "", email: "", role: "", message: "", newsletter: true}); }}
                    variant="secondary"
                    className="border-white/20 hover:border-[#CCFF00] hover:text-[#CCFF00]"
                >
                    SUBMIT ANOTHER
                </Button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative z-10 glass-card p-6 md:p-10 rounded-2xl">
            {/* Header */}
            <div className="mb-8">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Build Your Engine</h3>
                <p className="text-gray-400 text-sm">Tell us exactly what you need. We'll capture it and map out the blueprint.</p>
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {status === "error" && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg flex items-start gap-3 text-sm"
                    >
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>{errorMessage}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className={labelClasses}>Full Name *</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className={inputClasses}
                            placeholder="John Doe"
                            disabled={status === "submitting"}
                        />
                    </div>
                    <div>
                        <label className={labelClasses}>Work Email *</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={inputClasses}
                            placeholder="john@company.com"
                            disabled={status === "submitting"}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div>
                        <label className={labelClasses}>Your Role</label>
                        <select 
                            name="role" 
                            value={formData.role} 
                            onChange={handleChange} 
                            className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1.2em_1.2em]`}
                            disabled={status === "submitting"}
                        >
                            <option value="" disabled className="bg-[#0a0118]">Select your role...</option>
                            <option value="Founder/CEO" className="bg-[#0a0118]">Founder / CEO</option>
                            <option value="Marketing Leader" className="bg-[#0a0118]">Marketing Leader (CMO, VP, Dir)</option>
                            <option value="Sales/Revenue" className="bg-[#0a0118]">Sales / Revenue Leader</option>
                            <option value="Other" className="bg-[#0a0118]">Other</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>What are you looking to achieve? *</label>
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Tell us about your pipeline goals, current bottlenecks, and what engines you are interested in..."
                        disabled={status === "submitting"}
                    />
                </div>

                <div className="flex items-start gap-3 bg-black/30 p-4 border border-[#CCFF00]/10 rounded-lg">
                    <div className="pt-0.5">
                        <input
                            type="checkbox"
                            name="newsletter"
                            id="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            className="w-4 h-4 rounded border-white/20 bg-black/50 text-[#CCFF00] focus:ring-[#CCFF00] focus:ring-offset-[#0a0118] cursor-pointer"
                            disabled={status === "submitting"}
                        />
                    </div>
                    <label htmlFor="newsletter" className="text-sm text-gray-400 leading-relaxed cursor-pointer select-none">
                        Send me the <span className="text-white font-bold">Moxie Playbook</span> (unconventional B2B growth tactics and pipeline engines. Sent rarely. No fluff.)
                    </label>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={status === "submitting"}
                        className="w-full flex items-center justify-center gap-2 bg-[#CCFF00] text-black font-[900] uppercase tracking-widest py-4 rounded-lg hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                    >
                        {status === "submitting" ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Processing Request...
                            </>
                        ) : (
                            <>
                                INITIALIZE PROTOCOL
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                    <p className="text-center text-[10px] text-gray-500 uppercase mt-4 tracking-wider">
                        Your data is securely transmitted directly to our private Notion database.
                    </p>
                </div>
            </div>
        </form>
    );
}
