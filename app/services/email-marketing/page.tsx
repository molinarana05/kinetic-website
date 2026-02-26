import { Metadata } from "next";
import { EmailMarketingClient } from "./EmailMarketingClient";

export const metadata: Metadata = {
    title: "B2B Email Marketing Strategy | Moxie Digital",
    description: "Align your email marketing with pipeline generation. We build automated B2B email workflows that nurture leads and book meetings, beyond vanity metrics.",
    alternates: { canonical: "https://www.moxie-digital.com/services/email-marketing" },
};

export default function EmailMarketingPage() {
    return <EmailMarketingClient />;
}
