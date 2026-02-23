import { getSortedPostsData } from "../../lib/markdown";
import Link from "next/link";
import { NavbarDesktop } from "../components/NavbarDesktop";
import { Navbar } from "../components/Navbar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "The Moxie Journal | B2B Content Strategies",
    description: "Insights, teardowns, and frameworks for B2B founders building compounding content systems.",
    alternates: { canonical: "https://www.moxie-digital.com/blog" },
};

export default function BlogIndex() {
    const posts = getSortedPostsData() as any[];

    // Safety check since we might not have enough posts to fill the exact NYT grid perfectly
    const leadPost = posts[0];
    const leftColPosts = posts.slice(1, 3);
    const rightColPosts = posts.slice(3, 7);
    const remainingPosts = posts.slice(7);

    // Current date for the dateline
    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-[#CCFF00]/30 overflow-x-hidden">
            <div className="md:hidden">
                <Navbar />
            </div>
            <NavbarDesktop />

            {/* NYT Style Wrapper */}
            <div className="pt-28 pb-16 px-4 md:px-8 max-w-[1400px] mx-auto">

                {/* Masthead */}
                <div className="border-b-4 border-white pb-6 mb-8 text-center relative">
                    <div className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">{today}</div>

                    <h1 className="text-6xl md:text-8xl lg:text-[120px] font-serif font-black tracking-tighter leading-none text-white mb-6 transform scale-y-110">
                        The Moxie Journal
                    </h1>

                    <div className="flex flex-col md:flex-row justify-between items-center border-gradient-t border-gradient-b py-3 mt-8 gap-4 md:gap-0">
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-300">New Delhi / Global</div>
                        <div className="text-xs font-mono uppercase tracking-[0.3em] font-bold text-[#CCFF00]">AI + Human Content Strategy</div>
                        <div className="text-xs font-mono uppercase tracking-widest text-gray-300">Insights & Frameworks</div>
                    </div>
                </div>

                {/* Editorial Grid - Above the fold */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-gradient-b pb-16 mb-16">

                    {/* Left Column (2 Stories) */}
                    <div className="lg:col-span-3 flex flex-col gap-10 border-b lg:border-b-0 lg:border-r border-white/20 pb-10 lg:pb-0 lg:pr-8">
                        {leftColPosts.map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="group block overflow-hidden">
                                {post.image && (
                                    <div className="relative w-full aspect-video mb-4 overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                )}
                                <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white leading-tight mb-3 group-hover:text-[#CCFF00] transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {post.description}
                                </p>
                                <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-gray-500">
                                    <span>{post.date}</span>
                                    <span>·</span>
                                    <span className="text-[#CCFF00]">{post.readingTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Center Lead Story */}
                    <div className="lg:col-span-6 flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 pb-10 lg:pb-0 lg:pr-8">
                        {leadPost && (
                            <Link href={`/blog/${leadPost.id}`} className="group block">
                                <div className="mb-6 flex justify-center">
                                    <span className="text-xs font-black uppercase tracking-[0.2em] bg-white text-black px-3 py-1">
                                        Cover Story
                                    </span>
                                </div>
                                <h2 className="text-4xl lg:text-6xl font-serif font-black text-center text-white leading-[1.1] mb-6 group-hover:text-[#CCFF00] transition-colors">
                                    {leadPost.title}
                                </h2>
                                {leadPost.image && (
                                    <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/20">
                                        <Image src={leadPost.image} alt={leadPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
                                    </div>
                                )}
                                <div className="flex justify-center gap-4 mb-8">
                                    {leadPost.tags?.slice(0, 2).map((tag: string) => (
                                        <span key={tag} className="text-xs font-mono uppercase tracking-widest border border-white/30 px-2 py-1 text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-xl lg:text-2xl text-gray-300 font-serif leading-relaxed text-center mb-8 px-4 lg:px-12">
                                    {leadPost.description}
                                </p>
                                <div className="flex text-center justify-center items-center gap-4 text-sm uppercase tracking-widest font-mono text-gray-400 border-t border-gradient-b py-4">
                                    <span>By Molina Rana</span>
                                    <span>|</span>
                                    <span>{leadPost.date}</span>
                                    <span>|</span>
                                    <span className="text-[#CCFF00]">{leadPost.readingTime}</span>
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Right Column (Latest/Trending) */}
                    <div className="lg:col-span-3 flex flex-col lg:sticky lg:top-32 self-start">
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] border-b-2 border-white/40 pb-3 mb-6 flex items-center justify-between">
                            <span>Latest Additions</span>
                            <span className="text-[#CCFF00]">Trending</span>
                        </h3>
                        <div className="flex flex-col gap-6">
                            {rightColPosts.map((post, idx) => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="group block border-gradient-b pb-6 last:border-0 hover:bg-white/5 p-2 -mx-2 rounded transition-colors">
                                    <div className="flex gap-4">
                                        <span className="text-4xl font-serif font-bold text-white/20 group-hover:text-[#CCFF00]/50 transition-colors">
                                            {idx + 1}
                                        </span>
                                        <div>
                                            <h4 className="text-base font-bold text-white group-hover:text-[#CCFF00] leading-tight mb-2 transition-colors">
                                                {post.title}
                                            </h4>
                                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                                {post.date}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Section: The Archive / More Stories */}
                {remainingPosts.length > 0 && (
                    <div className="pt-4">
                        <div className="flex items-center justify-between border-b-2 border-white/40 pb-4 mb-10">
                            <h3 className="text-2xl font-serif font-black uppercase tracking-widest">More from the Archive</h3>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden md:block">
                                Strategies · Case Studies · Frameworks
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {remainingPosts.map((post) => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="group block border-gradient-t pt-6">
                                    <div className="mb-4">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CCFF00]">
                                            {post.tags?.[0] || 'Insight'}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-white leading-snug mb-3 group-hover:text-[#CCFF00] transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 line-clamp-3 mb-4 leading-relaxed font-serif">
                                        {post.description}
                                    </p>
                                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                                        {post.date}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer of Blog Index */}
                <div className="mt-24 pt-12 border-gradient-t text-center">
                    <h3 className="text-3xl font-serif font-black mb-6">Build your inbound engine.</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                        Join the founders receiving weekly insights on AEO, GEO, and zero-click search strategies.
                    </p>
                    <a
                        href="https://moxiedigital.beehiiv.com/subscribe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 text-sm hover:bg-white transition-colors rounded-sm"
                    >
                        Subscribe to the Newsletter
                    </a>
                </div>

            </div>
        </main>
    );
}
