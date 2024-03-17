import { sql } from "drizzle-orm";
import { text, sqliteTable, blob } from "drizzle-orm/sqlite-core";

export const files = sqliteTable('files', {
    words: text("words"),
    data: blob("data"),
    filename: text("filename"),
    mimeType: text("mimetype"),
    createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});