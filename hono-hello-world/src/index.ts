import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello! Hono!"));
app.get("/entry/:id", (c) => {
    return c.text(`id is ${c.req.param("id")}.`);
})
app.post("/", (c) => c.text("post request."));

app.fire();
