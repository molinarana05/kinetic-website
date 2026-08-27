import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
    title: "LinkedIn Profile Grader",
    description: "Grade your LinkedIn profile against a checklist covering headline, banner, about section, and more, with a tip for each item. Free from Moxie Digital.",
    path: "/tools/linkedin-profile-grader",
});

export default function ToolLayout({ children }: { children: React.ReactNode }) {
    return children;
}
