import index from "./index.html";

const port = Number(process.env.PORT ?? 5180);

Bun.serve({
  port,
  routes: {
    "/": index,
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log(`Mythoras ADE prototype (throwaway) → http://localhost:${port}`);
