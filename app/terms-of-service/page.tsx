import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Moxie Digital",
    description: "Terms of Service for Moxie Digital — the rules and conditions governing use of our website and services.",
    alternates: { canonical: "https://www.moxie-digital.com/terms-of-service" },
};

export default function TermsOfService() {
    const updated = "20 February 2026";

    return (
        <main className="min-h-screen bg-[#0d0b0b] text-white">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
                <div className="mb-12">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-3 block">Legal</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Terms of Service</h1>
                    <p className="text-gray-500 text-sm">Last updated: {updated}</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none space-y-10 text-gray-300">

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">1. Acceptance of Terms</h2>
                        <p>By accessing or using the website at <a href="https://www.moxie-digital.com" className="text-[#CCFF00] hover:text-white transition-colors">moxie-digital.com</a> (the &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site.</p>
                        <p className="mt-3">These Terms apply to all visitors and users of the Site, including those who use our free tools, read our blog, or engage with our services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">2. About Moxie Digital</h2>
                        <p>Moxie Digital is a B2B marketing consultancy operated by Molina Rana (&quot;we&quot;, &quot;us&quot;). We provide founder-led content strategy, B2B growth systems, and free marketing tools to B2B founders and challenger brands.</p>
                        <p className="mt-3">Contact: <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a></p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">3. Use of the Site and Free Tools</h2>
                        <p>You may use our Site and free tools for your personal or professional business purposes, provided that:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {[
                                "You use the Site only for lawful purposes",
                                "You do not copy, reproduce, or redistribute our tool outputs or content at scale without attribution",
                                "You do not attempt to reverse-engineer, scrape, or exploit our tools for commercial resale",
                                "You provide accurate information when using our email-gated tools",
                                "You do not engage in any activity that disrupts or interferes with the Site",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-sm text-gray-500">Our free tools provide general guidance and personalised recommendations based on your inputs. They are not a substitute for professional marketing, legal, or financial advice.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">4. Intellectual Property</h2>
                        <p>All content on this Site — including but not limited to blog articles, tool frameworks, scoring methodology, copy, branding, and design — is the intellectual property of Moxie Digital and protected by applicable copyright law.</p>
                        <p className="mt-3">You may share individual pieces of content with attribution (linking back to <a href="https://www.moxie-digital.com" className="text-[#CCFF00] hover:text-white transition-colors">moxie-digital.com</a>). You may not republish, resell, or commercially exploit our content without explicit written permission.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">5. Disclaimer of Warranties</h2>
                        <p>The Site and all tools are provided &quot;as is&quot; and &quot;as available&quot; without any warranties, express or implied. We make no guarantees that:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {[
                                "The Site will be uninterrupted, error-free, or secure at all times",
                                "Tool results or scores will produce specific business outcomes",
                                "Content on the Site is complete, current, or error-free",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                        <p className="mt-4">Results described in case studies and statistics on this Site reflect past performance and are not guarantees of future results. Your results will depend on your industry, ICP, content quality, and execution.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">6. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by applicable law, Moxie Digital and Molina Rana shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {[
                                "Your use of or inability to use the Site or tools",
                                "Any reliance on content, scores, or recommendations from our tools",
                                "Any unauthorised access to or alteration of your data",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">7. Third-Party Links</h2>
                        <p>Our Site may contain links to third-party websites (e.g., LinkedIn, Google Calendar, Notion). These links are provided for convenience only. We have no control over, and assume no responsibility for, the content or practices of any third-party websites.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">8. CRM and Follow-Up Communications</h2>
                        <p>When you submit your email via any tool on this Site, you consent to:</p>
                        <ul className="list-none space-y-2 mt-3">
                            {[
                                "Your information being stored in our CRM (Notion) for lead management purposes",
                                "Being contacted by Moxie Digital about your tool results or relevant services",
                                "Receiving occasional emails related to B2B marketing insights or offers",
                            ].map(i => (
                                <li key={i} className="flex gap-2"><span className="text-[#CCFF00] flex-shrink-0 mt-1">→</span>{i}</li>
                            ))}
                        </ul>
                        <p className="mt-4">You can opt out of communications at any time by emailing <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a> with &quot;Unsubscribe&quot; in the subject line.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">9. Governing Law</h2>
                        <p>These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">10. Changes to These Terms</h2>
                        <p>We reserve the right to update these Terms at any time. Changes will be effective upon posting to this page with an updated &quot;Last updated&quot; date. Your continued use of the Site constitutes acceptance of any updated Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4 border-gradient-b pb-2">11. Contact</h2>
                        <p>If you have any questions about these Terms, please contact:<br />
                            <strong className="text-white">Molina Rana</strong>, Moxie Digital<br />
                            <a href="mailto:molinarana05@gmail.com" className="text-[#CCFF00] hover:text-white transition-colors">molinarana05@gmail.com</a>
                        </p>
                    </section>

                </div>
            </div>
        </main>
    );
}
