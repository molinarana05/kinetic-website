import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Moxie Digital",
    description: "Privacy Policy for Moxie Digital — how we collect, use, and protect your information.",
    alternates: { canonical: "https://www.moxie-digital.com/privacy-policy" },
};

export default function PrivacyPolicy() {
    const updated = "20 February 2026";

    return (
        <main className="min-h-screen bg-[#0d0b0b] text-white">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="mb-12">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-3 block">Legal</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 text-sm">Last updated: {updated}</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300">

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">1. Who We Are</h2>
                        <p>Moxie Digital (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a B2B marketing consultancy operated by Molina Rana, based in India. Our website is <a href="https://www.moxie-digital.com" className="text-[#CCFF00] hover:text-white transition-colors">moxie-digital.com</a>. We provide founder-led content systems, B2B growth strategy, and free marketing tools.</p>
                        <p className="mt-3">For privacy questions, contact us at: <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">2. Information We Collect</h2>
                        <p className="font-bold text-white mb-2">Information you provide directly:</p>
                        <ul className="list-none space-y-2 ml-0">
                            {["Name — to personalise your experience", "Email address — to send you your tool results and follow up", "Company name — to understand your business context and qualify fit", "Tool inputs (e.g. quiz answers, slider values) — to generate your personalised result"].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                        <p className="font-bold text-white mt-6 mb-2">Information collected automatically:</p>
                        <ul className="list-none space-y-2 ml-0">
                            {["IP address and general location (country/city)", "Browser type and device information", "Pages visited, time on page, referral source via Google Analytics"].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">3. How We Use Your Information</h2>
                        <ul className="list-none space-y-2">
                            {[
                                "To deliver your tool results and personalise our response based on your inputs",
                                "To follow up with you when your results indicate we may be able to help",
                                "To store your submission in our CRM (Notion) for outreach and pipeline management",
                                "To improve our tools, website, and content based on aggregated analytics",
                                "To send you relevant insights or offers if you opt in (you can opt out any time)",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-gray-500">We do not sell your data to third parties. We do not use your data for retargeting ads.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">4. Legal Basis for Processing (GDPR)</h2>
                        <p>If you are based in the EEA or UK, we process your data on the basis of:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {[
                                "Legitimate interest — to follow up with people who have expressed an interest in our services by using our tools",
                                "Consent — where you have explicitly opted in to communications",
                                "Contract — when we are providing services to you",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">5. Data Storage & Processors</h2>
                        <p>Your data may be processed by the following third-party services:</p>
                        <div className="mt-4 space-y-3">
                            {[
                                { name: "Notion", purpose: "CRM — stores your name, email, company, tool used, and result", location: "USA" },
                                { name: "Vercel", purpose: "Website hosting and serverless API routes", location: "Global edge network" },
                                { name: "Google Analytics", purpose: "Anonymous website usage metrics", location: "USA (data anonymised)" },
                            ].map(d => (
                                <div key={d.name} className="border border-white/10 rounded-xl p-4 bg-black/20">
                                    <p className="font-bold text-white text-sm">{d.name} <span className="text-gray-500 font-normal">· {d.location}</span></p>
                                    <p className="text-gray-400 text-xs mt-1">{d.purpose}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">6. Data Retention</h2>
                        <p>We retain your personal data for as long as needed to fulfil the purposes above or as required by law. If you request deletion, we will remove your data from our CRM within 30 days.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">7. Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {["Access the personal data we hold about you", "Request correction of inaccurate data", "Request deletion of your data ('right to be forgotten')", "Object to processing based on legitimate interest", "Request a portable copy of your data", "Withdraw consent at any time"].map(r => (
                                <li key={r} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{r}</li>
                            ))}
                        </ul>
                        <p className="mt-4">To exercise any of these rights, email us at <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">8. Cookies</h2>
                        <p>We use essential cookies for website functionality and analytical cookies (Google Analytics) to understand aggregate traffic patterns. We do not use advertising or tracking cookies. Your browser settings allow you to refuse cookies.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">9. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page will reflect any changes. By continuing to use our website, you accept the updated policy.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">10. Contact</h2>
                        <p>For any questions about this Privacy Policy or your personal data, contact:<br />
                            <strong className="text-white">Molina Rana</strong>, Moxie Digital<br />
                            <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
