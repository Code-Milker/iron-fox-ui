import { Application, Router } from "https://deno.land/x/oak/mod.ts";
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

// Route: Serve the home page with embedded CSS
router.get("/", async (ctx) => {
  const filePath = join(Deno.cwd(), "public", "index.html");
  const cssPath = join(Deno.cwd(), "public", "styles.css");
  console.log(cssPath)
  const cssContent = await Deno.readTextFile(cssPath);

  console.log(cssPath)
console.log(cssContent)
  const content = await renderHTMLWithPartials(
    filePath,
    {
      header: join(Deno.cwd(), "partials", "header.html"),
      footer: join(Deno.cwd(), "partials", "footer.html"),
      input: join(Deno.cwd(), "partials", "input.html"),
    },
    {
      title: "Welcome to My App",
      welcomeMessage: "Hello, Dynamic World!",
      description: "This page has embedded styles.",
      styles: `<style>${cssContent}</style>`, // Embed CSS directly into the HTML
    }
  );

  ctx.response.body = content;
});

// Use routes
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const PORT = 8000;
console.log(`Server is running on http://localhost:${PORT}`);
await app.listen({ port: PORT });
