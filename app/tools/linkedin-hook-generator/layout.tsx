import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "Free LinkedIn Hook Generator",
    description: "Pick a post type and a topic, and get LinkedIn hook options built on proven opening structures. A free tool for B2B founders from Moxie Digital.",
    path: "/tools/linkedin-hook-generator",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
