import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "Content Agency Readiness Quiz",
    description: "A short quiz that tells you whether your business is ready to get results from a content agency, and what to fix first if it is not. Free from Moxie Digital.",
    path: "/tools/content-agency-quiz",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
