//// =========================================================
// This file provides generic utility types and helper functions
// for creating step-based builder factories. The core idea is
// to allow a chain of method calls that update an internal context,
// where each call returns a builder exposing only the next allowed
// method. The file defines:
//
// 1. BuilderStep: a type that restricts a builder to only expose the
//    allowed method(s).
//
// 2. createNextBuilder: a generic helper that, given the current
//    context, an allowed method key, and a mapping of step implementations,
//    returns a builder exposing only that allowed method. Each method
//    call updates the context and advances the builder to the next step.
//
// 3. createBuilderFactory: a generic factory that creates a builder
//    creator. It accepts a configuration object that defines the initial
//    method and its context updater, as well as a mapping of subsequent
//    steps. This factory can be used to create builders for various domains
//    (e.g., components, pages) while preserving strong typing and inference
//    of the evolving context.
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
  return (name: string = `a${Math.ceil(Math.random() * 1000000)}`): BuilderStep<
    {
      [K in TInitialMethodKey]: (
        arg: TInitialMethodArg,
      ) => BuilderStep<TMethods, TNextStep>;
    },
    TInitialMethodKey
  > => {
    let context = { name } as TContext;
    return {
      [config.initialMethod]: (arg: TInitialMethodArg) => {
        const newContext = config.initialContextUpdater(context, arg);
        return createNextBuilder(newContext, config.nextStep, config.steps);
      },
    } as any;
  };
}

export function wrap<T>(
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
