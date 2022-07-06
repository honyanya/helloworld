import zio._
import zio.Console._

object MyApp extends ZIOAppDefault {

  def request(counter: Ref[Int]) = {
    for {
      rn <- counter.modify(c => (c + 1, c + 1))
      _  <- Console.printLine(s"request number received: $rn")
    } yield ()
  }

  private val initial = 0
  private val myApp =
    for {
      ref <- Ref.make(initial)
      _ <- request(ref) zipPar request(ref)
      rn <- ref.get
      _ <- Console.printLine(s"total requests performed: $rn")
    } yield ()

  def run = myApp
}
