CREATE TABLE "ai_requests" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL,
  "request_type" TEXT NOT NULL,
  "input" TEXT NOT NULL,
  "response" TEXT,
  "created_at" TIMESTAMP DEFAULT NOW()
);