import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

async function testAll() {
    console.log("Starting test...");
    const fileNames = fs.readdirSync(postsDirectory);
    for (const fileName of fileNames) {
        if (!fileName.endsWith('.md')) continue;
        const slug = fileName.replace(/\.md$/, '');
        console.log(`Testing: ${slug}`);
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(remarkGfm)
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();
        console.log(`✓ ${slug} success`);
    }
    console.log("All passed.");
}

testAll().catch(console.error);
