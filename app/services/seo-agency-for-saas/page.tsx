import { pageMeta } from "@/lib/seo";
import { SaaSSEOClient } from "./SaaSSEOClient";

export const metadata = pageMeta({
    title: "SEO Agency for SaaS Companies",
    description: "Moxie Digital is an SEO agency for SaaS companies that want pipeline, not vanity traffic. We build commercial-intent content, sharpen positioning, and turn search into revenue.",
    path: "/services/seo-agency-for-saas",
});

export default function SaaSSEOPage() {
    return <SaaSSEOClient />;
}
