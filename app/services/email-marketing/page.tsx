import { pageMeta } from "@/lib/seo";
import { EmailMarketingClient } from "./EmailMarketingClient";

export const metadata = pageMeta({
    title: "B2B Email Marketing Strategy",
    description: "Align your email marketing with pipeline generation. We build automated B2B email workflows that nurture leads and book meetings, beyond vanity metrics.",
    path: "/services/email-marketing",
});

export default function EmailMarketingPage() {
    return <EmailMarketingClient />;
}
