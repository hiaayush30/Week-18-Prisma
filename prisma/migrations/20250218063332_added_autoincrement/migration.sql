-- AlterTable
CREATE SEQUENCE todos_id_seq;
ALTER TABLE "Todos" ALTER COLUMN "id" SET DEFAULT nextval('todos_id_seq'),
ALTER COLUMN "done" SET DEFAULT false;
ALTER SEQUENCE todos_id_seq OWNED BY "Todos"."id";
