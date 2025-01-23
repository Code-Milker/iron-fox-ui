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

        const actionNames = Object.keys(actionsObj); // Extract action names

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
              if (!templateFn) {
                throw new Error(
                  "Template function is not set. Use setTemplate first.",
                );
              }

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
                template: () =>
                  templateFn!({
                    state,
                    actions: actionNames.reduce((acc, name) => {
                      acc[name as keyof TActions] = `${name}()`; // Add () to action names
                      return acc;
                    }, {} as Record<keyof TActions, string>), // Pass action names with () to template
                    sideEffects: Object.keys(sideEffects).reduce(
                      (acc, name) => {
                        acc[name as keyof TSideEffects] = `${name}()`; // Add () to side effect names
                        return acc;
                      },
                      {} as Record<keyof TSideEffects, string>,
                    ), // Pass side effect names with () to template
                  }),
              };
            };

            return { render };
          };
          // const setTemplate = (
          //   fn: (
          //     ctx: {
          //       state: TState;
          //       actions: Record<keyof TActions, string>; // Use action names here
          //       sideEffects: TSideEffects;
          //     },
          //   ) => string,
          // ) => {
          //   templateFn = fn;
          //
          //   const render = () => {
          //     if (!state) {
          //       throw new Error(
          //         "State is not initialized. Use setState first.",
          //       );
          //     }
          //     if (!templateFn) {
          //       throw new Error(
          //         "Template function is not set. Use setTemplate first.",
          //       );
          //     }
          //
          //     return {
          //       state: state as TState,
          //       actions: actions as {
          //         [K in keyof TActions]: (
          //           ...args: ActionArgs<TActions[K]>
          //         ) => void;
          //       }, // Keep functions in comp.actions
          //       sideEffects: sideEffects as {
          //         [K in keyof TSideEffects]: () => void;
          //       },
          //       providers, // Include providers for reference or debugging
          //       template: () =>
          //         templateFn!({
          //           state,
          //           actions: actionNames.reduce((acc, name) => {
          //             acc[name as keyof TActions] = name;
          //             return acc;
          //           }, {} as Record<keyof TActions, string>), // Pass action names to template
          //           sideEffects,
          //         }),
          //     };
          //   };
          //
          //   return { render };
          // };

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
export async function componentRender(
  component: AnyComponent,
  // markdown: string,
  // partials: Record<string, string>,
  // vars: Record<string, string>,
  // tsFilePath: string,
): Promise<string> {
  // component.
  // Inject variables
  // for (const [key, value] of Object.entries(vars)) {
  //   template = template.replaceAll(`{{${key}}}`, value);
  // }

  // Transpile TypeScript to JavaScript
  // const tsCode = await Deno.readTextFile(tsFilePath);
  // const url = new URL(tsFilePath, import.meta.url);
  // const result = await transpile('console.log(`hi`)');
  // result.
  // const jsCode = result.code;
  // console.log(jsCode);
  // Inject transpiled JavaScript
  // template = template.replaceAll(
  //   "{{scripts}}",
  //   `\n<script>${jsCode}</script>`,
  // );
  return "";
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

// Example usage
const tsCode = `
  export const add = (a: number, b: number) => a + b;
  console.log(add(2, 3));
`;

const transpiledCode = await transpileFromString(tsCode);
console.log("Transpiled Code:", transpiledCode);
