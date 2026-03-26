import { Metadata } from "next";
import { CityPageClient } from "../../components/CityPageClient";

export const metadata: Metadata = {
    title: "Content Marketing Agency Delhi NCR | B2B Gurgaon Noida | Moxie Digital",
    description: "NCR's fastest-scaling B2B companies need a content partner that understands complex enterprise pipelines, not consumer hustle culture.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-marketing-delhi" },
};

export default function DelhiPage() {
    return (
        <CityPageClient
            city="Delhi/NCR"
            subtitle="Gurgaon's scale-up energy applied to the wrong playbook is burning runway fast."
            heroLine1="Content Marketing"
            heroLine2="Agency Delhi NCR."
            problem="The NCR hustle mindset — aggressive volume, rapid output, consumer tactics — is mathematically fatal when applied to B2B enterprise sales. You cannot post 40 generic graphics a week and expect a $100,000 contract to convert from them."
            problemChart="delhi"
            stats={[
                { value: "40x", label: "more content produced by NCR agencies using AI — with 0% increase in B2B qualified leads" },
                { value: "9-12 mo", label: "average B2B enterprise sales cycle in NCR markets — requiring patience, not volume" },
                { value: "₹3L+", label: "monthly retainer NCR agencies charge for content that fails GEO/AEO optimization standards" },
            ]}
            slug="content-marketing-agency-delhi"
        />
    );
}
