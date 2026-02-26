import { Metadata } from "next";
import { NewsletterClient } from "./NewsletterClient";

export const metadata: Metadata = {
    title: "B2B Newsletter Creation & Community Building | Moxie Digital",
    description: "Build a compounding owned audience. We create strategic B2B newsletters that turn passive industry observers into an engaged community yielding massive ROI.",
    alternates: { canonical: "https://www.moxie-digital.com/services/newsletters" },
};

export default function NewslettersPage() {
    return <NewsletterClient />;
}
