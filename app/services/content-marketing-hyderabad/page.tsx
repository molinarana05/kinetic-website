import { Metadata } from "next";
import { CityPageClient } from "../../components/CityPageClient";

export const metadata: Metadata = {
    title: "Content Marketing Agency Hyderabad | Deep Tech & GCC Marketing | Moxie Digital",
    description: "Hyderabad's GCCs, pharma, and deep-tech companies need a content agency that speaks enterprise. We write technical authority that closes procurement deals.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-marketing-hyderabad" },
};

export default function HyderabadPage() {
    return (
        <CityPageClient
            city="Hyderabad"
            subtitle="HITEC City's deep-tech ecosystem deserves more than generic agency content."
            heroLine1="Content Marketing"
            heroLine2="Agency Hyderabad."
            problem="Hyderabad's GCC and deep-tech founders are outsourcing their most complex technical narratives to generalist copywriters who have never opened a compliance framework document. The result is 'ChatGPT syntax' that immediately destroys credibility with Fortune 500 procurement teams."
            problemChart="hyderabad"
            stats={[
                { value: "150+", label: "Fortune 500 GCCs based in Hyderabad — the exact buyers who demand extreme technical credibility in vendor content" },
                { value: "3 secs", label: "time it takes a life-sciences executive to detect AI-generated content and terminate the procurement conversation" },
                { value: "₹4L+", label: "average wasted on generalist content agencies who cannot write for highly regulated pharma/tech verticals" },
            ]}
            slug="content-marketing-agency-hyderabad"
        />
    );
}
