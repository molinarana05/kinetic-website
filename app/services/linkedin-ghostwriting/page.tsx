import { Metadata } from "next";
import { LinkedInGhostwritingClient } from "./LinkedInGhostwritingClient";

export const metadata: Metadata = {
    title: "LinkedIn Ghostwriting Agency India | Founder-Led B2B Branding | Moxie Digital",
    description: "We turn your founder's expertise into a precision-engineered LinkedIn pipeline. No broetry, no templates — only verified Signal.",
    alternates: { canonical: "https://www.moxie-digital.com/services/linkedin-ghostwriting" },
};

export default function LinkedInGhostwritingPage() {
    return <LinkedInGhostwritingClient />;
}
