// =========================================================
// Component Builder (Derived Solely from Builder Code)
// with Original Rendering Logic Preserved
// =========================================================

import { BuilderStep, createBuilderFactory } from "./builder.ts";

// -----------------------------------------------------------------
// Helper: wrap
// -----------------------------------------------------------------
function wrap<T>(
  obj: T,
  markdownFn: (key: keyof T, value: T[keyof T]) => string,
): Record<keyof T, string> {
  return Object.keys(obj).reduce((acc, key) => {
    const typedKey = key as keyof T;
    acc[typedKey] = markdownFn(typedKey, obj[typedKey]);
    return acc;
  }, {} as Record<keyof T, string>);
}

// -----------------------------------------------------------------
// Inline Initializer for Children
// -----------------------------------------------------------------
/**
 * Transforms an object of children functions into an object
 * where each function, when invoked, receives a context object
 * containing the state's and providers.
 */
const initializeChildren = <
  TState extends object,
  TProviders extends Record<string, any>,
  TChildren extends Record<
    string,
    (ctx: { state: TState; providers: TProviders }) => string
  >,
>(
  childrenObj: TChildren,
  state: TState,
  providers: TProviders,
): { [K in keyof TChildren]: () => string } => {
  return Object.fromEntries(
    Object.entries(childrenObj).map(([key, child]) => [
      key,
      () => child({ state, providers }),
    ]),
  ) as { [K in keyof TChildren]: () => string };
};

// -----------------------------------------------------------------
// Component Builder Interfaces
// -----------------------------------------------------------------

export interface ComponentMethods<TContext> {
  setState: <TState extends object>(
    stateFn: () => TState,
  ) => BuilderStep<
    ComponentMethods<TContext & { state: TState }>,
    "addActions"
  >;

  addActions: <
    TState extends TContext extends { state: infer S } ? S : never,
    TActions extends Record<
      string,
      (ctx: TContext, ...args: any[]) => Partial<TState>
    >,
  >(
    actions: TActions,
  ) => BuilderStep<
    ComponentMethods<TContext & { actions: TActions }>,
    "addSideEffects"
  >;

  addSideEffects: <
    TSideEffects extends Record<string, (ctx: TContext) => void>,
  >(
    sideEffects: TSideEffects,
  ) => BuilderStep<
    ComponentMethods<TContext & { sideEffects: TSideEffects }>,
    "addChildren"
  >;

  addChildren: <
    TChildren extends Record<
      string,
      (ctx: { state: any; providers: any }) => string
    >,
  >(
    children: TChildren,
  ) => BuilderStep<
    ComponentMethods<
      TContext & { children: { [K in keyof TChildren]: () => string } }
    >,
    "setTemplate"
  >;

  setTemplate: (
    templateFn: (ctx: {
      state: any;
      actions: any;
      sideEffects: any;
      children: any;
    }) => string,
  ) => { build(): Component<TContext> };
}

export interface Component<TContext> {
  ctx: TContext;
  render(): string;
}

// -----------------------------------------------------------------
// Component Step Map
// -----------------------------------------------------------------

const componentStepMap: {
  [K in keyof Omit<ComponentMethods<any>, "addProvider">]: (
    context: any,
    arg: any,
  ) => {
    nextContext: any;
    nextStep: keyof Omit<ComponentMethods<any>, "addProvider"> | undefined;
    builder?: (ctx: any) => any;
  };
} = {
  setState: (context, stateFn: () => any) => {
    const newContext = { ...context, state: stateFn() };
    return { nextContext: newContext, nextStep: "addActions" };
  },
  addActions: (context, actions) => {
    const newContext = { ...context, actions };
    return { nextContext: newContext, nextStep: "addSideEffects" };
  },
  addSideEffects: (context, sideEffects) => {
    const newContext = { ...context, sideEffects };
    return { nextContext: newContext, nextStep: "addChildren" };
  },
  addChildren: (context, children) => {
    if (!("state" in context)) {
      throw new Error("State must be initialized before adding children.");
    }
    if (!("providers" in context)) {
      throw new Error("Providers must be set before adding children.");
    }
    const newContext = {
      ...context,
      children: initializeChildren(children, context.state, context.providers),
    };
    return { nextContext: newContext, nextStep: "setTemplate" };
  },
  setTemplate: (context, templateFn: (ctx: any) => string) => {
    return {
      nextContext: context,
      nextStep: undefined,
      builder: (_ctx: any) => ({
        build: () => {
          const { state, actions, sideEffects, children, providers, name } =
            context;

          if (!state) {
            throw new Error("State is not initialized. Use setState first.");
          }

          if (!providers) {
            throw new Error("Providers are not set. Use addProvider first.");
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
          const wrappedChildren = wrap(children, (key) => {
            return children[key]();
          });
          const template = () => {
            const scriptState = `state: ${JSON.stringify(state, null, 1)}\n`;
            const scriptActions = `actions: {\n${
              Object.keys(actions)
                .map((key) => `${key}: ${actions[key].toString()},`)
                .join("\n")
            }\n}`;
            const scriptSideEffects = `sideEffects: {\n${
              Object.keys(sideEffects)
                .map((key) => `${key}: ${sideEffects[key].toString()},`)
                .join("\n")
            }\n}`;
            const scriptProviders = `providers: {\n${
              Object.keys(providers)
                .map((key) => `${key}: ${providers[key].toString()},`)
                .join("\n")
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
              templateFn({
                state: wrappedState,
                actions: wrappedActions,
                sideEffects: wrappedSideEffects,
                children: wrappedChildren,
              }),
            ].join("");
          };
          return {
            ctx: { ...context },
            render: () => template(),
          };
        },
      }),
    };
  },
};

// -----------------------------------------------------------------
// Component Builder Factory
// -----------------------------------------------------------------

/**
 * The component builder starts with the `addProvider` method.
 * It requires a providers object and also uses the provided name.
 */
export const createComponent = createBuilderFactory<
  { name: string; providers?: Record<string, any> },
  "addProvider",
  Record<string, any>,
  "setState",
  ComponentMethods<{ name: string; providers: Record<string, any> }>
>({
  initialMethod: "addProvider",
  nextStep: "setState",
  initialContextUpdater: (context, providers) => ({
    ...context,
    providers,
  }),
  steps: componentStepMap,
})("app");

// -----------------------------------------------------------------
// Usage Example
// -----------------------------------------------------------------

const component = createComponent
  .addProvider({ apiURL: "https://example.com" })
  .setState(() => ({ counter: 0, text: "" }))
  .addActions({
    increment: (ctx) => ({ counter: ctx.state.counter + 1 }),
    setText: (ctx, newText: string) => ({ text: newText }),
  })
  .addSideEffects({
    log: (ctx) => {
      console.log("Side effect: state is", ctx.state);
    },
  })
  .addChildren({
    header: (ctx) => `<h1>Counter: ${ctx.state.counter}</h1>`,
  })
  .setTemplate((ctx) =>
    `<div>
      ${ctx.children.header}
      <div>Actions: ${JSON.stringify(ctx.actions)}</div>
    </div>`
  )
  .build();

console.log(component);
console.log(component.render());
