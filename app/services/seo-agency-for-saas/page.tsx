import { Metadata } from "next";
import { SaaSSEOClient } from "./SaaSSEOClient";

export const metadata: Metadata = {
    title: "SEO Agency for SaaS Companies | Moxie Digital",
    description:
        "Moxie Digital is an SEO agency for SaaS companies that want pipeline, not vanity traffic. We build commercial-intent content, sharpen positioning, and turn search into revenue.",
    alternates: {
        canonical: "https://www.moxie-digital.com/services/seo-agency-for-saas",
    },
};

export default function SaaSSEOPage() {
    return <SaaSSEOClient />;
}
