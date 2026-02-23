import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "Newsletter & Community Building | Moxie Digital",
    description: "Build a newsletter your subscribers actually read. Moxie Digital creates community-driven newsletters that generate pipeline for B2B brands.",
    alternates: { canonical: "https://www.moxie-digital.com/services/newsletters" },
};

export default function NewslettersPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "Newsletter & Community Building | Moxie Digital",
                description: "Build a newsletter that generates pipeline.",
                canonical: "https://www.moxie-digital.com/services/newsletters",
            }}
            tag="Moxie Digital · Services"
            headline={"Newsletters &\nCommunity"}
            subheadline="Own Your Audience. Forever."
            description="Algorithms change. Platforms die. Your newsletter list is the only audience you own. We build community-driven newsletters that readers look forward to opening — and that quietly, consistently generate business for you."
            features={[
                {
                    icon: "📮",
                    title: "Newsletter Architecture",
                    description: "A clear format, consistent structure, and editorial identity that readers come to rely on. Built around your specific audience identity.",
                },
                {
                    icon: "🤝",
                    title: "Community Activation",
                    description: "Polls, reply prompts, reader features, and events that transform passive subscribers into an engaged community.",
                },
                {
                    icon: "📣",
                    title: "Growth Engine",
                    description: "Referral mechanics, cross-promotion strategy, and content distribution that grows your list without paid ads.",
                },
            ]}
            deliverables={[
                "Newsletter strategy and architecture document",
                "Weekly or bi-weekly newsletter production",
                "Subscriber growth strategy and referral setup",
                "Welcome sequence (5 emails)",
                "Monthly engagement analytics report",
                "Sponsorship strategy (when applicable)",
            ]}
            outcome="A newsletter that your ICP reads every time it arrives. An owned audience that compounds in value week over week, independent of any platform algorithm."
            faq={[
                {
                    q: "What platform do you recommend for newsletters?",
                    a: "For most B2B brands, Beehiiv or Substack for simplicity, ActiveCampaign for automation-heavy setups. We will recommend the right tool based on your audience size and goals.",
                },
                {
                    q: "How many subscribers do I need to start?",
                    a: "Zero. The best time to start a newsletter is before you think you are ready. A list of 200 engaged subscribers who are all in your ICP is worth more than 10,000 random names.",
                },
                {
                    q: "Can a newsletter actually generate B2B leads?",
                    a: "Yes — consistently. Our clients generate more inbound per newsletter subscriber than from any paid channel. The key is writing for a specific audience with specific pain points, not a generic audience.",
                },
            ]}
        />
    );
}
