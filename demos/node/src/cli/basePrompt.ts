import * as ora from 'ora';
import { State } from "./state";

interface Result {
  next?: Prompt;
  error?: Error;
  back?: true;
  exit?: true;
}

export interface Config {
  label: string;
}

export type PromptRT = Prompt | null | void | typeof $ExitSignal;

export const $ExitSignal = Symbol("exit");

/**
 * Base for all Prompts
 * define interface and any shared functionality
 */
export abstract class Prompt {
  /**
   * _label can be a static string or dynamic function that returns a string
   */
  abstract readonly _label: string | { (state: State): string; };
  /**
   * output to the terminal, return a Prompt Return Type (PromptRT)
   * called internally by `run()`
   */
  abstract prompt(app: State, config: Config): Promise<PromptRT>;

  /**
   * get the desired label
   */
  label(state: State) {
    return typeof this._label === "function"
      ? this._label(state)
      : this._label;
  }

  /**
   * handle prompting and transforming the PromptRT into a Result object
   */
  async run(app: State, config: Config): Promise<Result> {
    try {
      // output message / headers / etc
      const result = await this.prompt(app, config);

      if (result instanceof Prompt) {
        return { next: result };
      }

      if (result === $ExitSignal) {
        return { exit: true };
      }

      if (result === null || result === undefined) {
        return { back: true };
      }

      return { error: new Error(`unexpected result: ${typeof result}`) };
    }
    catch (e) {
      const error = e instanceof Error ? e : new Error("Unknown Error");
      return { error };
    }
  }

  /**
   * helper to run async code
   * shows spinner while waiting
   */
  protected async runAsync(state: State, delegate: (state: State) => Promise<PromptRT>) {
    const spinner = ora(this.label(state)).start();
    let result;

    try {
      result = await delegate(state);
      spinner.succeed();
    }
    catch (e) {
      const err = e instanceof Error ? e : new Error("Unknown error");
      spinner.fail(err.message);
    }

    spinner.stop();
    return result ?? null;
  }
}
