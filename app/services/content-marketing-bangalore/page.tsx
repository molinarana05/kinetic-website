import { Metadata } from "next";
import { CityPageClient } from "../../components/CityPageClient";

export const metadata: Metadata = {
    title: "Content Marketing Agency Bangalore | B2B SaaS Marketing | Moxie Digital",
    description: "The only B2B content marketing agency that understands Bangalore's SaaS ecosystem. We build Signal-first content for Indiranagar to HSR Layout.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-marketing-bangalore" },
};

export default function BangalorePage() {
    return (
        <CityPageClient
            city="Bangalore"
            subtitle="India's tech crucible demands a different kind of marketing agency."
            heroLine1="Content Marketing"
            heroLine2="Agency Bangalore."
            problem="Bangalore's SaaS founders are outsourcing their most valuable asset — their technical authority — to generic agencies optimized for consumer growth hacks. The result: millions in runway burned on content that CTOs immediately recognize as shallow."
            problemChart="bangalore"
            stats={[
                { value: "72%", label: "of Bangalore B2B startups report content agencies failed to generate qualified pipeline" },
                { value: "₹2.5L", label: "average monthly retainer wasted on vanity content production" },
                { value: "6 secs", label: "average time a technical buyer spends on generic B2B blog content before bouncing" },
            ]}
            slug="content-marketing-agency-bangalore"
        />
    );
}
