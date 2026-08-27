import { pageMeta } from "@/lib/seo";
import { LinkedInGhostwritingClient } from "./LinkedInGhostwritingClient";

export const metadata = pageMeta({
    title: "LinkedIn Ghostwriting Agency India | Founder-Led B2B Branding",
    description: "We turn your founder's expertise into a precision-engineered LinkedIn pipeline. No broetry, no templates — only verified Signal.",
    path: "/services/linkedin-ghostwriting",
});

export default function LinkedInGhostwritingPage() {
    return <LinkedInGhostwritingClient />;
}
