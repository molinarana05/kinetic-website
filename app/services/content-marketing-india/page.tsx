import { pageMeta } from "@/lib/seo";
import { ContentMarketingIndiaClient } from "./ContentMarketingIndiaClient";

export const metadata = pageMeta({
    title: "Content Marketing Agency India | B2B SaaS Content Strategy",
    description: "India's leading B2B content marketing agency. We don't produce volume — we engineer authority that converts enterprise buyers.",
    path: "/services/content-marketing-india",
});

export default function ContentMarketingIndiaPage() {
    return <ContentMarketingIndiaClient />;
}
