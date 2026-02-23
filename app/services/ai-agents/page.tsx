import { ServicePageTemplate } from "../../components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Agent Workflows for Marketing Teams | Moxie Digital",
    description: "Deploy autonomous AI agents that research, create, and distribute B2B marketing content at scale. Stop acting like a prompt engineer and start acting like a manager.",
    alternates: { canonical: "https://www.moxie-digital.com/services/ai-agents" },
};

export default function AIAgentsPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "AI Agent Workflows",
                description: "Deploy autonomous workflows",
                canonical: "https://www.moxie-digital.com/services/ai-agents",
            }}
            tag="AUTOMATION"
            headline="AI Agents"
            subheadline="Autonomous Marketing Execution"
            description="ChatGPT is a tool. We build systems. We design custom AI agent workflows to research competitors, draft strategic assets, and manage content pipelines autonomously."
            definition="Marketing AI Agent Workflows involve deploying autonomous, multi-agent systems—such as AutoGPT or CrewAI frameworks—to independently execute complex marketing tasks including competitive research, drafting multi-channel copy, and structuring content calendars."
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
