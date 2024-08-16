DO $$ BEGIN
 CREATE TYPE "public"."recordType" AS ENUM('INCOME', 'EXPENSE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"amount" integer,
	"type" "recordType",
	"userId" integer
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256),
	"password" varchar(256)
);

DO $$ BEGIN
 ALTER TABLE "category" ADD CONSTRAINT "category_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "records" ADD CONSTRAINT "records_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
