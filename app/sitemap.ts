import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.moxie-digital.com"

    const blogSlugs = [
        'founder-led-marketing-saas-2026',
        'b2b-founders-linkedin-content',
        'agency-vs-in-house-vs-founder-led',
        'linkedin-growth-strategy-b2b',
        'what-is-brand-strategy',
        'personal-branding-for-executives',
        'b2b-branding-agency-vs-founder',
        'brand-awareness-campaign-guide',
        'what-does-a-branding-consultant-do',
        'top-marketing-agencies-comparison',
        'personal-branding-agency-guide',
        // AEO / AI Search cluster
        'answer-engine-optimization-guide',
        'seo-vs-aeo-2026',
        'generative-engine-optimization-guide',
        'zero-click-search-strategy',
        'ai-agents-for-marketing',
        // Content & Email cluster
        'content-repurposing-strategy',
        'email-marketing-b2b',
        'newsletter-community-building',
        // LinkedIn & Personal Branding
        'linkedin-personal-branding',
        'seo-for-b2b-saas',
    ]

    const toolSlugs = [
        'linkedin-profile-grader',
        'founder-brand-score',
        'linkedin-hook-generator',
        'content-idea-generator',
        'content-agency-quiz',
        'founder-roi-calculator',
    ]

    return [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/services/b2b`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/b2c`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        ...blogSlugs.map((slug) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        ...toolSlugs.map((slug) => ({
            url: `${baseUrl}/tools/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
    ]
}
