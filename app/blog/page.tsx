import Link from "next/link";
import Image from "next/image";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { getSortedPostsData } from "../../lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights | Moxie Digital",
    description: "Marketing strategy, B2B growth, and founder-led brand building from Molina Rana.",
    alternates: { canonical: "https://www.moxie-digital.com/blog" },
};

// Curated, free Unsplash images matched to each article by slug
// All via images.unsplash.com — no API key needed, attribution via alt text
const COVER_IMAGES: Record<string, { url: string; credit: string }> = {
    "founder-led-marketing-saas-2026": {
        url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80",
        credit: "Campaign Creators on Unsplash",
    },
    "b2b-founders-linkedin-content": {
        url: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=900&q=80",
        credit: "LinkedIn via Unsplash",
    },
    "linkedin-growth-strategy-b2b": {
        url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=80",
        credit: "John Schnobrich on Unsplash",
    },
    "agency-vs-in-house-vs-founder-led": {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        credit: "Jason Goodman on Unsplash",
    },
    "b2b-branding-agency-vs-founder": {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
        credit: "Jake Nackos on Unsplash",
    },
    "brand-awareness-campaign-guide": {
        url: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
        credit: "Melanie Deziel on Unsplash",
    },
    "personal-branding-agency-guide": {
        url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=80",
        credit: "LinkedIn Sales Solutions on Unsplash",
    },
    "personal-branding-for-executives": {
        url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80",
        credit: "Annie Spratt on Unsplash",
    },
    "top-marketing-agencies-comparison": {
        url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
        credit: "Campaign Creators on Unsplash",
    },
    "what-does-a-branding-consultant-do": {
        url: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=900&q=80",
        credit: "You X Ventures on Unsplash",
    },
    "what-is-brand-strategy": {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
        credit: "Balázs Kétyi on Unsplash",
    },
};

const FALLBACK_IMG = "https://images.unsplash.com/photo-1552581234-26160f608093?w=900&q=80";

function formatDate(dateStr: string) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
    const posts = getSortedPostsData();
    if (!posts.length) {
        return (
            <main className="min-h-screen bg-[#0a0118] text-white flex items-center justify-center">
                <div className="md:hidden"><Navbar /></div>
                <NavbarDesktop />
                <p className="text-gray-600 uppercase tracking-widest text-xs">Coming Soon</p>
            </main>
        );
    }

    const [hero, ...rest] = posts;
    const heroImg = COVER_IMAGES[hero.id]?.url ?? FALLBACK_IMG;

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30">
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            {/* ── MASTHEAD ─────────────────────────────────────────────────── */}
            <div className="pt-28 pb-6 px-6 max-w-7xl mx-auto border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] mb-2 block">
                            Moxie Digital · Insights
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase text-white">
                            The&nbsp;<span className="text-[#CCFF00]">Feed</span>
                        </h1>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed italic">
                        Growth, amplification & founder-led brand strategy — from the trenches.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* ── HERO FEATURE ──────────────────────────────────────────── */}
                <Link href={`/blog/${hero.id}`} className="group block mb-16">
                    <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 hover:border-[#CCFF00]/40 transition-colors duration-300">
                        {/* Image */}
                        <div className="relative h-64 md:h-[420px] overflow-hidden">
                            <Image
                                src={heroImg}
                                alt={`${hero.title} - B2B Content Marketing and Founder-Led Growth Insights by Moxie Digital`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                        </div>
                        {/* Content */}
                        <div className="bg-black/60 p-8 md:p-12 flex flex-col justify-center">
                            {hero.tags?.[0] && (
                                <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-widest mb-4 inline-block">
                                    {hero.tags[0]}
                                </span>
                            )}
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-4 group-hover:text-[#CCFF00] transition-colors duration-300">
                                {hero.title}
                            </h2>
                            {hero.description && (
                                <p className="text-gray-400 text-base leading-relaxed mb-6">
                                    {hero.description}
                                </p>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-mono text-xs">{formatDate(hero.date)}</span>
                                <span className="text-[#CCFF00] text-sm font-bold group-hover:translate-x-1 transition-transform duration-200">
                                    Read →
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* ── SECTION DIVIDER ───────────────────────────────────────── */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-0.5 bg-[#CCFF00]" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">Latest Articles</span>
                    <div className="flex-1 h-px bg-white/5" />
                </div>

                {/* ── ARTICLE GRID ──────────────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rest.map((post) => {
                        const img = COVER_IMAGES[post.id]?.url ?? FALLBACK_IMG;
                        return (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group block"
                            >
                                <article className="h-full flex flex-col rounded-xl overflow-hidden border border-white/10 bg-black/30 hover:border-[#CCFF00]/40 transition-colors duration-300 hover:-translate-y-1 transition-transform">
                                    {/* Card image */}
                                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                                        <Image
                                            src={img}
                                            alt={`${post.title} - B2B Marketing Article by Moxie Digital`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        {/* Tag chip on image */}
                                        {post.tags?.[0] && (
                                            <span className="absolute top-3 left-3 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                                                {post.tags[0]}
                                            </span>
                                        )}
                                    </div>
                                    {/* Card content */}
                                    <div className="flex flex-col flex-1 p-5">
                                        <span className="text-gray-600 font-mono text-[10px] mb-2 block">
                                            {formatDate(post.date)}
                                        </span>
                                        <h3 className="text-lg font-black tracking-tight leading-snug mb-3 group-hover:text-[#CCFF00] transition-colors duration-300 line-clamp-3">
                                            {post.title}
                                        </h3>
                                        {post.description && (
                                            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                                                {post.description}
                                            </p>
                                        )}
                                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                            <div className="flex gap-1 flex-wrap">
                                                {post.tags?.slice(1, 2).map((t) => (
                                                    <span key={t} className="text-[9px] text-gray-600 uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <span className="text-[#CCFF00] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                Read →
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>

                {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
                <div className="mt-20 pt-12 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm mb-6">
                        Want these insights in your inbox?
                    </p>
                    <a
                        href="https://www.linkedin.com/in/molina-rana/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-3 rounded text-sm hover:bg-white hover:-translate-y-0.5 transition-all"
                    >
                        Follow on LinkedIn →
                    </a>
                </div>
            </div>
        </main>
    );
}
