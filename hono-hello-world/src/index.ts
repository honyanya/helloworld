import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello! Hono!"));
app.post("/", (c) => c.text('Hello! Hono! post request.'))

app.fire();
