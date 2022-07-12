export default {
  port: 3000,
  fetch(request): Response {
    return new Response("Welcome to Bun!");
  },
};
