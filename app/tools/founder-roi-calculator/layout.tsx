import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "Founder Content ROI Calculator",
    description: "Estimate what founder-led content could be worth to your pipeline. Set your deal size, close rate, and volume assumptions and see the math. Free from Moxie Digital.",
    path: "/tools/founder-roi-calculator",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
