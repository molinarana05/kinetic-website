import { Metadata } from "next";
import HomeClient from "./page.client";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Moxie Digital | Founder-Led Marketing & B2B Growth Engines",
    description: "Scale your B2B SaaS pipeline with founder-led content. I am not an agency, I am a growth operator. Book your session.",
    openGraph: {
        title: "Moxie Digital | Founder-Led Marketing & B2B Growth Engines",
        description: "Scale your B2B SaaS pipeline with founder-led content. I am not an agency, I am a growth operator. Book your session.",
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
            "name": "What is a revenue-led content strategy for B2B founders?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most agencies focus on vanity metrics like likes and impressions. A revenue-led strategy focuses on pipeline. I build a system that identifies the specific pain points of your ideal customers and addresses them with high-authority content. This transforms your LinkedIn profile from a social feed into a lead generation engine that attracts sales-ready prospects."
            }
        },
        {
            "@type": "Question",
            "name": "How does a founder-led brand engine differ from a standard digital agency?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Agencies often assign junior account managers to your brand. They prioritize volume over depth. As a senior operator, I install a high-leverage system that I run personally. I use the same frameworks I built for market leaders like Paytm and Bajaj. You get senior-level strategy and execution without the agency overhead or the lack of business context."
            }
        },
        {
            "@type": "Question",
            "name": "What is the time commitment required from a busy founder?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The goal of this system is to buy back your time. We use a high-leverage Extraction Session once a month. I spend sixty minutes extracting your unique insights and industry expertise. My team and I then turn that single hour into a full month of strategic content. You stay in your zone of genius while the engine runs in the background."
            }
        },
        {
            "@type": "Question",
            "name": "Can this content engine actually drive measurable B2B pipeline?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We do not post for the sake of posting. Every piece of content is designed to move a prospect through the buyer's journey. We target middle-of-the-funnel and bottom-of-the-funnel intent. This ensures that when a lead reaches out, they are already educated on your value and ready for a discovery call."
            }
        },
        {
            "@type": "Question",
            "name": "Why is a Growth Engine better than hiring a full-time content manager?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A full-time hire requires management, benefits, and significant training. Most content managers understand writing but do not understand B2B business strategy. I provide a plug-and-play system that is already proven at scale. You get the output of a high-end marketing department for a fraction of the cost of a senior full-time hire."
            }
        },
        {
            "@type": "Question",
            "name": "How long does it take to see results from a founder growth system?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Authority building is a compounding game. You will typically see a shift in the quality of your network and inbound engagement within the first thirty days. By day ninety, the engine is fully optimized. At this stage, the content begins to consistently drive inbound inquiries and positions you as the go-to authority in your specific niche."
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
