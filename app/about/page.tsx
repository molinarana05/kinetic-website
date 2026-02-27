import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About Us | Moxie Digital",
    description: "Meet the founders of Moxie Digital: Molina Rana (Brand & Growth Marketing) and Anikesh Gaurav (SEO & AEO Specialist). Building revenue-first content systems.",
    alternates: { canonical: "https://www.moxie-digital.com/about" },
};

const BOOKING_URL = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

const LOGO_MAP: Record<string, string> = {
    "Aviso AI": "/company-aviso-ai.png",
    "HighRadius": "/company-highradius.png",
    "Highradius": "/company-highradius.png",
    "Grant Thornton Bharat": "/company-grant-thornton.png",
    "Bajaj Finserv": "/company-bajaj-finserv.png",
    "Paytm": "/company-paytm.png",
};

const molinaData = {
    stats: [
        { value: "348%", label: "Conversion Growth", context: "Bajaj Finserv", logo: "/company-bajaj-finserv.png" },
        { value: "1.8M+", label: "Organic Impressions", context: "Aviso AI", logo: "/company-aviso-ai.png" },
        { value: "80%", label: "LinkedIn Follower Growth", context: "HighRadius (150K→270K)", logo: "/company-highradius.png" },
        { value: "$75K+", label: "Incremental Event Revenue", context: "Global B2B markets", logo: null },
        { value: "$36K", label: "Annual Ops Cost Savings", context: "Centralised email ops", logo: null },
        { value: "6+", label: "Years of B2B Experience", context: "SaaS · FinTech · Consulting", logo: null },
    ],
    timeline: [
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
    ],
    skills: [
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
    ],
    techStack: [
        "HubSpot", "Pardot", "Salesforce SFMC", "Mailchimp", "Constant Contact",
        "Sprinklr", "Brandwatch", "LinkedIn Ads", "Dripify", "Google Analytics", "Power BI",
    ],
    certifications: [
        { name: "AI in Marketing", issuer: "University of Virginia, Darden School of Business" },
        { name: "Viral Marketing & Crafting Contagious Content", issuer: "University of Pennsylvania (CXL)" },
        { name: "Social Media Marketing", issuer: "HubSpot Academy" },
        { name: "SEO Foundations & Advanced SEO", issuer: "LinkedIn Learning" },
        { name: "UX Research – Journey Mapping", issuer: "LinkedIn Learning" },
    ],
    education: [
        { degree: "M.A. in Organizational Psychology", uni: "IGNOU", year: "2024" },
        { degree: "B.A. (Hons.) in History", uni: "University of Delhi", year: "2019" },
    ]
};

const anikeshData = {
    stats: [
        { value: "Top-10", label: "Search Rankings", context: "Competitive Keywords", logo: null },
        { value: "Measurable", label: "Organic Growth", context: "SaaS & Tech Brands", logo: null },
        { value: "Lifecycle", label: "Email Frameworks", context: "Conversion Optimization", logo: null },
        { value: "Actionable", label: "Growth Systems", context: "Predictable Outcomes", logo: null },
    ],
    timeline: [
        {
            company: "Aviso AI",
            role: "Organic Growth and SEO Manager",
            period: "2025 – Present",
            type: "B2B SaaS",
            bullets: [
                "Driving measurable organic growth and answer engine optimization (AEO)",
                "Building predictable organic growth systems that move the needle",
            ],
        },
        {
            company: "Highradius",
            role: "Technical SEO Specialist",
            period: "2024 – 2025",
            type: "B2B SaaS",
            bullets: [
                "Led technical SEO and analytics initiatives to boost discoverability",
                "Secured top-10 search rankings for competitive keywords",
            ],
        },
        {
            company: "Highradius",
            role: "EFTA",
            period: "2022 – 2024",
            type: "B2B SaaS",
            bullets: [
                "Spearheaded email campaign management with targeted prospecting emails",
                "Developed nurturing automation and driven outbound lead generation",
            ],
        },
    ],
    skills: [
        "Technical SEO & Audits",
        "Answer Engine Optimization (AEO)",
        "Site Architecture & Migrations",
        "Schema & Structured Data",
        "Topic Cluster Strategy",
        "Keyword Research & Intent Mapping",
        "Lifecycle Email Marketing",
        "Deliverability Optimization",
        "Analytics Implementation",
        "Data-Driven Growth",
    ],
    techStack: [
        "Semrush",
        "Ahrefs",
        "Screaming Frog",
        "SurferSEO",
        "DeepCrawl",
        "GA4",
        "Looker Studio",
        "Google Search Console",
        "Notion Workflows",
    ],
    certifications: [],
    education: []
};


