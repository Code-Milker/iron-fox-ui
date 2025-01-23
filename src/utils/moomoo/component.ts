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
  let templateFn: ((ctx: { state: any; actions: any }) => string) | null = null;
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
              sideEffectsObj,
              state as TState,
              providers, // Pass providers when initializing side effects
            ),
          };

          const setTemplate = (
            fn: (ctx: { state: TState; actions: TActions }) => string,
          ) => {
            templateFn = fn;

            const build = () => {
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
                },
                sideEffects: sideEffects as {
                  [K in keyof TSideEffects]: () => void;
                },
                providers, // Include providers for reference or debugging
                template: () => templateFn!({ state, actions }),
              };
            };

            return { build };
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
