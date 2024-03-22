import type { APIRoute } from "astro";
import { files } from "../db/schema";
import { eq } from "drizzle-orm";
import { db } from "../db/db";

export const GET: APIRoute = async ({ redirect, url }) => {
    const code = url.searchParams.get('code')! || '';

    const res = await db.select().from(files).where(eq(files.words, code));
    if (res.length > 0) {
        const file = new File([res[0].data] as any, res[0].filename!, {
            type: res[0].mimeType!
        })

        return new Response(await file.arrayBuffer());
    } else {
        return redirect("/", 302);
    }
    // return new Response(JSON.stringify({ success: false }))
}