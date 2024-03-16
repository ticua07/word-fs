import { migrate } from 'drizzle-orm/libsql/migrator';
import { db } from './db';

// This will run migrations on the database, skipping the ones already applied

// Run npm|yarn|pnpm|bun drizzle-kit generate:sqlite first!
await migrate(db, { migrationsFolder: 'src/db/migrations' });
