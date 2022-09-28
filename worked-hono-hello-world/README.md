# worked-hono-hello-world

```sh
$ yarn install
$ yarn esbuild --bundle --format=esm --outfile=dist/worker.mjs src/index.ts
$ yarn workerd serve config.capnp

## other terminal
$ curl -XGET http://localhost:8080/
Hello worked
```
