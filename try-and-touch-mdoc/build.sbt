ThisBuild / scalaVersion     := "2.13.8"
ThisBuild / version          := "0.1.0-SNAPSHOT"
ThisBuild / organization     := "com.example"
ThisBuild / organizationName := "example"

lazy val root = (project in file("."))
  .settings(
    name := "try-and-touch-mdoc"
  )

lazy val docs = (project in file("docs"))
  .settings(name := "docs-seed")
  .enablePlugins(MdocPlugin)
  .settings(mdocIn := file("docs/src/main"))
  .settings(mdocOut := file("docs/mdoc"))
