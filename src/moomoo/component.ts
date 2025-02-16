import { BuilderStep, createBuilderFactory, wrap } from "./builder.ts";
import { generateRandomId } from "./moo-moo.ts";

// -----------------------------------------------------------------
// Helper: tagBindingsWithRemoval
// -----------------------------------------------------------------

function tagBindingsWithRemoval(
  html: string,
  bindings: Record<string, Record<string, any>>,
  componentName: string,
): string {
  const bindingTags = Object.keys(bindings);
  if (!bindingTags.length) return html;
  const tagPattern = bindingTags.join("|");

  // --- Pass 1: Process attribute bindings ---
  const attrRegex = new RegExp(
    `<([a-zA-Z0-9\\-]+)([^>]*?)\\s+(\\w+)=("([^"]*?<(?:(?:${tagPattern}))>\\s*([^<\\s]+)\\s*<\\/(?:(?:${tagPattern}))>[^"]*?)")([^>]*?)(\\/?)>`,
    "g",
  );
  html = html.replace(
    attrRegex,
    (
      match,
      tagName,
      beforeAttrs,
      attrName,
      quotedValue,
      innerValue,
      bindingKey,
      afterAttrs,
      selfClosingSlash,
    ) => {
      const key = bindingKey.trim();
      const bindingTagMatch = new RegExp(`<(${tagPattern})>`).exec(innerValue);
      if (!bindingTagMatch) return match;
      const tagType = bindingTagMatch[1];
      const replacementValue =
        bindings[tagType] && bindings[tagType][key] !== undefined
          ? bindings[tagType][key]
          : key;
      const newInnerValue = innerValue.replace(
        new RegExp(
          `<(?:${tagPattern})>\\s*${bindingKey}\\s*<\\/(?:(?:${tagPattern}))>`,
        ),
        replacementValue,
      );
      const mooAttr =
        ` data-moo="{type: 'attribute', tag: '${tagType}', key: '${key}', id: '${componentName}'}"`;
      return `<${tagName}${beforeAttrs} ${attrName}="${newInnerValue}"${afterAttrs}${mooAttr}${selfClosingSlash}>`;
    },
  );

  // --- Pass 2: Process inner text bindings ---
  const textRegex = new RegExp(
    `(<([a-zA-Z0-9\\-]+)(?![^>]*\\bdata-moo\\s*=)[^>]*>)([^<]*?<(?:(?:${tagPattern}))>\\s*([^<\\s]+)\\s*<\\/(?:(?:${tagPattern}))>[^<]*)`,
    "g",
  );
  html = html.replace(
    textRegex,
    (match, startTag, tagName, textContent, bindingKey) => {
      const key = bindingKey.trim();
      const bindingTagMatch = new RegExp(`<(${tagPattern})>`).exec(textContent);
      if (!bindingTagMatch) return match;
      const tagType = bindingTagMatch[1];
      const replacementValue =
        bindings[tagType] && bindings[tagType][key] !== undefined
          ? bindings[tagType][key]
          : key;
      const newTextContent = textContent.replace(
        new RegExp(
          `<(?:${tagPattern})>\\s*${bindingKey}\\s*<\\/(?:(?:${tagPattern}))>`,
        ),
        replacementValue,
      );
      const mooAttr =
        ` data-moo="{type: 'value', tag: '${tagType}', key: '${key}', id: '${componentName}_${generateRandomId()}'}"`;
      const newStartTag = startTag.replace(/>$/, `${mooAttr}>`);
      return newStartTag + newTextContent;
    },
  );

  // --- Pass 3: Fallback removal for any remaining binding tags ---
  const removeBindingRegex = new RegExp(
    `<(?:${tagPattern})>\\s*([^<\\s]+)\\s*<\\/(?:${tagPattern})>`,
    "g",
  );
  html = html.replace(removeBindingRegex, (_match, key) => {
    const trimmedKey = key.trim();
    for (const tag of bindingTags) {
      if (bindings[tag] && bindings[tag][trimmedKey] !== undefined) {
        return bindings[tag][trimmedKey];
      }
    }
    return trimmedKey;
  });

  return html;
}

// -----------------------------------------------------------------
// Inline Initializer for Children
// -----------------------------------------------------------------

const initializeChildren = <
  TState extends object,
  TProviders extends Record<string, any>,
  TSideEffects extends Record<string, any>,
  TChildren extends Record<
    string,
    (
      ctx: { state: TState; providers: TProviders; sideEffects: TSideEffects },
    ) => string
  >,
>(
  childrenObj: TChildren,
  state: TState,
  providers: TProviders,
  sideEffects: TSideEffects,
): { [K in keyof TChildren]: () => string } => {
  return Object.fromEntries(
    Object.entries(childrenObj).map(([key, child]) => [
      key,
      () => child({ state, providers, sideEffects }),
    ]),
  ) as { [K in keyof TChildren]: () => string };
};

// -----------------------------------------------------------------
// Helper Types for Template Context
// -----------------------------------------------------------------

type WrapReturn<T> = { [K in keyof T]: string };

type WrappedAction<T> = T extends (ctx: any, ...args: infer A) => any
  ? (...args: A) => string
  : never;
type WrappedActions<T> = { [K in keyof T]: WrappedAction<T[K]> };

