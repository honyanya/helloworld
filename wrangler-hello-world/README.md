# wrangler-hello-world

install

```sh
$ yarn global add wrangler
$ wrangler -v
2.0.5
```

create project

```sh
$ wrangler init wrangler-hello-world
$ cd wrangler-hello-world/
$ yarn install
```

run

```sh
$ yarn wrangler dev
...
⬣ Listening at http://localhost:8787
...

## other terminal
$ curl -XGET http://localhost:8787
Hello World!
```

worker deploy

```sh
$ wrangler publish
```
