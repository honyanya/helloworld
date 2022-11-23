export interface Env {
    dev: D1Database;
}

export default {
    async fetch(request: Request, env: Env) {
        const { pathname } = new URL(request.url);

        if (pathname === "/api/beverages") {
            const { results } = await env.dev.prepare(
                "SELECT id, company_name, contact_name FROM customers WHERE company_name = ?"
            )
            .bind("Bs Beverages")
            .all();
            return Response.json(results);
        }

        if (pathname === "/api/futterkiste") {
            const { results } = await env.dev.prepare(
                "SELECT id, company_name, contact_name FROM customers WHERE company_name = ?"
            )
            .bind("Alfreds Futterkiste")
            .all();
            return Response.json(results);
        }

        if (pathname === "/api/horn") {
            const { results } = await env.dev.prepare(
                "SELECT id, company_name, contact_name FROM customers WHERE company_name = ?"
            )
            .bind("Around the Horn")
            .all();
            return Response.json(results);
        }

        return new Response(
            "Call /api/beverages to see everyone who works at Bs Beverages"
        );
    },
};
