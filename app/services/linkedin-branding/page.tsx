import { pageMeta } from "@/lib/seo";
import { LinkedInBrandingClient } from "./LinkedInBrandingClient";

export const metadata = pageMeta({
    title: "17-Minute LinkedIn Personal Branding Strategy",
    description: "Launch your founder brand on LinkedIn in minutes a day. We build end-to-end LinkedIn content engines that position you as an industry authority.",
    path: "/services/linkedin-branding",
});

export default function LinkedInBrandingPage() {
    return <LinkedInBrandingClient />;
}
