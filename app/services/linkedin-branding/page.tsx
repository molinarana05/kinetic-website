import { Metadata } from "next";
import { LinkedInBrandingClient } from "./LinkedInBrandingClient";

export const metadata: Metadata = {
    title: "17-Minute LinkedIn Personal Branding Strategy | Moxie Digital",
    description: "Launch your founder brand on LinkedIn in minutes a day. We build end-to-end LinkedIn content engines that position you as an industry authority.",
    alternates: { canonical: "https://www.moxie-digital.com/services/linkedin-branding" },
};

export default function LinkedInBrandingPage() {
    return <LinkedInBrandingClient />;
}
