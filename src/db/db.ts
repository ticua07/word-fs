import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

console.log({ url: process.env.TURSO_DB_URL!, authToken: process.env.TURSO_DB_TOKEN! })
const client = createClient({ url: process.env.TURSO_DB_URL!, authToken: process.env.TURSO_DB_TOKEN! });
export const db = drizzle(client);