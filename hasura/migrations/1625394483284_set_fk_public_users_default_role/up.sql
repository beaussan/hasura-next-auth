alter table "public"."users"
           add constraint "users_default_role_fkey"
           foreign key ("default_role")
           references "public"."roles"
           ("value") on update restrict on delete restrict;
