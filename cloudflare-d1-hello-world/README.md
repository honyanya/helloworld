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

```
## wrangler d1 create <database-name>
yarn wrangler d1 create hello-d1-database
...
[[ d1_databases ]]
binding = "DB" # i.e. available in your Worker on env.DB
database_name = "hello-d1-database"
database_id = "********-****-****-****-************"
✨  Done in 3.57s.
```


```
yarn wrangler d1 list
...
┌──────────────────────────────────────┬───────────────────┐
│ uuid                                 │ name              │
├──────────────────────────────────────┼───────────────────┤
│ ********-****-****-****-************ │ hello-d1-database │
└──────────────────────────────────────┴───────────────────┘
...
```

```
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
