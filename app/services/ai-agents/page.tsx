import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "AI Agent Creation for Marketing | Moxie Digital",
    description: "Custom AI agents that research, draft, publish, and optimize your marketing at scale. Moxie Digital builds AI+Human marketing systems for B2B teams.",
    alternates: { canonical: "https://www.moxie-digital.com/services/ai-agents" },
};

export default function AiAgentsPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "AI Agent Creation for Marketing | Moxie Digital",
                description: "Custom AI agents for marketing automation.",
                canonical: "https://www.moxie-digital.com/services/ai-agents",
            }}
            tag="Moxie Digital · Services"
            headline={"AI Agent\nCreation"}
            subheadline="AI Speed. Human Intelligence."
            description="AI agents are not chatbots. They are autonomous systems that research, draft, publish, and optimize your marketing — continuously, at scale, without step-by-step instruction. We design and build custom AI agents that give your lean team the output capacity of a department."
            features={[
                {
                    icon: "🤖",
                    title: "Custom Agent Design",
                    description: "Every AI agent is designed around your specific workflow: your tone of voice, your channels, your brand standards, your approval process.",
                },
                {
                    icon: "🔗",
                    title: "Stack Integration",
                    description: "Agents that connect to your existing tools — CMS, CRM, email platform, social scheduler — and run within your current infrastructure.",
                },
                {
                    icon: "🧑‍💼",
                    title: "Human-in-the-Loop Design",
                    description: "All agents are designed with human oversight built in. AI handles speed and scale; your team handles judgment, tone, and approval.",
                },
            ]}
            deliverables={[
                "AI agent strategy and workflow design",
                "Custom agent build (Make.com, Relevance AI, or API-based)",
                "Brand voice training and documentation",
                "Human review and approval workflow setup",
                "Team onboarding and training",
                "Monthly agent performance review",
            ]}
            outcome="Your marketing team publishes more, monitors more, and responds faster — with the same headcount. AI handles the volume; your humans handle the judgment."
            faq={[
                {
                    q: "What is an AI agent?",
                    a: "An AI agent is an autonomous AI system that executes multi-step tasks over time — not just answering a prompt, but taking actions, checking results, and adjusting based on outcomes. Think of it as a tireless team member that never sleeps.",
                },
                {
                    q: "Do I need technical staff to use AI agents?",
                    a: "No. We build and manage the agents. We design them so your team interacts with them through review queues and simple approval flows — no coding required on your end.",
                },
                {
                    q: "Will my content sound AI-generated?",
                    a: "Not if it is built correctly. Our agents are trained on your tone of voice, historical content, and brand standards. Every output goes through human editorial review before publishing. The agent produces speed; the human produces quality.",
                },
            ]}
        />
    );
}
