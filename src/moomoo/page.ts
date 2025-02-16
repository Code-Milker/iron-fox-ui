import { join } from "https://deno.land/std@0.224.0/path/join.ts";
import { htmlFolderPath, publicFolderPath } from "../types.ts";
import { renderTemplateWithContext } from "./moo-moo.ts";

export const fetchDependencies = (
  dependencies: Record<string, string>,
) => {
  // Generate script imports for dependencies
  const scriptTags = Object.entries(dependencies)
    .map(
      ([globalVar, url]) => `
      <script type="module">
        import * as ${globalVar} from "${url}";
        window.${globalVar} = ${globalVar}; // Attach to global window
      </script>`,
    )
    .join("\n");
  return scriptTags;
};

export const generatePage = async (page: string, dependencies: any) => {
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
  const moo = await Deno.readTextFile(
    join(Deno.cwd(), htmlFolderPath, "moo.html"),
  );
  let template = await Deno.readTextFile(filePath);
  for (
    const [key, value] of Object.entries({
      header,
      footer,
      moo,
      page: page,
      css: '<link rel="stylesheet" href="styles.css">',
      title: "hey",
      dependencies: fetchDependencies(dependencies ?? {}),
    })
  ) {
    template = template.replaceAll(`\${${key}}`, value);
  }
  return template;
};
