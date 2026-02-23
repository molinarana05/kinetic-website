import Link from "next/link";
import Image from "next/image";

const tools = [
    { href: "/tools/linkedin-profile-grader", label: "LinkedIn Profile Grader" },
    { href: "/tools/founder-brand-score", label: "Founder Brand Score" },
    { href: "/tools/linkedin-hook-generator", label: "Hook Generator" },
    { href: "/tools/content-idea-generator", label: "Content Idea Generator" },
    { href: "/tools/content-agency-quiz", label: "Agency Readiness Quiz" },
    { href: "/tools/founder-roi-calculator", label: "ROI Calculator" },
];

const pages = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Insights" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/services/b2b", label: "B2B Services" },
    { href: "/services/b2c", label: "B2C Services" },
];

const social = [
    { href: "https://www.linkedin.com/in/molina-rana/", label: "LinkedIn" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="py-16 border-gradient-t bg-black relative z-10">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Top grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">

                    {/* Brand */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <Link href="/" className="block w-32 h-10 mb-5 relative">
                            <Image src="/logo.png" alt="Moxie Digital - B2B Content Marketing and Founder-Led Growth Agency Logo" fill className="object-contain object-left" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-5">
                            Founder-led content engines for B2B challenger brands. Revenue-first. No fluff.
                        </p>
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-3">Contact</p>
                            <a href="mailto:molina@moxie-digital.com"
                                className="text-gray-300 hover:text-[#CCFF00] text-sm transition-colors">
                                molina@moxie-digital.com
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Pages</p>
                        <ul className="space-y-2">
                            {pages.map(l => (
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

                    {/* Social */}
                    <div>
                        <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">Social</p>
                        <ul className="space-y-3">
                            {social.map(s => (
                                <li key={s.label}>
                                    <a href={s.href} target={s.href !== "#" ? "_blank" : undefined}
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-[#CCFF00] text-sm transition-colors relative group/link inline-block">
                                        {s.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#CCFF00] transition-all duration-300 group-hover/link:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-gradient-t flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
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
