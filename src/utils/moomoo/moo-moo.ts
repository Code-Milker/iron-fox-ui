import { bundle, transpile } from "https://deno.land/x/emit@0.40.0/mod.ts";

import { join } from "https://deno.land/std/path/mod.ts";
import { delay } from "../utils.ts";
export async function render(
  filePath: string,
  partials: Record<string, string>,
  vars: Record<string, string>,
  tsFilePath: string,
): Promise<string> {
  let template = await Deno.readTextFile(filePath);

  // Inject partials (string content or file path)
  for (const [key, partialContentOrPath] of Object.entries(partials)) {
    let partialContent: string;

    // Check if the partial is a file path or direct content
    try {
      // Attempt to read as a file
      partialContent = await Deno.readTextFile(partialContentOrPath);
    } catch {
      // If it fails, treat it as a string literal
      partialContent = partialContentOrPath;
    }

    // Replace placeholder with partial content
    template = template.replaceAll(`{{${key}}}`, partialContent);
  }

  // Inject variables
  for (const [key, value] of Object.entries(vars)) {
    template = template.replaceAll(`{{${key}}}`, value);
  }

  // Transpile TypeScript to JavaScript
  if (tsFilePath !== "") {
    await delay(500);
    // const tsCode = await Deno.readTextFile(tsFilePath);
    const url = new URL(tsFilePath, import.meta.url);
    const result = await bundle(url);
    const jsCode = result.code;
    console.log(jsCode);
    // Inject transpiled JavaScript
    template = template.replaceAll(
      "{{scripts}}",
      `\n<script>${jsCode}</script>`,
    );
  }

  return template;
}
export const tempRender = async (page: string) => {
  const filePath = join(Deno.cwd(), "src/public", "index.html");
  const cssPath = join(Deno.cwd(), "src/public", "styles.css");
  const tsPath = join(Deno.cwd(), "src/public", "test.ts");
  const cssContent = await Deno.readTextFile(cssPath);
  const content = await render(
    filePath,
    {
      header: join(Deno.cwd(), "src/partials", "header.html"),
      footer: join(Deno.cwd(), "src/partials", "footer.html"),
      page: page, // Add Products Partial
    },
    {
      title: "Iron Fox",
      styles: `<style>${cssContent}</style>`, // Embed CSS directly into the HTML
    },
    tsPath, // Pass the TypeScript file path
  );
  return content;
};

export async function renderPage(
  path: string,
  partials: Record<string, string>,
  vars: Record<string, string>,
  tsFilePath: string,
): Promise<string> {
  const page = await render(path, partials, vars, tsFilePath);
  const filePath = join(Deno.cwd(), "src/public", "index.html");
  const cssPath = join(Deno.cwd(), "src/public", "styles.css");
  const tsPath = join(Deno.cwd(), "src/public", "test.ts");
  const cssContent = await Deno.readTextFile(cssPath);
  const content = await render(
    filePath,
    {
      header: join(Deno.cwd(), "src/partials", "header.html"),
      footer: join(Deno.cwd(), "src/partials", "footer.html"),
      page: page, // Add Products Partial
    },
    {
      title: "Iron Fox",
      styles: `<style>${cssContent}</style>`, // Embed CSS directly into the HTML
    },
    tsPath, // Pass the TypeScript file path
  );

  return content;
}
