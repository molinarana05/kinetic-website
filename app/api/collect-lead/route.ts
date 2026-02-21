import { NextRequest, NextResponse } from "next/server";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, toolName, result } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
            // If Notion creds are not set, still return success so users can get results
            // but log the lead server-side
            console.log("⚠️ Notion env vars not set. Lead received:", { name, email, company, toolName });
            return NextResponse.json({ success: true, fallback: true });
        }

        const now = new Date().toISOString();

        const notionPayload = {
            parent: { database_id: NOTION_DATABASE_ID },
            properties: {
                // Title / Name of the lead
                "Name": {
                    title: [{ text: { content: name || email } }]
                },
                "Email": {
                    email: email
                },
                "Company": {
                    rich_text: [{ text: { content: company || "" } }]
                },
                "Tool Used": {
                    rich_text: [{ text: { content: toolName || "" } }]
                },
                "Result / Score": {
                    rich_text: [{ text: { content: typeof result === "object" ? JSON.stringify(result, null, 2) : String(result || "") } }]
                },
                "Date": {
                    date: { start: now }
                },
                "Status": {
                    select: { name: "New Lead" }
                },
                "Source": {
                    select: { name: "Free Tool" }
                },
            }
        };

        const notionRes = await fetch("https://api.notion.com/v1/pages", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${NOTION_TOKEN}`,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            body: JSON.stringify(notionPayload),
        });

        if (!notionRes.ok) {
            const errText = await notionRes.text();
            console.error("Notion API error:", notionRes.status, errText);
            // Still return success to the user — don't block them for a CRM error
            return NextResponse.json({ success: true, crmError: true });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("collect-lead error:", err);
        return NextResponse.json({ success: true }); // Always let user through
    }
}
