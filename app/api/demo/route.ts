import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, role, message, newsletter } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const notionSecret = process.env.NOTION_API_KEY;
        const databaseId = process.env.NOTION_DATABASE_ID;

        // If keys are not configured, simulate success (for demo/dev without keys)
        if (!notionSecret || !databaseId) {
            console.warn("Notion API keys not configured. Simulating success response.");
            console.log("Captured Data:", body);
            // Simulate a short delay to see loading state
            await new Promise(resolve => setTimeout(resolve, 1500));
            return NextResponse.json({ success: true, simulated: true });
        }

        const notion = new Client({ auth: notionSecret });

        const response = await notion.pages.create({
            parent: {
                database_id: databaseId,
            },
            properties: {
                // 'Name' is typically the title property of a new DB
                Name: {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                Email: {
                    email: email,
                },
                Newsletter: {
                    checkbox: newsletter === true,
                },
                Role: {
                    rich_text: [
                        {
                            text: {
                                content: role || "Not specified",
                            },
                        },
                    ],
                },
                "Requirements/Message": {
                    rich_text: [
                        {
                            text: {
                                content: message,
                            },
                        },
                    ],
                },
            },
        });

        return NextResponse.json({ success: true, id: response.id });
    } catch (error: any) {
        console.error("Error submitting to Notion:", error);
        return NextResponse.json(
            { error: error.message || 'Error occurred connecting to Notion' },
            { status: 500 }
        );
    }
}
