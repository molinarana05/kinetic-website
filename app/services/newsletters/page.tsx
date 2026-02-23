import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "B2B Newsletter Creation & Community Building | Moxie Digital",
    description: "Build a compounding owned audience. We create strategic B2B newsletters that turn passive industry observers into an engaged community of future buyers.",
    alternates: { canonical: "https://www.moxie-digital.com/services/newsletters" },
};

export default function NewslettersPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "B2B Newsletters",
                description: "Build a community, not just a list",
                canonical: "https://www.moxie-digital.com/services/newsletters",
            }}
            tag="COMMUNITY"
            headline="B2B Newsletters"
            subheadline="Build an Owned Audience"
            description="Algorithms change. Your email list does not. A powerful B2B newsletter is the ultimate moat against rising acquisition costs, turning rented attention into owned community."
            definition="B2B Newsletter Creation is the systematic production of high-value, recurring email publications designed to cultivate an owned audience, establish thought leadership, and reduce reliance on paid acquisition channels."
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
