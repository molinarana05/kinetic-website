import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "Founder Brand Score Quiz",
    description: "Answer a short set of questions about how you show up on LinkedIn and get a score for your founder brand, with the gaps to work on. Free from Moxie Digital.",
    path: "/tools/founder-brand-score",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
