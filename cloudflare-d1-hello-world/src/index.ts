export interface Env {
    dev: D1Database;
}

export default {
    async fetch(request: Request, env: Env) {
        const { pathname } = new URL(request.url);

        if (pathname === "/api/beverages") {
            const { results } = await search("Bs Beverages", env);
            return Response.json(results);
        }

        if (pathname === "/api/futterkiste") {
            const { results } = await search("Alfreds Futterkiste", env);
            return Response.json(results);
        }

        if (pathname === "/api/horn") {
            const { results } = await search("Around the Horn", env);
            return Response.json(results);
        }

        return new Response(
            "Call /api/beverages to see everyone who works at Bs Beverages"
        );
    },
};

const search = async (bind: string, env: Env): Promise<D1Result> => {
    return await env.dev.prepare(
        "SELECT id, company_name, contact_name FROM customers WHERE company_name = ?"
    )
    .bind(bind)
    .all();
}
