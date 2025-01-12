import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { join } from "https://deno.land/std/path/mod.ts";

const app = new Application();
const router = new Router();

// Helper function: Render HTML with partials and variables
async function renderHTMLWithPartials(
  filePath: string,
  partials: Record<string, string>,
  vars: Record<string, string>
): Promise<string> {
  let template = await Deno.readTextFile(filePath);

  // Inject partials
  for (const [key, partialPath] of Object.entries(partials)) {
    const partialContent = await Deno.readTextFile(partialPath);
    template = template.replaceAll(`{{${key}}}`, partialContent);
  }

  // Inject variables
  for (const [key, value] of Object.entries(vars)) {
    template = template.replaceAll(`{{${key}}}`, value);
  }

  return template;
}

// Route: Home page
router.get("/", async (ctx) => {
  const filePath = join(Deno.cwd(), "public", "index.html");
  const content = await renderHTMLWithPartials(
    filePath,
    {
      header: join(Deno.cwd(), "partials", "header.html"),
      footer: join(Deno.cwd(), "partials", "footer.html"),
    },
    {
      title: "Welcome to My App",
      welcomeMessage: "Hello, World!",
      description: "This is a dynamically generated page using partials and variables.",
    }
  );
  ctx.response.body = content;
});


// Fallback for 404
router.get("(.*)", (ctx) => {
  ctx.response.status = 404;
  ctx.response.body = "404 - Page Not Found";
});

// Apply routes and middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Middleware: Serve static files
app.use(async (ctx, next) => {
  try {
    await send(ctx, ctx.request.url.pathname, {
      root: join(Deno.cwd(), "public"),
      index: "index.html", // Serve index.html for root
    });
  } catch {
    await next();
  }
});
const PORT = 8000;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
