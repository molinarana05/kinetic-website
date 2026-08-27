import { pageMeta } from "@/lib/seo";
import { GEOClient } from "./GEOClient";

export const metadata = pageMeta({
    title: "Answer Engine Optimization (Generative Engine Optimization)",
    description: "Explore what Answer Engine Optimization (AEO/GEO) is and why it's necessary for your business to stay competitive in a modern, AI-driven digital landscape.",
    path: "/services/geo",
});

export default function GEOPage() {
    return <GEOClient />;
}
