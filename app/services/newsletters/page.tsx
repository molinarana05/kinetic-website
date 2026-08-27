import { pageMeta } from "@/lib/seo";
import { NewsletterClient } from "./NewsletterClient";

export const metadata = pageMeta({
    title: "B2B Newsletter Creation & Community Building",
    description: "Build a compounding owned audience. We create strategic B2B newsletters that turn passive industry observers into an engaged community yielding massive ROI.",
    path: "/services/newsletters",
});

export default function NewslettersPage() {
    return <NewsletterClient />;
}
