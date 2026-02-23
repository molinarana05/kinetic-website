import Link from "next/link";
import { NavbarDesktop } from "./NavbarDesktop";
import { Navbar } from "./Navbar";
import { Metadata } from "next";
import Script from "next/script";

interface ServiceFeature {
    icon: string;
    title: string;
    description: string;
}

interface ServicePageProps {
    meta: {
        title: string;
        description: string;
        canonical: string;
    };
    tag: string;
    headline: string;
    subheadline: string;
    description: string;
    definition?: string; // Explicit AEO definition block
    features: ServiceFeature[];
    deliverables: string[];
    outcome: string;
    faq: { q: string; a: string }[];
}

export function ServicePageTemplate({
    meta,
    tag,
    headline,
    subheadline,
    description,
    definition,
    features,
    deliverables,
    outcome,
    faq,
}: ServicePageProps) {
    const calendarUrl =
        "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz";

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": headline,
        "provider": {
            "@type": "Organization",
            "name": "Moxie Digital"
        },
        "description": description,
        "url": meta.canonical,
        "offers": {
            "@type": "Offer",
            "description": "B2B Content Marketing & Growth Engine Setup"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <Script
                id={`service-schema-${tag}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            {faq.length > 0 && (
                <Script
                    id={`faq-schema-${tag}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                        {tag}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none uppercase text-white mb-6">
                        {headline}
                    </h1>
                    <p className="text-xl md:text-2xl text-[#CCFF00] font-bold uppercase tracking-widest mb-8">
                        {subheadline}
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-8">
                        {description}
                    </p>

                    {definition && (
                        <div className="relative mb-12 max-w-2xl bg-white/5 border border-white/10 p-6 rounded-sm">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-[#CCFF00] mb-2">What is {headline}?</h2>
                            <p className="text-gray-200 text-base leading-relaxed">
                                {definition}
                            </p>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={calendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-10 py-4 rounded text-sm hover:bg-white hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]"
                        >
                            Book a Strategy Call →
                        </a>
                        <Link
                            href="/blog"
                            className="inline-block border border-white/20 text-white font-bold uppercase tracking-widest px-10 py-4 rounded text-sm hover:border-[#CCFF00] hover:text-[#CCFF00] transition-all"
                        >
                            Read the Blog
                        </Link>
                    </div>
                </div>
                {/* decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </section>

            {/* Features Grid */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
                            What&apos;s Included
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                            The Engine
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="group border border-white/5 bg-black/40 rounded-sm p-8 hover:border-[#CCFF00]/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{f.icon}</div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-3">
                                    {f.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16 bg-black/30 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-3 block">
                                What You Get
                            </span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-8">
                                Deliverables
                            </h2>
                            <ul className="space-y-4">
                                {deliverables.map((d, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] mt-2 shrink-0 shadow-[0_0_6px_#CCFF00]" />
                                        <span>{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="border border-[#CCFF00]/20 bg-[#CCFF00]/5 rounded-sm p-8">
                            <p className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4">
                                The Outcome
                            </p>
                            <p className="text-white text-xl font-bold leading-relaxed">
                                {outcome}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {faq.length > 0 && (
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white mb-12 text-center">
                            Common Questions
                        </h2>
                        <div className="space-y-8">
                            {faq.map((item, i) => (
                                <div key={i} className="border-b border-white/10 pb-8">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-16 md:py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-4 block">
                        Ready?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
                        Let&apos;s Build<br />The Engine
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                        Moxie Digital operates with a maximum of 2 active clients at a time. If you are serious about growth, book the call.
                    </p>
                    <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-12 py-5 rounded text-base hover:bg-white hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                    >
                        Book Your Strategy Call →
                    </a>
                </div>
            </section>
        </main>
    );
}
