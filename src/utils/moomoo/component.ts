import { bundle, transpile } from "https://deno.land/x/emit@0.40.0/mod.ts";

type ActionArgs<T extends (...args: any) => any> = Parameters<T> extends
  [any, ...infer P] ? P
  : never;

type ActionReturnType<TState> = Partial<TState>;

type SideEffectCtx<TState, TProviders> = {
  state: TState;
  providers: TProviders;
};

const initializeState = <TState extends object>(
  stateFn: () => TState,
): TState => stateFn();

const initializeActions = <
  TState extends object,
  TActions extends Record<
    string,
    (ctx: { state: TState }, ...args: any[]) => ActionReturnType<TState>
  >,
>(
  actionsObj: TActions,
  state: TState,
): TActions => {
  return actionsObj; // Simply return the actions as they are, without modification
};

const initializeSideEffects = <
  TState extends object,
  TProviders extends Record<string, any>,
  TSideEffects extends Record<
    string,
    (ctx: SideEffectCtx<TState, TProviders>) => void
  >,
>(
  sideEffectsObj: TSideEffects,
  state: TState,
  providers: TProviders,
): {
  [K in keyof TSideEffects]: () => void;
} => {
  return Object.fromEntries(
    Object.entries(sideEffectsObj).map(([key, effect]) => [
      key,
      () => effect({ state, providers }), // Single ctx parameter
    ]),
  ) as {
    [K in keyof TSideEffects]: () => void;
  };
};

//     <div>
//       <h1></h1>
//       <p><span moo='{"key":"body"}' style="display: inline;">Provide the wallet address or transaction ID associated with the stolen funds to generate a detailed report on where you
// r funds have gone and potential recovery options.</span></p>
//       <button onclick="render(ctx.actions.addSum(ctx));">Add</button>
//       <button onclick="render(ctx.actions.subtractSum(ctx));">Subtract</button>
//       <button onclick="render(ctx.actions.resetSum(ctx));">Reset</button>
//       <button onclick="ctx.sideEffects.logSum(ctx)">Log Sum</button>
//       <p>Current Sum: <span moo='{"key":"sum"}' style="display: inline;">0</span></p>
//     </div>
export const createComponent = <
  TProviders extends Record<string, any> = {}, // Generic for providers
>() => {
  let state: object | undefined;
  let actions: Record<string, (...args: any[]) => void> = {};
  let templateFn:
    | ((ctx: { state: any; actions: any; sideEffects: any }) => string)
    | null = null;
  let sideEffects: Record<string, () => void> = {};
  let providers: TProviders | undefined; // Strongly type providers

  const addProvider = <P extends TProviders>(newProviders: P) => {
    providers = newProviders; // Set providers with inferred type

    const setState = <TState extends object>(stateFn: () => TState) => {
      state = initializeState(stateFn);

      const addActions = <
        TActions extends Record<
          string,
          (ctx: { state: TState }, ...args: any[]) => ActionReturnType<TState>
        >,
      >(
        actionsObj: TActions,
      ) => {
        actions = {
          ...actions,
          ...initializeActions(actionsObj, state as TState),
        };

        const addSideEffects = <
          TSideEffects extends Record<
            string,
            (ctx: SideEffectCtx<TState, P>) => void
          >,
        >(
          sideEffectsObj: TSideEffects,
        ) => {
          if (!providers) {
            throw new Error(
              "Providers must be set before adding side effects.",
            );
          }

          sideEffects = {
            ...sideEffects,
            ...initializeSideEffects(
              // @ts-ignore
              sideEffectsObj,
              state as TState,
              providers, // Pass providers when initializing side effects
            ),
          };

          const setTemplate = (
            fn: (
              ctx: {
                state: TState;
                actions: Record<keyof TActions, string>; // Use action names here
                sideEffects: Record<keyof TSideEffects, string>; // Use side effect names here
              },
            ) => string,
          ) => {
            templateFn = fn;

            const render = () => {
              if (!state) {
                throw new Error(
                  "State is not initialized. Use setState first.",
                );
              }

              if (!providers) {
                throw new Error(
                  "State is not initialized. Use setState first.",
                );
              }
              if (!templateFn) {
                throw new Error(
                  "Template function is not set. Use setTemplate first.",
                );
              }
              const wrappedState = wrap(state, (key, value) => {
                return `<span moo='${
                  JSON.stringify({ key })
                }' style="display: inline;">${value}</span>`;
              });
              const wrappedActions = wrap(actions, (key) => {
                return `render(ctx.actions.${String(key)}(ctx));`;
              });
              const wrappedSideEffects = wrap(sideEffects, (key) => {
                return `ctx.sideEffects.${String(key)}(ctx)`;
              });
              const template = () => {
                const scriptState = `const state = ${
                  JSON.stringify(state, null, 1)
                }\n`;
                const scriptActions = `const actions = {\n${
                  Object.keys(actions).map((key) => {
                    return `${key}: ${actions[key].toString()},`;
                  }).join("\n")
                }\n}`;

                const scriptSideEffects = `const sideEffects = {\n${
                  Object.keys(sideEffects).map((key) => {
                    return `${key}: ${sideEffects[key].toString()},`;
                  }).join("\n")
                }\n}`;
                const scriptProviders = `const providers = {\n${
                  Object.keys(providers!).map((key) => {
                    return `${key}: ${providers![key].toString()},`;
                  }).join("\n")
                }\n}`;

                const script =
                  `<script>\n \n${scriptState}\n${scriptActions}\n${scriptSideEffects}\n
const ctx = {state,actions, sideEffects }

function render(updatedState) {
ctx.state = {...ctx.state,  ...updatedState}
  document.querySelectorAll("[moo]").forEach((el) => {
    const mooConfig = JSON.parse(el.getAttribute("moo"));
    const key = mooConfig.key;
    if (key && key in ctx.state) {
      el.textContent = ctx.state[key];
    }
  });}
</script>\n`;
                return [
                  script,
                  templateFn!({
                    state: wrappedState,
                    actions: wrappedActions,
                    sideEffects: wrappedSideEffects,
                  }),
                ].join("");
              };
              return {
                state: state as TState,
                actions: actions as {
                  [K in keyof TActions]: (
                    ...args: ActionArgs<TActions[K]>
                  ) => void;
                }, // Keep functions in comp.actions
                sideEffects: sideEffects as {
                  [K in keyof TSideEffects]: () => void;
                }, // Keep functions in comp.sideEffects
                providers, // Include providers for reference or debugging
                template,
              };
            };

            return { render };
          };

          return { setTemplate };
        };

        return { addSideEffects };
      };

      return { addActions };
    };

    return { setState };
  };

  return { addProvider };
};
export interface componentRenderArgs {
  markdown: string;
}

