import { Metadata } from "next";
import { ServicePageTemplate } from "../../components/ServicePageTemplate";

export const metadata: Metadata = {
    title: "B2B Email Marketing | Moxie Digital",
    description: "Email marketing engineered for B2B pipeline. Moxie Digital builds behavior-based sequences, nurture programs, and email systems tied directly to revenue.",
    alternates: { canonical: "https://www.moxie-digital.com/services/email-marketing" },
};

export default function EmailMarketingPage() {
    return (
        <ServicePageTemplate
            meta={{
                title: "B2B Email Marketing | Moxie Digital",
                description: "Email marketing engineered for B2B pipeline.",
                canonical: "https://www.moxie-digital.com/services/email-marketing",
            }}
            tag="Moxie Digital · Services"
            headline={"Email\nMarketing"}
            subheadline="Pipeline in the Inbox. Not Spam."
            description="Email is the highest-ROI channel in B2B marketing — when it is done right. Most email programs are broadcast newsletters that nobody reads. We build intent-driven, behavior-triggered email systems that accelerate deals, reactivate cold leads, and generate meetings on autopilot."
            features={[
                {
                    icon: "🎯",
                    title: "Intent-Based Segmentation",
                    description: "Your list is segmented by buyer readiness: cold prospect, warm lead, active pipeline, customer. Each segment receives the right message at the right time.",
                },
                {
                    icon: "⚡",
                    title: "Trigger-Based Sequences",
                    description: "Emails that fire based on behavior — page visits, content downloads, demo no-shows, post-call follow-ups — not just a calendar schedule.",
                },
                {
                    icon: "📊",
                    title: "Revenue Attribution",
                    description: "We measure what actually matters: reply rate, demo bookings, pipeline influenced. Not just open rates.",
                },
            ]}
            deliverables={[
                "Email strategy and segmentation plan",
                "Welcome sequence (5–7 emails)",
                "Re-engagement sequence for cold leads",
                "Monthly newsletter (written, designed, sent)",
                "3–5 trigger sequences (behavior-based)",
                "Monthly revenue attribution report",
            ]}
            outcome="Email becomes a pipeline engine, not a broadcast. Leads move faster through your sales cycle because they are already educated and warmed by the time they talk to you."
            faq={[
                {
                    q: "What email platform do you work with?",
                    a: "We work with any major email platform: ConvertKit, ActiveCampaign, HubSpot, Klaviyo, Mailchimp. We will recommend based on your stack and complexity.",
                },
                {
                    q: "Is cold email the same as email marketing?",
                    a: "No. Cold email is outbound sales outreach. Email marketing is communication with people who have opted in to hear from you. We focus on opt-in email marketing — building and monetizing a warm audience.",
                },
                {
                    q: "How do you measure email marketing success for B2B?",
                    a: "Reply rate, demo bookings sourced from email, and pipeline influenced. Open rate is a vanity metric. A 15% open rate that generates 4 demos beats a 40% open rate that generates zero.",
                },
            ]}
        />
    );
}
