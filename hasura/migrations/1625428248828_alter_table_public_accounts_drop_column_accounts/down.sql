ALTER TABLE "public"."accounts" ADD COLUMN "accounts" text;
ALTER TABLE "public"."accounts" ALTER COLUMN "accounts" DROP NOT NULL;
ALTER TABLE "public"."accounts" ADD CONSTRAINT accounts_accounts_key UNIQUE (accounts);
