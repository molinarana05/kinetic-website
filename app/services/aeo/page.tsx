import { Metadata } from "next";
import { AEOClient } from "./AEOClient";
import Script from "next/script";

export const metadata: Metadata = {
    title: "What is Answer Engine Optimization? | AEO Services | Moxie Digital",
    description: "Explore what answer engine optimization (AEO) is and why it's necessary to stay competitive in an AI-driven digital landscape like ChatGPT and Perplexity.",
    alternates: { canonical: "https://www.moxie-digital.com/services/aeo" },
};

const aeoFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Answer Engine Optimization (AEO)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AEO is the practice of optimizing your website and content so that AI-powered answer engines like Perplexity, ChatGPT, and Google AI Overviews cite your brand as a trusted source when users ask relevant questions. Unlike traditional SEO which targets ranked links, AEO targets being the single cited answer."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between AEO and SEO?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional SEO focuses on ranking high in a list of search results so users click through to your site. AEO focuses on being the authoritative source that AI engines extract and surface as a direct answer, bypassing the click entirely. AEO targets citations, not clicks."
            }
        },
        {
            "@type": "Question",
            "name": "Why does AEO matter in 2026?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Up to 60% of Google searches now end without a click due to AI Overviews. Buyers research vendors inside Perplexity and ChatGPT before visiting any website. If your brand is not the answer the AI cites, you are invisible to a growing segment of your buyers — even if you rank on page one."
            }
        },
        {
            "@type": "Question",
            "name": "How does Moxie Digital implement AEO?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Moxie Digital implements AEO through three pillars: (1) On-site optimization using JSON-LD schema markup, question-based content formatting, and explicit entity definitions; (2) Off-site optimization through building citations on review sites, industry publications, and community forums that AI models trust; (3) Visibility analytics to track AI citation rates and iterate continuously."
            }
        },
        {
            "@type": "Question",
            "name": "Which AI engines does AEO target?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "AEO targets all major AI answer engines including Perplexity AI, ChatGPT with web browsing (OpenAI), Google AI Overviews (SGE), Gemini, Bing Copilot, and voice assistants like Siri and Alexa."
            }
        }
    ]
};

const aeoServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.moxie-digital.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.moxie-digital.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Answer Engine Optimization", "item": "https://www.moxie-digital.com/services/aeo" }
    ]
};

export default function AEOPage() {
    return (
        <>
            <Script
                id="jsonld-aeo-faq"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoFaqJsonLd) }}
            />
            <Script
                id="jsonld-aeo-breadcrumb"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoServiceJsonLd) }}
            />
            <AEOClient />
        </>
    );
}
