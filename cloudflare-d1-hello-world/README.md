# cloudflare-d1-hello-world

install

```sh
$ yarn install
```

check version

```sh
$ yarn wrangler -v
...
⛅️ wrangler 2.2.1
...
```

login

```sh
$ yarn wrangler login
```


## Check with Wrangler command

https://developers.cloudflare.com/d1/wrangler-commands/

```sh
## wrangler d1 create <database-name>
yarn wrangler d1 create hello-d1-database
...
[[ d1_databases ]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "hello-d1-database"
database_id = "********-****-****-****-************"
✨  Done in 3.57s.
```

```sh
yarn wrangler d1 list
...
┌──────────────────────────────────────┬───────────────────┐
│ uuid                                 │ name              │
├──────────────────────────────────────┼───────────────────┤
│ ********-****-****-****-************ │ hello-d1-database │
└──────────────────────────────────────┴───────────────────┘
...
```

```sh
## yarn wrangler d1 execute <database-name> --command "<SQL-query>"
yarn wrangler d1 execute hello-d1-database --command "SELECT 'Hello D1!' AS hello_world"
...
┌─────────────┐
│ hello_world │
├─────────────┤
│ Hello D1!   │
└─────────────┘
...
```

local execute

```
yarn wrangler d1 execute hello-d1-database --local --file=./schema.sql

yarn wrangler d1 execute hello-d1-database --local --command "SELECT id, company_name, contact_name FROM customers"
...
┌────┬─────────────────────┬───────────────────┐
│ id │ company_name        │ contact_name      │
├────┼─────────────────────┼───────────────────┤
│ 1  │ Alfreds Futterkiste │ Maria Anders      │
├────┼─────────────────────┼───────────────────┤
│ 4  │ Around the Horn     │ Thomas Hardy      │
├────┼─────────────────────┼───────────────────┤
│ 11 │ Bs Beverages        │ Victoria Ashworth │
├────┼─────────────────────┼───────────────────┤
│ 13 │ Bs Beverages        │ Random Name       │
└────┴─────────────────────┴───────────────────┘
...

```

d1 execute

```sh
yarn wrangler d1 execute hello-d1-database --file=./schema.sql

yarn wrangler d1 execute hello-d1-database --command "SELECT id, company_name, contact_name FROM customers"
...
┌─────────────────────┬───────────────────┬────┐
│ company_name        │ contact_name      │ id │
├─────────────────────┼───────────────────┼────┤
│ Alfreds Futterkiste │ Maria Anders      │ 1  │
├─────────────────────┼───────────────────┼────┤
│ Around the Horn     │ Thomas Hardy      │ 4  │
├─────────────────────┼───────────────────┼────┤
│ Bs Beverages        │ Victoria Ashworth │ 11 │
├─────────────────────┼───────────────────┼────┤
│ Bs Beverages        │ Random Name       │ 13 │
└─────────────────────┴───────────────────┴────┘
...
```