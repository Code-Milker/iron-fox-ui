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

// export const createComponent = () => {
//   let state: unknown; // Initial state is unknown before `setState` is called.
//
//   const component = {
//     setState: <T extends Record<string, unknown>>(stateFn: () => T) => {
//       state = stateFn(); // Infer the state type.
//       return {
//         build: () => ({
//           state: state as T, // Cast state to the inferred type.
//         }),
//       };
//     },
//   };
//
//   return component;
// };
//
//
// type NonEmptyPartial<T> = {
//   [K in keyof T]-?: { [P in K]: T[P] } & Partial<T>;
// }[keyof T];
type NonEmptyPartial<T> = {
  [K in keyof T]-?: { [P in K]: T[P] } & Partial<T>;
}[keyof T];

// Function to initialize state
const initializeState = <TState extends Record<string, unknown>>(
  stateFn: () => TState,
): TState => {
  return stateFn();
};

// Function to initialize actions
const initializeActions = <
  TState extends Record<string, unknown>,
  TActions extends Record<string, (...args: any[]) => NonEmptyPartial<TState>>,
>(
  actionsObj: TActions,
  state: TState,
): {
  [K in keyof TActions]: (
    ...args: Parameters<TActions[K]> extends [any, ...infer P] ? P : never
  ) => void;
} => {
  return Object.keys(actionsObj).reduce(
    (acc, key) => {
      acc[key] = (...args: any[]) => {
        const partialState = actionsObj[key]({ state }, ...args); // Automatically inject `ctx`
        Object.assign(state, partialState); // Merge the returned partial state into the existing state
      };
      return acc;
    },
    {} as {
      [K in keyof TActions]: (
        ...args: Parameters<TActions[K]> extends [any, ...infer P] ? P : never
      ) => void;
    },
  );
};

// Main builder function
export const createComponent = () => {
  let state: any; // Temporarily use `any` until inferred by `setState`
  let actions: Record<string, (...args: any[]) => void> = {};

  const setState = <TState extends Record<string, unknown>>(
    stateFn: () => TState,
  ) => {
    state = initializeState(stateFn); // Infer state type here

    const setActions = <
      TActions extends Record<
        string,
        (ctx: { state: TState }, ...args: any[]) => NonEmptyPartial<TState>
      >,
    >(
      actionsObj: TActions,
    ) => {
      actions = initializeActions(actionsObj, state); // Automatically inject `ctx` into actions

      const build = () => ({
        state: state as TState, // Preserve inferred type
        actions: actions as {
          [K in keyof TActions]: (
            ...args: Parameters<TActions[K]> extends [any, ...infer P] ? P
              : never
          ) => void;
        },
      });

      return { build };
    };

    const build = () => ({
      state: state as TState, // Ensure correct type is preserved
    });

    return { setActions, build };
  };

  return { setState };
};
