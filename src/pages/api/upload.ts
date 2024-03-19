import type { APIRoute } from "astro";
import { db } from "../../db/db";
import { files } from "../../db/schema";
import { getRandomWord } from "../../utils/getRandomWord";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const file = data.get("upload") as File;
    const words = `${getRandomWord()};${getRandomWord()};${getRandomWord()}`

    await db.insert(files).values({
        data: await file.arrayBuffer(),
        filename: file.name,
        words: words,
        mimeType: file.type
    })

    return new Response(JSON.stringify({ code: words }))
}