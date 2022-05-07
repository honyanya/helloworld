package com.example.ziohttphelloworld

import zio.test._
import zio.test.Assertion._
import zhttp.http._

object ZiohttphelloworldSpec extends DefaultRunnableSpec {
  override def spec: ZSpec[Environment, Failure] = suite("""ZiohttphelloworldSpec""")(
    testM("200 ok") {
      checkAllM(Gen.fromIterable(List("text", "json"))) { uri =>
        val request = Request(Method.GET, URL(!! / uri))
        assertM(Ziohttphelloworld.app(request).map(_.status))(equalTo(Status.OK))
      }
      checkAllM(Gen.fromIterable(List("parameter"))) { uri =>
        val request = Request(Method.POST, URL(!! / uri))
        assertM(Ziohttphelloworld.app(request).map(_.status))(equalTo(Status.OK))
      }
    },
  )
}
