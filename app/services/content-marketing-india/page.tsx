import { Metadata } from "next";
import { ContentMarketingIndiaClient } from "./ContentMarketingIndiaClient";

export const metadata: Metadata = {
    title: "Content Marketing Agency India | B2B SaaS Content Strategy | Moxie Digital",
    description: "India's leading B2B content marketing agency. We don't produce volume — we engineer authority that converts enterprise buyers.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-marketing-india" },
};

export default function ContentMarketingIndiaPage() {
    return <ContentMarketingIndiaClient />;
}
