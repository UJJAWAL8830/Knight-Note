import { drizzle } from 'drizzle-orm/neon-http';

export const db = drizzle(process.env.DATABASE_URL!);

// 1) env for the better auth secret and url
// 2) drizzle config file for the database connection and migrations
// 3) drizzle auth.ts file for the database connection using drizzle-orm and neon-http

