import { Metadata } from "next";
import { B2BContentMarketingClient } from "./B2BContentMarketingClient";

export const metadata: Metadata = {
    title: "B2B Content Marketing Agency | B2B Content Strategy for SaaS | Moxie Digital",
    description: "India's specialist B2B content marketing agency. We don't produce volume — we engineer authority, topical monopoly, and compounding pipeline for B2B SaaS and enterprise brands.",
    alternates: { canonical: "https://www.moxie-digital.com/services/b2b-content-marketing" },
};

export default function B2BContentMarketingPage() {
    return <B2BContentMarketingClient />;
}
