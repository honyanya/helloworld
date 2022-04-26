import scala.io.StdIn.readLine

@main def hello: Unit =
  print("What's your name?: ")
  val name = readLine()

  println(s"Your name is $name Hello world!")
