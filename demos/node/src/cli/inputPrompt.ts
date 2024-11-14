import { input } from "@inquirer/prompts";
import { Prompt, PromptRT } from "./basePrompt";
import { State } from "./state";

/**
 * Prompt for user input
 * then run handler for given input
 */
export class InputPrompt extends Prompt {
  constructor(
    public readonly _label: string | { (state: State): string; },
    public readonly handler: (value: string, app: State) => Promise<PromptRT>,
  ) {
    super();
  }

  async prompt(state: State) {
    const value = await input({ message: this.label(state) });

    return this.runAsync(state, () => this.handler(value, state));
  }
}
