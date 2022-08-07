# hono-hello-world

https://github.com/honojs/hono

https://honojs.dev/

```
$ yarn start

## other terminal
## http://localhost:8787
$ curl -XGET http://localhost:8787/
Hello! Hono!

$ curl -XGET http://localhost:8787/entry/honyanya
id is honyanya.

$ curl -XGET "http://localhost:8787/search?q=hono"
{"query":"hono"}

$ curl -XPOST http://localhost:8787/
post request.
```
