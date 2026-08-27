import { pageMeta } from "@/lib/seo";
import { B2BContentMarketingClient } from "./B2BContentMarketingClient";

export const metadata = pageMeta({
    title: "B2B Content Marketing Agency | B2B Content Strategy for SaaS",
    description: "India's specialist B2B content marketing agency. We don't produce volume — we engineer authority, topical monopoly, and compounding pipeline for B2B SaaS and enterprise brands.",
    path: "/services/b2b-content-marketing",
});

export default function B2BContentMarketingPage() {
    return <B2BContentMarketingClient />;
}
