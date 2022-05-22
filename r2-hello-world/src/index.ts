interface Env {
  MY_BUCKET: R2Bucket;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    switch(request.method) {
      case "PUT":
        await env.MY_BUCKET.put(key, request.body);
        return new Response(`Put ${key} successfully!`);
      case "GET":
        const object = await env.MY_BUCKET.get(key);

        if (!object) {
          return new Response("Object Not Found.", { status: 404 });
        }

        return new Response(object.body);
      case "DELETE":
        await env.MY_BUCKET.delete(key);
        return new Response("Deleted!", { status: 200 });
      default:
        return new Response("Route Not Found.", { status: 404 });
    }
  },
};
