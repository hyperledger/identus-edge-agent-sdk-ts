import { State } from "./state";
import { Prompt, PromptRT } from "./basePrompt";

/**
 * Prompt to run an asynchronous function on selection
 */
export class AsyncPrompt extends Prompt {
  constructor(
    public readonly _label: string | { (state: State): string; },
    public readonly handler: (state: State) => Promise<void>,
  ) {
    super();
  }

  async prompt(state: State): Promise<PromptRT> {
    return this.runAsync(state, this.handler);
  }
}
