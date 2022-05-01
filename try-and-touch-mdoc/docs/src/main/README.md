# mdoc

scala

```scala
val hoge = "hoge"
```

scala mdoc

```scala mdoc
val hoge = "hoge"
```

case class

```scala mdoc
case class Person(name: String, age: Int)

val person = Person("hoge", 20)

person.name
person.age
```

zio

```scala mdoc
import zio._

def run[A](io: RIO[ZEnv, A]): A = Runtime.default.unsafeRunTask(io)

val io = ZIO.succeed(1)
run(io)
```
