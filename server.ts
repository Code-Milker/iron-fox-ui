import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { Handlebars } from "https://deno.land/x/handlebars/mod.ts";
import { join, dirname } from "https://deno.land/std/path/mod.ts";

// Initialize application and router
const app = new Application();
const router = new Router();

// Initialize Handlebars
const handlebars = new Handlebars({
  baseDir: "./views",
  extname: ".hbs",
  layoutsDir: "layouts",
  partialsDir: "partials",
  defaultLayout: "main",
});

// Middleware: Serve static files from "public" folder
app.use(async (ctx, next) => {
  try {
    const filePath = join(Deno.cwd(), "public", ctx.request.url.pathname);
    await send(ctx, ctx.request.url.pathname, {
      root: join(Deno.cwd(), "public"),
      index: "index.html", // Serve index.html for root path if available
    });
  } catch {
    await next(); // Proceed to other routes if the file is not found
  }
});

// Route: Home Page
router.get("/", async (ctx) => {
  try {
    const data = {
      title: "Welcome",
      message: "Please enter your address or transaction hash.",
    };
    ctx.response.body = await handlebars.renderView("home", data);
  } catch (err) {
    console.error("Error rendering template:", err);
    ctx.response.status = 500;
    ctx.response.body = "Internal Server Error";
  }
});

// Route: Catch-All for 404 Errors
router.get("(.*)", (ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "404 - Page Not Found";
});

// Use Router
app.use(router.routes());
app.use(router.allowedMethods());

// Start the Server
const PORT = 8000;
console.log(`Server running at http://localhost:${PORT}`);
await app.listen({ port: PORT });
