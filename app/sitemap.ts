import fs from 'fs'
import path from 'path'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.moxie-digital.com"

    let blogSlugs: string[] = []
    try {
        const blogDirectory = path.join(process.cwd(), 'content', 'blog')
        const files = fs.readdirSync(blogDirectory)
        blogSlugs = files
            .filter((file) => file.endsWith('.md'))
            .map((file) => file.replace(/\.md$/, ''))
    } catch (error) {
        console.error('Error reading blog directory for sitemap:', error)
    }

    let serviceSlugs: string[] = []
    try {
        const servicesDirectory = path.join(process.cwd(), 'app', 'services')
        const files = fs.readdirSync(servicesDirectory, { withFileTypes: true })
        serviceSlugs = files
            .filter((file) => file.isDirectory() && fs.existsSync(path.join(servicesDirectory, file.name, 'page.tsx')))
            .map((file) => file.name)
    } catch (error) {
        console.error('Error reading services directory for sitemap:', error)
    }

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
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
        ...serviceSlugs.map((slug) => ({
            url: `${baseUrl}/services/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
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
