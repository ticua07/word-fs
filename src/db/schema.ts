import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const foo = sqliteTable('foo', {
    name: text('name'),
});