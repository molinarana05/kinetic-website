import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Content Repurposing Services for B2B Creators | Moxie Digital",
    description: "Turn one 60-minute founder interview into 30 days of high-converting content for LinkedIn, email, and blogs. The ultimate B2B content repurposing engine.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-repurposing" },
};

export default function ContentRepurposingPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "Content Repurposing",
                description: "Turn 1 hour into 30 days of content",
                canonical: "https://www.moxie-digital.com/services/content-repurposing",
            }}
            tag="FLAGSHIP"
            headline="Content Repurposing"
            subheadline="1 Interview. 30 Touchpoints."
            description="Stop creating net-new content every day. We build an extraction engine that turns one hour of your time into a full month of strategic assets."
            definition="Content Repurposing is a marketing strategy that transforms a single high-value pillar asset—such as a webinar or a founder interview—into multiple formatting variations tailored for different distribution channels like LinkedIn, email newsletters, and blog posts."
            features={[
                {
                    icon: "🎙️",
                    title: "Extraction Interview",
                    description: "One 60-minute structured interview per month to surface your unique insights, stories, and expert perspectives.",
                },
                {
                    icon: "🔄",
                    title: "Multi-Format Transformation",
                    description: "Your source content is transformed into LinkedIn posts, newsletter sections, blog drafts, and short-form video scripts — all platform-native.",
                },
                {
                    icon: "📊",
                    title: "Performance Loop",
                    description: "We track which formats and messages resonate most and feed that intelligence back into the next extraction cycle.",
                },
            ]}
            deliverables={[
                "Monthly extraction interview (60 minutes)",
                "5–7 LinkedIn posts per month",
                "2 newsletter sections per month",
                "1–2 blog posts per month",
                "1 short-form video script per month",
                "Monthly performance report",
            ]}
            outcome="You publish consistently across every channel, in your authentic voice, without writing a single word yourself. Your brand compounds. Your pipeline grows."
            faq={[
                {
                    q: "What is content repurposing?",
                    a: "Content repurposing is the systematic transformation of one source piece of content (like an interview or talk) into multiple formats across multiple channels. Instead of creating from scratch each time, you extract maximum value from a single session.",
                },
                {
                    q: "How is this different from ghostwriting?",
                    a: "Ghostwriting creates content from scratch, which is expensive and time-intensive. Content repurposing starts with your authentic ideas and transforms them. The result sounds more like you because it is you — just amplified.",
                },
                {
                    q: "Which channels does this cover?",
                    a: "LinkedIn (personal and company), email/newsletter, long-form blog/SEO content, and short-form video scripts. We prioritize based on where your ICP spends the most time.",
                },
            ]}
        />
    );
}
