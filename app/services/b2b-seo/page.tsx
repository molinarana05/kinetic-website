import { Metadata } from "next";
import { B2BSEOClient } from "./B2BSEOClient";

export const metadata: Metadata = {
    title: "B2B SEO Agency India | Technical SEO for SaaS Startups | Moxie Digital",
    description: "We build B2B SEO strategies that convert enterprise intent, not just generate traffic. India's most specialized B2B SaaS SEO agency.",
    alternates: { canonical: "https://www.moxie-digital.com/services/b2b-seo" },
};

export default function B2BSEOPage() {
    return <B2BSEOClient />;
}
