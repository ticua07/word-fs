import { sql } from "drizzle-orm";
import { text, sqliteTable, blob } from "drizzle-orm/sqlite-core";

export const files = sqliteTable('files', {
    words: text("words"),
    data: blob("data"),
    createdAt: text("createdAt").default(sql`CURRENT_TIMESTAMP`),
});