type WrappedSideEffect<T> = T extends (ctx: any, ...args: infer A) => any
  ? (...args: A) => string
  : never;
type WrappedSideEffects<T> = { [K in keyof T]: WrappedSideEffect<T[K]> };

type TaggedContext<T> = T extends {
  state: infer S;
  actions: infer A;
  sideEffects: infer SE;
  children: infer C;
} ? Omit<T, "state" | "actions" | "sideEffects" | "children"> & {
    state: WrapReturn<S>;
    actions: WrappedActions<A>;
    sideEffects: WrappedSideEffects<SE>;
    children: WrapReturn<C>;
  }
  : T;

// -----------------------------------------------------------------
// Helper Functions to Create Wrapped Functions (with escaping)
// -----------------------------------------------------------------

function escapeAttribute(str: string): string {
  return str.replace(/"/g, "&quot;");
}

function wrapAction<T extends (ctx: any, ...args: any[]) => any>(
  _action: T,
  nameWithId: string,
  key: string,
): WrappedAction<T> {
  return ((...args: any[]) => {
    const extraParams = args.map((a) => JSON.stringify(a)).join(", ");
    let code: string;
    if (extraParams) {
      code =
        `render(${nameWithId},${nameWithId}.actions.${key}(${nameWithId},${extraParams}),${nameWithId})`;
    } else {
      code = `render(${nameWithId}.actions.${key}(${nameWithId}, event))`;
    }
    return escapeAttribute(code);
  }) as WrappedAction<T>;
}

function wrapSideEffect<T extends (ctx: any, ...args: any[]) => any>(
  _sideEffect: T,
  nameWithId: string,
  key: string,
): WrappedSideEffect<T> {
  return ((...args: any[]) => {
    const extraParams = args.map((a) => JSON.stringify(a)).join(", ");
    let code: string;
    if (extraParams) {
      code =
        `${nameWithId}.sideEffects.${key}(${nameWithId}, event, ${extraParams});`;
    } else {
      code = `${nameWithId}.sideEffects.${key}(${nameWithId}, event);`;
    }
    return escapeAttribute(code);
  }) as WrappedSideEffect<T>;
}

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
    TSideEffects extends Record<
      string,
      (ctx: TContext, ...args: any[]) => void
    >,
  >(
    sideEffects: TSideEffects,
  ) => BuilderStep<
    ComponentMethods<TContext & { sideEffects: TSideEffects }>,
    "addChildren"
  >;

  addChildren: <
    TChildren extends Record<
      string,
      (ctx: TContext) => string
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
    templateFn: (ctx: TaggedContext<TContext>) => string,
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
    if (!("sideEffects" in context)) {
      throw new Error("SideEffects must be set before adding children.");
    }
    const newContext = {
      ...context,
      children: initializeChildren(
        children,
        context.state,
        context.providers,
        context.sideEffects,
      ),
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
          const nameWithId = `${name}_${generateRandomId()}`;
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
          // @ts-ignore
          const tagState = wrap(state, (key) => `<state>${key}</state>`);
          // @ts-ignore
          const tagChildren = wrap(
            children,
            // @ts-ignore
            (key) => `<children>${key}</children>`,
          );
          const wrappedActions = {} as WrappedActions<typeof actions>;
          for (const key in actions) {
            wrappedActions[key] = wrapAction(actions[key], nameWithId, key);
          }
          const wrappedSideEffects = {} as WrappedSideEffects<
            typeof sideEffects
          >;
          for (const key in sideEffects) {
            wrappedSideEffects[key] = wrapSideEffect(
              sideEffects[key],
              nameWithId,
              key,
            );
          }
          const taggedTemplate = templateFn({
            state: tagState,
            actions: wrappedActions,
            sideEffects: wrappedSideEffects,
            children: tagChildren,
          });
          const template = () => {
            const indent = (str: any, spaces = 2) =>
              str.split("\n").map((line: any) => " ".repeat(spaces) + line)
                .join("\n");
            const formatObject = (obj: any) =>
              Object.entries(obj)
                .map(([k, v]) => `  ${k}: ${v?.toString()},`)
                .join("\n");
            const scriptState = `state: ${JSON.stringify(state, null, 2)},`;
            const scriptActions = actions && Object.keys(actions).length
              ? `actions: {\n${indent(formatObject(actions), 2)}\n},`
              : "";
            const scriptSideEffects =
              sideEffects && Object.keys(sideEffects).length
                ? `sideEffects: {\n${indent(formatObject(sideEffects), 2)}\n},`
                : "";
            const scriptProviders = providers && Object.keys(providers).length
              ? `providers: {\n${indent(formatObject(providers), 2)}\n},`
              : "";
            const script = `
<script>
const ${nameWithId} = {
  ${scriptState}
  ${scriptActions}
  ${scriptSideEffects}
  ${scriptProviders}
};
</script>
`.replace(/^\s*\n/gm, "");
            const finalHtml = tagBindingsWithRemoval(
              taggedTemplate,
              {
                state,
                action: wrappedActions,
                sideEffect: wrappedSideEffects,
                children: wrap(children, (key) => children[key]()),
              },
              nameWithId,
            );
            return [script, finalHtml].join("\n");
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
});
