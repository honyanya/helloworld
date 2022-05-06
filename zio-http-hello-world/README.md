# zio-http-hello-world

create project

```sh
$ sbt new dream11/zio-http.g8
```

run

```sh
$ sbt
> ~reStart
...
root Server started on port: 8090

## other terminal
$ curl -XGET http://localhost:8090/text
Hello World!

$ curl -XGET http://localhost:8090/json
{"greetings": "Hello World!"}

$ curl -XPOST http://localhost:8090/text
post request
```
