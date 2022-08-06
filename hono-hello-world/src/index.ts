import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello! Hono!"));
app.get("/entry/:id", (c) => {
    const id = c.req.param("id");
    return c.text(`id is ${id}.`);
});
app.get("/search", (c) => {
    const query = c.req.query("q");
    return c.json({ query: query });
});
app.post("/", (c) => c.text("post request."));

app.fire();
