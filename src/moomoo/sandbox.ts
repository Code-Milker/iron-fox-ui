import { BuilderStep, createBuilderFactory } from "./builder.ts";

/**
 * Helper type to update the context and determine the next allowed method.
 */
type NextComponentMethod<
  TContext,
  NewKey extends string,
  NewValue,
  NextStep extends keyof ComponentMethods<any>,
> = BuilderStep<
  ComponentMethods<TContext & { [K in NewKey]: NewValue }>,
  NextStep
>;

export interface ComponentMethods<TContext> {
  setState: <TState extends object>(
    stateFn: () => TState,
  ) => NextComponentMethod<TContext, "state", TState, "addActions">;
  addActions: <
    TState extends TContext extends { state: infer S } ? S : never,
    TActions extends Record<
      string,
      (ctx: TContext, ...args: any[]) => Partial<TState>
    >,
  >(
    actions: TActions,
  ) => NextComponentMethod<TContext, "actions", TActions, "addSideEffects">;
  addSideEffects: <
    TSideEffects extends Record<string, (ctx: TContext) => void>,
  >(
    sideEffects: TSideEffects,
  ) => NextComponentMethod<
    TContext,
    "sideEffects",
    TSideEffects,
    "addChildren"
  >;
  addChildren: <TChildren extends Record<string, (ctx: TContext) => string>>(
    children: TChildren,
  ) => NextComponentMethod<TContext, "children", TChildren, "setTemplate">;
  setTemplate: (
    templateFn: (ctx: TContext) => string,
  ) => { build(): Component<TContext> };
}

export interface Component<TContext> {
  ctx: TContext;
  render(): string;
}

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
    const newContext = { ...context, children };
    return { nextContext: newContext, nextStep: "setTemplate" };
  },
  setTemplate: (context, templateFn: (ctx: any) => string) => {
    return {
      nextContext: context,
      nextStep: undefined,
      builder: (_ctx: any) => ({
        build: () => ({
          ctx: { ...context },
          render: () => templateFn(context),
        }),
      }),
    };
  },
};

// Create the component builder factory.
// The initial method is "addProvider" (which takes an object of providers),
// and the next allowed step is "setState".
export const createComponent2 = createBuilderFactory<
  {},
  "addProvider",
  Record<string, any>,
  "setState",
  ComponentMethods<{}>
>({
  initialMethod: "addProvider",
  nextStep: "setState",
  initialContextUpdater: (context, providers) => ({ ...context, providers }),
  steps: componentStepMap,
});

// ---------------------------------------------------------
// Page Builder
// ---------------------------------------------------------

export interface PageMethods<TContext> {
  addRoutes: <TRoutes extends string[]>(
    routes: TRoutes,
  ) => BuilderStep<PageMethods<TContext & { routes: TRoutes }>, "setTemplate">;
  setTemplate: (template: string) => { build(): Page<TContext> };
}

export interface Page<TContext> {
  ctx: TContext;
  render(): string;
}

const pageStepMap: {
  [K in keyof Omit<PageMethods<any>, "addLayout">]: (
    context: any,
    arg: any,
  ) => {
    nextContext: any;
    nextStep: keyof Omit<PageMethods<any>, "addLayout"> | undefined;
    builder?: (ctx: any) => any;
  };
} = {
  addRoutes: (context, routes: string[]) => {
    const newContext = { ...context, routes };
    return { nextContext: newContext, nextStep: "setTemplate" };
  },
  setTemplate: (context, template: string) => {
    return {
      nextContext: context,
      nextStep: undefined,
      builder: (_ctx: any) => ({
        build: () => ({
          ctx: { ...context },
          render: () => template,
        }),
      }),
    };
  },
};

// Create the page builder factory.
// The initial method is "addLayout" (which takes a layout string),
// and the next allowed step is "addRoutes".
export const createPage = createBuilderFactory<
  {},
  "addLayout",
  string,
  "addRoutes",
  PageMethods<{}>
>({
  initialMethod: "addLayout",
  nextStep: "addRoutes",
  initialContextUpdater: (context, layout) => ({ ...context, layout }),
  steps: pageStepMap,
});

// =========================================================
// Usage Examples
// =========================================================

// Using the component builder:
const component = createComponent2("app")
  .addProvider({ apiURL: "https://example.com" })
  .setState(() => ({ counter: 0, text: "" }))
  .addActions({
    increment: (ctx) => ({ counter: ctx.state.counter + 1 }),
    setText: (ctx, newText: string) => ({ text: newText }),
  })
  .addSideEffects({})
  .addChildren({ hey: () => "child value" })
  .setTemplate((ctx: any) =>
    `Counter: ${ctx.state.counter}, Child: ${ctx.children.hey()}`
  )
  .build();

// Using the page builder:
const page = createPage("home")
  .addLayout("main-layout")
  .addRoutes(["/home", "/about"])
  .setTemplate("<div>Home Page</div>")
  .build();

console.log(component);
console.log(page);
