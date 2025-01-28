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
      () => {
        state, providers;
      }, // Single ctx parameter
    ]),
  ) as {
    [K in keyof TSideEffects]: () => void;
  };
};
const initializeChildren = <
  TState extends object,
  TProviders extends Record<string, any>,
  TChildren extends Record<
    string,
    (ctx: SideEffectCtx<TState, TProviders>) => string
  >,
>(
  childrenObj: TChildren,
  state: TState,
  providers: TProviders,
): {
  [K in keyof TChildren]: () => string;
} => {
  return Object.fromEntries(
    Object.entries(childrenObj).map(([key, child]) => [
      key,
      () => child({ state, providers }),
    ]),
  ) as {
    [K in keyof TChildren]: () => string;
  };
};

export const createComponent = <
  TProviders extends Record<string, any> = {},
>(name: string) => {
  let state: object | undefined;
  let actions: Record<string, (...args: any[]) => void> = {};
  let templateFn:
    | ((
      ctx: { state: any; actions: any; sideEffects: any; children: any },
    ) => string)
    | null = null;
  let sideEffects: Record<string, () => void> = {};
  let children: Record<string, () => void> = {}; // Added children
  let providers: TProviders | undefined;

  // ... rest of createComponent ...

  const addProvider = <P extends TProviders>(newProviders: P) => {
    providers = newProviders;

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
            throw new Error("Providers required before side effects.");
          }

          sideEffects = {
            ...sideEffects,
            ...initializeSideEffects(
              sideEffectsObj,
              state as TState,
              providers,
            ),
          };

          const addChildren = <
            TChildren extends Record<
              string,
              (ctx: SideEffectCtx<TState, P>) => void
            >,
          >(
            childrenObj: TChildren,
          ) => {
            if (!providers) {
              throw new Error("Providers required before children.");
            }

            children = {
              ...children,
              ...initializeChildren(childrenObj, state as TState, providers),
            };

            const setTemplate = (
              fn: (ctx: {
                state: TState;
                actions: Record<keyof TActions, string>;
                sideEffects: Record<keyof TSideEffects, string>;
                children: Record<keyof TChildren, string>;
              }) => string,
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
                    JSON.stringify({ key, name })
                  }' style="display: inline;">${value}</span>`;
                });
                const wrappedActions = wrap(actions, (key) => {
                  return `${name}.render(${name}.actions.${
                    String(key)
                  }(${name}),'${name}');`;
                });
                const wrappedSideEffects = wrap(sideEffects, (key) => {
                  return `${name}.sideEffects.${String(key)}()`;
                });
                // @ts-ignore
                const wrappedChildren = wrap(children, (key) => {
                  return children[key]();
                });
                const template = () => {
                  const scriptState = `state: ${
                    JSON.stringify(state, null, 1)
                  }\n`;
                  const scriptActions = `actions: {\n${
                    Object.keys(actions).map((key) => {
                      return `${key}: ${actions[key].toString()},`;
                    }).join("\n")
                  }\n}`;

                  const scriptSideEffects = `sideEffects: {\n${
                    Object.keys(sideEffects).map((key) => {
                      return `${key}: ${sideEffects[key].toString()},`;
                    }).join("\n")
                  }\n}`;
                  const scriptProviders = `providers: {\n${
                    Object.keys(providers!).map((key) => {
                      return `${key}: ${providers![key].toString()},`;
                    }).join("\n")
                  }\n}`;

                  const script = `<script>\n 
const ${name} = {\n${scriptState},\n${scriptActions},\n${
                    true ? "" : scriptSideEffects
                  }\nrender: function(updatedState,caller) {
if('${name}' !== caller){return}
${name}.state = {...${name}.state,  ...updatedState}
  document.querySelectorAll("[moo]").forEach((el) => {
    const mooConfig = JSON.parse(el.getAttribute("moo"));
    const key = mooConfig.key;
    if (key && key in ${name}.state && mooConfig.name === '${name}') {
      el.textContent = ${name}.state[key];
    }
  });}}


</script>\n`;
                  return [
                    script,
                    templateFn!({
                      state: wrappedState,
                      actions: wrappedActions,
                      sideEffects: wrappedSideEffects,
                      children: wrappedChildren,
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

          return { addChildren }; // Now returns addChildren instead of setTemplate
        };

        return { addSideEffects };
      };

      return { addActions };
    };

    return { setState };
  };

  return { addProvider };
};

// Updated RenderedComponent type

// type AnyComponent = RenderedComponent<
//   object, // The state can be any object
//   Record<string, (...args: any[]) => void>, // The actions can be any set of functions
//   Record<string, () => void>, // The sideEffects can be any set of functions
//   Record<string, () => void>, // The sideEffects can be any set of functions
//   Record<string, any> | undefined // Providers can be any object or undefined
// >;
// type RenderedComponent<
//   TState extends object,
//   TActions extends Record<string, (...args: any[]) => any>,
//   TSideEffects extends Record<string, () => void>,
//   TChildren extends Record<string, () => void>, // Added children type
//   TProviders extends Record<string, any> | undefined = undefined,
// > = {
//   state: TState;
//   actions: {
//     [K in keyof TActions]: (...args: ActionArgs<TActions[K]>) => void;
//   };
//   sideEffects: { [K in keyof TSideEffects]: () => void };
//   children: { [K in keyof TChildren]: () => void }; // Added children
//   providers: TProviders;
//   template: () => string;
// };

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
