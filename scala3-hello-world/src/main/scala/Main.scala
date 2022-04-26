import scala.io.StdIn.readLine

@main def hello: Unit = 
  sayHello
  inputHello

def sayHello: Unit =
  println("Hello world!")
  println(msg)

def msg = "I was compiled by Scala 3. :)"

def inputHello: Unit =
  print("What's your name?: ")
  val name = readLine()

  println(s"Your name is $name Hello world!")
