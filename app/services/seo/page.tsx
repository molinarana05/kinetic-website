import { Metadata } from "next";
import { SEOClient } from "./SEOClient";

export const metadata: Metadata = {
    title: "What Is SEO and How Does it Work? | B2B SaaS Strategy | Moxie Digital",
    description: "Learn how Search Engine Optimization works across Technical, On-Page, and Off-Page pillars. Dominate organic search and AI overviews.",
    alternates: { canonical: "https://www.moxie-digital.com/services/seo" },
};

export default function SEOPage() {
    return <SEOClient />;
}
