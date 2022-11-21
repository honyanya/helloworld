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

wrangler dev

```
yarn start --local --persist

## other terminal
curl http://127.0.0.1:8787
Call /api/beverages to see everyone who works at Bs Beverage

curl http://127.0.0.1:8787/api/beverages -s | jq
[
  {
    "id": 11,
    "company_name": "Bs Beverages",
    "contact_name": "Victoria Ashworth"
  },
  {
    "id": 13,
    "company_name": "Bs Beverages",
    "contact_name": "Random Name"
  }
]
```

deploy

```sh
yarn wrangler publish
...
Your worker has access to the following bindings:
- D1 Databases:
  - dev: hello-d1-database (********-****-****-****-************)
Total Upload: 5.11 KiB / gzip: 1.74 KiB
Uploaded cloudflare-d1-hello-world (1.23 sec)
Published cloudflare-d1-hello-world (3.92 sec)
  https://cloudflare-d1-hello-world.{*****}.workers.dev
Current Deployment ID: ********-****-****-****-************
...

## other terminal
curl https://cloudflare-d1-hello-world.{*****}.workers.dev
Call /api/beverages to see everyone who works at Bs Beverages

curl https://cloudflare-d1-hello-world.{*****}.workers.dev/api/beverages -s | jq
[
  {
    "company_name": "Bs Beverages",
    "contact_name": "Victoria Ashworth",
    "id": 11
  },
  {
    "company_name": "Bs Beverages",
    "contact_name": "Random Name",
    "id": 13
  }
]
```