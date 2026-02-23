import { Metadata } from "next";
import HomeClient from "./page.client";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Moxie Digital | Full-Stack Content Studio",
    description: "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline.",
    openGraph: {
        title: "Moxie Digital | Full-Stack Content Studio",
        description: "A full-stack content studio powered by AI precision and senior human strategy. Eight engines. One system. Compounding pipeline.",
        url: "https://www.moxie-digital.com/",
    },
    alternates: {
        canonical: "https://www.moxie-digital.com/",
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Moxie Digital?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Moxie Digital is a full-stack content studio powered by AI precision and senior human strategy. We build eight distinct content engines into a single compounding system that drives B2B pipeline."
            }
        },
        {
            "@type": "Question",
            "name": "What is your AI + Human approach?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI creates the speed, and humans bring the strategy, taste, and truth. We use autonomous AI agents to research, draft, and optimize at scale, while senior strategists provide the editorial judgment and industry expertise."
            }
        },
        {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer eight core engines: Content Repurposing, SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), LinkedIn Branding, Newsletters, Email Marketing, and custom AI Agents."
            }
        },
        {
            "@type": "Question",
            "name": "What is Answer Engine Optimization (AEO)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AEO is the practice of optimizing your website and content so that AI-powered answer engines (like Perplexity, ChatGPT, and Google AI Overviews) cite your brand as a trusted source when users ask relevant questions."
            }
        },
        {
            "@type": "Question",
            "name": "What is the time commitment required from me?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For our flagship Content Repurposing engine, it is just one 60-minute interview per month. We extract your insights and turn that single hour into 30 days of strategic content across every channel."
            }
        },
        {
            "@type": "Question",
            "name": "Can this content engine actually drive measurable B2B pipeline?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We don't post for the sake of engagement. Every piece of content—whether it is an SEO article or an AI agent output—is designed to move a prospect through the buyer's journey toward a discovery call."
            }
        }
    ]
};

export default function Home() {
    return (
        <>
            <Script
                id="jsonld-faqpage"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <HomeClient />
        </>
    );
}
