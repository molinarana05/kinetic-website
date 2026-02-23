import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Molina Rana | Moxie Digital",
    description: "Award-winning B2B Brand & Growth Marketing Leader with 6+ years driving 348% conversion growth, 1.8M+ organic impressions, and $75K+ incremental revenue across SaaS, FinTech & Consulting.",
    alternates: { canonical: "https://www.moxie-digital.com/about" },
};

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const stats = [
    { value: "348%", label: "Conversion Growth", context: "Bajaj Finserv", logo: "/company-bajaj-finserv.png" },
    { value: "1.8M+", label: "Organic Impressions", context: "Aviso AI", logo: "/company-aviso-ai.png" },
    { value: "80%", label: "LinkedIn Follower Growth", context: "HighRadius (150K→270K)", logo: "/company-highradius.png" },
    { value: "$75K+", label: "Incremental Event Revenue", context: "Global B2B markets", logo: null },
    { value: "$36K", label: "Annual Ops Cost Savings", context: "Centralised email ops", logo: null },
    { value: "6+", label: "Years of B2B Experience", context: "SaaS · FinTech · Consulting", logo: null },
];

const LOGO_MAP: Record<string, string> = {
    "Aviso AI": "/company-aviso-ai.png",
    "HighRadius": "/company-highradius.png",
    "Grant Thornton Bharat": "/company-grant-thornton.png",
    "Bajaj Finserv": "/company-bajaj-finserv.png",
    "Paytm": "/company-paytm.png",
};

const timeline = [
    {
        company: "Aviso AI",
        role: "Manager – Brand, Community Marketing & Communications",
        period: "Aug '24 – Present",
        type: "B2B SaaS · Remote",
        bullets: [
            "Scaled company LinkedIn from 24K to 37K in <10 months; grew NA audience from 5% to 17%",
            "Built corporate CEO thought leadership and employee advocacy. 1.8M+ organic impressions, 3X higher CTR",
            "Ghostwrote for CEO: 5K to 16.8K followers using Agentic AI & RevTech thought leadership",
            "Generated 50+ qualified leads per event; improved inbound demos 38% QoQ via LinkedIn + paid campaigns",
            "Saved $20K+ in influencer costs via zero-cost strategic B2B collaborations",
        ],
    },
    {
        company: "HighRadius",
        role: "Manager – Social Media & Email Marketing",
        period: "Jun '23 – Aug '24",
        type: "B2B SaaS · Hyderabad",
        bullets: [
            "Scaled LinkedIn followers 80% from 150K to 270K in 9 months; maintained #1 competitor ranking",
            "Won the HighFlyer Award for audience profiling & performance-driven social strategy",
            "Expanded EMEA email database by 45%; improved campaign performance by 30%",
            "Lifted AB SALs by 7%; saved $36K annually via centralised email operations",
            "Drove 300K+ impressions and 120 webinar registrations via influencer-led #WildWestOfAI campaign",
        ],
    },
    {
        company: "Grant Thornton Bharat",
        role: "Assistant Manager – Marketing Communications",
        period: "Jul '22 – Jun '23",
        type: "B2B Consulting · New Delhi",
        bullets: [
            "Delivered 50% organic traffic growth and 10,000 daily users via SEO & SEM optimization",
            "Achieved 20% lead & SAL growth, 1.8% conversion rate, 15% marketing ops cost reduction",
            "Executed national campaigns with 297,523+ impressions, 50%+ open rates, 300+ attendees",
        ],
    },
    {
        company: "Bajaj Finserv",
        role: "Unit Manager – Web Business & Group Marketing",
        period: "Nov '21 – Jul '22",
        type: "B2B · Pune",
        bullets: [
            "Achieved 348% conversion growth via strategic keyword portfolio & performance collaboration",
            "Reduced ad spend 60% while increasing ROI 40% via PPC & affiliate optimization",
            "Managed content for 3,000+ app screens, improving engagement by 23% per GTM",
            "Awarded 'Emerging Star' for innovation and B2B web+app ecosystem leadership",
        ],
    },
    {
        company: "Paytm",
        role: "Team Lead – Content Marketing",
        period: "Jun '20 – Oct '21",
        type: "B2B · Noida",
        bullets: [
            "Improved page engagement by 66% through SEO audits",
            "Authored Top-3 ranked 'Consumer Behavior' e-book on Google & Bing",
            "Built influencer & brand partnerships with IRCTC, Medanta & TOI",
            "Improved user retention by 8% via lifecycle-aligned push notification strategy",
        ],
    },
];

