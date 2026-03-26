import { Metadata } from "next";
import { CityPageClient } from "../../components/CityPageClient";

export const metadata: Metadata = {
    title: "Content Marketing Agency Mumbai | Enterprise B2B Marketing | Moxie Digital",
    description: "Mumbai's enterprise and fintech ecosystem requires a content agency that understands institutional risk. We write for CFOs and CISOs, not junior buyers.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-marketing-mumbai" },
};

export default function MumbaiPage() {
    return (
        <CityPageClient
            city="Mumbai"
            subtitle="BKC and Nariman Point demand enterprise-grade thought leadership."
            heroLine1="Content Marketing"
            heroLine2="Agency Mumbai."
            problem="Mumbai's enterprise brands are hiring volume-first agencies running consumer playbooks against institutional buyers. A CIO evaluating ₹2Cr software is not swayed by motivational LinkedIn carousels. They are swayed by deep, authoritative, technical Signal."
            problemChart="mumbai"
            stats={[
                { value: "18 months", label: "average enterprise sales cycle in Mumbai — content must nurture for the long game, not sell impulsively" },
                { value: "₹5L+", label: "average retainer Mumbai brands waste on agencies who don't understand regulatory compliance writing" },
                { value: "14%", label: "average email open rate for generic B2B 'updates' sent by Mumbai marketing agencies" },
            ]}
            slug="content-marketing-agency-mumbai"
        />
    );
}
