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

$ curl -XPOST http://localhost:8090/parameter -d "key1=value1" -d "key2=value2"
key1=value1&key2=value2
```
