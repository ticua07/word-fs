import type { APIRoute } from "astro";
import { db } from "../../db/db";
import { files } from "../../db/schema";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
        const data = await request.json()
        const words = data.words

        const res = await db.select().from(files).where(eq(files.words, words));
        if (res.length > 0) {
            const blob = new Blob([res[0].data] as any)
            return new Response(await blob.arrayBuffer());
        } else {
            return new Response(JSON.stringify({ success: false }))
        }
    } else {
        return new Response(JSON.stringify({ success: false }))
    }
}

export const GET: APIRoute = async ({ request, url }) => {
    const code = url.searchParams.get('code')! || '';

    const res = await db.select().from(files).where(eq(files.words, code));
    if (res.length > 0) {
        const file = new File([res[0].data] as any, res[0].filename!, {
            type: res[0].mimeType!
        })

        return new Response(await file.arrayBuffer());
    } else {
        return new Response(JSON.stringify({ success: false }))
    }
    // return new Response(JSON.stringify({ success: false }))
}
