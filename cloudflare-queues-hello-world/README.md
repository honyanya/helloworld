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

```sh
## wrangler queues create <queue-name>
yarn wrangler queues create hello-d1-database
...
Creating queue hello-queue.
Created queue hello-queue.
✨  Done in 1.59s.
```

```sh
## wrangler queues list
yarn wrangler queues list
...
[{"queue_id":"*****","queue_name":"hello-queue","created_on":"2022-11-15T14:49:15.236647Z","modified_on":"2022-11-15T14:49:15.236647Z","producers_total_count":0,"producers":[],"consumers_total_count":0,"consumers":[]}]
...
```
