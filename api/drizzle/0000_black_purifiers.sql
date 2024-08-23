CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer,
	"categoryId" integer,
	"amount" integer,
	"date" varchar,
	"time" varchar,
	"transaction_type" varchar(256),
	"payee" varchar(256),
	"note" varchar(256)
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"icon_name" varchar(256),
	"userId" integer
);
