import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "LinkedIn Personal & Company Branding | Moxie Digital",
    description: "Build a LinkedIn presence that generates inbound pipeline. Moxie Digital's LinkedIn branding system for B2B founders and executive teams.",
    alternates: { canonical: "https://www.moxie-digital.com/services/linkedin-branding" },
};

export default function LinkedInBrandingPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "LinkedIn Personal & Company Branding | Moxie Digital",
                description: "Build a LinkedIn presence that generates inbound pipeline.",
                canonical: "https://www.moxie-digital.com/services/linkedin-branding",
            }}
            tag="Moxie Digital · Services"
            headline={"LinkedIn\nBranding"}
            subheadline="Authority That Attracts. Not Just Boasts."
            description="LinkedIn is the highest-ROI marketing channel for B2B brands — if you know how to use it. We build personal and company branding systems that make your founders the obvious choice in your category, driving inbound leads without a single cold message."
            features={[
                {
                    icon: "👤",
                    title: "Personal Brand Engine",
                    description: "Profile optimization, consistent posting cadence, and thought leadership content that positions founders as category experts.",
                },
                {
                    icon: "🏢",
                    title: "Company Page Strategy",
                    description: "A company page that amplifies your personal brand and builds institutional credibility — not a ghost town with 12 followers.",
                },
                {
                    icon: "💬",
                    title: "Engagement Architecture",
                    description: "Strategic commenting, connection outreach, and conversation-starting content formats that build audience without paid amplification.",
                },
            ]}
            deliverables={[
                "Full LinkedIn profile optimization (founder)",
                "Company page setup and optimization",
                "3–5 LinkedIn posts per week (personal profile)",
                "2–3 company page posts per week",
                "Monthly engagement and growth report",
                "Quarterly content strategy review",
            ]}
            outcome="Your LinkedIn profile becomes an inbound machine. Prospects who find you are already pre-sold on your expertise before the first conversation."
            faq={[
                {
                    q: "Do you write posts in my voice or do I?",
                    a: "We write in your voice, based on a monthly extraction interview. You review and approve before publishing. The content sounds like you because it starts with your ideas.",
                },
                {
                    q: "How fast can I grow a LinkedIn following?",
                    a: "With consistent, targeted content: 500–2,000 net new followers in the first 90 days is typical for accounts starting below 5,000. Growth accelerates as authority builds.",
                },
                {
                    q: "Is personal branding or company branding more important?",
                    a: "Personal. Company pages reach 2% of followers organically. Personal profiles reach 5–20%. Your founder's voice is your most valuable distribution asset — the company page amplifies it.",
                },
            ]}
        />
    );
}
