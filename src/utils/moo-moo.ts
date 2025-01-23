import { bundle, transpile } from "https://deno.land/x/emit@0.40.0/mod.ts";

import { join } from "https://deno.land/std/path/mod.ts";
import { delay } from "./utils.ts";
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
// Helper Types
type ActionArgs<T> = Parameters<T> extends [any, ...infer P] ? P : never;

type ActionReturnType<TState> = Partial<TState>;

// Helper function to initialize state
const initializeState = <TState extends object>(
  stateFn: () => TState,
): TState => stateFn();

// Helper function to initialize actions with strict typing
const initializeActions = <
  TState extends object,
  TActions extends Record<
    string,
    (ctx: { state: TState }, ...args: any[]) => ActionReturnType<TState> // Use extracted type
  >,
>(
  actionsObj: TActions,
  state: TState,
): {
  [K in keyof TActions]: (...args: ActionArgs<TActions[K]>) => void;
} => {
  return Object.fromEntries(
    Object.entries(actionsObj).map(([key, action]) => [
      key,
      (...args: any[]) => {
        const partialState = action({ state }, ...args);
        Object.assign(state, partialState); // Merge updates into the state
      },
    ]),
  ) as {
    [K in keyof TActions]: (...args: ActionArgs<TActions[K]>) => void;
  };
};

// Main builder function
export const createComponent = () => {
  let state: object | undefined; // Use `object` instead of Record<string, unknown>
  let actions: Record<string, (...args: any[]) => void> = {};
  let templateFn: ((ctx: { state: any; actions: any }) => string) | null = null;

  const setState = <TState extends object>(
    stateFn: () => TState,
  ) => {
    state = initializeState(stateFn);

    const addActions = <
      TActions extends Record<
        string,
        (ctx: { state: TState }, ...args: any[]) => ActionReturnType<TState>
      >,
    >(
      actionsObj: TActions,
    ) => {
      actions = { ...actions, ...initializeActions(actionsObj, state!) };

      const setTemplate = (
        fn: (ctx: { state: TState; actions: TActions }) => string,
      ) => {
        templateFn = fn as (ctx: { state: any; actions: any }) => string;

        const build = () => {
          if (!state) {
            throw new Error("State is not initialized. Use `setState` first.");
          }
          if (!templateFn) {
            throw new Error(
              "Template function is not set. Use `setTemplate` first.",
            );
          }

          return {
            state: state as TState,
            actions: actions as {
              [K in keyof TActions]: (...args: ActionArgs<TActions[K]>) => void;
            },
            template: () => templateFn({ state, actions }), // Template callable
          };
        };

        return { build };
      };

      return { setTemplate };
    };

    return { addActions };
  };

  return { setState };
};
