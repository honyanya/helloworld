# jsonnet-hello-world

install jsonnet

```sh
$ brew install jsonnet
$ jsonnet -v
Jsonnet commandline interpreter v0.18.0
```

jsonnet to json

```sh
$ cat helloworld.jsonnet
local value = "Hello World!";

{
    key: value
}

$ jsonnet helloworld.jsonnet
{
   "key": "Hello World!"
}
```
