import { pageMeta } from "@/lib/seo";
import { B2BSEOClient } from "./B2BSEOClient";

export const metadata = pageMeta({
    title: "B2B SEO Agency India | Technical SEO for SaaS Startups",
    description: "We build B2B SEO strategies that convert enterprise intent, not just generate traffic. India's most specialized B2B SaaS SEO agency.",
    path: "/services/b2b-seo",
});

export default function B2BSEOPage() {
    return <B2BSEOClient />;
}