export type RenderedComponent<
  TState extends object,
  TActions extends Record<string, (...args: any[]) => any>,
  TSideEffects extends Record<string, () => void>,
  TProviders extends Record<string, any> | undefined = undefined,
> = {
  state: TState;
  actions: {
    [K in keyof TActions]: (...args: ActionArgs<TActions[K]>) => void;
  };
  sideEffects: {
    [K in keyof TSideEffects]: () => void;
  };
  providers: TProviders;
  template: () => string;
};

type AnyComponent = RenderedComponent<
  object, // The state can be any object
  Record<string, (...args: any[]) => void>, // The actions can be any set of functions
  Record<string, () => void>, // The sideEffects can be any set of functions
  Record<string, any> | undefined // Providers can be any object or undefined
>;
export async function renderComponentMarkdown(
  component: AnyComponent,
  // markdown: string,
  // partials: Record<string, string>,
  // vars: Record<string, string>,
  // tsFilePath: string,
): Promise<string> {
  const ctx = {
    state: component.state,
    actions: component.actions,
    sideEffects: component.sideEffects,
    providers: component.providers,
  };
  function stringifyWithFunctions(obj: any): string {
    return JSON.stringify(
      obj,
      (key, value) => {
        if (typeof value === "function") {
          let funcString = value.toString();
          // Remove excessive spaces and newlines
          funcString = funcString.replace(/\s+/g, " "); // Collapse all whitespace
          funcString = funcString.trim(); // Trim leading and trailing spaces
          console.log(funcString);
          return funcString;
        }
        return value;
      },
      2, // No pretty-printing
    );
  }
  // Clean the function body
  const script = `<script> const ctx =${stringifyWithFunctions(ctx)}


Object.keys(ctx.actions).forEach(function (key) {
  const fnString = ctx.actions[key];
  const start = fnString.indexOf("{") + 1;
  const end = fnString.lastIndexOf("}");
  const cleanedBody = fnString.substring(start, end).trim();
  ctx.actions[key] = new Function("ctx", cleanedBody);
});

Object.keys(ctx.sideEffects).forEach((key) => {
  const fnString = ctx.sideEffects[key];
  ctx.sideEffects[key] = new Function(
    "ctx",
    fnString.replace(/^\(\)\s*=>\s*/, "").trim()
  );
});
console.log(ctx);  
function render(updatedState) {
ctx.state = {...ctx.state,  ...updatedState}
  document.querySelectorAll("[moo]").forEach((el) => {
    const mooConfig = JSON.parse(el.getAttribute("moo"));
    const key = mooConfig.key;
    if (key && key in ctx.state) {
      el.textContent = ctx.state[key];
    }
  });
  }</script>`;
  return [script, component.template()].join("/n");
}
export async function transpileFromString(tsCode: string): Promise<string> {
  // Define a virtual module specifier
  const specifier = "data:application/typescript;base64," + btoa(tsCode);

  // Transpile the provided TypeScript code
  const result = await transpile(specifier);

  // Retrieve the transpiled JavaScript code
  const transpiledCode = result.get(specifier);

  if (!transpiledCode) {
    throw new Error("Failed to transpile the provided TypeScript code.");
  }

  return transpiledCode;
}

function wrap<T>(
  obj: T,
  markdownFn: (key: keyof T, value: T[keyof T]) => string,
): Record<keyof T, string> {
  // @ts-ignore
  return Object.keys(obj).reduce((acc, key) => {
    const typedKey = key as keyof T;
    acc[typedKey] = markdownFn(typedKey, obj[typedKey]);
    return acc;
  }, {} as Record<keyof T, string>);
}
