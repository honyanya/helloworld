# mdoc

scala

```scala
val hoge = "hoge"
```

scala mdoc

```scala
val hoge = "hoge"
// hoge: String = "hoge"
```

case class

```scala
case class Person(name: String, age: Int)

val person = Person("hoge", 20)
// person: Person = Person(name = "hoge", age = 20)

person.name
// res0: String = "hoge"
person.age
// res1: Int = 20
```

zio

```scala
import zio._

def run[A](io: RIO[ZEnv, A]): A = Runtime.default.unsafeRunTask(io)

val io = ZIO.succeed(1)
// io: UIO[Int] = zio.ZIO$EffectTotal@75885490
run(io)
// res2: Int = 1
```
