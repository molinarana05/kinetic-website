import { pageMeta } from "@/lib/seo";
import { ContentRepurposingClient } from "./ContentRepurposingClient";

export const metadata = pageMeta({
    title: "Content Repurposing | Marketing Hub",
    description: "What is Content Repurposing? Discover why content repurposing is important and how to scale your brand by adapting evergreen content across visual formats.",
    path: "/services/content-repurposing",
});

export default function ContentRepurposingPage() {
    return <ContentRepurposingClient />;
}
