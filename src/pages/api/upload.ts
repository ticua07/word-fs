import type { APIRoute } from "astro";
import { db } from "../../db/db";
import { files } from "../../db/schema";

export const POST: APIRoute = async ({ request }) => {
    const data = await request.formData();
    const file = data.get("upload") as File;

    const results = await db.insert(files).values({
        data: await file.arrayBuffer(),
        filename: file.name,
        words: "hola;mundo;como",
        mimeType: file.type
    })
    console.log(results)

    return new Response("hola!")
}