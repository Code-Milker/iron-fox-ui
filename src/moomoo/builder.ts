// =========================================================
// Utility Types & Generic Next-Builder Helper
// =========================================================
export type BuilderStep<TMethods, TAllowed extends keyof TMethods = never> =
  Pick<
    TMethods,
    TAllowed
  >;

/**
 * A generic helper that creates a builder exposing only the allowed method.
 *
 * @param context The current context.
 * @param allowedStep The allowed method key.
 * @param stepMap A mapping from each allowed method to its implementation.
 */
function createNextBuilder<TContext, Methods, K extends keyof Methods>(
  context: TContext,
  allowedStep: K,
  stepMap: {
    [P in keyof Methods]: (
      context: any,
      arg: any,
    ) => {
      nextContext: any;
      nextStep: keyof Methods | undefined;
      // If provided, this callback returns the terminal builder.
      builder?: (ctx: any) => any;
    };
  },
): Pick<Methods, K> {
  const builder: Partial<Methods> = {};
  (builder as any)[allowedStep] = (arg: any) => {
    const { nextContext, nextStep, builder: nextBuilderFn } = stepMap
      [allowedStep](
        context,
        arg,
      );
    if (nextBuilderFn) {
      return nextBuilderFn(nextContext);
    }
    if (!nextStep) {
      return;
    }
    return createNextBuilder(nextContext, nextStep, stepMap);
  };
  return builder as Pick<Methods, K>;
}

// =========================================================
// Builder Factory Generic Helper
// =========================================================

/**
 * Configuration for a builder factory.
 *
 * TContext - initial context type,
 * TInitialMethodKey - the key name of the initial method,
 * TInitialMethodArg - the argument type for that initial method,
 * TNextStep - the next allowed step key after the initial method,
 * TMethods - the rest of the builder methods.
 */
interface BuilderFactoryConfig<
  TContext,
  TInitialMethodKey extends string,
  TInitialMethodArg,
  TNextStep extends keyof TMethods,
  TMethods,
> {
  initialMethod: TInitialMethodKey;
  nextStep: TNextStep;
  initialContextUpdater: (
    context: TContext,
    arg: TInitialMethodArg,
  ) => TContext;
  steps: {
    [K in keyof TMethods]: (
      context: any,
      arg: any,
    ) => {
      nextContext: any;
      nextStep: keyof TMethods | undefined;
      builder?: (ctx: any) => any;
    };
  };
}

/**
 * A generic factory that returns a builder-creator.
 */
export function createBuilderFactory<
  TContext,
  TInitialMethodKey extends string,
  TInitialMethodArg,
  TNextStep extends keyof TMethods,
  TMethods,
>(
  config: BuilderFactoryConfig<
    TContext,
    TInitialMethodKey,
    TInitialMethodArg,
    TNextStep,
    TMethods
  >,
) {
  return (name: string): BuilderStep<
    {
      [K in TInitialMethodKey]: (
        arg: TInitialMethodArg,
      ) => BuilderStep<TMethods, TNextStep>;
    },
    TInitialMethodKey
  > => {
    let context = {} as TContext;
    return {
      [config.initialMethod]: (arg: TInitialMethodArg) => {
        const newContext = config.initialContextUpdater(context, arg);
        return createNextBuilder(newContext, config.nextStep, config.steps);
      },
    } as any;
  };
}
