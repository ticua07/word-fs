import type { APIRoute } from "astro";
import { db } from "../../db/db";
import { files } from "../../db/schema";
import { eq } from "drizzle-orm";

export const POST: APIRoute = async ({ request }) => {
    if (request.headers.get("Content-Type") === "application/json") {
        const data = await request.json()
        const words = data.words

        const res = await db.select({
            words: files.words,
            filename: files.filename,
            createdAt: files.createdAt,
            mimeType: files.mimeType
        }).from(files).where(eq(files.words, words))

        if (res.length > 0) {
            return new Response(JSON.stringify({ ...res[0], success: true }))
        } else {
            return new Response(JSON.stringify({ success: false }))
        }

    } else {
        return new Response(JSON.stringify({ success: false }))
    }
}