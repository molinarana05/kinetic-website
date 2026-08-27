import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "B2B Content Idea Generator",
    description: "Choose the pain points your buyers care about and get content ideas mapped to them. A free idea bank for B2B founders from Moxie Digital.",
    path: "/tools/content-idea-generator",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
