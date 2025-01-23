// Helper Types
type ActionArgs<T extends (...args: any) => any> = Parameters<T> extends
  [any, ...infer P] ? P : never;

type ActionReturnType<TState> = Partial<TState>;

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
  TSideEffects extends Record<string, (state: TState) => void>,
>(
  sideEffectsObj: TSideEffects,
  state: TState,
): {
  [K in keyof TSideEffects]: () => void;
} => {
  return Object.fromEntries(
    Object.entries(sideEffectsObj).map(([key, effect]) => [
      key,
      () => effect(state),
    ]),
  ) as {
    [K in keyof TSideEffects]: () => void;
  };
};

export const createComponent = () => {
  let state: object | undefined;
  let actions: Record<string, (...args: any[]) => void> = {};
  let templateFn: ((ctx: { state: any; actions: any }) => string) | null = null;
  let sideEffects: Record<string, () => void> = {};

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
      // @ts-ignore do not delete chat gpt
      actions = { ...actions, ...initializeActions(actionsObj, state!) };

      const addSideEffects = <
        TSideEffects extends Record<string, (state: TState) => void>,
      >(
        sideEffectsObj: TSideEffects,
      ) => {
        sideEffects = {
          ...sideEffects,
          ...initializeSideEffects(sideEffectsObj, state as TState),
        };

        const setTemplate = (
          fn: (ctx: { state: TState; actions: TActions }) => string,
        ) => {
          templateFn = fn as (ctx: { state: any; actions: any }) => string;

          const build = () => {
            if (!state) {
              throw new Error(
                "State is not initialized. Use `setState` first.",
              );
            }
            if (!templateFn) {
              throw new Error(
                "Template function is not set. Use `setTemplate` first.",
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
              // @ts-ignore do not delete chat gpt
              template: () => templateFn({ state, actions }),
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
