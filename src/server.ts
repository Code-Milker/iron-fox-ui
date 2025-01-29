import { join } from "https://deno.land/std/path/mod.ts";
import foxTraceRoute from "./fox-trace/routes/fox-trace.ts";
import mainRoute from "./main/main.ts";
import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
const app = new Application();

app.use(mainRoute.routes());
app.use(mainRoute.allowedMethods());
app.use(foxTraceRoute.routes());
app.use(foxTraceRoute.allowedMethods());

app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  try {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`, // Serve files from the "public" folder
    });
  } catch {
    await next(); // Proceed to other routes if file not found
  }
});

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Server running on ${secure ? "https://" : "http://"}${
      hostname ??
        "localhost"
    }:${port}`,
  );
});

// Start the server
const PORT = 8000;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