function ProfileSection({ name, title, bio, image, isReversed, linkedin, imageClassName = "object-cover object-top" }: { name: string, title: string, bio: React.ReactNode, image: string, isReversed?: boolean, linkedin: string, imageClassName?: string }) {
    return (
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
            <div className={isReversed ? 'md:col-start-2' : ''}>
                <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4 block">{title}</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                    {name.split(' ').map((n, i) => <span key={i}>{n}<br /></span>)}
                </h2>
                <div className="text-gray-300 text-lg leading-relaxed mb-8 gap-4 flex flex-col">
                    {bio}
                </div>
                <div className="flex gap-4 flex-wrap">
                    <a href={linkedin} target="_blank" rel="noopener noreferrer"
                        className="border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-3 rounded hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all text-sm">
                        LinkedIn →
                    </a>
                </div>
            </div>
            <div className={`relative flex justify-center ${isReversed ? 'md:col-start-1' : ''}`}>
                <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-[#CCFF00]/30 shadow-[0_0_60px_rgba(204,255,0,0.15)]">
                    <Image
                        src={image}
                        alt={`${name}, ${title} at Moxie Digital`}
                        fill
                        className={imageClassName}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0118]/60 to-transparent" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-[#CCFF00] rounded-full shadow-[0_0_12px_#CCFF00]" />
            </div>
        </div>
    )
}

