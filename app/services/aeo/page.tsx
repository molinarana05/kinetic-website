import { Metadata } from "next";
import { AEOClient } from "./AEOClient";

export const metadata: Metadata = {
    title: "What is Answer Engine Optimization? | AEO Services | Moxie Digital",
    description: "Explore what answer engine optimization (AEO) is and why it's necessary to stay competitive in an AI-driven digital landscape like ChatGPT and Perplexity.",
    alternates: { canonical: "https://www.moxie-digital.com/services/aeo" },
};

export default function AEOPage() {
    return <AEOClient />;
}
