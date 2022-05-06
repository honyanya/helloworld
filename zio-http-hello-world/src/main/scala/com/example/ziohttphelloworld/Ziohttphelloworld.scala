package com.example.ziohttphelloworld

import zhttp.http._
import zhttp.service.Server
import zio._

object Ziohttphelloworld extends App {
  val app = Http.collectZIO[Request] {
    case Method.GET -> !! / "text" => UIO(Response.text("Hello World!"))
    case Method.GET -> !! / "json" => UIO(Response.json("""{"greetings": "Hello World!"}"""))
    case Method.POST -> !! / "text" => UIO(Response.text("post request"))
    case req @ Method.POST -> !! / "parameter" =>
      req.bodyAsString.map(Response.text(_))
  }

  // Run it like any simple app
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    Server.start(8090, app).exitCode
}
