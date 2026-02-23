import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Generative Engine Optimization (GEO) | Moxie Digital",
    description: "Get your content cited inside AI-generated responses. Moxie Digital builds GEO systems that ensure your brand appears in the answers your buyers read.",
    alternates: { canonical: "https://www.moxie-digital.com/services/geo" },
};

export default function GeoPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "Generative Engine Optimization (GEO) | Moxie Digital",
                description: "Get cited inside AI-generated responses.",
                canonical: "https://www.moxie-digital.com/services/geo",
            }}
            tag="Moxie Digital · Services"
            headline={"Generative\nEngine\nOptimization"}
            subheadline="Win the Citation. Own the Category."
            description="When an AI tool generates a 500-word answer about B2B content strategy, which sources does it cite? GEO is the discipline of making sure your content is one of them. We build topical authority clusters, original research, and authoritative content that AI models trust and recommend."
            features={[
                {
                    icon: "📡",
                    title: "Topical Authority Clusters",
                    description: "We build deep content clusters around your core expertise areas, signaling to AI models that you are the authoritative source on these topics.",
                },
                {
                    icon: "🔬",
                    title: "Original Research & Frameworks",
                    description: "AI models cite original sources above all others. We help you produce original research, proprietary frameworks, and first-hand expert insights that get quoted.",
                },
                {
                    icon: "📈",
                    title: "Citation Rate Monitoring",
                    description: "We systematically test your target queries across major AI tools and track your citation rate, adjusting your content strategy based on what gets referenced.",
                },
            ]}
            deliverables={[
                "Topical authority audit and cluster plan",
                "Monthly GEO-optimized pillar posts",
                "Original data or survey research (quarterly)",
                "Author authority markup and bio optimization",
                "Monthly AI citation rate report",
                "GEO content calendar",
            ]}
            outcome="Your brand is what AI tools recommend when your prospects ask for expertise in your category. You become the undisputed thought leader in your niche — verified by AI."
            faq={[
                {
                    q: "What is Generative Engine Optimization?",
                    a: "GEO is the practice of optimizing content to be cited within AI-generated responses — when an AI synthesizes an answer from multiple sources, GEO ensures your content is one of those sources.",
                },
                {
                    q: "What makes content get cited by AI tools?",
                    a: "Original insight, topical depth, structured content, strong author authority signals, and proper schema markup. Generic content never gets cited. First-hand expertise with clear structure almost always does.",
                },
                {
                    q: "How long does it take to see GEO results?",
                    a: "Early citation gains typically appear in 60–90 days for well-structured content. Full topical authority — where you are consistently cited as the primary source — takes 6–12 months of consistent investment.",
                },
            ]}
        />
    );
}
