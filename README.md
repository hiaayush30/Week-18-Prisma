## Bootstrapping
- npm init -y
- npm i -D typescript
- npx tsc -init
- npx tsc -b
- npm i prisma
- npx prisma init
### create your models then migrate your db (generate and run the sql on the db)
- npx prisma migrate dev
### enter the name of the migration
Note - using psql to check db `psql -h localhost -d postgres -U postgres`
### generate client to work with the dbs
- npx prisma generate
