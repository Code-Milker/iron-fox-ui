import { join } from "https://deno.land/std/path/mod.ts";
import generateReportRoute from "./routes/generate-report.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { transpile } from "https://deno.land/x/emit@0.40.0/mod.ts";

const app = new Application();
const router = new Router();

app.use(generateReportRoute.routes());
app.use(generateReportRoute.allowedMethods());

// Helper function: Render HTML with partials, variables, and dynamic TypeScript
async function renderHTMLWithDynamicTS(
  filePath: string,
  partials: Record<string, string>,
  vars: Record<string, string>,
  tsFilePath: string,
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

  // Transpile TypeScript to JavaScript
  const tsCode = await Deno.readTextFile(tsFilePath);
  const url = new URL(tsFilePath, import.meta.url);
  const result = await transpile(url);
  const jsCode = result.get(url.href);

  // Inject transpiled JavaScript
  template = template.replaceAll("{{scripts}}", `<script>${jsCode}</script>`);
  console.log(template);

  return template;
}

// Route: Serve the home page with embedded CSS and dynamic TypeScript
router.get("/", async (ctx) => {
  const filePath = join(Deno.cwd(), "src/public", "index.html");
  const cssPath = join(Deno.cwd(), "src/public", "styles.css");
  const tsPath = join(Deno.cwd(), "src/public", "test.ts");

  const cssContent = await Deno.readTextFile(cssPath);
  const content = await renderHTMLWithDynamicTS(
    filePath,
    {
      header: join(Deno.cwd(), "src/partials", "header.html"),
      footer: join(Deno.cwd(), "src/partials", "footer.html"),
      card: join(Deno.cwd(), "src/partials", "card.html"),
    },
    {
      title: "Iron Fox",
      welcomeMessage: "Hello, Dynamic World!",
      styles: `<style>${cssContent}</style>`, // Embed CSS directly into the HTML
    },
    tsPath, // Pass the TypeScript file path
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
