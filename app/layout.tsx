import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Moxie Digital | One Month of Content in One Hour for Founders",
        template: "%s | Moxie Digital"
    },
    description: "Stop wasting time on content creation. Moxie Digital turns a one-hour interview into 30 days of high-converting B2B LinkedIn content. Scale your brand today.",
    keywords: ["Founder-Led Marketing", "B2B Growth", "Revenue-First Content Strategy", "B2B SaaS Marketing", "LinkedIn Content System", "GTM Strategy"],
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
        title: "Moxie Digital | One Month of Content in One Hour for Founders",
        description: "Stop wasting time on content creation. Moxie Digital turns a one-hour interview into 30 days of high-converting B2B LinkedIn content. Scale your brand today.",
        url: "https://www.moxie-digital.com/",
        siteName: "Moxie Digital",
        images: [
            {
                url: "https://www.moxie-digital.com/og-default.png",
                width: 1200,
                height: 630,
                alt: "Moxie Digital - Founder-Led Marketing",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Moxie Digital | One Month of Content in One Hour for Founders",
        description: "Stop wasting time on content creation. Moxie Digital turns a one-hour interview into 30 days of high-converting B2B LinkedIn content. Scale your brand today.",
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
            "name": "Moxie Digital | One Month of Content in One Hour for Founders",
            "isPartOf": { "@id": "https://www.moxie-digital.com/#website" },
            "about": { "@id": "https://www.moxie-digital.com/#founder" },
            "description": "Stop wasting time on content creation. Moxie Digital turns a one-hour interview into 30 days of high-converting B2B LinkedIn content. Scale your brand today."
        },
        {
            "@type": "Service",
            "@id": "https://www.moxie-digital.com/services/b2b",
            "name": "B2B Systems",
            "provider": { "@id": "https://www.moxie-digital.com/#organization" },
            "serviceType": "Marketing Automation & Growth Systems",
            "description": "Complex sales cycles simplified into predictable growth engines."
        },
        {
            "@type": "Service",
            "@id": "https://www.moxie-digital.com/services/b2c",
            "name": "B2C Systems",
            "provider": { "@id": "https://www.moxie-digital.com/#organization" },
            "serviceType": "Consumer Acquisition & Brand Amplification",
            "description": "Customer acquisition scaled through resonant brand storytelling."
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
            <body className={`${inter.className} bg-[#0a0118] text-white antialiased overflow-x-hidden`}>
                <Script
                    id="jsonld-sitewide"
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(MOXIE_SITE_JSONLD) }}
                />
                {children}
                <Footer />
            </body>
        </html>
    );
}
