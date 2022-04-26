import scala.io.StdIn.{readInt, readLine}

@main def hello: Unit = 
  sayHello
  inputHello
  showEvenOdd

def sayHello: Unit =
  println("Hello world!")
  println(msg)

def msg = "I was compiled by Scala 3. :)"

def inputHello: Unit =
  print("What's your name?: ")
  val name = readLine()

  println(s"Your name is $name Hello world!")

def showEvenOdd: Unit =
  print("input number: ")
  val number = readInt()

  if number % 2 == 0 then {
    println("even")
  } else {
    println("odd")
  }
