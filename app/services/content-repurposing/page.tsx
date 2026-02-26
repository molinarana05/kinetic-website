import { Metadata } from "next";
import { ContentRepurposingClient } from "./ContentRepurposingClient";

export const metadata: Metadata = {
    title: "Content Repurposing | Marketing Hub | Moxie Digital",
    description: "What is Content Repurposing? Discover why content repurposing is important and how to scale your brand by adapting evergreen content across visual formats.",
    alternates: { canonical: "https://www.moxie-digital.com/services/content-repurposing" },
};

export default function ContentRepurposingPage() {
    return <ContentRepurposingClient />;
}
