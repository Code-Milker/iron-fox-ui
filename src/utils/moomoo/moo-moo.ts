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

export function interpolateFileSync(
  filePath: string,
  vars: Record<string, any>,
): string {
  const template = Deno.readTextFileSync(filePath);

  // Step 1: Clean up unused ${ctx.<any>.<var>} placeholders
  const cleanedTemplate = template.replace(/\$\{ctx\.[^}]+\}/g, (match) => {
    // Extract the path (e.g., "ctx.name" or "ctx.address.city")
    const path = match.slice(2, -1); // Remove "${" and "}"
    const keys = path.split(".").slice(1); // Remove "ctx" and get the nested keys

    // Check if the variable exists in the `vars` object
    const value = keys.reduce((acc, key) => acc?.[key], vars);

    // TODO: Allow users to customize behavior when no value is passed.
    // Options:
    // 1. Throw an error (fail fast).
    // 2. Warn (log a message but continue).
    // 3. Replace with a default value (e.g., "" or "N/A").
    // Example:
    // if (value === undefined) {
    //   throw new Error(`Missing value for placeholder: ${match}`);
    //   // OR
    //   console.warn(`Warning: Missing value for placeholder: ${match}`);
    //   // OR
    //   return "N/A"; // Replace with a default value
    // }

    return value === undefined ? "" : match; // Remove if undefined, keep otherwise
  });

  // Step 2: Interpolate the cleaned template
  try {
    return new Function("ctx", `return \`${cleanedTemplate}\`;`)(vars);
  } catch {
    console.error(`Template: ${template}`);
    return template; // Return original for debugging
  }
}
