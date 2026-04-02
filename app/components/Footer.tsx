import Link from "next/link";
import Image from "next/image";

const services = [
    { href: "/services/b2b-seo", label: "B2B SEO Agency India" },
    { href: "/services/seo-agency-for-saas", label: "SEO Agency for SaaS" },
    { href: "/services/content-marketing-india", label: "Content Marketing India" },
    { href: "/services/linkedin-ghostwriting", label: "LinkedIn Ghostwriting" },
    { href: "/services/content-repurposing", label: "Content Repurposing" },
    { href: "/services/aeo", label: "Answer Engine Optimization" },
    { href: "/services/geo", label: "Generative Engine Optimization" },
    { href: "/services/ai-agents", label: "AI Marketing Agents" },
    { href: "/services/newsletters", label: "Newsletter Strategy" },
];

const cities = [
    { href: "/services/content-marketing-bangalore", label: "Bangalore" },
    { href: "/services/content-marketing-mumbai", label: "Mumbai" },
    { href: "/services/content-marketing-delhi", label: "Delhi / NCR" },
    { href: "/services/content-marketing-hyderabad", label: "Hyderabad" },
];

const tools = [
    { href: "/tools/linkedin-hook-generator", label: "LinkedIn Hook Generator" },
    { href: "/tools/founder-brand-score", label: "Founder Brand Score" },
    { href: "/tools/linkedin-profile-grader", label: "LinkedIn Profile Grader" },
    { href: "/tools/content-idea-generator", label: "Content Idea Generator" },
    { href: "/tools/content-agency-quiz", label: "Agency Readiness Quiz" },
    { href: "/tools/founder-roi-calculator", label: "ROI Calculator" },
];

const social = [
    { href: "https://www.linkedin.com/in/molina-rana/", label: "LinkedIn" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="py-16 border-t border-white/5 bg-black relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Top grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10 mb-12">

                    {/* Brand — spans 2 cols */}
                    <div className="sm:col-span-2 md:col-span-2">
                        <Link href="/" className="block w-36 h-10 mb-5 relative">
                            <Image src="/logo.png" alt="Moxie Digital - B2B Content Marketing and Founder-Led Growth Agency Logo" fill className="object-contain object-left" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
                            Founder-led content engines for B2B challenger brands. Revenue-first. No fluff.
                        </p>
                        <div className="mb-5">
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Contact</p>
                            <a href="mailto:molina@moxie-digital.com"
                                className="text-gray-300 hover:text-[#CCFF00] text-sm transition-colors">
                                molina@moxie-digital.com
                            </a>
                        </div>
                        <div className="flex gap-4">
                            {social.map(s => (
                                <a key={s.label} href={s.href} target={s.href !== "#" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-[#CCFF00] text-xs uppercase tracking-widest transition-colors">
                                    {s.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Services</p>
                        <ul className="space-y-2">
                            {services.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* By City */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">By City</p>
                        <ul className="space-y-2 mb-6">
                            {cities.map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Quick Links</p>
                        <ul className="space-y-2">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/blog", label: "Insights" },
                                { href: "/about", label: "About" },
                                { href: "/#faq", label: "FAQ" },
                            ].map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Free Tools */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Free Tools</p>
                        <ul className="space-y-2">
                            {tools.map(t => (
                                <li key={t.href}>
                                    <Link href={t.href} className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors">
                                        {t.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
                    <span>© {new Date().getFullYear()} Moxie Digital. All rights reserved.</span>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-[#CCFF00] transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-[#CCFF00] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
