# bun-ts-hello-world

add types

```sh
$ bun add bun-types
```

add tsconfig

```sh
$ cat tsconfig.json
{
  "compilerOptions": {
    "types": ["bun-types"]
  }
}
```

run

```sh
$ bun run http.js 

## other terminal
$ curl http://localhost:3000/
Welcome to Bun
```
