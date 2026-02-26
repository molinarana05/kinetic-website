import { Metadata } from "next";
import { GEOClient } from "./GEOClient";

export const metadata: Metadata = {
    title: "Answer Engine Optimization (Generative Engine Optimization) | Moxie Digital",
    description: "Explore what Answer Engine Optimization (AEO/GEO) is and why it's necessary for your business to stay competitive in a modern, AI-driven digital landscape.",
    alternates: { canonical: "https://www.moxie-digital.com/services/geo" },
};

export default function GEOPage() {
    return <GEOClient />;
}
