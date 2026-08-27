import type { Metadata } from "next";

const SITE = "https://www.moxie-digital.com";
const OG_IMAGE = {
    url: `${SITE}/og-default.png`,
    width: 1200,
    height: 630,
    alt: "Moxie Digital - Full-Stack Content Studio",
};

/**
 * Shared per-page metadata builder.
 *
 * `title` is the bare page title WITHOUT the "| Moxie Digital" suffix —
 * the root layout's title template appends the brand exactly once.
 * openGraph/twitter titles do NOT pass through the template, so the
 * suffix is added explicitly here.
 *
 * `path` is the site-relative path ("/services/aeo"); it drives both the
 * canonical URL and og:url so the two can never disagree.
 */
export function pageMeta(opts: {
    title: string;
    description: string;
    path: string;
}): Metadata {
    const url = `${SITE}${opts.path}`;
    const brandedTitle = `${opts.title} | Moxie Digital`;
    return {
        title: opts.title,
        description: opts.description,
        alternates: { canonical: url },
        openGraph: {
            title: brandedTitle,
            description: opts.description,
            url,
            siteName: "Moxie Digital",
            images: [OG_IMAGE],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: brandedTitle,
            description: opts.description,
            creator: "@MoxieDigital",
            images: [OG_IMAGE.url],
        },
    };
}
