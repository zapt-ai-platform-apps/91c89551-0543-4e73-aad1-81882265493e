import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const jokes = pgTable('jokes', {
  id: serial('id').primaryKey(),
  setup: text('setup').notNull(),
  punchline: text('punchline').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  userId: uuid('user_id').notNull(),
});

export const aiRequests = pgTable('ai_requests', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull(),
  requestType: text('request_type').notNull(),
  input: text('input').notNull(),
  response: text('response'),
  createdAt: timestamp('created_at').defaultNow(),
});