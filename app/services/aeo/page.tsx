import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Answer Engine Optimization (AEO) | Moxie Digital",
    description: "Get your brand cited by Perplexity, ChatGPT, and Google AI Overviews. Moxie Digital builds AEO systems that make your brand the answer.",
    alternates: { canonical: "https://www.moxie-digital.com/services/aeo" },
};

export default function AeoPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "Answer Engine Optimization (AEO) | Moxie Digital",
                description: "Get your brand cited by AI answer engines.",
                canonical: "https://www.moxie-digital.com/services/aeo",
            }}
            tag="Moxie Digital · Services"
            headline={"Answer Engine\nOptimization"}
            subheadline="Be the Answer. Not Just a Result."
            description="When someone asks Perplexity, ChatGPT, or Google AI 'Who is the best B2B content marketing agency?' — is your brand the answer? AEO is the discipline of making sure it is. We build entity definitions, structured data, and Q&A content that positions your brand as the authoritative source AI engines trust and cite."
            features={[
                {
                    icon: "🧠",
                    title: "Entity Definition",
                    description: "We establish your brand, founder, and services as clearly defined entities that AI models can confidently identify, describe, and recommend.",
                },
                {
                    icon: "📋",
                    title: "Schema Markup System",
                    description: "Full JSON-LD implementation: Organization, Person, FAQPage, Service, and BreadcrumbList schemas — the direct communication channel to AI parsers.",
                },
                {
                    icon: "❓",
                    title: "Q&A Content Architecture",
                    description: "We build explicit FAQ content that mirrors the exact language your ICP uses when prompting AI tools, earning featured snippet and AI Overview placements.",
                },
            ]}
            deliverables={[
                "Brand entity definition and optimization",
                "Sitewide JSON-LD schema implementation",
                "FAQPage schema on all key pages",
                "Monthly AEO content (Q&A posts, definition pieces)",
                "AI citation monitoring and reporting",
                "Google Rich Results verification",
            ]}
            outcome="Your brand becomes the answer that AI tools serve when your ICP asks the questions your buyers are already typing. Zero-click brand exposure at scale."
            faq={[
                {
                    q: "What is Answer Engine Optimization?",
                    a: "AEO is the practice of optimizing your website and content so that AI-powered answer engines (like Perplexity, ChatGPT, and Google AI Overviews) cite your brand as a trusted source when users ask relevant questions.",
                },
                {
                    q: "How is AEO different from SEO?",
                    a: "SEO targets a ranking on a list of results. AEO targets being the single cited source in an AI-generated answer. AEO requires explicit entity definitions, structured data, and direct Q&A content rather than keyword-density optimization.",
                },
                {
                    q: "How do you measure AEO success?",
                    a: "We manually test your target queries in AI tools (Perplexity, ChatGPT, Gemini) and track your citation rate over time. We also monitor branded search volume growth — a strong signal that zero-click exposure is driving brand recall.",
                },
            ]}
        />
    );
}
