import { BuilderStep, createBuilderFactory, wrap } from "./builder.ts";
import { generateRandomId } from "./moo-moo.ts";

// -----------------------------------------------------------------
// Helper: wrap
// -----------------------------------------------------------------

function tagBindingsWithRemoval(
  html: string,
  bindings: Record<string, Record<string, any>>,
  componentName: string,
): string {
  // Get the dynamic list of binding tag names from the keys of the bindings object.
  const bindingTags = Object.keys(bindings);
  if (!bindingTags.length) return html; // Nothing to do

  // Build a dynamic pattern like: state|children|actions
  const tagPattern = bindingTags.join("|");

  // --- Pass 1: Process attribute bindings ---
  // Updated regex:
  //   Group 1: element tag name
  //   Group 2: everything before the attribute we care about
  //   Group 3: attribute name
  //   Group 4: the entire quoted attribute value (including the quotes)
  //   Group 5: the inner attribute value (without quotes)
  //   Group 6: the binding key extracted from within the binding tag
  //   Group 7: any text after the attribute (up to an optional self-closing slash)
  //   Group 8: an optional self-closing slash ("/")
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
      quotedValue, // with surrounding quotes
      innerValue, // inner attribute value (without quotes)
      bindingKey,
      afterAttrs,
      selfClosingSlash, // group 8: optional slash
    ) => {
      const key = bindingKey.trim();
      // Identify which binding tag was used.
      const bindingTagMatch = new RegExp(`<(${tagPattern})>`).exec(innerValue);
      if (!bindingTagMatch) return match;
      const tagType = bindingTagMatch[1]; // e.g. "state" or "children"
      // Look up the replacement value from the corresponding binding object.
      const replacementValue =
        bindings[tagType] && bindings[tagType][key] !== undefined
          ? bindings[tagType][key]
          : key;
      // Replace the binding tag with the replacement value within the inner value.
      const newInnerValue = innerValue.replace(
        new RegExp(
          `<(?:${tagPattern})>\\s*${bindingKey}\\s*<\\/(?:(?:${tagPattern}))>`,
        ),
        replacementValue,
      );
      // Build the data-moo attribute with type 'attribute'
      const mooAttr =
        ` data-moo="{type: 'attribute', tag: '${tagType}', key: '${key}', id: '${componentName}_${generateRandomId()}'}"`;
      // Rebuild the tag, reinserting the optional self-closing slash before the final ">"
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
      // Identify which binding tag we matched from the text.
      const bindingTagMatch = new RegExp(`<(${tagPattern})>`).exec(textContent);
      if (!bindingTagMatch) return match;
      const tagType = bindingTagMatch[1];
      const replacementValue =
        bindings[tagType] && bindings[tagType][key] !== undefined
          ? bindings[tagType][key]
          : key;
      // Replace the binding tag with the corresponding value.
      const newTextContent = textContent.replace(
        new RegExp(
          `<(?:${tagPattern})>\\s*${bindingKey}\\s*<\\/(?:(?:${tagPattern}))>`,
        ),
        replacementValue,
      );
      // Build the data-moo attribute with type 'value'
      const mooAttr =
        ` data-moo="{type: 'value', tag: '${tagType}', key: '${key}', id: '${componentName}_${generateRandomId()}'}"`;
      // Insert the data-moo attribute into the start tag.
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
    templateFn: (ctx: TContext) => string,
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

          const tagState = wrap(state, (key, value) => {
            return `<state>${key.toString()}</state>`;
          });

          const tagAction = wrap(actions, (key, value) => {
            return `<action>${key.toString()}</action>`;
          });

          const tagSideEffect = wrap(sideEffects, (key, value) => {
            return `<sideEffects>${key.toString()}</sideEffects>`;
          });

          const tagChildren = wrap(children, (key, value) => {
            return `<children>${key.toString()}</children>`;
          });
          const taggedTemplate = templateFn({
            state: tagState,
            actions: tagAction,
            sideEffects: tagSideEffect,
            children: tagChildren,
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
            // console.log(templateFn({
            //   state: state,
            //   actions: actions,
            //   sideEffects: sideEffects,
            //   children: children,
            // }));
            const wrappedActions = wrap(actions, (key) => {
              return `${name}.render(${name}.actions.${
                String(key)
              }(${name}),'${name}');`;
            });
            const wrappedSideEffects = wrap(sideEffects, (key) => {
              return `${name}.sideEffects.${String(key)}()`;
            });
            //TODO: include children struct on return
            const wrappedChildren = wrap(children, (key) => {
              return children[key]();
            });
            const script = `
          <script>
          const ${name} = {
            ${scriptState},
            ${scriptActions},
            ${true ? "" : scriptSideEffects}
            render: function(updatedState, caller) {
              if ('${name}' !== caller) {
                return;
              }
              ${name}.state = { ...${name}.state, ...updatedState };
              document.querySelectorAll("[moo]").forEach((el) => {
                const mooConfig = JSON.parse(el.getAttribute("moo"));
                const key = mooConfig.key;
                if (key && key in ${name}.state && mooConfig.name === '${name}') {
                  el.textContent = ${name}.state[key];
                }
              });
            }
          }
          </script>
          `;

            const markdown = tagBindingsWithRemoval(taggedTemplate, {
              state,
              actions: wrappedActions,
              children: wrappedChildren,
              sideEffects: wrappedSideEffects,
            }, name);
            const template = [
              script,
              markdown,
            ].join("\n");
            return template;
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
});
