import { join } from "https://deno.land/std/path/mod.ts";
import { htmlFolderPath, publicFolderPath } from "../types.ts";
async function render(
  filePath: string,
  vars: Record<string, string>,
): Promise<string> {
  let template = await Deno.readTextFile(filePath);

  for (const [key, value] of Object.entries(vars)) {
    template = template.replaceAll(`\${${key}}`, value);
  }
  return template;
}
export const tempRender = async (page: string) => {
  const filePath = join(Deno.cwd(), publicFolderPath, "index.html");

  const cssContent = await Deno.readTextFile(
    join(Deno.cwd(), publicFolderPath, "styles.css"),
  );
  const header = await Deno.readTextFile(
    join(Deno.cwd(), htmlFolderPath, "header.html"),
  );
  const footer = await Deno.readTextFile(
    join(Deno.cwd(), htmlFolderPath, "footer.html"),
  );
  const content = await render(
    filePath,
    {
      header,
      footer,
      page: page,
      css: cssContent,
      title: "hey",
    },
  );
  return content;
};
// export const tempRenderComponent = (page: string) => {
//   const renderApp = createComponent("tempRender")
//     .addProvider({})
//     .setState(async () => {
//       const cssPath = join(Deno.cwd(), "src/public", "styles.css");
//       const cssContent = await Deno.readTextFile(cssPath);
//       return {
//         title: "Iron Fox",
//         styles: `<style>${cssContent}</style>`, // Embed CSS directly into the HTML
//       };
//     })
//     .addActions({})
//     .addSideEffects({})
//     .addChildren({
//       header: () =>
//         interpolateFileSync(
//           join(Deno.cwd(), htmlFolderPath, "header.html"),
//           {},
//         ),
//       footer: () =>
//         interpolateFileSync(
//           join(Deno.cwd(), htmlFolderPath, "footer.html"),
//           {},
//         ),
//       page: () => page,
//     })
//     .setTemplate((ctx) => {
//       return interpolateFileSync(
//         join(Deno.cwd(), "src/public", "index.html"),
//         {},
//       );
//     })
//     .render()
//     .template();
//   return renderApp;
// };

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
