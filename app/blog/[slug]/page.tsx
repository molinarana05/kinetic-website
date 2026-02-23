import { getPostData, getAllPostIds } from '../../../lib/markdown';
import { notFound } from 'next/navigation';
import { NavbarDesktop } from "../../components/NavbarDesktop";
import { Navbar } from "../../components/Navbar";
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Script from 'next/script';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const postData = await getPostData(params.slug);

    if (!postData) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${postData.title} | Moxie Digital`,
        description: postData.description || "Read the latest insights from Moxie Digital.",
        openGraph: {
            title: `${postData.title} | Moxie Digital`,
            description: postData.description || "Read the latest insights from Moxie Digital.",
            type: 'article',
            publishedTime: postData.date,
            url: `https://www.moxie-digital.com/blog/${params.slug}`,
            authors: ['Molina Rana'],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${postData.title} | Moxie Digital`,
            description: postData.description || "Read the latest insights from Moxie Digital.",
        }
    };
}

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        slug: path.params.slug,
    }));
}

export default async function BlogPost({ params }: Props) {
    const postData = await getPostData(params.slug);

    if (!postData) {
        notFound();
    }

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": postData!.title,
        "description": postData!.description || "",
        "datePublished": postData!.date,
        "dateModified": postData!.date,
        "author": {
            "@type": "Person",
            "name": (postData as any).author || "Molina Rana",
            "@id": "https://www.moxie-digital.com/#founder",
            "url": "https://www.linkedin.com/in/molina-rana/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Moxie Digital",
            "@id": "https://www.moxie-digital.com/#organization",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.moxie-digital.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.moxie-digital.com/blog/${params.slug}`
        },
        "url": `https://www.moxie-digital.com/blog/${params.slug}`,
        "image": "https://www.moxie-digital.com/og-default.png",
        "isPartOf": {
            "@type": "Blog",
            "@id": "https://www.moxie-digital.com/blog",
            "name": "Moxie Digital | The Feed",
            "publisher": { "@id": "https://www.moxie-digital.com/#organization" }
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0118] text-white selection:bg-neon/30 pb-24">
            <Script
                id={`jsonld-article-${params.slug}`}
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <div className="md:hidden"><Navbar /></div>
            <NavbarDesktop />

            <article className="pt-32 px-6 max-w-3xl mx-auto">
                <Link href="/blog" className="inline-flex items-center gap-2 text-[#CCFF00] hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
                    <ArrowLeft size={16} /> Back to Feed
                </Link>

                <header className="mb-16 border-gradient-b pb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter text-white">
                        {postData!.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-gray-400">
                        <time className="font-mono text-[#CCFF00]">{postData!.date}</time>
                        <div className="flex items-center gap-2 text-sm uppercase tracking-widest">
                            <span>By {(postData as any).author || 'Molina Rana'}</span>
                        </div>
                    </div>
                </header>

                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-h2:text-white prose-h2:text-3xl prose-h3:text-2xl prose-a:text-[#CCFF00] hover:prose-a:text-white prose-a:transition-colors prose-strong:text-white prose-strong:font-bold prose-img:rounded-xl prose-img:border prose-img:border-white/10"
                    dangerouslySetInnerHTML={{ __html: postData!.contentHtml }}
                />
            </article>

            {/* Author Bio — E-E-A-T signal for Google */}
            <div className="max-w-3xl mx-auto px-6 mt-16">
                <div className="border border-white/10 rounded-2xl p-8 bg-black/30 flex flex-col sm:flex-row items-start gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-full bg-[#CCFF00]/20 border-2 border-[#CCFF00] flex items-center justify-center text-[#CCFF00] font-black text-2xl select-none">
                        {((postData as any).author || 'Molina Rana').split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                            <span className="font-black text-white text-lg">{(postData as any).author || 'Molina Rana'}</span>
                            <span className="text-xs uppercase tracking-widest text-[#CCFF00] font-mono">{(postData as any).author ? 'Guest Author' : 'Founder · Moxie Digital'}</span>
                        </div>
                        {!(postData as any).author && (
                            <>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 px-2 py-0.5 rounded-full">🏆 Emerging Star Award</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30 px-2 py-0.5 rounded-full">✦ HighFlyer Award</span>
                                    <span className="text-[10px] uppercase tracking-widest font-bold bg-white/5 text-gray-400 border border-white/10 px-2 py-0.5 rounded-full">6+ Years · SaaS · FinTech · Consulting</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                                    Award-winning B2B Brand &amp; Growth Marketing Leader. Built and scaled LinkedIn channels at Aviso AI (24K→37K), HighRadius (150K→270K, 80% growth), and driven 1.8M+ organic impressions and 38% QoQ inbound demo growth. Previously at Paytm, Bajaj Finserv, and Grant Thornton.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/molina-rana/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#CCFF00] hover:text-white transition-colors"
                                >
                                    <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                    Connect on LinkedIn
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-3xl mx-auto px-6 mt-10 pb-24">
                <div className="bg-black/40 border border-[#CCFF00]/30 p-10 rounded-2xl text-center">
                    <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter">Ready to build your engine?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Skip the generic agency retainers. Let's build a founder-led pipeline that actually pulls your ideal buyers inbound.</p>
                    <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3L4_zCLswgoxBhyScpqolDXObrnSfhFLh-Kh2Nw68WXVrUpTlD6hPAXhCC0wVMtQ56B2lfDoPz" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#CCFF00] text-black font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white hover:-translate-y-1 transition-all">
                        Book a Strategy Call
                    </a>
                </div>
            </div>
        </main>
    );
}
