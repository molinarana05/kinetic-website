import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "B2B SEO Services | Moxie Digital",
    description: "Pipeline-first SEO for B2B SaaS teams. Moxie Digital builds search systems that generate qualified leads, not just traffic.",
    alternates: { canonical: "https://www.moxie-digital.com/services/seo" },
};

export default function SeoPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "B2B SEO Services | Moxie Digital",
                description: "Pipeline-first SEO for B2B SaaS.",
                canonical: "https://www.moxie-digital.com/services/seo",
            }}
            tag="Moxie Digital · Services"
            headline={"Search\nEngine\nOptimization"}
            subheadline="Rank for What Pays. Not What Looks Good."
            description="Most SEO focuses on traffic. We focus on pipeline. Our B2B SEO system maps your buyer journey, targets the precise queries your ICP uses when they are ready to buy, and builds content clusters that compound over time."
            features={[
                {
                    icon: "🗺️",
                    title: "Buyer Journey Mapping",
                    description: "We map every search query your ICP uses from problem-aware to vendor-aware, then build content for each stage.",
                },
                {
                    icon: "✍️",
                    title: "Pipeline-Intent Content",
                    description: "Every piece of content targets a specific keyword with measured commercial intent. No filler, no fluff.",
                },
                {
                    icon: "🔗",
                    title: "Technical SEO & Internal Linking",
                    description: "Schema markup, Core Web Vitals, canonical tags, and a deliberate internal linking architecture that signals topical authority.",
                },
            ]}
            deliverables={[
                "Keyword and buyer-intent research report",
                "Content cluster architecture plan",
                "4–8 SEO-optimized blog posts per month",
                "Technical SEO audit and implementation",
                "Internal linking strategy",
                "Monthly GSC performance report",
            ]}
            outcome="Organic search becomes your lowest-cost, highest-intent lead source. By month 6, your content is generating qualified pipeline without ad spend."
            faq={[
                {
                    q: "How long does B2B SEO take to show results?",
                    a: "Honest answer: 3–6 months for early signals, 9–12 months for significant pipeline contribution. SEO is a compounding investment. The brands that win are the ones who start now and stay consistent.",
                },
                {
                    q: "What is the difference between SEO and AEO?",
                    a: "SEO targets traditional search engine rankings (Google organic results). AEO (Answer Engine Optimization) targets AI-generated responses in tools like Perplexity and Google AI Overviews. We build both simultaneously.",
                },
                {
                    q: "Do you do keyword research or do I provide it?",
                    a: "We do all keyword and intent research. You provide business context — what your ICP looks like, what problems they have, who your competitors are. We do the research and build the content plan.",
                },
            ]}
        />
    );
}
