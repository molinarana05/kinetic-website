import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Moxie Digital | Full-Stack Content Studio",
        template: "%s | Moxie Digital"
    },
    description: "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline.",
    keywords: ["AI Content Studio", "B2B Growth", "Content Repurposing", "AEO", "Answer Engine Optimization", "B2B SaaS Marketing", "LinkedIn Content System", "SEO"],
    authors: [{ name: "Molina Rana" }],
    creator: "Moxie Digital",
    publisher: "Moxie Digital",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: "Moxie Digital | Full-Stack Content Studio",
        description: "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline.",
        url: "https://www.moxie-digital.com/",
        siteName: "Moxie Digital",
        images: [
            {
                url: "https://www.moxie-digital.com/og-default.png",
                width: 1200,
                height: 630,
                alt: "Moxie Digital - Full-Stack Content Studio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Moxie Digital | Full-Stack Content Studio",
        description: "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline.",
        creator: "@MoxieDigital",
        images: ["https://www.moxie-digital.com/og-default.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'A7sB1TB4O4eQtO-IhWOKsGzhWXmAeD-XfUNY7TJQXrU',
    },
};

import Script from "next/script";

const MOXIE_SITE_JSONLD = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.moxie-digital.com/#organization",
            "name": "Moxie Digital",
            "description": "Moxie Digital is a full-stack content studio founded by Molina Rana, powered by AI precision and senior human strategy. We build eight distinct content engines including AEO, GEO, and Content Repurposing for B2B pipeline growth.",
            "url": "https://www.moxie-digital.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.moxie-digital.com/site-icon.png",
                "width": "512",
                "height": "512"
            },
            "image": "https://www.moxie-digital.com/og-default.png",
            "sameAs": [
                "https://www.linkedin.com/company/moxie-digital",
                "https://www.moxie-digital.com/"
            ]
        },
        {
            "@type": "Person",
            "@id": "https://www.moxie-digital.com/#founder",
            "name": "Molina Rana",
            "jobTitle": "Founder & B2B Growth Operator",
            "worksFor": { "@id": "https://www.moxie-digital.com/#organization" },
            "sameAs": [
                "https://www.linkedin.com/in/molina-rana/",
                "https://www.moxie-digital.com/"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://www.moxie-digital.com/#website",
            "url": "https://www.moxie-digital.com/",
            "name": "Moxie Digital",
            "publisher": { "@id": "https://www.moxie-digital.com/#organization" },
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.moxie-digital.com/blog?query={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://www.moxie-digital.com/#homepage",
            "url": "https://www.moxie-digital.com/",
            "name": "Moxie Digital | Full-Stack Content Studio",
            "isPartOf": { "@id": "https://www.moxie-digital.com/#website" },
            "about": { "@id": "https://www.moxie-digital.com/#founder" },
            "description": "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline."
        },
        {
            "@type": "Service",
            "@id": "https://www.moxie-digital.com/services/content-repurposing",
            "name": "Content Repurposing",
            "provider": { "@id": "https://www.moxie-digital.com/#organization" },
            "serviceType": "Content Marketing",
            "description": "Turn one interview into 30 days of content across LinkedIn, newsletters, blogs, and more."
        },
        {
            "@type": "Service",
            "@id": "https://www.moxie-digital.com/services/aeo",
            "name": "Answer Engine Optimization",
            "provider": { "@id": "https://www.moxie-digital.com/#organization" },
            "serviceType": "AI Search Optimization",
            "description": "Get your brand cited by Perplexity, ChatGPT, and Google AI Overviews."
        }
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-[#0a0118] text-[#e8e4df] antialiased overflow-x-hidden`}>
                <Script
                    id="jsonld-sitewide"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(MOXIE_SITE_JSONLD) }}
                />
                <Script
                    id="vtag-ai-js"
                    src="https://r2.leadsy.ai/tag.js"
                    data-pid="1hC3ODv9P3MFngroN"
                    data-version="062024"
                    strategy="afterInteractive"
                />
                {children}
                <Footer />
            </body>
        </html>
    );
}
