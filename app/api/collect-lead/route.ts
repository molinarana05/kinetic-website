import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, role, message, newsletter, company, toolName, result } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
            console.log("⚠️ Notion env vars not set. Lead received:", { name, email, role });
            return NextResponse.json({ success: true, fallback: true });
        }

        const notion = new Client({ auth: NOTION_API_KEY });

        const response = await notion.pages.create({
            parent: { database_id: NOTION_DATABASE_ID },
            properties: {
                "Name": {
                    title: [{ text: { content: name || email } }]
                },
                "Email": {
                    email: email
                },
                "Newsletter": {
                    checkbox: newsletter === true
                },
                "Role": {
                    rich_text: [{ text: { content: role || company || "Not specified" } }]
                },
                "Requirements/Message": {
                    rich_text: [{ 
                        text: { 
                            content: message || (toolName ? `Tool: ${toolName}\nResult: ${JSON.stringify(result)}` : "No message provided") 
                        } 
                    }]
                }
            }
        });

        return NextResponse.json({ success: true, id: response.id });
    } catch (err: any) {
        console.error("collect-lead error:", err);
        return NextResponse.json({ success: true, error: err.message });
    }
}
