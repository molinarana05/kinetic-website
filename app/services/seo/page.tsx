import { pageMeta } from "@/lib/seo";
import { SEOClient } from "./SEOClient";

export const metadata = pageMeta({
    title: "What Is SEO and How Does it Work? | B2B SaaS Strategy",
    description: "Learn how Search Engine Optimization works across Technical, On-Page, and Off-Page pillars. Dominate organic search and AI overviews.",
    path: "/services/seo",
});

export default function SEOPage() {
    return <SEOClient />;
}