const skills = [
    "B2B Brand Strategy",
    "Community & Employer Branding",
    "Executive & Thought Leadership Branding",
    "Demand Generation",
    "Marketing Automation & Lifecycle Management",
    "Account-Based Marketing (ABM)",
    "Funnel Optimization & Lead Nurturing",
    "Content Marketing Strategy",
    "SEO & SEM (On-Page & Off-Page)",
    "Growth & Performance Marketing",
    "Integrated Marketing Campaigns",
];

const techStack = [
    "HubSpot", "Pardot", "Salesforce SFMC", "Mailchimp", "Constant Contact",
    "Sprinklr", "Brandwatch", "LinkedIn Ads", "Dripify", "Google Analytics", "Power BI",
];

const certifications = [
    { name: "AI in Marketing", issuer: "University of Virginia, Darden School of Business" },
    { name: "Viral Marketing & Crafting Contagious Content", issuer: "University of Pennsylvania (CXL)" },
    { name: "Social Media Marketing", issuer: "HubSpot Academy" },
    { name: "SEO Foundations & Advanced SEO", issuer: "LinkedIn Learning" },
    { name: "UX Research – Journey Mapping", issuer: "LinkedIn Learning" },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4 block">Founder · Moxie Digital</span>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                                Molina<br />Rana
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">
                                <span className="text-white font-bold">Award-winning B2B Brand & Growth Marketing Leader</span> with 6+ years across SaaS, FinTech, and Consulting. Driving measurable pipeline, not vanity metrics.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Recognised with the <span className="text-[#CCFF00] font-bold">Emerging Star Award</span> (Bajaj) and the <span className="text-[#CCFF00] font-bold">HighFlyer Award</span> (HighRadius) for building B2B brand frameworks, audience intelligence models, and content ecosystems that convert.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                                    className="bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-3 rounded hover:bg-white hover:-translate-y-0.5 transition-all text-sm">
                                    Book a Strategy Call
                                </a>
                                <a href="https://www.linkedin.com/in/molina-rana/" target="_blank" rel="noopener noreferrer"
                                    className="border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-3 rounded hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all text-sm">
                                    LinkedIn →
                                </a>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            {/* Photo with glow frame */}
                            <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-[#CCFF00]/30 shadow-[0_0_60px_rgba(204,255,0,0.15)]">
                                <Image
                                    src="/molina-rana.jpg"
                                    alt="Molina Rana, Founder of Moxie Digital, B2B LinkedIn Content Marketing Agency and Growth Leader"
                                    fill
                                    className="object-cover object-top"
                                />
                                {/* Subtle overlay gradient at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0118]/60 to-transparent" />
                            </div>
                            {/* Neon accent dot */}
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-[#CCFF00] rounded-full shadow-[0_0_12px_#CCFF00]" />
                            <div className="absolute -bottom-4 -right-4 bg-black border border-[#CCFF00]/40 rounded-xl px-5 py-3">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Languages</p>
                                <p className="font-bold text-white text-sm">English · Hindi · Dutch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 border-gradient-t">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {stats.map((s) => (
                            <div key={s.value} className="border border-white/10 rounded-2xl p-6 bg-black/20">
                                <div className="text-4xl font-black text-[#CCFF00] mb-1">{s.value}</div>
                                <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                                {s.logo ? (
                                    <div className="relative h-5 mt-1" style={{ width: 80 }}>
                                        <Image
                                            src={s.logo}
                                            alt={`${s.context} - Moxie Digital B2B Marketing Success Story`}
                                            fill
                                            className="object-contain object-left"
                                            style={{ filter: "sepia(1) saturate(3) hue-rotate(5deg) brightness(0.9)", opacity: 0.65 }}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-xs font-mono">{s.context}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* USP */}
            <section className="py-16 px-6 border-gradient-t">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black tracking-tighter mb-3 uppercase">Why Moxie Digital</h2>
                    <div className="w-16 h-1 bg-[#CCFF00] mb-8" />
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-white/10 rounded-2xl p-7 bg-black/20">
                            <div className="text-2xl mb-3">🎯</div>
                            <h3 className="font-black text-white mb-2">360° Full-Funnel Operator</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Not siloed by function. Brand + ops + demand gen + content/SEO working as one system, not four separate agencies.</p>
                        </div>
                        <div className="border border-[#CCFF00]/30 rounded-2xl p-7 bg-[#CCFF00]/5">
                            <div className="text-2xl mb-3">⚡</div>
                            <h3 className="font-black text-white mb-2">Revenue-First, Not Vanity-First</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Every campaign is built to move MQLs, SALs, inbound demos, and pipeline velocity. Not follower counts.</p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-7 bg-black/20">
                            <div className="text-2xl mb-3">🛠️</div>
                            <h3 className="font-black text-white mb-2">Martech-Native</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">HubSpot, Pardot, SFMC, Sprinklr, Brandwatch, Power BI. Optimising every workflow to cut costs 30-60% while improving output.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Timeline */}
            <section className="py-16 px-6 border-gradient-t">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-black tracking-tighter mb-3 uppercase">Career Timeline</h2>
                    <div className="w-16 h-1 bg-[#CCFF00] mb-10" />
                    <div className="space-y-8">
                        {timeline.map((job, i) => (
                            <div key={i} className="border border-white/10 rounded-2xl p-8 bg-black/20 hover:border-white/20 transition-colors">
                                <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                                    <div>
                                        {/* Company logo + name */}
                                        <div className="flex items-center gap-3 mb-1">
                                            {LOGO_MAP[job.company] ? (
                                                <div className="relative flex-shrink-0" style={{ width: 90, height: 24 }}>
                                                    <Image
                                                        src={LOGO_MAP[job.company]}
                                                        alt={`${job.company} - Professional B2B Experience and Career Timeline for Molina Rana`}
                                                        fill
                                                        className="object-contain object-left"
                                                        style={{ filter: "sepia(1) saturate(2.5) hue-rotate(5deg) brightness(1.1)", opacity: 0.8 }}
                                                    />
                                                </div>
                                            ) : null}
                                            <h3 className="font-black text-white text-lg">{job.company}</h3>
                                        </div>
                                        <p className="text-[#CCFF00] font-bold text-sm">{job.role}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-gray-400 text-sm font-mono">{job.period}</p>
                                        <p className="text-gray-600 text-xs">{job.type}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {job.bullets.map((b, j) => (
                                        <li key={j} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                                            <span className="text-[#CCFF00] font-bold mt-0.5 flex-shrink-0">→</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills + Tech */}
            <section className="py-16 px-6 border-gradient-t">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-black tracking-tighter mb-3 uppercase">Core Competencies</h2>
                        <div className="w-12 h-1 bg-[#CCFF00] mb-6" />
                        <div className="flex flex-wrap gap-2">
                            {skills.map((s) => (
                                <span key={s} className="text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10 text-gray-300 bg-black/30">{s}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tighter mb-3 uppercase">Martech Stack</h2>
                        <div className="w-12 h-1 bg-[#CCFF00] mb-6" />
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((t) => (
                                <span key={t} className="text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-[#CCFF00]/20 text-[#CCFF00] bg-[#CCFF00]/5">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications + Education */}
            <section className="py-16 px-6 border-gradient-t">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-black tracking-tighter mb-3 uppercase">Certifications</h2>
                        <div className="w-12 h-1 bg-[#CCFF00] mb-6" />
                        <div className="space-y-3">
                            {certifications.map((c) => (
                                <div key={c.name} className="border border-white/10 rounded-xl p-4 bg-black/20">
                                    <p className="font-bold text-white text-sm">{c.name}</p>
                                    <p className="text-gray-500 text-xs mt-0.5">{c.issuer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black tracking-tighter mb-3 uppercase">Education</h2>
                        <div className="w-12 h-1 bg-[#CCFF00] mb-6" />
                        <div className="space-y-4">
                            <div className="border border-white/10 rounded-xl p-6 bg-black/20">
                                <p className="font-black text-white">M.A. in Organizational Psychology</p>
                                <p className="text-[#CCFF00] text-sm font-bold">IGNOU</p>
                                <p className="text-gray-500 text-xs">2024</p>
                            </div>
                            <div className="border border-white/10 rounded-xl p-6 bg-black/20">
                                <p className="font-black text-white">B.A. (Hons.) in History</p>
                                <p className="text-[#CCFF00] text-sm font-bold">University of Delhi</p>
                                <p className="text-gray-500 text-xs">2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 border-gradient-t">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4 block">Let&apos;s Work Together</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Ready to build <br />your pipeline engine?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        You get a 360 degree operator who has run brand, demand gen, content, and growth for SaaS brands doing real revenue. Not just posting content.
                    </p>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-10 py-5 rounded hover:bg-white hover:-translate-y-1 transition-all">
                        Book a Free Strategy Call →
                    </a>
                </div>
            </section>
        </main>
    );
}