function DataSection({ label, data }: { label: string, data: any }) {
    return (
        <div className="space-y-16">
            {/* Stats */}
            {data.stats.length > 0 && (
                <div>
                    <h3 className="text-xl font-black text-white mb-6 uppercase border-b border-white/10 pb-2">{label} Highlights</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {data.stats.map((s: any) => (
                            <div key={s.value} className="border border-white/10 rounded-xl p-5 bg-black/20">
                                <div className="text-3xl font-black text-[#CCFF00] mb-1">{s.value}</div>
                                <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                                {s.logo ? (
                                    <div className="relative h-4 mt-1" style={{ width: 60 }}>
                                        <Image
                                            src={s.logo}
                                            alt={s.context}
                                            fill
                                            className="object-contain object-left"
                                            style={{ filter: "sepia(1) saturate(3) hue-rotate(5deg) brightness(0.9)", opacity: 0.65 }}
                                        />
                                    </div>
                                ) : (
                                    <div className="text-gray-600 text-[10px] font-mono">{s.context}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Career Timeline */}
            {data.timeline.length > 0 && (
                <div>
                    <h3 className="text-xl font-black text-white mb-6 uppercase border-b border-white/10 pb-2">{label} Experience</h3>
                    <div className="space-y-6">
                        {data.timeline.map((job: any, i: number) => (
                            <div key={i} className="border border-white/10 rounded-xl p-6 bg-black/20 hover:border-white/20 transition-colors">
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center gap-3">
                                        {LOGO_MAP[job.company] ? (
                                            <div className="relative flex-shrink-0" style={{ width: 70, height: 20 }}>
                                                <Image src={LOGO_MAP[job.company]} alt={job.company} fill className="object-contain object-left" style={{ filter: "sepia(1) saturate(2.5) hue-rotate(5deg) brightness(1.1)", opacity: 0.8 }} />
                                            </div>
                                        ) : null}
                                        <h4 className="font-black text-white text-base">{job.company}</h4>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 flex-wrap">
                                        <p className="text-[#CCFF00] font-bold text-sm">{job.role}</p>
                                        <p className="text-gray-400 text-xs font-mono">{job.period}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    {job.bullets.map((b: string, j: number) => (
                                        <li key={j} className="flex gap-2 text-gray-300 text-xs leading-relaxed">
                                            <span className="text-[#CCFF00] font-bold mt-0.5 flex-shrink-0">→</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills & Tech */}
            <div>
                <h3 className="text-xl font-black text-white mb-6 uppercase border-b border-white/10 pb-2">{label} Arsenal</h3>
                <div className="mb-6">
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest font-bold">Core Competencies</p>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((s: string) => (
                            <span key={s} className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border border-white/10 text-gray-300 bg-black/30">{s}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest font-bold">Martech / Tool Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {data.techStack.map((t: string) => (
                            <span key={t} className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border border-[#CCFF00]/20 text-[#CCFF00] bg-[#CCFF00]/5">{t}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Education/Certs */}
            {(data.certifications?.length > 0 || data.education?.length > 0) && (
                <div>
                    <h3 className="text-xl font-black text-white mb-6 uppercase border-b border-white/10 pb-2">{label} Background</h3>
                    <div className="space-y-4">
                        {data.certifications?.map((c: any) => (
                            <div key={c.name} className="border border-white/10 rounded-xl p-4 bg-black/20">
                                <p className="font-bold text-white text-sm">{c.name}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{c.issuer}</p>
                            </div>
                        ))}
                        {data.education?.map((e: any) => (
                            <div key={e.degree} className="border border-white/10 rounded-xl p-4 bg-black/20">
                                <p className="font-bold text-white text-sm">{e.degree}</p>
                                <p className="text-[#CCFF00] text-xs font-bold mt-0.5">{e.uni} <span className="text-gray-500 font-normal ml-2">{e.year}</span></p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0a0118] text-white">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto text-center mb-20">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">The Operators</span>
                    <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter mb-6 leading-none uppercase">
                        The Brand &<br />The Search
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        We are two senior operators running your content engine. You get <span className="text-[#CCFF00] font-bold">award-winning brand strategy</span> fused with <span className="text-[#CCFF00] font-bold">technical SEO & AEO expertise</span> to build systems that convert.
                    </p>
                    <div className="mt-8 flex justify-center gap-4 flex-wrap">
                        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                            className="bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white hover:-translate-y-0.5 transition-all text-sm shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                            Book a Strategy Call
                        </a>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
                    <ProfileSection
                        name="Molina Rana"
                        title="Brand & Growth Leader · Co-Founder"
                        bio={
                            <>
                                <p><span className="text-white font-bold">Award-winning B2B Brand & Growth Marketing Leader</span> with 6+ years across SaaS, FinTech, and Consulting. Driving measurable pipeline, not vanity metrics.</p>
                                <p className="text-gray-400 text-sm">Recognised with the <span className="text-[#CCFF00]">Emerging Star Award</span> (Bajaj) and the <span className="text-[#CCFF00]">HighFlyer Award</span> (HighRadius) for building B2B brand frameworks, audience intelligence models, and content ecosystems that convert.</p>
                            </>
                        }
                        image="/molina-rana.jpg"
                        linkedin="https://www.linkedin.com/in/molina-rana/"
                    />

                    <ProfileSection
                        name="Anikesh Gaurav"
                        title="SEO & AEO Lead · Co-Founder"
                        bio={
                            <>
                                <p><span className="text-white font-bold">Organic marketing specialist</span> focused on SEO, AEO, email marketing, and growth analytics.</p>
                                <p className="text-gray-400 text-sm">Helping B2B and SaaS brands improve search visibility, optimize content performance, and accelerate organic lead generation using structured data and measurable frameworks.</p>
                            </>
                        }
                        image="/anikesh-gaurav.jpg"
                        isReversed={true}
                        linkedin="https://www.linkedin.com/in/anikesh-gaurav/"
                    />
                </div>
            </section>

            {/* USP */}
            <section className="py-20 px-6 border-gradient-t bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Why Moxie Digital</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Our dual-expertise approach means your brand message actually reaches the people searching for it.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-white/10 rounded-2xl p-7 bg-black/40">
                            <div className="text-2xl mb-3">🎯</div>
                            <h3 className="font-black text-white mb-2">360° Full-Funnel Operator</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Not siloed by function. Brand + ops + demand gen + content/SEO working as one system, not four separate agencies.</p>
                        </div>
                        <div className="border border-[#CCFF00]/30 rounded-2xl p-7 bg-[#CCFF00]/5 ring-1 ring-[#CCFF00]/10 shadow-[0_0_30px_rgba(204,255,0,0.05)]">
                            <div className="text-2xl mb-3">⚡</div>
                            <h3 className="font-black text-white mb-2">Revenue-First, Not Vanity-First</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">Every campaign is built to move MQLs, SALs, inbound demos, and pipeline velocity. Not follower counts.</p>
                        </div>
                        <div className="border border-white/10 rounded-2xl p-7 bg-black/40">
                            <div className="text-2xl mb-3">🛠️</div>
                            <h3 className="font-black text-white mb-2">Martech-Native</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">HubSpot, Pardot, SFMC, Sprinklr, GA4, Looker Studio. Optimising every workflow to cut costs 30-60% while improving output.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Deep Dive Profiles Grid */}
            <section className="py-24 px-6 border-gradient-t">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">The Resumes</h2>
                        <p className="text-gray-400">The receipts that back the results.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Molina Column */}
                        <div className="bg-black/20 rounded-3xl p-8 border border-white/5">
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#CCFF00] shrink-0">
                                    <Image src="/molina-rana.jpg" alt="Molina" width={64} height={64} className="object-cover h-full w-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Molina Rana</h3>
                                    <p className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mt-1">Brand & Growth</p>
                                </div>
                            </div>
                            <DataSection label="Molina's" data={molinaData} />
                        </div>

                        {/* Anikesh Column */}
                        <div className="bg-black/20 rounded-3xl p-8 border border-white/5">
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#CCFF00] shrink-0">
                                    <Image src="/anikesh-gaurav.jpg" alt="Anikesh" width={64} height={64} className="object-cover h-full w-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight">Anikesh Gaurav</h3>
                                    <p className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mt-1">SEO & AEO Lead</p>
                                </div>
                            </div>
                            <DataSection label="Anikesh's" data={anikeshData} />
                        </div>
                    </div>
                </div>
            </section>



            {/* CTA */}
            <section className="py-24 px-6 border-gradient-t bg-black/40">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4 block">Let&apos;s Work Together</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Ready to build <br />your pipeline engine?</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                        You get two highly specialized operators who have run brand, demand gen, content, and growth for SaaS brands doing real revenue.
                    </p>
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-10 py-5 rounded hover:bg-white hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                        Book a Free Strategy Call →
                    </a>
                </div>
            </section>
        </main>
    );
}
